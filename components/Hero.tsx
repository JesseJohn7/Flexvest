"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import solanaLogo from "../public/solana.png";

const Hero: React.FC = () => {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=ngn"
        );
        const data = await res.json();
        setRate(data["usd-coin"].ngn);
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
      }
    };
    fetchRate();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-r from-gray-50 to-gray-100 gap-10"
    >
      {/* Left Text Section */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        {/* Launching Soon + Solana Powered */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <span className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            Launching Soon
          </span>
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Solana Powered
            <Image
              src={solanaLogo}
              alt="Solana"
              width={16}
              height={16}
              className="inline-block"
            />
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Protect Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Savings
          </span>{" "}
          with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Stability
          </span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
          Inflation and volatility can eat into your Naira savings. Switch to
          USDC and secure your money with stable value.
        </p>

        <motion.a
          href="https://flourished-usability-875918.framer.app/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
        >
          Start Saving Now
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </motion.a>

        {/* Features */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} /> No bank account
            needed
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} /> Low fees
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} /> Instant
            transactions
          </div>
        </div>
      </div>

      {/* Right Exchange Card */}
      <div className="flex-1 max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5">
          <h3 className="text-lg font-semibold">Naira vs. USDC</h3>
          <p className="text-sm text-blue-100">See the difference in stability</p>
        </div>

        <div className="p-6 space-y-5">
          {/* Naira Row */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 font-medium">Naira Value</span>
              <span className="text-red-500 font-semibold">Volatile</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-800">
                ₦{rate ? rate.toLocaleString() : "..."}
              </span>
              <span className="text-gray-500 text-sm">= $1.00</span>
            </div>
            <div className="h-2 bg-red-500/60 rounded-full w-3/4"></div>
          </div>

          {/* USDC Row */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 font-medium">USDC Value</span>
              <span className="text-green-500 font-semibold">Stable</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-800">$1.00</span>
              <span className="text-gray-500 text-sm">= $1.00</span>
            </div>
            <div className="h-2 bg-green-500 rounded-full w-full"></div>
          </div>

          {/* Mini Projections */}
          <div className="bg-gray-50 p-4 rounded-xl space-y-3">
            <h4 className="text-gray-800 font-semibold text-sm">
              Your 1-Year Savings Projection
            </h4>

            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="flex justify-between text-sm mb-1">
                <span>₦100,000 in Naira</span>
                <span className="text-red-500">-22% value</span>
              </div>
              <div className="h-1.5 bg-red-500 rounded-full w-3/4"></div>
            </div>

            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="flex justify-between text-sm mb-1">
                <span>₦100,000 in USDC</span>
                <span className="text-green-500">Value maintained</span>
              </div>
              <div className="h-1.5 bg-green-500 rounded-full w-full"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-5">
          <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">
            Start Saving in USDC →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
