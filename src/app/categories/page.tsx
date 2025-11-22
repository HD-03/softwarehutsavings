// src/app/categories/page.tsx

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
    <div>
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <a
            href={`/categories/${cat.slug}`}
            key={cat.slug}
            className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:border-white transition"
          >
            <h2 className="text-xl font-semibold">{cat.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
