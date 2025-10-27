// Database configuration and utilities
// This file serves as a placeholder for database integration
// In production, you would use Supabase, MongoDB, Prisma, or another database solution

export interface Inquiry {
  id: string
  name: string
  email: string
  phone: string
  country: string
  message: string
  createdAt: string
  status: "new" | "contacted" | "resolved"
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribedAt: string
  status: "active" | "unsubscribed"
}

export interface BlogComment {
  id: string
  articleId: string
  name: string
  email: string
  comment: string
  createdAt: string
  approved: boolean
}

// Mock database for development
// Replace with actual database calls in production
const mockDatabase = {
  inquiries: [] as Inquiry[],
  subscribers: [] as NewsletterSubscriber[],
  comments: [] as BlogComment[],
}

export const db = {
  // Inquiries
  inquiries: {
    create: async (data: Omit<Inquiry, "id">) => {
      const inquiry: Inquiry = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
      }
      mockDatabase.inquiries.push(inquiry)
      return inquiry
    },
    findAll: async () => mockDatabase.inquiries,
    findById: async (id: string) => mockDatabase.inquiries.find((i) => i.id === id),
    update: async (id: string, data: Partial<Inquiry>) => {
      const index = mockDatabase.inquiries.findIndex((i) => i.id === id)
      if (index !== -1) {
        mockDatabase.inquiries[index] = { ...mockDatabase.inquiries[index], ...data }
        return mockDatabase.inquiries[index]
      }
      return null
    },
  },

  // Newsletter subscribers
  subscribers: {
    create: async (data: Omit<NewsletterSubscriber, "id">) => {
      const subscriber: NewsletterSubscriber = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
      }
      mockDatabase.subscribers.push(subscriber)
      return subscriber
    },
    findByEmail: async (email: string) => mockDatabase.subscribers.find((s) => s.email === email),
    findAll: async () => mockDatabase.subscribers,
    update: async (id: string, data: Partial<NewsletterSubscriber>) => {
      const index = mockDatabase.subscribers.findIndex((s) => s.id === id)
      if (index !== -1) {
        mockDatabase.subscribers[index] = { ...mockDatabase.subscribers[index], ...data }
        return mockDatabase.subscribers[index]
      }
      return null
    },
  },

  // Blog comments
  comments: {
    create: async (data: Omit<BlogComment, "id">) => {
      const comment: BlogComment = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
      }
      mockDatabase.comments.push(comment)
      return comment
    },
    findByArticleId: async (articleId: string) =>
      mockDatabase.comments.filter((c) => c.articleId === articleId && c.approved),
    findAll: async () => mockDatabase.comments,
    approve: async (id: string) => {
      const index = mockDatabase.comments.findIndex((c) => c.id === id)
      if (index !== -1) {
        mockDatabase.comments[index].approved = true
        return mockDatabase.comments[index]
      }
      return null
    },
  },
}
