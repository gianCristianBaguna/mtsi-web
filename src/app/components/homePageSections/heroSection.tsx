"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-white"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none -ml-20">
        <div className="absolute top-0 left-0 w-[49.5%] h-16 bg-blue-600 -skew-x-12 z-10 -mr-20" />
        <div className="absolute top-0 left-0 w-[49.5%] h-11 bg-blue-700 -skew-x-12 z-10 -mr-20" />
        <div className="absolute top-0 left-1/2 w-1/6 h-16 bg-black -skew-x-12 z-10 shadow-2xl" />
        <div className="absolute top-0 left-[46%] w-14 h-16 bg-blue-700 -skew-x-12 z-10" />
      </div>

      {/* === Desktop View === */}
      <div className="hidden sm:block relative z-10">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-28 z-20 flex items-center space-x-4 right-[15%]"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-blue-600 diagonal-bar" />
            ))}
          </div>
          <p className="text-blue-600 font-semibold text-xl italic">
            Your Smart Solutions Provider
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8 py-32 flex items-center min-h-screen"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Side */}
            <div className="space-y-12 -ml-30 -mt-1">
              <h1 className="text-6xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-black">MT SOLUTIONS</span>
                <br />
                <span className="text-blue-600">INCORPORATED</span>
              </h1>

              <div className="relative bg-blue-700 text-white px-6 py-8 sm:px-10 sm:py-12 rounded-lg shadow-2xl transform -skew-x-6 w-4xl -ml-20 z-30">
                <div className="transform skew-x-6 text-center">
                  <p className="text-3xl sm:text-4xl font-medium italic">
                    Discover our smart solutions and future vision through P.E.A.C.E.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-600 max-w-lg w-full mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Contact Us:</p>
                    <p className="text-blue-600 font-semibold text-lg">
                      <a
                        href="https://wisdomoustech.com"
                        className="transition-all duration-300 ease-in-out hover:text-blue-800 hover:underline"
                      >
                        info@themtsolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 ml-[20%]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-blue-600 diagonal-bar" />
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-[120%] mx-auto mt-10 lg:mt-0 z-1"
            >
              <div className="rounded-lg shadow-2xl overflow-hidden transform rotate-2 transition-transform duration-500">
                <Image
                  src="/img2.jpg"
                  alt="Business team meeting"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* === Mobile View === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="block sm:hidden relative z-10 px-4 py-8 space-y-8"
      >
        <div className="absolute items-center justify-between -top-2 right-0">
          <div className="flex items-center space-x-2">
            <div>
              <div className="text-xs font-extrabold text-gray-900 italic">MT SOLUTIONS</div>
              <div className="text-xs text-gray-700 italic">Incorporated</div>
            </div>
            <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rotate-45">
              <div className="text-white font-bold text-sm -rotate-45">M</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight">
          <span className="text-black">Company</span>
          <br />
          <span className="text-blue-600">Profile</span>
        </h1>

        <p className="text-blue-600 font-semibold text-lg italic">
          Your Smart Solutions Provider
        </p>

        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg transform -skew-x-6">
          <div className="transform skew-x-6 text-center text-lg italic">
            Discover our smart solutions and future vision through P.E.A.C.E.
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900">Contact Us:</p>
            <p className="text-blue-600 font-semibold">
              <a
                href="https://wisdomoustech.com"
                className="transition-all duration-300 ease-in-out hover:text-blue-800 hover:underline"
              >
                info@themtsolutions.com
              </a>
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/img2.jpg"
            alt="Business meeting"
            width={600}
            height={350}
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
