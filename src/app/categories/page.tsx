export default function CategoriesPage() {
  const categories = [
    { name: "AI Tools", slug: "ai-tools" },
    { name: "Developer Tools", slug: "developer-tools" },
    { name: "Marketing & SEO", slug: "marketing-seo" },
    { name: "Productivity", slug: "productivity" },
    { name: "Security & VPN", slug: "security-vpn" },
    { name: "Hosting & Domains", slug: "hosting-domains" },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>
        Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="p-6 rounded-lg border hover-card"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)",
            }}
          >
            <h2 className="text-xl font-semibold mb-1">{cat.name}</h2>
            <p style={{ color: "var(--muted)" }}>
              Explore deals on {cat.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
