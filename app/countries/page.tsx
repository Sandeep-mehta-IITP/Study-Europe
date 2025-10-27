import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { getAllCountries } from "@/lib/countries-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export const metadata = {
  title: "Study in European Countries | European Study Consultancy",
  description:
    "Explore all European countries with detailed information on education systems, universities, visa requirements, and cultural insights.",
};

export default function CountriesPage() {
  const countries = getAllCountries();

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Study in Europe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore all European countries and find your perfect destination for
            higher education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link key={country.id} href={`/countries/${country.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
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
                    <span className="text-sm text-muted-foreground">
                      {country.universities} universities
                    </span>
                  </div>
                  <CardTitle className="text-primary">{country.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {country.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span>{country.languageOfInstruction}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-accent" />
                      <span>{country.tuitionFees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
