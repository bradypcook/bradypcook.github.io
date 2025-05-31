// Experience page

import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import Timeline from '@/app/components/TimelineComponent'

export const metadata = {
  title: "Brady's Website - Experience",
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
export default function ExperiencePage() {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
          <Navbar />
          <SubTitle title='Experience'/>
          <Timeline 
          boxes={[
            { title: 'BIT Club',
              text: 'I am currently serving on the BIT (Business Information Technology) Executive Board at Virginia Tech, where I am the web developer. Go check out the website by clicking below!',
              image: '/bit_club_logo.png',
              buttonText: 'Click Here!',
              buttonLink: 'https://gobblerconnect.vt.edu/organization/bitclub'},
            { title: 'GMU CS Club HackFax CTF', 
              text: "I have helped out with George Mason University's CS Club annual hackathon, called HackFax. More specifically, I helped out in the Networking portion CTF (Capture the Flag) competition where users solve challenges in order to earn points. The video below explains the challenges in the CTF and helps highlight my contributions:",
              image: '/hackfax_logo.png',
              buttonText: 'Click Here!',
              buttonLink: 'https://www.youtube.com/embed/5FIlNuWnZ7Q'},
            { title: 'Halvex Hosting', 
              text: "I completed an Internship for Halvex Hosting where I created & updated webpages (like I'm doing with this one!).", 
              image: '/halvex_logo.png'},
            { title: 'Computer Science Honor Society (CSHS)', 
              text: "While enrolled at the Academies of Loudoun (a local STEM magnet school), I was a member of the school's CSHS Chapter. During that time, I helped carry out the AcademiesHacks hackathon, as I taught a networking workshop, as well as guide other workshops. On top of that, I also assisted with the AcademiesHacks CTF by creating challenges and being on site to troubleshoot. ",
              image: '/cshs_logo.png'},
            { title: 'Cyberpatriot', 
              text: "As a part of my Cybersecurity class, students participate in the Air Force Association's Cyberpatriot Competition, where teams work together to harden virtual machines and secure networks. During the two years that my team participated, we reached the Gold and Platinum tiers (which are the top 66% and 33%, respectively). ",
              image: '/cyberpatriot_logo.png'},
            { title: 'Volunteering & Community Service', 
              text: 'Over the years, I have participated in multiple extracurriculars ranging from Scouting to the Red Cross Club. While serving in these positions, I led a service project and initiatives, mentored younger scouts, and helped those in need.',
              image: '/scouting_redcross_logo.png' },
          ]}
        />
        <Footer />
      </body>
    </html>
  )
}