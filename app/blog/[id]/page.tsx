import Header from "@/components/header"
import Footer from "@/components/footer"
import { getBlogArticleById, getAllBlogArticles } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, User, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  const articles = getAllBlogArticles()
  return articles.map((article) => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getBlogArticleById(id)
  if (!article) return {}

  return {
    title: `${article.title} | European Study Consultancy Blog`,
    description: article.excerpt,
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getBlogArticleById(id)

  if (!article) {
    notFound()
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"}/blog/${article.id}`
  const shareText = `Check out this article: ${article.title}`

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    instagram: `https://www.instagram.com/`,
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-sm text-muted-foreground">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>

        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
          <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <span className="text-sm font-semibold">Share:</span>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">X</span>
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("###")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-primary">
                  {paragraph.replace("### ", "")}
                </h3>
              )
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                  {paragraph.split("\n").map((item, idx) => (
                    <li key={idx}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              )
            }
            if (paragraph.match(/^\d+\./)) {
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground">
                  {paragraph.split("\n").map((item, idx) => (
                    <li key={idx}>{item.replace(/^\d+\.\s/, "")}</li>
                  ))}
                </ol>
              )
            }
            return (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-primary">Ready to Start Your European Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us today for personalized guidance on studying in Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+1234567890"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
