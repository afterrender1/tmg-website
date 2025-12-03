"use client";

import React from "react";
import Image from "next/image";
// *** ADD THIS IMPORT IN YOUR PROJECT ***
import { motion } from "framer-motion";

const partners = [
    { name: "Close Brothers", src: "/images/partnership/cb.png" },
    { name: "Motot Check", src: "/images/partnership/mc.png" },
    { name: "RAC", src: "/images/partnership/rac.png" },
    { name: "Howden", src: "/images/partnership/hoaden.png" },
    { name: "HPI", src: "/images/partnership/hpi.png" },
];

// --- Framer Motion Variants ---

// Container for staggering the logos
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each logo's animation
        },
    },
};

// Variants for individual logo items (simple fade-in and scale-up)
const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } },
};

// Variants for the main header (fade-down)
const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
// ------------------------------------


const WorkingInPartnership = () => {
    return (
        <section className="bg-[#F2F3F7] max-w-7xl mx-auto rounded-lg py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">

                {/* Header (Fade In Animation) */}
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    variants={headerVariants}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    Working in Partnership With
                </motion.h2>

                {/* Partners Grid (Staggered Animation) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.5 }} // Animate when half the grid is visible
                    className="grid grid-cols-2 sm:grid-cols-6 gap-8 items-center justify-items-center"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants} // Individual logo animation
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                width={150}
                                height={80}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkingInPartnership;