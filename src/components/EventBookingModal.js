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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all details.");
      return;
    }

    setIsSubmitting(true);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      // 1. Create Razorpay Order in Backend
      const orderRes = await fetch(`${API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 639900, // Workshop price in paise
          customerDetails: {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
          },
          bookingDetails: {
            category: "Workshop",
            subProducts: "Virtual Shipment Workshop (5 Days) - From Homepage",
          }
        }),
      });

      const orderData = await orderRes.json();
      if (!orderData.success) throw new Error("Order creation failed");

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "New India Export",
        description: "Virtual Shipment Workshop (5 Days)",
        order_id: orderData.order.id,
        handler: async function (response) {
          // 3. Verify Payment in Backend
          const verifyRes = await fetch(`${API_URL}/api/payment/verify`, {
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
            alert("Payment Successful! Your seat has been reserved.");
            setOpen(false);
            setFormData({ name: "", email: "", mobile: "" });
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
        modal: {
          ondismiss: function() {
            alert("Payment cancelled.");
            setIsSubmitting(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
        setIsSubmitting(false);
      });
      rzp.open();

    } catch (error) {
      console.error(error);
      alert("Something went wrong during payment initiation.");
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
          className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 p-2 hover:bg-neutral-800 rounded-full text-neutral-400 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-serif text-white mb-2">Reserve Your Seat</h2>
            <p className="text-neutral-400 text-sm mb-8">Virtual Shipment Workshop (5 Days)</p>

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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold text-lg flex items-center justify-center gap-3 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Pay ₹6399"}
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
