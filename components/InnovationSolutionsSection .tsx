"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Big Data",
    description:
      "Big Data is transforming the way organizations work, enabling smarter and faster data-driven decisions.",
    points: ["Data Monetization", "Grow Data Value", "Rapid Data Discovery"],
    href: "/solutions/big-data",
    bgImage: "/images/big-data.png",
    overlay: true,
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive cybersecurity practices to protect systems and information from evolving threats.",
    points: ["Incident Response", "Security Strategy", "Cyber Intelligence"],
    href: "/solutions/cybersecurity",
    bg: "bg-[#119bd1]",
  },
  {
    title: "IoT",
    description:
      "IoT solutions enabling industries to enter a new era of automation and smart decision-making.",
    points: ["Data Augmentation", "IoT Analytics", "Smarter Decisions"],
    href: "/solutions/iot",
    bg: "bg-[#0a2d5e]",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate marketing operations to deliver high-quality leads and better customer engagement.",
    points: ["Optimize Operations", "Loyalty Management", "Sales Alerts"],
    href: "/solutions/marketing-automation",
    bg: "bg-[#f1f1f1]",
    light: true,
  },
  {
    title: "Chatbot",
    description:
      "AI-powered chatbot solutions delivering conversational digital experiences across platforms.",
    points: ["Conversational AI", "Machine Learning", "Messaging Platform"],
    href: "/solutions/chatbot",
    bgImage: "/images/chatbot.png",
    overlay: true,
    full: true,
  },
];

export default function InnovationSolutionsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-start max-w-3xl mb-20 px-2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Driving Innovation for Clients
            <br />
            to Compete in Digital Ecosystem
          </h2>
          <p className="text-gray-600 text-xl mt-4 font-semibold">
            Design the future through innovation architecture to solve complex
            business challenges.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={item.full ? "md:col-span-2" : ""}
            >
              <Link href={item.href} className="group block h-full">
                <div
                  className={`relative h-full rounded-xl p-10 overflow-hidden transition-all duration-500 ${
                    item.bgImage ? "" : item.bg
                  } ${
                    item.light
                      ? "text-gray-900 hover:shadow-2xl"
                      : "text-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  {/* Background Image */}
                  {item.bgImage && (
                    <>
                      <Image
                        src={item.bgImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {item.overlay && (
                        <div className="absolute inset-0 bg-black/40" />
                      )}
                    </>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="opacity-90 mb-6 text-lg leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {item.points.map((point) => (
                        <li key={point} className=" opacity-90">
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-3 font-medium">
                      <span>Explore</span>
                      <ArrowRight
                        size={22}
                        className="transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
