"use client";

import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import Image from 'next/image';
import { Wrench, PaintBucket, Car, HardHat, Bolt, Zap } from 'lucide-react';
import Navbar from "./Navbar";
import WhyTMG from "./WhyTmg";
import Link from "next/link";
import TmgBehindScenesVideo from "./TmgBehindScenesVideo";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['600'],
    variable: "--font-montserrat",
});

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const services = [
    {
        title: "VW Caddy Experts",
        description:
            "Whether you want to build a show van or commercial upgrade, our VAG-trained specialists deliver factory-grade quality with a personal touch.",
        image: "/images/customisation/expert.png",
        icon: Wrench,
    },
    {
        title: "Precision Paint Booth",
        description:
            "Achieve a classy OEM finish or a bespoke colour. Our talented VAG trained paint technicians use state-of-the-art booths where the magic happens.",
        image: "/images/customisation/paint.png",
        icon: PaintBucket,
    },
    {
        title: "Premium Carpet Lining",
        description:
            "Transform your noisy and cold VW Caddy/Transporter or Ford into a warm, quiet, and insulated cabin space with our quality lining package.",
        image: "/images/customisation/carpet.png",
        icon: HardHat,
    },
    {
        title: "OEM Seat Conversions",
        description:
            "Enhance practicality with a 1+1+1 OEM seat conversion (e.g., VW Touran). Fully removable and installed to strict DVSA safety standards.",
        image: "/images/customisation/seat.png",
        icon: Car,
    },
    {
        title: "Ultimate Styling & Add-ons",
        description:
            "Build the custom van of your dreams. From coilovers and wide tracks to Alcantara seats and advanced body kits, we offer everything you desire.",
        image: "/images/customisation/addones.png",
        icon: Bolt,
    },
    {
        title: "LED Headlight Conversions",
        description:
            "Convert your stock halogens to powerful LED low and high beams for 6000K crisp white road illumination. Improves visibility and modernises the look.",
        image: "/images/customisation/led.png",
        icon: Zap,
    },
];

const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden cursor-pointer 
                       transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-300"
        >
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-12 h-12 text-white/90" />
                </div>
            </div>

            <div className="p-4 sm:p-5">
                <div className="flex items-center mb-2 sm:mb-3">
                    <Icon className="w-5 h-5 text-gray-900 mr-2 sm:mr-3" />
                    <h3 className={`text-lg sm:text-xl font-extrabold text-black ${montserrat.className}`}>
                        {service.title}
                    </h3>
                </div>
                <p className={`text-gray-700 text-sm sm:text-base leading-relaxed ${poppins.className}`}>
                    {service.description}
                </p>
                <a href="#" className={`mt-3 sm:mt-4 inline-block text-sm sm:text-base font-semibold text-black hover:text-gray-700 transition-colors ${poppins.className}`}>
                    Learn More &rarr;
                </a>
            </div>
        </motion.div>
    );
};

export default function Customisation() {
    return (
        <>
            <Navbar />
            <div className="bg-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black text-center mb-4 ${montserrat.className}`}
                    >
                        Master Your Van's Style
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${poppins.className}`}
                    >
                        Explore our professional customisation services, from factory-grade conversions to bespoke styling, delivered by VAG-trained specialists.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-inner"
                    >
                        <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 ${montserrat.className}`}>
                            Ready to Start Your Build?
                        </h3>
                        <Link
                            href="/contact"
                            className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold border hover:text-black hover:bg-white uppercase tracking-wider rounded-md bg-black text-white shadow-xl transition-all duration-300 hover:scale-[1.02] ${poppins.className}`}
                        >
                            Contact Our Specialists
                        </Link>
                    </motion.div>
                </div>
            </div>
            <TmgBehindScenesVideo />
            <WhyTMG />
        </>
    );
}
