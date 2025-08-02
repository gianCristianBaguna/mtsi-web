"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white"
      >
        {/* === Background Shapes === */}
        <div className="absolute inset-0 z-0 pointer-events-none -ml-20">
          <div className="absolute top-10 right-0 w-1/6 h-10/12 bg-blue-950 hidden lg:block" />
          <div className="absolute top-0 right-15 w-1/4 h-1/2 bg-blue-500 transform skew-x-12 origin-topright hidden lg:block" />
        </div>
        <div className="absolute top-4 right-0 w-1/8 h-3/4 bg-blue-950 hidden lg:block xl:hidden" />
        <div className="absolute top-0 right-8 w-1/5 h-2/5 bg-blue-500 transform skew-x-12 origin-top-right hidden lg:block xl:hidden" />
        <div className="lg:hidden absolute top-5 right-0 w-20 h-32 bg-blue-600 transform skew-x-12" />
        <div className="lg-hidden absolute top-10 h-32 bg-blue-950 hidden lg:block" />

        {/* === Content Container === */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16 space-y-8">
          {/* === Header Section === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start"
          >
            <div className="flex-1 w-full lg:w-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-4 mt-4 sm:mt-8 lg:mt-16 xl:mt-20">
                Welcome to <span className="text-blue-500">MTSI</span>
              </h1>
            </div>

            {/* Decorative Dots */}
            <div className="flex gap-1 mt-4 sm:mt-6 lg:mt-30 mr-0 lg:mr-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-600 diagonal-bar"
                />
              ))}
            </div>

            {/* Logo Desktop */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col items-center text-white p-4 rounded-lg ml-10"
            >
              <div className="text-4xl font-semibold text-center mb-2 mr-2">
                MT SOLUTIONS
                <br />
                Incorporated
              </div>
            </motion.div>
          </motion.div>

          {/* === Grid Section === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* === Left Column === */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">
                    MT SOLUTIONS Incorporated
                  </div>
                  <div className="w-10 h-10 bg-white rounded border-2 border-white flex items-center justify-center mx-auto">
                    <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="text-xl space-y-4 text-blue-950 text-justify leading-relaxed">
                <p>
                  At MT Solutions Incorporated [MTSI], we are more than just a
                  consulting firm; we are your dedicated partners in achieving
                  excellence. With a commitment to helping individuals and
                  organizations navigate their most pressing challenges, we
                  offer strategic insights, innovative solutions, and practical
                  guidance tailored to your unique needs.
                </p>
                <p>
                  We promise convenience and security in all your dealings for
                  your peace of mind.
                </p>
              </div>
            </motion.div>

            {/* === Right Column - Image === */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center w-full px-2 overflow-x-hidden mt-10"
            >
              <div className="relative w-[900px] h-[600px] bg-blue-500 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
                <Image
                  src="/img1.jpg"
                  alt="Atty. Mark Aaron B. Tinambunan, CEO of MT Solutions Incorporated"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            </motion.div>
          </div>

          {/* === CEO Label === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-1/3 lg:bottom-1/3 sm:bottom-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full px-4"
          >
            <div className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg -skew-x-6 text-center max-w-md mx-auto">
              <div className="transform skew-x-6">
                <div className="font-bold text-sm sm:text-lg md:text-lg lg:text-xl">
                  Atty. Mark Aaron B. Tinambunan
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-90">
                  CEO of MT Solutions Incorporated
                </div>
              </div>
            </div>
          </motion.div>

          {/* === Page Indicator === */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative bottom-10 left-0 text-blue-600 font-semibold text-xl px-3 py-1 block"
          >
            Page 1
          </motion.span>
        </div>
      </motion.section>
    </section>
  );
}
