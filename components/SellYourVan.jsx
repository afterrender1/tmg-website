"use client";

import React, { useState } from 'react';
// Import icons for a cleaner UI/UX
import { CheckCircle, Zap, TrendingUp, Truck } from 'lucide-react';
import { motion } from "framer-motion"; 


import { Poppins, Montserrat } from "next/font/google"; 
import Navbar from './Navbar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-poppins',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
    variable: '--font-montserrat',
});



// --- Tailwind CSS Classes (Using Font Variables) ---
const inputStyle = "w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-black focus:border-black transition duration-200 shadow-sm";
const labelStyle = `block text-sm font-semibold text-gray-700 mb-1 ${poppins.className}`;
const sectionTitleStyle = `text-3xl font-extrabold text-gray-900 mb-6 ${montserrat.className}`;

// --- Framer Motion Variants ---
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Data for the benefits list (for cleaner mapping)
const benefits = [
    { 
        icon: TrendingUp, 
        title: "Premium Valuation", 
        description: "We factor in high specs and unique modifications, offering the fairest price, unlike generic sites." 
    },
    { 
        icon: CheckCircle, 
        title: "Transparent Pricing", 
        description: "No hidden charges, admin fees, or surprise deductions. The price we offer is the price you get." 
    },
    { 
        icon: Zap, 
        title: "Instant Payment", 
        description: "The agreed value is paid straight to you instantly, often by the end of the day." 
    },
    { 
        icon: Truck, 
        title: "Nationwide Collection", 
        description: "We arrange prompt and free collection across the UK, typically within 24 hours." 
    },
];


const SellYourVan = () => {
    const [formData, setFormData] = useState({
        registration: '',
        mileage: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Valuation Request Submitted:", formData);
        alert("Your van valuation request has been submitted!");
    };

    return (
     <>
     <Navbar/>
     
        <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${poppins.className}`}>
            <div className="max-w-6xl mx-auto">
                
                {/* Header (Animate) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className={`mb-3 text-sm font-semibold text-black border inline px-2 py-1 rounded-full uppercase tracking-widest${poppins.className}`}>
                        Hassle-Free Selling
                    </p>
                    <h1 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 ${montserrat.className}`}>
                        Sell Your Van to the Specialists
                    </h1>
                    <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${poppins.className}`}>
                        We value your business and your van's true worth. Get your free, non-obligatory valuation today.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* Left Column: Benefits & Trust - Cleaner with Icons */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUpVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:w-5/12 p-8 bg-white rounded-xl border border-gray-200 shadow-xl h-fit"
                    >
                        <h2 className={sectionTitleStyle}>
                            Why TMG is Different
                        </h2>
                        <ul className="space-y-6 text-gray-700">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <li key={index} className="flex items-start">
                                        <Icon className="text-black shrink-0 mr-4 mt-1 w-6 h-6" />
                                        <div>
                                            <strong className="block text-lg text-gray-900 font-bold">{benefit.title}</strong>
                                            <p className="text-sm text-gray-600">{benefit.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        
                        <blockquote className="mt-10 p-4 bg-amber-50 rounded-lg text-gray-700 italic border-l-4 border-amber-500">
                            <p className="text-base">
                                "A safe and honest sale with money in your pocket by the end of the day. That's why at TMG, we believe in being clear, fair, and letting you take the wheel."
                            </p>
                        </blockquote>
                    </motion.div>

                    {/* Right Column: Valuation Form - Clean Layout */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUpVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:w-7/12 p-10 bg-white rounded-xl border border-gray-200 shadow-2xl"
                    >
                        <h2 className={sectionTitleStyle}>
                            Vehicle & Contact Details
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Van Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="registration" className={labelStyle}>Vehicle Registration Number</label>
                                    <input 
                                        type="text" 
                                        id="registration" 
                                        name="registration" 
                                        value={formData.registration} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="AB12 XYZ"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mileage" className={labelStyle}>Vehicle Mileage</label>
                                    <input 
                                        type="number" 
                                        id="mileage" 
                                        name="mileage" 
                                        value={formData.mileage} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="e.g., 50000"
                                    />
                                </div>
                            </div>

                            {/* Personal Details & Contact Details (Combined into 2 sections) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className={labelStyle}>First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className={labelStyle}>Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className={labelStyle}>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="john.doe@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className={labelStyle}>Contact Number</label>
                                    <input 
                                        type="tel" 
                                        id="contactNumber" 
                                        name="contactNumber" 
                                        value={formData.contactNumber} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputStyle} 
                                        placeholder="07700 900000"
                                    />
                                </div>
                            </div>

                            {/* Message/Modifications */}
                            <div>
                                <label htmlFor="message" className={labelStyle}>Message / Modifications Details (Optional but Recommended)</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows="4" 
                                    className={`${inputStyle} resize-none`} 
                                    placeholder="Full body kit, coilovers, upgraded interior, recent service history, etc."
                                />
                                <p className={`mt-1 text-xs text-gray-500`}>
                                    Highlighting modifications helps us offer the best possible price.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                // Enhanced button styling for better hover feedback (Black to Amber)
                                className={`w-full py-3.5 bg-black hover:bg-white border cursor-pointer hover:text-black text-white font-bold text-lg uppercase tracking-wider rounded-lg shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-black/50 hover:shadow-2xl ${montserrat.className}`}
                            >
                                Get My Free Valuation Now
                            </motion.button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
     </>
    );
};

export default SellYourVan;