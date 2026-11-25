"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BookingModal from "./BookingModal";
import EventBookingModal from "./EventBookingModal";
import { FaTag, FaChevronRight, FaStar, FaDownload, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION - Mobile fixed, desktop awesome */}
      <section className="relative min-h-screen pt-20 md:pt-0 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero.jpg"
          alt="New India Export"
          fill
          priority
          className="object-cover"
        />

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Animated Grid Overlay - Desktop only */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 hidden md:block" />

        {/* Floating Elements - Desktop only */}
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 md:pt-0"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
            {/* Left Column - Main Hero */}
            <div className="text-center lg:text-left lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-emerald-950/30 border border-emerald-800/30 backdrop-blur-sm mb-4 lg:mb-6"
              >
                <FaStar className="text-emerald-400 text-xs" />
                <span className="text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.2em] uppercase text-emerald-300 font-light">
                  Global Trade Excellence
                </span>
              </motion.div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                New India
                <span className="block mt-1 lg:mt-2 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Export
                </span>
              </h1>

              <p className="text-gray-200 text-base sm:text-lg lg:text-xl mt-3 lg:mt-4 max-w-2xl mx-auto lg:mx-0">
                Exporting India's agricultural excellence to the world with precision and trust.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 lg:mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(true)}
                  type="button"
                  className="px-6 py-3.5 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 w-full sm:w-auto justify-center"
                >
                  <span className="text-sm lg:text-base">Book Your Shipment</span>
                  <FaChevronRight className="text-xs lg:text-sm" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Event Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-1/2 max-w-xl mt-6 lg:mt-0"
            >
              <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-br from-neutral-900/95 to-black/95 backdrop-blur-md border border-emerald-500/30 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                  {/* Left: Text & Highlights */}
                  <div className="flex-1 min-w-0">
                    {/* Event Badge */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20">
                        <FaTag className="text-emerald-400 text-xs sm:text-sm" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-400 tracking-wider uppercase">
                        ONE DAY ONLY • 27 NOV 2026
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mb-1.5 font-bold leading-tight">
                      Black Friday Sale<br />
                      <span className="text-emerald-400 text-lg sm:text-xl lg:text-2xl font-bold">Up to 70% OFF</span>
                    </h2>

                    <p className="text-emerald-300/90 text-xs sm:text-sm font-medium mb-2">
                      Up to 70% off on export services
                    </p>

                    <p className="text-neutral-300 text-xs sm:text-sm mb-3 leading-relaxed font-light">
                      Documentation, customs, sourcing, inspection and compliance, all discounted on 27 November only.
                    </p>
                  </div>

                  {/* Right: Poster Preview */}
                  <a
                    href="/brochure/Black%20Friday%20Poster@2x%20(2).png"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Black Friday Sale Poster"
                    className="hidden sm:block relative w-28 lg:w-32 aspect-[5/7] shrink-0 rounded-xl overflow-hidden border border-emerald-500/40 shadow-lg hover:scale-[1.03] transition-transform"
                  >
                    <Image
                      src="/brochure/Black Friday Poster@2x (2).png"
                      alt="New India Export Black Friday Sale 70% OFF Poster"
                      fill
                      className="object-contain object-left-top scale-[1.14] origin-top-left"
                      priority
                    />
                  </a>
                </div>

                {/* Highlight Banner */}
                <div className="mb-3.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <div className="text-xs sm:text-sm font-bold text-emerald-300 tracking-wide">
                    Friday, 27 November 2026 | Services start at ₹1,499 (was ₹4,999)
                  </div>
                </div>

                {/* Sale Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-0.5">Date</div>
                    <div className="font-semibold text-white text-xs sm:text-sm">27 Nov 2026</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Friday Only</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-0.5">Discount</div>
                    <div className="font-semibold text-emerald-400 text-xs sm:text-sm">Up to 70%</div>
                    <div className="text-[10px] text-neutral-400">Service Fees</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-0.5">Starts At</div>
                    <div className="font-semibold text-white text-xs sm:text-sm">₹1,499</div>
                    <div className="text-[10px] text-neutral-400 line-through">₹4,999</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-0.5">Offers</div>
                    <div className="font-semibold text-emerald-400 text-xs sm:text-sm">8 Services</div>
                    <div className="text-[10px] text-neutral-400">3 Bundles</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  <Link
                    href="/events/ai-driven-export-strategies"
                    className="group w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <span className="relative z-10 text-center">View Sale Details</span>
                    <FaChevronRight className="relative z-10 text-xs transition-transform group-hover:translate-x-1 shrink-0" />
                  </Link>

                  <a
                    href="https://wa.me/919967084149?text=Hi%2C%20I%20want%20to%20claim%20the%20Black%20Friday%20Sale%202026%20offer%20(Up%20to%2070%25%20OFF)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full px-4 py-2.5 rounded-full bg-emerald-500 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:bg-emerald-400"
                  >
                    <FaWhatsapp className="text-sm shrink-0" />
                    <span className="text-center">Claim on WhatsApp</span>
                  </a>

                  <a
                    href="/brochure/new-india-export-black-friday.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-500/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                  >
                    <FaDownload className="text-emerald-400 text-xs shrink-0" />
                    <span className="text-center">Sale Brochure</span>
                  </a>

                  <a
                    href="/brochure/Black%20Friday%20Poster@2x%20(2).png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/50 transition-all text-xs sm:text-sm font-medium text-neutral-300 hover:text-white"
                  >
                    <span className="text-center">View Sale Poster</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Desktop only */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <div className="w-[1px] h-12 lg:h-16 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* BOOKING MODAL */}
      <BookingModal open={open} setOpen={setOpen} />
      <EventBookingModal open={eventOpen} setOpen={setEventOpen} />
    </>
  );
}