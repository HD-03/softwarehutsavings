type Tool = {
  name: string;
  slug: string;
};

const tools: Tool[] = [
  { name: "Jasper", slug: "jasper" },
  { name: "Notion AI", slug: "notion-ai" },
  { name: "Copy.ai", slug: "copy-ai" },
  { name: "NordVPN", slug: "nordvpn" },
  { name: "Bluehost", slug: "bluehost" },
];

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
