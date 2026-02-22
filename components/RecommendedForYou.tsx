"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Post = {
  id: number;
  category: string;
  date: string;
  title: string;
  desc: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    category: "SOFTWARE DEVELOPMENT",
    date: "March 15, 2024",
    title: "Top Techniques to Reduce Cloud Costs for Your SaaS",
    desc: "The world of software as a service (SaaS) is evolving at an unbelievable pace. More and more businesses are moving to the cloud...",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    category: "MOBILE APP DEVELOPMENT",
    date: "February 26, 2024",
    title: "Benefits of Developing an Online Appointment App",
    desc: "The need for convenience is topping the chart in every industry. Customers are prioritizing seamless digital experiences...",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    category: "IOT",
    date: "March 15, 2024",
    title: "Building a Crypto-Banking Payment Gateway Key",
    desc: "Digital currencies are the new transacting value and conducting financial transactions with enhanced security...",
    image: "/images/blog3.png",
  },
];

export default function RecommendedForYou() {
  return (
    <section className="bg-[#F3F8FC] py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-6xl md:leading-relaxed font-bold text-[#0B2A8F] mb-6 text-left">
            Recommended for you
          </h2>

          <p className="max-w-6xl text-gray-700 text-lg md:text-2xl leading-relaxed text-left">
            Our short takes on everything from Digitization to Technology
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block"
            >
              <article className="h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-semibold tracking-wide text-gray-500">
                    {post.category}
                  </p>

                  <p className="mt-1 text-gray-400">{post.date}</p>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 group-hover:text-[#0B2C8D] transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-3  text-gray-600 line-clamp-3">
                    {post.desc}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View more */}
        <div className="mt-14 flex justify-center">
          <Link
            href="#"
            className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    px-10
    py-4
    text-[18px]
    font-semibold
    text-[#0B2B5C]
    shadow-lg
    transition-all
    duration-300
    hover:bg-[#1E6FD9]
    hover:text-white
    hover:shadow-blue-500/30
    active:scale-[0.97]
  "
          >
            <span className="tracking-wide">View More</span>

            <MoveRight
              className="
      h-5 w-5
      transition-all
      duration-300
      opacity-70
      group-hover:translate-x-2
      group-hover:opacity-100
    "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
