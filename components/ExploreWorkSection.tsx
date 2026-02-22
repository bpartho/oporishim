"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExploreWorkSection() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-0">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT IMAGE (hidden on small devices) */}
          <motion.div
            className="relative hidden lg:block"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/explore-work.png"
              alt="Project Preview"
              width={700}
              height={600}
              className="mx-auto drop-shadow-xl"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Explore Our Work
            </h2>

            <p className="mx-auto mt-6 max-w-md text-gray-700 text-lg lg:mx-0">
              Our dedicated team strives to deliver the best project every
              single time. Look at some of our work.
            </p>

            {/* BUTTON WITH RIPPLE */}
            <Link
              href="/case-studies"
              className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full bg-red-500 px-8 py-3  font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30"
            >
              {/* Ripple layer */}
              <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />
              View Case Studies
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
