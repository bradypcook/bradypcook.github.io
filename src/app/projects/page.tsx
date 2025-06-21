// Projects page

import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import CardLayout from '@/app/components/CardLayout'

export const metadata = {
  title: "Brady's Website - Projects",
  icons: {
    icon: '/b-icon-alt.ico',
  },
  openGraph: {
    title: "Brady's Website",
    description: "Explore my experiences, projects, skills, and learn more about me.",
    url: 'https://bradypcook.github.io',
    siteName: "Brady's Website",
    type: 'website',
    locale: 'en_US',
  },
}
export default function ProjectsPage() {
  return (
    <main className="bg-gray-950 text-white font-sans">
        <Navbar />
        <SubTitle title='Projects'/>
        <CardLayout />
        <Footer />
    </main>
  )
}