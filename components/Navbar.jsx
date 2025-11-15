"use client";

import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Showroom", href: "/showroom" },
    { name: "Sold", href: "/sold" },
    { name: "Finance", href: "/finance" },
    { name: "Warranty", href: "/warranty" },
    { name: "Customisation", href: "/customize" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sell Your Van", href: "/sell" },
    { name: "Reviews", href: "/reviews" },
    { name: "Online Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className=" text-black sticky top-4 z-50  ">
      <div className="mx-10 px-4 sm:px-6 lg:px-8 bg-[#F2F3F7] rounded-full">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-48 h-8">
              <Image
                src="/logos/tmglogo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* CENTER: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 uppercase " style={{fontFamily : "montserrat"}}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold  rounded  hover:text-black/50 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: User + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Login/User button */}
            <button className="p-2  cursor-pointer rounded-full border hover:text-white bg-white hover:bg-black text-black transition">
              <User size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded hover:bg-white hover:text-black transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded hover:bg-white hover:text-black text-white"
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
