"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      phone: data.get("phone"),
      service: data.get("service"),
      route: data.get("route"),
      message: data.get("message"),
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again later.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          Contact Us
        </span>
        <h1 className="mx-auto mt-5 max-w-xl text-2xl font-extrabold leading-tight text-navy-dark md:text-3xl">
          Need a quote? Share your details and we&apos;ll be in touch.
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-bold text-navy-dark">
            Full name <span className="text-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter Your Name"
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy-dark">
            Work email <span className="text-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your Email"
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-bold text-navy-dark">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Enter Company Name"
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-navy-dark">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter Phone Number"
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-bold text-navy-dark">
            Service of interest <span className="text-red">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark focus:border-navy focus:outline-none"
          >
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="multimodal">Multimodal / Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="route" className="block text-sm font-bold text-navy-dark">
            Origin → Destination
          </label>
          <input
            id="route"
            name="route"
            type="text"
            placeholder="Hong Kong → Los Angeles"
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-bold text-navy-dark">
            Message <span className="text-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Cargo type, weight/volume, timeline and any special handling..."
            className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 bg-red px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
            <Send size={16} />
          </button>

          {status === "success" && (
            <p className="text-sm font-semibold text-green-600">
              Thanks — your message has been sent. We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-semibold text-red">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
