"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    title:
      "How Much Does It Cost to Build Personal Finance App Like EveryDollar App?",
    category: "Mobility",
    image: "/images/b1.png",
    href: "/blog/personal-finance-app-cost",
  },
  {
    title:
      "36 Offline VS Online Lead Generation Ideas for Your Real Estate Business",
    category: "Mobility",
    image: "/images/b2.png",
    href: "/blog/lead-generation-real-estate",
  },
  {
    title:
      "How to Build an All-in-One Project Management App for Contractors Like Joist App?",
    category: "Mobility",
    image: "/images/b3.png",
    href: "/blog/project-management-app",
  },
];

export default function LatestBlogsSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Background Text */}
        <div className="absolute top-10 left-0 text-[170px] font-bold text-gray-100 leading-none pointer-events-none select-none">
          Blog
        </div>

        {/* Heading */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl font-semibold text-gray-900">Latest Blogs</h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={blog.href} className="group block">
                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                  {/* Image */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Hover Circles */}
                  <span className="absolute w-[420px] h-[420px] rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <span className="absolute w-[280px] h-[280px] rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition duration-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <span className="text-sm text-white/90">
                      {blog.category}
                    </span>

                    <h3 className="text-white text-lg font-medium leading-relaxed">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16 relative z-10">
          <Link
            href="/blog"
            className="px-8 py-3 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
