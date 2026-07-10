import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Services } from "../components/sections/Services";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";
import { ChatWidget } from "../components/ui/ChatWidget";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main className="pt-16">
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
