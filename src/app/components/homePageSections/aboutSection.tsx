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
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black mt-30">
                Our Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-black">
                Built on strong principles that drive our commitment to
                excellence
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 text-gray-700">
                Our mission is to foster innovation, integrity, and
                collaboration, ensuring that every step we take creates lasting
                value for our community and partners.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 text-gray-700">
                We believe in putting people first—whether it’s our clients, our
                team, or the communities we serve. By staying true to our
                values, we build trust and cultivate meaningful relationships.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 text-gray-700">
                Looking ahead, we remain dedicated to continuous improvement,
                embracing change, and leading with purpose so we can create
                impact that lasts for generations.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
