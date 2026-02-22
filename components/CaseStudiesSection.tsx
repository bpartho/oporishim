"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type StaticCase = {
  type: "static";
  title: string;
  highlight: string;
};

type HoverCase = {
  type?: never;
  icon: string;
  brand: string;
  title: string;
  desc?: string;
  image: string;
  link?: string;
};

type CaseItem = StaticCase | HoverCase;

const cases: CaseItem[] = [
  {
    type: "static",
    title: "Diverse Solutions",
    highlight: "ASSURED SUCCESS",
  },
  {
    icon: "/images/c1.png",
    brand: "novus Loyalty",
    title: "Rethinking Loyalty with Innovation",
    desc: "An enterprise and SaaS-based loyalty platform designed to elevate customer engagement.",
    image: "/images/case.png",
    link: "#",
  },
  {
    icon: "/images/c2.png",
    brand: "BidHom",
    title: "Revolutionizing Real Estate Auctions",
    desc: "Transforming property bidding with smart digital workflows.",
    image: "/images/case1.png",
    link: "#",
  },
  {
    icon: "/images/c1.png",
    brand: "Claymable",
    title: "Transforming Medical Insurance with AI",
    desc: "AI-powered solutions for smarter healthcare decisions.",
    image: "/images/case2.png",
    link: "#",
  },
];

export default function CaseStudiesSection() {
  const hoverCases = cases.filter((c) => c.type !== "static") as HoverCase[];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % hoverCases.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? hoverCases.length - 1 : prev - 1));

  return (
    <section className="bg-[#070E3A] py-20">
      <div className="container mx-auto px-4">
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {cases.map((item, i) =>
            item.type === "static" ? (
              <div
                key={i}
                className="rounded-2xl bg-linear-to-b from-blue-900 to-blue-700 p-10 flex flex-col justify-center"
              >
                <p className="text-white/80 text-lg">{item.title}</p>
                <h2 className="mt-4 text-4xl font-extrabold text-white">
                  {item.highlight.split(" ")[0]} <br />
                  {item.highlight.split(" ")[1]}
                </h2>
              </div>
            ) : (
              <motion.div
                key={i}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative h-[420px] overflow-hidden rounded-2xl"
              >
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.15, opacity: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute top-6 left-6 z-20">
                  <Image src={item.icon} alt="" width={90} height={90} />
                </div>

                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="absolute inset-0 bg-linear-to-b from-[#0B1554] via-[#070E3A] to-[#020617]"
                />

                <motion.div
                  variants={{
                    rest: { y: 60, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  className="absolute inset-0 z-10 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl text-white font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mt-4">{item.desc}</p>
                  <Link
                    href={item.link ?? "#"}
                    className="mt-5 inline-flex items-center gap-1 text-white relative"
                  >
                    <span
                      className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0 after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  "
                    >
                      Explore
                    </span>

                    <ChevronRight className="transition-transform duration-300 hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            ),
          )}
        </div>

        {/* ================= MOBILE (NO SWIPER) ================= */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-white/80">
              Diverse Solutions
            </p>
            <h2 className="text-2xl mt-2 font-bold text-white">
              ASSURED SUCCESS
            </h2>
          </div>

          <div className="relative max-w-sm mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl overflow-hidden bg-[#0B1554]"
              >
                <div className="relative h-64">
                  <Image
                    src={hoverCases[index].image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <Image
                    src={hoverCases[index].icon}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h3 className="text-white text-lg font-semibold">
                    {hoverCases[index].title}
                  </h3>
                  <p className="text-white/80 text-lg mt-2 text-justify">
                    {hoverCases[index].desc}
                  </p>
                  <Link
                    href={hoverCases[index].link ?? "#"}
                    className="inline-flex items-center text-white text-lg mt-2"
                  >
                    Explore <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/10 text-white"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-white/10 text-white"
              >
                <ChevronRight />
              </button>
            </div>

            <p className="text-center text-white/70 text-sm">
              {index + 1} / {hoverCases.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
