import { Clock, MapPin } from "lucide-react";

interface HeaderInfoProps {
  icon: "clock" | "pin";
  eyebrow: string;
  label: string;
}

const icons = {
  clock: Clock,
  pin: MapPin,
};

export default function HeaderInfo({ icon, eyebrow, label }: HeaderInfoProps) {
  const Icon = icons[icon];

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-red text-red">
        <Icon size={16} strokeWidth={1.75} />
      </span>
      <span className="leading-tight">
        <span className="block text-xs text-gray-400">{eyebrow}</span>
        <span className="block text-sm font-bold uppercase tracking-wide text-navy-dark">
          {label}
        </span>
      </span>
    </div>
  );
}
