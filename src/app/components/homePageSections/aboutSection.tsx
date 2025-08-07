"use client";

import { motion } from "framer-motion";

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
        {/* P.E.A.C.E. Values Grid - Matching exact layout from image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 -mt-40">
          {peaceValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white rounded-3xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
            >
              {/* Enhanced Letter Circle */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-4 ring-white/30 relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-lg z-0 animate-pulse" />

                {/* Letter */}
                <span className="text-3xl font-extrabold text-white z-10 drop-shadow-md">
                  {value.letter}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                {value.title}
              </h3>
              {value.subtitle && (
                <h4 className="text-sm font-semibold text-gray-800 leading-tight">
                  {value.subtitle}
                </h4>
              )}

              {/* Hover Description */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-black bg-white rounded-xl shadow-md p-3 mx-4 mt-2 border border-blue-100 z-20">
                {value.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision and Mission Section - Large rounded container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 text-base lg:text-lg">
                MTSI as your trusted advisor.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                As your trusted advisor, we aim to simplify your journey toward
                success by providing innovative and reliable solutions that
                cater to your needs. We empower you to achieve your objectives
                confidently while enjoying peace of mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Us button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mt-20 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-600 hover:border-blue-700">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
