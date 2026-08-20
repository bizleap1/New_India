"use client";

import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaDownload, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaLaptopHouse,
  FaTag
} from "react-icons/fa";

export default function CantonFairEventPage() {
  const whatsappUrl = "https://wa.me/919028894149?text=Hello%2C%20I%20want%20to%20register%20for%20the%20free%20online%20Canton%20Fair%202026%20workshop.";

  return (
    <div className="bg-black text-neutral-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 overflow-hidden pt-24 pb-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/canton-fair-bg.jpg')` }}
        />
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto w-full"
        >
          <div className="max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                FREE ONLINE WORKSHOP
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.15] mb-4 text-white font-bold tracking-tight">
              Canton Fair 2026<br />
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Free Online Workshop
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-serif text-emerald-400 mb-6 font-light">
              Your Gateway to Global Sourcing Opportunities
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 max-w-3xl font-light leading-relaxed">
              Planning to attend the 140th Canton Fair in China? Join our free online workshop to understand sourcing opportunities, delegation planning, industries covered, travel arrangements and the complete Canton Fair experience.
            </p>

            {/* Event Information */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs sm:text-sm font-medium">
                  <FaCalendarAlt /> Date
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">Sunday, 23 Aug 2026</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs sm:text-sm font-medium">
                  <FaClock /> Time
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">11:00 AM – 12:30 PM</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs sm:text-sm font-medium">
                  <FaLaptopHouse /> Mode
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">Online Workshop</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs sm:text-sm font-medium">
                  <FaTag /> Fee
                </div>
                <div className="text-sm sm:text-base font-bold text-emerald-400">Free</div>
              </div>
            </div>

            {/* Joining Details Note */}
            <p className="text-xs sm:text-sm text-emerald-300/80 mb-8 font-light flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              Online joining details will be shared after registration.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {/* Primary Green Button: Register for Free */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-8 lg:py-4.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/30 transition-all text-sm sm:text-base shrink-0"
              >
                <FaWhatsapp className="text-xl" />
                Register for Free
              </a>

              {/* Download Brochure */}
              <a
                href="/Bifold%20Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-8 lg:py-4.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/60 hover:bg-neutral-900 transition-all text-sm sm:text-base text-neutral-200"
              >
                <FaDownload className="text-emerald-400" />
                Download Brochure
              </a>

              {/* Download Event Flyer */}
              <a
                href="/flyerrr%20(1)_260820_135954.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-8 lg:py-4.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/60 hover:bg-neutral-900 transition-all text-sm sm:text-base text-neutral-200"
              >
                <FaDownload className="text-emerald-400" />
                Download Event Flyer
              </a>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 1. ABOUT THE WORKSHOP */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
            Overview
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 text-white font-bold">
            About the Workshop
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
            Learn how the Canton Fair can help Indian businesses discover international suppliers, explore new products and build global sourcing connections.
          </p>
        </div>
      </section>

      {/* 2. WHAT YOU WILL LEARN */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
              Key Takeaways
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              What You Will Learn
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {[
              "Understanding the Canton Fair and Phase 1",
              "Industries and sourcing opportunities",
              "Supplier discovery and business networking",
              "China delegation and travel process",
              "Package, itinerary and cost details",
              "Live question-and-answer session"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-2xl flex items-start gap-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0 mt-0.5">
                  <FaCheckCircle className="text-base" />
                </div>
                <span className="text-base sm:text-lg text-neutral-200 font-light">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CANTON FAIR DELEGATION */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
              On-Ground Experience
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Canton Fair Delegation
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black border border-emerald-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Phase 1</div>
                <div className="text-base sm:text-lg font-bold text-white">14–19 October 2026</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Location</div>
                <div className="text-base sm:text-lg font-bold text-white">China</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Duration</div>
                <div className="text-base sm:text-lg font-bold text-white">6 Days / 5 Nights</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Package</div>
                <div className="text-base sm:text-lg font-bold text-emerald-400">Starting from ₹93,000 <span className="text-xs font-normal text-neutral-400">per person</span></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Status
                </span>
                <span className="text-sm sm:text-base text-white font-medium">Limited Delegation Seats</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Taxes and other applicable charges may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES YOU CAN EXPLORE */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
              Sourcing Sectors
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Industries You Can Explore
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Electronics and Technology",
              "Machinery and Equipment",
              "Energy and New Energy",
              "Automotive and Electric Vehicles",
              "Agricultural Machinery"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-center gap-4 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-base sm:text-lg text-white font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELEGATION HIGHLIGHTS */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
              What's Included
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Delegation Highlights
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Professional on-ground support",
              "Canton Fair registration assistance",
              "Supplier discovery",
              "Factory and market exploration",
              "Business networking",
              "Airport and venue transfers",
              "Four-star accommodation",
              "Breakfasts and dinners"
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-3 text-sm font-bold">
                  ✓
                </div>
                <span className="text-sm sm:text-base text-neutral-200 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DELEGATION TIMELINE */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 font-semibold">
              Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Delegation Timeline
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              { date: "14 October", event: "Arrival in China" },
              { date: "15 October", event: "Canton Fair guided visit" },
              { date: "16 October", event: "Supplier exploration" },
              { date: "17 October", event: "Factory/manufacturing visit" },
              { date: "18 October", event: "Market exploration and supplier follow-ups" },
              { date: "19 October", event: "Final business meetings and departure" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-6 hover:border-emerald-500/40 transition-colors"
              >
                <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold shrink-0">
                  {item.date}
                </div>
                <div className="text-base sm:text-lg text-white font-medium flex-1">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 lg:py-32 border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-black text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-white font-bold">
            Start Your Canton Fair Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-10 font-light leading-relaxed">
            Register for the free online workshop and understand the complete Canton Fair delegation opportunity.
          </p>
          
          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              Reserve My Free Seat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
