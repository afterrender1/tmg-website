"use client";

import React, { useState } from "react";
import { Menu, X, User, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Showroom", href: "/showroom" },
    { name: "Sold", href: "/sold" },
    { name: "Finance", href: "/finance" },
    { name: "Warranty", href: "/warranty" },
    { name: "Customisation", href: "/customisation" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sell Your Van", href: "/sell-your-van" },
    { name: "Reviews", href: "/reviews" },
    { name: "Online Shop", href: "https://tmgvans.shop/", target: "_blank" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="text-black sticky top-4 z-50">
      <div className="mx-3 sm:mx-6 lg:mx-10 px-4 sm:px-6 lg:px-8 bg-[#F2F3F7] rounded-full shadow-sm">
        <div className="flex items-center justify-between h-16">

          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-36 sm:w-44 lg:w-48 h-8">
              <Image
                src="/logos/tmglogo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* CENTER — DESKTOP NAV (Scrollable) */}
          <div
            // 🟢 RESPONSIVE CHANGES APPLIED HERE:
            // text-xs (smaller font) to fit more links
            // max-w-lg (larger maximum width) to give more room
            className={`hidden xl:flex items-center gap-2 uppercase text-xs font-semibold overflow-x-auto no-scrollbar whitespace-nowrap ${montserrat.className}`}
            style={{ maxWidth: "60vw" }} 
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.target ? link.target : "_self"}
                className="px-2 py-1 rounded hover:text-black/50 transition whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT — ICONS */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full border bg-white hover:bg-black hover:text-white transition">
              <User size={20} />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              // 🟢 RESPONSIVE CHANGE: Using xl:hidden to match the xl:flex of the desktop menu
              className="xl:hidden p-2 rounded hover:bg-gray-200 transition" 
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        // 🟢 RESPONSIVE CHANGE: Using xl:hidden to match the desktop menu breakpoint
        <div className="xl:hidden bg-black text-white shadow-lg rounded-xl mt-2 mx-3 sm:mx-6 animate-fadeIn">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;