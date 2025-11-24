// Home page

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainTitle from './components/MainTitle'

export const metadata = {
  title: "Brady's Website - Home",
  icons: {
    icon: '/b_icon_new.ico',
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
export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      <Navbar />
      <MainTitle />
      <Footer />
    </main>
  )
}