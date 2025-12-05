"use client";

import React from "react";
import { motion } from "framer-motion";

// Same exact animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const TmgBehindScenesVideo = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUpVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Header – Responsive text scaling */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          TMG Behind the Scenes
        </h2>

        {/* Subtitle – Responsive + side padding on mobile */}
        <p
          className="text-gray-700 text-base sm:text-lg mb-8 md:mb-12 px-4 sm:px-0 max-w-3xl mx-auto"
          style={{ fontFamily: "Poppins" }}
        >
          See how we transform vans with our expert custom conversions, all done in-house by our dedicated team.
        </p>

        {/* Video Container – 100% responsive 16:9 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full max-w-5xl mx-auto pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/7WYAlCTXLgc?si=PvWZNShtP_6Y0aZ7"
            title="TMG Behind the Scenes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TmgBehindScenesVideo;