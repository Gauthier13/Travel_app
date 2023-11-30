import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bivouac',
  description: 'Travel UI/UX for Camping outdoor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  {/* STRUCTURE DU SITE */}
  return (
    <html lang="en">
      <body> 
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  )
}
