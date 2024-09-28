import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Dancing_Script } from 'next/font/google'
import Footer from './components/Footer'

const nunito = Nunito({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '800'],
})
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shehzaan Interior & Construction Company',
  description: 'Expert interior, exterior, and bathroom design services in Bhopal, MP India',
  keywords: ['interior design', 'construction', 'Bhopal', 'bathroom design', 'exterior design'],
  authors: [{ name: 'Shehzaan Interior & Construction Company' }],
  openGraph: {
    title: 'Shehzaan Interior & Construction Company',
    description: 'Expert interior, exterior, and bathroom design services in Bhopal, MP India',
    url: 'https://www.shehzaaninterior.com',
    siteName: 'Shehzaan Interior & Construction Company',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} min-h-screen bg-background flex flex-col`}>
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="py-4 sm:py-6">
              <h1>
                <span className={`block slate-900 text-center text-4xl ${dancingScript.className}`}>Shehzaan</span>
                <span className="block text-center font-semibold whitespace-nowrap text-sm">Interior & Construction Company</span>
              </h1>
            </header>
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}