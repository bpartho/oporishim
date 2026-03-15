"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Outside click close
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Document check kora server-side error bondho korar jonno
    if (typeof document === "undefined") return;

    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("mousedown", handleClick);
      }
    };
  }, [open]);

  // ESC close
  useEffect(() => {
    // Window check kora
    if (typeof window === "undefined") return;

    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden w-full flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="text-2xl text-white font-bold tracking-widest">AIT</div>

        {/* MENU ICON → ROTATE INTO X */}
        <motion.button
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 360 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-white p-2"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-[70%] sm:w-[55%] bg-[#050505] z-50 shadow-xl text-white p-6"
            ref={ref}
          >
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-6 mt-10 text-lg font-medium">
              <span className="cursor-pointer hover:text-purple-300">Work</span>

              <span className="cursor-pointer hover:text-purple-300">
                Expertise
              </span>

              <span className="cursor-pointer hover:text-purple-300">
                Company
              </span>

              <span className="cursor-pointer hover:text-purple-300">
                Testimonials
              </span>

              {/* MORE DROPDOWN */}
              <div>
                <div
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="cursor-pointer flex items-center gap-2 hover:text-purple-300"
                >
                  More
                  {moreOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-4 mt-3 flex flex-col gap-3 text-sm"
                    >
                      <span className="cursor-pointer hover:text-white">
                        Our Work Culture
                      </span>
                      <span className="cursor-pointer hover:text-white">
                        Partners
                      </span>
                      <span className="cursor-pointer hover:text-white">
                        Process
                      </span>
                      <span className="cursor-pointer hover:text-white">
                        History
                      </span>
                      <span className="cursor-pointer hover:text-white">
                        FAQ
                      </span>
                      <span className="cursor-pointer hover:text-white">
                        Contact Us
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA BUTTON */}
              <button className="mt-2 bg-linear-to-r from-purple-600 to-indigo-700 px-5 py-3 rounded-xl text-white font-semibold shadow-lg">
                Free Consultation →
              </button>

              {/* SOCIAL ICONS */}
              <div className="flex gap-6 mt-6 text-xl opacity-90">
                <i className="fa-brands fa-facebook cursor-pointer"></i>
                <i className="fa-brands fa-instagram cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter cursor-pointer"></i>
                <i className="fa-brands fa-linkedin cursor-pointer"></i>
                <i className="fa-brands fa-youtube cursor-pointer"></i>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
