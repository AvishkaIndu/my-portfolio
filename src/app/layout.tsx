import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your Name - Full-Stack Developer',
  description: 'Software Engineering undergraduate and Full-Stack Developer specializing in Next.js, Node.js, and modern web technologies. Building scalable applications with clean code and innovative solutions.',
  keywords: ['Full-Stack Developer', 'Software Engineer', 'Next.js', 'React', 'Node.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Your Name - Full-Stack Developer',
    description: 'Software Engineering undergraduate and Full-Stack Developer specializing in modern web technologies.',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full-Stack Developer',
    description: 'Software Engineering undergraduate and Full-Stack Developer specializing in modern web technologies.',
    creator: '@yourusername',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
