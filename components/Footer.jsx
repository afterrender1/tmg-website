"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150 } },
};

const Footer = () => {
    return (
   <>
   
        <footer className={`bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-24 ${montserrat.className}`}>
            {/* Top Section: Grid Columns */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-20"
            >
                {/* Column 1: Logo + FCA Info */}
                <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-5 space-y-4 sm:space-y-6">
                    <div className="relative w-36 sm:w-48 h-10 sm:h-12 bg-white rounded-lg p-1 sm:p-2">
                        <Image
                            src="/logos/tmglogo.png"
                            fill
                            alt="TMG Specialist Vans Logo"
                            className="object-contain"
                        />
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-gray-400 font-normal">
                        TMG-SV Specialist Vans is a trading style of Trade Motor Group. Trade Motor Group is authorised and regulated by the Financial Conduct Authority (FCA) for Consumer Credit activities.
                    </p>

                    <div className="border-t border-white/10 pt-2 sm:pt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                        <p>
                            <span className="font-semibold text-white/80">FCA Firm Reference Number:</span> 947424
                        </p>
                        <p>
                            Our permitted business is arranging general insurance and finance contracts. Verify this on the{" "}
                            <Link href="https://www.fca.org.uk" target="_blank" className="underline hover:text-white/80 transition">
                                FCA Register (www.fca.org.uk)
                            </Link>.
                        </p>
                    </div>
                </motion.div>

                {/* Column 2: Registered Office */}
                <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4 space-y-4 sm:space-y-6 md:border-l md:border-white/10 md:pl-4 sm:md:pl-8 mt-8 sm:mt-0">
                    <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-white">Registered Details</h3>

                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-300">Registered Office Address</h4>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                            Unit 28, Phoenix Industrial Estate,<br />
                            Failsworth, Manchester, Lancashire, M35 9DS
                        </p>
                    </div>

                    <div className="space-y-1 sm:space-y-2 pt-1 sm:pt-2">
                        <p className="text-xs sm:text-sm text-gray-400">
                            <span className="font-semibold text-white/80">Company Number:</span> 13206777
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                            <span className="font-semibold text-white/80">Phone:</span> 0330 043 4263
                        </p>
                    </div>
                </motion.div>

                {/* Column 3: Quick Links */}
                <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-3 space-y-4 sm:space-y-6 md:border-l md:border-white/10 md:pl-4 sm:md:pl-8 mt-8 sm:mt-0">
                    <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-white">Quick Links</h3>

                    <ul className="text-xs sm:text-sm md:text-base text-gray-400 space-y-2 sm:space-y-3 font-normal">
                        <li className="hover:text-white transition"><Link href="/showroom">Showroom</Link></li>
                        <li className="hover:text-white transition"><Link href="/finance">Finance & Applications</Link></li>
                        <li className="hover:text-white transition"><Link href="/warranty">Warranty & Support</Link></li>
                        <li className="hover:text-white transition"><Link href="/customisation">Customisation</Link></li>
                        <li className="hover:text-white transition"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Bottom Line: Copyright */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={itemVariants}
                viewport={{ once: true, amount: 0.8 }}
                className="max-w-7xl mx-auto border-t border-white/10 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-500 font-normal"
            >
                &copy; {new Date().getFullYear()} AFTERRENDER — All Rights Reserved.
            </motion.div>
        </footer></>
    );
};

export default Footer;
