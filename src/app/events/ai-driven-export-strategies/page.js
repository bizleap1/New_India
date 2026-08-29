"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaDownload, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaLaptopHouse,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFilePdf,
  FaGlobeAsia,
  FaLayerGroup,
  FaIndustry,
  FaArrowRight
} from "react-icons/fa";

export default function CantonFairEventPage() {
  const whatsappUrl = "https://wa.me/919028894149?text=Hi%2C%20I%20want%20to%20register%20for%20the%20Canton%20Fair%202026%20Online%20Webinar.";
  const webinarBrochureUrl = "/Modern%20Online%20Webinar%20(2).pdf";
  const tourBrochureUrl = "/NIE%20tour%20brochures.pdf";

  const whatYouWillLearn = [
    "What to do before, during and after the Canton Fair",
    "Canton Fair dates, phases and product categories",
    "Registration and invitation process",
    "How to identify and shortlist genuine manufacturers",
    "Supplier evaluation and negotiation",
    "Building reliable supplier relationships"
  ];

  const delegationTimeline = [
    { date: "30 October 2026", title: "Arrival in China & Airport Transfer", desc: "Delegation reception, airport pickup and hotel check-in." },
    { date: "31 October 2026", title: "Canton Fair Registration & Orientation", desc: "Buyer badge collection, venue orientation and initial floor review." },
    { date: "1 November 2026", title: "Canton Fair Phase 3 Sourcing", desc: "Guided sourcing, business matchmaking and manufacturer discussions." },
    { date: "2 November 2026", title: "Factory & Manufacturing Visits", desc: "On-site industrial visits, manufacturing capability inspections." },
    { date: "3 November 2026", title: "Market Exploration & Supplier Follow-ups", desc: "Wholesale market visits, price negotiation and contract follow-ups." },
    { date: "4 November 2026", title: "HK City Tour & Delegation Wrap-up", desc: "Business networking wrap-up, Hong Kong city excursion." },
    { date: "5 November 2026", title: "Airport Drop & Return Journey", desc: "Transfer to international airport for departure to India." }
  ];

  const sourcingSectors = [
    { title: "Electronics and Technology", desc: "Consumer electronics, lighting, electronic components & smart solutions." },
    { title: "Machinery and Equipment", desc: "Industrial machinery, processing equipment & precision tools." },
    { title: "Energy and New Energy", desc: "Renewable energy equipment, solar solutions, energy storage & power systems." },
    { title: "Automotive and Electric Vehicles", desc: "EVs, automotive parts, accessories, commercial transport & battery tech." },
    { title: "Agricultural Machinery", desc: "Farm machinery, agro-processing tools, irrigation tech & harvesting solutions." }
  ];

  const delegationHighlights = [
    "Professional on-ground support in China",
    "Canton Fair buyer badge & registration assistance",
    "Pre-screened supplier discovery & matchmaking",
    "Factory visits & wholesale market exploration",
    "Structured B2B networking with Indian delegates",
    "Airport, hotel & exhibition venue transfers",
    "Premium 4-star accommodation throughout the tour",
    "Experienced multilingual trade & sourcing guide"
  ];

  return (
    <div className="bg-black text-neutral-100 min-h-screen selection:bg-emerald-500 selection:text-black">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-16 overflow-hidden pt-28 pb-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url('/canton-fair-bg.jpg')` }}
        />
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                  ONLINE BUSINESS WEBINAR
                </p>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.12] mb-3 text-white font-bold tracking-tight">
                Canton Fair 2026<br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Online Business Webinar
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-lg sm:text-2xl font-serif text-emerald-400 mb-4 font-light">
                India–China Business & Sourcing Delegation
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-300 mb-6 max-w-2xl font-light leading-relaxed">
                Learn how to prepare for the Canton Fair, identify genuine manufacturers, evaluate suppliers, negotiate effectively and build reliable sourcing relationships in China.
              </p>

              {/* Event Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaCalendarAlt /> Date
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">30 August 2026</div>
                  <div className="text-[11px] text-neutral-400">Live Webinar</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaClock /> Time
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">2:00 PM onwards</div>
                  <div className="text-[11px] text-neutral-400">Indian Standard Time (IST)</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaLaptopHouse /> Mode
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">Online Webinar</div>
                  <div className="text-[11px] text-neutral-400">Access link via WhatsApp</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 lg:px-8 lg:py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold flex items-center justify-center gap-2.5 hover:shadow-lg hover:shadow-emerald-500/30 transition-all text-sm sm:text-base shrink-0"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Register on WhatsApp</span>
                </a>

                <a
                  href={webinarBrochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 lg:px-6 lg:py-4 rounded-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/70 hover:bg-neutral-900 transition-all text-xs sm:text-sm font-medium text-neutral-200 hover:text-white"
                >
                  <FaDownload className="text-emerald-400" />
                  <span>Webinar Brochure</span>
                </a>

                <a
                  href={tourBrochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 lg:px-6 lg:py-4 rounded-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/70 hover:bg-neutral-900 transition-all text-xs sm:text-sm font-medium text-neutral-200 hover:text-white"
                >
                  <FaDownload className="text-emerald-400" />
                  <span>Tour Brochure</span>
                </a>
              </div>
            </div>

            {/* Right Poster / Thumbnail */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-emerald-800/40 shadow-2xl bg-neutral-900/80 backdrop-blur-md p-2.5 sm:p-3">
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-neutral-950">
                  <Image
                    src="/canton-webinar-thumb.jpg"
                    alt="Canton Fair 2026 Online Business Webinar Thumbnail"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">Phase 3 Business Delegation</div>
                      <div className="text-[11px] text-neutral-300">31 Oct – 4 Nov 2026 | China</div>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 1. ABOUT THE WEBINAR */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
            Webinar Overview
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 text-white font-bold">
            About the Online Webinar
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
            Learn how to prepare for the Canton Fair, identify genuine manufacturers, evaluate suppliers, negotiate effectively and build reliable sourcing relationships in China.
          </p>
        </div>
      </section>

      {/* 2. WHAT YOU WILL LEARN */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Masterclass Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              What You Will Learn
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {whatYouWillLearn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-neutral-900/60 border border-neutral-800/80 p-5 sm:p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <FaCheckCircle className="text-base" />
                </div>
                <div>
                  <span className="text-base sm:text-lg text-neutral-100 font-medium leading-snug">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DELEGATION PREVIEW */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              On-Ground Opportunity
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Delegation Preview
            </h2>
            <p className="text-emerald-400 text-base sm:text-lg font-light">
              Canton Fair Phase 3 Business Delegation • 31 October–4 November 2026 | China
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black border border-emerald-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Delegation Phase</div>
                <div className="text-base sm:text-lg font-bold text-white">Canton Fair Phase 3</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Dates</div>
                <div className="text-base sm:text-lg font-bold text-white">31 Oct – 4 Nov 2026</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Destination</div>
                <div className="text-base sm:text-lg font-bold text-white">Guangzhou & China</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-medium">Delegation Status</div>
                <div className="text-base sm:text-lg font-bold text-emerald-400">Limited Seats</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Registration Notice
                </span>
                <span className="text-sm sm:text-base text-neutral-200 font-medium">
                  Customized delegation itinerary, visa assistance & travel packages available.
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-500 text-black font-semibold text-xs sm:text-sm hover:bg-emerald-400 transition shrink-0"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Sourcing Sectors */}
          <div className="mb-14">
            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mb-6 text-center">
              Industries & Sourcing Sectors Covered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sourcingSectors.map((sector, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mb-3" />
                  <h4 className="font-semibold text-white text-base mb-1">{sector.title}</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delegation Highlights (Inclusions) */}
          <div className="mb-14">
            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mb-6 text-center">
              Delegation Inclusions & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {delegationHighlights.map((hl, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs mt-0.5 shrink-0">✓</div>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delegation Itinerary Timeline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mb-6 text-center">
              Delegation Tour Timeline
            </h3>
            <div className="space-y-3 max-w-4xl mx-auto">
              {delegationTimeline.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold shrink-0">
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm sm:text-base font-semibold text-white">{item.title}</div>
                    <div className="text-xs sm:text-sm text-neutral-400 font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONTACT & BROCHURE DOWNLOADS SECTION */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Contact & Delegation Inquiries
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">New India Export</h3>
                <p className="text-sm text-neutral-300 mb-6 font-light leading-relaxed">
                  Have questions about the Canton Fair 2026 Online Webinar or Phase 3 Business Delegation? Connect with our trade specialists directly.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+919028894149"
                    className="flex items-center gap-3 text-neutral-200 hover:text-emerald-400 transition"
                  >
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Direct Phone</div>
                      <div className="font-semibold text-sm sm:text-base">+91 90288 94149</div>
                    </div>
                  </a>

                  <a
                    href="mailto:eximnewindia@gmail.com"
                    className="flex items-center gap-3 text-neutral-200 hover:text-emerald-400 transition"
                  >
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Official Email</div>
                      <div className="font-semibold text-sm sm:text-base">eximnewindia@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Register on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Downloads Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Official Documents</h3>
                <p className="text-sm text-neutral-300 mb-6 font-light leading-relaxed">
                  Download complete event materials, webinar guides and delegation itineraries.
                </p>

                <div className="space-y-4">
                  {/* Webinar PDF */}
                  <a
                    href={webinarBrochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <FaFilePdf className="text-lg" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                          Webinar Brochure
                        </div>
                        <div className="text-xs text-neutral-400">Modern Online Webinar (2).pdf</div>
                      </div>
                    </div>
                    <FaDownload className="text-neutral-400 group-hover:text-emerald-400 transition-colors text-sm mr-2" />
                  </a>

                  {/* Tour PDF */}
                  <a
                    href={tourBrochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <FaFilePdf className="text-lg" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                          Tour Brochure
                        </div>
                        <div className="text-xs text-neutral-400">NIE tour brochures.pdf</div>
                      </div>
                    </div>
                    <FaDownload className="text-neutral-400 group-hover:text-emerald-400 transition-colors text-sm mr-2" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
                <span className="text-xs text-neutral-400">
                  PDF downloads include detailed schedules, buyer guidelines & contact options.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-20 lg:py-28 border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-black text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 font-semibold">
              JOIN THE WEBINAR
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-white font-bold">
            Start Your Canton Fair Journey
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mb-8 font-light leading-relaxed">
            Register for the Canton Fair 2026 Online Business Webinar on 30 August 2026 and explore the Phase 3 Business Delegation in China.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-base flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Register on WhatsApp</span>
            </a>

            <a
              href={webinarBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/60 transition-all text-sm font-medium text-neutral-200 hover:text-white"
            >
              <FaDownload className="text-emerald-400" />
              <span>Download Webinar Guide</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
