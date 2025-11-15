"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Home } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Nova_Flat , Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
 
// Nova Flat font
const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  const [hoverSide, setHoverSide] = useState(null);
  const router = useRouter();

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
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 ">

        <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-between ">

          {/* LEFT SIDE */}
          <div
            className="cursor-pointer select-none w-full md:w-1/2 py-10 flex flex-col items-start"
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
            onClick={() => router.push("/buy")}
          >
            <motion.div
              animate={{ x: hoverSide === "left" ? -15 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-6" // increased gap
            >
              <Home size={40} className="text-white" />
              <h2
                className={`${novaFlat.className} text-5xl md:text-6xl font-semibold text-white tracking-tight`}
              >
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
            className="cursor-pointer select-none w-full md:w-1/2 py-10 flex flex-col items-end"
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
                      onClick={() => router.push("/customisation")}

          >
            <motion.div
              animate={{ x: hoverSide === "right" ? 15 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-6 justify-end" // increased gap
            >
              <h2
                className={`${novaFlat.className} text-5xl md:text-6xl font-semibold text-white tracking-tight`}
              >
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

        {/* HOVER DETAILS WITH FADE OUT */}
        <AnimatePresence>
          {hoverSide && (
            <motion.div
              className="absolute bottom-10 w-full px-6 md:px-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {hoverSide === "left" && (
                <div className="text-left max-w-md text-white space-y-2" style={{fontFamily : "montserrat"}}>
                  <p>Explore our wide range of vehicles.</p>
                  <p>Find the perfect model that fits your needs.</p>
                  <p>Check out the latest features and designs.</p>
                  <p>Experience our showroom like never before.</p>
                </div>
              )}
              {hoverSide === "right" && (
                <div className="text-left max-w-md ml-auto text-white space-y-2" style={{fontFamily : "montserrat"}}>
                  <p>Personalize your vehicle with your choice of colors.</p>
                  <p>Select interior options and accessories.</p>
                  <p>Configure performance and technology packages.</p>
                  <p>Create a car that matches your unique style.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
