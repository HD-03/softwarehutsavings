export default function Footer() {
  return (
    <footer
      className="w-full py-6 border-t mt-12"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
        color: "var(--muted)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center text-sm flex flex-col gap-3">
        <p>© {new Date().getFullYear()} SoftwareHutSavings — All rights reserved.</p>

        <div className="flex justify-center gap-6">
          <a href="/privacy-policy" className="hover-text">Privacy Policy</a>
          <a href="/terms" className="hover-text">Terms</a>
          <a href="/affiliate-disclosure" className="hover-text">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}
