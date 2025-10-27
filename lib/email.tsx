// Email service utilities
// In production, integrate with services like SendGrid, Mailgun, or AWS SES

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // TODO: Implement actual email sending
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: options.to,
    //   from: process.env.FROM_EMAIL,
    //   subject: options.subject,
    //   html: options.html,
    //   text: options.text,
    // });

    console.log("Email would be sent to:", options.to)
    console.log("Subject:", options.subject)
    return true
  } catch (error) {
    console.error("Email sending error:", error)
    return false
  }
}

export function getContactConfirmationEmail(name: string): EmailOptions {
  return {
    to: "", // Will be set by caller
    subject: "We received your inquiry - European Study Consultancy",
    html: `
      <h2>Thank you for contacting us, ${name}!</h2>
      <p>We have received your inquiry and will get back to you within 24 hours.</p>
      <p>In the meantime, feel free to explore our website for more information about studying in Europe.</p>
      <p>Best regards,<br>European Study Consultancy Team</p>
    `,
    text: `Thank you for contacting us, ${name}! We have received your inquiry and will get back to you within 24 hours.`,
  }
}

export function getNewsletterWelcomeEmail(): EmailOptions {
  return {
    to: "", // Will be set by caller
    subject: "Welcome to European Study Consultancy Newsletter",
    html: `
      <h2>Welcome to our Newsletter!</h2>
      <p>Thank you for subscribing to our monthly updates on study abroad opportunities and tips for studying in Europe.</p>
      <p>You will now receive:</p>
      <ul>
        <li>Scholarship opportunities and deadlines</li>
        <li>Tips for studying in specific European countries</li>
        <li>Student success stories</li>
        <li>Application and visa guidance</li>
      </ul>
      <p>Best regards,<br>European Study Consultancy Team</p>
    `,
    text: "Thank you for subscribing to our newsletter! You will receive monthly updates on study abroad opportunities.",
  }
}

export function getAdminNotificationEmail(inquiry: {
  name: string
  email: string
  phone: string
  country: string
  message: string
}): EmailOptions {
  return {
    to: process.env.ADMIN_EMAIL || "admin@europestudy.com",
    subject: `New Inquiry from ${inquiry.name}`,
    html: `
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone}</p>
      <p><strong>Country of Interest:</strong> ${inquiry.country}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message.replace(/\n/g, "<br>")}</p>
      <p>Please follow up with this inquiry as soon as possible.</p>
    `,
    text: `New inquiry from ${inquiry.name} (${inquiry.email}). Country: ${inquiry.country}. Message: ${inquiry.message}`,
  }
}
