// Home page

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainTitle from './components/MainTitle'

export const metadata = {
  title: "Brady's Website - Home",
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
  metadataBase: new URL('https://bradypcook.github.io'),
}
export default function HomePage() {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
          <Navbar />
          <MainTitle />
          <Footer />
      </body>
    </html>
  )
}