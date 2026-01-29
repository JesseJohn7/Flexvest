"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  DollarSign,
  Smartphone,
  Lock,
  Target,
  Percent,
  Globe,
} from "lucide-react";
import solanaImg from "../public/solana.png";

const Features = () => {
  const stats = [
    {
      title: "Nigerian Naira Inflation Rate",
      value: "22.41%",
      desc: "Annual inflation rate (April 2025)",
      icon: <DollarSign size={32} className="text-green-500" />,
    },
    {
      title: "Active FlexVest Users",
      value: "50+",
      desc: "Growing community across Nigeria",
      icon: <Users size={32} className="text-green-500" />,
    },
    {
      title: "Mobile Access Rate",
      value: "99.7%",
      desc: "Platform availability on mobile devices",
      icon: <Smartphone size={32} className="text-green-500" />,
    },
  ];

  const features = [
    {
      icon: <DollarSign size={32} className="text-green-500" />,
      title: "Stable Dollar Savings",
      desc: "Save in USDC to protect your money from Naira inflation and devaluation.",
      points: [
        "USDC pegged to USD",
        "Protection from inflation",
        "Globally accepted",
        "Stable value storage",
      ],
    },
    {
      icon: (
        <Image
          src={solanaImg}
          alt="Solana Logo"
          width={36}
          height={36}
          className="mb-2"
        />
      ),
      title: "Fast Transactions",
      desc: "Instant deposits and withdrawals powered by Solana's lightning-fast blockchain.",
      points: ["High speed", "Low latency", "Reliable network"],
    },
    {
      icon: <Lock size={32} className="text-green-500" />,
      title: "Self-Custody",
      desc: "Your funds stay in your wallet. No intermediaries, complete control over your money.",
    },
    {
      icon: <Target size={32} className="text-green-500" />,
      title: "Savings Goals",
      desc: "Create personalized savings goals and track your progress in real-time.",
    },
    {
      icon: <Percent size={32} className="text-green-500" />,
      title: "Low Fees",
      desc: "Only 0.5% withdrawal fee. No hidden charges, no expensive international transfers.",
    },
    {
      icon: <Globe size={32} className="text-green-500" />,
      title: "24/7 Access",
      desc: "Access your money anytime, anywhere with our mobile-friendly platform.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Powerful Features
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-green-600">FlexVest?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          FlexVest combines the stability of digital dollars with the speed of{" "}
          <span className="font-semibold text-green-600">Solana</span> to help
          you achieve your financial goals while protecting your savings from
          inflation.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-800 font-medium">{stat.title}</p>
            <small className="text-gray-500">{stat.desc}</small>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600 mb-3">{feature.desc}</p>
            {feature.points && (
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {feature.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 md:p-14 shadow-lg">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to protect your savings from inflation?
          </h2>
          <p className="text-white/90 mb-6">
            Join thousands of Nigerians already saving in digital dollars with{" "}
            <span className="font-semibold text-white">FlexVest</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="https://flourished-usability-875918.framer.app/"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Join Waitlist
            </a>
            <a
              href="https://x.com/Flex_vest"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src={solanaImg}
            alt="Solana"
            width={80}
            height={80}
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
