"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const peaceData = [
  {
    letter: "P",
    title: "Professionalism",
    description:
      "We maintain the highest standards of professional conduct in every interaction, ensuring excellence and integrity in all our services.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    letter: "E",
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, continuously improving our processes and delivering exceptional results that exceed expectations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
  },
  {
    letter: "A",
    title: "Accountability",
    description:
      "We take full responsibility for our commitments and actions, ensuring transparency and reliability in every project we undertake.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    color: "from-green-500 to-green-600",
  },
  {
    letter: "C",
    title: "Commitment",
    description:
      "We are dedicated to your success and committed to delivering on our promises with unwavering focus and determination.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    color: "from-red-500 to-red-600",
  },
  {
    letter: "E",
    title: "Empowerment",
    description:
      "We empower our clients with knowledge, tools, and strategies that enable them to make informed decisions and achieve sustainable growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    color: "from-orange-500 to-orange-600",
  },
]

export default function PeaceSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/modern-office-building.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white">
            Our P.E.A.C.E. Principles
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            The foundation of our commitment to excellence and your success
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6 sm:mt-8"></div>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {peaceData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                    activeIndex === index
                      ? `bg-gradient-to-br ${item.color} text-white shadow-2xl scale-110`
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
                  }`}
                >
                  {item.letter}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-cover bg-center rounded-3xl p-8 lg:p-12 border border-white/20 overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder-al49t.png')`,
            }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${peaceData[activeIndex].color} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
              >
                {peaceData[activeIndex].icon}
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{peaceData[activeIndex].title}</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${peaceData[activeIndex].color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {peaceData[activeIndex].letter}
                  </div>
                  <span className="text-slate-300 font-medium">Core Principle</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-200 leading-relaxed">{peaceData[activeIndex].description}</p>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {peaceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-cover bg-center rounded-2xl p-6 sm:p-8 border border-white/20 overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder-habdv.png')`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {item.letter}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div
            className="relative bg-cover bg-center backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/placeholder-qf3wg.png')`,
            }}
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Experience P.E.A.C.E. in Action</h4>
            <p className="text-slate-300 mb-6">
              Let us show you how our principles translate into exceptional results for your business.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
