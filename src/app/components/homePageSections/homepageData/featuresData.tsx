"use client";

import { motion } from "framer-motion";

export const features = [
  {
    title: "Tailored & Cost-Effective Solutions",
    description:
      "We craft personalized solutions tailored to unique client needs, ensuring scalability and value without compromising quality.",
    detailImage: "/tailored.webp",
    leftAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="80" cy="60" r="20" fill="#dbeafe" opacity="0.6" />
        <circle cx="220" cy="80" r="12" fill="#bfdbfe" opacity="0.8" />
        {/* Person with tools */}
        <g transform="translate(150, 180)">
          {/* Person body */}
          <circle cx="0" cy="-50" r="25" fill="#fdbcbc" />
          <path
            d="M-15,-70 Q0,-80 15,-70 Q10,-60 0,-60 Q-10,-60 -15,-70"
            fill="#2d3748"
          />
          <rect
            x="-20"
            y="-25"
            width="40"
            height="55"
            rx="8"
            fill="#3b82f6"
          />
          {/* Arms with tools */}
          <motion.g
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="-50"
              y="-20"
              width="30"
              height="8"
              rx="4"
              fill="#fdbcbc"
            />
            {/* Wrench in left hand */}
            <rect
              x="-65"
              y="-25"
              width="18"
              height="4"
              rx="2"
              fill="#6b7280"
            />
            <circle cx="-56" cy="-23" r="3" fill="#6b7280" />
          </motion.g>
          <motion.g
            animate={{
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="20"
              y="-20"
              width="30"
              height="8"
              rx="4"
              fill="#fdbcbc"
            />
            {/* Screwdriver in right hand */}
            <rect
              x="45"
              y="-23"
              width="15"
              height="3"
              rx="1"
              fill="#ef4444"
            />
            <rect x="60" y="-22" width="4" height="1" fill="#6b7280" />
          </motion.g>
          {/* Legs */}
          <rect x="-15" y="30" width="12" height="40" rx="6" fill="#1e40af" />
          <rect x="3" y="30" width="12" height="40" rx="6" fill="#1e40af" />
          {/* Toolbox */}
          <rect x="-35" y="60" width="25" height="15" rx="2" fill="#374151" />
          <rect x="-33" y="62" width="21" height="3" rx="1" fill="#6b7280" />
          <circle cx="-22" cy="67" r="1" fill="#9ca3af" />
        </g>
        {/* Floating gears */}
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle
            cx="60"
            cy="120"
            r="15"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          <path
            d="M60,105 L60,135 M45,120 L75,120"
            stroke="#3b82f6"
            strokeWidth="3"
          />
        </motion.g>
        <motion.g
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle
            cx="240"
            cy="140"
            r="10"
            fill="none"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <path
            d="M240,130 L240,150 M230,140 L250,140"
            stroke="#1e40af"
            strokeWidth="2"
          />
        </motion.g>
      </motion.svg>
    ),
    rightAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="70" cy="50" r="18" fill="#dbeafe" opacity="0.5" />
        <circle cx="230" cy="70" r="12" fill="#93c5fd" opacity="0.7" />
        {/* Blueprint/Design elements */}
        <g transform="translate(150, 150)">
          {/* Drawing board */}
          <rect
            x="-60"
            y="-40"
            width="120"
            height="80"
            rx="4"
            fill="#ffffff"
            stroke="#d1d5db"
            strokeWidth="2"
          />
          {/* Blueprint lines */}
          <motion.path
            d="M-40,-20 L40,-20 M-40,0 L40,0 M-40,20 L40,20"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Geometric shapes */}
          <motion.rect
            x="-30"
            y="-30"
            width="20"
            height="20"
            rx="2"
            fill="none"
            stroke="#1e40af"
            strokeWidth="2"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="20"
            cy="-10"
            r="12"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Ruler */}
          <rect x="-50" y="50" width="100" height="6" rx="3" fill="#f59e0b" />
          <path
            d="M-45,50 L-45,56 M-35,50 L-35,56 M-25,50 L-25,56 M-15,50 L-15,56 M-5,50 L-5,56 M5,50 L5,56 M15,50 L15,56 M25,50 L25,56 M35,50 L35,56 M45,50 L45,56"
            stroke="#d97706"
            strokeWidth="1"
          />
        </g>
        {/* Floating design elements */}
        <motion.circle
          cx="80"
          cy="100"
          r="4"
          fill="#3b82f6"
          animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="210"
          y="120"
          width="8"
          height="8"
          rx="2"
          fill="#1e40af"
          animate={{ rotate: [0, 45, 90, 135, 180] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    ),
    color: "blue",
    personSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-40 h-40"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#blueGradient)"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <g transform="translate(150, 150)">
          <circle cx="0" cy="-60" r="25" fill="#fdbcbc" />
          <path
            d="M-15,-75 Q0,-85 15,-75 Q10,-65 0,-65 Q-10,-65 -15,-75"
            fill="#4a5568"
          />
          <rect
            x="-20"
            y="-35"
            width="40"
            height="60"
            rx="8"
            fill="#3182ce"
          />
          <motion.g
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="-45"
              y="-25"
              width="25"
              height="8"
              rx="4"
              fill="#fdbcbc"
            />
            <rect
              x="20"
              y="-25"
              width="25"
              height="8"
              rx="4"
              fill="#fdbcbc"
            />
          </motion.g>
          <rect x="-15" y="25" width="12" height="35" rx="6" fill="#2d3748" />
          <rect x="3" y="25" width="12" height="35" rx="6" fill="#2d3748" />
        </g>
        <defs>
          <linearGradient
            id="blueGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
        </defs>
      </motion.svg>
    ),
  },
  {
    title: "Innovative e-Services Platform",
    description:
      "Our cutting-edge e-services streamline workflows and enhance user experiences through seamless digital interactions.",
    detailImage: "/innovative.jpg",
    leftAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="70" cy="60" r="18" fill="#d1fae5" opacity="0.6" />
        <circle cx="230" cy="80" r="12" fill="#a7f3d0" opacity="0.8" />
        {/* Server/Cloud infrastructure */}
        <g transform="translate(150, 120)">
          {/* Cloud */}
          <motion.path
            d="M-40,-20 Q-50,-30 -35,-35 Q-25,-40 -10,-35 Q5,-40 20,-35 Q35,-30 25,-20 Q35,-10 20,-15 Q5,-10 -10,-15 Q-25,-10 -35,-15 Q-50,-10 -40,-20 Z"
            fill="#10b981"
            opacity="0.3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Data streams */}
          <motion.path
            d="M-30,-5 Q-15,5 0,-5 Q15,5 30,-5"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            strokeDasharray="5,5"
          />
          <motion.path
            d="M-25,5 Q-10,15 5,5 Q20,15 35,5"
            stroke="#059669"
            strokeWidth="2"
            fill="none"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            strokeDasharray="3,3"
          />
        </g>
        {/* Digital devices */}
        <g transform="translate(80, 200)">
          {/* Smartphone */}
          <motion.rect
            x="0"
            y="0"
            width="20"
            height="35"
            rx="4"
            fill="#1f2937"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <rect x="2" y="3" width="16" height="25" rx="2" fill="#10b981" />
          <circle cx="10" cy="32" r="2" fill="#6b7280" />
        </g>
        <g transform="translate(200, 190)">
          {/* Tablet */}
          <motion.rect
            x="0"
            y="0"
            width="30"
            height="40"
            rx="3"
            fill="#1f2937"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <rect x="2" y="3" width="26" height="30" rx="2" fill="#10b981" />
          <circle cx="15" cy="37" r="2" fill="#6b7280" />
        </g>
        {/* Network connections */}
        <motion.path
          d="M100,220 Q150,180 200,210"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating data particles */}
        <motion.circle
          cx="60"
          cy="140"
          r="3"
          fill="#10b981"
          animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="240"
          cy="160"
          r="2"
          fill="#059669"
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    ),
    rightAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="80" cy="50" r="15" fill="#d1fae5" opacity="0.5" />
        <circle cx="220" cy="70" r="10" fill="#6ee7b7" opacity="0.7" />
        {/* Digital interface */}
        <g transform="translate(150, 150)">
          {/* Main screen */}
          <rect
            x="-50"
            y="-60"
            width="100"
            height="80"
            rx="8"
            fill="#ffffff"
            stroke="#d1d5db"
            strokeWidth="2"
          />
          {/* Interface elements */}
          <rect x="-40" y="-50" width="80" height="8" rx="4" fill="#10b981" />
          <rect x="-40" y="-35" width="60" height="4" rx="2" fill="#d1d5db" />
          <rect x="-40" y="-25" width="70" height="4" rx="2" fill="#d1d5db" />
          {/* Interactive buttons */}
          <motion.circle
            cx="-20"
            cy="0"
            r="8"
            fill="#10b981"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="8"
            fill="#059669"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="20"
            cy="0"
            r="8"
            fill="#047857"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          {/* Progress indicators */}
          <rect x="-40" y="25" width="80" height="6" rx="3" fill="#e5e7eb" />
          <motion.rect
            x="-40"
            y="25"
            width="0"
            height="6"
            rx="3"
            fill="#10b981"
            animate={{ width: [0, 60, 80] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
        {/* Workflow arrows */}
        <motion.path
          d="M50,100 Q100,80 150,100"
          stroke="#10b981"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          strokeDasharray="5,5"
        />
        <motion.path
          d="M150,200 Q200,180 250,200"
          stroke="#059669"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          strokeDasharray="5,5"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
        </defs>
      </motion.svg>
    ),
    color: "green",
    personSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-40 h-40"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#greenGradient)"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <g transform="translate(150, 150)">
          <circle cx="0" cy="-50" r="22" fill="#fdbcbc" />
          <path
            d="M-12,-65 Q0,-75 12,-65 Q8,-55 0,-55 Q-8,-55 -12,-65"
            fill="#2d3748"
          />
          <rect
            x="-18"
            y="-28"
            width="36"
            height="55"
            rx="8"
            fill="#059669"
          />
          <rect x="-12" y="27" width="10" height="30" rx="5" fill="#2d3748" />
          <rect x="2" y="27" width="10" height="30" rx="5" fill="#2d3748" />
        </g>
        <defs>
          <linearGradient
            id="greenGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
        </defs>
      </motion.svg>
    ),
  },
  {
    title: "Multi-Disciplinary Expertise",
    description:
      "MTSI delivers integrated solutions across industries, addressing diverse client needs with cohesive strategies.",
    detailImage: "/multidisciplinary.jpg",
    leftAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="70" cy="50" r="16" fill="#e9d5ff" opacity="0.6" />
        <circle cx="230" cy="70" r="12" fill="#ddd6fe" opacity="0.8" />
        {/* Team collaboration */}
        <g transform="translate(150, 180)">
          {/* Person 1 - Left */}
          <g transform="translate(-50, 0)">
            <circle cx="0" cy="-40" r="18" fill="#fdbcbc" />
            <path
              d="M-10,-53 Q0,-60 10,-53 Q6,-45 0,-45 Q-6,-45 -10,-53"
              fill="#4a5568"
            />
            <rect
              x="-15"
              y="-22"
              width="30"
              height="40"
              rx="6"
              fill="#8b5cf6"
            />
            <motion.rect
              x="-35"
              y="-17"
              width="20"
              height="5"
              rx="2"
              fill="#fdbcbc"
              animate={{ rotate: [0, 10, -5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-10"
              y="18"
              width="8"
              height="25"
              rx="4"
              fill="#2d3748"
            />
            <rect x="2" y="18" width="8" height="25" rx="4" fill="#2d3748" />
            {/* Document in hand */}
            <motion.rect
              x="-45"
              y="-20"
              width="12"
              height="16"
              rx="2"
              fill="#ffffff"
              stroke="#d1d5db"
              strokeWidth="1"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
          {/* Person 2 - Center */}
          <g transform="translate(0, -15)">
            <circle cx="0" cy="-40" r="20" fill="#f7b267" />
            <path
              d="M-12,-55 Q0,-65 12,-55 Q8,-45 0,-45 Q-8,-45 -12,-55"
              fill="#2d3748"
            />
            <rect
              x="-16"
              y="-20"
              width="32"
              height="45"
              rx="6"
              fill="#7c3aed"
            />
            <motion.rect
              x="-38"
              y="-15"
              width="22"
              height="5"
              rx="2"
              fill="#f7b267"
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.rect
              x="16"
              y="-15"
              width="22"
              height="5"
              rx="2"
              fill="#f7b267"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-12"
              y="25"
              width="10"
              height="28"
              rx="5"
              fill="#2d3748"
            />
            <rect x="2" y="25" width="10" height="28" rx="5" fill="#2d3748" />
          </g>
          {/* Person 3 - Right */}
          <g transform="translate(50, 0)">
            <circle cx="0" cy="-40" r="18" fill="#d69e2e" />
            <path
              d="M-10,-53 Q0,-60 10,-53 Q6,-45 0,-45 Q-6,-45 -10,-53"
              fill="#4a5568"
            />
            <rect
              x="-15"
              y="-22"
              width="30"
              height="40"
              rx="6"
              fill="#8b5cf6"
            />
            <motion.rect
              x="15"
              y="-17"
              width="20"
              height="5"
              rx="2"
              fill="#d69e2e"
              animate={{ rotate: [0, -10, 5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-10"
              y="18"
              width="8"
              height="25"
              rx="4"
              fill="#2d3748"
            />
            <rect x="2" y="18" width="8" height="25" rx="4" fill="#2d3748" />
            {/* Laptop */}
            <motion.rect
              x="20"
              y="-15"
              width="18"
              height="12"
              rx="2"
              fill="#1f2937"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="22"
              y="-13"
              width="14"
              height="8"
              rx="1"
              fill="#8b5cf6"
            />
          </g>
        </g>
        {/* Collaboration symbols */}
        <motion.g
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Connection lines */}
          <path
            d="M100,140 Q150,120 200,140"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M120,160 Q150,150 180,160"
            stroke="#7c3aed"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
          />
          {/* Ideas lightbulb */}
          <circle cx="150" cy="100" r="10" fill="#fbbf24" opacity="0.8" />
          <path d="M150,90 L147,83 L153,83 Z" fill="#f59e0b" />
        </motion.g>
        {/* Expertise domains */}
        <motion.circle
          cx="60"
          cy="120"
          r="6"
          fill="#8b5cf6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="240"
          cy="140"
          r="5"
          fill="#7c3aed"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    ),
    rightAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="80" cy="60" r="14" fill="#e9d5ff" opacity="0.5" />
        <circle cx="220" cy="80" r="10" fill="#c4b5fd" opacity="0.7" />
        {/* Industry sectors */}
        <g transform="translate(150, 150)">
          {/* Central hub */}
          <motion.circle
            cx="0"
            cy="0"
            r="25"
            fill="#8b5cf6"
            opacity="0.8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="0" cy="0" r="15" fill="#ffffff" />
          <circle cx="0" cy="0" r="8" fill="#7c3aed" />
          {/* Sector 1 - Tech */}
          <g transform="translate(-60, -60)">
            <motion.circle
              cx="0"
              cy="0"
              r="18"
              fill="#ddd6fe"
              opacity="0.7"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-8"
              y="-8"
              width="16"
              height="16"
              rx="2"
              fill="#8b5cf6"
            />
            <rect x="-6" y="-6" width="12" height="8" rx="1" fill="#ffffff" />
          </g>
          {/* Sector 2 - Finance */}
          <g transform="translate(60, -60)">
            <motion.circle
              cx="0"
              cy="0"
              r="18"
              fill="#ddd6fe"
              opacity="0.7"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-6"
              y="-10"
              width="12"
              height="20"
              rx="2"
              fill="#7c3aed"
            />
            <circle cx="0" cy="-5" r="3" fill="#ffffff" />
            <path d="M0,-8 L0,-2" stroke="#7c3aed" strokeWidth="2" />
          </g>
          {/* Sector 3 - Healthcare */}
          <g transform="translate(-60, 60)">
            <motion.circle
              cx="0"
              cy="0"
              r="18"
              fill="#ddd6fe"
              opacity="0.7"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <path
              d="M0,-8 L0,8 M-8,0 L8,0"
              stroke="#8b5cf6"
              strokeWidth="4"
            />
          </g>
          {/* Sector 4 - Education */}
          <g transform="translate(60, 60)">
            <motion.circle
              cx="0"
              cy="0"
              r="18"
              fill="#ddd6fe"
              opacity="0.7"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <rect
              x="-8"
              y="-6"
              width="16"
              height="12"
              rx="2"
              fill="#7c3aed"
            />
            <rect x="-6" y="-4" width="12" height="2" rx="1" fill="#ffffff" />
            <rect x="-6" y="0" width="12" height="2" rx="1" fill="#ffffff" />
          </g>
          {/* Connection lines */}
          <motion.path
            d="M-35,-35 L-15,-15"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M35,-35 L15,-15"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M-35,35 L-15,15"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M35,35 L15,15"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </motion.svg>
    ),
    color: "purple",
    personSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-40 h-40"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#purpleGradient)"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <g transform="translate(150, 150)">
          <g transform="translate(-40, 0)">
            <circle cx="0" cy="-45" r="18" fill="#fdbcbc" />
            <path
              d="M-10,-58 Q0,-65 10,-58 Q6,-50 0,-50 Q-6,-50 -10,-58"
              fill="#4a5568"
            />
            <rect
              x="-15"
              y="-27"
              width="30"
              height="45"
              rx="6"
              fill="#7c3aed"
            />
            <rect
              x="-10"
              y="18"
              width="8"
              height="25"
              rx="4"
              fill="#2d3748"
            />
            <rect x="2" y="18" width="8" height="25" rx="4" fill="#2d3748" />
          </g>
          <g transform="translate(0, -10)">
            <circle cx="0" cy="-45" r="20" fill="#f7b267" />
            <path
              d="M-12,-60 Q0,-70 12,-60 Q8,-50 0,-50 Q-8,-50 -12,-60"
              fill="#2d3748"
            />
            <rect
              x="-16"
              y="-25"
              width="32"
              height="48"
              rx="6"
              fill="#7c3aed"
            />
            <rect
              x="-12"
              y="23"
              width="10"
              height="28"
              rx="5"
              fill="#2d3748"
            />
            <rect x="2" y="23" width="10" height="28" rx="5" fill="#2d3748" />
          </g>
          <g transform="translate(40, 0)">
            <circle cx="0" cy="-45" r="18" fill="#d69e2e" />
            <path
              d="M-10,-58 Q0,-65 10,-58 Q6,-50 0,-50 Q-6,-50 -10,-58"
              fill="#4a5568"
            />
            <rect
              x="-15"
              y="-27"
              width="30"
              height="45"
              rx="6"
              fill="#7c3aed"
            />
            <rect
              x="-10"
              y="18"
              width="8"
              height="25"
              rx="4"
              fill="#2d3748"
            />
            <rect x="2" y="18" width="8" height="25" rx="4" fill="#2d3748" />
          </g>
        </g>
        <defs>
          <linearGradient
            id="purpleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
      </motion.svg>
    ),
  },
  {
    title: "Client-Centric Approach",
    description:
      "With a strong emphasis on collaboration and empathy, we deliver meaningful outcomes that truly resonate with clients.",
    detailImage: "/client-centric.webp",
    leftAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="70" cy="50" r="18" fill="#fce7f3" opacity="0.6" />
        <circle cx="230" cy="70" r="12" fill="#fbcfe8" opacity="0.8" />
        {/* Client support scene */}
        <g transform="translate(150, 180)">
          {/* Support person */}
          <circle cx="0" cy="-50" r="24" fill="#fdbcbc" />
          <path
            d="M-14,-67 Q0,-77 14,-67 Q10,-55 0,-55 Q-10,-55 -14,-67"
            fill="#4a5568"
          />
          <rect
            x="-20"
            y="-26"
            width="40"
            height="55"
            rx="8"
            fill="#e11d48"
          />
          {/* Arms in helping gesture */}
          <motion.g
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="-45"
              y="-20"
              width="25"
              height="7"
              rx="3"
              fill="#fdbcbc"
            />
            <rect
              x="20"
              y="-20"
              width="25"
              height="7"
              rx="3"
              fill="#fdbcbc"
            />
          </motion.g>
          {/* Legs */}
          <rect x="-15" y="29" width="12" height="32" rx="6" fill="#2d3748" />
          <rect x="3" y="29" width="12" height="32" rx="6" fill="#2d3748" />
          {/* Headset */}
          <rect x="-25" y="-55" width="50" height="4" rx="2" fill="#374151" />
          <circle cx="-20" cy="-53" r="6" fill="#4b5563" />
          <circle cx="20" cy="-53" r="6" fill="#4b5563" />
          <rect x="-30" y="-50" width="8" height="3" rx="1" fill="#6b7280" />
        </g>
        {/* Client representation */}
        <g transform="translate(80, 120)">
          <motion.circle
            cx="0"
            cy="0"
            r="20"
            fill="#f3e8ff"
            opacity="0.8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="0" cy="-5" r="12" fill="#fdbcbc" />
          <path
            d="M-8,-15 Q0,-20 8,-15 Q5,-8 0,-8 Q-5,-8 -8,-15"
            fill="#2d3748"
          />
          <rect x="-10" y="7" width="20" height="25" rx="4" fill="#6366f1" />
        </g>
        {/* Heart symbols floating around */}
        <motion.g
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M220,120 C215,115 205,115 205,125 C205,135 220,145 220,145 C220,145 235,135 235,125 C235,115 225,115 220,120 Z"
            fill="#e11d48"
          />
          <path
            d="M60,160 C57,157 51,157 51,163 C51,169 60,175 60,175 C60,175 69,169 69,163 C69,157 63,157 60,160 Z"
            fill="#f43f5e"
          />
        </motion.g>
        {/* Communication lines */}
        <motion.path
          d="M100,130 Q125,110 150,130"
          stroke="#e11d48"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Support symbols */}
        <motion.circle
          cx="200"
          cy="100"
          r="4"
          fill="#e11d48"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="80"
          r="3"
          fill="#f43f5e"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    ),
    rightAbstractSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-48 h-48"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background elements */}
        <circle cx="80" cy="50" r="16" fill="#fce7f3" opacity="0.5" />
        <circle cx="220" cy="70" r="10" fill="#f9a8d4" opacity="0.7" />
        {/* Satisfaction metrics */}
        <g transform="translate(150, 150)">
          {/* Central satisfaction meter */}
          <motion.circle
            cx="0"
            cy="0"
            r="30"
            fill="#fce7f3"
            opacity="0.8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <circle cx="0" cy="0" r="20" fill="#ffffff" />
          {/* Satisfaction face */}
          <circle cx="-6" cy="-5" r="2" fill="#e11d48" />
          <circle cx="6" cy="-5" r="2" fill="#e11d48" />
          <motion.path
            d="M-8,5 Q0,12 8,5"
            stroke="#e11d48"
            strokeWidth="2"
            fill="none"
            animate={{
              d: ["M-8,5 Q0,12 8,5", "M-8,8 Q0,15 8,8", "M-8,5 Q0,12 8,5"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rating stars */}
          <g transform="translate(0, -50)">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${-20 + i * 10},0 L${-18 + i * 10},-6 L${
                  -16 + i * 10
                },0 L${-14 + i * 10},-4 L${-12 + i * 10},0 Z`}
                fill="#fbbf24"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </g>
          {/* Feedback bubbles */}
          <g transform="translate(-60, -30)">
            <motion.ellipse
              cx="0"
              cy="0"
              rx="25"
              ry="15"
              fill="#ffffff"
              stroke="#e11d48"
              strokeWidth="2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <path
              d="M-15,10 L-10,20 L-5,10"
              fill="#ffffff"
              stroke="#e11d48"
              strokeWidth="2"
            />
            <circle cx="-8" cy="-3" r="2" fill="#e11d48" />
            <circle cx="0" cy="-3" r="2" fill="#e11d48" />
            <circle cx="8" cy="-3" r="2" fill="#e11d48" />
          </g>
          <g transform="translate(60, 30)">
            <motion.ellipse
              cx="0"
              cy="0"
              rx="20"
              ry="12"
              fill="#ffffff"
              stroke="#f43f5e"
              strokeWidth="2"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <path
              d="M10,-8 L20,-3 L10,2"
              fill="#ffffff"
              stroke="#f43f5e"
              strokeWidth="2"
            />
            <path
              d="M-10,-2 Q0,3 10,-2"
              stroke="#f43f5e"
              strokeWidth="2"
              fill="none"
            />
          </g>
        </g>
        {/* Success indicators */}
        <motion.path
          d="M50,100 L60,110 L80,90"
          stroke="#10b981"
          strokeWidth="4"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M220,180 L230,190 L250,170"
          stroke="#10b981"
          strokeWidth="4"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating positive elements */}
        <motion.circle
          cx="70"
          cy="200"
          r="5"
          fill="#10b981"
          animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="230"
          cy="120"
          r="4"
          fill="#f43f5e"
          animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    ),
    color: "pink",
    personSvg: (
      <motion.svg
        viewBox="0 0 300 300"
        className="w-40 h-40"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#roseGradient)"
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <g transform="translate(150, 150)">
          <circle cx="0" cy="-55" r="24" fill="#fdbcbc" />
          <path
            d="M-14,-72 Q0,-82 14,-72 Q10,-60 0,-60 Q-10,-60 -14,-72"
            fill="#4a5568"
          />
          <rect
            x="-20"
            y="-31"
            width="40"
            height="58"
            rx="8"
            fill="#e11d48"
          />
          <rect x="-15" y="27" width="12" height="32" rx="6" fill="#2d3748" />
          <rect x="3" y="27" width="12" height="32" rx="6" fill="#2d3748" />
        </g>
        <defs>
          <linearGradient
            id="roseGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
        </defs>
      </motion.svg>
    ),
  },
];
