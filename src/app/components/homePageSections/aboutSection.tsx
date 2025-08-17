"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  const peaceValues = [
    {
      letter: "P",
      title: "Professional",
      subtitle: "Excellence",
      description: "Delivering services with the highest standards and ethics.",
    },
    {
      letter: "E",
      title: "Efficiency and",
      subtitle: "Effectiveness",
      description: "Maximizing output with minimal wasted effort and time.",
    },
    {
      letter: "A",
      title: "Accountability",
      subtitle: "",
      description: "Taking ownership and responsibility for our actions.",
    },
    {
      letter: "C",
      title: "Convenience",
      subtitle: "",
      description: "Making things easier and more accessible for our clients.",
    },
    {
      letter: "E",
      title: "e-Solutions",
      subtitle: "",
      description: "Leveraging technology to solve complex challenges.",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 lg:px-16 min-h-screen"
      style={{
        backgroundImage: `url('/coolbackgrounds-particles-ether.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20 -mt-30">
          {peaceValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative group"
            >
              {/* Ultra-modern peace icon container */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-xl" />
                </div>

                {/* Pulsing glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 animate-pulse" />

                {/* Main letter container */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Letter */}
                  <span className="relative text-2xl font-black bg-gradient-to-br from-slate-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {value.letter}
                  </span>
                </div>

                {/* Corner accent lights */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-500/50" />
              </div>

              {/* Title */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1">
                  {value.title}
                </h3>
                {value.subtitle && (
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">
                    {value.subtitle}
                  </h4>
                )}
              </div>

              {/* Hover Description */}
              <div className="absolute inset-x-0 top-full translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 text-xs text-slate-700 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl p-3 mx-2 border border-cyan-200/50 z-20">
                {value.description}
              </div>
            </motion.div>
          ))}
        </div>

        <section className="relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black">
                Our Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-black">
                Built on strong principles that drive our commitment to
                excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden h-[500px] group"
              >
                <Image
                  src="/futuristic-vision-concept.png"
                  alt="Vision"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Vision</h3>
                  </div>

                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    To be your most trusted advisor in business
                    transformation—empowering through innovation and peace of
                    mind.
                  </p>

                  <div className="flex items-center text-white/80 font-semibold">
                    <span>Leading the future</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden h-[500px] group"
              >
                <Image
                  src="/mission-success-team.png"
                  alt="Mission"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Mission</h3>
                  </div>

                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    Simplify your journey toward success with innovative
                    solutions that empower you to achieve goals with confidence.
                  </p>

                  <div className="flex items-center text-white/80 font-semibold">
                    <span>Empowering success</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
