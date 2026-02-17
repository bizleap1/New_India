"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDownload, FaChevronRight, FaStar, FaChevronDown, FaTimes } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";



import { useState, useEffect } from "react";

export default function EventPage() {
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  // Payment status and order details
  const [paymentStatus, setPaymentStatus] = useState(null); // 'SUCCESS', 'FAILED', or null
  const [orderDetails, setOrderDetails] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all details.");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to proceed.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: "1.00", // Test amount
          customerName: formData.name,
          customerEmail: formData.email,
          customerMobile: formData.mobile
        }),
      });

      const data = await response.json();
      if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert("Payment initiation failed. Please try again or contact support.");
      }
    } catch (error) {
      alert("Unable to reach payment gateway. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch order details from backend
  const fetchOrderDetails = async (merchantTxnNo) => {
    try {
      const response = await fetch(`http://localhost:5001/api/payment/order/${merchantTxnNo}`);
      const data = await response.json();

      if (data.success) {
        setOrderDetails(data.order);
        setPaymentStatus(data.order.status);
        setShowPaymentModal(true);
      } else {
        // If order not found, we don't log to console to keep user experience clean
        // The paymentStatus is already set from URL params if applicable
        if (!paymentStatus) setPaymentStatus('FAILED');
        setShowPaymentModal(true);
      }
    } catch (error) {
      // Handle network errors silently in production-like environments
      if (!paymentStatus) setPaymentStatus('FAILED');
      setShowPaymentModal(true);
    }
  };

  // Check URL parameters for payment status on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const payment = urlParams.get('payment');
    const status = urlParams.get('status');
    const orderId = urlParams.get('orderId');

    if (payment || status || orderId) {
      if (payment === 'success' || status === 'SUCCESS') {
        setPaymentStatus('SUCCESS');
        setShowPaymentModal(true);
      } else if (payment === 'failed' || status === 'FAILED') {
        setPaymentStatus('FAILED');
        setShowPaymentModal(true);
      }

      if (orderId) {
        // Fetch complete order details if we have an ID
        fetchOrderDetails(orderId);
      }

      // Clean up URL to keep it pretty
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-black text-neutral-100">

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
              New India Export X World Trade Virtual Summit 2026
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] lg:leading-[0.95] mb-6 lg:mb-8 tracking-tight">
              World Trade Virtual Summit 2026
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 lg:mb-10 max-w-2xl font-light leading-relaxed">
              India's premier virtual leadership summit where technology meets global trade excellence for the future-ready legacy exporters.
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-neutral-300 mb-8 lg:mb-12">
              {[
                { icon: <FaClock />, label: "10:00 AM – 5:00 PM", sub: "Full Day Virtual Immersion" },
                { icon: <FaCalendarAlt />, label: "27 February 2026", sub: "Friday" },
                { icon: <FaMapMarkerAlt />, label: "Online Session", sub: "Virtual Access" }
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
                onClick={handleRegisterClick}
                className="group px-6 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-medium flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer"
              >
                Reserve Your Seat
                <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/Blue and Black Modern Business Conference Flyer (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-10 lg:py-5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/50 transition-all"
              >
                <FaDownload className="text-emerald-400" />
                Summit Flyer
              </a>

              <a
                href="/Brown White Modern Minimalist Furniture Bi-Fold Brochure (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 lg:px-10 lg:py-5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-800/50 transition-all"
              >
                <FaDownload className="text-emerald-400" />
                World Trade Virtual Summit 2026
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* HIGHLIGHTS MARQUEE - Hide on mobile, show on tablet+ */}
      <section className="py-8 lg:py-16 border-y border-neutral-900 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-8 lg:gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 lg:gap-16 text-sm lg:text-2xl font-light">
                <span className="text-emerald-400/80 text-lg lg:text-xl">✦</span>
                <span className="text-neutral-300">World Trade Summit 2026</span>
                <span className="text-emerald-400/80 text-lg lg:text-xl">✦</span>
                <span className="text-neutral-300">Digital‑First Trade</span>
                <span className="text-emerald-400/80 text-lg lg:text-xl">✦</span>
                <span className="text-neutral-300">Industry Experts</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT EVENT */}
      <section className="py-20 lg:py-40 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-4 lg:mb-6">About the Summit</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-6 lg:mb-10">
                  Mastering Global Trade
                  <span className="block text-emerald-400">Virtually & Beyond</span>
                </h2>

                <div className="space-y-4 lg:space-y-6 text-neutral-300 text-sm lg:text-lg leading-relaxed">
                  <p>
                    New India Export presents the World Trade Virtual Summit 2026,
                    an exclusive online session on Friday, 27th February 2026.
                  </p>
                  <p>
                    This landmark digital gathering unites industry leaders, innovators, and visionaries
                    to explore the future of international commerce through digital-first strategies,
                    compliance frameworks and global market intelligence.
                  </p>
                </div>

                <div className="mt-8 lg:mt-12">
                  {/* MOBILE GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
                    {[
                      { title: "Industry", subtitle: "Leading Experts" },
                      { title: "Multiple", subtitle: "Insightful Sessions" },
                      { title: "First", subtitle: "Of Its Kind in India" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center"
                      >
                        <div className="text-xl font-serif text-emerald-400">
                          {item.title}
                        </div>
                        <div className="text-xs text-neutral-400 mt-1">
                          {item.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP INLINE STATS */}
                  <div className="hidden lg:flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-serif text-emerald-400">
                        Industry
                      </div>
                      <div className="text-sm text-neutral-500 mt-2">
                        Leading Experts
                      </div>
                    </div>

                    <div className="h-12 w-px bg-neutral-800" />

                    <div className="text-center">
                      <div className="text-4xl font-serif text-emerald-400">
                        Multiple
                      </div>
                      <div className="text-sm text-neutral-500 mt-2">
                        Insightful Sessions
                      </div>
                    </div>

                    <div className="h-12 w-px bg-neutral-800" />

                    <div className="text-center">
                      <div className="text-4xl font-serif text-emerald-400">
                        First
                      </div>
                      <div className="text-sm text-neutral-500 mt-2">
                        Of Its Kind in India
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full order-first lg:order-last mb-8 lg:mb-0"
            >
              <div className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">

                <Image
                  src="/event2.webp"
                  alt="World Trade Virtual Summit 2026"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dark gradient overlay for premium contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              </div>


              {/* Floating Card - Hide on mobile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden lg:block absolute -bottom-6 -right-6 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 max-w-xs backdrop-blur-sm"
              >
                <FiCheckCircle className="text-emerald-400 text-2xl mb-3" />
                <p className="text-sm text-neutral-300">Real‑time digital trade simulations and live case studies</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section className="py-20 lg:py-40 bg-gradient-to-b from-black to-neutral-950 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 lg:mb-20"
          >
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 lg:mb-4">Key Insights</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-4 lg:mb-6">What You'll Learn</h2>
            <p className="text-sm lg:text-xl text-neutral-400 max-w-3xl mx-auto px-4">
              Master the intersection of technology and global trade through focused virtual sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: "International Trade & Global Markets",
                desc: "Key inputs for navigating the complexities of the current global landscape",
                color: "from-emerald-900/20 to-emerald-950/10"
              },
              {
                title: "Digital-First Trade",
                desc: "Making international trade virtually easy and streamlined",
                color: "from-blue-900/20 to-blue-950/10"
              },
              {
                title: "Selected Products & Markets",
                desc: "Smart use of selected products to trade effectively in target countries",
                color: "from-purple-900/20 to-purple-950/10"
              },
              {
                title: "Advanced Logistics Tracking",
                desc: "Comprehensive trade tracking and logistics management solutions",
                color: "from-amber-900/20 to-amber-950/10"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-neutral-800 bg-gradient-to-br ${item.color} backdrop-blur-sm hover:border-emerald-800/50 transition-all duration-300`}
              >
                <div className="text-2xl lg:text-4xl mb-4 lg:mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {i + 1}.
                </div>
                <h3 className="text-lg lg:text-2xl font-serif mb-3 lg:mb-4">{item.title}</h3>
                <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed">{item.desc}</p>

                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaChevronRight className="text-emerald-400 text-sm lg:text-base" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20 lg:py-40 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 lg:mb-20"
          >
            <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 lg:mb-4">
              Summit Experience
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-4 lg:mb-6">
              What This Summit Will Do For You
            </h2>
            <p className="max-w-3xl mx-auto text-neutral-400 text-sm sm:text-base lg:text-lg">
              A carefully curated, high-impact experience designed to give exporters,
              importers, manufacturers and entrepreneurs clarity, confidence and a
              future-ready trade mindset.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-neutral-800 to-transparent" />

            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  title: "Paperless Customs & Digital Documentation",
                  desc: "Transitioning to a fully electronic documentation system for faster processing and reduced errors."
                },
                {
                  title: "Technology-Driven Export & Import Solutions",
                  desc: "Leveraging the latest software and platforms to manage your global trade operations effortlessly."
                },
                {
                  title: "Reducing Trade Costs",
                  desc: "Insights on automation, compliance, and transparency to achieve faster clearances and lower operational expenses."
                },
                {
                  title: "Future Trends in Global Trade",
                  desc: "Exploring what's next for exports and imports in an increasingly connected and digital-first world."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-4 lg:gap-8 group"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-2xl font-serif mb-1 lg:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* LOCATION */}
      <section className="py-20 lg:py-20 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-xs lg:text-sm tracking-widest uppercase text-emerald-400 mb-3 lg:mb-4">Session Type</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-6 lg:mb-10">World Trade Virtual Summit</h2>

              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h3 className="text-lg lg:text-xl font-serif mb-2 lg:mb-3">Virtual Experience</h3>
                  <p className="text-neutral-300 leading-relaxed text-sm lg:text-base">
                    Join from anywhere in the world.<br />
                    Access link will be shared with registered participants.
                  </p>
                </div>

                <div className="p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800">
                  <div className="flex items-center gap-3 mb-3 lg:mb-4">
                    <div className="p-1.5 lg:p-2 rounded-lg bg-emerald-900/30">
                      <FaStar className="text-emerald-400 text-sm lg:text-base" />
                    </div>
                    <div className="font-medium text-sm lg:text-base">What to Expect</div>
                  </div>

                  <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-neutral-400">
                    <li className="flex items-center gap-2 lg:gap-3">
                      <FiCheckCircle className="text-emerald-400 text-sm lg:text-base" />
                      Professionally curated conference environment
                    </li>
                    <li className="flex items-center gap-2 lg:gap-3">
                      <FiCheckCircle className="text-emerald-400 text-sm lg:text-base" />
                      Structured sessions and focused discussions
                    </li>
                    <li className="flex items-center gap-2 lg:gap-3">
                      <FiCheckCircle className="text-emerald-400 text-sm lg:text-base" />
                      Networking-friendly venue setup
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full order-first lg:order-last mb-8 lg:mb-0"
            >
              <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-emerald-400 text-5xl mb-6 flex justify-center">
                    <FaCalendarAlt />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Virtual Summit Access</h3>
                  <p className="text-neutral-400 max-w-sm mx-auto">
                    This is a digital-first event. A secure meeting link will be emailed to you 24 hours before the session starts.
                  </p>
                </div>
              </div>

              {/* Floating Card - Hide on mobile */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden lg:block absolute -top-6 -right-6 bg-gradient-to-br from-black to-neutral-900 border border-neutral-800 rounded-2xl p-4"
              >
                <div className="text-sm text-emerald-400">Global Virtual Summit</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* FINAL CTA */}
      <section id="register" className="relative py-20 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/10 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-emerald-900/30 to-emerald-950/30 border border-emerald-800/30 backdrop-blur-sm mb-6 lg:mb-8">
              <FaStar className="text-emerald-400 text-xs" />
              <span className="text-xs lg:text-sm tracking-widest uppercase text-emerald-300">Limited Seats</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-6 lg:mb-10 leading-tight">
              Secure Your Place at the
              <span className="block mt-2 lg:mt-4 bg-gradient-to-r from-neutral-100 via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                World Trade Virtual Summit
              </span>
            </h2>

            <p className="text-sm lg:text-xl text-neutral-300 mb-8 lg:mb-12 max-w-2xl mx-auto">
              Join industry pioneers and gain exclusive insights into the future of digital‑first global trade.
            </p>

            <div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-xl">
              <form onSubmit={handlePayment} className="space-y-6 text-left">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  {/* View Terms & Conditions Button */}
                  <div className="mb-6 text-center">
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="px-6 py-3 rounded-xl border border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:bg-neutral-800 hover:border-emerald-600/50 transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                      <FiCheckCircle className="text-emerald-400" />
                      View Terms & Conditions
                    </button>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-neutral-700 bg-black text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-sm text-neutral-300 leading-relaxed">
                        I have read and agree to the{" "}
                        <button
                          type="button"
                          onClick={() => setShowTermsModal(true)}
                          className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
                        >
                          Terms & Conditions
                        </button>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !termsAccepted}
                    className="w-full group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-lg flex items-center justify-center gap-3 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Pay & Register Now"}
                    {!loading && <FaChevronRight className="transition-transform group-hover:translate-x-1" />}
                  </button>
                  <p className="text-xs text-neutral-500 mt-4 flex items-center justify-center gap-2 text-center w-full">
                    <FiCheckCircle className="text-emerald-400" />
                    Secure payment powered by ICICI Bank PGPay
                  </p>
                </div>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 justify-center mt-12">
              <a
                href="/Blue and Black Modern Business Conference Flyer (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 lg:px-12 lg:py-6 rounded-full border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm flex items-center justify-center gap-2 lg:gap-3 hover:border-emerald-800/50 hover:bg-neutral-900/50 transition-all text-sm lg:text-lg"
              >
                <FaDownload className="text-emerald-400 text-sm lg:text-base" />
                <span>Conference Flyer</span>
              </a>

              <a
                href="/Brown White Modern Minimalist Furniture Bi-Fold Brochure (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 lg:px-12 lg:py-6 rounded-full border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm flex items-center justify-center gap-2 lg:gap-3 hover:border-emerald-800/50 hover:bg-neutral-900/50 transition-all text-sm lg:text-lg"
              >
                <FaDownload className="text-emerald-400 text-sm lg:text-base" />
                <span>World Trade Virtual Summit 2026</span>
              </a>
            </div>

            <p className="text-xs lg:text-sm text-neutral-500 mt-8 lg:mt-10">
              Registrations now open — limited seats available
            </p>
          </motion.div>
        </div>
      </section>

      {/* TERMS & CONDITIONS MODAL */}
      {showTermsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setShowTermsModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-b from-neutral-900 to-black rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <FaTimes className="text-neutral-300 text-xl" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-100 mb-4">
                  Terms & Conditions
                </h2>
                <p className="text-lg lg:text-xl text-emerald-400 font-medium">
                  World Trade Summit 2026
                </p>
                <p className="text-sm lg:text-base text-neutral-400 mt-4 max-w-3xl mx-auto leading-relaxed">
                  These Terms and Conditions govern participation in World Trade Summit 2026, organized by New India Export.
                  By registering for the event, participants agree to comply with the following terms.
                </p>
              </div>

              {/* Terms Content */}
              <div className="space-y-8">
                {/* 1. Event Details */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">1</span>
                    Event Details
                  </h3>
                  <div className="pl-11 space-y-2 text-neutral-300 leading-relaxed">
                    <p><strong className="text-neutral-100">Event Name:</strong> World Trade Summit 2026</p>
                    <p><strong className="text-neutral-100">Organizer:</strong> New India Export</p>
                    <p><strong className="text-neutral-100">Date:</strong> 27 February 2026</p>
                    <p><strong className="text-neutral-100">Mode:</strong> Virtual Event</p>
                  </div>
                </div>

                {/* 2. Eligibility */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">2</span>
                    Eligibility for Participation
                  </h3>
                  <div className="pl-11">
                    <p className="text-neutral-300 mb-3">The event is open to:</p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>First-time exporters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Entrepreneurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Manufacturers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Suppliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Exporters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Importers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. Registration & Payment */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">3</span>
                    Registration & Payment Policy
                  </h3>
                  <div className="pl-11 space-y-3 text-neutral-300">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>The registration fee is <strong className="text-neutral-100">₹999</strong> (inclusive of GST)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Payment must be made only through the official website of New India Export</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Payments made through third-party websites, WhatsApp, or unauthorized channels are not accepted or valid</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Registration is confirmed only after successful payment through the official platform</span>
                    </p>
                  </div>
                </div>

                {/* 4. Cancellation & Refund */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">4</span>
                    Cancellation & Refund Policy
                  </h3>
                  <div className="pl-11 space-y-3 text-neutral-300">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>No refunds will be provided under any circumstances, including late joining, absence, or failure to attend the event</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>If the organizer cancels the event on the scheduled date, a new event date will be announced, and the same registration fee will remain valid for the rescheduled event</span>
                    </p>
                  </div>
                </div>

                {/* 5. Event Materials */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">5</span>
                    Event Materials & Certification
                  </h3>
                  <div className="pl-11 text-neutral-300">
                    <p>Participation certificates and event notes will be provided virtually after the event.</p>
                  </div>
                </div>

                {/* 6. Code of Conduct */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">6</span>
                    Code of Conduct & Safety
                  </h3>
                  <div className="pl-11 space-y-3 text-neutral-300">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Participants must maintain professional and respectful behavior throughout the event</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Use of abusive, offensive, or inappropriate language is strictly prohibited</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Any participant violating event rules or engaging in misconduct will be removed from the event without refund</span>
                    </p>
                  </div>
                </div>

                {/* 7. Participation Rules */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">7</span>
                    Participation Rules
                  </h3>
                  <div className="pl-11 space-y-3 text-neutral-300">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Participants must join the event at the scheduled time</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Screen recording, unauthorized recording, or redistribution of event content is strictly prohibited</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>The event will not be repeated once completed</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>If a participant joins late or misses the event, no refund or compensation will be provided</span>
                    </p>
                  </div>
                </div>

                {/* 8. Acceptance */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-serif text-neutral-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/40 text-emerald-400 text-sm font-bold border border-emerald-800/50">8</span>
                    Acceptance of Terms
                  </h3>
                  <div className="pl-11 text-neutral-300">
                    <p>By registering for the World Trade Summit 2026, participants confirm that they have read, understood, and agreed to these Terms and Conditions.</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-8 mt-8 border-t border-neutral-800">
                  <div className="text-center">
                    <p className="text-neutral-400 font-medium mb-2">Organized by:</p>
                    <p className="text-2xl font-serif text-emerald-400">New India Export</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* PAYMENT STATUS MODAL */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-800 p-8 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <FaTimes className="text-neutral-400" />
              </button>

              {/* Status Icon */}
              <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 ${paymentStatus === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                {paymentStatus === 'SUCCESS' ? (
                  <FiCheckCircle className="text-4xl" />
                ) : (
                  <FaTimes className="text-4xl" />
                )}
              </div>

              {/* Status Title */}
              <h2 className="text-2xl lg:text-3xl font-serif text-neutral-100 mb-2">
                {paymentStatus === 'SUCCESS' ? 'Payment Successful!' : 'Payment Failed'}
              </h2>
              <p className="text-neutral-400 mb-8">
                {paymentStatus === 'SUCCESS'
                  ? 'Your registration for World Trade Summit 2026 is confirmed.'
                  : 'There was an issue processing your transaction. Please try again.'}
              </p>

              {/* Transaction Details */}
              {orderDetails && (
                <div className="bg-black/50 rounded-2xl p-6 mb-8 text-left space-y-3 border border-neutral-800">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Transaction ID</span>
                    <span className="text-neutral-200 font-mono">{orderDetails.merchantTxnNo}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Amount Paid</span>
                    <span className="text-neutral-200">₹{orderDetails.amount}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Date</span>
                    <span className="text-neutral-200">
                      {orderDetails.paymentCompletedAt
                        ? new Date(orderDetails.paymentCompletedAt).toLocaleDateString()
                        : new Date().toLocaleDateString()}
                    </span>
                  </div>
                  {orderDetails.paymentDetails?.paymentMode && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-500">Method</span>
                      <span className="text-neutral-200">{orderDetails.paymentDetails.paymentMode}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${paymentStatus === 'SUCCESS'
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-100'
                  }`}
              >
                {paymentStatus === 'SUCCESS' ? 'View My Ticket' : 'Close & Try Again'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
