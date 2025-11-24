import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 bg-black text-white border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        
        {/* Clickable Title */}
        <Link href="/" className="text-xl font-semibold hover:underline">
          SoftwareHutSavings
        </Link>

        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/categories" className="hover:underline">Categories</Link>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <Link href="/affiliate-disclosure" className="hover:underline">Disclosure</Link>
        </nav>
      </div>
    </header>
  );
}
