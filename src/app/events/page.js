"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaChevronRight, 
  FaLaptopHouse, 
  FaWhatsapp, 
  FaDownload,
  FaCheckCircle,
  FaMapMarkerAlt
} from "react-icons/fa";
import Link from "next/link";

export default function EventPage() {
  const whatsappUrl = "https://wa.me/919028894149?text=Hi%2C%20I%20want%20to%20register%20for%20the%20Canton%20Fair%202026%20Online%20Webinar.";

  return (
    <div className="bg-black text-neutral-100 min-h-screen">
      {/* HERO / EVENT SHOWCASE SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 overflow-hidden pt-24 pb-16">

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/canton-fair-bg.jpg')` }}
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                  ONLINE WEBINAR
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-3 tracking-tight font-bold text-white">
                Canton Fair 2026<br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Online Business Webinar
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif leading-snug text-emerald-400 mb-4 font-light">
                India–China Business & Sourcing Delegation
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 mb-6 lg:mb-8 font-light leading-relaxed">
                Learn how to prepare for the Canton Fair, identify genuine manufacturers, evaluate suppliers, negotiate effectively and build reliable sourcing relationships in China.
              </p>

              {/* Event Details Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-neutral-300 mb-6 lg:mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaCalendarAlt className="text-base" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">30 August 2026</div>
                    <div className="text-xs text-neutral-400">Webinar Date</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">2:00 PM onwards</div>
                    <div className="text-xs text-neutral-400">IST Timing</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaLaptopHouse className="text-base" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">Online Webinar</div>
                    <div className="text-xs text-neutral-400">Live Session</div>
                  </div>
                </div>
              </div>

              {/* Delegation Preview Banner */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-neutral-900/80 border border-emerald-800/30 mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-xs sm:text-sm text-neutral-300">
                  <span className="font-semibold text-white">Delegation Preview:</span> Canton Fair Phase 3 Business Delegation • <span className="text-emerald-400 font-medium">31 October–4 November 2026 | China</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  href="/events/ai-driven-export-strategies"
                  className="group px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-sm"
                >
                  <span>View Details</span>
                  <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Register on WhatsApp</span>
                </a>

                <a
                  href="/Modern%20Online%20Webinar%20(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <FaDownload className="text-emerald-400 text-xs" />
                  <span>Webinar Brochure</span>
                </a>

                <a
                  href="/NIE%20tour%20brochures.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <FaDownload className="text-emerald-400 text-xs" />
                  <span>Tour Brochure</span>
                </a>
              </div>

            </div>

            {/* Right Thumbnail Column */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-emerald-800/30 shadow-2xl bg-neutral-900/60 backdrop-blur-md p-2">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/canton-webinar-thumb.jpg"
                    alt="Canton Fair 2026 Online Business Webinar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">30 August 2026</div>
                      <div className="text-[11px] text-neutral-300">2:00 PM onwards (IST)</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
