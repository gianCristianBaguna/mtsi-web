"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const peaceValues = [
  {
    letter: "P",
    title: "Professional",
    tagline: "We lead with integrity.",
    description:
      "We maintain the highest standards of conduct, ethics, and responsibility in everything we do.",
    quote: "Professionalism earns trust.",
    image: "/peace/p.png",
  },
  {
    letter: "E",
    title: "Efficiency & Effectiveness",
    tagline: "Smart effort, maximum results.",
    description:
      "We deliver more by working smarter. Every action is focused on productivity and sustainable growth.",
    quote: "Efficiency is doing things right.",
    image: "/peace/e1.png",
  },
  {
    letter: "A",
    title: "Accountability",
    tagline: "We own what we deliver.",
    description:
      "We take full responsibility for our actions. Integrity is not optional—it's our culture.",
    quote: "Accountability builds reliability.",
    image: "/peace/a.png",
  },
  {
    letter: "C",
    title: "Convenience",
    tagline: "Simplifying every step.",
    description:
      "We create smooth, user-friendly solutions that save time and reduce complexity.",
    quote: "Convenience empowers confidence.",
    image: "/peace/c.png",
  },
  {
    letter: "E",
    title: "e-Solutions",
    tagline: "Technology with purpose.",
    description:
      "We harness digital tools to solve complex problems with scalable, intelligent solutions.",
    quote: "Innovation meets execution.",
    image: "/peace/e2.png",
  },
];

export default function PeaceSliderSection() {
  const [index, setIndex] = useState(0);
  const current = peaceValues[index];

  const handleNext = () => setIndex((index + 1) % peaceValues.length);
  const handlePrev = () =>
    setIndex((index - 1 + peaceValues.length) % peaceValues.length);

  return (
    <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 pb-32">
      {/* White particles scattered across the background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Generate particles programmatically for better distribution */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              opacity: Math.random() * 0.6 + 0.3,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl lg:text-8xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
            Our Core Values: P.E.A.C.E.
          </h2>

          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center p-8 lg:p-12">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px]">
              <Image
                src={current.image || "/placeholder.svg"}
                alt={current.title}
                fill
                className="object-contain"
              />
            </div>
            {/* Right Content */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-6">
                    <div className="relative inline-block">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                      {/* Main letter container */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        {/* Inner highlight */}
                        <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        {/* Letter */}
                        <span className="relative text-2xl font-black text-white drop-shadow-lg">
                          {current.letter}
                        </span>
                        {/* Decorative dots */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full shadow-lg"></div>
                      </div>
                      {/* Floating particles */}
                      <div className="absolute -top-2 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-bounce"></div>
                      <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce animation-delay-1000"></div>
                      <div className="absolute -bottom-2 left-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-bounce animation-delay-2000"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700">
                    {current.title}
                  </h3>
                  <p className="text-sm text-blue-500 uppercase tracking-wide font-medium mt-1 mb-4">
                    {current.tagline}
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {current.description}
                  </p>
                  <p className="mt-6 italic text-blue-500 font-medium">
                    "{current.quote}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg"
                >
                  Next →
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center lg:justify-start gap-2 mt-6">
                {peaceValues.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      i === index
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
