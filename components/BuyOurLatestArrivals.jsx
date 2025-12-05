"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montserrat',
});

// Motion Variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Your data (unchanged)
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
    makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van",
    details: "5dr Diesel Manual LWB Euro 6",
    price: "£16,995 +VAT",
    monthlyPayment: "£397.30 p/m",
    highlight: "MAXI+TMG+HIGHLINE!",
    imageSrc: "/images/ourlatestarrivels/vcaddy.png",
  },
  {
    title: "TMG-RS CREW VAN+6 SEATER",
    makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab",
    details: "5dr Diesel Manual L2 H1 DCIV TMG RS SPORT",
    price: "£21,495",
    monthlyPayment: "£502.66 p/m",
    highlight: "TMG-RS CREW VAN+6 SEATER",
    imageSrc: "/images/ourlatestarrivels/ford.png",
  },
];

// VehicleCard — Now fully responsive
const VehicleCard = ({ vehicle }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    {/* Image - Fully responsive */}
    <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden rounded-t-xl">
      <Image
        src={vehicle.imageSrc}
        alt={vehicle.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 hover:scale-[1.05]"
        priority
      />
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col grow">
      <p className={`text-xs sm:text-sm font-medium text-gray-600 mb-1 ${poppins.className} font-poppins`}>
        {vehicle.title.split("+")[0]}
      </p>

      <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 ${montserrat.className} font-montserrat`}>
        {vehicle.makeModel}
      </h3>

      <p className={`text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 ${poppins.className} font-poppins`}>
        {vehicle.details}
      </p>

      <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
        {vehicle.highlight.includes("ROTIFORM") ? "Rotiform Wheels" : vehicle.highlight}
      </span>

      <div className="mt-auto border-t border-gray-100 pt-4">
        <p className={`text-2xl sm:text-3xl font-bold text-black ${montserrat.className} font-montserrat`}>
          {vehicle.price}
        </p>
        <p className={`text-xs sm:text-sm text-gray-600 mt-1 ${poppins.className} font-poppins`}>
          {vehicle.monthlyPayment} (Estimate)
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer mt-4 w-full py-2.5 text-sm font-semibold uppercase tracking-wider rounded border border-black text-white bg-black hover:bg-white hover:text-black hover:border-black transition-all ${poppins.className} font-poppins`}
        >
          Check Availability
        </motion.button>
      </div>
    </div>
  </motion.div>
);

// Main Component — Fully Responsive
const BuyOurLatestArrivals = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className={`text-center mb-10 sm:mb-16 ${montserrat.className} font-montserrat`}
        >
          <h1 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-widest">
            New Vehicle Stock
          </h1>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Latest Commercial Vans
          </h2>
        </motion.header>

        {/* Search Bar */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className="mb-10 max-w-xl mx-auto px-4 sm:px-0"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by make, model, or feature..."
              className="w-full py-3 pl-12 pr-12 sm:pr-14 text-gray-900 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent shadow-sm transition-all text-sm sm:text-base"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-xl leading-none">×</button>
          </div>
        </motion.div>

        {/* Grid — Responsive Columns */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {vehicleData.map((vehicle, index) => (
            <VehicleCard key={`v-${index}`} vehicle={vehicle} />
          ))}
        </motion.div>

        {/* Finance Box */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className="max-w-3xl mx-auto mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm leading-relaxed"
        >
          <p>
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