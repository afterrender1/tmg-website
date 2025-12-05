"use client";

import React, { useState, useMemo } from "react";
// Lucide icons for clean filtering UI
import { Search, ChevronDown, CheckCircle } from 'lucide-react';
// Import motion from framer-motion (requires external installation)
import { motion } from "framer-motion";

import { Poppins, Montserrat } from "next/font/google";
// Assuming these are external components you wish to include
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Navbar from "./Navbar";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500', '600', '700'], // Adjusted weights for clarity
    variable: '--font-poppins',
});
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700'], // Adjusted weights for clarity
    variable: '--font-montserrat',
});

// --- Framer Motion Variants (Reused from Showroom) ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

// --- SOLD VEHICLE DATA (Adjusted for "Sold" Status) ---
const ALL_SOLD_VEHICLES_DATA = [
    { title: "SOLD: MAXI+ROTIFORM", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Panel Van", price: "SOLD", highlight: "MAXI+NO VAT+ROTIFORM", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm2.0.png", soldDate: "Mar 2024" },
    { title: "SOLD: 5 SEATS+HYBRID", makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van", price: "SOLD", highlight: "5 SEATS+HYBRID BUMPER", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm1.4.png", soldDate: "Feb 2024" },
    { title: "SOLD: HIGHLINE MAXI", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van", price: "SOLD", highlight: "MAXI+TMG+HIGHLINE!", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/vcm2.02.png", soldDate: "Jan 2024" },
    { title: "SOLD: TMG-RS CREW VAN", makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab", price: "SOLD", highlight: "TMG-RS CREW VAN+6 SEATER", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/vc2.0.png", soldDate: "Dec 2023" },
    { title: "SOLD: KOMBI SPORT VAN", makeModel: "Ford Transit Custom 2.0 300 EcoBlue Sport Panel Van 5dr Diesel Auto L1 H1 Euro 6", price: "SOLD", highlight: "170PS+TMGRS KIT+6SEATS", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/ftc2.0.png", soldDate: "Nov 2023" },
    { title: "SOLD: WIDETRACK+LWB", makeModel: "Ford Transit CustomCUSTOM TMG RS 2.0 300 EcoBlue Limited Panel Van", price: "SOLD", highlight: "TMG RS WIDETRACK+LWB!", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/ftcl1.png", soldDate: "Oct 2023" },
    { title: "SOLD: ALL TRACK CADDY", makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van 5dr Diesel Manual SWB", price: "SOLD", highlight: "ALL TRACK+ROTIFORMS+LOW MILES", make: "Volkswagen", model: "Caddy", imageSrc: "images/showroom/ftc130ps.png", soldDate: "Sep 2023" },
    { title: "SOLD: TOP SPEC DCIV", makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab", price: "SOLD", highlight: "TOP SPEC+TAILGATE+CAPTIN SEATS", make: "Ford", model: "Transit Custom", imageSrc: "images/showroom/vcred.png", soldDate: "Aug 2023" },
];

const allSoldMakes = ["All Makes", ...new Set(ALL_SOLD_VEHICLES_DATA.map(v => v.make))];


// --- Vehicle Card component (Modified for "Sold" status) ---
const VehicleCard = ({ vehicle }) => (
    <motion.div
        variants={itemVariants}
        className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 shadow-lg opacity-80"
    >
        {/* Vehicle Image */}
        <div className="relative w-full h-48 sm:h-72 bg-gray-100 rounded-t-xl overflow-hidden group">
            <img
                src={vehicle.imageSrc}
                alt={vehicle.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
            />
            {/* SOLD Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className={`text-4xl font-extrabold text-white bg-red-800 px-6 py-2 rotate-[-10deg] shadow-2xl ${montserrat.className}`}>
                    S O L D
                </span>
            </div>
        </div>

        {/* Top Content */}
        <div className="p-5 grow">
            <p
                className={`text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 ${poppins.className}`}
            >
                {vehicle.make} {vehicle.model}
            </p>

            <h3
                className={`text-lg font-bold text-gray-900 leading-snug mb-3 ${montserrat.className}`}
            >
                {vehicle.makeModel.substring(0, 80) + '...'}
            </h3>

            <span
                className={`inline-block bg-green-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full ${poppins.className}`}
            >
                Sold in {vehicle.soldDate} <CheckCircle className="inline w-3 h-3 ml-1" />
            </span>
        </div>

        {/* Price + Button */}
        <div className="border-t border-gray-100 p-5 pt-4">
            <p
                className={`text-3xl font-extrabold text-red-600 mb-1 ${montserrat.className}`}
            >
                {vehicle.price}
            </p>

            <p
                className={`text-sm text-gray-600 ${poppins.className}`}
            >
                This vehicle is no longer available.
            </p>

            <motion.button
                whileTap={{ scale: 0.95 }}
                disabled
                className={`cursor-not-allowed mt-4 w-full py-2.5 text-sm font-semibold uppercase border tracking-wider rounded text-white bg-gray-400 
                    transition-colors duration-200 ${poppins.className}`}
            >
                View Details
            </motion.button>
        </div>
    </motion.div>
);


const Sold = () => {
    const [makeFilter, setMakeFilter] = useState("All Makes");
    const [searchTerm, setSearchTerm] = useState("");

    // Filtering logic using useMemo to optimize performance
    const filteredVehicles = useMemo(() => {
        return ALL_SOLD_VEHICLES_DATA.filter(vehicle => {
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
            <Navbar />
            {/* === MAIN CONTENT AREA === */}
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
                            className={`text-xs font-semibold text-red-600 uppercase tracking-widest mb-1 ${poppins.className}`}
                        >
                            Previously Sold Vehicles
                        </h1>

                        <h2
                            className={`text-4xl sm:text-5xl font-extrabold text-gray-900 ${montserrat.className}`}
                        >
                            Our Showroom of Happy Customers
                        </h2>
                    </motion.header>

                    {/* Filters and Search Bar (Kept for search history) */}
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
                                placeholder="Search by model, highlight, or sold month..."
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
                                {allSoldMakes.map(make => (
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
                        Showing {filteredVehicles.length} recently **sold** vehicles.
                    </motion.p>


                    {/* Grid (Staggered Animation) */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                    >
                        {filteredVehicles.map((vehicle, index) => (
                            <VehicleCard key={`${vehicle.makeModel}-${index}`} vehicle={vehicle} />
                        ))}
                    </motion.div>

                    {filteredVehicles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500 font-semibold">
                                No past vehicles found matching your criteria.
                            </p>
                        </div>
                    )}

                    {/* Footer CTA/Notice */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeUpVariants}
                        className={`max-w-3xl mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-xl ${poppins.className}`}
                    >
                        <p className="text-sm text-red-800 font-semibold text-center">
                            Interested in a similar vehicle? Contact us about sourcing your next custom van!
                        </p>
                    </motion.div>

                </div>
            </div>
            {/* === EXTERNAL COMPONENTS === */}
            <WorkingInPartnership />
            <Reviews />
            <ContactSection />
        </>
    );
};

export default Sold;