"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PeaceSliderSection from "./peaceSlider"

export default function AboutPageSection() {
  const handleScrollToPeace = () => {
    const peaceSection = document.getElementById("peace-slider")
    if (peaceSection) {
      peaceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToStory = () => {
    const storySection = document.getElementById("story")
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/minimalist-office.webp" alt="About us hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
              About
              <span className="block text-white/80 mt-1 sm:mt-2">Us</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
                Discover our mission, values, and the P.E.A.C.E. principles that drive our commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8">
              <button
                onClick={handleScrollToPeace}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full 
                           hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 
                           border border-white/30"
              >
                Learn More
              </button>
              <button
                onClick={handleScrollToStory}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white" id="story">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-slate-900">
              Who We Are
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">MT Solutions Incorporated</h3>
                    <p className="text-slate-600 font-medium">Your Dedicated Partners in Excellence</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  At MT Solutions Incorporated [MTSI], we are more than just a consulting firm; we are your dedicated
                  partners in achieving excellence. With a commitment to helping individuals and organizations navigate
                  their most pressing challenges, we offer strategic insights, innovative solutions, and practical
                  guidance tailored to your unique needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">Our Promise</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We promise convenience and security in all your dealings for your peace of mind. Our goal is to
                  simplify complex processes, allowing you to focus on what matters most—growing your business, while we
                  handle your paperwork.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
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
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Our Expertise</h4>
                </div>

                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    Our expertise spans across various industries, providing comprehensive solutions in:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Labor & Compliance", "Accounting & Finance", "Human Resources", "Strategic Consulting"].map(
                      (service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-slate-700 font-medium">{service}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold">Your Trusted Advisor</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We understand that every business is different, and we pride ourselves on delivering customized
                  services that drive real results. As your trusted advisor, we're committed to your success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* P.E.A.C.E. Section */}
      <section id="peace-slider">
        <PeaceSliderSection />
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-white" id="story">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-black">
              Our Foundation
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-black mb-8 sm:mb-12">
              Built on strong principles that drive our commitment to excellence
            </p>
            <p className="text-base sm:text-lg text-black max-w-4xl mx-auto leading-relaxed">
              Our expertise spans across various industries, providing comprehensive solutions in labor and compliance,
              accounting and finance, human resources, and beyond. We understand that every business is different, and
              we pride ourselves on delivering customized services that drive real results. Our goal is to simplify
              complex processes, allowing you to focus on what matters most— growing your business, while we handle your
              paperwork. As your trusted advisor, committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[500px] group"
            >
              <Image
                src="/futuristic-vision-concept.png"
                alt="Vision"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Vision</h3>
                </div>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4">
                  To be your most trusted advisor in business transformation—empowering through innovation and peace of
                  mind.
                </p>

                <div className="flex items-center text-white/80 font-semibold text-sm sm:text-base">
                  <span>Leading the future</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[500px] group"
            >
              <Image
                src="/mission-success-team.png"
                alt="Mission"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Mission</h3>
                </div>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4">
                  Simplify your journey toward success with innovative solutions that empower you to achieve goals with
                  confidence.
                </p>

                <div className="flex items-center text-white/80 font-semibold text-sm sm:text-base">
                  <span>Empowering success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
