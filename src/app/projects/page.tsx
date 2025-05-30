// Projects page

import '@/app/globals.css'
import { ReactNode } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import CardLayout from '@/app/components/CardLayout'

export const metadata = {
  title: 'Brady Cook - Projects',
  icons: {
    icon: '/b-icon.ico',
  }
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
        <Navbar />
        <SubTitle title='Projects'/>
        <CardLayout />
        <Footer />
      </body>
    </html>
  )
}