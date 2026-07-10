import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Blog } from "../components/sections/Blog";
import { Contact } from "../components/sections/Contact";
import { ChatWidget } from "../components/ui/ChatWidget";

export function BlogPage() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main className="pt-16">
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
