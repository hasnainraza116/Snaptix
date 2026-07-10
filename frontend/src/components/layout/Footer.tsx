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
    <footer className="border-t border-paper/10 bg-panel px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-paper">
              <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-signal to-beacon" />
              Snaptix
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted normal-case">
              AI products that work — chatbots, web apps, and intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-paper normal-case">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-sm text-muted hover:text-signal transition-colors normal-case"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-paper normal-case">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted hover:text-signal transition-colors normal-case"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-paper normal-case">
              Say hi
            </h3>
            <a
              href="mailto:hasnainraza116@gmail.com"
              className="mt-4 inline-block text-sm text-muted hover:text-signal transition-colors normal-case"
            >
              hasnainraza116@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8 text-sm text-muted normal-case">
          © {new Date().getFullYear()} Snaptix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
