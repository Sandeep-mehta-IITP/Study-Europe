export interface Scholarship {
  id: string
  name: string
  provider: string
  amount: string
  fieldOfStudy: string[]
  countries: string[]
  eligibility: string
  deadline: string
  description: string
  website: string
}

export const scholarshipsData: Scholarship[] = [
  {
    id: "erasmus-plus",
    name: "Erasmus+ Scholarship",
    provider: "European Union",
    amount: "€200-400/month",
    fieldOfStudy: ["All fields"],
    countries: ["All European countries"],
    eligibility: "EU citizens and eligible partner countries",
    deadline: "Varies by institution",
    description:
      "The Erasmus+ program provides funding for students to study abroad in Europe. Covers tuition fees, living expenses, and travel costs.",
    website: "https://erasmus-plus.ec.europa.eu",
  },
  {
    id: "daad",
    name: "DAAD Scholarships",
    provider: "German Academic Exchange Service",
    amount: "€934/month",
    fieldOfStudy: ["All fields"],
    countries: ["Germany"],
    eligibility: "International students with bachelor's degree",
    deadline: "December 31",
    description:
      "DAAD offers scholarships for postgraduate studies in Germany. One of the world's largest scholarship programs.",
    website: "https://www.daad.de",
  },
  {
    id: "chevening",
    name: "Chevening Scholarships",
    provider: "UK Foreign Office",
    amount: "Full tuition + living expenses",
    fieldOfStudy: ["All fields"],
    countries: ["United Kingdom"],
    eligibility: "Professionals with 3+ years work experience",
    deadline: "November 1",
    description: "Prestigious UK government scholarships for outstanding professionals from around the world.",
    website: "https://www.chevening.org",
  },
  {
    id: "masters-scholarships-france",
    name: "Master's Scholarships France",
    provider: "French Government",
    amount: "€1,000-1,500/month",
    fieldOfStudy: ["All fields"],
    countries: ["France"],
    eligibility: "International students pursuing master's degrees",
    deadline: "January 15",
    description: "French government scholarships for international students pursuing master's degrees in France.",
    website: "https://www.campusfrance.org",
  },
  {
    id: "amsterdam-excellence",
    name: "Amsterdam Excellence Scholarship",
    provider: "University of Amsterdam",
    amount: "€6,000-25,000",
    fieldOfStudy: ["All fields"],
    countries: ["Netherlands"],
    eligibility: "Outstanding international students",
    deadline: "January 31",
    description:
      "Merit-based scholarship for excellent international students pursuing master's programs at University of Amsterdam.",
    website: "https://www.uva.nl",
  },
  {
    id: "barcelona-scholarship",
    name: "Barcelona Scholarship Program",
    provider: "University of Barcelona",
    amount: "€5,000-15,000",
    fieldOfStudy: ["Engineering", "Science", "Business"],
    countries: ["Spain"],
    eligibility: "International students with strong academic records",
    deadline: "March 15",
    description:
      "Scholarships for international students pursuing undergraduate and postgraduate programs at University of Barcelona.",
    website: "https://www.ub.edu",
  },
  {
    id: "kth-scholarship",
    name: "KTH Scholarship",
    provider: "Royal Institute of Technology",
    amount: "Full tuition + living expenses",
    fieldOfStudy: ["Engineering", "Technology", "Science"],
    countries: ["Sweden"],
    eligibility: "Outstanding international students",
    deadline: "January 15",
    description:
      "Merit-based scholarships for excellent international students pursuing master's programs in engineering and technology.",
    website: "https://www.kth.se",
  },
  {
    id: "politecnico-scholarship",
    name: "Politecnico di Milano Scholarship",
    provider: "Politecnico di Milano",
    amount: "€5,000-12,000",
    fieldOfStudy: ["Engineering", "Architecture", "Design"],
    countries: ["Italy"],
    eligibility: "International students with strong academic records",
    deadline: "April 30",
    description: "Scholarships for international students pursuing engineering, architecture, and design programs.",
    website: "https://www.polimi.it",
  },
  {
    id: "eth-scholarship",
    name: "ETH Zurich Excellence Scholarship",
    provider: "ETH Zurich",
    amount: "CHF 15,000-30,000",
    fieldOfStudy: ["Engineering", "Science", "Technology"],
    countries: ["Switzerland"],
    eligibility: "Outstanding international students",
    deadline: "December 15",
    description:
      "Prestigious scholarships for excellent international students pursuing master's programs at ETH Zurich.",
    website: "https://www.ethz.ch",
  },
  {
    id: "warsaw-scholarship",
    name: "University of Warsaw Scholarship",
    provider: "University of Warsaw",
    amount: "€2,000-5,000",
    fieldOfStudy: ["All fields"],
    countries: ["Poland"],
    eligibility: "International students with good academic records",
    deadline: "May 31",
    description:
      "Scholarships for international students pursuing undergraduate and postgraduate programs at University of Warsaw.",
    website: "https://www.uw.edu.pl",
  },
]

export function getScholarshipsByField(field: string): Scholarship[] {
  if (field === "all") return scholarshipsData
  return scholarshipsData.filter((s) => s.fieldOfStudy.includes(field) || s.fieldOfStudy.includes("All fields"))
}

export function getUniqueFields(): string[] {
  const fields = new Set<string>()
  scholarshipsData.forEach((s) => {
    s.fieldOfStudy.forEach((f) => {
      if (f !== "All fields") fields.add(f)
    })
  })
  return Array.from(fields).sort()
}

export function getAllScholarships(): Scholarship[] {
  return scholarshipsData
}
