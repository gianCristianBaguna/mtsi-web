"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PeaceSliderSection from "./peaceSlider";

export default function AboutPageSection() {
  const handleScrollToPeace = () => {
    const peaceSection = document.getElementById("peace-slider");
    if (peaceSection) {
      peaceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToStory = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/minimalist-office.webp"
            alt="About us hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
              About
              <span className="block text-white/80 mt-2">Us</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                Discover our mission, values, and the P.E.A.C.E. principles that
                drive our commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={handleScrollToPeace}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full 
                           hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 
                           border border-white/30"
              >
                Learn More
              </button>
              <button
                onClick={handleScrollToStory}
                className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* P.E.A.C.E. Section */}
      <section id="peace-slider">
        <PeaceSliderSection />
      </section>

      <section className="relative py-32 px-6 lg:px-20 bg-white" id="story">
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
              Built on strong principles that drive our commitment to excellence
            </p>
            <p className="text-black mt-20 ">
              Our expertise spans across various industries, providing
              comprehensive solutions in labor and compliance, accounting and
              finance, human resources, and beyond. We understand that every
              business is different, and we pride ourselves on delivering
              customized services that drive real results. Our goal is to
              simplify complex processes, allowing you to focus on what matters
              most— growing your business, while we handle your paperwork. As
              your trusted advisor, committed to your success.
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
                  Simplify your journey toward success with innovative solutions
                  that empower you to achieve goals with confidence.
                </p>

                <div className="flex items-center text-white/80 font-semibold">
                  <span>Empowering success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
