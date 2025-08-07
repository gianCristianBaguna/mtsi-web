"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { features } from "@/app/components/homePageSections/homepageData/featuresData";

export default function HeroPeaceSectionMobile() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const nextSection = document.getElementById("feature-section-mobile");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="block sm:hidden relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Mobile Background Image */}
      {/* Heading */}
      <div className="relative z-10 text-center space-y-4">
        <p className="text-blue-800 font-semibold text-sm">
          Your Smart Solutions Provider
        </p>
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Discover our smart vision through P.E.A.C.E.
        </h1>
        <p className="text-sm text-gray-800 italic leading-snug">
          We promise convenience and security <br /> in all your dealings for
          your peace of mind.
        </p>
        <a
          href="#"
          className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium"
        >
          Learn more
        </a>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mt-10 space-y-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            onClick={() => handleCardClick(i)}
            className={`rounded-xl p-4 text-center shadow-md border-2 transition-all cursor-pointer ${
              activeIndex === i
                ? "bg-blue-500 text-white border-transparent scale-105"
                : "bg-white text-gray-900 border-blue-500"
            }`}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="font-bold mb-1">{f.title}</h3>
            <p className="text-sm">{f.description}</p>
            <p className="text-xs mt-2 text-blue-600">Tap to explore ↓</p>
          </motion.div>
        ))}
      </div>

      {/* Feature Detail Section */}
      <div
        id="feature-section-mobile"
        className="relative z-10 mt-12 p-4 bg-white rounded-xl shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          {features[activeIndex].title}
        </h2>
        <div className="flex justify-center mb-3">
          {features[activeIndex].personSvg}
        </div>
        <p className="text-sm text-gray-700 text-center">
          {features[activeIndex].description}
        </p>
      </div>
    </section>
  );
}
