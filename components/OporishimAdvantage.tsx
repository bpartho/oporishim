"use client";

import { Smile, Users, Calendar, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: Smile,
    value: "97%",
    label: "Satisfaction rate",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy clients",
  },
  {
    icon: Calendar,
    value: "6.5+",
    label: "Years on market",
  },
  {
    icon: Briefcase,
    value: "4+",
    label: "Business solutions",
  },
];

const features = [
  {
    title: "CLIENT CENTRIC DEVELOPMENT",
    desc: "Understanding of situations, perceptions & expectations we take decisions to create client’s satisfaction & loyalty.",
  },
  {
    title: "AGILE METHODOLOGY",
    desc: "Best practice of project management methodology that helps teams deliver value to customers faster & with fewer headaches.",
  },
  {
    title: "QUALITY SALVATION",
    desc: "With extensive experience we engage all resources required to resolve issues, assure qualities and deliver tested products.",
  },
  {
    title: "SCALABLE STRUCTURE",
    desc: "Our architecture supports expandability & higher workloads without any fundamental changes which is cost efficient for future.",
  },
  {
    title: "DATA BACKUP",
    desc: "This feature help businesses to protect their data with reserve database copies in the event of corrupted, errors or physical hardware failure.",
  },
  {
    title: "DATA SECURITY",
    desc: "Our experts make sure that your software is with zero vulnerable. Even we provide additional penetration testing services.",
  },
  {
    title: "DEDICATED TEAM",
    desc: "We are professionals with enough experience and our experts deliver high-grade products to ensure that you reach your target audience.",
  },
  {
    title: "EXCELLENT SUPPORT",
    desc: "We know how important is support & maintenance. That’s why we arrange 24/7 support infrastructures.",
  },
];

export default function OporishimAdvantage() {
  return (
    <section className="relative overflow-hidden">
      {/* FIXED BACKGROUND (UNCHANGED) */}
      <div className="absolute inset-0 bg-[url('/images/paralaxbg.png')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="h-20" />

        {/* HEADING */}
        <div className="container mx-auto px-4">
          <div className="max-w-5xl text-left text-white">
            <h2 className="text-6xl font-bold leading-relaxed">
              Why choose{" "}
              <span className="font-bold bg-linear-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent">
                Oporishim?
              </span>
            </h2>

            <p className="mt-6 text-lg md:text-2xl leading-relaxed text-white/80">
              Because we develop custom client centric applications and client
              satisfaction is our main focus. We have heroes, just name it we
              will cast knowledge to real world action plan.
            </p>
          </div>
        </div>

        {/* STATS BOXES */}
        <div className="mx-auto mt-14 container px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-white/30 bg-white/5 p-10 text-white rounded-2xl"
                >
                  <Icon className="h-12 w-12 text-orange-400" />
                  <div>
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="text-lg text-white/80">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mx-auto mt-16 container px-4 pb-20">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i}>
                <h4 className="mb-3 text-xl font-bold text-orange-400">
                  {item.title}
                </h4>
                <p className="text-lg font-semibold leading-relaxed text-white/90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pb-24 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-lg cursor-pointer rounded-full gap-3 bg-[#E7000B] px-10 py-4 font-semibold text-white transition hover:bg-[#d4010b]"
          >
            Get a Quote
            <ArrowRight
              className="transition-transform duration-300 ease-out group-hover:translate-x-2"
              size={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
