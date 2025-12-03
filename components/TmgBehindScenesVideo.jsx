"use client";

import React from "react";

const TmgBehindScenesVideo = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">

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

        {/* Video Container */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/7WYAlCTXLgc?si=PvWZNShtP_6Y0aZ7"
            title="TMG Behind the Scenes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TmgBehindScenesVideo;
