// Manages the title sections on the subpages (About Me, Projects, etc.)


export default function SubTitle({ title }) {
  return (
    <div className="h-[30vh] flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#00E701] text-white px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">{title}</h1>
      </div>
    </div>
  );
}