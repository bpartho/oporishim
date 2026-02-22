"use client";

import ExploreWorkSection from "@/components/ExploreWorkSection";
import OurServicesSection from "@/components/OurServicesSection";
import ServicesProcessSection from "@/components/ServicesProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function page() {
  return (
    <section className="">
      {/* Hero Section start */}
      <div className="relative px-4 md:px-0 h-[50vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/services-hero.jpg"
          alt="Services Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0B3C6F]/85" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto md:px-6">
            <div className="max-w-2xl">
              <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                {/* Desktop Line */}
                <span
                  className="
          hidden md:block
          w-18 h-[3px] bg-[#EF323A]
          
        "
                />

                {/* Text */}
                <div>
                  <h5 className="text-white text-2xl md:text-4xl font-light mb-1">
                    Services
                  </h5>

                  <h1 className="text-white text-3xl md:text-4xl font-bold leading-relaxed">
                    Scalable. Agile. Flexible
                  </h1>

                  {/* Mobile Line */}
                  <span
                    className="
            block md:hidden
            w-16 h-[3px] bg-[#EF323A]
            mt-4
          "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section end */}
      <OurServicesSection />
      <ServicesProcessSection />
      <ExploreWorkSection />
      <TestimonialSection />
    </section>
  );
}
