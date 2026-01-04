import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message too long"),
  honeypot: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (body.honeypot) {
      return Response.json({ success: false, error: "Spam detected" }, { status: 400 })
    }

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return Response.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.issues,
        },
        { status: 400 },
      )
    }

    const { name, email, message } = result.data

    console.log("Contact form submission:", { name, email, message, timestamp: new Date() })

    return Response.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
