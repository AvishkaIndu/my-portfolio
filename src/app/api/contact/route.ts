import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your app password
  },
})

export async function POST(request: NextRequest) {
  try {
    // Check environment variables first
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'MISSING',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'MISSING'
    })
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email environment variables')
      console.error('EMAIL_USER:', process.env.EMAIL_USER ? 'exists' : 'missing')
      console.error('EMAIL_PASS:', process.env.EMAIL_PASS ? 'exists' : 'missing')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact me directly at avishkafvr@gmail.com' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Attempting to send email...', {
      from: process.env.EMAIL_USER,
      to: 'avishkafvr@gmail.com',
      subject: subject
    })

    // Email to you (the recipient)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'avishkafvr@gmail.com', // Your email where you want to receive messages
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #2d3748; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e6fffa; border-left: 4px solid #00ff88; border-radius: 4px;">
            <p style="margin: 0; color: #2d3748;">
              <strong>Reply to:</strong> ${email}<br>
              <small>You can reply directly to this email to respond to ${name}.</small>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #718096; font-size: 12px; margin: 0;">
              This message was sent from your portfolio contact form at avishkainduwara.com
            </p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    }

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00ff88, #00d4ff); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Thank You!
            </h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #2d3748; margin-bottom: 20px;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to me through my portfolio website! I've received your message about 
              "<strong>${subject}</strong>" and I really appreciate you taking the time to contact me.
            </p>
            
            <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #00ff88; margin: 20px 0;">
              <p style="color: #2d3748; margin: 0;">
                <strong>What's next?</strong><br>
                I'll review your message carefully and get back to you within 24 hours. 
                If your inquiry is urgent, feel free to reach out to me directly at avishkafvr@gmail.com.
              </p>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 25px;">
              In the meantime, feel free to:
            </p>
            
            <ul style="color: #4a5568; line-height: 1.8;">
              <li>Check out my latest projects on <a href="https://github.com/AvishkaIndu" style="color: #00ff88; text-decoration: none;">GitHub</a></li>
              <li>Connect with me on <a href="https://www.linkedin.com/in/avishka-induwara-822386310/" style="color: #00ff88; text-decoration: none;">LinkedIn</a></li>
              <li>Follow my journey on <a href="https://www.instagram.com/avishka_indu/" style="color: #00ff88; text-decoration: none;">Instagram</a></li>
            </ul>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f0fff4, #e6fffa); border-radius: 8px; text-align: center;">
              <p style="color: #2d3748; margin: 0; font-weight: 500;">
                Looking forward to connecting with you!
              </p>
              <p style="color: #00ff88; margin: 5px 0 0 0; font-weight: bold;">
                Best regards,<br>Avishka Induwara
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px;">
            <p style="color: #a0aec0; font-size: 12px; margin: 0;">
              This is an automated response from avishkainduwara.com
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    console.log('Sending main email...')
    await transporter.sendMail(mailOptions)
    console.log('Main email sent successfully')
    
    console.log('Sending auto-reply...')
    await transporter.sendMail(autoReplyOptions)
    console.log('Auto-reply sent successfully')

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Detailed error sending email:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      code: error && typeof error === 'object' && 'code' in error ? (error as { code: unknown }).code : undefined,
      command: error && typeof error === 'object' && 'command' in error ? (error as { command: unknown }).command : undefined,
    })
    
    // Provide specific error messages based on error type
    let errorMessage = 'Failed to send email. Please try again later.'
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please contact me directly at avishkafvr@gmail.com'
      } else if (error.message.includes('connection')) {
        errorMessage = 'Connection error. Please check your internet and try again.'
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timeout. Please try again.'
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}