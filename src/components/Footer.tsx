export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black text-neutral-400 border-t border-neutral-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm flex flex-col gap-3">
        <p>© {new Date().getFullYear()} SoftwareHutSavings — All rights reserved.</p>

        <div className="flex justify-center gap-6">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/affiliate-disclosure" className="hover:text-white">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}
