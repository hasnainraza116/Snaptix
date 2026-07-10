import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { Process } from "../components/sections/Process";
import { Gallery } from "../components/sections/Gallery";
import { Stats } from "../components/sections/Stats";
import { Blog } from "../components/sections/Blog";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";
import { ChatWidget } from "../components/ui/ChatWidget";

export function Home() {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Gallery />
        <Stats />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
