"use client";

import Image from 'next/image';
import React from 'react';
import { Poppins, Montserrat } from "next/font/google";
import WorkingInPartnership from './WorkingInPartnership';
import Reviews from './Reviews';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Navbar from './Navbar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-montserrat',
});

const Warranty = () => {
    return (
        <>
            <Navbar />
            <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
                {/* Hero Section */}
                <header className="bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 ${montserrat.className}`}>
                            Peace of Mind, Built-In
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium px-4 sm:px-0">
                            FOR PEACE OF MIND, WE INCLUDE AN RAC WARRANTY ON ALL OF THE VEHICLES WE SELL.
                        </p>
                    </div>
                </header>

                {/* Main Content: Warranty Inclusion */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                            {/* Text Content */}
                            <div className="space-y-6 sm:space-y-8">
                                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 ${montserrat.className}`}>
                                    Our Commitment to Quality & Coverage
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    All the vans that we supply are prepared to our own very high standards and come with a brand new MOT and full service from point of sale.
                                    However, sometimes unforeseen failures can occur—they are machines with thousands of moving components.
                                </p>
                                <div className="p-5 sm:p-6 bg-blue-50 border-l-4 border-blue-600 text-blue-800 rounded-lg">
                                    <p className="font-semibold text-lg sm:text-xl">Your Assurance:</p>
                                    <p className="mt-2 text-base sm:text-lg">
                                        We want to reassure you that we will be there for you in the event that such a failure does occur.
                                    </p>
                                </div>
                                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
                                    In addition to your statutory rights, all our vans are provided with a 6-month complimentary parts and labour warranty including 12 months RAC roadside assistance (unless stated otherwise on the sales invoice).
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    This warranty can be extended at the point of purchase if you wish.
                                </p>
                            </div>

                            {/* Image 1: RAC Warranty */}
                            <div className="flex justify-center items-center">
                                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                                    <Image
                                        src="/images/warranty/racwarranty.png"
                                        alt="RAC Warranty logo and cover details"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Trust and Maintenance */}
                <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            {/* Text First on Mobile */}
                            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 ${montserrat.className}`}>
                                    We Stand by Our Promises
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    We take our responsibility with this warranty very seriously and do not just offload this responsibility to some far-away insurance company who may not have your best interests at heart.
                                </p>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black border-l-4 border-black pl-4 py-2">
                                    Want to ask others? Simply look at our reviews!
                                </p>
                                <p className="text-gray-700 italic text-base sm:text-lg">
                                    Our commitment is to our customers and the quality of the vehicles we supply, ensuring you get back on the road quickly and without hassle.
                                </p>
                            </div>

                            {/* Image Second on Mobile */}
                            <div className="flex justify-center items-center order-1 lg:order-2">
                                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto bg-gray-100 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6">
                                    <Image
                                        src="/images/warranty/racmaintenance.png"
                                        alt="RAC Maintenance details"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <WorkingInPartnership />
            <Reviews />
            <ContactSection />
        </>
    );
}

export default Warranty;