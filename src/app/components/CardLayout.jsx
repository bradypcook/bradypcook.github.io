// Takes the ProjectCards function and formats the cards into a grid layot

import ProjectCards from './ProjectCards';

const cards = [
  {
    imageSrc: '/project_alt_image.png',
    title: 'Netrino',
    description: 'Netrino is a program that I created to assist with configuring Cisco IOS devices by allowing you to create & modify configs.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'SharkScope',
    description: 'This is a program that accepts a Wireshark file (typically .pcap) and analyzes it.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'Realistic Network',
    description: 'Made a network in Packet Tracer and provided documentation',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'CVEye',
    description: "This is a program that uses the NIST's National Vulnerability Database API to allow the user to examine CVEs.",
    buttonText: 'CYEye',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'DRSdata',
    description: "Born from my passion of Formula 1 racing (and amateur coding skills), this is a program that uses the F1 API to allow the user to examine statistics about the F1 season.",
    buttonText: 'DRSdata',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'React App',
    description: "This is a project I initially made with some friends in high school, but then polished up this summer to make it more personal. Go check it out!",
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/cyberpatriotfx_logo.png',
    title: 'CyberPatriotFX ',
    description: "This project was inspired by the work of Erik Boeson who intially made this soundboard, which I restyled using my HTML/CSS skills. Click the button below to check out the project!",
    buttonText: 'CyberPatriotFX',
    buttonLink: 'https://bradypcook.github.io/CyberPatriotFX/',
  },
  {
    imageSrc: '/lego_spike_alt.png',
    title: 'First Lego League',
    description: 'A robotic project I did for a college class where we had to make a robot do certain tasks in a set amount of time.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/playmakeicon.png',
    title: 'Playmake Website',
    description: "My first project! Made during AcademiesHacks, it's' a simple musical website where you have to guess the tune of a given track.",
    buttonText: 'Playmake Website',
    buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  },
];

export default function CardGrid() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <ProjectCards key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}