import { notFound } from "next/navigation";

const categories: Record<string, string[]> = {
  "ai-tools": ["Jasper", "Notion AI", "Copy.ai"],
  "developer-tools": ["GitHub Copilot", "JetBrains", "Postman"],
  "marketing-seo": ["Ahrefs", "Semrush", "Mailchimp"],
  "productivity": ["Notion", "Todoist", "Trello"],
  "security-vpn": ["NordVPN", "ExpressVPN"],
  "hosting-domains": ["Bluehost", "Namecheap", "HostGator"],
};

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const tools = categories[slug];
  if (!tools) return notFound();

  const title = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <ul className="space-y-4">
        {tools.map((tool) => {
          const toolSlug = tool.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={tool}>
              <a href={`/tools/${toolSlug}`} className="text-xl hover:underline">
                {tool}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
