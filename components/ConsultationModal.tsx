"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  services: string[];
  selectedService?: string;
};

export default function ConsultationModal({
  open,
  onClose,
  services,
  selectedService,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={onClose} // ✅ outside click closes
        >
          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // prevent close on inside click
            className="
              relative w-full max-w-3xl rounded-2xl bg-white
              p-6 sm:p-8 shadow-2xl
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-black transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0B2C8F]">
              BOOK A CONSULTATION
            </h2>
            <p className="mt-2 text-center text-slate-600 text-sm sm:text-base">
              Let’s talk to deliver innovation and scale your business faster
            </p>

            {/* FORM */}
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email Address" type="email" />

              <Input label="Mobile Number" className="md:col-span-2" />

              {/* Services */}
              <div className="relative">
                <select
                  defaultValue={selectedService}
                  className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-700 outline-none focus:border-[#0B2C8F]"
                >
                  <option value="">Select Service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <label className="absolute left-0 -top-3 text-xs text-slate-500">
                  Services
                </label>
              </div>

              {/* Terms */}
              <div className="md:col-span-2 flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 accent-[#0B2C8F]" />
                <span>
                  By checking the box, you agree to our{" "}
                  <span className="text-[#0B2C8F] font-medium">
                    Terms & Privacy Policy
                  </span>
                </span>
              </div>

              {/* Button */}
              <div className="md:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="
                    rounded-full bg-red-500 px-10 py-3
                    font-semibold text-white
                    hover:bg-red-600 transition
                  "
                >
                  Send Now
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------ */
/* Floating Input UI */
/* ------------------ */
function Input({
  label,
  type = "text",
  className = "",
}: {
  label: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        placeholder=" "
        className="
          peer w-full border-b border-slate-300 bg-transparent py-3
          text-slate-700 outline-none
          focus:border-[#0B2C8F]
        "
      />
      <label
        className="
          absolute left-0 top-3 text-slate-500
          transition-all text-sm
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-slate-400
          peer-focus:-top-3 peer-focus:text-xs
          peer-focus:text-[#0B2C8F]
        "
      >
        {label}
      </label>
    </div>
  );
}
