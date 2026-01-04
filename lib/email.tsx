import nodemailer from "nodemailer"

interface EmailResult {
  success: boolean
  error?: string
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendContactEmail(name: string, email: string, message: string): Promise<EmailResult> {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured")
      return {
        success: false,
        error: "Email service is not properly configured",
      }
    }

    const htmlContent = `
      <div style="font-family: 'Courier New', monospace; background-color: #0a0e1a; color: #e0e0e0; padding: 20px;">
        <div style="border-left: 4px solid #00ffff; padding-left: 16px;">
          <h2 style="color: #00ffff; margin: 0 0 16px 0;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 16px;">
            <span style="color: #00ff00;">FROM:</span>
            <p style="margin: 4px 0; font-weight: bold;">${name}</p>
            <p style="margin: 4px 0; color: #00ffff;">${email}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <span style="color: #00ff00;">MESSAGE:</span>
            <div style="background-color: #141820; padding: 12px; margin-top: 8px; border-radius: 4px; border: 1px solid #00ffff3d; white-space: pre-wrap; word-break: break-word;">
              ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #00ffff3d; font-size: 12px; color: #666;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Sent at: ${new Date().toISOString()}</p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "revexorigins+contact@gmail.com",
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: htmlContent,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    })

    return { success: true }
  } catch (error) {
    console.error("Email error:", error)
    return {
      success: false,
      error: "Failed to send email",
    }
  }
}
