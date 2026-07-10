import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Contact } from "../components/sections/Contact";
import { FAQ } from "../components/sections/FAQ";
import { ChatWidget } from "../components/ui/ChatWidget";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main className="pt-16">
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
