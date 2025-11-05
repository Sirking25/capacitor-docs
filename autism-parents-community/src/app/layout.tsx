import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autism Parents Community',
  description: 'A supportive community for parents of children with autism to share stories and information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
