"use client";

import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
// Import icons for visual aids
import { Wrench, Users, Home, Truck, Lightbulb } from 'lucide-react';
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
    weight: ['600'], // Use 900 for strong header impact
    variable: "--font-montserrat",
});

// Motion Variants (Reused)
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } }, // Slightly faster stagger
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Less movement
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// Data Structure: Simplified and condensed for the new layout
const sections = [
    {
        title: "Expertise You Can Trust",
        content:
            "Our team doesn't just work on Caddys—we **live and breathe them**. With decades of combined experience, we intimately understand every detail. That knowledge allows us to execute even the most ambitious customisation projects with precision.\n\nFrom complex **engine remaps** to immaculate **interior retrimming**, you can rest assured your Caddy is in the hands of **true VW specialists**. We literally wrote the book on personalized Volkswagen van builds.",
        icon: Wrench,
        bgClass: "bg-white",
    },
    {
        title: "A Unique Consultative Approach",
        content:
            "Customising is personal, so we take a **concierge-level consultative approach** with every customer. We hold in-depth consultations to understand your **unique style preferences** and needs. \n\nWe then make **expert recommendations** to craft the ideal specification. If you have a clear vision, we'll collaborate closely to bring your dream Caddy build to life.",
        icon: Users,
        bgClass: "bg-gray-50",
    },
    {
        title: "Best-in-Class Resources & Facilities",
        content:
            "The TMG facility is outfitted with the **latest tools and technology** to handle virtually any Caddy customisation project **under one roof**. Our workshop boasts a **fully-equipped spray booth** for flawless paintwork, while our interior trimming department uses the **finest materials** and computerized equipment.\n\nThis unmatched in-house capacity ensures **seamless, factory-quality results**. Your Caddy never leaves the hands of our skilled technicians.",
        icon: Home,
        bgClass: "bg-white",
    },
];

// Reusable Paragraph Renderer to handle line breaks and bolding
const ParagraphRenderer = ({ content, baseClass, isDark }) => (
    content.split("\n\n").map((para, pIdx) => (
        <p
            key={pIdx}
            className={`${baseClass} leading-snug mb-3 ${poppins.className} ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
        >
            {/* Simple replacement for visual bolding of key phrases */}
            {para.split('**').map((text, i) => (
                i % 2 === 1 ? <strong key={i} className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>{text}</strong> : text
            ))}
        </p>
    ))
);


export default function WhyTMG() {
    return (
        <>
            {/* Main Header & CTA (Combined Intro) */}
            <div className="bg-black py-16 text-center mx-10 rounded-md">
                <h1 className={`text-4xl md:text-5xl font-black text-white ${montserrat.className}`}>
                    TMG: The Ultimate VW Customisation Partner
                </h1>
                <p className={`mt-3 text-lg text-gray-300 max-w-2xl mx-auto ${poppins.className}`}>
                    We are the region's premier destination for discerning van owners who demand the highest quality and attention to detail when personalising their prized Volkswagen Caddys.
                </p>
                <a
                    href="/contact"
                    className={`inline-block mt-6 px-6 py-2 text-sm font-semibold uppercase tracking-wider rounded-md bg-white text-black shadow-xl transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] ${poppins.className}`}
                >
                    Start Your Dream Build
                </a>
            </div>

            <div className="py-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="flex flex-col gap-0 border-t border-b border-gray-300" // Added border for clarity
                    >
                        {sections.map((section, idx) => {
                            const Icon = section.icon;
                            const isDark = section.bgClass.includes('bg-gray-900');
                            const basePadding = "p-8 sm:p-10 lg:p-12"; // Reduced padding

                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className={`${section.bgClass} ${basePadding} border-b border-gray-200`} // Removed shadow for cleaner look
                                >
                                    <div className="flex items-start gap-4 mb-3">
                                        <Icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'} mt-1 shrink-0`} />
                                        <h3
                                            className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-black'} ${montserrat.className}`}
                                        >
                                            {section.title}
                                        </h3>
                                    </div>

                                    <ParagraphRenderer content={section.content} baseClass="text-base" isDark={isDark} /> {/* Reduced text size */}

                                    {/* Transporter CTA */}
                                    {idx === sections.length - 1 && (
                                        <div className="mt-6 pt-3 border-t border-gray-700/50">
                                            <a
                                                href="/transporter-packs"
                                                className={`inline-flex items-center text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'} ${poppins.className}`}
                                            >
                                                Explore the TMG Camper Pack Details &rarr;
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
            <WorkingInPartnership/>
            <Reviews/>
            <ContactSection/>
            <Footer/>
        </>
    );
}