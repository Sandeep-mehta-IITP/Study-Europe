"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getAllScholarships, getScholarshipsByField, getUniqueFields } from "@/lib/scholarships-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, DollarSign } from "lucide-react"

export default function ScholarshipsPage() {
  const [selectedField, setSelectedField] = useState("all")
  const fields = getUniqueFields()
  const scholarships = selectedField === "all" ? getAllScholarships() : getScholarshipsByField(selectedField)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Scholarship Finder</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover scholarships available for studying in Europe based on your field of study
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Field of Study</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedField("all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedField === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              All Fields
            </button>
            {fields.map((field) => (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedField === field
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {scholarships.map((scholarship) => (
            <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-primary">{scholarship.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{scholarship.provider}</p>
                  </div>
                  <Badge variant="secondary">{scholarship.amount}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{scholarship.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Eligibility:</span>
                      <p className="text-muted-foreground">{scholarship.eligibility}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Deadline:</span>
                      <p className="text-muted-foreground">{scholarship.deadline}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Countries:</span>
                      <p className="text-muted-foreground">{scholarship.countries.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={scholarship.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-semibold"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {scholarships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No scholarships found for this field of study.</p>
          </div>
        )}

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Need Help Finding the Right Scholarship?</h2>
          <p className="text-muted-foreground mb-6">
            Our education experts can help you identify and apply for scholarships you're eligible for.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us for Guidance
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
