export default function SkillsList({ sections, bulletSection }) {
  return (
    <section className="py-12 px-4">
      <div className="bg-zinc-800 rounded-xl shadow-md p-6 sm:p-10 max-w-5xl mx-auto space-y-10">
        {sections.map((section, index) => (
            <div key={index} className="space-y-6">
                {section.title && (
                <h3 className="text-xl font-bold text-center text-white">{section.title}</h3>
        )}
        <div className="flex flex-wrap justify-center gap-8 text-center">
            {section.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2 w-24 sm:w-28">
                {item.svg && (
                    /*Writing this for myself, but the below line will change the size of the CompTIA SVGs */
                    <div className="w-16 h-16 sm:w-40 sm:h-20 flex items-center justify-center">
                        {item.svg}
                    </div>
                )}
                <p className="text-sm sm:text-base font-semibold text-gray-200">{item.label}</p>
            </div>
        ))}
        </div>
        {index < sections.length - 1 && (
        <hr className="w-full border-gray-600 my-8" />
        )}
    </div>
    ))}

        {bulletSection && (
          <>
            <hr className="w-full border-gray-600 my-8" />
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">{bulletSection.header}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-left max-w-md mx-auto">
                {bulletSection.items.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}