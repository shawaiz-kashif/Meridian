interface SectionLabelProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionLabel({
  eyebrow,
  title,
  align = "left",
  light = false,
}: SectionLabelProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          light ? "text-red-300" : "text-gray-400"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-2xl font-extrabold uppercase tracking-tight md:text-3xl ${
          light ? "text-white" : "text-navy-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
