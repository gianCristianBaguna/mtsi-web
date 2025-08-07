"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { features } from "@/app/components/homePageSections/homepageData/featuresData";

export default function HeroPeaceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const nextSection = document.getElementById("feature-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const layers = Array.from({ length: 50 }, (_, i) => {
    const factor = i / 50;
    const offset = i * 40;
    return {
      tx: -1800 + i * 150,
      ty: 60 - i * 1.2,
      scale: 2.8 - i * 0.03,
      skew: 30 - i * 0.6,
      color: `hsl(210, 100%, ${20 + factor * 50}%)`,
      d: `
        M0,${300 + offset}
        C150,${250 + offset} 350,${350 + offset} 500,${300 + offset}
        C650,${250 + offset} 850,${350 + offset} 1000,${300 + offset}
        L1000,500 L0,500 Z
      `,
    };
  });

  return (
    <>
      <div className="hidden md:block">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen py-32 px-6 overflow-hidden"
        >
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
            className="absolute top-0 left-0 w-full h-full"
          >
            {layers.map((layer, i) => (
              <motion.g
                key={i}
                animate={{
                  transform: `
                  translate(${layer.tx}px, ${layer.ty}px)
                  scale(${layer.scale})
                  skewX(${layer.skew}deg)
                `,
                }}
              >
                <path d={layer.d} fill={layer.color} opacity={0.3} />
              </motion.g>
            ))}
          </svg>

          <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
            <Image
              src="/personImg.png"
              alt="Person"
              width={1400}
              height={1400}
              aria-hidden="true"
              draggable="false"
              className="hidden lg:block absolute right-[-10%] top-[-20%] w-[45vw] max-w-[1000px] opacity-95 z-0 pointer-events-none drop-shadow-[8px_8px_15px_rgba(0,0,0,0.7)]"
            />

            <div className="w-full lg:w-4/6 space-y-4 pb-40">
              <p className="text-blue-800 font-semibold text-sm">
                Your Smart Solutions Provider
              </p>
              <h1 className="text-3xl sm:text-6xl font-bold leading-tight text-gray-900">
                Discover our smart vision through P.E.A.C.E.
              </h1>
              <p className="text-base text-white italic leading-tight">
                We promise convenience and security <br /> in all your dealings
                for your peace of mind.
              </p>
              <a
                href="#"
                className="inline-block mt-5 px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition text-sm font-medium"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 w-full z-10 px-4 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  onClick={() => handleCardClick(i)}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  aria-label={`View feature: ${f.title}`}
                  className={`relative cursor-pointer rounded-xl p-5 shadow-lg border-2 transition-all duration-300
  ${
    activeIndex === i
      ? `bg-${f.color}-500 text-white border-transparent scale-105`
      : `bg-white text-gray-900 border-${f.color}-500 hover:bg-${f.color}-500 hover:text-white hover:scale-105`
  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Click indicator */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-60"
                    animate={{
                      scale: hoveredCard === i ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: hoveredCard === i ? Infinity : 0,
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>

                  {/* Pulse effect for active card */}
                  {activeIndex === i && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white opacity-50"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <h3 className="font-bold text-base text-center mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-center">{f.description}</p>
                  {/* Click hint */}
                  <motion.div
                    className="mt-3 text-xs font-medium opacity-75 flex items-center justify-center"
                    animate={{
                      opacity: hoveredCard === i ? [0.75, 1, 0.75] : 0.75,
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredCard === i ? Infinity : 0,
                    }}
                  >
                    Click to explore
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {activeIndex !== null && (
          <section
            id="feature-section"
            className="relative py-20 px-4 md:px-6 overflow-hidden transition-all duration-500 bg-white"
          >
            {/* Clean Background with subtle pattern */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-80"></div>
              <svg
                className="absolute inset-0 w-full h-full opacity-5"
                viewBox="0 0 100 100"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Decorative Pulsing Elements */}
              <motion.div
                className={`absolute top-20 left-10 w-20 h-20 rounded-full opacity-10 bg-${features[activeIndex].color}-400`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className={`absolute top-32 right-16 w-12 h-12 rounded-full opacity-15 bg-${features[activeIndex].color}-300`}
                animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className={`absolute bottom-20 left-1/4 w-8 h-8 rounded-full opacity-20 bg-${features[activeIndex].color}-500`}
                animate={{ x: [0, 20, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Header Section */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="flex-shrink-0">
                    {features[activeIndex].personSvg}
                  </div>
                  <div className="text-left max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
                      {features[activeIndex].title}
                    </h2>
                    <div
                      className={`w-24 h-1 bg-${features[activeIndex].color}-500 rounded-full`}
                    ></div>
                  </div>
                </div>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
                  Discover how this feature enhances user experience, boosts
                  performance, and offers real-world advantages tailored to your
                  business goals.
                </p>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-40">
                {/* Left Abstract SVG */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:flex justify-center items-center"
                >
                  {features[activeIndex].leftAbstractSvg}
                </motion.div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-black">
                    <p className="text-black text-lg md:text-xl leading-relaxed text-center">
                      {features[activeIndex].description}
                    </p>
                  </div>
                </motion.div>

                {/* Right Abstract SVG */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="hidden lg:flex justify-center items-center"
                >
                  {features[activeIndex].rightAbstractSvg}
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
