"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function EventBookingModal({ open, setOpen }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all details.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 0. Ensure Razorpay script is loaded
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load Razorpay SDK");

      // 1. Create Razorpay Order via Next.js API route
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 149900, // Workshop price in paise
          customerDetails: {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
          },
          bookingDetails: {
            category: "Workshop",
            subProducts: "AI Driven Export Strategies",
          }
        }),
      });

      const order = await orderRes.json();
      if (!order.id) throw new Error(order.detail || order.error || "Order creation failed");

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_Sk6wplrNSRrt1d",
        amount: order.amount,
        currency: order.currency,
        name: "New India Export",
        description: "AI Driven Export Strategies",
        order_id: order.id,
        handler: async function (response) {
          // 3. Verify Payment via Next.js API route
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            // Send email
            await fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
              }),
            });

            alert("Thank you for registering! Your registration has been received successfully. Our team will contact you shortly.");
            setOpen(false);
            setFormData({ name: "", email: "", mobile: "" });
            setAgreed(false);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#10b981",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
        setIsSubmitting(false);
      });
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment error: " + (error.message || "Something went wrong."));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 p-2 hover:bg-neutral-800 rounded-full text-neutral-400 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-serif text-white mb-2">Reserve Your Seat</h2>
            <p className="text-neutral-400 text-sm mb-8">AI Driven Export Strategies</p>

            <form onSubmit={handlePayment} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 outline-none text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 outline-none text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 focus:border-emerald-500 outline-none text-white transition-all"
                />
              </div>

              <div className="border-t border-neutral-800 pt-5 mt-2">
                <h3 className="text-sm font-serif text-white mb-2">Terms & Conditions</h3>
                <div className="text-xs text-neutral-400 space-y-2 h-32 overflow-y-auto pr-2">
                  <p>1. Registration will be confirmed only after successful payment.</p>
                  <p>2. Once the payment is made, it is non-refundable and non-transferable.</p>
                  <p>3. Participants must follow all programme rules, instructions, and schedules announced by the organizers.</p>
                  <p>4. Late entry may not be permitted after the programme has started.</p>
                  <p>5. Any abusive language, misconduct, violence, or inappropriate behaviour is strictly prohibited.</p>
                  <p>6. New India Export reserves the right to remove any participant violating the programme rules and may take appropriate action if required.</p>
                  <p>7. The organizer reserves the right to make changes to the programme schedule if necessary.</p>
                </div>
                
                <h3 className="text-sm font-serif text-white mt-4 mb-2">Declaration</h3>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                    <input 
                      type="checkbox" 
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="peer appearance-none w-4 h-4 rounded bg-black border border-neutral-700 checked:bg-emerald-500 checked:border-emerald-500 transition-colors"
                    />
                    <svg className="absolute text-black w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                    I have read and understood the Terms & Conditions and agree to abide by them.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className="w-full group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-lg flex items-center justify-center gap-3 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Pay ₹1,499"}
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[10px] text-neutral-500 mt-4 flex items-center justify-center gap-2">
                  <FiCheckCircle className="text-emerald-400" />
                  Secure SSL Encrypted Payment via Razorpay
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
