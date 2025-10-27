import { type NextRequest, NextResponse } from "next/server"

interface NewsletterSignup {
  email: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body as NewsletterSignup

    // Validate email
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    console.log("Newsletter signup:", {
      email,
      timestamp: new Date().toISOString(),
    })

    // TODO: Save to database
    // Check if email already exists
    // const existingSubscriber = await db.newsletter.findUnique({ where: { email } })
    // if (existingSubscriber) {
    //   return NextResponse.json(
    //     { success: false, message: "This email is already subscribed" },
    //     { status: 400 }
    //   )
    // }

    // Create new subscriber
    // const subscriber = await db.newsletter.create({
    //   data: {
    //     email,
    //     subscribedAt: new Date(),
    //     status: "active",
    //   },
    // })

    // TODO: Send welcome email
    // await sendWelcomeEmail(email)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing! Check your email for confirmation.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json({ success: false, message: "An error occurred. Please try again later." }, { status: 500 })
  }
}
