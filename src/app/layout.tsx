import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Samuel Gutierrez',
  description: 'Portfolio of Samuel Gutierrez',
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
