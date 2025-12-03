"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link"; // Use Next.js Link for navigation

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Footer = () => {
  return (
    <footer className={`bg-black text-white py-16 px-6 sm:px-12 lg:px-24 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-x-12 lg:gap-x-20">

        {/* Column 1 (col-span-4): LOGO + FCA/Legal Info */}
        <div className="md:col-span-5 lg:col-span-5 space-y-6">
          <div className="relative w-48 h-12 bg-white rounded-lg p-2">
            <Image
              src="/logos/tmglogo.png"
              fill
              alt="TMG Specialist Vans Logo"
              className="object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-400 font-normal">
            TMG-SV Specialist Vans is a trading style of Trade Motor Group. Trade Motor Group is authorised and regulated by the Financial Conduct Authority (FCA) for Consumer Credit activities.
          </p>

          <div className="border-t border-white/10 pt-4 space-y-2">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-white/80">FCA Firm Reference Number:</span> 947424
            </p>
            <p className="text-xs text-gray-500">
              Our permitted business is arranging general insurance and finance contracts. Verify this on the{" "}
              <Link href="https://www.fca.org.uk" target="_blank" className="underline hover:text-white/80 transition">
                FCA Register (www.fca.org.uk)
              </Link>.
            </p>
          </div>
        </div>

        {/* Column 2 (col-span-4): REGISTERED OFFICE & COMPANY INFO */}
        <div className="md:col-span-4 lg:col-span-4 space-y-6 md:border-l md:border-white/10 md:pl-8">
          <h3 className="text-xl font-semibold uppercase tracking-wider text-white">Registered Details</h3>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-gray-300">Registered Office Address</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Unit 28, Phoenix Industrial Estate,<br />
              Failsworth, Manchester, Lancashire, M35 9DS
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white/80">Company Number:</span> 13206777
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white/80">Phone:</span> 0330 043 4263
            </p>
          </div>
        </div>

        {/* Column 3 (col-span-4): QUICK LINKS */}
        <div className="md:col-span-3 lg:col-span-3 space-y-6 md:border-l md:border-white/10 md:pl-8">
          <h3 className="text-xl font-semibold uppercase tracking-wider text-white">Quick Links</h3>

          <ul className="text-base text-gray-400 space-y-3 font-normal">
            <li className="hover:text-white transition">
              <Link href="/showroom">Showroom</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/finance">Finance & Applications</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/warranty">Warranty & Support</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/customisation">Customisation</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM LINE (Copyright) */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-300 font-normal">
        &copy; {new Date().getFullYear()} AFTERRENDER — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;