export interface Country {
  id: string
  name: string
  code: string
  universities: number
  description: string
  educationSystem: string
  tuitionFees: string
  languageOfInstruction: string
  topUniversities: Array<{
    name: string
    ranking: string
    website: string
  }>
  visaInfo: {
    type: string
    processingTime: string
    cost: string
    requirements: string[]
  }
  costOfLiving: {
    accommodation: string
    food: string
    transport: string
    monthly: string
  }
  culturalInsights: {
    traditions: string[]
    etiquette: string[]
    highlights: string
  }
}

export const countriesData: Country[] = [
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    universities: 45,
    description: "World-class engineering and technology programs with low tuition fees",
    educationSystem:
      "Germany offers high-quality education with many public universities offering free or low-cost tuition. The system emphasizes practical learning and research.",
    tuitionFees: "Free to €500/semester at public universities",
    languageOfInstruction: "German and English",
    topUniversities: [
      { name: "Technical University of Munich", ranking: "#1 in Germany", website: "https://www.tum.de" },
      { name: "Heidelberg University", ranking: "#2 in Germany", website: "https://www.uni-heidelberg.de" },
      { name: "University of Berlin", ranking: "#3 in Germany", website: "https://www.fu-berlin.de" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-12 weeks",
      cost: "€75",
      requirements: ["Proof of admission", "Financial proof (€11,208/year)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-600/month",
      food: "€150-250/month",
      transport: "€50-100/month",
      monthly: "€800-1,200/month",
    },
    culturalInsights: {
      traditions: ["Oktoberfest", "Christmas markets", "Beer culture"],
      etiquette: ["Punctuality is highly valued", "Direct communication", "Respect for privacy"],
      highlights:
        "Germany is known for its engineering excellence, rich history, and vibrant cultural scene. Students enjoy excellent public transport and a high quality of life.",
    },
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    universities: 50,
    description: "Affordable education with world-renowned universities and rich cultural heritage",
    educationSystem:
      "France offers affordable education with strong emphasis on arts, humanities, and sciences. Public universities charge minimal tuition for EU and international students.",
    tuitionFees: "€200-400/year for EU students, €2,000-4,000 for non-EU",
    languageOfInstruction: "French and English",
    topUniversities: [
      { name: "Sorbonne University", ranking: "#1 in France", website: "https://www.sorbonne-universite.fr" },
      { name: "PSL University", ranking: "#2 in France", website: "https://www.psl.eu" },
      {
        name: "University of Paris-Saclay",
        ranking: "#3 in France",
        website: "https://www.universite-paris-saclay.fr",
      },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€99",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€400-700/month",
      food: "€200-300/month",
      transport: "€30-50/month",
      monthly: "€900-1,300/month",
    },
    culturalInsights: {
      traditions: ["Bastille Day", "Wine culture", "Café society"],
      etiquette: ["Formal greetings", "Appreciation for arts and culture", "Respect for French language"],
      highlights:
        "France offers unparalleled cultural experiences with world-class museums, cuisine, and architecture. Paris is a global hub for arts and education.",
    },
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    universities: 35,
    description: "English-taught programs and vibrant student cities with excellent quality of life",
    educationSystem:
      "The Netherlands offers numerous English-taught programs at both bachelor and master levels. The education system is student-centered with emphasis on critical thinking.",
    tuitionFees: "€1,500-2,500/year for non-EU students",
    languageOfInstruction: "Dutch and English",
    topUniversities: [
      { name: "University of Amsterdam", ranking: "#1 in Netherlands", website: "https://www.uva.nl" },
      { name: "University of Utrecht", ranking: "#2 in Netherlands", website: "https://www.uu.nl" },
      { name: "Erasmus University Rotterdam", ranking: "#3 in Netherlands", website: "https://www.eur.nl" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€500-800/month",
      food: "€200-300/month",
      transport: "€100-150/month",
      monthly: "€1,000-1,500/month",
    },
    culturalInsights: {
      traditions: ["King's Day", "Cycling culture", "Tulip season"],
      etiquette: ["Direct communication", "Egalitarian society", "Punctuality"],
      highlights:
        "The Netherlands is known for its progressive society, excellent cycling infrastructure, and vibrant student cities like Amsterdam and Utrecht.",
    },
  },
  {
    id: "spain",
    name: "Spain",
    code: "ES",
    universities: 40,
    description: "Affordable education with Mediterranean lifestyle and rich cultural heritage",
    educationSystem:
      "Spain offers affordable education with a mix of traditional and modern teaching methods. Universities are well-integrated with the local community.",
    tuitionFees: "€1,000-3,000/year for non-EU students",
    languageOfInstruction: "Spanish and English",
    topUniversities: [
      { name: "University of Barcelona", ranking: "#1 in Spain", website: "https://www.ub.edu" },
      { name: "Autonomous University of Madrid", ranking: "#2 in Spain", website: "https://www.uam.es" },
      { name: "University of Valencia", ranking: "#3 in Spain", website: "https://www.uv.es" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€60",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-600/month",
      food: "€150-250/month",
      transport: "€40-60/month",
      monthly: "€700-1,100/month",
    },
    culturalInsights: {
      traditions: ["La Tomatina", "Flamenco", "Siesta culture"],
      etiquette: ["Warm and friendly people", "Importance of family", "Relaxed pace of life"],
      highlights:
        "Spain offers a vibrant lifestyle with excellent weather, rich history, and affordable living. Students enjoy a perfect balance of studies and social life.",
    },
  },
  {
    id: "sweden",
    name: "Sweden",
    code: "SE",
    universities: 30,
    description: "Innovation-driven education with excellent work-life balance and modern facilities",
    educationSystem:
      "Sweden offers innovative education with emphasis on research and practical learning. Universities are equipped with state-of-the-art facilities.",
    tuitionFees: "Free for EU/EEA students, €7,000-15,000/year for non-EU",
    languageOfInstruction: "Swedish and English",
    topUniversities: [
      { name: "Karolinska Institute", ranking: "#1 in Sweden", website: "https://www.ki.se" },
      { name: "Royal Institute of Technology", ranking: "#2 in Sweden", website: "https://www.kth.se" },
      { name: "Uppsala University", ranking: "#3 in Sweden", website: "https://www.uu.se" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "4-6 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€400-700/month",
      food: "€250-350/month",
      transport: "€50-80/month",
      monthly: "€1,000-1,400/month",
    },
    culturalInsights: {
      traditions: ["Midsummer", "Nobel Prize", "Fika (coffee culture)"],
      etiquette: ["Equality and fairness", "Environmental consciousness", "Work-life balance"],
      highlights:
        "Sweden is a leader in innovation and sustainability. Students enjoy excellent quality of life, modern education, and a progressive society.",
    },
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    universities: 38,
    description: "Rich cultural heritage with affordable education and world-class art and history programs",
    educationSystem:
      "Italy offers education deeply rooted in history and culture. Universities provide excellent programs in arts, humanities, and sciences.",
    tuitionFees: "€900-2,500/year for non-EU students",
    languageOfInstruction: "Italian and English",
    topUniversities: [
      { name: "University of Bologna", ranking: "#1 in Italy", website: "https://www.unibo.it" },
      { name: "Sapienza University of Rome", ranking: "#2 in Italy", website: "https://www.uniroma1.it" },
      { name: "Politecnico di Milano", ranking: "#3 in Italy", website: "https://www.polimi.it" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€50",
      requirements: ["Proof of admission", "Financial proof (€500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-500/month",
      food: "€150-250/month",
      transport: "€30-50/month",
      monthly: "€600-1,000/month",
    },
    culturalInsights: {
      traditions: ["Carnival", "Pasta culture", "Art and architecture"],
      etiquette: ["Warm and expressive people", "Importance of family and food", "Appreciation for beauty"],
      highlights:
        "Italy offers unmatched cultural experiences with world-renowned art, architecture, and cuisine. Students immerse themselves in centuries of history.",
    },
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    universities: 25,
    description: "Premium education with world-class research facilities and high quality of life",
    educationSystem:
      "Switzerland offers premium education with strong emphasis on research and innovation. Universities are among the best in the world.",
    tuitionFees: "€500-1,500/year for Swiss and EU students, €2,000-4,000 for non-EU",
    languageOfInstruction: "German, French, Italian, and English",
    topUniversities: [
      { name: "ETH Zurich", ranking: "#1 in Switzerland", website: "https://www.ethz.ch" },
      { name: "University of Zurich", ranking: "#2 in Switzerland", website: "https://www.uzh.ch" },
      { name: "University of Geneva", ranking: "#3 in Switzerland", website: "https://www.unige.ch" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€2,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€600-1,000/month",
      food: "€300-400/month",
      transport: "€80-120/month",
      monthly: "€1,500-2,000/month",
    },
    culturalInsights: {
      traditions: ["Yodeling", "Chocolate culture", "Alpine traditions"],
      etiquette: ["Punctuality and precision", "Respect for privacy", "Environmental consciousness"],
      highlights:
        "Switzerland offers premium education and lifestyle with stunning natural beauty, excellent infrastructure, and high standards of living.",
    },
  },
  {
    id: "poland",
    name: "Poland",
    code: "PL",
    universities: 35,
    description: "Affordable education with growing international programs and vibrant student life",
    educationSystem:
      "Poland offers affordable education with increasing number of English-taught programs. Universities are modernizing rapidly.",
    tuitionFees: "€1,500-3,500/year for non-EU students",
    languageOfInstruction: "Polish and English",
    topUniversities: [
      { name: "University of Warsaw", ranking: "#1 in Poland", website: "https://www.uw.edu.pl" },
      { name: "Jagiellonian University", ranking: "#2 in Poland", website: "https://www.uj.edu.pl" },
      { name: "Warsaw University of Technology", ranking: "#3 in Poland", website: "https://www.pw.edu.pl" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Pierogi culture", "Folk traditions", "Christmas celebrations"],
      etiquette: ["Warm hospitality", "Strong family values", "Respect for history"],
      highlights:
        "Poland offers excellent value for money with affordable living costs, rich history, and increasingly modern universities.",
    },
  },
  {
    id: "belgium",
    name: "Belgium",
    code: "BE",
    universities: 20,
    description: "Affordable education with English-taught programs and central European location",
    educationSystem:
      "Belgium offers affordable education with many English-taught programs. Universities are well-connected with industry.",
    tuitionFees: "€500-2,000/year for non-EU students",
    languageOfInstruction: "Dutch, French, and English",
    topUniversities: [
      { name: "KU Leuven", ranking: "#1 in Belgium", website: "https://www.kuleuven.be" },
      { name: "Ghent University", ranking: "#2 in Belgium", website: "https://www.ugent.be" },
      { name: "Vrije Universiteit Brussel", ranking: "#3 in Belgium", website: "https://www.vub.be" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€800/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€400-700/month",
      food: "€150-250/month",
      transport: "€50-80/month",
      monthly: "€700-1,200/month",
    },
    culturalInsights: {
      traditions: ["Chocolate culture", "Beer culture", "Carnival celebrations"],
      etiquette: ["Multilingual society", "Friendly and welcoming", "Appreciation for quality"],
      highlights:
        "Belgium offers excellent education with affordable costs, central location in Europe, and vibrant multicultural cities.",
    },
  },
  {
    id: "austria",
    name: "Austria",
    code: "AT",
    universities: 22,
    description: "High-quality education with affordable tuition and rich cultural heritage",
    educationSystem:
      "Austria offers high-quality education with emphasis on research and innovation. Public universities offer affordable tuition.",
    tuitionFees: "€0-363/semester for EU students, €726-1,500/semester for non-EU",
    languageOfInstruction: "German and English",
    topUniversities: [
      { name: "University of Vienna", ranking: "#1 in Austria", website: "https://www.univie.ac.at" },
      { name: "Vienna University of Technology", ranking: "#2 in Austria", website: "https://www.tuwien.at" },
      { name: "University of Innsbruck", ranking: "#3 in Austria", website: "https://www.uibk.ac.at" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-600/month",
      food: "€150-250/month",
      transport: "€50-80/month",
      monthly: "€700-1,100/month",
    },
    culturalInsights: {
      traditions: ["Classical music", "Alpine skiing", "Coffee culture"],
      etiquette: ["Formal greetings", "Respect for tradition", "Punctuality"],
      highlights:
        "Austria offers excellent education with affordable costs, stunning Alpine scenery, and rich cultural heritage centered around classical music and arts.",
    },
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    code: "CZ",
    universities: 28,
    description: "Affordable education with English-taught programs and vibrant student cities",
    educationSystem:
      "Czech Republic offers affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Czech and English",
    topUniversities: [
      { name: "Charles University", ranking: "#1 in Czech Republic", website: "https://www.cuni.cz" },
      { name: "Czech Technical University", ranking: "#2 in Czech Republic", website: "https://www.cvut.cz" },
      { name: "Masaryk University", ranking: "#3 in Czech Republic", website: "https://www.muni.cz" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Beer culture", "Christmas markets", "Folk traditions"],
      etiquette: ["Friendly and welcoming", "Appreciation for history", "Casual atmosphere"],
      highlights:
        "Czech Republic offers excellent value for money with affordable living costs, beautiful historic cities, and modern universities.",
    },
  },
  {
    id: "denmark",
    name: "Denmark",
    code: "DK",
    universities: 18,
    description: "High-quality education with excellent work-life balance and modern facilities",
    educationSystem:
      "Denmark offers high-quality education with emphasis on student well-being and practical learning. Universities are modern and innovative.",
    tuitionFees: "Free for EU/EEA students, €6,000-16,000/year for non-EU",
    languageOfInstruction: "Danish and English",
    topUniversities: [
      { name: "University of Copenhagen", ranking: "#1 in Denmark", website: "https://www.ku.dk" },
      { name: "Aarhus University", ranking: "#2 in Denmark", website: "https://www.au.dk" },
      { name: "Technical University of Denmark", ranking: "#3 in Denmark", website: "https://www.dtu.dk" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "4-6 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,200/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€500-800/month",
      food: "€250-350/month",
      transport: "€60-100/month",
      monthly: "€1,000-1,500/month",
    },
    culturalInsights: {
      traditions: ["Hygge culture", "Cycling", "Christmas traditions"],
      etiquette: ["Egalitarian society", "Work-life balance", "Environmental consciousness"],
      highlights:
        "Denmark offers excellent education with strong emphasis on student well-being, sustainable living, and a high quality of life.",
    },
  },
  {
    id: "finland",
    name: "Finland",
    code: "FI",
    universities: 16,
    description: "World-class education system with innovative teaching methods and excellent facilities",
    educationSystem:
      "Finland offers world-class education with innovative teaching methods. Universities are equipped with cutting-edge facilities.",
    tuitionFees: "Free for EU/EEA students, €4,000-18,000/year for non-EU",
    languageOfInstruction: "Finnish and English",
    topUniversities: [
      { name: "University of Helsinki", ranking: "#1 in Finland", website: "https://www.helsinki.fi" },
      { name: "Aalto University", ranking: "#2 in Finland", website: "https://www.aalto.fi" },
      { name: "University of Turku", ranking: "#3 in Finland", website: "https://www.utu.fi" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "4-6 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€400-700/month",
      food: "€250-350/month",
      transport: "€50-80/month",
      monthly: "€1,000-1,400/month",
    },
    culturalInsights: {
      traditions: ["Sauna culture", "Northern lights", "Midsummer celebrations"],
      etiquette: ["Respect for nature", "Quiet and reserved", "Equality"],
      highlights:
        "Finland offers world-class education with innovative teaching methods, stunning natural beauty, and a high quality of life.",
    },
  },
  {
    id: "greece",
    name: "Greece",
    code: "GR",
    universities: 32,
    description: "Affordable education with rich history and Mediterranean lifestyle",
    educationSystem:
      "Greece offers affordable education with strong emphasis on humanities and sciences. Universities are well-integrated with local communities.",
    tuitionFees: "€1,500-3,000/year for non-EU students",
    languageOfInstruction: "Greek and English",
    topUniversities: [
      {
        name: "National and Kapodistrian University of Athens",
        ranking: "#1 in Greece",
        website: "https://www.uoa.gr",
      },
      { name: "Aristotle University of Thessaloniki", ranking: "#2 in Greece", website: "https://www.auth.gr" },
      { name: "University of Crete", ranking: "#3 in Greece", website: "https://www.uoc.gr" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€250-500/month",
      food: "€100-200/month",
      transport: "€30-50/month",
      monthly: "€500-900/month",
    },
    culturalInsights: {
      traditions: ["Ancient history", "Mediterranean cuisine", "Island culture"],
      etiquette: ["Warm and hospitable", "Importance of family", "Relaxed pace of life"],
      highlights:
        "Greece offers affordable education with unmatched historical significance, beautiful islands, and Mediterranean lifestyle.",
    },
  },
  {
    id: "hungary",
    name: "Hungary",
    code: "HU",
    universities: 26,
    description: "Affordable education with English-taught programs and vibrant capital city",
    educationSystem:
      "Hungary offers affordable education with many English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Hungarian and English",
    topUniversities: [
      { name: "Eötvös Loránd University", ranking: "#1 in Hungary", website: "https://www.elte.hu" },
      {
        name: "Budapest University of Technology and Economics",
        ranking: "#2 in Hungary",
        website: "https://www.bme.hu",
      },
      { name: "University of Debrecen", ranking: "#3 in Hungary", website: "https://www.unideb.hu" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Thermal baths", "Folk music", "Wine culture"],
      etiquette: ["Warm and friendly", "Appreciation for culture", "Casual atmosphere"],
      highlights:
        "Hungary offers excellent value for money with affordable living costs, beautiful architecture, and vibrant cultural scene.",
    },
  },
  {
    id: "ireland",
    name: "Ireland",
    code: "IE",
    universities: 27,
    description: "English-speaking country with world-class universities and vibrant student life",
    educationSystem:
      "Ireland offers world-class education with strong emphasis on research and innovation. Universities are well-connected with industry.",
    tuitionFees: "€9,000-25,000/year for non-EU students",
    languageOfInstruction: "English",
    topUniversities: [
      { name: "Trinity College Dublin", ranking: "#1 in Ireland", website: "https://www.tcd.ie" },
      { name: "University College Dublin", ranking: "#2 in Ireland", website: "https://www.ucd.ie" },
      { name: "University College Cork", ranking: "#3 in Ireland", website: "https://www.ucc.ie" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€600-1,000/month",
      food: "€200-300/month",
      transport: "€50-100/month",
      monthly: "€1,000-1,500/month",
    },
    culturalInsights: {
      traditions: ["St. Patrick's Day", "Irish music", "Pub culture"],
      etiquette: ["Friendly and welcoming", "Sense of humor", "Appreciation for storytelling"],
      highlights:
        "Ireland offers world-class education in an English-speaking country with vibrant student life, rich cultural heritage, and strong industry connections.",
    },
  },
  {
    id: "portugal",
    name: "Portugal",
    code: "PT",
    universities: 30,
    description: "Affordable education with excellent weather and growing international programs",
    educationSystem:
      "Portugal offers affordable education with increasing number of English-taught programs. Universities are modernizing rapidly.",
    tuitionFees: "€1,000-3,000/year for non-EU students",
    languageOfInstruction: "Portuguese and English",
    topUniversities: [
      { name: "University of Lisbon", ranking: "#1 in Portugal", website: "https://www.ulisboa.pt" },
      { name: "University of Porto", ranking: "#2 in Portugal", website: "https://www.up.pt" },
      { name: "University of Coimbra", ranking: "#3 in Portugal", website: "https://www.uc.pt" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€700/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-600/month",
      food: "€150-250/month",
      transport: "€40-60/month",
      monthly: "€600-1,000/month",
    },
    culturalInsights: {
      traditions: ["Fado music", "Pastéis de Nata", "Azulejo tiles"],
      etiquette: ["Warm and welcoming", "Appreciation for food and wine", "Relaxed lifestyle"],
      highlights:
        "Portugal offers affordable education with excellent weather, beautiful coastline, and a relaxed Mediterranean lifestyle.",
    },
  },
  {
    id: "romania",
    name: "Romania",
    code: "RO",
    universities: 32,
    description: "Very affordable education with English-taught programs and rich cultural heritage",
    educationSystem:
      "Romania offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Romanian and English",
    topUniversities: [
      { name: "University of Bucharest", ranking: "#1 in Romania", website: "https://www.unibuc.ro" },
      { name: "Babes-Bolyai University", ranking: "#2 in Romania", website: "https://www.ubbcluj.ro" },
      { name: "Politehnica University of Bucharest", ranking: "#3 in Romania", website: "https://www.upb.ro" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€150-300/month",
      food: "€80-150/month",
      transport: "€15-30/month",
      monthly: "€300-600/month",
    },
    culturalInsights: {
      traditions: ["Dracula legend", "Folk traditions", "Orthodox celebrations"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Romania offers excellent value for money with very affordable living costs, rich cultural heritage, and beautiful landscapes.",
    },
  },
  {
    id: "slovakia",
    name: "Slovakia",
    code: "SK",
    universities: 20,
    description: "Affordable education with English-taught programs and beautiful natural scenery",
    educationSystem:
      "Slovakia offers affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Slovak and English",
    topUniversities: [
      { name: "Comenius University", ranking: "#1 in Slovakia", website: "https://www.uniba.sk" },
      { name: "Slovak University of Technology", ranking: "#2 in Slovakia", website: "https://www.stuba.sk" },
      { name: "University of Pavol Jozef Safarik", ranking: "#3 in Slovakia", website: "https://www.upjs.sk" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Folk traditions", "Mountain culture", "Christmas celebrations"],
      etiquette: ["Friendly and welcoming", "Appreciation for nature", "Casual atmosphere"],
      highlights:
        "Slovakia offers excellent value for money with affordable living costs, beautiful mountain scenery, and modern universities.",
    },
  },
  {
    id: "slovenia",
    name: "Slovenia",
    code: "SI",
    universities: 15,
    description: "Affordable education with beautiful Alpine scenery and high quality of life",
    educationSystem:
      "Slovenia offers affordable education with emphasis on research and innovation. Universities are modern and well-equipped.",
    tuitionFees: "€0-3,000/year for non-EU students",
    languageOfInstruction: "Slovenian and English",
    topUniversities: [
      { name: "University of Ljubljana", ranking: "#1 in Slovenia", website: "https://www.uni-lj.si" },
      { name: "University of Maribor", ranking: "#2 in Slovenia", website: "https://www.um.si" },
      { name: "Nova Univerza", ranking: "#3 in Slovenia", website: "https://www.nova-uni.si" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€700/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-500/month",
      food: "€150-250/month",
      transport: "€40-60/month",
      monthly: "€600-1,000/month",
    },
    culturalInsights: {
      traditions: ["Alpine traditions", "Wine culture", "Green tourism"],
      etiquette: ["Friendly and welcoming", "Appreciation for nature", "Environmental consciousness"],
      highlights:
        "Slovenia offers affordable education with stunning Alpine scenery, excellent quality of life, and strong environmental consciousness.",
    },
  },
  {
    id: "norway",
    name: "Norway",
    code: "NO",
    universities: 20,
    description: "Free education for all students with excellent quality of life and stunning nature",
    educationSystem:
      "Norway offers free education for all students regardless of nationality. Universities are world-class with emphasis on research.",
    tuitionFees: "Free for all students",
    languageOfInstruction: "Norwegian and English",
    topUniversities: [
      { name: "University of Oslo", ranking: "#1 in Norway", website: "https://www.uio.no" },
      {
        name: "Norwegian University of Science and Technology",
        ranking: "#2 in Norway",
        website: "https://www.ntnu.no",
      },
      { name: "University of Bergen", ranking: "#3 in Norway", website: "https://www.uib.no" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "4-6 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€600-1,000/month",
      food: "€300-400/month",
      transport: "€80-120/month",
      monthly: "€1,500-2,000/month",
    },
    culturalInsights: {
      traditions: ["Northern lights", "Fjord culture", "Skiing"],
      etiquette: ["Egalitarian society", "Environmental consciousness", "Work-life balance"],
      highlights:
        "Norway offers free education for all students with world-class universities, stunning natural beauty, and excellent quality of life.",
    },
  },
  {
    id: "iceland",
    name: "Iceland",
    code: "IS",
    universities: 8,
    description: "Unique education experience with free tuition and stunning natural landscapes",
    educationSystem:
      "Iceland offers unique education with free tuition for all students. Universities are small but highly specialized.",
    tuitionFees: "Free for all students",
    languageOfInstruction: "Icelandic and English",
    topUniversities: [
      { name: "University of Iceland", ranking: "#1 in Iceland", website: "https://www.hi.is" },
      { name: "Reykjavik University", ranking: "#2 in Iceland", website: "https://www.ru.is" },
      { name: "Iceland University of the Arts", ranking: "#3 in Iceland", website: "https://www.lhi.is" },
    ],
    visaInfo: {
      type: "Residence Permit",
      processingTime: "4-6 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,200/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€600-1,000/month",
      food: "€300-400/month",
      transport: "€60-100/month",
      monthly: "€1,200-1,600/month",
    },
    culturalInsights: {
      traditions: ["Northern lights", "Geothermal culture", "Viking heritage"],
      etiquette: ["Egalitarian society", "Environmental consciousness", "Outdoor lifestyle"],
      highlights:
        "Iceland offers free education with unique natural phenomena, small tight-knit communities, and an outdoor-focused lifestyle.",
    },
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    universities: 120,
    description: "World-class universities with rich academic tradition and global recognition",
    educationSystem:
      "UK offers world-class education with strong emphasis on research and innovation. Universities are globally recognized.",
    tuitionFees: "£9,000-38,000/year for international students",
    languageOfInstruction: "English",
    topUniversities: [
      { name: "University of Oxford", ranking: "#1 in UK", website: "https://www.ox.ac.uk" },
      { name: "University of Cambridge", ranking: "#2 in UK", website: "https://www.cam.ac.uk" },
      { name: "Imperial College London", ranking: "#3 in UK", website: "https://www.imperial.ac.uk" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "3-8 weeks",
      cost: "£719",
      requirements: ["Proof of admission", "Financial proof (£1,334/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "£600-1,200/month",
      food: "£200-400/month",
      transport: "£100-200/month",
      monthly: "£1,200-2,000/month",
    },
    culturalInsights: {
      traditions: ["Royal traditions", "Tea culture", "Football culture"],
      etiquette: ["Formal politeness", "Respect for tradition", "Queuing culture"],
      highlights:
        "UK offers world-class education with globally recognized universities, rich academic tradition, and vibrant multicultural cities.",
    },
  },
  {
    id: "luxembourg",
    name: "Luxembourg",
    code: "LU",
    universities: 3,
    description: "Multilingual education with high quality of life and central European location",
    educationSystem:
      "Luxembourg offers multilingual education with emphasis on research and innovation. Universities are small but highly specialized.",
    tuitionFees: "€400-800/year for EU students, €1,000-2,000 for non-EU",
    languageOfInstruction: "Luxembourgish, French, German, and English",
    topUniversities: [{ name: "University of Luxembourg", ranking: "#1 in Luxembourg", website: "https://www.uni.lu" }],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€1,000/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€500-800/month",
      food: "€200-300/month",
      transport: "€0 (free public transport)",
      monthly: "€800-1,200/month",
    },
    culturalInsights: {
      traditions: ["Multilingual culture", "European hub", "Wine culture"],
      etiquette: ["Multilingual society", "Respect for diversity", "Efficient and organized"],
      highlights:
        "Luxembourg offers high-quality education with multilingual environment, free public transport, and central location in Europe.",
    },
  },
  {
    id: "malta",
    name: "Malta",
    code: "MT",
    universities: 2,
    description: "Mediterranean education with English-taught programs and island lifestyle",
    educationSystem:
      "Malta offers education with English as primary language. Universities are modern and well-equipped.",
    tuitionFees: "€3,000-5,000/year for non-EU students",
    languageOfInstruction: "English and Maltese",
    topUniversities: [{ name: "University of Malta", ranking: "#1 in Malta", website: "https://www.um.edu.mt" }],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€800/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€400-700/month",
      food: "€150-250/month",
      transport: "€26/month (unlimited)",
      monthly: "€600-1,000/month",
    },
    culturalInsights: {
      traditions: ["Mediterranean culture", "Island lifestyle", "Religious traditions"],
      etiquette: ["Warm and friendly", "Importance of family", "Relaxed pace of life"],
      highlights:
        "Malta offers education in English with Mediterranean lifestyle, beautiful beaches, and affordable living costs.",
    },
  },
  {
    id: "cyprus",
    name: "Cyprus",
    code: "CY",
    universities: 4,
    description: "Mediterranean education with English-taught programs and island lifestyle",
    educationSystem:
      "Cyprus offers education with English as primary language. Universities are modern and well-equipped.",
    tuitionFees: "€3,000-6,000/year for non-EU students",
    languageOfInstruction: "English and Greek",
    topUniversities: [
      { name: "University of Cyprus", ranking: "#1 in Cyprus", website: "https://www.ucy.ac.cy" },
      { name: "Cyprus University of Technology", ranking: "#2 in Cyprus", website: "https://www.cut.ac.cy" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€800/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€300-600/month",
      food: "€150-250/month",
      transport: "€40-60/month",
      monthly: "€600-1,000/month",
    },
    culturalInsights: {
      traditions: ["Mediterranean culture", "Island lifestyle", "Ancient history"],
      etiquette: ["Warm and hospitable", "Importance of family", "Relaxed pace of life"],
      highlights:
        "Cyprus offers education in English with Mediterranean lifestyle, beautiful beaches, and affordable living costs.",
    },
  },
  {
    id: "croatia",
    name: "Croatia",
    code: "HR",
    universities: 18,
    description: "Affordable education with Adriatic coastline and growing international programs",
    educationSystem:
      "Croatia offers affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,500-3,000/year for non-EU students",
    languageOfInstruction: "Croatian and English",
    topUniversities: [
      { name: "University of Zagreb", ranking: "#1 in Croatia", website: "https://www.unizg.hr" },
      { name: "University of Split", ranking: "#2 in Croatia", website: "https://www.unist.hr" },
      { name: "University of Rijeka", ranking: "#3 in Croatia", website: "https://www.uniri.hr" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€700/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€250-500/month",
      food: "€100-200/month",
      transport: "€30-50/month",
      monthly: "€500-900/month",
    },
    culturalInsights: {
      traditions: ["Adriatic culture", "Mediterranean lifestyle", "Dalmatian traditions"],
      etiquette: ["Warm and friendly", "Appreciation for nature", "Relaxed pace of life"],
      highlights:
        "Croatia offers affordable education with beautiful Adriatic coastline, Mediterranean lifestyle, and rich cultural heritage.",
    },
  },
  {
    id: "serbia",
    name: "Serbia",
    code: "RS",
    universities: 28,
    description: "Very affordable education with English-taught programs and vibrant capital",
    educationSystem:
      "Serbia offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Serbian and English",
    topUniversities: [
      { name: "University of Belgrade", ranking: "#1 in Serbia", website: "https://www.bg.ac.rs" },
      { name: "University of Novi Sad", ranking: "#2 in Serbia", website: "https://www.uns.ac.rs" },
      { name: "Singidunum University", ranking: "#3 in Serbia", website: "https://www.singidunum.ac.rs" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€150-300/month",
      food: "€80-150/month",
      transport: "€15-30/month",
      monthly: "€300-600/month",
    },
    culturalInsights: {
      traditions: ["Balkan culture", "Music and nightlife", "Warm hospitality"],
      etiquette: ["Warm and friendly", "Strong family values", "Casual atmosphere"],
      highlights:
        "Serbia offers excellent value for money with very affordable living costs, vibrant nightlife, and warm hospitality.",
    },
  },
  {
    id: "bulgaria",
    name: "Bulgaria",
    code: "BG",
    universities: 30,
    description: "Very affordable education with English-taught programs and rich history",
    educationSystem:
      "Bulgaria offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Bulgarian and English",
    topUniversities: [
      { name: "Sofia University", ranking: "#1 in Bulgaria", website: "https://www.uni-sofia.bg" },
      { name: "Technical University of Sofia", ranking: "#2 in Bulgaria", website: "https://www.tu-sofia.bg" },
      { name: "University of Plovdiv", ranking: "#3 in Bulgaria", website: "https://www.uni-plovdiv.bg" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€150-300/month",
      food: "€80-150/month",
      transport: "€15-30/month",
      monthly: "€300-600/month",
    },
    culturalInsights: {
      traditions: ["Rose festival", "Mountain culture", "Orthodox traditions"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Bulgaria offers excellent value for money with very affordable living costs, rich history, and beautiful mountain scenery.",
    },
  },
  {
    id: "lithuania",
    name: "Lithuania",
    code: "LT",
    universities: 20,
    description: "Affordable education with English-taught programs and Baltic culture",
    educationSystem:
      "Lithuania offers affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Lithuanian and English",
    topUniversities: [
      { name: "Vilnius University", ranking: "#1 in Lithuania", website: "https://www.vu.lt" },
      { name: "Kaunas University of Technology", ranking: "#2 in Lithuania", website: "https://www.ktu.edu" },
      {
        name: "Lithuanian University of Educational Sciences",
        ranking: "#3 in Lithuania",
        website: "https://www.leu.lt",
      },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Baltic traditions", "Folk culture", "Independence celebrations"],
      etiquette: ["Friendly and welcoming", "Appreciation for nature", "Casual atmosphere"],
      highlights:
        "Lithuania offers affordable education with Baltic culture, affordable living costs, and modern universities.",
    },
  },
  {
    id: "latvia",
    name: "Latvia",
    code: "LV",
    universities: 18,
    description: "Affordable education with English-taught programs and Baltic culture",
    educationSystem:
      "Latvia offers affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Latvian and English",
    topUniversities: [
      { name: "University of Latvia", ranking: "#1 in Latvia", website: "https://www.lu.lv" },
      { name: "Riga Technical University", ranking: "#2 in Latvia", website: "https://www.rtu.lv" },
      {
        name: "Latvian University of Life Sciences and Technologies",
        ranking: "#3 in Latvia",
        website: "https://www.llu.lv",
      },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Baltic traditions", "Folk culture", "Midsummer celebrations"],
      etiquette: ["Friendly and welcoming", "Appreciation for nature", "Casual atmosphere"],
      highlights:
        "Latvia offers affordable education with Baltic culture, affordable living costs, and modern universities.",
    },
  },
  {
    id: "estonia",
    name: "Estonia",
    code: "EE",
    universities: 16,
    description: "Affordable education with English-taught programs and digital innovation",
    educationSystem:
      "Estonia offers affordable education with increasing English-taught programs. Universities are modern and digitally advanced.",
    tuitionFees: "€2,000-4,000/year for non-EU students",
    languageOfInstruction: "Estonian and English",
    topUniversities: [
      { name: "University of Tartu", ranking: "#1 in Estonia", website: "https://www.ut.ee" },
      { name: "Tallinn University of Technology", ranking: "#2 in Estonia", website: "https://www.taltech.ee" },
      { name: "Tallinn University", ranking: "#3 in Estonia", website: "https://www.tlu.ee" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€600/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€200-400/month",
      food: "€100-200/month",
      transport: "€20-40/month",
      monthly: "€400-800/month",
    },
    culturalInsights: {
      traditions: ["Digital innovation", "Song festival", "Independence celebrations"],
      etiquette: ["Friendly and welcoming", "Tech-savvy culture", "Casual atmosphere"],
      highlights:
        "Estonia offers affordable education with cutting-edge digital innovation, affordable living costs, and modern universities.",
    },
  },
  {
    id: "ukraine",
    name: "Ukraine",
    code: "UA",
    universities: 40,
    description: "Very affordable education with English-taught programs and rich history",
    educationSystem:
      "Ukraine offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Ukrainian and English",
    topUniversities: [
      {
        name: "Taras Shevchenko National University of Kyiv",
        ranking: "#1 in Ukraine",
        website: "https://www.univ.kiev.ua",
      },
      { name: "Kharkiv National University", ranking: "#2 in Ukraine", website: "https://www.univer.kharkov.ua" },
      { name: "Lviv Polytechnic", ranking: "#3 in Ukraine", website: "https://www.lp.edu.ua" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€400/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€100-250/month",
      food: "€50-100/month",
      transport: "€10-20/month",
      monthly: "€200-400/month",
    },
    culturalInsights: {
      traditions: ["Cossack heritage", "Folk traditions", "Orthodox celebrations"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Ukraine offers excellent value for money with very affordable living costs, rich history, and warm hospitality.",
    },
  },
  {
    id: "belarus",
    name: "Belarus",
    code: "BY",
    universities: 35,
    description: "Very affordable education with English-taught programs and rich culture",
    educationSystem:
      "Belarus offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Belarusian and English",
    topUniversities: [
      { name: "Belarusian State University", ranking: "#1 in Belarus", website: "https://www.bsu.by" },
      { name: "Belarusian National Technical University", ranking: "#2 in Belarus", website: "https://www.bntu.by" },
      {
        name: "Belarusian State University of Informatics and Radioelectronics",
        ranking: "#3 in Belarus",
        website: "https://www.bsuir.by",
      },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€400/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€100-250/month",
      food: "€50-100/month",
      transport: "€10-20/month",
      monthly: "€200-400/month",
    },
    culturalInsights: {
      traditions: ["Folk traditions", "Orthodox celebrations", "Soviet heritage"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Belarus offers excellent value for money with very affordable living costs, rich culture, and warm hospitality.",
    },
  },
  {
    id: "moldova",
    name: "Moldova",
    code: "MD",
    universities: 20,
    description: "Very affordable education with English-taught programs and wine culture",
    educationSystem:
      "Moldova offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,000/year for non-EU students",
    languageOfInstruction: "Moldovan and English",
    topUniversities: [
      { name: "State University of Moldova", ranking: "#1 in Moldova", website: "https://www.usm.md" },
      { name: "Technical University of Moldova", ranking: "#2 in Moldova", website: "https://www.utm.md" },
      { name: "Academy of Economic Studies of Moldova", ranking: "#3 in Moldova", website: "https://www.ase.md" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€400/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€100-250/month",
      food: "€50-100/month",
      transport: "€10-20/month",
      monthly: "€200-400/month",
    },
    culturalInsights: {
      traditions: ["Wine culture", "Folk traditions", "Orthodox celebrations"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Moldova offers excellent value for money with very affordable living costs, wine culture, and warm hospitality.",
    },
  },
  {
    id: "georgia",
    name: "Georgia",
    code: "GE",
    universities: 25,
    description: "Very affordable education with English-taught programs and Caucasus culture",
    educationSystem:
      "Georgia offers very affordable education with increasing English-taught programs. Universities are modern and well-equipped.",
    tuitionFees: "€1,000-2,500/year for non-EU students",
    languageOfInstruction: "Georgian and English",
    topUniversities: [
      { name: "Tbilisi State University", ranking: "#1 in Georgia", website: "https://www.tsu.ge" },
      { name: "Georgian Technical University", ranking: "#2 in Georgia", website: "https://www.gtu.ge" },
      { name: "Caucasus University", ranking: "#3 in Georgia", website: "https://www.cu.edu.ge" },
    ],
    visaInfo: {
      type: "Student Visa",
      processingTime: "2-4 weeks",
      cost: "€0",
      requirements: ["Proof of admission", "Financial proof (€500/month)", "Health insurance", "Valid passport"],
    },
    costOfLiving: {
      accommodation: "€150-300/month",
      food: "€80-150/month",
      transport: "€15-30/month",
      monthly: "€300-600/month",
    },
    culturalInsights: {
      traditions: ["Caucasus culture", "Wine traditions", "Warm hospitality"],
      etiquette: ["Warm and hospitable", "Strong family values", "Appreciation for tradition"],
      highlights:
        "Georgia offers excellent value for money with affordable living costs, Caucasus culture, and warm hospitality.",
    },
  },
]

export function getCountryById(id: string): Country | undefined {
  return countriesData.find((country) => country.id === id)
}

export function getAllCountries(): Country[] {
  return countriesData
}
