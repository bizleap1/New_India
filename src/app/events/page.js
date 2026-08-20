"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaChevronRight, FaLaptopHouse } from "react-icons/fa";
import Link from "next/link";

export default function EventPage() {
  return (
    <div className="bg-black text-neutral-100 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 overflow-hidden pt-16">

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/canton-fair-bg.jpg')` }}
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-4 lg:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                FREE ONLINE WORKSHOP
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] mb-4 tracking-tight font-bold text-white">
              Canton Fair 2026<br />
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Free Online Workshop
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-emerald-400 mb-6 lg:mb-8 font-light">
              Your Gateway to Global Sourcing Opportunities
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 lg:mb-10 max-w-2xl font-light leading-relaxed">
              Planning to attend the 140th Canton Fair in China? Join our free online workshop to understand sourcing opportunities, delegation planning, industries covered, travel arrangements and the complete Canton Fair experience.
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-neutral-300 mb-8 lg:mb-12">
              {[
                { icon: <FaCalendarAlt />, label: "Sunday, 23 August 2026", sub: "Online Date" },
                { icon: <FaClock />, label: "11:00 AM – 12:30 PM", sub: "Session Time" },
                { icon: <FaLaptopHouse />, label: "Online Workshop", sub: "Free Entry" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="text-emerald-400 text-sm lg:text-base">{item.icon}</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm lg:text-base text-white">{item.label}</div>
                    <div className="text-xs lg:text-sm text-neutral-500">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Link
                href="/events/ai-driven-export-strategies"
                className="group px-6 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer"
              >
                View Event Details
                <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
