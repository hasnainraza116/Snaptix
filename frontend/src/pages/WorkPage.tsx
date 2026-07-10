import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Projects } from "../components/sections/Projects";
import { Stats } from "../components/sections/Stats";
import { Contact } from "../components/sections/Contact";
import { ChatWidget } from "../components/ui/ChatWidget";

export function WorkPage() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main className="pt-16">
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
