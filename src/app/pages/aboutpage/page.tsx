// app/about/page.tsx
"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 to-blue-50 py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-800 mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-gray-700"
        >
          Learn more about our mission, our values, and the people behind our success.
        </motion.p>
      </section>
      {/* Optional: More sections can be added below */}
    </main>
  );
}
