# Email Setup Guide

## Gmail Setup Instructions

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to "Security" → "2-Step Verification"
3. Follow the steps to enable 2FA

### 2. Generate App Password
1. Still in Google Account Settings → Security
2. Click on "2-Step Verification"
3. Scroll down to "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Enter "Portfolio Website" as the name
6. Copy the generated 16-character password

### 3. Environment Variables Setup

#### For Local Development:
1. Create `.env.local` file in the project root
2. Add the following variables:
```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
```

#### For Production (Vercel):
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the same variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your app-specific password

### 4. Alternative Email Services

#### Outlook/Hotmail:
```
service: 'hotmail'
```

#### Custom SMTP:
```javascript
host: 'your-smtp-host.com',
port: 587,
secure: false, // true for 465, false for other ports
auth: {
  user: 'your-email@example.com',
  pass: 'your-password'
}
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check both your email and the sender's email for confirmation

## Troubleshooting

### Common Issues:
1. **"Invalid login"**: Make sure 2FA is enabled and you're using an app password
2. **"Connection refused"**: Check your internet connection and Gmail settings
3. **"Quota exceeded"**: Gmail has sending limits; wait and try again

### Security Notes:
- Never commit `.env.local` to version control
- Keep your app passwords secure
- Regularly rotate your app passwords
- Monitor your email account for suspicious activity