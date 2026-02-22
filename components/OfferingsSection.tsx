"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  BarChart3,
  Globe,
  Smartphone,
  Code2,
  Layout,
  TrendingUp,
  Search,
  Palette,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  active?: boolean;
};

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  cards: CardItem[];
};

const slides: Slide[] = [
  {
    subtitle: "Build Smart, Scalable & Powerful Solutions with",
    title: "Custom Software Development",
    image: "/images/offer.png",
    cards: [
      {
        icon: Code2,
        title: "Custom Software Development",
        desc: "Industry-specific and cross-platform software with unique features that automate processes and optimize operations.",
        active: true,
      },
      {
        icon: Globe,
        title: "Enterprise Solutions",
        desc: "Ready-made and custom systems like CRM, ERP & POS built to scale with your business.",
      },
      {
        icon: Brain,
        title: "Process Automation",
        desc: "Smart automation that reduces manual work, saves time, and improves efficiency.",
      },
    ],
  },
  {
    subtitle: "Transform Your Ideas into Digital Reality with",
    title: "Mobile App Development",
    image: "/images/offer2.png",
    cards: [
      {
        icon: Smartphone,
        title: "Native & Hybrid Apps",
        desc: "High-performance Android & iOS applications built with modern technologies.",
        active: true,
      },
      {
        icon: Layout,
        title: "User-Centered Design",
        desc: "Clean UI/UX design that improves usability and user engagement.",
      },
      {
        icon: TrendingUp,
        title: "Business Growth Apps",
        desc: "Scalable mobile solutions that help startups and enterprises grow faster.",
      },
    ],
  },
  {
    subtitle: "Grow Faster with Smart Strategies through",
    title: "SEO & Digital Marketing",
    image: "/images/seo.jpg",
    cards: [
      {
        icon: Search,
        title: "Search Engine Optimization",
        desc: "Improve visibility, ranking, and organic traffic with proven SEO strategies.",
        active: true,
      },
      {
        icon: BarChart3,
        title: "Performance Marketing",
        desc: "Data-driven campaigns that increase leads, conversions, and ROI.",
      },
      {
        icon: TrendingUp,
        title: "Growth Strategy",
        desc: "Smart digital planning to scale your online presence sustainably.",
      },
    ],
  },
  {
    subtitle: "Design That Speaks & Engages Through",
    title: "Graphic & UI/UX Design",
    image: "/images/uiux.jpg",
    cards: [
      {
        icon: Palette,
        title: "UI/UX Design",
        desc: "User-focused interfaces designed for clarity, usability, and engagement.",
        active: true,
      },
      {
        icon: Layout,
        title: "Brand Identity",
        desc: "Creative visuals that represent your brand story and values.",
      },
      {
        icon: Presentation,
        title: "Creative Presentation",
        desc: "Visually compelling designs that communicate ideas effectively.",
      },
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({ x: 80 * direction, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: -80 * direction, opacity: 0 }),
};

// Modified variants for card sliding from right
const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function OfferingsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  const slide = slides[active];
  const activeCardIndex = slide.cards.findIndex((c) => c.active);

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#0B1444] pt-24 pb-30 md:pb-40 text-white overflow-hidden relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div className="mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-6xl font-bold text-white text-left"
          >
            What we do?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mt-6 text-lg md:text-2xl leading-relaxed text-white/80 text-left"
          >
            Oporishim covers all aspects of custom software development,
            maintenance & support. With an expert tech team and years of
            experience, we are paired with clients’ businesses along with
            building modern and feature-rich solutions for web, desktop and
            mobile apps.
          </motion.p>
        </motion.div>

        {/* Slider Content */}
        <div className="relative mx-auto container px-4">
          <div className="relative grid rounded-2xl bg-[#081C4A] md:grid-cols-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial={isMobile ? undefined : "enter"}
                animate="center"
                exit={isMobile ? undefined : "exit"}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col justify-center p-10"
              >
                <p className="text-xl py-2 text-white/90">{slide.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  {slide.title}
                </h3>
                <button
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group cursor-pointer mt-8 inline-flex items-center gap-4 text-sm font-semibold"
                >
                  <span className="relative">
                    VIEW MORE
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="relative h-80 md:h-[420px] overflow-hidden rounded-r-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial={isMobile ? undefined : "enter"}
                  animate="center"
                  exit={isMobile ? undefined : "exit"}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt="Offering Image"
                    fill
                    priority
                    className="object-cover image-zoom"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Cards */}
          <div className="relative mt-3 md:mt-10">
            <div className="flex justify-center gap-4 md:gap-10 flex-wrap overflow-hidden py-4">
              <AnimatePresence mode="popLayout" custom={direction}>
                {slide.cards.map((card, i) => {
                  const Icon = card.icon;
                  const isActive = card.active;

                  if (isMobile && !isActive) return null;

                  const cardsToShow = isMobile
                    ? 1
                    : window.innerWidth < 1024
                      ? 2
                      : 3;
                  const cardIndexDiff =
                    (i - activeCardIndex + slide.cards.length) %
                    slide.cards.length;
                  if (!isMobile && cardIndexDiff >= cardsToShow) return null;

                  const orderClass = !isMobile
                    ? isActive
                      ? "order-2"
                      : i === (activeCardIndex + 1) % slide.cards.length
                        ? "order-3"
                        : "order-1"
                    : "";

                  return (
                    <motion.div
                      // ✅ UNIQUE KEY FIX: Added active index to trigger animation
                      key={`${active}-${card.title}`}
                      layout
                      custom={direction}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        layout: { type: "spring", stiffness: 120, damping: 18 },
                        x: { type: "spring", stiffness: 100, damping: 20 },
                      }}
                      className={`
                        w-full sm:w-[300px] md:w-[340px] lg:w-[470px]
                        shrink-0 min-h-[220px] rounded-xl p-6 shadow-xl
                        ${orderClass}
                        ${
                          isActive
                            ? "bg-white text-black z-10"
                            : "bg-[#122C66]/60 backdrop-blur-sm text-white"
                        }
                      `}
                    >
                      <Icon className="mb-3 h-8 w-8" />
                      <h4 className="text-lg font-semibold">{card.title}</h4>
                      <p className="mt-2 opacity-80">{card.desc}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          {isMobile && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 cursor-pointer top-3/6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 cursor-pointer top-3/6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
              >
                <ArrowRight />
              </button>
            </>
          )}

          {!isMobile && (
            <>
              <button
                onClick={handlePrev}
                className="absolute cursor-pointer left-[-60px] top-1/3 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute cursor-pointer right-[-60px] top-1/3 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
              >
                <ArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
