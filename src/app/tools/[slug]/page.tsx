import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);

  if (!tool) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>

      <p className="text-neutral-300 mb-6">{tool.description}</p>

      <a
        href={tool.website}
        className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-300 transition"
      >
        Visit Website
      </a>
    </div>
  );
}
