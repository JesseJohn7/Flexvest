"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "justdaveconect",
    role: "Crypto , Defi",
    text: "FlexVest platform makes saving funds simple, secure, and rewarding.",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "mickycrypt2",
    role: "Crypto Enthusiast",
    text: "Flexing with FlexVest. Saving made easy, secure, and rewarding. If you’re not in yet, you’re missing out big time.",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "salifud01",
    role: "Web3 Writer",
    text: "Totally agree, if you’re not saving on FlexVest yet, you’re missing out.",
    avatar: "/avatar3.jpg",
  },
  {
    id: 4,
    name: "web3andrw",
    role: "Web3 Content Creator",
    text: "Platform trusted, progress guaranteed, savings unstoppable.",
    avatar: "/avatar4.jpg",
  },
  {
    id: 5,
    name: "wagmirise",
    role: "@SentientAGI",
    text: "Smart saving, secure platform FlexVest helps grow your financial future.",
    avatar: "/avatar5.jpg",
  },
  {
    id: 6,
    name: "0xBeasttt",
    role: "Upcoming Python Dev",
    text: "Saving in USDC with FlexVest on Solana is a clean hedge against inflation while keeping full flexibility.",
    avatar: "/avatar6.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100 text-center" id="testimonials">
      {/* Header */}
      <div className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          Why Nigerians Love Flex<span className="text-green-600">Vest</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Hear from people who are protecting their savings from Naira inflation and securing their financial future.
        </p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateZ: 1,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 italic">“{t.text}”</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
