"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Discovery & Collaboration",
    description:
      "We begin each project by deeply understanding client needs, aligning goals through open dialogue and shared vision.",
    image: "/collab.jpg",
  },
  {
    title: "Tailored Development",
    description:
      "Our teams build scalable, customized solutions using agile methods, ensuring quick iterations and constant feedback.",
    image: "/agile.jpg",
  },
  {
    title: "Impact & Support",
    description:
      "Delivery is just the beginning — we support adoption, measure results, and continuously improve for lasting impact.",
    image: "/launch.jpg",
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
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  const currentSlide = slides[activeSlide % slides.length];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center mb-10 text-gray-900">
        How We Deliver <span className="text-blue-700">Excellence</span>
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-10">
        {/* Image Preview */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider and Progress */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
          {/* Progress bar */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 z-10 hidden sm:block">
            <div
              className="bg-blue-600 w-1 transition-all duration-500"
              style={{
                height: `${
                  (((activeSlide % slides.length) + 1) / slides.length) * 100
                }%`,
              }}
            />
          </div>

          <div className="mt-4 sm:mt-10">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => {
                const isActive = index === activeSlide % slides.length;

                return (
                  <div key={index} className="px-2">
                    <motion.div
                      onClick={() => {
                        setActiveSlide(index);
                        sliderRef.current?.slickGoTo(index);
                      }}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`cursor-pointer w-[95%] sm:w-[90%] mx-auto max-w-md flex items-center gap-4 rounded-lg p-3 sm:p-4 transition-all duration-500 shadow-lg
                        ${
                          isActive
                            ? "scale-100 opacity-100 bg-white ring-4 ring-blue-500/30"
                            : "scale-90 opacity-80"
                        }`}
                    >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-1">
                          {slide.title}
                        </h3>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 max-w-2xl mx-auto text-center mb-20 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-gray-700"
          >
            {currentSlide.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
