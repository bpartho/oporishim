"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Consulting",
    desc: "We define, design and execute IT strategies for successful collaboration from an idea inception to project launch",
    href: "/services/consulting",
  },
  {
    title: "Web Application",
    desc: "We deliver business-critical applications designed to increase ROI and improve performance",
    href: "/services/web-application",
  },
  {
    title: "Mobility",
    desc: "Our solutions enable organizations to enhance customer experiences across all touchpoints",
    href: "/services/mobility",
  },
  {
    title: "Enterprise CMS",
    desc: "Get a wide range of Enterprise CMS services tailored to your specific business needs",
    href: "/services/enterprise-cms",
  },
  {
    title: "Ecommerce Development",
    desc: "Keeping track of emerging market trends to make your business more agile and efficient",
    href: "/services/ecommerce",
  },
  {
    title: "Testing Services",
    desc: "Reduce cost overheads and optimize performance with our effective testing services",
    href: "/services/testing",
  },
  {
    title: "Loyalty",
    desc: "Unlock the potential of the best loyalty programs to reward & retain your existing customers",
    href: "/services/loyalty",
  },
  {
    title: "Real Estate",
    desc: "Keep abreast of real estate market trends with solutions that revolutionize home buying experience",
    href: "/services/real-estate",
  },
  {
    title: "Restaurant Solutions",
    desc: "Accelerate your restaurant business with an online ordering system & manage bulk orders in a go",
    href: "/services/restaurant",
  },
];

export default function OurServicesSection() {
  return (
    <section className="py-24 bg-white px-4 md:px-0">
      <div className="container mx-auto md:px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl tracking-wide font-bold text-[#0B3C6F] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-10">
            We Spectrum of services by most powerful industry-leading
            technologies, with a bunch of smart young passionate and hopeful
            developers. We always research to implement the best solution for
            the most effective product development
          </p>

          <p className="text-3xl font-light text-[#0B3C6F]">
            We achieve Market-Leading Performance by
          </p>
          <h3 className="text-4xl tracking-wide font-bold leading-relaxed text-[#0B3C6F] mt-2">
            New Wave Services
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition cursor-pointer p-8 text-center"
                >
                  <h4 className="text-2xl font-semibold text-[#0B3C6F] mb-3">
                    {item.title}
                  </h4>

                  <p className=" text-gray-700 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
