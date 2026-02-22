"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type FooterSection = {
  title: string;
  links: string[];
};

const FOOTER_DATA: FooterSection[] = [
  {
    title: "About",
    links: ["Our Company", "Career", "Awards", "How We Work"],
  },
  {
    title: "Services",
    links: [
      "iOS App Development",
      "Android App Development",
      "Software Development",
      "Web Development",
      "Quality Assurance",
      "Digital Transformation",
    ],
  },
  {
    title: "Technologies",
    links: [
      "Blockchain",
      "Artificial Intelligence",
      "Cloud Computing",
      "Internet of Things",
      "Metaverse Development",
      "NFT Development",
    ],
  },
  {
    title: "Industries",
    links: [
      "Healthcare",
      "Education",
      "SaaS",
      "Finance",
      "eCommerce",
      "Logistics",
    ],
  },
  {
    title: "Portfolio",
    links: ["Web", "Mobility", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Testimonials", "Case Studies", "App Cost Calculator"],
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-14">
        {/* ================= Desktop ================= */}
        <div className="hidden md:grid grid-cols-6 gap-8">
          {FOOTER_DATA.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="text-gray-600 hover:text-black cursor-pointer transition"
                  >
                    <span
                      className="relative inline-block
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-0.5 after:w-0 after:bg-blue-900
               after:transition-all after:duration-300
               hover:after:w-full"
                    >
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= Mobile Accordion ================= */}
        <div className="md:hidden space-y-4">
          {FOOTER_DATA.map((section, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={section.title} className="border-b">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center py-4 font-semibold text-gray-900"
                >
                  {section.title}

                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pb-4 space-y-3">
                    {section.links.map((link) => (
                      <li
                        key={link}
                        className=" text-gray-800 pl-2 hover:text-black transition cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= Divider ================= */}
        <div className="mt-16 border-t border-gray-300" />

        {/* ================= Bottom ================= */}
        <div className="mt-10">
          {/* Top row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-lg font-semibold text-gray-900">
              {[
                {
                  name: "HisabTaker",
                  href: "https://hisabtaker.com/",
                  external: true,
                },
                { name: "Matrimony", href: "/matrimony", external: false },
                {
                  name: "TemplateCamp",
                  href: "/templatecamp",
                  external: false,
                },
              ].map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          relative cursor-pointer
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-0 after:bg-blue-900
          after:transition-all after:duration-300
          hover:after:w-full
        "
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="
          relative cursor-pointer
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-0 after:bg-blue-900
          after:transition-all after:duration-300
          hover:after:w-full
        "
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-4xl font-semibold text-gray-600 leading-relaxed">
            Above companies are registered trademarks of Oporishim.
            <br />
            Terms and conditions, features, support, pricing & service options
            subject to change without notice.
          </p>

          {/* Bottom row */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Legal links */}
            <div className="flex flex-wrap gap-x-12 gap-y-2 text-lg font-semibold text-gray-900">
              {[
                "Privacy policy",
                "Terms & Conditions",
                "Accessibility",
                "Legal",
                "Sitemap",
              ].map((item) => (
                <span
                  key={item}
                  className="relative cursor-pointer
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-0.5 after:w-0 after:bg-blue-900
            after:transition-all after:duration-300
            hover:after:w-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-lg text-gray-600 md:text-right">
              © {new Date().getFullYear()} Oporishim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
