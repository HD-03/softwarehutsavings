import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default function HomePage() {
  // pick 3 categories
  const featuredCategories = categories.slice(0, 3);

  // pick 3 tools
  const featuredTools = tools.slice(0, 3);

  return (
    <div className="space-y-16">
      
      {/* HERO SECTION */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">
          Save Money on the Best Software Tools
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
          SoftwareHutSavings helps you discover deals, discounts, and offers on AI tools, 
          developer tools, productivity apps, and more.
        </p>

        <Link
          href="/categories"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-300 transition"
        >
          Browse Categories
        </Link>
      </section>

      {/* FEATURED CATEGORIES */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:border-white transition"
            >
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p className="text-neutral-400 text-sm">
                Explore deals on {cat.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Link
              href={`/tools/${tool.slug}`}
              key={tool.slug}
              className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:border-white transition"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-neutral-400 text-sm">
                {tool.description.substring(0, 70)}...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
