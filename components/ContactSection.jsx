"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"], variable: '--font-montserrat' });

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const gridItemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const ContactSection = () => {
    return (
        <>
            <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden ${montserrat.variable} ${poppins.variable}`}>
                <div className="max-w-7xl mx-auto">

                    {/* Hero Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUpVariants}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-center mb-16 sm:mb-20"
                    >
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight ${poppins.className}`}>
                            GET IN TOUCH
                        </h1>
                        <p className={`text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-6 font-medium ${poppins.className}`}>
                            We’re here to help you build or buy your perfect van
                        </p>
                        <div className="w-24 sm:w-32 h-1.5 bg-black mx-auto mt-6 sm:mt-8"></div>
                    </motion.div>

                    {/* Main Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={gridContainerVariants}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-20 items-stretch"
                    >
                        {/* Left: Contact Info */}
                        <motion.div variants={gridItemVariants} className="bg-black text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl flex flex-col justify-between">
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-8 sm:mb-12 ${montserrat.className}`}>
                                Visit or Call Us
                            </h2>

                            <div className="space-y-8 sm:space-y-10">
                                {/* Phone */}
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className={`text-xs sm:text-sm uppercase tracking-wider text-gray-400 ${poppins.className}`}>Phone</p>
                                        <a href="tel:03300434263" className={`text-2xl sm:text-3xl font-black hover:text-gray-300 transition ${montserrat.className}`}>
                                            0330 043 4263
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className={`text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2 text-gray-400 ${poppins.className}`}>Location</p>
                                        <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-full sm:max-w-sm ${poppins.className}`}>
                                            Unit 28, Phoenix Industrial Estate, Failsworth, Manchester, Lancashire, M35 9DS
                                        </p>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className={`text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4 text-gray-400 ${poppins.className}`}>Opening Hours</p>
                                        <ul className={`space-y-1 sm:space-y-2 text-base sm:text-lg font-medium ${poppins.className}`}>
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
                                className={`mt-8 sm:mt-12 inline-block w-full py-4 sm:py-5 bg-white text-black text-center font-bold text-lg sm:text-xl uppercase tracking-wider rounded-2xl hover:bg-gray-100 transition transform hover:scale-[1.01] shadow-xl ${montserrat.className}`}
                            >
                                Call Now
                            </a>
                        </motion.div>

                        {/* Right: Google Map */}
                        <motion.div variants={gridItemVariants} className="relative rounded-3xl overflow-hidden border border-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9489.978870169947!2d-2.1502719!3d53.513221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7778d8a1489%3A0x3023fc52c023f4c5!2sTransparent%20Auto%20Services!5e0!3m2!1sen!2s!4v1764768422786!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px', smMinHeight: '500px', mdMinHeight: '600px', lgMinHeight: '620px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TMG Location"
                                className="transition-all duration-700 w-full h-full"
                            ></iframe>

                            <div className={`absolute top-4 sm:top-6 left-4 sm:left-6 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold uppercase tracking-wider shadow-xl ${montserrat.className}`}>
                                We Are Here
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUpVariants}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-center mt-16 sm:mt-20 p-6 sm:p-10 bg-gray-50 rounded-2xl border border-gray-200"
                    >
                        <p className={`text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6 sm:mb-8 ${poppins.className}`}>
                            Can’t visit? We offer nationwide delivery & video viewings.
                        </p>
                        <Link
                            href="/contact"
                            className={`inline-block px-8 sm:px-12 py-4 sm:py-6 bg-black text-white font-bold text-md sm:text-xl uppercase tracking-wider rounded-2xl hover:bg-gray-900 transition shadow-2xl ${montserrat.className}`}
                        >
                            Send Us a Message
                        </Link>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default ContactSection;
