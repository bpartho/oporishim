"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/herobg.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            {/* One line heading */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Welcome to{" "}
              <span
                className="
            bg-linear-to-r
            from-[#5DB5EE]
            to-[#2A88F4]
            bg-clip-text
            text-transparent
          "
              >
                Oporishim
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-lg md:text-xl lg:text-3xl font-semibold text-white/80 leading-relaxed">
              Redefining lifestyle with{" "}
              <span
                className="
            bg-linear-to-r
            from-[#5DB5EE]
            to-[#2A88F4]
            bg-clip-text
            text-transparent
            font-semibold
          "
              >
                Technology, Innovation & Excellence
              </span>
            </p>

            {/* Description */}
            <p className="mt-6 text-white/70 text-sm md:text-lg lg:text-xl leading-relaxed">
              Cost-effective solutions to maximize brand reputation. Analyze and
              solve the right problem. Explore business process changes and
              synchronize.
            </p>

            {/* Button */}

            <Link
              href="/contact"
              className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    mt-8
    px-8
    py-4
    text-[16px]
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
              <span className="tracking-wide">TALK TO EXPERTS</span>

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
      </div>
    </section>
  );
}
