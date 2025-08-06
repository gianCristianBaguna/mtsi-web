"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Multi-Disciplinary Expertise",
    description:
      "MTSI delivers integrated solutions across various industries, addressing diverse client needs seamlessly.",
    image: "/images/slide1.jpg",
  },
  {
    title: "Innovative e-Solutions",
    description:
      "We leverage technology to streamline processes, enhance productivity, and adapt to evolving demands.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Guided by our P.E.A.C.E. values, we simplify complex processes while ensuring trust, security, and peace of mind.",
    image: "/images/slide3.jpg",
  },
];

export default function VerticalCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 lg:px-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
        What Makes Us <span className="text-blue-700">Different?</span>
      </h2>

      <div className="relative max-w-6xl mx-auto flex gap-10 items-start">
        {/* Animated External Image Preview */}
        <div className="w-1/2 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeSlide].image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider with Progress Bar and Dots */}
        <div className="relative w-1/2 h-[500px]">
          {/* Progress bar */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 z-10">
            <div
              className="bg-blue-600 w-1 transition-all duration-500"
              style={{
                height: `${((activeSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Dot indicators */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 pr-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveSlide(idx);
                  sliderRef.current?.slickGoTo(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? "bg-blue-700 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Vertical Slider */}
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="px-2">
                <motion.div
                  onClick={() => {
                    setActiveSlide(index);
                    sliderRef.current?.slickGoTo(index);
                  }}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`cursor-pointer w-[90%] mx-auto max-w-md flex items-center gap-4 rounded-lg p-4 transition-all duration-500 shadow-lg ${
                    index === activeSlide
                      ? "scale-100 opacity-100 bg-white ring-4 ring-blue-500/30"
                      : "scale-90 opacity-40 blur-sm"
                  }`}
                >
                  <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
