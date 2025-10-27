"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { getAllCountries } from "@/lib/countries-data"; // list of { name, code }
import { ChevronDown } from "lucide-react";

export default function CustomCountrySelect({ value, onChange }: any) {
  const [open, setOpen] = useState(false);

  const countries = getAllCountries();

  const handleSelect = (countryName: string) => {
    onChange(countryName);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected box */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 bg-background border border-border rounded-lg cursor-pointer"
      >
        <span>
          {value ? (
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode={
                  countries.find((c) => c.name === value)?.code || ""
                }
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              {value}
            </div>
          ) : (
            <span className="text-muted-foreground">Select a country</span>
          )}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground font-bold transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown list */}
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-background border border-border rounded-lg shadow-lg max-h-56 overflow-y-auto">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => handleSelect(country.name)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-muted cursor-pointer"
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
