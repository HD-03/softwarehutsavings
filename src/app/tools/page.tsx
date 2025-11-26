import { tools } from "@/data/tools";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="space-y-10">
      <h1
        className="text-3xl font-bold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        All Tools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="p-6 rounded-lg border hover-card transition"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)",
            }}
          >
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>

            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {tool.description?.substring(0, 90) || "Software tool"}
              {tool.description && tool.description.length > 90 ? "..." : ""}
            </p>

            <div
              className="mt-4 text-sm font-semibold hover-text"
              style={{ color: "var(--foreground)" }}
            >
              View Details →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
