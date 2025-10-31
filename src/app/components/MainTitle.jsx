// Manages the main title section on the home page
//#00F5D2 is the mercedes type
//#00E701 is the sauber type

export default function MainTitle() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#00E701] text-white px-4 text-center">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-widest text-lime-400 mb-2">
        Hello there! I'm 
      </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Brady Cook</h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg tracking-wide">
            and welcome to my personal website!
        </p>
      </div>
    </div>
  );
}