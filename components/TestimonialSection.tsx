"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: `Oporishim is doing some magnificent work on our customer-facing website. We are very pleased with the interactions and outcome.`,
    name: "John Morrone",
    role: "CTO",
    company: "Football.com LLC",
    logo: "/images/logos/logo1.png",
    desc: "An Online Bidding Platform in the USA with more than 26 billion dollars' worth properties sold",
  },
  {
    id: 2,
    text: `They have a talented team and we continue to bank on them for this major long-term project.`,
    name: "Michael Ross",
    role: "Founder",
    company: "TradeSearch Australia",
    logo: "/images/logos/logo3.png",
    desc: "A recognized Australian-based trade platform helping businesses scale efficiently",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full my-10">
      {/* TWO PART LAYOUT */}
      <div className="flex flex-col lg:flex-row">
        {/* ================= LEFT PART ================= */}
        <div className="w-full bg-[#072B5A] py-20 lg:w-1/2">
          <div className="relative mx-auto max-w-xl px-6 text-center text-white lg:px-4 lg:text-left">
            {/* BIG QUOTE */}
            <span
              className="
    absolute
    left-1/2
    -top-12
    z-0
    -translate-x-1/2
    text-[120px]
    font-extrabold
    leading-none
    text-[#602D50]
    lg:-left-10
    lg:-top-12
    lg:translate-x-0
    lg:text-[170px]
  "
            >
              “
            </span>

            <h2 className="relative z-10 text-3xl font-extrabold md:text-4xl">
              What Clients
            </h2>

            <p className="mt-1 text-xl text-gray-200">Say About us?</p>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {testimonials[index].text}
            </p>

            <div className="mt-10 py-2">
              <p className="text-lg font-semibold text-red-500">
                {testimonials[index].name}
              </p>
              <p className="text-gray-200">{testimonials[index].role}</p>
              <p className="text-gray-200">{testimonials[index].company}</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PART ================= */}
        {/* NO BG COLOR — ONLY IMAGE */}
        <div className="relative h-[420px] w-full lg:h-[560px] lg:w-1/2">
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/testbg.jpg" // 👉 তোমার bg image
            alt="Office Meeting"
            fill
            priority
            className="object-cover"
          />

          {/* CENTER CARD (X + Y CENTER ON ALL DEVICES) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 w-[85%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-8 text-center shadow-2xl"
            >
              <Image
                src={testimonials[index].logo}
                alt="Client Logo"
                width={170}
                height={60}
                className="mx-auto"
              />

              <p className="mt-4 text-gray-600">{testimonials[index].desc}</p>

              <Link
                href="/case-studies"
                className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30"
              >
                <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />
                View Case Study →
              </Link>

              {/* DOTS */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-3 w-3 cursor-pointer rounded-full transition ${
                      index === i ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
