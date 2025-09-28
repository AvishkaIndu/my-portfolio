// Test component to verify email functionality
// You can temporarily add this to any page to test the API

'use client'

import { useState } from 'react'

export default function EmailTest() {
  const [status, setStatus] = useState('')

  const testEmail = async () => {
    setStatus('Testing...')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Email from Portfolio',
          message: 'This is a test message to verify the email functionality is working correctly.'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('✅ Email sent successfully!')
      } else {
        setStatus(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      setStatus(`❌ Network error: ${error}`)
    }
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Email API Test</h3>
      <button 
        onClick={testEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Test Email API
      </button>
      {status && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          {status}
        </div>
      )}
    </div>
  )
}