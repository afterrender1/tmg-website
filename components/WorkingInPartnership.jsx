"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Close Brothers", src: "/images/partnership/cb.png" },
  { name: "Motot Check", src: "/images/partnership/mc.png" },
  { name: "RAC", src: "/images/partnership/rac.png" },
  { name: "Howden", src: "/images/partnership/hoaden.png" },
  { name: "HPI", src: "/images/partnership/hpi.png" },
];

const WorkingInPartnership = () => {
  return (
    <section className="bg-[#F2F3F7] max-w-7xl mx-auto rounded-lg py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Working in Partnership With
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingInPartnership;
