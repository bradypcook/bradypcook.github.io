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
    title: 'Wireshark Analyzer',
    description: 'This is a program that accepts a Wireshark file (typically .pcap) and analyzes it.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook',
  },
  {
    imageSrc: '/project_alt_image.png',
    title: 'CVE Finder',
    description: "This is a program that uses the NIST's National Vulnerability Database API to allow the user to examine CVEs.",
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
    imageSrc: '/lego_spike.png',
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
    buttonLink: '/Playmake-Website/index.html',
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