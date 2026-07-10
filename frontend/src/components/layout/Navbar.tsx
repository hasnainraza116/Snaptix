import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "../ui/Button";

const links = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b bg-panel/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-paper/10 shadow-[0_4px_24px_-8px_rgba(24,27,29,0.12)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl uppercase tracking-wide text-paper">
          <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-signal to-beacon" />
          Snaptix
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-sm text-muted transition-colors hover:text-paper"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="text-xs">Get in touch</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-paper/10 bg-panel md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-left text-sm text-paper"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="text-left text-sm text-signal">
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
