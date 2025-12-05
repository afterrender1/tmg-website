"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins, Montserrat } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

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

// Fade Up Animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Stagger List Animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Finance = () => {
  return (
 <>
 <Navbar/>
    <div className="min-h-screen bg-white p-8 sm:p-12">
      <div className="max-w-6xl mx-auto">

    
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h1
            className={`text-xs uppercase tracking-widest text-gray-600 mb-2 ${poppins.className}`}
          >
            Finance Options
          </h1>

          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-gray-900 ${montserrat.className}`}
          >
            Flexible, Affordable Finance Deals
          </h2>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className={`max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-12 ${poppins.className}`}
        >
          We specialise in offering finance solutions tailored to suit all budgets. 
          Working closely with a range of trusted lenders, including 
          <span className="font-semibold text-gray-900"> Close Brothers Motor Finance</span>, 
          we ensure fast approvals, competitive rates, and a smooth experience.
        </motion.p>

        {/* FCA Box */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariants}
          className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12"
        >
          <p className={`text-gray-700 text-sm leading-relaxed ${poppins.className}`}>
            <span className="font-semibold">Regulated by the Financial Conduct Authority (FCA).</span>{" "}
            Trade Motor Group works directly with Close Brothers – a leading UK finance provider. 
            We offer Hire Purchase (HP) finance across all vehicles and PCP by request.
          </p>
        </motion.div>

        {/* Finance Options */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* HP Option */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm  transition-all flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src="/images/finance/hire.png"   // ← update with actual HP icon path
                alt="Hire Purchase"
                fill
                className="object-contain"
              />
            </div>
            <h3
              className={`text-2xl font-bold text-gray-900 mb-3 ${montserrat.className}`}
            >
              Hire Purchase (HP)
            </h3>
            <p className={`text-gray-600 leading-relaxed text-sm ${poppins.className}`}>
              Commonly known as <span className="font-semibold">HP</span>, this popular finance method
              lets you spread the full cost of the vehicle over fixed monthly payments.
              <br /><br />
              ✔ Fixed interest rate  
              <br />
              ✔ Fixed monthly payments  
              <br />
              ✔ No mileage limits  
              <br />
              ✔ Own the vehicle at the end  
            </p>
          </motion.div>

          {/* PCP Option */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm  transition-all flex flex-col items-center"
          >
            <div className="w-29 h-24 mb-4 relative">
              <Image
                src="/images/finance/personal.png"   // ← update with actual PCP icon path
                alt="PCP Finance"
                fill
                className="object-contain"
              />
            </div>
            <h3
              className={`text-2xl font-bold text-gray-900 mb-3 ${montserrat.className}`}
            >
              Personal Contract Purchase (PCP)
            </h3>
            <p className={`text-gray-600 leading-relaxed text-sm ${poppins.className}`}>
              Known as <span className="font-semibold">PCP</span>, this option lowers monthly payments
              by deferring a portion of the cost (the balloon payment) to the end.
              <br /><br />
              ✔ Lower monthly payments  
              <br />
              ✔ Optional final balloon payment  
              <br />
              ✔ Change, return, or keep the vehicle  
              <br />
              ✔ Perfect for customers who like to upgrade  
            </p>
          </motion.div>

        </motion.div>

        {/* Representative Example */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          className={`max-w-3xl mx-auto mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl ${poppins.className}`}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold">Representative Example:</span>  
            HP: 48 monthly payments of <span className="font-semibold">£537.74</span>.  
            Cash price: <span className="font-semibold">£22,995</span>.  
            Deposit: <span className="font-semibold">£2,299.50</span>.  
            Amount of credit: <span className="font-semibold">£20,695.50</span>.  
            Representative APR: <span className="font-semibold text-red-600">11.9%</span>.  
            Total payable: <span className="font-semibold text-green-700">£28,121.02</span>.
          </p>
        </motion.div>
      </div>
    </div>

    <WorkingInPartnership />
    <Reviews/>
    <ContactSection />
    <Footer />
 </>
  );
};

export default Finance;
