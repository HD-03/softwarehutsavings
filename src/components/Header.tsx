"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme or default to light
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Toggle themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="w-full py-4 border-b"
      style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold hover:underline">
          SoftwareHutSavings
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/categories" className="hover:underline">Categories</Link>
          <Link href="/tools" className="hover:underline">Tools</Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-md border transition"
            style={{
              background: "var(--accent)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            {theme === "light" ? "🌙 Dark" : "🌞 Light"}
          </button>
        </nav>

      </div>
    </header>
  );
}
