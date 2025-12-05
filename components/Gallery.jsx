"use client";

import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import { Search } from 'lucide-react'; // Icon for a clean, modern look
import Navbar from "./Navbar";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

// Fonts
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500"], // Boldest weights for high-impact typography
    variable: "--font-montserrat",
});

// Motion Variants (Reused)
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 }, // Slightly faster stagger
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

// Expanded Placeholder Image URLs
const IMAGES = [
    // Two Large Pink/Special Builds
    { src: "/images/gallery/pink1.png", layout: "large" },
    { src: "/images/gallery/pink2.png", layout: "small" },
    // Two Gray/Metallic Builds
    { src: "/images/gallery/gray1.png", layout: "small" },
    { src: "/images/gallery/gray2.png", layout: "medium" }, // Medium size to break the pattern
    // Internal/Detail Shots
    { src: "/images/gallery/stair1.png", layout: "small" },
    { src: "/images/gallery/stair2.png", layout: "small" },
    // Red/Performance Build
    { src: "/images/gallery/red2.png", layout: "medium" },
    // New additions for variety and fullness
    { src: "/images/showroom/ftc130ps.png", layout: "small" },
    { src: "/images/showroom/vcm1.4.png", layout: "small" },
    { src: "/images/showroom/vcm2.03.png", layout: "medium" },
    { src: "/images/showroom/vcred.png", layout: "small" },
    { src: "/images/showroom/ftcsport.png", layout: "small" },
];

const getGridClasses = (layout) => {
    switch (layout) {
        case 'large':
            return "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto"; // Very prominent
        case 'medium':
            return "md:col-span-1 md:row-span-2 aspect-[1/2] md:aspect-auto"; // Tall column
        case 'small':
        default:
            return "aspect-square"; // Standard square card
    }
};

export default function Gallery() {
    return (
        <>
            <Navbar />
            <div className="bg-white py-20"> {/* Changed outer background to white for contrast */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* === Header Section === */}
                    <motion.header
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16 border-b border-gray-200 pb-8"
                    >
                        <h1
                            className={`text-5xl md:text-6xl font-black text-black mb-3 ${montserrat.className}`}
                        >
                            Our Signature Van Builds
                        </h1>
                        <p className={`text-xl text-gray-700 max-w-3xl mx-auto ${poppins.className}`}>
                            A look inside the precision, style, and bespoke engineering that defines every TMG creation.
                        </p>
                    </motion.header>

                    {/* === Image Grid Section (Masonry-like) === */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 bg-gray-50 rounded-xl shadow-inner"
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

                                {/* Modern Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Search className="w-10 h-10 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* === Footer CTA === */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/contact"
                            className={`inline-block px-8 py-3 text-lg font-semibold uppercase tracking-wider rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] ${poppins.className}`}
                        >
                            Start Customising Your Van
                        </a>
                    </motion.div>

                </div>
            </div>
            <WorkingInPartnership />
            <Reviews />
            <ContactSection />
            <Footer />
        </>
    );
}