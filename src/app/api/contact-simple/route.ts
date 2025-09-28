import { NextRequest, NextResponse } from 'next/server'

// Simple fallback contact handler that saves to console/logs
// This can be used when email service is not available
export async function POST(request: NextRequest) {
  try {
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

    // Log the contact form submission
    const timestamp = new Date().toISOString()
    
    // Log contact data for development purposes
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log(`Time: ${timestamp}`)
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`User Agent: ${request.headers.get('user-agent')}`)
    console.log(`IP: ${request.headers.get('x-forwarded-for') || 'unknown'}`)
    console.log('=====================================')

    // In production, you might want to save this to a database
    // or send to a service like webhook, Discord, Slack, etc.

    return NextResponse.json(
      { 
        message: 'Message received! I will get back to you soon. You can also reach me directly at avishkafvr@gmail.com',
        contactReceived: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please contact me directly at avishkafvr@gmail.com' },
      { status: 500 }
    )
  }
}

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