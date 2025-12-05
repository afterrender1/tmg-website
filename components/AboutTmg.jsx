"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import { motion } from "framer-motion"; // Assuming this is imported globally or available

// 2. CONFIGURE FONTS with variables for explicit use
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"], variable: '--font-montserrat' });

// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
// ------------------------------------

const AboutTmg = () => {
    return (
        <section className={`bg-white text-black py-16 md:py-20 xl:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 ${montserrat.variable} ${poppins.variable}`}>
            <div className="max-w-7xl 2xl:max-w-8xl mx-auto"> {/* Added 2XL max-width */}

                {/* 1. Header (Fade Up Animation) - Responsive Text Scaling */}
                <motion.header
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        ABOUT TMG SPECIALIST VANS
                    </p>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        The Custom Van Specialists
                    </h1>
                </motion.header>

                {/* 2. Hero Image Banner - Responsive Aspect Ratio & Text */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true }}
                    className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden shadow-2xl mb-16 md:mb-20 border border-gray-100"
                >
                    <Image
                        src="/images/ourlatestarrivels/vcaddy.png"
                        alt="TMG Custom Van Build - Full View"
                        fill
                        className="object-cover filter grayscale brightness-[.7] transition duration-500 hover:brightness-[.6]"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 text-white max-w-4xl">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold mb-1"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            The Northwest's Leading Custom Builders
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg opacity-90" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We transform vans inside and out, creating one-off builds that turn heads.
                        </p>
                    </div>
                </motion.div>

                {/* 3. Three-Column Content Section - Responsive Grid and Gaps */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12" // Enhanced responsive gap
                >

                    {/* Column 1: Mission and Specialities */}
                    <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-xl border-t-4 border-black shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Our Mission
                        </h3>
                        <p className="mb-4 text-sm md:text-base text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            Trade Motor Group (TMG) is a new and used custom van specialist. We modify vehicles both cosmetically and mechanically to create the **best custom vans you will ever own.**
                        </p>
                        <p className="mb-4 text-sm md:text-base text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We customise and sell customised vehicles, carrying out all conversions to the **highest standards all in house under one roof**.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Specializing In:</h4>
                            <ul className="list-none space-y-1 text-sm md:text-base text-gray-700 font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                                <li><span className="text-black mr-2">▪</span> VW Transporter T5 and T6's</li>
                                <li><span className="text-black mr-2">▪</span> Custom Caddy Vans</li>
                                <li><span className="text-black mr-2">▪</span> Ford Transit Customs</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Column 2: Quality Assurance */}
                    <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg border-t-4 border-black shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Quality Guarantee
                        </h3>
                        <p className="mb-4 text-sm md:text-base text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We ensure the highest quality conversions in several ways:
                        </p>

                        <div className="space-y-4 text-sm md:text-base text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <div className="flex items-start">
                                <span className="text-green-600 text-2xl mr-3 leading-none font-bold">✓</span>
                                <div>
                                    <p className="font-semibold">OEM Parts & Mods</p>
                                    <p className="text-xs md:text-sm">Our use of **OEM parts and OEM+ modifications** ensures top-quality results.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-green-600 text-2xl mr-3 leading-none font-bold">✓</span>
                                <div>
                                    <p className="font-semibold">Vehicle Integrity</p>
                                    <p className="text-xs md:text-sm">We only buy high-quality used base vehicles that have **never been written off** and have **clean titles with excellent service history**.</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Image - Responsive height maintained */}

                    </motion.div>

                    {/* Column 3: Finance and Contact (CTA) */}
                    <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-lg border-t-4 border-black shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Finance & Next Steps
                        </h3>
                        <p className="mb-6 text-sm md:text-base text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We can supply finance for your new van via the household brand **Close Brothers** at very competitive rates — please ask for a quote.
                        </p>

                        <div className="space-y-4 pt-4 border-t border-gray-200">
                            <a
                                href="#"
                                className="block px-6 py-3 bg-black hover:text-black hover:border hover:bg-white text-white text-center font-semibold rounded-full transition shadow-lg"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Get a Finance Quote
                            </a>
                            <p className="text-center text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                or we'll help you build your perfect van.
                            </p>
                            <a
                                href="tel:0123456789"
                                className="block text-lg md:text-xl text-black font-bold text-center mt-4"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Call Us Today!
                            </a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutTmg;