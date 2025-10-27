"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in studying in Europe. Can you provide more information about your consultancy services?"
    );
    window.open(`https://wa.me/7976712864?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+917976712864";
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                🌍
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">EuroStudy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center font-semibold gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/countries"
              className="text-foreground hover:text-primary transition-colors"
            >
              Countries
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/scholarships"
              className="text-foreground hover:text-primary transition-colors"
            >
              Scholarships
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex gap-3">
            
            <Button
                onClick={handleCall}
                className="group flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <Phone className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-semibold tracking-wide">Call Now</span>
               
              </Button>
            <Button
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:cursor-pointer"
            >
              <FaWhatsapp className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-125" />
              <span className="font-semibold tracking-wide">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/countries"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Countries
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/scholarships"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Scholarships
            </Link>
            <Link
              href="/blog"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full border-primary text-primary bg-transparent gap-2"
              >
                <Phone size={18} />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-primary text-primary-foreground gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
