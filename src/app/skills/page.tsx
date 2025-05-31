// Skills page

import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import SkillsList from '@/app/components/SkillsList'
import Image from 'next/image'

export const metadata = {
  title: "Brady's Website - Skills",
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
export default function SkillsPage() {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
          <Navbar />
          <SubTitle title='Skills'/>
          <SkillsList 
          sections={[
            {
              title: "Basic Web Development",
              items: [
                { svg: <Image src="/svg_collection/HTML5_logo.svg" alt="Python" width={100} height={100} className='mx-auto !max-w-none'/>,
                label: "HTML",},
                { svg: <Image src="/svg_collection/CSS3_logo.svg" alt="JS" width={75} height={75} className='mx-auto !max-w-none'/>,
                label: "CSS",},
              ],
            },
            {
              title: "Programming Languages",
              items: [
                { svg: <Image src="/svg_collection/python.svg" alt="Python" width={80} height={80} className='mx-auto !max-w-none'/>,
                label: "Python",},
                { svg: <Image src="/svg_collection/javascript.svg" alt="JS" width={80} height={80} className='mx-auto !max-w-none'/>,
                label: "JavaScript",},

              ],
            },
            {
              title: "Programming Libraries & Frameworks",
              items: [
                { svg: <Image src="/svg_collection/nextjs-original.svg" alt="Next.js" width={80} height={80} className='mx-auto !max-w-none'/>,
                label: "Next.js",},
                { svg: <Image src="/svg_collection/tailwindcss-original.svg" alt="Tailwind" width={80} height={80} className='mx-auto !max-w-none'/>,
                label: "Tailwind CSS",},
                { svg: <Image src="/svg_collection/nodejs.svg" alt="Node.js" width={80} height={80} className='mx-auto !max-w-none'/>,
                label: "Node.js",},
                { svg: <Image src="/svg_collection/react.svg" alt="React.js" width={80} height={80} className='mx-auto !max-w-none'/>, 
                label: "React.js",},
              ],
            },
            {
              title: "Operating Systems",
              items: [
                { svg: <Image src="/svg_collection/tux.svg" alt="Ubuntu & Kali Linux" width={60} height={60} className='mx-auto !max-w-none'/>, 
                label: "Ubuntu & Kali Linux",},
                { svg: <Image src="/svg_collection/windows_logo.svg" alt="Windows 10 & 11" width={60} height={60} className='mx-auto !max-w-none'/>, 
                label: "Windows 10 & 11",},
                { svg: <Image src="/svg_collection/apple_logo_grey.svg" alt="macOS & iOS" width={60} height={60} className='mx-auto !max-w-none'/>, 
                label: "macOS & iOS"},
                { svg: <Image src="/svg_collection/android.svg" alt="androidOS" width={60} height={60} className='mx-auto !max-w-none'/>, 
                label: "androidOS"},
                { svg: <Image src="/svg_collection/cisco_logo.svg" alt="Cisco IOS" width={100} height={100} className='mx-auto'/>, 
                label: "Cisco IOS"},
              ],
            },
            {
              title: "Hypervisors and Other Technological Software",
              items: [
                { svg: <Image src="/svg_collection/vmware.svg" alt="VMWare" width={80} height={80} className='mx-auto !max-w-none'/>, 
                label: "VMWare"},
                { svg: <Image src="/svg_collection/virtualbox.svg" alt="VirtualBox" width={80} height={80} className='mx-auto !max-w-none'/>, 
                label: "VirtualBox"},
                { svg: <Image src="/svg_collection/wireshark.svg" alt="Wireshark" width={80} height={80} className='mx-auto !max-w-none'/>, 
                label: "Wireshark"},
                { svg: <Image src="/svg_collection/ghidra.svg" alt="Git" width={80} height={80} className='mx-auto !max-w-none'/>, 
                label: "Ghidra"},
                { svg: <Image src="/svg_collection/git.svg" alt="Git" width={160} height={160} className='mx-auto !max-w-none'/>, 
                label: "Git"},
              ],
            },
          ]}
          bulletSection={{
            header: "Other Knowledge",
            items: [
              "Cisco Networking Principles",
              "DNS & Website Troubleshooting",
              "Artificial Intelligence (ChatGPT, Claude, etc.)",
              "Productivity Software (Adobe Acrobat, Google Workspace, and MS Office products)",
            ],
          }}
        />
        <Footer />
      </body>
    </html>
  )
}