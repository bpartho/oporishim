import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function ValuePropositionSection() {
  return (
    <section className="w-full bg-[#EEF6FF] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl md:text-4xl font-semibold leading-relaxed text-slate-800 ">
          We excel at unlocking value through{" "}
          <span className="font-bold text-blue-800">
            digital product engineering.
          </span>{" "}
          We create an environment of continuous improvement and innovation to{" "}
          <span className="font-bold text-blue-800">
            deliver customer value, faster.
          </span>
        </p>

        {/* CTA wrapper */}
        <div className="mt-8 flex justify-center">
          {/* CTA Button */}
          <Link
            href="/about"
            className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    px-10
    py-4
    text-[18px]
    font-semibold
    text-[#0B2B5C]
    shadow-lg
    transition-all
    duration-300
    hover:bg-[#1E6FD9]
    hover:text-white
    hover:shadow-blue-500/30
    active:scale-[0.97]
  "
          >
            <span className="tracking-wide">More About Us</span>

            <MoveRight
              className="
      h-5 w-5
      transition-all
      duration-300
      opacity-70
      group-hover:translate-x-2
      group-hover:opacity-100
    "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
