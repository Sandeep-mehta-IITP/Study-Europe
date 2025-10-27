"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { getAllCountries } from "@/lib/countries-data";
import { FaWhatsapp } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import CustomCountrySelect from "./CustomCountrySelect";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const countries = getAllCountries();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
    const newInquiry = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    inquiries.push(newInquiry);
    localStorage.setItem("inquiries", JSON.stringify(inquiries));

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your European education journey? Contact us today
                for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 7976712864</p>
                  <Button
                    onClick={handleCall}
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0 h-auto mt-2"
                  >
                    Call Now →
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <FaWhatsapp className="w-6 h-6 text-green-500 transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 7976712864</p>
                  <Button
                    onClick={handleWhatsApp}
                    variant="link"
                    className="text-green-500 hover:text-green-700/80 p-0 h-auto mt-2 cursor-pointer"
                  >
                    Message on WhatsApp →
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@europeeducation.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-secondary border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your inquiry has been received. We'll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+44 7911 123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Country of Interest
                  </label>
                  <CustomCountrySelect
                    value={formData.country}
                    onChange={(val: string) =>
                      setFormData((prev) => ({ ...prev, country: val }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your educational goals..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold text-base"
                >
                  Book Free Consultation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
