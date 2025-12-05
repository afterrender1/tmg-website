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
const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TmgFinanceAndVan = () => {
    // Define font styles for cleaner JSX
    const montserratStyle = { fontFamily: 'var(--font-montserrat)' };
    const poppinsStyle = { fontFamily: 'var(--font-poppins)' };

    return (
        // Apply font variables to the root
        <section className={`bg-white text-gray-900 py-24 px-4 sm:px-8 lg:px-16 ${montserrat.variable} ${poppins.variable} font-sans`}>
            <div className="max-w-7xl mx-auto space-y-24">

                {/* 1. Section: Close Brothers Finance (Minimalist Card) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }} // Animate when 30% of element is in view
                    className="flex flex-col lg:flex-row items-center gap-10 bg-white p-0 rounded-2xl border border-gray-200 shadow-sm transition duration-300"
                >

                    {/* Image Container */}
                    <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden border-b lg:border-r border-gray-100">
                        <Image
                            src="/images/finance/brothers.png"
                            alt="Close Brothers Finance"
                            fill
                            className="object-cover transition duration-500 hover:scale-[1.05] filter"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text and CTA */}
                    <div className="lg:w-1/2 space-y-6 p-6 lg:p-10">
                        <h2
                            className="text-4xl md:text-5xl font-bold leading-tight"
                            style={montserratStyle}
                        >
                            Finance Made Simple
                        </h2>
                        <h3
                            className="text-xl font-semibold text-gray-700"
                            style={montserratStyle}
                        >
                            Working With Close Brothers
                        </h3>

                        <p
                            className="text-gray-700 text-lg leading-relaxed border-l-4 border-black pl-4"
                            style={poppinsStyle}
                        >
                            You can apply for van finance online directly with us. We partner with the established household brand **Close Brothers** to offer **competitive rates** and fast decisions, making your dream van a reality.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="/finance-application"
                            className="inline-block px-10 py-3.5 bg-black text-white font-semibold tracking-wide rounded-full hover:bg-gray-800 transition text-base shadow-lg"
                            style={poppinsStyle}
                        >
                            APPLY FOR FINANCE
                        </a>
                    </div>
                </motion.div>

                {/* 2. Section: TMG Your Van (Conversion Focus - Reverse Layout) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-white p-0 rounded-2xl border border-gray-200 shadow-sm transition duration-300"
                >

                    {/* Image Container */}
                    <div className="relative w-full lg:w-1/2 h-80 md:h-96 rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none overflow-hidden border-b lg:border-l border-gray-100">
                        <Image
                            src="/images/ourlatestarrivels/vcaddy.png"
                            alt="TMG Your Van"
                            fill
                            className="object-cover transition duration-500 hover:scale-[1.05] filter grayscale"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text and CTA */}
                    <div className="lg:w-1/2 space-y-6 p-6 lg:p-10">
                        <h2
                            className="text-4xl md:text-5xl font-bold leading-tight"
                            style={montserratStyle}
                        >
                            Crafting Your Vision
                        </h2>
                        <h3
                            className="text-xl font-semibold text-gray-700"
                            style={montserratStyle}
                        >
                            TMG Your Van: Complete Conversions
                        </h3>

                        <p
                            className="text-gray-700 text-lg leading-relaxed border-l-4 border-black pl-4"
                            style={poppinsStyle}
                        >
                            **TMG your van** to turn heads like no other. We offer **complete van conversions** spanning the bodywork, bespoke interiors, and performance suspension. Experience a custom build executed to the highest standards, all in-house.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="/gallery"
                            className="inline-block px-10 py-3.5 border-2 border-black text-black font-semibold tracking-wide rounded-full hover:bg-black hover:text-white transition text-base shadow-lg"
                            style={poppinsStyle}
                        >
                            FIND OUT MORE
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TmgFinanceAndVan;