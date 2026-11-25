"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaTag,
  FaChevronRight,
  FaLayerGroup,
  FaWhatsapp,
  FaDownload,
  FaRupeeSign,
  FaBolt,
} from "react-icons/fa";
import Link from "next/link";

export default function EventPage() {
  const whatsappUrl =
    "https://wa.me/919967084149?text=Hi%2C%20I%20want%20to%20claim%20the%20Black%20Friday%20Sale%202026%20offer%20(Up%20to%2070%25%20OFF).";
  const brochureUrl = "/brochure/new-india-export-black-friday.pdf";
  const posterUrl = "/brochure/Black%20Friday%20Poster@2x%20(2).png";

  return (
    <div className="bg-black text-neutral-100 min-h-screen">
      {/* HERO / BLACK FRIDAY SALE SHOWCASE SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 overflow-hidden pt-24 pb-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/Hero.jpg')` }}
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

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
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                  ONE DAY ONLY • BLACK FRIDAY SALE
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-3 tracking-tight font-bold text-white">
                Black Friday Sale 2026<br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Up to 70% OFF
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-serif leading-snug text-emerald-400 mb-4 font-light">
                Up to 70% off on export services
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 mb-4 lg:mb-6 font-light leading-relaxed">
                Documentation, customs, sourcing, inspection and compliance, all discounted on 27 November only. Services start at ₹1,499 (was ₹4,999).
              </p>

              {/* Highlight Banner */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-emerald-300 tracking-wide">
                    Friday, 27 November 2026 | Ends 11:59 PM IST | One Day Only
                  </span>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider shrink-0">
                  70% OFF
                </span>
              </div>

              {/* Event Details Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-neutral-300 mb-6 lg:mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaCalendarAlt className="text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-white">27 Nov 2026</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Friday Only</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaTag className="text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-white">Up to 70%</div>
                    <div className="text-[10px] text-neutral-400">Service Fees</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaRupeeSign className="text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-white">₹1,499</div>
                    <div className="text-[10px] text-neutral-400 line-through">₹4,999</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <FaLayerGroup className="text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-emerald-400">8 Services</div>
                    <div className="text-[10px] text-neutral-400">3 Bundles</div>
                  </div>
                </div>
              </div>

              {/* Bundle Preview Banner */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-neutral-900/80 border border-emerald-800/30 mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <FaBolt />
                </div>
                <div className="text-xs sm:text-sm text-neutral-300">
                  <span className="font-semibold text-white">Sale Bundles:</span> Starter (55% off) • Growth (65% off) • Enterprise (70% off) •{" "}
                  <span className="text-emerald-400 font-medium">Dedicated export coordinator included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  href="/events/ai-driven-export-strategies"
                  className="group px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-sm"
                >
                  <span>View Sale Details</span>
                  <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Claim on WhatsApp</span>
                </a>

                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-500/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <FaDownload className="text-emerald-400 text-xs" />
                  <span>Sale Brochure</span>
                </a>

                <a
                  href={posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <FaDownload className="text-emerald-400 text-xs" />
                  <span>View Poster</span>
                </a>
              </div>
            </div>

            {/* Right Poster Column */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-neutral-900/60 backdrop-blur-md p-2.5 max-w-sm mx-auto">
                <a
                  href={posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[5/7] w-full rounded-xl overflow-hidden"
                >
                  <Image
                    src="/brochure/Black Friday Poster@2x (2).png"
                    alt="New India Export Black Friday Sale 70% OFF Poster"
                    fill
                    className="object-contain object-left-top scale-[1.14] origin-top-left group-hover:scale-[1.17] transition-transform duration-700"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
