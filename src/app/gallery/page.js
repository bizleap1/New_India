"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const galleryItems = [
    { type: "video", src: "/gallery-video.mp4", poster: "/gallery-video-thumb.jpg", title: "New India Export Event Highlights" },
    { type: "image", src: "/f1.jpg" },
    { type: "image", src: "/gallery/DelhiIITF.jpg" },
    { type: "image", src: "/gallery/dgft.jpg" },
    { type: "image", src: "/gallery/FarmVisit.jpg" },
    { type: "image", src: "/gallery/GulfFood.jpg" },
    { type: "image", src: "/gallery/ICARYavatmal.jpg" },
    { type: "image", src: "/gallery/ICDMihan.jpg" },
    { type: "image", src: "/gallery/MCED.jpg" },
    { type: "image", src: "/gallery/ODOP.jpg" },
    { type: "image", src: "/gallery/PuneAwards.jpg" },
    { type: "image", src: "/gallery/SaudiArabia.jpg" },
    { type: "image", src: "/gallery/Spain.jpg" },
    { type: "image", src: "/gallery/WTC2023.jpg" },
    { type: "image", src: "/f2.jpg" },
    { type: "image", src: "/f3.jpg" },
    { type: "image", src: "/f4.jpg" },
    { type: "image", src: "/f5.jpg" },
    { type: "image", src: "/f6.jpg" },
    { type: "image", src: "/f7.jpg" },
    { type: "image", src: "/f8.jpg" },
    { type: "image", src: "/f9.jpg" },
    { type: "image", src: "/f10.jpg" },
    { type: "image", src: "/f11.jpg" },
    { type: "image", src: "/f12.jpg" },
    { type: "image", src: "/f.jpg" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#fdf3e6]">
      {/* ==== HEADER SECTION ==== */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/Hero.jpg"
          alt="Gallery Header"
          fill
          priority
          quality={100}
          className="object-cover brightness-75 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 text-white px-4 mt-16 sm:mt-20">
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-[#16a34a] mx-auto mb-3"></div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-3 tracking-tight text-[#ffffff]">
              Gallery
            </h1>
            <div className="w-20 h-1 bg-[#16a34a] mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-white text-base sm:text-lg font-light tracking-wide">
            A glimpse into our vibrant collection, event highlights, and global trade delegations
          </p>
        </div>
      </section>

      {/* ==== MASONRY GALLERY ==== */}
      <section className="w-full py-12 px-2 sm:px-8 bg-[#fdf3e6]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4 space-y-2 sm:space-y-4 max-w-6xl mx-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.4) }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid"
            >
              {item.type === "video" ? (
                <div className="relative group">
                  <video
                    src={item.src}
                    poster={item.poster}
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300 shadow-md border border-amber-900/10"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1.5 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Featured Event
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`Gallery Image ${i + 1}`}
                  width={900}
                  height={900}
                  quality={90}
                  className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
