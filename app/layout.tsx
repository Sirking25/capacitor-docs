import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutiConnect - Community for Autism Parents',
  description: 'A compassionate, empowering, and resourceful space where parents of autistic children can connect, learn, share experiences, and find support.',
  keywords: ['autism', 'parenting', 'community', 'support', 'resources'],
  authors: [{ name: 'AutiConnect Team' }],
  openGraph: {
    title: 'AutiConnect - Community for Autism Parents',
    description: 'Connect with other parents, access resources, and find support',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#333',
                borderRadius: '0.75rem',
                padding: '1rem',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
