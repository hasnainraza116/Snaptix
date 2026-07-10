import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Process } from "../components/sections/Process";
import { Gallery } from "../components/sections/Gallery";
import { Contact } from "../components/sections/Contact";
import { ChatWidget } from "../components/ui/ChatWidget";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main className="pt-16">
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
