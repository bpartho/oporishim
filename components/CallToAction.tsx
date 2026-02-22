"use client";

import { motion } from "framer-motion";
import NetworkBg from "./NetworkBg";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20">
      {/* WIDTH CONTROL */}
      <div className="relative mx-auto container overflow-hidden md:rounded-3xl bg-[#0B1340] px-6 py-20 md:px-12 lg:px-20">
        {/* Animated dots inside container */}
        <NetworkBg />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
          >
            Let&apos;s start something completely new together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-xl text-white/80"
          >
            Drop us a line, and we&apos;ll get in touch.
            <br />
            We&apos;ll see if we&apos;re a match and how we can help each other.
          </motion.p>

          <p>
            Drop us a line, and we&apos;ll get in touch. We&apos;ll see if
            we&apos;re a match and how we can help each other.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="#"
              className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    px-8
    py-3
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
              <span className="tracking-wide">Talk To Us</span>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
