"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"], variable: "--font-montserrat" });

// Animation variants (unchanged)
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Vehicle data (your full list)
const ALL_VEHICLES_DATA = [
    { title: "MAXI+NO VAT+ROTIFORM", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Panel Van", price: "£20,995", monthlyPayment: "£490.97 p/m", highlight: "MAXI+NO VAT+ROTIFORM", make: "Volkswagen", model: "Caddy", imageSrc: "/images/showroom/vcm2.0.png" },
    { title: "5 SEATS+HYBRID BUMPER", makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van", price: "£21,495", monthlyPayment: "£502.66 p/m", highlight: "5 SEATS+HYBRID BUMPER", make: "Volkswagen", model: "Caddy", imageSrc: "/images/showroom/vcm1.4.png" },
    { title: "MAXI+TMG+HIGHLINE!", makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van", price: "£16,995 +VAT", monthlyPayment: "£397.30 p/m", highlight: "MAXI+TMG+HIGHLINE!", make: "Volkswagen", model: "Caddy", imageSrc: "/images/showroom/vcm2.02.png" },
    { title: "TMG-RS CREW VAN+6 SEATER", makeModel: "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab", price: "£21,495", monthlyPayment: "£502.66 p/m", highlight: "TMG-RS CREW VAN+6 SEATER", make: "Ford", model: "Transit Custom", imageSrc: "/images/showroom/vc2.0.png" },
    // ... (rest of your vehicles - unchanged)
    { title: "DSG+MAXI+STARLIGHT BLUE", makeModel: "Volkswagen Caddy Maxi Volkswagen Caddy 1.4 TSI CADDY MAXI TMG R C20 Panel Van 5dr Manual LWB Euro 6", price: "£18,995", monthlyPayment: "£444.20 p/m", highlight: "DSG+MAXI+STARLIGHT BLUE", make: "Volkswagen", model: "Caddy", imageSrc: "/images/showroom/ftclast.png" },
];

const allMakes = ["All Makes", ...new Set(ALL_VEHICLES_DATA.map(v => v.make))];

// FIXED: No nested <button> inside motion.button
const VehicleCard = ({ vehicle }) => (
    <motion.div
        variants={itemVariants}
        className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
        <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
            <Image
                src={vehicle.imageSrc}
                alt={vehicle.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={false}
            />
        </div>

        <div className="p-5 grow">
            <p className={`text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 ${poppins.className}`}>
                {vehicle.make} {vehicle.model}
            </p>
            <h3 className={`text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-2 ${montserrat.className}`}>
                {vehicle.makeModel}
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

            {/* CORRECT: motion.button with children, no nested <button> */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                className={`mt-4 w-full py-3 text-sm font-semibold uppercase tracking-wider rounded border border-black bg-black text-white hover:bg-white hover:text-black transition-all ${poppins.className}`}
            >
                Check Availability
            </motion.button>
        </div>
    </motion.div>
);

const Showroom = () => {
    const [makeFilter, setMakeFilter] = useState("All Makes");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredVehicles = useMemo(() => {
        return ALL_VEHICLES_DATA.filter(vehicle => {
            const makeMatch = makeFilter === "All Makes" || vehicle.make === makeFilter;
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
            <div className="min-h-screen bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.header
                        initial="hidden"
                        animate="show"
                        variants={fadeUpVariants}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <h1 className={`text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-widest mb-2 ${poppins.className}`}>
                            The TMG Inventory
                        </h1>
                        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 ${montserrat.className}`}>
                            Our Specialist Vehicle Stock
                        </h2>
                    </motion.header>

                    {/* Filters */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeUpVariants}
                        className="mb-10"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search by model, feature..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full py-3 pl-12 pr-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition ${poppins.className}`}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            </div>

                            <div className="relative">
                                <select
                                    value={makeFilter}
                                    onChange={(e) => setMakeFilter(e.target.value)}
                                    className={`w-full sm:w-64 py-3 pl-4 pr-10 rounded-xl border border-gray-300 bg-white shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-black ${poppins.className}`}
                                >
                                    {allMakes.map(make => (
                                        <option key={make} value={make}>{make}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Results count */}
                    <p className={`text-center text-lg font-medium text-gray-700 mb-8 ${poppins.className}`}>
                        {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? 's' : ''} found
                    </p>

                    {/* Grid - Fully Responsive */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {filteredVehicles.map((vehicle, i) => (
                            <VehicleCard key={i} vehicle={vehicle} />
                        ))}
                    </motion.div>

                    {filteredVehicles.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No vehicles match your filters.</p>
                        </div>
                    )}

                    {/* Finance Box */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUpVariants}
                        className="max-w-4xl mx-auto mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200"
                    >
                        <p className={`text-sm leading-relaxed text-gray-700 ${poppins.className}`}>
                            <strong>Finance Representative Example:</strong> 48 payments of <strong>£537.74</strong>. Cash price <strong>£22,995</strong>, deposit <strong>£2,299.50</strong>, amount of credit <strong>£20,695.50</strong>. Representative <strong className="text-red-600">11.9% APR</strong>.
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