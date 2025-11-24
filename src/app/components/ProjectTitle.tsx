export default function ProjectTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-white mb-6 text-center">
      {title}
    </h2>
  );
}