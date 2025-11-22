export default function Header() {
  return (
    <header className="w-full py-4 bg-black text-white border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">SoftwareHutSavings</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/categories" className="hover:underline">Categories</a>
          <a href="/tools" className="hover:underline">Tools</a>
        </nav>
      </div>
    </header>
  );
}
