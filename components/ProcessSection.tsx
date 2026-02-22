"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    no: "1",
    title: "Requirement & Analysis",
    desc: "Understand & sort out the needs. After that, project is planned for time, cost, infrastructure and how many engineers will be needed.",
  },
  {
    no: "2",
    title: "Prototyping",
    desc: "Here, start converting requirements to graphical user interface. Our creative team reviews and revises materials until aligns with goals.",
  },
  {
    no: "3",
    title: "Development",
    desc: "Once the design is ready, goes to dev team where all system architecture, database & functionality take the form of written code.",
  },
  {
    no: "4",
    title: "Testing & Bug fixing",
    desc: "To ensure quality we perform Security, Load or stress, Usability, Validation, Regression, Functionality and Compatibility testing.",
  },
  {
    no: "5",
    title: "Deployment",
    desc: "Here is where we present the project and plan deploying with proper infrastructure. Upon approval, your project will be launched.",
  },
  {
    no: "6",
    title: "Maintenance",
    desc: "We strongly believe in what we build, will update to keep up with needs. So we’re dedicated for regular & unscheduled support.",
  },
];

function Card({ step }: { step: (typeof steps)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
    group
    relative
    rounded-2xl
    bg-white
    p-8
    pl-24
    shadow-[0_15px_40px_rgba(0,0,0,0.06)]
    transition-all
    duration-300
    hover:-translate-y-3
    hover:shadow-[0_25px_60px_rgba(11,42,143,0.25)]

    min-h-[220px]    /* ⭐ FIXED HEIGHT */
    flex
    flex-col
  "
    >
      {/* Number (LEFT SIDE) */}
      <div className="absolute left-6 top-8 text-6xl font-extrabold text-transparent stroke-text transition-all duration-300 group-hover:text-[#0B2A8F]">
        {step.no}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#0B2A8F]">{step.title}</h3>

      <p className="mt-3 leading-relaxed text-gray-700">{step.desc}</p>

      {/* Bottom bar */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#0B2A8F] transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}

export default function ProcessSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (leftColumnRef.current) {
        setLeftHeight(leftColumnRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto container px-4">
        {/* Heading */}
        <motion.div className="mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl leading-tight md:leading-relaxed font-bold text-[#0B2A8F] mb-6 text-left"
          >
            How we get it done ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl text-gray-700 text-lg md:text-2xl leading-relaxed text-left"
          >
            We work closely with the customer to understand the project
            objective and business needs. We imply strong methodologies and
            effective developments phases that facilitate substantial
            communication and assure that the client is kept in the loop while
            we strive to achieve required final outcome.
          </motion.p>
        </motion.div>

        {/* Cards + Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div
            ref={leftColumnRef}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            {steps.slice(0, 3).map((step, i) => (
              <Card step={step} key={i} />
            ))}
          </div>

          {/* Middle Image */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
            <div
              className="w-full lg:w-auto"
              style={{
                height:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? leftHeight
                    : "auto",
              }}
            >
              <Image
                src="/images/agile-method.svg"
                alt="Middle"
                width={500}
                height={500}
                className="w-full h-full lg:h-full lg:w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 order-3">
            {steps.slice(3, 6).map((step, i) => (
              <Card step={step} key={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
