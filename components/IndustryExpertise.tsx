"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  HandCoins,
  ShieldCheck,
  ShoppingCart,
  Factory,
  Cpu,
  Fuel,
  Smartphone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";

const industries = [
  {
    title: "Health Care",
    desc: "Deploying innovative technology and patient-centric solutions for the healthcare sector.",
    icon: HeartPulse,
    image: "/images/health.jpg",
  },
  {
    title: "Banking",
    desc: "Secure, scalable and modern digital banking solutions.",
    icon: Landmark,
    image: "/images/banking.jpg",
  },
  {
    title: "Investment",
    desc: "Smart investment platforms with real-time insights.",
    icon: HandCoins,
    image: "/images/investment.jpg",
  },
  {
    title: "Insurance",
    desc: "Robust and compliant insurance technology solutions.",
    icon: ShieldCheck,
    image: "/images/insurance.jpg",
  },
  {
    title: "Retail",
    desc: "Omnichannel retail solutions with seamless UX.",
    icon: ShoppingCart,
    image: "/images/retail.jpg",
  },
  {
    title: "Manufacturing",
    desc: "Industry 4.0 solutions for smart manufacturing.",
    icon: Factory,
    image: "/images/manufacturing.jpg",
  },
  {
    title: "Info Technology",
    desc: "End-to-end IT consulting and development services.",
    icon: Cpu,
    image: "/images/technology.jpg",
  },
  {
    title: "Oil and Gas",
    desc: "Digital transformation for energy operations.",
    icon: Fuel,
    image: "/images/oilGas.jpg",
  },
  {
    title: "Telecommunication",
    desc: "Next-gen telecom software solutions.",
    icon: Smartphone,
    image: "/images/telecommunication.jpg",
  },
  {
    title: "Logistics",
    desc: "Smart logistics & supply chain platforms.",
    icon: Globe,
    image: "/images/logistics.jpg",
  },
];

export default function IndustryExpertiseSection() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div className="mb-20 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:leading-relaxed font-bold text-[#0B2A8F] mb-6 text-left"
            >
              Industries we serve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl text-gray-700 text-lg md:text-2xl leading-relaxed text-left"
            >
              We have served many companies of various industries. We worked
              together to strengthen themselves by being innovative and keep
              them technologically updated in order to serve their customers in
              the best way.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-slate-200">
            {industries.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  onClick={() => {
                    setSelectedService(item.title);
                    setOpen(true);
                  }}
                  className="
                    group relative cursor-pointer overflow-hidden
                    border border-slate-200
                    h-[280px] md:h-64
                  "
                >
                  {/* 🔹 Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
      object-cover
      transition-opacity duration-500
      md:group-hover:opacity-0
    "
                    />

                    {/* Overlay */}
                    <div
                      className="
      absolute inset-0
      bg-black/40 md:bg-black/30
      md:group-hover:bg-linear-to-b
      md:group-hover:from-blue-500/30
      md:group-hover:via-blue-400/20
      md:group-hover:to-black/40
      transition-all duration-500
    "
                    />
                  </div>

                  {/* 🔹 Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 group">
                    {/* Top */}
                    <div>
                      <Icon className="mb-3 h-9 w-9 text-white transition-transform duration-300 md:group-hover:scale-110 md:group-hover:-rotate-6 lg:group-hover:scale-110 lg:group-hover:-rotate-6" />
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p
                      className="
    mt-3 text-white/90
    transition-all duration-300
    sm:opacity-100 sm:translate-y-0
    md:absolute md:bottom-6 md:left-6 md:right-6
    md:opacity-0 md:translate-y-3
    md:group-hover:opacity-100 md:group-hover:translate-y-0
    lg:absolute lg:bottom-6 lg:left-6 lg:right-6
    lg:opacity-0 lg:translate-y-3
    lg:group-hover:opacity-100 lg:group-hover:translate-y-0
  "
                    >
                      {item.desc}
                    </p>

                    {/* Arrow */}
                    <span className="hidden md:block absolute bottom-6 right-6 text-white transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationModal
        open={open}
        onClose={() => setOpen(false)}
        services={industries.map((i) => i.title)}
        selectedService={selectedService}
      />
    </>
  );
}
