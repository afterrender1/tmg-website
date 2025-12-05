"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import { motion } from "framer-motion";

// 2. CONFIGURE FONTS with variables for explicit use
const poppins = Poppins({ subsets: ["latin"], weight: ["500"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['500'], variable: '--font-montserrat' });

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
        // Apply responsive padding and font variables
        <section className={`bg-white text-gray-900 py-16 md:py-24 xl:py-32 px-4 sm:px-8 lg:px-16 ${poppins.className} font-sans`}>
            {/* Added 2XL max-width for very large screens */}
            <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto space-y-16 md:space-y-24">

                {/* 1. Section: Close Brothers Finance (Minimalist Card) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-2xl border border-gray-200 shadow-xl"
                >

                    {/* Image Container - Responsive sizing for height and aspect ratio */}
                    <div className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] xl:min-h-[500px] aspect-4/3 lg:aspect-auto rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
                        <Image
                            src="/images/finance/brothers.png"
                            alt="Close Brothers Finance"
                            fill
                            className="object-cover transition duration-500 hover:scale-[1.05] filter"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text and CTA - Responsive Padding and Text Size */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 p-6 md:p-10 xl:p-12">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight"
                            style={montserratStyle}
                        >
                            Finance Made Simple
                        </h2>
                        <h3
                            className="text-lg md:text-xl font-semibold text-gray-700"
                            style={montserratStyle}
                        >
                            Working With Close Brothers
                        </h3>

                        <p
                            className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-black pl-4"
                            style={poppinsStyle}
                        >
                            You can apply for van finance online directly with us. We partner with the established household brand **Close Brothers** to offer **competitive rates** and fast decisions, making your dream van a reality.
                        </p>

                        {/* CTA Button - Responsive size and padding */}
                        <a
                            href="/finance-application"
                            className="inline-block w-full sm:w-auto px-8 md:px-10 py-3 md:py-3.5 mt-2 bg-black text-white font-semibold tracking-wide rounded-full hover:bg-gray-800 transition text-sm md:text-base shadow-lg"
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
                    className="flex flex-col lg:flex-row-reverse items-stretch gap-0 bg-white rounded-2xl border border-gray-200 shadow-xl"
                >

                    {/* Image Container - Responsive sizing for height and aspect ratio */}
                    <div className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] xl:min-h-[500px] aspect-4/3 lg:aspect-auto rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none overflow-hidden">
                        <Image
                            src="/images/ourlatestarrivels/vcaddy.png"
                            alt="TMG Your Van"
                            fill
                            className="object-cover transition duration-500 hover:scale-[1.05] filter grayscale"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text and CTA - Responsive Padding and Text Size */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 p-6 md:p-10 xl:p-12">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight"
                            style={montserratStyle}
                        >
                            Crafting Your Vision
                        </h2>
                        <h3
                            className="text-lg md:text-xl font-semibold text-gray-700"
                            style={montserratStyle}
                        >
                            TMG Your Van: Complete Conversions
                        </h3>

                        <p
                            className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-black pl-4"
                            style={poppinsStyle}
                        >
                            **TMG your van** to turn heads like no other. We offer **complete van conversions** spanning the bodywork, bespoke interiors, and performance suspension. Experience a custom build executed to the highest standards, all in-house.
                        </p>

                        {/* CTA Button - Responsive size and padding */}
                        <a
                            href="/gallery"
                            className="inline-block w-full sm:w-auto px-8 md:px-10 py-3 md:py-3.5 mt-2 border-2 border-black text-black font-semibold tracking-wide rounded-full hover:bg-black hover:text-white transition text-sm md:text-base shadow-lg"
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