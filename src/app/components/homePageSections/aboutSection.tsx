"use client";

import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="relative bg-blue-50 py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Who We Are
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          We are a passionate team dedicated to delivering smart, secure, and
          scalable solutions for businesses of all sizes. Guided by our
          P.E.A.C.E. values—Professionalism, Excellence, Accountability,
          Collaboration, and Empathy—we put your success at the center of
          everything we do.
        </motion.p>

        {/* Core values or stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { title: "10+ Years", desc: "of industry experience" },
            { title: "24/7 Support", desc: "dedicated to your needs" },
            { title: "100+ Clients", desc: "served worldwide" },
            { title: "One Mission", desc: "your peace of mind" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-2xl font-bold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
