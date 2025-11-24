import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default async function CategoryPage({ params }: any) {
  // NEXT.JS 16 REQUIREMENT: params is now a Promise
  const { slug } = await params;

  const category = categories.find((c) => c.slug === slug);
  if (!category) return notFound();

  const toolsInCategory = tools.filter(
    (t) => t.category === category.slug
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      {toolsInCategory.map((tool) => (
        <a
          key={tool.slug}
          href={`/tools/${tool.slug}`}
          className="block text-xl hover:underline mb-4"
        >
          {tool.name}
        </a>
      ))}
    </div>
  );
}
