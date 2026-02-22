"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  id: number;
  logo: string;
  text: string;
  name: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/images/client2.png",
    text: "The client is a petrochemical company by the name Kemgo Inc. The client aims to build an online platform for buyers and suppliers of chemicals to make best sourcing decisions.",
    name: "Ralph de Haan",
    position: "Co-Founder – Kemgo Inc.",
  },
  {
    id: 2,
    logo: "/images/client3.png",
    text: "From the first engagement to the timely delivery, they moved with confidence and much gusto. I recommend them without any reservations.",
    name: "Ferhat Hatay",
    position: "Director – Fujitsu",
  },
  {
    id: 3,
    logo: "/images/client1.png",
    text: "Their technical expertise and communication made the entire process smooth and efficient.",
    name: "John Smith",
    position: "CTO – TechCorp",
  },
  {
    id: 4,
    logo: "/images/client2.png",
    text: "A reliable partner who understands business goals and delivers quality solutions.",
    name: "Sarah Lee",
    position: "Product Lead – Finix",
  },
  {
    id: 5,
    logo: "/images/client3.png",
    text: "Professional team with strong attention to detail and timely execution.",
    name: "Michael Brown",
    position: "CEO – StartHub",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const desktopMaxIndex = testimonials.length - 2; // 👈 important

  const visibleDesktop = testimonials.slice(index, index + 2);
  const visibleMobile = testimonials.slice(index, index + 1);

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto container px-4 md:px-6">
        {/* Heading */}

        <motion.div className="mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl leading-tight md:leading-relaxed font-bold text-[#0B2A8F] mb-6 text-left"
          >
            What our clients are saying about us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl text-gray-700 text-lg md:text-2xl leading-relaxed text-left"
          >
            Explore our happy clients to find out how our services & solutions
            helped them drive better business results & growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {/* Desktop */}
            <motion.div
              key={index}
              className="hidden gap-6 md:grid md:grid-cols-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
            >
              {visibleDesktop.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </motion.div>

            {/* Mobile */}
            <motion.div
              key={`mobile-${index}`}
              className="md:hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              {visibleMobile.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => {
            if (i > desktopMaxIndex) return null; // 👈 dot limit
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === index ? "w-12 bg-blue-600" : "w-8 bg-blue-200"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-linear-to-b from-white to-blue-50 p-8 shadow-sm">
      <div className="mb-5">
        <Image src={item.logo} alt="logo" width={120} height={40} />
      </div>

      <p className="text-gray-700 leading-relaxed">{item.text}</p>

      <div className="mt-6">
        <p className="font-semibold text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-600">{item.position}</p>
      </div>
    </div>
  );
}
