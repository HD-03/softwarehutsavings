import { notFound } from "next/navigation";

// Define categories with "as const" to lock keys + values
const categories = {
  "ai-tools": ["Jasper", "Notion AI", "Copy.ai"],
  "developer-tools": ["GitHub Copilot", "JetBrains", "Postman"],
  "marketing-seo": ["Ahrefs", "Semrush", "Mailchimp"],
  "productivity": ["Notion", "Todoist", "Trello"],
  "security-vpn": ["NordVPN", "ExpressVPN"],
  "hosting-domains": ["Bluehost", "Namecheap", "HostGator"],
} as const;

// Create a union type of all valid category slugs
type CategorySlug = keyof typeof categories;

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as CategorySlug;

  // If slug is not in our categories object, show 404
  if (!(slug in categories)) return notFound();

  const tools = categories[slug];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {slug.replace("-", " ").toUpperCase()}
      </h1>

      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool}>
            <a
              href={`/tools/${tool.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-
