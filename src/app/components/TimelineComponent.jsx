import Image from 'next/image'

export default function TimelineComponent({ boxes }) {
  return (
    <section className="relative bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-10 relative">
        {boxes.map((box, index) => (
          <div key={index} className="relative">
            <div className="relative bg-zinc-800 p-6 rounded-xl shadow-lg text-white text-center flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">{box.title}</h2>
              <p className="mb-4">{box.text}</p>
              
              {box.image && (
                <div className="mb-4">
                  <Image
                    src={box.image}
                    alt={box.title}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              )}

              {box.buttonText && box.buttonLink && (
                <a
                  href={box.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 font-bold bg-blue-600 rounded-md hover:bg-[#4682B4] transition-colors duration-300"
                >
                  {box.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}