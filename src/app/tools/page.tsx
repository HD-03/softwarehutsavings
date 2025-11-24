import { tools } from "@/data/tools";

export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Tools</h1>

      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <a href={`/tools/${tool.slug}`} className="text-xl hover:underline">
              {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
