"use client";

import React, { useRef } from "react";
// *** ADD THIS IMPORT IN YOUR PROJECT ***
import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const reviews = [
    { rating: "★★★★★", author: "Tom H.", date: "1 week ago", description: "The custom T6 build exceeded all expectations! The quality of the interior work is truly unmatched. Worth every penny." },
    { rating: "★★★★★", author: "Sarah B.", date: "2 weeks ago", description: "Smooth process from start to finish. The finance options were competitive, and the staff were incredibly helpful throughout the purchase." },
    { rating: "★★★★★", author: "Mark L.", date: "1 month ago", description: "Highly recommend TMG. My custom Caddy van is a masterpiece. Cosmetically and mechanically perfect. True specialists." },
    { rating: "★★★★★", author: "Jessica P.", date: "3 months ago", description: "Excellent aftercare service. The conversion is flawless, and it's great knowing their support team is always available for servicing needs." },
    { rating: "★★★★★", author: "David R.", date: "5 months ago", description: "Picked up a beautifully customized Ford Transit. The detail on the bodywork is incredible. A genuine head-turner!" },
    { rating: "★★★★★", author: "Chloe M.", date: "6 months ago", description: "The team helped me finance a van and completed the full conversion within the quoted timeframe. Fantastic communication." },
    { rating: "★★★★★", author: "Alex S.", date: "8 months ago", description: "Best van buying experience ever. The base vehicle quality was excellent, exactly as advertised (clean title, full history)." },
    { rating: "★★★★★", author: "George V.", date: "1 year ago", description: "My custom VW Transporter is performing flawlessly. Great mechanical mods and outstanding suspension work." },
];

// --- Framer Motion Variants ---
const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Reviews = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <section
            className="relative py-24 px-6 lg:px-12 bg-fixed bg-cover mt-20 bg-center"
            style={{ backgroundImage: "url('/images/reviews/bg.png')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Header (Motion applied) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-5xl md:text-6xl font-black text-white mb-4 ${poppins.className}`}>
                        Customer Reviews
                    </h2>
                    <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${poppins.className}`}>
                        Over 100+ five-star reviews from happy TMG owners
                    </p>
                </motion.div>

                {/* Reviews Container (Motion applied) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative"
                >
                    {/* Left Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-2xl"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-2xl"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-6 px-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-80 md:w-96"
                            >
                                <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full shadow-2xl hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                                    {/* Subtle glow */}
                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    <div className="relative">
                                        {/* Rating + Date */}
                                        <div className="flex justify-between items-start mb-5">
                                            <span className="text-3xl text-amber-300">{review.rating}</span>
                                            <span className={`text-sm text-gray-400 ${poppins.className}`}>{review.date}</span>
                                        </div>

                                        {/* Review Text */}
                                        <p className={`text-gray-100 text-lg leading-relaxed mb-8 line-clamp-5 ${poppins.className}`}>
                                            "{review.description}"
                                        </p>

                                        {/* Author */}
                                        <p className={`text-white text-xl font-bold ${montserrat.className}`}>
                                            — {review.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/reviews"
                        className={`inline-block px-10 py-3.5 bg-white text-gray-900 font-semibold text-lg uppercase tracking-wider 
                        rounded-lg border border-gray-300 shadow-md 
                        hover:bg-gray-50 hover:border-black 
                        transition-all duration-200 transform hover:scale-[1.02] 
                        ${poppins.className}`}
                    >
                        View All Reviews
                    </a>
                </div>
            </div>

            {/* Hide scrollbar */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default Reviews;