"use client";

import React from "react";
// Import motion from framer-motion (requires external installation)
import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import { Phone, MapPin, Clock } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"], variable: '--font-montserrat' });

// --- Framer Motion Variants ---
// Simple fade-up for header and bottom CTA
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variant for the main two-column grid (staggered entry)
const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between the left and right column
            delayChildren: 0.2,
        },
    },
};

// Item variant for individual grid items (columns)
const gridItemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};
// ------------------------------------


const ContactSection = () => {
    return (
        <section className={`py-24 px-6 lg:px-12 bg-white overflow-hidden ${montserrat.variable} ${poppins.variable}`}>
            <div className="max-w-7xl mx-auto">

                {/* Hero Heading (Fade Up Animation) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-20"
                >
                    <h1 className={`text-6xl md:text-5xl font-black text-gray-900 leading-none ${poppins.className}`}>
                        GET IN TOUCH
                    </h1>
                    <p className={`text-xl md:text-2xl text-gray-600 mt-6 font-medium ${poppins.className}`}>
                        We’re here to help you build or buy your perfect van
                    </p>
                    <div className="w-32 h-1.5 bg-black mx-auto mt-8"></div>
                </motion.div>

                {/* Main Grid (Staggered Animation) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={gridContainerVariants}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch"
                >

                    {/* Left: Contact Info – Premium Black Card (Staggered Item) */}
                    <motion.div variants={gridItemVariants} className="bg-black text-white rounded-3xl p-10 lg:p-14 shadow-2xl flex flex-col justify-between">
                        <h2 className={`text-4xl md:text-5xl font-black mb-12 ${montserrat.className}`}>
                            Visit or Call Us
                        </h2>

                        <div className="space-y-10">

                            {/* Phone */}
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className={`text-gray-400 text-sm uppercase tracking-wider ${poppins.className}`}>Phone</p>
                                    <a
                                        href="tel:03300434263"
                                        className={`text-3xl font-black hover:text-gray-300 transition ${montserrat.className}`}
                                    >
                                        0330 043 4263
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className={`text-gray-400 text-sm uppercase tracking-wider mb-2 ${poppins.className}`}>Location</p>
                                    <p className={`text-xl leading-relaxed font-medium max-w-sm ${poppins.className}`}>
                                        Unit 28, Phoenix Industrial Estate, Failsworth, Manchester, Lancashire, M35 9DS
                                    </p>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className={`text-gray-400 text-sm uppercase tracking-wider mb-4 ${poppins.className}`}>Opening Hours</p>
                                    <ul className={`space-y-3 text-lg font-medium ${poppins.className}`}>
                                        <li className="flex justify-between"><span>Monday – Friday</span><span className="text-gray-300">10:00 – 18:00</span></li>
                                        <li className="flex justify-between"><span>Saturday</span><span className="text-gray-300">11:00 – 16:00</span></li>
                                        <li className="flex justify-between"><span>Sunday</span><span className="text-gray-300">Appointment Only</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="tel:03300434263"
                            className={`mt-12 inline-block w-full py-5 bg-white text-black text-center font-bold text-xl uppercase tracking-wider rounded-2xl hover:bg-gray-100 transition transform hover:scale-[1.01] shadow-xl ${montserrat.className}`}
                        >
                            Call Now
                        </a>
                    </motion.div>

                    {/* Right: Google Map – Bold Black Frame (Staggered Item) */}
                    <motion.div variants={gridItemVariants} className="relative rounded-3xl overflow-hidden  border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9489.978870169947!2d-2.1502719!3d53.513221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7778d8a1489%3A0x3023fc52c023f4c5!2sTransparent%20Auto%20Services!5e0!3m2!1sen!2s!4v1764768422786!5m2!1sen!2s"
                            width="100%"
                            height="100%" // Set height to 100% to fill the container height (important for 'items-stretch')
                            style={{ border: 0, minHeight: '620px' }} // Ensures minimum height on all devices
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="TMG Location"
                            className=" transition-all duration-700"
                        ></iframe>

                        {/* Optional overlay badge */}
                        <div className={`absolute top-6 left-6 bg-black text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-xl ${montserrat.className}`}>
                            We Are Here
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom CTA (Fade Up Animation) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mt-20 p-10 bg-gray-50 rounded-2xl border border-gray-200"
                >
                    <p className={`text-2xl font-medium text-gray-700 mb-8 ${poppins.className}`}>
                        Can’t visit? We offer nationwide delivery & video viewings.
                    </p>
                    <a
                        href="/contact"
                        className={`inline-block px-12 py-6 bg-black text-white font-bold text-xl uppercase tracking-wider rounded-2xl hover:bg-gray-900 transition shadow-2xl ${montserrat.className}`}
                    >
                        Send Us a Message
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactSection;