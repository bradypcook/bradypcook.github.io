// About Me page

import '@/app/globals.css'
import { ReactNode } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import Biography from '@/app/components/Biography'

export const metadata = {
  title: 'Brady Cook - About Me',
  icons: {
    icon: '/b-icon.ico',
  }
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
          <Navbar />
          <SubTitle title='About Me'/>
          <Biography 
          boxes={[
            {
              image: "/my_picture2.jpg",
              header: "Hello again!",
              description: "As you may know, I'm Brady (the designer of this site). I'm currently a student at Virginia Tech (Go Hokies!) studying Cybersecurity. In my spare time, I like to play video games, exercise, and learn new things. Feel free to check out my socials or send me an email!",
              secondaryHeader: "Check out all my socials below!",
              github: "https://github.com/bradypcook",
              linkedin: "https://linkedin.com/in/bradypcook",
              email: "bradyc05@vt.edu",
              instagram: 'https://www.instagram.com/brady.cook.7/',
              spotify: 'https://open.spotify.com/user/bcook468',
              strava: 'https://www.strava.com/athletes/92112180',
              handshake: 'https://vt.joinhandshake.com/profiles/6ybjff',
            },
          ]}
          />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  )
}