import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SoftwareHutSavings",
  description: "Find deals on software tools and SaaS products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
        <Footer />

        {/* Skimlinks Script */}
        <script
          type="text/javascript"
          src="https://s.skimresources.com/js/YOUR_PUBLISHER_SCRIPT.js"
        ></script>
      </body>
    </html>
  );
}
