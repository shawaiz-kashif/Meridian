import nodemailer from "nodemailer";
import path from "node:path";
import { findService } from "@/lib/data";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e6ebf4;color:#5b6884;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e6ebf4;color:#0b1b3b;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceName: string;
  route?: string;
  message: string;
}) {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f8fc;font-family:Arial,Helvetica,sans-serif;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" align="center" style="width:560px;max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6ebf4;">
          <tr>
            <td align="center" style="padding:28px 32px;border-bottom:1px solid #e6ebf4;">
              <img src="cid:meridian-logo" alt="Meridian" width="160" style="display:block;" />
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <span style="display:inline-block;background:#cc1c1c;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:6px 14px;border-radius:999px;">New Quote Request</span>
              <h1 style="margin:16px 0 4px;font-size:20px;color:#0b1b3b;">${escapeHtml(fields.name)} wants a shipping quote</h1>
              <p style="margin:0 0 20px;color:#5b6884;font-size:14px;">Submitted via the Meridian website contact form.</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${row("Full name", fields.name)}
                ${row("Email", fields.email)}
                ${row("Company", fields.company)}
                ${row("Phone", fields.phone)}
                ${row("Service", fields.serviceName)}
                ${row("Route", fields.route)}
              </table>
              <p style="margin:24px 0 8px;color:#5b6884;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <div style="background:#f6f8fc;border-radius:12px;padding:16px 18px;color:#0b1b3b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(fields.message)}</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 32px;background:#0b1b3b;">
              <p style="margin:0;color:#bcd3ff;font-size:12px;">Meridian Logistics &middot; Mehran Logistics Centre, Karachi</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN: Record<string, number> = {
  name: 100,
  email: 200,
  company: 150,
  phone: 30,
  service: 80,
  route: 150,
  message: 5000,
};

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const history = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  history.push(now);
  submissionsByIp.set(ip, history);
  return history.length > RATE_LIMIT;
}

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean((body as Record<string, unknown>).website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean((body as Record<string, unknown>).name, MAX_LEN.name);
  const email = clean((body as Record<string, unknown>).email, MAX_LEN.email);
  const company = clean((body as Record<string, unknown>).company, MAX_LEN.company);
  const phone = clean((body as Record<string, unknown>).phone, MAX_LEN.phone);
  const service = clean((body as Record<string, unknown>).service, MAX_LEN.service);
  const route = clean((body as Record<string, unknown>).route, MAX_LEN.route);
  const message = clean((body as Record<string, unknown>).message, MAX_LEN.message);

  if (!name || !email || !service || !message) {
    return Response.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const serviceName =
    service === "multimodal" ? "Multimodal / Not sure" : findService(service)?.title ?? service;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Meridian Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      replyTo: email,
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        phone ? `Phone: ${phone}` : null,
        `Service of interest: ${serviceName}`,
        route ? `Route: ${route}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: buildEmailHtml({ name, email, company, phone, serviceName, route, message }),
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public", "images", "logo.png"),
          cid: "meridian-logo",
        },
      ],
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}
