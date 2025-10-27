import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCountryById, getAllCountries } from "@/lib/countries-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Dessert as Passport,
  Users,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    id: country.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);
  if (!country) return {};

  return {
    title: `Study in ${country.name} | European Study Consultancy`,
    description: `Complete guide to studying in ${country.name}. Learn about universities, visa requirements, cost of living, and cultural insights.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <Link
          href="/countries"
          className="flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Countries
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
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
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                {country.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {country.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Universities
                </span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {country.universities}+
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Tuition</span>
              </div>
              <div className="text-sm font-bold text-primary">
                {country.tuitionFees}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Passport className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Visa Type</span>
              </div>
              <div className="text-sm font-bold text-primary">
                {country.visaInfo.type}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Monthly Cost
                </span>
              </div>
              <div className="text-sm font-bold text-primary">
                {country.costOfLiving.monthly}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Education System
            </h2>
            <p className="text-muted-foreground mb-6">
              {country.educationSystem}
            </p>

            <h3 className="text-xl font-bold mb-3 text-primary">
              Language of Instruction
            </h3>
            <p className="text-muted-foreground mb-6">
              {country.languageOfInstruction}
            </p>

            <h3 className="text-xl font-bold mb-3 text-primary">
              Top Universities
            </h3>
            <div className="space-y-3">
              {country.topUniversities.map((uni, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-primary mb-1">{uni.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {uni.ranking}
                    </p>
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm"
                    >
                      Visit Website →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Visa Information
            </h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Visa Type
                    </span>
                    <p className="font-bold text-primary">
                      {country.visaInfo.type}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Processing Time
                    </span>
                    <p className="font-bold text-primary">
                      {country.visaInfo.processingTime}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Visa Cost
                    </span>
                    <p className="font-bold text-primary">
                      {country.visaInfo.cost}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold mb-3 text-primary">
              Required Documents
            </h3>
            <ul className="space-y-2 mb-6">
              {country.visaInfo.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-primary">
              Cost of Living
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Accommodation</span>
                <span className="font-bold text-primary">
                  {country.costOfLiving.accommodation}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Food</span>
                <span className="font-bold text-primary">
                  {country.costOfLiving.food}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transport</span>
                <span className="font-bold text-primary">
                  {country.costOfLiving.transport}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="font-bold">Monthly Total</span>
                <span className="font-bold text-primary">
                  {country.costOfLiving.monthly}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Cultural Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Traditions & Festivals</h3>
              <div className="flex flex-wrap gap-2">
                {country.culturalInsights.traditions.map((tradition, index) => (
                  <Badge key={index} variant="secondary">
                    {tradition}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3">Social Etiquette</h3>
              <div className="flex flex-wrap gap-2">
                {country.culturalInsights.etiquette.map((etiquette, index) => (
                  <Badge key={index} variant="secondary">
                    {etiquette}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">
            {country.culturalInsights.highlights}
          </p>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Study in {country.name}?
          </h2>
          <p className="mb-6">
            Contact us for personalized guidance on studying in {country.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-primary-foreground text-primary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
