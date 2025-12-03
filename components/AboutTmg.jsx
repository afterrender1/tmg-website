"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
// *** ADD THIS IMPORT IN YOUR PROJECT ***
import { motion } from "framer-motion"; 

// 2. CONFIGURE FONTS with variables for explicit use
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"], variable: '--font-montserrat' });

// --- Framer Motion Variants ---
// Stagger container for the three main columns
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each column's animation
        },
    },
};

// Item variant for individual column cards
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

// Simple fade-up for header and hero section
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
// ------------------------------------

const AboutTmg = () => {
    return (
        <section className={`bg-white text-black py-20 px-6 sm:px-12 lg:px-24 ${montserrat.variable} ${poppins.variable}`}>
            <div className="max-w-7xl mx-auto">

                {/* 1. Header (Fade Up Animation) */}
                <motion.header 
                    initial="hidden" 
                    whileInView="show" 
                    variants={fadeUpVariants} 
                    viewport={{ once: true }} 
                    className="text-center mb-16"
                >
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                        ABOUT TMG SPECIALIST VANS
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'poppins' }}>
                        The Custom Van Specialists
                    </h1>
                </motion.header>

                {/* 2. Hero Image Banner (Simple Fade Up) */}
                <motion.div 
                    initial="hidden" 
                    whileInView="show" 
                    variants={fadeUpVariants} 
                    viewport={{ once: true }} 
                    className="relative w-full aspect-21/9 rounded-xl overflow-hidden shadow-2xl mb-20 border border-gray-100"
                >
                    <Image
                        src="/images/ourlatestarrivels/vcaddy.png"
                        alt="TMG Custom Van Build - Full View"
                        fill
                        className="object-cover filter grayscale brightness-[.7] transition duration-500 hover:brightness-[.6]"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            The Northwest's Leading Custom Builders
                        </h2>
                        <p className="text-lg opacity-90" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We transform vans inside and out, creating one-off builds that turn heads.
                        </p>
                    </div>
                </motion.div>

                {/* 3. Three-Column Content Section (Staggered Grid Animation) */}
                <motion.div 
                    initial="hidden" 
                    whileInView="show" 
                    variants={containerVariants} 
                    viewport={{ once: true, amount: 0.3 }} 
                    className="grid lg:grid-cols-3 gap-10"
                >

                    {/* Column 1: Mission and Specialities (motion.div item) */}
                    <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-lg border-t-4 border-black shadow-sm">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Our Mission
                        </h3>
                        <p className="mb-4 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            Trade Motor Group (TMG) is a new and used custom van specialist. We modify vehicles both cosmetically and mechanically to create the **best custom vans you will ever own.
                        </p>
                        <p className="mb-4 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We customise and sell customised vehicles, carrying out all conversions to the **highest standards all in house under one roof**.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Specializing In:</h4>
                            <ul className="list-none space-y-1 text-gray-700 font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                                <li><span className="text-black mr-2">▪</span> VW Transporter T5 and T6's</li>
                                <li><span className="text-black mr-2">▪</span> Custom Caddy Vans</li>
                                <li><span className="text-black mr-2">▪</span> Ford Transit Customs</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Column 2: Quality Assurance (motion.div item) */}
                    <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg border-t-4 border-black shadow-md">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Quality Guarantee
                        </h3>
                        <p className="mb-4 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We ensure the highest quality conversions in several ways:
                        </p>

                        <div className="space-y-4 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <div className="flex items-start">
                                <span className="text-green-600 text-2xl mr-3 leading-none font-bold">✓</span>
                                <div>
                                    <p className="font-semibold">OEM Parts & Mods</p>
                                    <p className="text-sm">Our use of **OEM parts and OEM+ modifications** ensures top-quality results.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-green-600 text-2xl mr-3 leading-none font-bold">✓</span>
                                <div>
                                    <p className="font-semibold">Vehicle Integrity</p>
                                    <p className="text-sm">We only buy high-quality used base vehicles that have **never been written off** and have **clean titles with excellent service history**.</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Image for visual break */}
                        <div className="relative w-full h-32 mt-6">
                            <Image
                                src="/images/about-right.png" // Secondary image integrated here
                                alt="Workshop Detail"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Column 3: Finance and Contact (CTA) (motion.div item) */}
                    <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-lg border-t-4 border-black shadow-sm">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                            Finance & Next Steps
                        </h3>
                        <p className="mb-6 text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We can supply finance for your new van via the household brand **Close Brothers** at very competitive rates — please ask for a quote.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="#"
                                className="block px-6 py-3 bg-black hover:text-black hover:border border hover:bg-white text-white text-center font-semibold rounded-full transition shadow-lg"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Get a Finance Quote
                            </a>
                            <p className="text-center text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                or we'll help you build your perfect van.
                            </p>
                            <a
                                href="tel:0123456789"
                                className="block text-xl text-black font-bold text-center mt-4"
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