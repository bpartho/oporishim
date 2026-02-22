"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    title: "Solutions",
    href: "/solutions",
    items: ["POS Software", "CRM Software", "E-Commerce Platform"],
  },
  {
    title: "Services",
    href: "/services",
    items: ["Web Development", "Mobile App", "UI/UX Design"],
  },
  {
    title: "Latest Thinking",
    href: "/insights",
    items: ["Blogs", "Case Studies", "Insights"],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    items: ["Web Projects", "Mobile Projects"],
  },
  {
    title: "Discover Oporishim",
    href: "/about",
    items: ["About Us", "Careers", "Contact"],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header
        className={`
    fixed top-0 w-full z-40 hidden lg:block
    transition-all duration-500
    ${
      scrolled && !menuOpen
        ? "bg-blue-950/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }
  `}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center mt-3">
            <Image
              src="/images/logos/Oporishimwhite.svg"
              alt="Oporishim Logo"
              width={160}
              height={40}
              priority
              className="h-auto w-64"
            />
          </Link>

          <nav className="flex items-center gap-10 text-white">
            {NAV_ITEMS.map((nav) => {
              // ✅ current page active kina check
              const isCurrentPage = pathname === nav.href;

              return (
                <div
                  key={nav.title}
                  onMouseEnter={() => setActive(nav.title)}
                  onMouseLeave={() => setActive(null)}
                  className="relative"
                >
                  {/* ===== TITLE LINK ===== */}
                  <Link href={nav.href} className="relative inline-block">
                    <span className="relative">
                      {nav.title}

                      {/* ✅ HOVER + ACTIVE UNDERLINE */}
                      {(active === nav.title || isCurrentPage) && (
                        <motion.span
                          layoutId="underline"
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"
                        />
                      )}
                    </span>
                  </Link>

                  {/* ===== DROPDOWN ===== */}
                  {nav.items.length > 0 && (
                    <AnimatePresence>
                      {active === nav.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          className="
          absolute
          top-14
          left-0
          w-64
          bg-slate-900
          rounded-xl
          shadow-xl
          overflow-visible
          z-40
        "
                        >
                          {/* 🔥 TRIANGLE (LOWER LAYER) */}
                          <div
                            className="
            absolute
            -top-3
            left-8
            w-4
            h-4
            bg-slate-900
            rotate-45
            z-0
          "
                          />

                          {/* 🔥 MENU CONTENT (UPPER LAYER) */}
                          <div className="relative z-10">
                            {nav.items.map((item) => (
                              <Link
                                key={item}
                                href="#"
                                className="
                block px-6 py-4 text-sm
                hover:bg-slate-800
                transition
              "
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* CTA BUTTON */}
            <Link
              href="#"
              className="
          group ml-6 inline-flex items-center gap-2
          rounded-full bg-red-500 px-6 py-3
          font-medium text-white transition-colors
          hover:bg-red-600 hover:shadow-lg
        "
            >
              Book a Free Consultation
              <span className="inline-block transition-transform group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE HEADER BG ================= */}
      <div
        className={`
          fixed top-0 left-0 w-full h-18 z-40 lg:hidden
          transition-all duration-500
          ${
            scrolled && !menuOpen
              ? "bg-blue-950/80 backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      />

      {/* ================= MOBILE LOGO =================  */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-60 lg:hidden flex items-center"
      >
        <Image
          src="/images/logos/Oporishimwhite.svg"
          alt="Oporishim Logo"
          width={180}
          height={44}
          priority
          className="h-auto w-[180px] sm:w-[190px] mt-1"
        />
      </Link>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-60 lg:hidden text-white"
      >
        <motion.div
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.div>
      </button>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-blue-950/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="h-full w-[85%] bg-slate-900 p-6 text-white rounded-r-xl"
            >
              <div className="h-20" />

              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((nav) => {
                  const isSimpleLink = nav.items.length === 0;
                  const open = mobileActive === nav.title;

                  return isSimpleLink ? (
                    /* ===== Solutions (NO ACCORDION) ===== */
                    <Link
                      key={nav.title}
                      href={nav.href!}
                      onClick={() => setMenuOpen(false)}
                      className="text-xl font-medium"
                    >
                      {nav.title}
                    </Link>
                  ) : (
                    <div key={nav.title}>
                      {/* ===== TITLE + ICON ROW ===== */}
                      <div className="w-full flex items-center justify-between text-xl font-medium">
                        {/* TITLE → PAGE NAV */}
                        <Link
                          href={nav.href!}
                          onClick={() => setMenuOpen(false)}
                          className="flex-1"
                        >
                          {nav.title}
                        </Link>

                        {/* ICON → ACCORDION TOGGLE */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileActive(open ? null : nav.title);
                          }}
                        >
                          <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="flex items-center justify-center"
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>
                      </div>

                      {/* ===== DROPDOWN ===== */}
                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 pt-3 space-y-3 text-white/80"
                          >
                            {nav.items.map((item) => (
                              <Link
                                key={item}
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block text-lg hover:text-white"
                              >
                                {item}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* CTA */}
                <Link
                  href="#"
                  className="mt-8 bg-red-500 px-6 py-3 rounded-full text-center font-semibold hover:bg-red-600"
                >
                  Book a Free Consultation →
                </Link>

                {/* Social */}
                <div className="mt-6 flex gap-8 justify-center">
                  <Linkedin />
                  <Youtube />
                  <Facebook />
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
