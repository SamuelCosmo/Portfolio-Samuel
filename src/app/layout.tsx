import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Samuel Gutierrez',
  description: 'Portfolio of Samuel Gutierrez',
  openGraph: {
    title: 'Samuel Gutierrez',
    description: 'Portfolio of Samuel Gutierrez',
    type: 'website',
    images: [
      {
        url: '/banner_a.jpeg',
        width: 1200,
        height: 630,
        alt: 'Banner de Samuel Gutierrez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Gutierrez',
    description: 'Portfolio of Samuel Gutierrez',
    images: ['/banner_a.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
