import { notFound } from "next/navigation";

const tools: any = {
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
};

export default async function ToolPage({ params }: any) {
  const { slug } = await params;

  if (!tools[slug]) return notFound();
  const tool = tools[slug];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>
        {tool.name}
      </h1>

      <p style={{ color: "var(--muted)" }}>{tool.description}</p>

      <a
        href={tool.website}
        className="px-6 py-3 rounded-lg font-semibold border hover-accent inline-block"
        style={{
          background: "var(--accent)",
          borderColor: "var(--card-border)",
          color: "var(--foreground)",
        }}
      >
        Visit Website
      </a>
    </div>
  );
}
