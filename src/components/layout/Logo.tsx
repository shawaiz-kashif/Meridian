import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative h-full w-40 shrink-0 lg:w-[460px]">
      <Link
        href="/"
        className="absolute left-0 top-1/2 block -translate-y-1/2"
      >
        <Image
          src="/images/logo.png"
          alt="Meridian Logistics — Logistics Without Limits"
          width={220}
          height={72}
          className="h-32 w-auto lg:h-36"
          priority
        />
      </Link>
    </div>
  );
}
