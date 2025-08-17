"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Consultancy Solutions",
    subtitle: "Strategic guidance",
    description:
      "Tailored consultancy solutions to empower businesses and individuals in navigating complex challenges.",
    bgImage: "/modern-office-meeting.jpg",
    textColor: "text-white",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    size: "large",
  },
  {
    title: "Property Solutions",
    subtitle: "Estate & land services",
    description:
      "Estate Planning, Settlement, Land Titling and Registration for efficient property documentation.",
    bgImage: "/luxury-modern-estate.jpg",
    textColor: "text-white",
    buttonStyle: "bg-emerald-600 hover:bg-emerald-700 text-white",
    size: "medium",
  },
  {
    title: "Business Solutions",
    subtitle: "Operations & compliance",
    description:
      "Streamline operations with registration, consulting, PHILGEPS registration, and outsourcing solutions.",
    bgImage: "/corporate-office-workflow.jpg",
    textColor: "text-white",
    buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
    size: "medium",
  },
  {
    title: "Government Solutions",
    subtitle: "Regulatory compliance",
    description:
      "Simplify regulatory processes and ensure compliance with expert government-related assistance.",
    bgImage: "/government-solutions.webp",
    textColor: "text-white",
    buttonStyle: "bg-orange-600 hover:bg-orange-700 text-white",
    size: "large",
  },
  {
    title: "Legal Solutions",
    subtitle: "Expert legal support",
    description:
      "Navigate legal complexities with regulatory compliance, labor law advisory, and contract drafting.",
    bgImage: "/law-library-justice.jpg",
    textColor: "text-white",
    buttonStyle: "bg-slate-600 hover:bg-slate-700 text-white",
    size: "medium",
  },
  {
    title: "Accounting Solutions",
    subtitle: "Financial accuracy",
    description:
      "Ensure financial efficiency with bookkeeping, tax compliance, financial planning, and auditing.",
    bgImage: "/modern-accounting-office.webp",
    textColor: "text-white",
    buttonStyle: "bg-teal-600 hover:bg-teal-700 text-white",
    size: "xlarge",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-4 bg-white z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -mt-60 left-1/2 transform -translate-x-1/2 text-center "
        >
          <h2 className="text-5xl md:text-8xl font-bold text-black mb-4">
            Our <span className="text-blue-500">Services</span> 
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            At MT Solutions Incorporated (MTSI), we deliver comprehensive,
            multi-disciplinary solutions that address diverse client needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-60">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                    relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    ${
                      service.size === "large"
                        ? "md:col-span-2 lg:col-span-2"
                        : ""
                    }
                    ${
                      service.size === "xlarge"
                        ? "md:col-span-2 lg:col-span-3"
                        : ""
                    } 
                    ${index === 0 ? "lg:row-span-2" : ""}
                `}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 h-full flex flex-col justify-between p-8 min-h-[300px]">
                <div>
                  <h3
                    className={`text-3xl md:text-4xl font-bold mb-2 ${service.textColor}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg font-medium mb-4 ${service.textColor} opacity-90`}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className={`text-base leading-relaxed mb-6 ${service.textColor} opacity-80`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with our comprehensive solutions?
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3 text-lg font-medium">
            <a href="#">Get Started Today</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
