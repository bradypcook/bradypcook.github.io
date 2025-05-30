// Creates the cards for the Project tab

import Image from 'next/image';

export default function ProjectCardsComponent({ imageSrc, title, description, buttonText, buttonLink }) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg max-w-sm w-full mx-auto flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4 text-white flex flex-col space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>

        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-4 py-2 font-bold bg-blue-600 rounded-md hover:bg-[#4682B4] transition-colors duration-300 text-center"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}