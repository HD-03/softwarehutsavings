import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default async function CategoryPage({ params }: any) {
  const { slug } = await params;

  const category = categories.find((c) => c.slug === slug);
  if (!category) return notFound();

  const toolsInCategory = tools.filter((t) => t.category === slug);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>
        {category.name}
      </h1>

      {toolsInCategory.map((tool) => (
        <a
          key={tool.slug}
          href={`/tools/${tool.slug}`}
          className="block p-6 rounded-lg border hover-card"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
            color: "var(--foreground)",
          }}
        >
          <h2 className="text-xl font-semibold">{tool.name}</h2>
          <p style={{ color: "var(--muted)" }}>{tool.description}</p>
        </a>
      ))}
    </div>
  );
}
