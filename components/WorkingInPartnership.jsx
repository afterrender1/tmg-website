"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    { name: "Close Brothers", src: "/images/partnership/cb.png" },
    { name: "Motot Check", src: "/images/partnership/mc.png" },
    { name: "RAC", src: "/images/partnership/rac.png" },
    { name: "Howden", src: "/images/partnership/hoaden.png" },
    { name: "HPI", src: "/images/partnership/hpi.png" },
];

// Same exact animations
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } },
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WorkingInPartnership = () => {
    return (
        <section className="bg-[#F2F3F7] py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">

                {/* Header */}
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    variants={headerVariants}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 lg:mb-16 text-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    Working in Partnership With
                </motion.h2>

                {/* Responsive Logo Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-center justify-center w-full"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                width={160}
                                height={90}
                                className="object-contain max-w-[120px] sm:max-w-[140px] lg:max-w-40 w-full h-auto transition-transform duration-300 hover:scale-110"
                                priority
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkingInPartnership;