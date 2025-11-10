"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Hero() {
  const fontFamily =
    "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  return (
    <>
      {/* Load Font */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative h-[55vh] sm:h-[70vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero.jpg"
          alt="New India Export"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content with blur backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <div
            className="mx-auto max-w-2xl rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <h1
              className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg"
              style={{
                fontFamily,
                letterSpacing: "-0.02em",
              }}
            >
              New India Export
            </h1>

            <p
              className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily, opacity: 0.9 }}
            >
              Exporting India’s rich agricultural heritage to the world — delivering quality, trust, and excellence.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              style={{ fontFamily }}
            >
              Explore Products
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
