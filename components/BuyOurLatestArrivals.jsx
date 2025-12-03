import React from "react";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '500'], // Regular, Medium, SemiBold, Bold
  variable: '--font-poppins', // Use CSS variable for Tailwind
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'], // Bold, ExtraBold, Black
  variable: '--font-montserrat', // Use CSS variable for Tailwind
});



// Data with imageSrc added
const vehicleData = [
  {
    title: "MAXI+NO VAT+ROTIFORM",
    makeModel: "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Panel Van",
    details: "5dr Manual LWB Euro 6",
    price: "£20,995",
    monthlyPayment: "£490.97 p/m",
    highlight: "MAXI+NO VAT+ROTIFORM",
     imageSrc: "/images/ourlatestarrivels/vmaxi.png",

  },
  {
    title: "5 SEATS+HYBRID BUMPER",
    makeModel: "Volkswagen Caddy 2.0 TDI CADDY TMG R C20 Panel Van",
    details: "5dr Diesel Manual SWB Euro 6",
    price: "£21,495",
    monthlyPayment: "£502.66 p/m",
    highlight: "5 SEATS+HYBRID BUMPER",
       imageSrc: "/images/ourlatestarrivels/vcaddy2.png",

  },
  {
    title: "MAXI+TMG+HIGHLINE!",
    makeModel:
      "Volkswagen Caddy Maxi 2.0 TDI CADDY MAXI TMG R C20 Highline Panel Van",
    details: "5dr Diesel Manual LWB Euro 6",
    price: "£16,995 +VAT",
    monthlyPayment: "£397.30 p/m",
    highlight: "MAXI+TMG+HIGHLINE!",
     imageSrc: "/images/ourlatestarrivels/vcaddy.png",

  },
  {
    title: "TMG-RS CREW VAN+6 SEATER",
    makeModel:
      "Ford Transit Custom CUSTOM 2.0 320 EcoBlue Limited Crew Van Double Cab",
    details: "5dr Diesel Manual L2 H1 DCIV TMG RS SPORT",
    price: "£21,495",
    monthlyPayment: "£502.66 p/m",
    highlight: "TMG-RS CREW VAN+6 SEATER",
    imageSrc: "/images/ourlatestarrivels/ford.png",
  },
];

// Vehicle Card with image
const VehicleCard = ({ vehicle }) => (
  <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl ">

    {/* Vehicle Image */}
    <div className="relative w-full h-48 sm:h-56 bg-gray-100 rounded-t-xl overflow-hidden">
      <Image
        src={vehicle.imageSrc}
        alt={vehicle.title}
        fill
        className="object-cover"
      />
    </div>

    {/* Top Content */}
    <div className="p-5 grow">
      <p
        className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.title.split("+")[0]}
      </p>

      <h3
        className="text-lg font-bold text-gray-900 leading-snug mb-3"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {vehicle.makeModel}
      </h3>

      <p
        className="text-sm text-gray-500 mb-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.details}
      </p>

      <span
        className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.highlight.includes("ROTIFORM")
          ? "Rotiform Wheels"
          : vehicle.highlight}
      </span>
    </div>

    {/* Price + Button */}
    <div className="border-t border-gray-100 p-5 pt-4">
      <p
        className="text-3xl font-bold text-black mb-1"
        style={{ fontFamily: "poppins" }}
      >
        {vehicle.price}
      </p>

      <p
        className="text-sm text-gray-600"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {vehicle.monthlyPayment} (Estimate)
      </p>

      <button
        className="cursor-pointer mt-4 w-full py-2.5 text-sm font-semibold uppercase hover:text-black hover:bg-white tracking-wider rounded text-white bg-black hover:border transition-colors duration-200"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Check Availability
      </button>
    </div>
  </div>
);

// Main Component
const BuyOurLatestArrivals = () => {
  return (
    <div className="min-h-screen bg-white p-8 sm:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1
            className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1"
            style={{ fontFamily: "Poppins" }}
          >
            New Vehicle Stock
          </h1>

          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            style={{ fontFamily: "poppins" }}
          >
            Latest Commercial Vans
          </h2>
        </header>

        {/* Search Bar */}
     <div className="mb-10 max-w-2xl mx-auto">
  <div className="relative">
    <input
      type="text"
      placeholder="Search by make, model, or feature..."
      className="w-full py-3 pl-12 pr-10 text-gray-900 rounded-full bg-[#F2F3F7] shadow-sm 
                 focus:ring-2 focus:ring-black/20 focus:border-black/10 border border-gray-300
                 transition-all outline-none "
      style={{ fontFamily: "Poppins"}}
    />

    {/* Search Icon */}
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>

    {/* Clear Button (X) */}
    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition">
      ✕
    </button>
  </div>
</div>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicleData.map((vehicle, index) => (
            <VehicleCard key={`v-${index}`} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyOurLatestArrivals;
