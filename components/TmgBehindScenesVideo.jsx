"use client";

import React from "react";
// Import motion from framer-motion (requires external installation)
import { motion } from "framer-motion";

// --- Framer Motion Variant ---
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const TmgBehindScenesVideo = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">

      {/* Main Content Wrapper (Applies Fade Up) */}
      <motion.div
        initial="hidden"
        whileInView="show" // Animate when it scrolls into view
        variants={fadeUpVariants}
        viewport={{ once: true, amount: 0.2 }} // Only animate once
        className="max-w-4xl mx-auto text-center"
      >

        {/* Header */}
        <h2
          className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          TMG Behind the Scenes
        </h2>

        <p
          className="text-gray-700 text-base sm:text-lg mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          See how we transform vans with our expert custom conversions, all done in-house by our dedicated team.
        </p>

        {/* Video Container (Also gets the fade effect) */}
        <motion.div
          // Subtle scaling effect to draw attention
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/7WYAlCTXLgc?si=PvWZNShtP_6Y0aZ7"
            title="TMG Behind the Scenes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TmgBehindScenesVideo;