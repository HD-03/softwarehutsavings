import { notFound } from "next/navigation";

type Tool = {
  name: string;
  description: string;
  website: string;
};

const tools: Record<string, Tool> = {
  jasper: {
    name: "Jasper",
    description: "AI writing assistant for content creators.",
    website: "https://jasper.ai",
  },
  "notion-ai": {
    name: "Notion AI",
    description: "AI-powered productivity and documentation tool.",
    website: "https://notion.so",
  },
  "copy-ai": {
    name: "Copy.ai",
    description: "AI content generation platform.",
    website: "https://copy.ai",
  },
  nordvpn: {
    name: "NordVPN",
    description: "Secure VPN service with fast global servers.",
    website: "https://nordvpn.com",
  },
  bluehost: {
    name: "Bluehost",
    description: "Popular website hosting provider.",
    website: "https://bluehost.com",
  },
} as const;

type ToolSlug = keyof typeof tools;

export default async function ToolPage({ params }: { params: { slug: string } }) {
  // MUST AWAIT params in Next.js 16
  const { slug } = await params;

  if (!(slug in tools)) return notFound();

  const tool = tools[slug as ToolSlug];

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
