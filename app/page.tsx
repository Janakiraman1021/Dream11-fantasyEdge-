"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Spline from "@splinetool/react-spline" // <-- Correct import!
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Working from "@/components/working"
import Builder from "@/components/builder"
import UseCase from "@/components/use-case"
import WhyThis from "@/components/why-this"
import Contact from "@/components/contact"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      ref={containerRef}
      className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300"
    >
      {/* Animated Background */}
      <motion.div
        style={{
          background: `
          radial-gradient(circle at 20% 50%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(209, 213, 219, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(107, 114, 128, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)
        `,
          y: backgroundY,
        }}
        className=" inset-0 z-0 dark:bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(0,100,255,0.1)_0%,transparent_50%),linear-gradient(180deg,#000000_0%,#001122_100%)]"
      />

      <Navbar />

      {/* Hero Section with Spline */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Floating Cricket Elements */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-lg"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-lg"
          animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glassmorphism Card */}
        <div className="relative z-20 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-xl w-full mx-4 border border-gray-200 dark:border-gray-700">
          <div className="w-full flex justify-center mb-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 w-72 h-56 bg-gray-100 dark:bg-gray-900">
              <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-eFJnFboDFyduaIiAmiINGbFQ/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-2xl"
                title="3D Cricket Mascot"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg">
            Dream11 FantasyEdge
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Get AI-powered predictions and insights for your Dream11 fantasy cricket teams. Win smarter, play better!
          </p>
          <div className="flex gap-4 w-full justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Predictions
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-500 dark:text-yellow-400 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      <About />
      <Working />
      {/* <Builder /> */}
      <UseCase />
      <WhyThis />
      <Contact />
    </div>
  )
}
