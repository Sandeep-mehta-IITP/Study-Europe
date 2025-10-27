"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+15551234567";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7976712864";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in studying in Europe. Can you provide more information about your consultancy services?"
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/Hero.png')", // ✅ from /public/Hero.png
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-[0.5px]"></div>

      {/* Optional decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid max-w-2xl mx-auto items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 text-white"
          >
            {/* Tagline (Centered & Visible) */}
            <div className="inline-block px-6 py-2 bg-white/25 backdrop-blur-md rounded-full mx-auto shadow-md">
              <span className="text-sm md:text-base font-semibold text-gray-900 drop-shadow">
                🎓 Your Gateway to European Education
              </span>
            </div>

            {/* Title */}
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl"
            >
              Study in Europe with{" "}
              <span className="text-blue-300">Confidence</span> and Ease
            </h1>

            {/* Description (Centered & Softer for Readability) */}
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Expert guidance for students and parents navigating European
              universities. We make your dream education a reality with trusted
              advice and complete support.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-10 pt-8">
              <Button
                onClick={handleCall}
                className="group flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-semibold tracking-wide">Call Now</span>
                <ArrowRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:cursor-pointer hover:-translate-y-1"
              >
                <FaWhatsapp className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-125" />
                <span className="font-semibold tracking-wide">
                  Chat on WhatsApp
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
