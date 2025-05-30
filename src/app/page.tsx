// Home page

import './globals.css'
import Image from 'next/image'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainTitle from './components/MainTitle'

//goes in the body section
// <main className="min-h-screen">{children}</main>

export const metadata = {
  title: 'Brady Cook - Home',
  icons: {
    icon: '/b-icon.ico',
  }
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
        <main className="min-h-screen">{children}
          <Navbar />
          <MainTitle />
          <Footer />
        </main>
      </body>
    </html>
  )
}