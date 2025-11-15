"use client";

import { motion } from "framer-motion";
import { Wrench, Home, Car } from "lucide-react"; // Added some example icons
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black/80">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/selectpage/selectbg.png"
        alt="background"
        fill
        className="object-cover opacity-50"
        priority
      />

      {/* ANIMATED DIAGONAL SPLIT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background:
            hoverSide === "left"
              ? "linear-gradient(135deg, rgba(255,255,255,0.10) 70%, rgba(0,0,0,0.55) 30%)"
              : hoverSide === "right"
              ? "linear-gradient(135deg, rgba(255,255,255,0.10) 30%, rgba(0,0,0,0.55) 70%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.10) 50%, rgba(0,0,0,0.55) 50%)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* MAIN CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12">

        <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">

          {/* LEFT SIDE */}
          <div
            className="cursor-pointer select-none w-full md:w-1/2 py-10 flex flex-col items-center md:items-start"
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
            onClick={() => console.log("SHOWROOM")}
          >
            <motion.div
              animate={{ x: hoverSide === "left" ? -15 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <Home size={40} className="text-white" />
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight" style={{fontFamily : "Marsek Demi Regular"}}>
                SHOWROOM
              </h2>
            </motion.div>

            <motion.div
              className="h-0.5 bg-white mt-4 rounded-full w-28"
              initial={{ width: 0 }}
              animate={{ width: hoverSide === "left" ? 120 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div
            className="cursor-pointer select-none w-full md:w-1/2 py-10 flex flex-col items-center md:items-end text-center md:text-right"
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
            onClick={() => console.log("CUSTOMISATION")}
          >
            <motion.div
              animate={{ x: hoverSide === "right" ? 15 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-3 justify-center md:justify-end"
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                CUSTOMISATION
              </h2>
              <Wrench size={40} className="text-white" />
            </motion.div>

            <motion.div
              className="h-0.5 bg-white mt-4 rounded-full w-44 ml-auto"
              initial={{ width: 0 }}
              animate={{ width: hoverSide === "right" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

        </div>

        {/* HOVER DETAILS */}
        <motion.div
          className="absolute bottom-10 text-center w-full px-6 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: hoverSide ? 1 : 0,
            y: hoverSide ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          {hoverSide === "left" && (
            <p className="text-white text-lg md:text-xl">Browse our showroom to find your perfect vehicle.</p>
          )}
          {hoverSide === "right" && (
            <p className="text-white text-lg md:text-xl">Customize your vehicle to your exact preferences.</p>
          )}
        </motion.div>

      </div>
    </div>
  );
}
