// Projects page

import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import CardLayout from '@/app/components/CardLayout'

export const metadata = {
  title: 'Brady Cook - Projects',
  icons: {
    icon: '/b-icon-alt.ico',
  },
  openGraph: {
    title: "Brady's Website",
    description: "Explore my experiences, projects, skills, and learn more about me.",
    url: 'https://bradypcook.github.io',
    siteName: "Brady's Website",
    images: [
      {
        url: '/sitelogotransparent.png', 
        width: 1200,
        height: 630,
        alt: "Brady's Website Logo",
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  metadataBase: new URL('https://bradypcook.github.io'),
}
export default function ProjectsPage() {
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