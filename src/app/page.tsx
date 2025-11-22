export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Save Money on Software & SaaS</h1>
      <p className="text-lg text-neutral-300 mb-8">
        Welcome to SoftwareHutSavings — your home for discounts on the best software tools for freelancers, developers, and businesses.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a href="/categories" className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:border-white transition">
          <h2 className="text-xl font-semibold mb-2">Browse Categories</h2>
          <p>Explore AI tools, security apps, productivity software, dev tools, and more.</p>
        </a>

        <a href="/tools" className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:border-white transition">
          <h2 className="text-xl font-semibold mb-2">View All Tools</h2>
          <p>See a full list of software apps and SaaS products with discounts.</p>
        </a>
      </div>
    </div>
  );
}
