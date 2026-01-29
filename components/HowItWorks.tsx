"use client";

import React, { useState, useEffect } from "react";
import { Wallet, DollarSign, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Your Wallet",
    desc: "Link your Phantom or other Solana wallet to FlexVest with just a click.",
    icon: <Wallet className="text-purple-600" size={28} />,
  },
  {
    id: 2,
    title: "Deposit USDC",
    desc: "Add USDC to your FlexVest account using our simple deposit interface.",
    icon: <DollarSign className="text-purple-600" size={28} />,
  },
  {
    id: 3,
    title: "Create Savings Goals",
    desc: "Set up personal savings goals and watch your digital dollars grow.",
    icon: <Target className="text-purple-600" size={28} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        How FlexVest Works
      </h2>
      <p className="text-gray-700 mb-12 max-w-xl mx-auto">
        Start saving in digital dollars in just a few simple steps, protecting your money from Naira inflation.
      </p>

      {/* Step Navigation */}
      <div className="flex justify-center items-center mb-12 space-x-4">
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <button
              className={`w-10 h-10 rounded-full font-bold transition ${
                activeStep === step.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              {step.id}
            </button>
            {i < steps.length - 1 && <div className="w-16 h-1 bg-gray-300"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Step Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative w-72 p-6 rounded-xl shadow-lg transition-all transform ${
              activeStep === step.id
                ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white scale-105 animate-gradient-move"
                : "bg-white text-gray-800"
            }`}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="mb-4">{step.desc}</p>
            <a
              href="#"
              className={`font-medium transition ${
                activeStep === step.id ? "text-white" : "text-purple-600 hover:underline"
              }`}
            >
              Show details
            </a>
            <span className="absolute top-4 right-6 text-5xl font-bold opacity-10">{step.id}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://flourished-usability-875918.framer.app/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-transform hover:scale-105"
        >
          Get Started Now <ArrowRight size={18} />
        </a>
        <p className="text-gray-600 mt-4">
          No technical knowledge required. We’ll guide you through each step.
        </p>
      </div>
    </section>
  );
}; 

export default HowItWorks;
