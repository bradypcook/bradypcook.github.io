// Signifies the end of each webpage, displays the Linkedin, GitHub, and email icons (as well as the Handshake Logo)
'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-3 mt-6">
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center text-lg">
        <p className="mb-1 md:mb-0">
          © {new Date().getFullYear()} Brady Cook
        </p>
        <div className="flex space-x-4 text-white text-3xl mt-2 md:mt-0">
          <a href="mailto:bradyc05@vt.edu" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-gray-400 transition" />
          </a>
          <a href="https://github.com/bradypcook" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/bradypcook/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#4682B4]  transition" />
          </a>
          <a href="https://vt.joinhandshake.com/profiles/bradycook" target="_blank" rel="noopener noreferrer" aria-label="Handshake">
            <div className="flex justify-center items-center">
              <Image
                src="/Handshake_Wordmark_White_RGB.png" 
                alt="Handshake"
                width={150}
                height={25}
                className="hover:opacity-85 object-contain self-center"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}