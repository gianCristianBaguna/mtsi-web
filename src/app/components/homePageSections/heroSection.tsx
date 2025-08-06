"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Tailored & Cost-Effective Solutions",
    description:
      "We craft personalized solutions tailored to unique client needs, while ensuring scalability and value without compromising quality.",
    detailImage: "/next.svg",
  },
  {
    title: "Innovative e-Solutions",
    description:
      "We leverage technology to streamline processes, boost productivity, and adapt to evolving demands with efficiency and security.",
    detailImage: "/next.svg",
  },
  {
    title: "Versatile Expertise",
    description:
      "Our multidisciplinary team delivers integrated solutions across industries, tackling diverse challenges with seamless innovation.",
    detailImage: "/next.svg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Rooted in our P.E.A.C.E. values, we simplify complex processes while building trust, security, and peace of mind with every solution.",
    detailImage: "/next.svg",
  },
];

export default function HeroPeaceSection() {
 const [activeIndex, setActiveIndex] = useState<number>(0);

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
      // HSL: hue=210 for blue, lightness increases with each layer
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
          {layers.map((layer, index) => (
            <motion.g
              key={index}
              initial={false}
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

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <Image
            src="/personImg.png"
            alt="Person"
            width={1400}
            height={1400}
            aria-hidden="true"
            draggable="false"
            className="hidden lg:block absolute right-[-10%] top-[-20%] w-[45vw] max-w-[1000px] opacity-95 z-0 pointer-events-none drop-shadow-[8px_8px_15px_rgba(0,0,0,0.7)]
"
          />

          <div className="w-full lg:w-4/6 space-y-4 pb-40 ">
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

        {/* Feature Cards */}
        <div className="absolute bottom-0 w-full z-10 px-4 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`cursor-pointer rounded-lg p-5 shadow-md transform transition-all duration-300 ${
                  activeIndex === i
                    ? "scale-105 ring-2 ring-blue-600 bg-blue-700 text-white border-blue-600"
                    : "scale-100 bg-white text-gray-800 border-blue-600"
                } border-t-4`}
              >
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Feature Detail Section */}
      {activeIndex !== null && (
        <section
          id="feature-section"
          className="relative bg-white py-32 px-4 md:px-6 transition-all duration-500"
        >
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left Abstract Image */}
            <div className="hidden md:flex justify-center relative h-[300px]">
              <Image
                src="/img2.jpg"
                alt="Abstract Left"
                fill
                className="object-contain opacity-80"
              />
            </div>

            {/* Center Text + Image */}
            <div className="col-span-1 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                {features[activeIndex].title}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
                {features[activeIndex].description}
              </p>
              <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={features[activeIndex].detailImage}
                  alt={`${features[activeIndex].title} detail`}
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Abstract Image */}
            <div className="hidden md:flex justify-center relative h-[300px]">
              <Image
                src="/img1.jpg"
                alt="Abstract Right"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
