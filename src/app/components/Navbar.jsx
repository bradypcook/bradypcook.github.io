// Allows users to navigate through the site, and displays the site logo

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-black py-2 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white h-16">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 sm:w-25 sm:h-25">
            <Image 
              src="/sitelogo_transparent.png"
              alt="Brady Cook Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex space-x-6 text-sm sm:text-base items-center font-bold">
          <Link href="/skills">Skills</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about-me">About Me</Link>
        </div>
      </div>
    </nav>
  )
}