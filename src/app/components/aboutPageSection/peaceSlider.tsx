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

export default function PeaceSliderSection() {
  const [index, setIndex] = useState(0)
  const current = peaceValues[index]

  const handleNext = () => setIndex((index + 1) % peaceValues.length)
  const handlePrev = () => setIndex((index - 1 + peaceValues.length) % peaceValues.length)

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={current.image || "/placeholder.svg"} alt={current.title} fill className="object-cover" priority />
          <div className={`absolute inset-0 bg-gradient-to-br ${current.bgColor} backdrop-blur-[1px]`} />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                  <span className="text-6xl font-black text-white">{current.letter}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">{current.title}</h3>
                <p className="text-2xl text-white/90 font-medium">{current.tagline}</p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <blockquote className="text-xl text-white/95 italic font-medium">"{current.quote}"</blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/30"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress indicators */}
            <div className="flex gap-3">
              {peaceValues.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-white w-12" : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/30"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
