export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black text-neutral-400 border-t border-neutral-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} SoftwareHutSavings — All rights reserved.</p>
      </div>
    </footer>
  );
}
