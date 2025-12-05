"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Montserrat, Nova_Flat } from "next/font/google";
import { useRouter } from "next/navigation";
const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});



const BuyHero = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen text-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1950px]">

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20">

          {/* LEFT: Main Vehicle Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 md:row-span-6 bg-linear-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10 relative group"
          >
            {/* Main Car Image */}
            <div className="relative w-full h-80 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
              <Image
                src="/images/buyheroimages/mainhero.png"
                alt="XPERION Tempest - Ultimate Body Kit"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-black text-xs font-bold rounded-full">IN STOCK</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">LIMITED</span>
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${novaFlat.className}`} >
                Mercedes-Benz C Class              </h1>
              <p className={`text-sm sm:text-base text-gray-200 max-w-full md:max-w-xl ${montserrat.className}`}>
                Aerodynamic body kit for LADA Vesta. Transform your ride into a street icon.
              </p>

              <div className={`flex flex-wrap items-center gap-4 mt-6 text-sm sm:text-base ${montserrat.className}`}>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (128 reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Certified Installation</span>
                </div>
              </div>

              <button onClick={()=> {
                router.push("/showroom")
              }} className={`mt-6 inline-flex items-center gap-3 px-5 sm:px-6 py-2 sm:py-3 bg-black cursor-pointer  text-white font-bold rounded-full transition-all group ${montserrat.className}`}>
                BUY NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Cards */}

          {/* Card 1: Price & Discount */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-start-4 md:row-start-1 h-60 sm:h-72 md:h-70 md:col-span-1 md:row-span-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg  relative overflow-hidden"
          >
            <Image
              src="/images/buyheroimages/mainstair.png"
              alt="15% OFF"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Card 2: Quick Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-2 h-60 sm:h-72 md:h-60 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg overflow-hidden relative"
          >
            <Image
              src="/images/buyheroimages/mainfront.png"
              alt="Quick Specs"
              fill
              className="object-cover"
            />
          </motion.div>



          {/* Card 3: Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="md:col-start-4 md:row-start-5 md:col-span-1 md:row-span-2 rounded-2xl h-60 sm:h-72 md:h-55 shadow-lg border border-white/10 overflow-hidden relative"
          >
            <Image
              src="/images/buyheroimages/carbg.jpg"
              alt="Support"
              fill
              className="object-cover"
            />
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default BuyHero;
