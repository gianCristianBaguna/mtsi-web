"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TestSection() {
  return (
    <section className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-white">
      {/* Skewed Blue Background */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full z-0"
      >
        <div className="h-full w-[60vw] -skew-x-12 origin-left bg-blue-900 -ml-[10vw] relative">
          {/* Decorative Shapes */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden sm:block absolute top-0 -right-5 w-16 sm:w-20 md:w-24 h-40 sm:h-60 md:h-70 bg-blue-950 origin-top-right skew-y-30 drop-shadow-xl/25"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:block absolute top-80 -right-5 w-16 sm:w-20 md:w-24 h-20 sm:h-28 md:h-30 bg-blue-900 origin-top-right skew-y-30 z-10 drop-shadow-l"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:block absolute top-90 -right-1 w-6 sm:w-8 md:w-10 h-48 sm:h-72 md:h-full bg-blue-400 origin-top-right skew-y-24 drop-shadow-xl/25"
          />
        </div>
      </motion.div>

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Column (Text + Image) */}
        <div className="w-full lg:w-1/2 flex flex-col py-12 px-4 sm:px-6 md:px-12 lg:pl-[12.5rem]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="order-1 mb-8 text-white"
          >
            <h1 className=" mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              We
              <br />
              Provide
              <br />
              Solutions
            </h1>
          </motion.div>

          {/* Image - inline on mobile, absolute on lg+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-2 relative lg:absolute lg:top-1/2 lg:left-40 lg:ml-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[700px] mx-auto  drop-shadow-xl z-10"
          >
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional business team"
              className="w-full h-40 sm:h-60 md:h-72 lg:h-80 object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* Decorative \\\ */}
        <div className="absolute top-10 right-50 mt-20 z-20">
          <div className="flex gap-1">
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
        </div>

        {/* Paragraph Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-3 w-full lg:w-1/2 flex text-justify items-center justify-center px-4 sm:px-6 md:px-12 py-12"
        >
          <div className="max-w-lg -mt-0 lg:text-blue-950 text-xl sm:text-lg sm:px-0 sm:text-black md:text-xl lg:text-2xl leading-relaxed px-2 ">
            <p className="mb-6">
              Our expertise spans across various industries, providing
              comprehensive solutions in labor and compliance, accounting and
              finance, human resources, and beyond. We understand that every
              business is different, and we pride ourselves on delivering
              customized services that drive real results.
            </p>
            <p>
              Our goal is to simplify complex processes, allowing you to focus
              on what matters most—growing your business, while we handle your
              paperwork. As your trusted advisor, committed to your success.
            </p>
          </div>
        </motion.div>
        {/* Decorative \\\ */}

        <div className="absolute bottom-10 right-[34%] z-20">
          <div className="flex gap-1">
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
        </div>

        {/* Page 2 Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-4 ml-4 sm:ml-6 md:ml-12 lg:ml-[12.5rem]"
        >
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
            Page 2
          </p>
        </motion.div>

        {/* Decorative Right Shapes */}
        <div className="absolute top-0 right-0 w-[30vw] sm:w-[22vw] md:w-[15vw] lg:w-[12vw] h-full pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden sm:block absolute top-10 -right-12 w-16 sm:w-20 md:w-24 h-full bg-blue-400 skew-y-10 rotate-6 shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 60, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="hidden sm:block absolute bottom-60 -right-17 w-16 sm:w-20 md:w-24 h-full bg-blue-400 -skew-y-5 rotate-7"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="hidden sm:block absolute bottom-29 right-9 w-8 sm:w-10 h-24 sm:h-32 bg-blue-950 -skew-y-5 rotate-6 shadow-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="hidden sm:block absolute bottom-0 right-10 w-16 sm:w-20 h-10 sm:h-10 lg:w-30 bg-blue-950 -skew-x-12 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
