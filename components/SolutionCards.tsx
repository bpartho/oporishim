"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Users,
  CreditCard,
  CircleCheckBig,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "POS Software",
    description:
      "Create professional invoices, manage inventory, and track business transactions with ease using our modern POS solution.",
    points: ["Smart invoicing", "Inventory control", "Real-time analytics"],
    icon: CreditCard,
    image: "/images/pos.png",
  },
  {
    id: 2,
    title: "CRM Software",
    description:
      "Highly affordable all-in-one CRM system to manage leads, contacts, proposals, campaigns, and customer relationships.",
    points: ["Lead management", "Campaign tracking", "Customer insights"],
    icon: Users,
    image: "/images/crm.png",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A powerful online shop solution designed to help businesses sell smarter and scale faster with modern tools.",
    points: ["Online storefront", "Secure checkout", "Order automation"],
    icon: ShoppingCart,
    image: "/images/ecommerce.png",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 space-y-28">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
            >
              {/* Text Content */}
              <div className={isReverse ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CircleCheckBig size={22} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="px-8 py-4 cursor-pointer rounded-full bg-[#E7000B] text-white font-medium hover:bg-[#cf101a] transition">
                    View Demo
                  </button>
                  <button className="px-8 py-4 cursor-pointer rounded-full border border-gray-300 text-gray-800 font-medium hover:border-blue-600 hover:text-blue-600 transition flex items-center gap-2">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative w-full max-w-none rounded-3xl overflow-hidden shadow-xl ${
                  isReverse ? "md:order-1" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={420}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
