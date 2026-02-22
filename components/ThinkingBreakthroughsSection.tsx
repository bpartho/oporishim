"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  id: number;
  image: string;
  logo: string;
  title: string;
  description: string;
  href?: string;
};

const items: Item[] = [
  {
    id: 1,
    image: "/images/break-1.png",
    logo: "/images/logos/logo1.png",
    title: "Jabil",
    description:
      "Jabil is amongst the most technically advanced manufacturing solutions provider across the globe serving every category of business including a startup to a well-equipped enterprise-grade business.",
    href: "/case-studies/jabil",
  },
  {
    id: 2,
    image: "/images/break-2.png",
    logo: "/images/logos/logo2.png",
    title: "Auction",
    description:
      "A leading online real estate marketplace transforming the nation’s real estate ecosystem.",
    href: "/case-studies/auction",
  },
  {
    id: 3,
    image: "/images/break-3.png",
    logo: "/images/logos/logo1.png",
    title: "ID",
    description: "Enterprise-grade identity & security solutions.",
    href: "/case-studies/id",
  },
  {
    id: 4,
    image: "/images/break-4.png",
    logo: "/images/logos/logo2.png",
    title: "Fujitsu",
    description: "Innovative technology solutions for modern enterprises.",
    href: "/case-studies/fujitsu",
  },
];

export default function ThinkingBreakthroughsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-28">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div className="mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-blue-900 mb-6"
          >
            Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl text-lg md:text-2xl leading-relaxed text-left text-shadow-gray-200"
          >
            Process and practices behind our work & development. A shed of light
            on each and every detail. Here‘s our most recent case.
          </motion.p>
        </motion.div>

        {/* ================= MOBILE (sm) ================= */}
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-[440px] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* simple overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* content (no bg panel) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-4 py-2">
                  {/* logo */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Image
                      src={item.logo}
                      alt={`${item.title} logo`}
                      width={28}
                      height={28}
                    />
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>

                <p className="mt-2 text-lg leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.href || "#"}
                  className="mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-white"
                >
                  →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP (md+) ================= */}
        <div className="mx-auto hidden h-[480px] container overflow-hidden rounded-2xl md:flex">
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() => setActive(null)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative cursor-pointer overflow-hidden"
              >
                {/* IMAGE */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    opacity: isActive ? 0 : 1,
                    y: isActive ? 20 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="
    absolute left-6 bottom-6
    flex items-center gap-3
    z-20
  "
                >
                  {/* Logo Circle */}
                  <div className="relative h-14 w-14 rounded-full border-2 border-white overflow-hidden shadow-lg shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-white font-semibold text-lg">
                    {item.title}
                  </span>
                </motion.div>

                {/* dark overlay */}
                <motion.div
                  animate={{ opacity: isActive ? 0 : 0.45 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-black z-10"
                />

                {/* CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 z-30 flex flex-col justify-end p-6"
                    >
                      {/* SUBTLE GRADIENT PANEL (md+ only) */}
                      <div
                        className="
          rounded-xl
           bg-linear-to-r
    from-slate-900/70
    via-slate-800/60
    to-slate-900/60
          p-6
          max-w-2xl
        "
                      >
                        <div className="flex items-center gap-4">
                          {/* logo */}
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                            <Image
                              src={item.logo}
                              alt={`${item.title} logo`}
                              width={32}
                              height={32}
                            />
                          </div>

                          {/* text */}
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-2 max-w-xl text-lg leading-relaxed text-white/90">
                          {item.description}
                        </p>

                        {/* icon */}
                        <Link
                          href={item.href || "#"}
                          className="mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-white transition hover:bg-white hover:text-slate-900"
                        >
                          →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
