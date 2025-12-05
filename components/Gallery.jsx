"use client";

import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import { Search } from 'lucide-react';
import Navbar from "./Navbar";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";

// Fonts
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-montserrat",
});

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const IMAGES = [
    { src: "/images/gallery/pink1.png", layout: "large" },
    { src: "/images/gallery/pink2.png", layout: "small" },
    { src: "/images/gallery/gray1.png", layout: "small" },
    { src: "/images/gallery/gray2.png", layout: "medium" },
    { src: "/images/gallery/stair1.png", layout: "small" },
    { src: "/images/gallery/stair2.png", layout: "small" },
    { src: "/images/gallery/red2.png", layout: "medium" },
    { src: "/images/showroom/ftc130ps.png", layout: "small" },
    { src: "/images/showroom/vcm1.4.png", layout: "small" },
    { src: "/images/showroom/vcm2.03.png", layout: "medium" },
    { src: "/images/showroom/vcred.png", layout: "small" },
    { src: "/images/showroom/ftcsport.png", layout: "small" },
];

const getGridClasses = (layout) => {
    switch (layout) {
        case 'large':
            return "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3]";
        case 'medium':
            return "col-span-2 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 aspect-[2/3]";
        case 'small':
        default:
            return "col-span-1 row-span-1 aspect-square";
    }
};

export default function Gallery() {
    return (
        <>
            <Navbar />
            <div className="bg-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 sm:mb-16 border-b border-gray-200 pb-6 sm:pb-8"
                    >
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2 sm:mb-3 ${montserrat.className}`}>
                            Our Signature Van Builds
                        </h1>
                        <p className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto ${poppins.className}`}>
                            A look inside the precision, style, and bespoke engineering that defines every TMG creation.
                        </p>
                    </motion.header>

                    {/* Image Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4 bg-gray-50 rounded-xl shadow-inner"
                    >
                        {IMAGES.map((image, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className={`overflow-hidden rounded-xl shadow-lg cursor-pointer group relative border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:border-black/50 ${getGridClasses(image.layout)}`}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Search className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mt-8 sm:mt-12"
                    >
                        <a
                            href="/contact"
                            className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold uppercase tracking-wider rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] ${poppins.className}`}
                        >
                            Start Customising Your Van
                        </a>
                    </motion.div>

                </div>
            </div>

            <WorkingInPartnership />
            <Reviews />
            <ContactSection />
        </>
    );
}
