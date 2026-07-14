"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function EventPage() {
  return (
    <div className="bg-black text-neutral-100 min-h-screen">
      {/* HERO SECTION - Adjusted for navbar */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 overflow-hidden pt-16">

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Dark Overlay (controls visibility – DO NOT remove) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-neutral-950/80" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:100px_100px]" />

        {/* Floating Elements */}
        <motion.div
          className="hidden lg:block absolute top-1/4 left-10 w-1 h-24 bg-gradient-to-b from-emerald-500/50 to-transparent"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="hidden lg:block absolute bottom-1/4 right-10 w-24 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-4xl">

            <p className="text-xs lg:text-sm tracking-[0.25em] uppercase text-emerald-400/80 mb-4 lg:mb-6 font-light">
              Upcoming Event
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] lg:leading-[0.95] mb-4 lg:mb-6 tracking-tight">
              AI Driven Export Strategies
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-emerald-400 mb-6 lg:mb-8">
              From Farm to Global Sales
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 lg:mb-10 max-w-2xl font-light leading-relaxed">
              Join New India Export for an AI-driven export program designed to help entrepreneurs, farmers, FPOs, startups and businesses access global markets using Artificial Intelligence and digital technologies.
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-neutral-300 mb-8 lg:mb-12">
              {[
                { icon: <FaCalendarAlt />, label: "26 July 2026", sub: "Sunday" },
                { icon: <FaClock />, label: "6:00 PM", sub: "Evening Session" },
                { icon: <FaMapMarkerAlt />, label: "Tuli Imperial", sub: "Nagpur, Maharashtra" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <div className="text-emerald-400 text-sm lg:text-base">{item.icon}</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm lg:text-base">{item.label}</div>
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
                className="group px-6 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-medium flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer"
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
