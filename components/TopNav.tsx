"use client";

import Link from "next/link";
import { Youtube, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Case Studies", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Career", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function TopNav() {
  return (
    <header className="w-full bg-[#0B164A]">
      <div className="mx-auto flex container items-center justify-center md:justify-between px-6 py-4">
        {/* LINKS (md & lg only) */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-lg font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.name}

              {/* underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ICONS (all devices, but only visible on sm alone) */}
        <div className="flex items-center gap-4 md:gap-5">
          <SocialIcon href="#" icon={<Linkedin size={18} />} />
          <SocialIcon href="#" icon={<Youtube size={18} />} />

          <SocialIcon href="#" icon={<Facebook size={18} />} />
        </div>
      </div>
    </header>
  );
}

/* SOCIAL ICON */
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B164A]"
    >
      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
        {icon}
      </span>
    </Link>
  );
}
