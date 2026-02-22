"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CareerSubscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    setError("");
    // এখানে future এ API call দিতে পারো
  };

  return (
    <section className="w-full py-10">
      <div className="mx-auto container px-4 md:px-0 rounded-tl-4xl overflow-hidden  bg-white grid grid-cols-1 lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative bg-linear-to-br from-sky-300 via-sky-200 to-sky-100 p-8 flex flex-col justify-between">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/girl.png"
              alt="Career at Oporishim"
              width={420}
              height={520}
              className="relative z-10"
            />

            {/* Curve / icon effect */}
            <div className="absolute -top-6 -left-6">
              <div className="h-[340px] w-[340px] rounded-full border-2 border-white/80" />
            </div>
          </div>

          {/* Text */}
          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold tracking-wide text-blue-800">
              CAREER
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              Thinking <br />
              <span className="font-medium text-slate-700">
                about becoming a
              </span>{" "}
              <span className="text-blue-800">Oporishimian</span>
            </h2>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-4 text-blue-800 font-semibold"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-800 after:transition-all after:duration-300 group-hover:after:w-full">
                View Job Opportunities
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-800 transition-all duration-300 group-hover:bg-blue-800 group-hover:text-white">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="p-8 lg:p-14 flex flex-col border-gray-300 border justify-center">
          <h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
            Stay up to date <br />
            with insights from{" "}
            <span className="text-blue-800 font-bold">Oporishim!</span>
          </h3>

          {/* Email Input + Button */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              {/* Mail Icon */}
              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              {/* Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address"
                className={`
        w-full
        h-14
        rounded-full
        border
        bg-white
        pl-12
        pr-40
        text-md
        text-gray-800
        outline-none
        shadow-sm
        transition-all duration-300
        focus:border-blue-700 focus:shadow-md
        placeholder:text-gray-400
        focus:placeholder:opacity-0
        ${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}
      `}
              />

              {/* Button (Same Height, No Gap Right Side) */}
              <button
                onClick={handleSubscribe}
                className="
        absolute
        top-0
        right-0
        h-14
        px-10
        rounded-full
        cursor-pointer
        bg-blue-800
        text-md
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-950
        hover:shadow-lg
        active:scale-95
      "
              >
                Subscribe
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="mt-2 flex items-center gap-1 text-sm font-medium text-red-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
