"use client";
import InnovationSolutionsSection from "@/components/InnovationSolutionsSection ";
import LatestBlogsSection from "@/components/LatestBlogsSection";
import SolutionCards from "@/components/SolutionCards";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <section>
      {/* Hero Section start */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/solution-hero.jpg"
          alt="Business Team"
          fill
          priority
          className="object-cover"
        />

        {/* Dark + Blur Overlay */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-[#041B3D]/60 via-[#041B3D]/40 to-[#041B3D]/40 backdrop-blur-xs" /> */}
        <div className="absolute inset-0 bg-[#0B3C6F]/80" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center mt-6">
          <div className="container mx-auto px-4 lg:px-2">
            <div className="max-w-3xl text-white">
              <h1 className="text-2xl font-bold leading-relaxed md:leading-tight -tracking-normal md:text-3xl lg:text-5xl">
                Experience Next-Level <br />
                Business Performance <br />
                with Our SaaS Trio
              </h1>

              <p className="mt-6 text-xl text-gray-200 md:text-2xl">
                Innovative Business Solution to Delight Your Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section end */}
      <SolutionCards />
      <InnovationSolutionsSection />
      <LatestBlogsSection />
    </section>
  );
}
