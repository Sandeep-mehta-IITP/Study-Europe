"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CustomCountrySelect from "@/components/CustomCountrySelect";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in studying in Europe. Can you provide more information about your consultancy services?"
    );
    window.open(`https://wa.me/7976712864?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", country: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const faqs = [
    {
      question: "What documents do I need to apply?",
      answer:
        "You'll typically need your academic transcripts, passport, language proficiency test scores (IELTS/TOEFL), and a Statement of Purpose. Specific requirements vary by country and university.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "Visa processing times vary by country. Generally, it takes 4-12 weeks. We recommend starting the process at least 3-4 months before your intended start date.",
    },
    {
      question: "Can you help with scholarship applications?",
      answer:
        "Yes! We provide guidance on various scholarships including Erasmus+, DAAD, and university-specific scholarships. Our team will help you identify and apply for scholarships you're eligible for.",
    },
    {
      question: "What is your success rate?",
      answer:
        "We have a 98% success rate in helping students get admitted to their chosen universities. Our personalized approach and expert guidance ensure the best outcomes.",
    },
    {
      question: "Do you offer post-arrival support?",
      answer:
        "We provide comprehensive post-arrival support including local registration, bank account setup, accommodation assistance, and cultural orientation.",
    },
    {
      question: "How much does your consultation cost?",
      answer:
        "We offer a free initial consultation to understand your goals and requirements. Detailed pricing for our services will be discussed during this consultation.",
    },
    {
      question: "Can I study part-time while working?",
      answer:
        "Most European countries allow international students to work part-time (typically 15-20 hours per week during studies). We'll provide detailed information based on your chosen country.",
    },
    {
      question: "What if my application gets rejected?",
      answer:
        "We provide comprehensive support throughout the application process to minimize rejection chances. If needed, we help with appeals or alternative university options.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch with our education experts for personalized guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-accent" />
                <h3 className="font-bold">Call Us</h3>
              </div>
              <p className="text-muted-foreground mb-2">+91 7976712864</p>
              <a
                href="tel:+917976712864"
                className="text-accent hover:underline text-sm"
              >
                Call Now
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <FaWhatsapp className="w-6 h-6 text-green-500 transition-transform duration-300 group-hover:scale-125" />
                <h3 className="font-bold">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground mb-2">+91 7976712864</p>
              <Button
                onClick={handleWhatsApp}
                variant="link"
                className="text-green-500 hover:text-green-700/80 p-0 h-auto mt-2 cursor-pointer"
              >
                Message on WhatsApp →
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="font-bold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-2">info@europestudy.com</p>
              <a
                href="mailto:info@europestudy.com"
                className="text-accent hover:underline text-sm"
              >
                Send Email
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Send us a Message
            </h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold">
                  Thank you for your message!
                </p>
                <p className="text-green-700 text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    required
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
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your study goals..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Education Street
                      <br />
                      European City, EC 12345
                      <br />
                      Europe
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-muted rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-muted rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-muted rounded-lg transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">
            Our team is here to help. Reach out to us through any of the contact
            methods above.
          </p>
          <a
            href="tel:+12345678900"
            className="inline-block bg-primary-foreground text-primary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Call Us Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
