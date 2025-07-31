export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Trevl</span> —
        Bygget med ❤️ i Next.js & TypeScript
      </div>
    </footer>
  );
}
