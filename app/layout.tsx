import type { Metadata } from 'next'
import { oswald } from './fonts'
import './globals.css'
import { NavbarWrapper } from '@/components/NavbarWrapper'



export const metadata: Metadata = {
  title: 'Fai bin Onayq | Portfolio',
  description:
    'I build intelligent software that bridges data, AI, and real user needs—grounded in academic excellence and sharpened by hands-on projects in vision, language, and cloud engineering.',
  
  keywords: [
    'Fai',
    'Fai bin Onayq',
    'Fai Alonayq',
    'AI Engineer',
    'Data Science',
    'Computer Vision',
    'NLP',
    'python',
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'JavaScript',
    'Portfolio',
  ],

  authors: [{ name: 'Fai Bin Onayq', url: 'https://Fai-bo.com' }],

  creator: 'Fai Bin Onayq',
  publisher: 'Fai Bin Onayq',

  metadataBase: new URL('https://Fai-bo.com'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Fai Bin Onayq | Portfolio',
    description:
      'Versatile developer fluent in Python, Java, and JavaScript, with hands-on experience in machine learning, NLP, computer vision, RESTful APIs, and cloud-native deployment—equally comfortable optimizing a PyTorch model or architecting a React + Node.js application on GCP.',
    url: 'https://Fai-bo.com',
    siteName: 'Fai Bin Onayq Portfolio',
    locale: 'en_US',
    type: 'website'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fai Bin Onayq',
    alternateName: 'في العنيق',
    url: 'https://Fai-bo.com',
    sameAs: [
      'https://github.com/FaiOnayq',
      'https://www.linkedin.com/in/fai-bin-onayq-ab079b20a/'
    ],
    jobTitle: 'AI Engineer',
    description:
      'Fai Bin Onayq is Computer Science graduate ranked #1 in my class-building intelligent, full-stack systems that solve real-world problems with Al, data science, and clean, maintainable code.',
    knowsAbout: [
      'artificial intelligence',
      'Data Science',
      'Full-stack',
      'Python',
      'Javascripts'
    ],
    nationality: {
      '@type': 'Country',
      name: 'Saudi Arabia'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={` ${oswald.className} bg-bg-dark relative max-h-screen overflow-y-scroll`}
      >
        <NavbarWrapper />
        {children}

      </body>
    </html>
  )
}
