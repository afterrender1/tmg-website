"use client";

import React, { useState } from 'react';
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

const inputStyle = "w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-black focus:border-black transition duration-200 shadow-sm";
const labelStyle = `block text-sm font-semibold text-gray-700 mb-1 ${poppins.className}`;
const sectionTitleStyle = `text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 mb-6 ${montserrat.className}`;

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const benefits = [
    { icon: TrendingUp, title: "Premium Valuation", description: "We factor in high specs and unique modifications, offering the fairest price, unlike generic sites." },
    { icon: CheckCircle, title: "Transparent Pricing", description: "No hidden charges, admin fees, or surprise deductions. The price we offer is the price you get." },
    { icon: Zap, title: "Instant Payment", description: "The agreed value is paid straight to you instantly, often by the end of the day." },
    { icon: Truck, title: "Nationwide Collection", description: "We arrange prompt and free collection across the UK, typically within 24 hours." },
];

const SellYourVan = () => {
    const [formData, setFormData] = useState({
        registration: '', mileage: '', firstName: '', lastName: '', email: '', contactNumber: '', message: '',
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
            <Navbar />
            <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${poppins.className}`}>
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div initial="hidden" whileInView="show" variants={fadeUpVariants} viewport={{ once: true, amount: 0.5 }} className="text-center mb-12 sm:mb-16">
                        <p className={`mb-3 text-xs sm:text-sm font-semibold text-black border inline px-2 py-1 rounded-full uppercase tracking-widest ${poppins.className}`}>
                            Hassle-Free Selling
                        </p>
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mt-2 ${montserrat.className}`}>
                            Sell Your Van to the Specialists
                        </h1>
                        <p className={`text-base sm:text-lg md:text-lg lg:text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${poppins.className}`}>
                            We value your business and your van's true worth. Get your free, non-obligatory valuation today.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

                        {/* Benefits */}
                        <motion.div initial="hidden" whileInView="show" variants={fadeUpVariants} viewport={{ once: true, amount: 0.2 }} className="lg:w-5/12 p-6 sm:p-8 bg-white rounded-xl border border-gray-200 shadow-xl h-fit">
                            <h2 className={sectionTitleStyle}>Why TMG is Different</h2>
                            <ul className="space-y-5 sm:space-y-6 text-gray-700">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <li key={index} className="flex items-start">
                                            <Icon className="text-black shrink-0 mr-3 sm:mr-4 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                                            <div>
                                                <strong className="block text-base sm:text-lg text-gray-900 font-bold">{benefit.title}</strong>
                                                <p className="text-sm sm:text-sm text-gray-600">{benefit.description}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <blockquote className="mt-8 sm:mt-10 p-3 sm:p-4 bg-amber-50 rounded-lg text-gray-700 italic border-l-4 border-amber-500 text-sm sm:text-base">
                                "A safe and honest sale with money in your pocket by the end of the day. That's why at TMG, we believe in being clear, fair, and letting you take the wheel."
                            </blockquote>
                        </motion.div>

                        {/* Valuation Form */}
                        <motion.div initial="hidden" whileInView="show" variants={fadeUpVariants} viewport={{ once: true, amount: 0.2 }} className="lg:w-7/12 p-6 sm:p-10 bg-white rounded-xl border border-gray-200 shadow-2xl">
                            <h2 className={sectionTitleStyle}>Vehicle & Contact Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="registration" className={labelStyle}>Vehicle Registration Number</label>
                                        <input type="text" id="registration" name="registration" value={formData.registration} onChange={handleChange} required className={inputStyle} placeholder="AB12 XYZ" />
                                    </div>
                                    <div>
                                        <label htmlFor="mileage" className={labelStyle}>Vehicle Mileage</label>
                                        <input type="number" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} required className={inputStyle} placeholder="e.g., 50000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="firstName" className={labelStyle}>First Name</label>
                                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputStyle} placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className={labelStyle}>Last Name</label>
                                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputStyle} placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="email" className={labelStyle}>Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="john.doe@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactNumber" className={labelStyle}>Contact Number</label>
                                        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className={inputStyle} placeholder="07700 900000" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelStyle}>Message / Modifications Details (Optional)</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={`${inputStyle} resize-none`} placeholder="Full body kit, coilovers, upgraded interior, recent service history, etc." />
                                    <p className="mt-1 text-xs text-gray-500">Highlighting modifications helps us offer the best possible price.</p>
                                </div>

                                <motion.button whileTap={{ scale: 0.98 }} type="submit"
                                    className={`w-full py-3.5 sm:py-4 bg-black hover:bg-white border hover:text-black text-white font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-black/50 hover:shadow-2xl ${montserrat.className}`}>
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
