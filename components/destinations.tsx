"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { getAllCountries } from "@/lib/countries-data";
import { ReactCountryFlag } from "react-country-flag";

export default function Destinations() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const allCountries = getAllCountries();
  const featuredCountries = allCountries.slice(0, 8);

  const handleWhatsApp = (country: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in studying in ${country}. Can you provide more information?`
    );
    window.open(`https://wa.me/7976712864?text=${message}`, "_blank");
  };

  return (
    <section id="destinations" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore {allCountries.length}+ European countries with world-class
            universities and diverse study programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCountries.map((country) => (
            <Card
              key={country.id}
              className="p-6 bg-secondary border-border hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-pointer"
              onClick={() =>
                setSelectedCountry(
                  selectedCountry === country.id ? null : country.id
                )
              }
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "3em",
                  height: "2em",
                  borderRadius: "4px",
                  marginBottom: "0.75rem",
                }}
                title={country.name}
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {country.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {country.universities} Universities
              </p>
              <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                {country.description}
              </p>

              {selectedCountry === country.id && (
                <div className="flex gap-2">
                  <Link href={`/countries/${country.id}`} className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp(country.name);
                    }}
                    variant="outline"
                    className="border-primary text-primary hover:bg-secondary text-sm"
                  >
                    Chat
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/countries">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-3">
              View All Countries
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
