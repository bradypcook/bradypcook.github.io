// Skills page

import '@/app/globals.css'
import { ReactNode } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SubTitle from '@/app/components/SubTitle'
import SkillsList from '@/app/components/SkillsList'
import Image from 'next/image'
import { title } from 'process'

export const metadata = {
  title: 'Brady Cook - Skills',
  icons: {
    icon: '/b-icon.ico',
  }
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
        <Navbar />
        <SubTitle title='Skills & Certifications'/>
        <SkillsList 
        sections={[
          {
            title: "Certifications",
            items: [
              { svg: 
              <a href="https://www.credly.com/badges/86ccadca-9429-4734-b064-57870e5c4254/public_url" target="_blank" rel="noopener noreferrer">
                <Image src="/svg_collection/A+.svg" alt="CompTIA A+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/>
              </a>,
              label: "CompTIA A+",
             },
              { svg: 
              <a href="https://www.credly.com/badges/c0c41775-b6e2-4b81-a4d7-c2c6a5e4584b/public_url" target="_blank" rel="noopener noreferrer">
                <Image src="/svg_collection/Network+.svg" alt="CompTIA Net+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
              </a>, 
              label: "CompTIA Network+",},
              { svg: 
              <a href="https://www.credly.com/badges/cdb78fa7-8f4d-45f8-a0a9-775b02546bc7/public_url" target="_blank" rel="noopener noreferrer">
                <Image src="/svg_collection/Security+.svg" alt="CompTIA Net+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
              </a>,
              label: "CompTIA Security+",},
              { svg:
              <a href="https://www.credly.com/badges/ebbbbbc4-d0c4-4c7f-88e3-a821d66d2cd1/public_url" target="_blank" rel="noopener noreferrer"> 
              <Image src="/svg_collection/cisco_logo.svg" alt="CCNA" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
              </a>,
              label: "Cisco CCNA",},
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
          ],
        }}
      />
        <Footer />
      </body>
    </html>
  )
}