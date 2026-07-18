"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDownload, FaChevronRight, FaStar, FaPhone, FaGlobe, FaEnvelope } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import EventBookingModal from "@/components/EventBookingModal";

export default function AIDrivenExportStrategiesPage() {
  const [eventOpen, setEventOpen] = useState(false);

  return (
    <div className="bg-black text-neutral-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 overflow-hidden pt-16">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:100px_100px]" />

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] lg:leading-[0.95] mb-4 tracking-tight">
              AI Driven Export Strategies
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-emerald-400 mb-6 lg:mb-8">
              From Farm to Global Sales
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 lg:mb-10 max-w-2xl font-light leading-relaxed">
              Artificial Intelligence is transforming the export-import industry by making international trade faster, smarter and more efficient. Learn AI-powered export solutions, global market opportunities, export finance, government schemes and buyer discovery.
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-neutral-300 mb-8 lg:mb-12">
              {[
                { icon: <FaCalendarAlt />, label: "26 July 2026", sub: "Sunday" },
                { icon: <FaClock />, label: "3:00 PM - 9:00 PM", sub: "Followed by Dinner" },
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
              <button
                onClick={() => setEventOpen(true)}
                className="group px-6 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-medium flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer"
              >
                Register Now
                <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/Brochure26july-ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-10 lg:py-5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/50 transition-all"
              >
                <FaDownload className="text-emerald-400" />
                Download Brochure
              </a>

              <a
                href="/EVENT26FLYER-ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-10 lg:py-5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/50 transition-all"
              >
                <FaDownload className="text-emerald-400" />
                Download Event Flyer
              </a>

              <a
                href="/REGESTRATIONFORM-ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-10 lg:py-5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/50 transition-all"
              >
                <FaDownload className="text-emerald-400" />
                Offline Registration Form
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ABOUT EVENT */}
      <section className="py-20 lg:py-40 px-4 sm:px-6 relative border-t border-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-4 lg:mb-6">About the Program</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
            Empowering Exporters with AI
          </h2>
          <p className="text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
            The AI Driven Export-Import Programme is a unique initiative by New India Export aimed at connecting farmers, FPOs, startups, women entrepreneurs and businesses with global markets using technology and innovation.
          </p>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-20 lg:py-32 bg-neutral-950 relative border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Key Highlights</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "AI Based Export Import Solutions",
              "Export Finance & Government Schemes",
              "Global Market Opportunities",
              "Smart Export Management",
              "Buyer Discovery using AI",
              "Digital Export Technology",
              "Networking with Industry Experts"
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors flex items-start gap-4"
              >
                <div className="mt-1">
                  <FiCheckCircle className="text-emerald-400 text-xl" />
                </div>
                <div className="text-lg text-neutral-200">{highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUESTS */}
      <section className="py-20 lg:py-32 border-t border-neutral-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-center">
            
            {/* Chief Guest */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-black border border-neutral-800"
            >
              <div className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-6">Chief Guest</div>
              <h3 className="text-3xl lg:text-4xl font-serif text-white mb-4">Shri Nitin Gadkari</h3>
              <p className="text-neutral-400 text-lg">
                Hon'ble Minister for Road Transport & Highways<br/>
                Government of India
              </p>
            </motion.div>

            {/* Guest of Honour */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-black border border-neutral-800"
            >
              <div className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-6">Guest of Honour</div>
              <h3 className="text-3xl lg:text-4xl font-serif text-white mb-4">Shri Ashish Jaiswal</h3>
              <p className="text-neutral-400 text-lg">
                Hon'ble Minister for Agriculture,<br/>
                Finance and Planning,<br/>
                Government of Maharashtra
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE & VENUE/CONTACT */}
      <section className="py-20 lg:py-32 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Target Audience */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">Who Should Attend?</h2>
              <div className="space-y-4">
                {[
                  "Emerging Entrepreneurs",
                  "Agripreneurs",
                  "Customs House Agents",
                  "Logistics Companies",
                  "Financial Partners"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-lg text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue & Contact */}
            <div className="space-y-12">
              {/* Venue */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">Event Venue</h2>
                <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-start gap-6">
                  <div className="p-4 bg-emerald-900/30 rounded-xl text-emerald-400 text-2xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-2">Tuli Imperial</h4>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                      37 Farm Land<br/>
                      Central Bazar Road<br/>
                      Nagpur, Maharashtra 440010
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-white">Contact Us</h2>
                <div className="space-y-4 text-neutral-300">
                  <div className="flex items-center gap-4">
                    <FaGlobe className="text-emerald-400 text-xl" />
                    <span className="text-lg">www.newindiaexport.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-emerald-400 text-xl" />
                    <span className="text-lg">+91 9028894149</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-emerald-400 text-xl" />
                    <span className="text-lg">eximnewindia@gmail.com</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-32 border-t border-neutral-900 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to Scale Global?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setEventOpen(true)}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-medium flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all text-lg"
          >
            Register Now
            <FaChevronRight />
          </button>
          <a
            href="/Brochure26july-ENG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-emerald-800/50 transition-all flex items-center justify-center gap-3 text-lg"
          >
            <FaDownload className="text-emerald-400" />
            Download Brochure
          </a>
          <a
            href="/REGESTRATIONFORM-ENG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-emerald-800/50 transition-all flex items-center justify-center gap-3 text-lg"
          >
            <FaDownload className="text-emerald-400" />
            Offline Form
          </a>
        </div>
      </section>

      <EventBookingModal open={eventOpen} setOpen={setEventOpen} />

    </div>
  );
}
