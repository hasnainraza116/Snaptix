import { Link } from "react-router-dom";
import { services } from "../../lib/content";

const companyLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-beacon via-[#1a1147] to-violet px-6 pt-16 pb-8">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #FB7185, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-white">
              <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-white to-coral" />
              Snaptix
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/60 normal-case">
              AI products that work — chatbots, web apps, and intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white normal-case">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-coral transition-colors normal-case"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white normal-case">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-coral transition-colors normal-case"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white normal-case">
              Say hi
            </h3>
            <a
              href="mailto:hasnainraza116@gmail.com"
              className="mt-4 inline-block text-sm text-white/60 hover:text-coral transition-colors normal-case"
            >
              hasnainraza116@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50 normal-case">
          © {new Date().getFullYear()} Snaptix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
