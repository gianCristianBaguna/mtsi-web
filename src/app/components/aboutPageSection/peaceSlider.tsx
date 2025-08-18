"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const peaceValues = [
  {
    letter: "P",
    title: "Professional",
    tagline: "We lead with integrity.",
    description: "We maintain the highest standards of conduct, ethics, and responsibility in everything we do.",
    quote: "Professionalism earns trust.",
    image: "/business-team-modern-office.jpeg",
    bgColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    letter: "E",
    title: "Efficiency & Effectiveness",
    tagline: "Smart effort, maximum results.",
    description: "We deliver more by working smarter. Every action is focused on productivity and sustainable growth.",
    quote: "Efficiency is doing things right.",
    image: "/streamlined-workflow-visualization.png",
    bgColor: "from-emerald-500/20 to-green-500/20",
  },
  {
    letter: "A",
    title: "Accountability",
    tagline: "We own what we deliver.",
    description: "We take full responsibility for our actions. Integrity is not optional—it's our culture.",
    quote: "Accountability builds reliability.",
    image: "/handshake-trust-architecture.png",
    bgColor: "from-orange-500/20 to-amber-500/20",
  },
  {
    letter: "C",
    title: "Convenience",
    tagline: "Simplifying every step.",
    description: "We create smooth, user-friendly solutions that save time and reduce complexity.",
    quote: "Convenience empowers confidence.",
    image: "/elegant-mobile-app-interface.jpg",
    bgColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    letter: "E",
    title: "e-Solutions",
    tagline: "Technology with purpose.",
    description: "We harness digital tools to solve complex problems with scalable, intelligent solutions.",
    quote: "Innovation meets execution.",
    image: "/futuristic-ai-dashboard.avif",
    bgColor: "from-indigo-500/20 to-blue-500/20",
  },
]

export default function PeaceGridSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const current = peaceValues[selectedIndex]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${selectedIndex}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={current.image || "/placeholder.svg"} alt={current.title} fill className="object-cover" priority />
          <div className={`absolute inset-0 bg-gradient-to-br ${current.bgColor} backdrop-blur-[1px]`} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Selected Value Display */}
          <div className="text-center mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                  <span className="text-4xl font-black text-white">{current.letter}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{current.title}</h3>
                  <p className="text-xl text-white/90 font-medium">{current.tagline}</p>
                </div>

                <div className="max-w-xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <blockquote className="text-lg text-white/95 italic font-medium">"{current.quote}"</blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PEACE Grid */}
          <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
            {peaceValues.map((value, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-white/20 backdrop-blur-md border-2 border-white/40 scale-105"
                    : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:scale-102"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Letter */}
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === selectedIndex ? "bg-white/20 shadow-lg" : "bg-white/10 group-hover:bg-white/15"
                    }`}
                  >
                    <span className="text-2xl font-black text-white">{value.letter}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center">
                  <h4
                    className={`text-sm font-bold text-white mb-1 transition-all duration-300 ${
                      index === selectedIndex ? "text-white" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`text-xs transition-all duration-300 ${
                      index === selectedIndex ? "text-white/90" : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {value.tagline}
                  </p>
                </div>

                {/* Active Indicator */}
                {index === selectedIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-2xl border-2 border-white/60 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Description */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
