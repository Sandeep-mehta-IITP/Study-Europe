import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone: string
  country: string
  message: string
}

// Validation function
function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long")
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please provide a valid email address")
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.push("Please provide a valid phone number")
  }

  if (!data.country || data.country.trim().length === 0) {
    errors.push("Please select a country of interest")
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, country, message } = body as ContactFormData

    // Validate form data
    const validation = validateContactForm({ name, email, phone, country, message })
    if (!validation.valid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification email to admin
    // 4. Log the inquiry

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      country,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate database save
    // In production, you would use a real database like Supabase, MongoDB, etc.
    const inquiry = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      country,
      message,
      createdAt: new Date().toISOString(),
      status: "new",
    }

    // TODO: Save to database
    // await db.inquiries.create(inquiry)

    // TODO: Send emails
    // await sendConfirmationEmail(email, name)
    // await sendAdminNotification(inquiry)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We will get back to you within 24 hours.",
        inquiryId: inquiry.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "An error occurred. Please try again later." }, { status: 500 })
  }
}
