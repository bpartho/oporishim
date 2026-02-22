"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type CTAButtonProps = {
  label: string;
  href: string;
};

export default function CTAButton({ label, href }: CTAButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-white
          px-6
          py-4
          cursor-pointer
          font-semibold
          text-gray-800
          transition-all
          duration-300
          hover:bg-blue-600
          hover:text-white
        "
      >
        <span>{label}</span>

        <ChevronRight
          className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </motion.button>
    </Link>
  );
}
