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
          className="relative h-auto py-16 px-6 overflow-hidden"
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
              height={1200}
              aria-hidden="true"
              draggable="false"
              className="hidden lg:block absolute  right-[-10%] top-[-10%] w-[45vw] max-w-[1000px] opacity-95 z-0 pointer-events-none drop-shadow-[8px_8px_15px_rgba(0,0,0,0.7)]"
            />

            <div className="w-full lg:w-4/6 space-y-4 pb-30">
              <p className="text-blue-800 font-semibold text-sm mt-30">
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
        </motion.section>
      </div>
    </>
  );
}
