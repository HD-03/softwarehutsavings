import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default function HomePage() {
  const featuredCategories = categories.slice(0, 3);
  const featuredTools = tools.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Save Money on the Best Software Tools
        </h1>

        <p className="max-w-2xl mx-auto mb-8" style={{ color: "var(--muted)" }}>
          SoftwareHutSavings helps you discover deals, discounts, and offers on AI,
          developer, security, hosting, and productivity tools.
        </p>

        <Link
          href="/categories"
          className="px-6 py-3 rounded-lg font-semibold border hover-accent"
          style={{
            background: "var(--accent)",
            borderColor: "var(--card-border)",
            color: "var(--foreground)",
          }}
        >
          Browse Categories
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="p-6 rounded-lg border hover-card"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p style={{ color: "var(--muted)" }}>Explore deals on {cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
          Featured Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="p-6 rounded-lg border hover-card"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p style={{ color: "var(--muted)" }}>
                {tool.description.substring(0, 70)}...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
