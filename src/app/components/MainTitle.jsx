// Manages the main title section on the home page

export default function MainTitle() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-black to-indigo-900 text-white px-4 text-center">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
        Hello there! I'm 
      </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Brady Cook</h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg tracking-wide">
            about computer networking, cybersecurity, programming, and much more!
        </p>
      </div>
    </div>
  );
}