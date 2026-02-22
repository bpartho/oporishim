"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROCESS_LIST = [
  {
    id: "requirement",
    title: "Requirement",
    description:
      "We start by understanding your requirement and communicate further as per the discussion.",
  },
  {
    id: "research",
    title: "Research and Concept Building",
    description:
      "We analyze the market, users, and competitors to build strong concepts.",
  },
  {
    id: "technical",
    title: "Technical Evaluation",
    description:
      "Choosing the right technology stack for performance and scalability.",
  },
  {
    id: "development",
    title: "Agile Development",
    description:
      "Iterative development with continuous feedback and improvements.",
  },
  {
    id: "support",
    title: "Support and Maintenance",
    description: "Ongoing support, monitoring, and feature enhancements.",
  },
  {
    id: "marketing",
    title: "Marketing Success",
    description:
      "Optimizing visibility, reach, and growth through digital strategies.",
  },
];

export default function ServicesProcessSection() {
  const [active, setActive] = useState(PROCESS_LIST[0]);

  return (
    <section className="container mx-auto my-10 px-4 md:px-0">
      {/* TOP HEADING */}
      <div className="container mx-auto px-6 mb-12">
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
          Methodology
        </p>

        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight
    bg-linear-to-r from-[#2F2ABF] via-[#5A33C5] to-[#8A3FFC]
    bg-clip-text text-transparent inline-block"
        >
          Agile Approach
        </h2>

        {/* Accent Lines */}
        <div className="flex items-center gap-3 mt-4">
          <span className="block w-16 h-1 bg-linear-to-r from-pink-500 to-red-500" />
          <span className="block w-6 h-1 bg-pink-500" />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 w-full bg-[#0A93D2] px-10 py-20">
          <h2 className="text-white text-4xl font-semibold mb-12">Process</h2>

          <ul className="space-y-6">
            {PROCESS_LIST.map((item) => {
              const isActive = active.id === item.id;

              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item)}
                  className="cursor-pointer group flex items-center gap-4"
                >
                  {/* Line */}
                  <span
                    className={`h-0.5 transition-all duration-300
                  ${isActive ? "w-10 bg-white" : "w-0 bg-white"}
                  group-hover:w-10`}
                  />

                  {/* Text */}
                  <span
                    className={`text-white transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100"}`}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 w-full bg-[#F1F4F6] flex items-center px-12 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-md"
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {active.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {active.description}
              </p>

              <button className="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-red-600 transition">
                View More
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
