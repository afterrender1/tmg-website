"use client";

import React, { useState, useMemo } from "react";
// Lucide icons for clean filtering UI
import { Search, ChevronDown } from 'lucide-react';
// Import motion from framer-motion (requires external installation)
import { motion } from "framer-motion";

import { Poppins, Montserrat } from "next/font/google";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-poppins',
});
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-montserrat',
});
// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between each card's animation
        },
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

// --- Vehicle Data (Combined & Structured) ---
// Note: imageSrc paths are placeholders and must be added to your public directory
const ALL_VEHICLES_DATA = [
    // --- Existing Vehicles ---
    { title: "MAXI+NO VAT+ROTIFORM", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Panel Van", price: "£20,995", monthlyPayment: "£490.97 p/m", highlight: "MAXI+NO VAT+ROTIFORM", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm2.0.png" },
    { title: "5 SEATS+HYBRID BUMPER", makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van", price: "£21,495", monthlyPayment: "£502.66 p/m", highlight: "5 SEATS+HYBRID BUMPER", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm1.4.png" },
    { title: "MAXI+TMG+HIGHLINE!", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van", price: "£16,995 +VAT", monthlyPayment: "£397.30 p/m", highlight: "MAXI+TMG+HIGHLINE!", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm2.02.png" },
    { title: "TMG-RS CREW VAN+6 SEATER", makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab", price: "£21,495", monthlyPayment: "£502.66 p/m", highlight: "TMG-RS CREW VAN+6 SEATER", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/vc2.0.png" },

    // --- New Vehicles (Parsed) ---
    { title: "SPORT VAN+KOMBI CONVERSION", makeModel: "Ford Transit Custom 2.0 300 EcoBlue Sport Panel Van 5dr Diesel Auto L1 H1 Euro 6 (s/s) (170 ps) SPORT 6 SEAT CREW VAN", price: "£43,995", monthlyPayment: "£1,028.82 p/m", highlight: "170PS+TMGRS KIT+6SEATS", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/ftc2.0.png" },
    { title: "KOMBI VAN+TMG RS FULL KIT", makeModel: "Ford Transit Custom 2.0 300 TRANSIT CUSTOM Limited Crew Van Double Cab 5dr Diesel Manual L1 H1 Euro 6 6 SEAT 170PS TMG RS SPORT", price: "£25,995", monthlyPayment: "£607.89 p/m", highlight: "KOMBI VAN+TMG RS FULL KIT", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/vcm2.03.png" },
    { title: "TMG RS WIDETRACK+LWB!", makeModel: "Ford Transit CustomCUSTOM TMG RS 2.0 300 EcoBlue Limited Panel Van 5dr Diesel Manual L2 H1 Euro 6 LWB (130 ps)", price: "£23,995", monthlyPayment: "£561.12 p/m", highlight: "TMG RS WIDETRACK+LWB!", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/ftcl1.png" },
    { title: "ALL TRACK+ROTIFORMS+LOW MILES", makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van 5dr Diesel Manual SWB Euro 6", price: "£23,995", monthlyPayment: "£561.12 p/m", highlight: "ALL TRACK+ROTIFORMS+LOW MILES", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/ftc130ps.png" },
    { title: "TOP SPEC+TAILGATE+CAPTIN SEATS", makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab 5dr Diesel Manual L2 H1 DCIV TMG RS SPORT", price: "£23,995", monthlyPayment: "£561.12 p/m", highlight: "TOP SPEC+TAILGATE+CAPTIN SEATS", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/vcred.png" },
    { title: "DSG150PS+CHESTNUT BROWN!", makeModel: "Volkswagen Caddy Maxi Volkswagen Caddy 2.0 TDI CADDY MAXI TMG R C20 Panel Van 5dr Manual LWB Euro 6 150PS", price: "£22,995", monthlyPayment: "£537.74 p/m", highlight: "DSG150PS+CHESTNUT BROWN!", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/ftcblue.png" },
    { title: "DSG+MAXI+STARLIGHT BLUE", makeModel: "Volkswagen Caddy Maxi Volkswagen Caddy 1.4 TSI CADDY MAXI TMG R C20 Panel Van 5dr Manual LWB Euro 6", price: "£18,995", monthlyPayment: "£444.20 p/m", highlight: "DSG+MAXI+STARLIGHT BLUE", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/ftclast.png" },
];

const allMakes = ["All Makes", ...new Set(ALL_VEHICLES_DATA.map(v => v.make))];

// Vehicle Card component converted to motion.div
const VehicleCard = ({ vehicle }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    <div className="relative w-full h-48 sm:h-72 bg-gray-100 rounded-t-xl overflow-hidden">
      <img
        src={vehicle.imageSrc}
        alt={vehicle.title}
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-[1.05]"
        loading="lazy"
      />
    </div>

    <div className="p-5 grow">
      <p className={`text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 ${poppins.className}`}>
        {vehicle.make} {vehicle.model}
      </p>
      <h3 className={`text-lg font-bold text-gray-900 leading-snug mb-3 ${montserrat.className}`}>
        {vehicle.makeModel.substring(0, 80) + '...'}
      </h3>
      <span className={`inline-block bg-amber-50 text-amber-800 text-xs font-medium px-3 py-1 rounded-full ${poppins.className}`}>
        {vehicle.highlight.split('+')[0]}
      </span>
    </div>

    <div className="border-t border-gray-100 p-5 pt-4">
      <p className={`text-3xl font-extrabold text-black mb-1 ${montserrat.className}`}>
        {vehicle.price}
      </p>
      <p className={`text-sm text-gray-600 ${poppins.className}`}>
        {vehicle.monthlyPayment} (Estimate)
      </p>

      {/* ✅ Fix: Only use motion.button, not nested button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`mt-4 w-full py-2.5 text-sm font-semibold uppercase border tracking-wider rounded text-white bg-black
        hover:text-black hover:bg-white hover:border-black transition-colors duration-200 ${poppins.className}`}
      >
        Check Availability
      </motion.button>
    </div>
  </motion.div>
);



const Showroom = () => {
    const [makeFilter, setMakeFilter] = useState("All Makes");
    const [searchTerm, setSearchTerm] = useState("");

    // Filtering logic using useMemo to optimize performance
    const filteredVehicles = useMemo(() => {
        return ALL_VEHICLES_DATA.filter(vehicle => {
            // 1. Filter by Make
            const makeMatch = makeFilter === "All Makes" || vehicle.make === makeFilter;

            // 2. Filter by Search Term (case-insensitive across multiple fields)
            const searchLower = searchTerm.toLowerCase();
            const searchMatch = !searchTerm ||
                vehicle.makeModel.toLowerCase().includes(searchLower) ||
                vehicle.make.toLowerCase().includes(searchLower) ||
                vehicle.model.toLowerCase().includes(searchLower) ||
                vehicle.highlight.toLowerCase().includes(searchLower);

            return makeMatch && searchMatch;
        });
    }, [makeFilter, searchTerm]);

    return (
        <>
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
                            className={`text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1 ${poppins.className}`}
                        >
                            The TMG Inventory
                        </h1>

                        <h2
                            className={`text-4xl sm:text-5xl font-extrabold text-gray-900 ${montserrat.className}`}
                        >
                            Our Specialist Vehicle Stock
                        </h2>
                    </motion.header>

                    {/* Filters and Search Bar (Fade Up Animation) */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeUpVariants}
                        className="mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-xl shadow-inner"
                    >
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search by model, feature, or highlight..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`w-full py-3 pl-12 pr-4 text-gray-900 rounded-lg bg-white shadow-sm 
                                focus:ring-2 focus:ring-black focus:border-black border border-gray-300 transition-all outline-none ${poppins.className}`}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        </div>

                        {/* Make Filter Dropdown */}
                        <div className="relative w-full md:w-56">
                            <select
                                value={makeFilter}
                                onChange={(e) => setMakeFilter(e.target.value)}
                                className={`appearance-none w-full py-3 pl-4 pr-10 text-gray-900 rounded-lg bg-white shadow-sm 
                                border border-gray-300 cursor-pointer focus:ring-2 focus:ring-black focus:border-black ${poppins.className}`}
                            >
                                {allMakes.map(make => (
                                    <option key={make} value={make}>{make}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Results Count / No Results Message */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-center mb-8 text-lg font-semibold text-gray-700 ${poppins.className}`}
                    >
                        {filteredVehicles.length} vehicles found matching your criteria.
                    </motion.p>


                    {/* Grid (Staggered Animation) */}
                    <motion.div
                        initial="hidden"
                        whileInView="show" // Animate when it scrolls into view
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                    >
                        {filteredVehicles.map((vehicle, index) => (
                            // Key uses makeModel to ensure uniqueness
                            <VehicleCard key={`${vehicle.makeModel}-${index}`} vehicle={vehicle} />
                        ))}
                    </motion.div>

                    {filteredVehicles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500 font-semibold">
                                No vehicles found matching your filters. Try adjusting your search criteria.
                            </p>
                        </div>
                    )}

                    {/* Finance Representative Example (Fade Up Animation) */}
                    <motion.div
                        initial="hidden"
                        whileInView="show" // Animate when it scrolls into view
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeUpVariants}
                        className={`max-w-3xl mx-auto my-12 p-6 bg-gray-100 border border-gray-200 rounded-xl ${poppins.className}`}
                    >
                        <p className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-bold text-gray-800">Finance Representative Example:</span>{" "}
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
            <WorkingInPartnership />
            <Reviews />
            <ContactSection />


        </>
    );
};

export default Showroom;