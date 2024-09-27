import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shehzaan Interior & Construction Company',
  description: 'Expert interior, exterior, and bathroom design services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-4 sm:py-6">
            <h1 className="text-2xl font-semibold text-black text-center">Shehzaan Interior & Construction Company</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}