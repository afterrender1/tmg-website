"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
// Import motion from framer-motion (requires external installation)
import { motion } from "framer-motion"; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
});

// --- Framer Motion Variants ---

// Container for staggering the vehicle cards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each card's animation
    },
  },
};

// Variants for individual vehicle cards
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// Variants for header and finance bar (simple fade-up)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


// Data with imageSrc added (unchanged)
const vehicleData = [
  {
    title: "MAXI+NO VAT+ROTIFORM",
    makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Panel Van",
    details: "5dr Manual LWB Euro 6",
    price: "£20,995",
    monthlyPayment: "£490.97 p/m",
    highlight: "MAXI+NO VAT+ROTIFORM",
    imageSrc: "/images/ourlatestarrivels/vmaxi.png",
  },
  {
    title: "5 SEATS+HYBRID BUMPER",
    makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van",
    details: "5dr Diesel Manual SWB Euro 6",
    price: "£21,495",
    monthlyPayment: "£502.66 p/m",
    highlight: "5 SEATS+HYBRID BUMPER",
    imageSrc: "/images/ourlatestarrivels/vcaddy2.png",
  },
  {
    title: "MAXI+TMG+HIGHLINE!",
    makeModel:
      "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van",
    details: "5dr Diesel Manual LWB Euro 6",
    price: "£16,995 +VAT",
    monthlyPayment: "£397.30 p/m",
    highlight: "MAXI+TMG+HIGHLINE!",
    imageSrc: "/images/ourlatestarrivels/vcaddy.png",
  },
  {
    title: "TMG-RS CREW VAN+6 SEATER",
    makeModel:
      "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab",
    details: "5dr Diesel Manual L2 H1 DCIV TMG RS SPORT",
    price: "£21,495",
    monthlyPayment: "£502.66 p/m",
    highlight: "TMG-RS CREW VAN+6 SEATER",
    imageSrc: "/images/ourlatestarrivels/ford.png",
  },
];

// Vehicle Card component converted to motion.div
const VehicleCard = ({ vehicle }) => (
  <motion.div
    variants={itemVariants} // Apply item animation variant
    className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    {/* Vehicle Image */}
    <div className="relative w-full h-48 sm:h-56 bg-gray-100 rounded-t-xl overflow-hidden">
      <Image
        src={vehicle.imageSrc}
        alt={vehicle.title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-[1.05]"
      />
    </div>

    {/* Top Content */}
    <div className="p-5 grow">
      <p
        className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.title.split("+")[0]}
      </p>

      <h3
        className="text-lg font-bold text-gray-900 leading-snug mb-3"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {vehicle.makeModel}
      </h3>

      <p
        className="text-sm text-gray-500 mb-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.details}
      </p>

      <span
        className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.highlight.includes("ROTIFORM")
          ? "Rotiform Wheels"
          : vehicle.highlight}
      </span>
    </div>

    {/* Price + Button */}
    <div className="border-t border-gray-100 p-5 pt-4">
      <p
        className="text-3xl font-bold text-black mb-1"
        style={{ fontFamily: "poppins" }}
      >
        {vehicle.price}
      </p>

      <p
        className="text-sm text-gray-600"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.monthlyPayment} (Estimate)
      </p>

      <motion.button
        whileTap={{ scale: 0.95 }} // Added subtle tap animation
        className="cursor-pointer mt-4 w-full py-2.5 text-sm font-semibold uppercase border tracking-wider rounded text-white bg-black 
                   hover:text-black hover:bg-white hover:border-black transition-colors duration-200"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Check Availability
      </motion.button>
    </div>
  </motion.div>
);

// Main Component
const BuyOurLatestArrivals = () => {
  return (
    <div className="min-h-screen bg-white p-8 sm:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Fade Up Animation) */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className="mb-12 text-center"
        >
          <h1
            className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1"
            style={{ fontFamily: "Poppins" }}
          >
            New Vehicle Stock
          </h1>

          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            style={{ fontFamily: "poppins" }}
          >
            Latest Commercial Vans
          </h2>
        </motion.header>

        {/* Search Bar (Fade Up Animation) */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className="mb-10 max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by make, model, or feature..."
              className="w-full py-3 pl-12 pr-10 text-gray-900 rounded-full bg-[#F2F3F7] shadow-sm 
                   focus:ring-2 focus:ring-black/20 focus:border-black/10 border border-gray-300
                   transition-all outline-none "
              style={{ fontFamily: "Poppins" }}
            />

            {/* Search Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>

            {/* Clear Button (X) */}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition">
              ✕
            </button>
          </div>
        </motion.div>


        {/* Grid (Staggered Animation) */}
        <motion.div
          initial="hidden"
          whileInView="show" // Animate when it scrolls into view
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {vehicleData.map((vehicle, index) => (
            <VehicleCard key={`v-${index}`} vehicle={vehicle} />
          ))}
        </motion.div>

        {/* Finance Representative Example (Fade Up Animation) */}
        <motion.div
          initial="hidden"
          whileInView="show" // Animate when it scrolls into view
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          className={`max-w-3xl mx-auto my-6 p-6 bg-gray-50 border border-gray-200 rounded-xl ${poppins.className}`}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-800">Finance Representative Example:</span>{" "}
            CS: Payable by <span className="font-semibold text-gray-900">48 payments of £537.74</span>.
            Payments are based on a duration of agreement of 48 months, a cash price OTR of
            <span className="font-semibold text-gray-900"> £22,995</span> with a deposit of
            <span className="font-semibold text-gray-900"> £2,299.50</span>, leaving an amount of credit of
            <span className="font-semibold text-gray-900"> £20,695.50</span>. This agreement results in a
            representative <span className="font-semibold text-red-600">11.9% APR</span> and a total amount payable of
            <span className="font-semibold text-green-700"> £28,121.02</span>.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default BuyOurLatestArrivals;