"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaTag,
  FaDownload,
  FaWhatsapp,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaFilePdf,
  FaLayerGroup,
  FaRupeeSign,
  FaBolt,
} from "react-icons/fa";

export default function BlackFridaySalePage() {
  const whatsappUrl =
    "https://wa.me/919967084149?text=Hi%2C%20I%20want%20to%20claim%20the%20Black%20Friday%20Sale%202026%20offer%20(Up%20to%2070%25%20OFF).";
  const brochureUrl = "/brochure/new-india-export-black-friday.pdf";
  const posterUrl = "/brochure/Black%20Friday%20Poster@2x%20(2).png";

  const whyBookNow = [
    {
      metric: "8 services",
      title: "One sale, every step",
      desc: "From your first export registration to the final shipping paperwork.",
    },
    {
      metric: "3 bundles",
      title: "Save more with bundles",
      desc: "Bundle services and unlock deeper discounts than single deals.",
    },
    {
      metric: "1 day",
      title: "27 November only",
      desc: "One day, no extensions. Book on the day to lock in the offer.",
    },
  ];

  const serviceDeals = [
    {
      category: "Growth",
      discount: "Up to 70% off",
      title: "Trade finance and compliance advisory",
      desc: "Keep your export business compliant and well funded.",
    },
    {
      category: "Growth",
      discount: "Up to 60% off",
      title: "Buyer sourcing and market research",
      desc: "Find verified overseas buyers and the right markets.",
    },
    {
      category: "Paperwork",
      discount: "Up to 50% off",
      title: "Export documentation",
      desc: "Invoices, packing lists and certificates of origin.",
    },
    {
      category: "Paperwork",
      discount: "Up to 45% off",
      title: "Quality inspection and certification",
      desc: "Pre-shipment checks that buyers trust.",
    },
    {
      category: "Paperwork",
      discount: "Up to 40% off",
      title: "Export registration (IEC and GST)",
      desc: "Get registered and ready to ship.",
    },
    {
      category: "Shipping",
      discount: "Up to 35% off",
      title: "Customs clearance",
      desc: "Smooth clearance at the port of exit.",
    },
    {
      category: "Shipping",
      discount: "Up to 30% off",
      title: "Freight forwarding (sea and air)",
      desc: "Booking, tracking and delivery to your buyer.",
    },
    {
      category: "Shipping",
      discount: "Up to 30% off",
      title: "Export packaging and labelling",
      desc: "Packing and labels that meet destination rules.",
    },
  ];

  const saleBundles = [
    {
      audience: "For first-time exporters",
      name: "Starter",
      discount: "55% off",
      featured: false,
      features: [
        "Export registration (IEC)",
        "Export documentation",
        "Packaging and labelling",
      ],
    },
    {
      audience: "Most popular",
      name: "Growth",
      discount: "65% off",
      featured: true,
      features: [
        "Everything in Starter",
        "Customs clearance",
        "Quality inspection",
        "Buyer sourcing and market research",
      ],
    },
    {
      audience: "For scaling businesses",
      name: "Enterprise",
      discount: "70% off",
      featured: false,
      features: [
        "Everything in Growth",
        "Freight forwarding",
        "Trade finance and compliance advisory",
      ],
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose a service or bundle",
      desc: "Browse the deals and pick what your next shipment needs.",
    },
    {
      step: "2",
      title: "Send your claim request",
      desc: "Tell us your business, products and target country. It takes two minutes.",
    },
    {
      step: "3",
      title: "We confirm your discount",
      desc: "An export coordinator contacts you with the final offer and next steps.",
    },
    {
      step: "4",
      title: "Start exporting",
      desc: "We handle the paperwork and logistics while you focus on your buyers.",
    },
  ];

  return (
    <div className="bg-black text-neutral-100 min-h-screen selection:bg-emerald-500 selection:text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-16 overflow-hidden pt-28 pb-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url('/Hero.jpg')` }}
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:80px_80px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                  ONE DAY ONLY • BLACK FRIDAY SALE
                </p>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.12] mb-3 text-white font-bold tracking-tight">
                Black Friday Sale 2026<br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  70% OFF
                </span>
              </h1>

              <h2 className="text-lg sm:text-2xl font-serif text-emerald-400 mb-4 font-light">
                Up to 70% off on export services
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 mb-4 lg:mb-6 max-w-2xl font-light leading-relaxed">
                Documentation, customs, sourcing, inspection and compliance, all discounted on 27 November only. Services start at ₹1,499 (was ₹4,999).
              </p>

              {/* Highlight Banner */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide">
                    Friday, 27 November 2026 | Valid until 11:59 PM IST
                  </span>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider">
                  27 Nov Only
                </span>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaCalendarAlt /> Date
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">27 Nov 2026</div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">One Day Only</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaTag /> Max Offer
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-emerald-400">Up to 70%</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400">Service Fees</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaRupeeSign /> Starts At
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">₹1,499</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400 line-through">₹4,999</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1 text-xs font-semibold">
                    <FaLayerGroup /> Coverage
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-emerald-400">8 Services</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400">3 Bundles</div>
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
                  <span>Claim Offer on WhatsApp</span>
                </a>

                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 lg:px-6 lg:py-4 rounded-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-500/70 hover:bg-neutral-900 transition-all text-xs sm:text-sm font-medium text-neutral-200 hover:text-white"
                >
                  <FaDownload className="text-emerald-400" />
                  <span>Sale Brochure (PDF)</span>
                </a>

                <a
                  href={posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 lg:px-6 lg:py-4 rounded-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-800/70 hover:bg-neutral-900 transition-all text-xs sm:text-sm font-medium text-neutral-200 hover:text-white"
                >
                  <FaDownload className="text-emerald-400" />
                  <span>View Sale Poster</span>
                </a>
              </div>
            </div>

            {/* Right Poster */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl bg-neutral-900/80 backdrop-blur-md p-2.5 sm:p-3 max-w-sm mx-auto">
                <a
                  href={posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[5/7] w-full rounded-2xl overflow-hidden bg-neutral-950"
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

      {/* 1. WHY EXPORTERS BOOK NOW */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Limited Time Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-white font-bold">
              Why Exporters Book Now
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyBookNow.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
                  {item.metric}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICE DEALS (8 SERVICES) */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              27 November Only
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Service Deals
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mb-4">
              Discounts shown are the maximum available on 27 November.{" "}
              <span className="text-emerald-400 font-semibold">
                Services start at ₹1,499 (was ₹4,999).
              </span>
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {serviceDeals.map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-900/60 border border-neutral-800/80 p-5 sm:p-6 rounded-2xl hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-medium">
                    {deal.category}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-400">
                    {deal.discount}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-1.5">
                  {deal.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {deal.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-neutral-400 mt-8">
            Discounts apply to service fees only. Government duties, carrier charges and third-party fees are extra.
          </p>
        </div>
      </section>

      {/* 3. SALE BUNDLES */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Save More Together
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Sale Bundles
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light">
              Combine services to save more. Every bundle includes a dedicated export coordinator.
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saleBundles.map((bundle, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-colors ${
                  bundle.featured
                    ? "bg-gradient-to-b from-emerald-950/30 to-neutral-900 border-emerald-500 shadow-2xl shadow-emerald-500/10"
                    : "bg-neutral-900/70 border-neutral-800 hover:border-emerald-500/40"
                }`}
              >
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-2">
                    {bundle.audience}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {bundle.name}
                  </h3>
                  <div className="text-4xl font-bold text-emerald-400 mb-6">
                    {bundle.discount}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                        <FaCheckCircle className="text-emerald-400 shrink-0 mt-1 text-xs" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919967084149?text=${encodeURIComponent(
                    `Hi, I want to claim the Black Friday ${bundle.name} Bundle (${bundle.discount}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition ${
                    bundle.featured
                      ? "bg-emerald-500 text-black hover:bg-emerald-300"
                      : "bg-neutral-800 text-white hover:bg-emerald-500 hover:text-black"
                  }`}
                >
                  <FaWhatsapp />
                  <span>Claim {bundle.name}</span>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-neutral-400 mt-8">
            Bundle discounts are the maximum available on 27 November and are confirmed by your export coordinator.
          </p>
        </div>
      </section>

      {/* 4. HOW THE SALE WORKS */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Simple Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              How the Sale Works
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light">
              Four simple steps from choosing a deal to your first shipment.
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-4">
            {howItWorks.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-start gap-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-lg flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT & BROCHURE DOWNLOADS SECTION */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-2 font-semibold">
              Claim Your Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 font-bold">
              Contact & Official Brochure
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Claim Your Black Friday Offer
                </h3>
                <p className="text-sm text-neutral-300 mb-4 font-light leading-relaxed">
                  This offer is valid on 27 November only. Send your business, product and target country details before 11:59 PM IST and we will confirm your discount.
                </p>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 mb-5">
                  <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                    Sale Validity
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-1">
                    Friday, 27 November 2026 | Until 11:59 PM IST
                  </div>
                  <div className="text-[11px] text-neutral-300 flex items-center gap-3">
                    <span>
                      Starts At: <strong className="text-emerald-400">₹1,499</strong>
                    </span>
                    <span>•</span>
                    <span>
                      Max Off: <strong className="text-emerald-400">70%</strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+919967084149"
                    className="flex items-center gap-3 text-neutral-200 hover:text-emerald-400 transition"
                  >
                    <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-emerald-400">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">WhatsApp / Phone</div>
                      <div className="font-semibold text-sm sm:text-base">+91 99670 84149</div>
                    </div>
                  </a>

                  <a
                    href="mailto:newindexport@gmail.com"
                    className="flex items-center gap-3 text-neutral-200 hover:text-emerald-400 transition"
                  >
                    <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-emerald-400">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Official Email</div>
                      <div className="font-semibold text-sm sm:text-base">newindexport@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-emerald-300 transition text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Claim on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Downloads Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Official Documents</h3>
                <p className="text-sm text-neutral-300 mb-6 font-light leading-relaxed">
                  Download the complete Black Friday Sale brochure with all 8 service deals, 3 bundles, and claim form.
                </p>

                <div className="space-y-4">
                  {/* Black Friday Brochure PDF */}
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <FaFilePdf className="text-lg" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                          Black Friday Sale Brochure
                        </div>
                        <div className="text-xs text-neutral-400">
                          new-india-export-black-friday.pdf
                        </div>
                      </div>
                    </div>
                    <FaDownload className="text-neutral-400 group-hover:text-emerald-400 transition-colors text-sm mr-2" />
                  </a>

                  {/* Black Friday Poster */}
                  <a
                    href={posterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <FaBolt className="text-lg" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                          Black Friday Sale Poster
                        </div>
                        <div className="text-xs text-neutral-400">70% OFF • 27 Nov 2026</div>
                      </div>
                    </div>
                    <FaDownload className="text-neutral-400 group-hover:text-emerald-400 transition-colors text-sm mr-2" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
                <span className="text-xs text-neutral-400">
                  Terms: discounts apply to service fees only. Government duties, carrier charges and third-party fees are extra. Offers are subject to confirmation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-20 lg:py-28 border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-black text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 font-semibold">
              ONE DAY ONLY • 27 NOVEMBER 2026
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-white font-bold">
            Lock In Up to 70% OFF
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mb-6 font-light leading-relaxed">
            Send your details before 11:59 PM IST on 27 November 2026 and let our export coordinators handle your registration, paperwork and logistics.
          </p>

          <div className="inline-block px-5 py-2.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 mb-8 shadow-lg shadow-emerald-950/40">
            <span className="text-xs sm:text-sm md:text-base font-bold text-emerald-300">
              Friday, 27 November 2026 | Services from ₹1,499 | Up to 70% OFF
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-base flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Claim on WhatsApp</span>
            </a>

            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-500/60 transition-all text-sm font-medium text-neutral-200 hover:text-white"
            >
              <FaDownload className="text-emerald-400" />
              <span>Download Sale Brochure</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
