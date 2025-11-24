// Takes the ProjectCards function and formats the cards into a grid layout

import ProjectCards from './ProjectCards';
import ProjectTitle from './ProjectTitle';

<ProjectTitle title="Networking & Infrastructure" />

const codingCards = [
  {
    imageSrc: '/project_logos/netrino_home.png',
    title: 'Netrino',
    description: 'Netrino is a python program that I created to assist with configuring Cisco IOS devices by allowing you to create & modify network device config files.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook/Netrino',
  },
  {
    imageSrc: '/project_logos/project_alt_image.png',
    title: 'SharkScope',
    description: 'Sharkscope is a python program that accepts a Wireshark file (typically .pcap) and analyzes it.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook/SharkScope',
  },
  {
    imageSrc: '/project_logos/lego_spike_alt.png',
    title: 'First Lego League',
    description: 'A robotics project I did for a college class where we had to make a LEGO SPIKE robot do certain tasks in a set amount of time. Converted the code to python afterwards in order to upload it to GitHub.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook/FLL-robot',
  },
]

const basicWebDevCards = [
{
    imageSrc: '/project_logos/cyberpatriotfx_logo.png',
    title: 'CyberPatriotFX ',
    description: "This website was inspired by the work of Erik Boeson who intially made this soundboard, which I restyled using my HTML/CSS skills. Click the button below to check out the project!",
    buttonText: 'CyberPatriotFX',
    buttonLink: 'https://bradypcook.github.io/CyberPatriotFX/',
  },
  {
    imageSrc: '/project_logos/playmakeicon.png',
    title: 'Playmake Website',
    description: "My first coding project! Made during AcademiesHacks, it's a simple musical website where you have to guess the tune of a given track.",
    buttonText: 'Playmake Website',
    buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  }, 
]

const modernWebDevCards = [
   {
    imageSrc: '/project_logos/drsdata_home.png',
    title: 'DRSdata',
    description: `Born from my passion of Formula 1 racing (and amateur coding skills), this is a program that uses the FastF1 API to allow the user to see the standings for the ${new Date().getFullYear()} season, and more!`,
    buttonText: 'DRSdata',
    buttonLink: 'https://bradypcook.github.io/drsdata/',
    // Used FastF1 API instead of OpenF1 API 
  },
  {
    imageSrc: '/project_logos/cveye_close.png',
    title: 'CVEye',
    description: "This is a website that uses the NIST's National Vulnerability Database API to allow the user to examine CVEs (Common Vulnerabilites and Exposures).",
    buttonText: 'CYEye',
    buttonLink: 'https://bradypcook.github.io/cveye/',
    // API Link: https://nvd.nist.gov/developers/vulnerabilities 
  },
]

const labCards = [
  {
    imageSrc: '/project_logos/hns_logo.png',
    title: 'HawkNode Security Network',
    description: 'Designed and implemented a CAN (Campus Area Network) for a hypothetical corporation (HawkNode Security) in Cisco Packet Tracer and created proper documentation for others to view.',
    buttonText: 'View on GitHub',
    buttonLink: 'https://github.com/bradypcook/HawkNodeSecurity_Network',
  },
   //{
    //imageSrc: '/project_logos/________.png',
    //title: 'ROMMON Mode Access',
    //description: "Created a lab in Cisco Packet Tracer where users can access ROM memory (Read Only Memory) for when they get locked out of the switch. Posted the results on GitHub.",
    //buttonText: 'Playmake Website',
    //buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  //},
  //{
    //imageSrc: '/project_logos/________.png',
    //title: 'Active Directory Project',
    //description: "Insert project details here.",
    //buttonText: 'Playmake Website',
    //buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  //},
  //{
    //imageSrc: '/project_logos/________.png',
    //title: 'SimpleSIEM',
    //description: "Insert SimpleSIEM details here.",
    //buttonText: 'SimpleSIEM',
    //buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  //},
  //{
    //imageSrc: '/project_logos/________.png',
    //title: 'Something with a VM',
    //description: "Insert project details here.",
    //buttonText: 'Playmake Website',
    //buttonLink: 'https://bradypcook.github.io/Playmake-Website/',
  //},
];

// --- Main Component ---
export default function CardGrid() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">


        {/* Labs*/}
        <ProjectTitle title="CYBERSECURITY LABS" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {labCards.map((card, idx) => (
            <ProjectCards key={idx} {...card} />
          ))}
        </div>

          {/* Next.js Web Development */}
        <ProjectTitle title=" MODERN WEB DEVELOPMENT" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modernWebDevCards.map((card, idx) => (
            <ProjectCards key={idx} {...card} />
          ))}
        </div>

        {/* Basic Web Development */}
        <ProjectTitle title="BASIC WEB DEVELOPMENT" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {basicWebDevCards.map((card, idx) => (
            <ProjectCards key={idx} {...card} />
          ))}
        </div>

        {/* Software Development Projects */}
        <ProjectTitle title="CODING PROJECTS" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {codingCards.map((card, idx) => (
            <ProjectCards key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}