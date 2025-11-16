"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] sm:h-[85vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Hero.jpg"
          alt="New India Export"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <div className="mx-auto max-w-2xl p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
            <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
              New India Export
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mt-4">
              Exporting India’s agricultural excellence to the world.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              type="button"
              className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg"
            >
              Book Your Shipment
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* BOOKING MODAL */}
      <BookingModal open={open} setOpen={setOpen} />
    </>
  );
}
