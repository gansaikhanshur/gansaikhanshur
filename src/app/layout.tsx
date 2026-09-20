import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Personal website`,
    template: `%s — ${profile.name}`,
  },
  description:
    "The personal corner of Gansaikhan Shur. Projects, a resume, and a few favorite things.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <header className="site-header">
            <Link
              href="/"
              className="wordmark"
              aria-label={`${profile.name}, home`}
            >
              {profile.name}
            </Link>
            <SiteNav />
          </header>
          {children}
          <footer className="site-footer">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>Always Leveling Up. Choose Quality.</span>
            <Link href="/contact">
              Let’s connect <span aria-hidden="true">↗</span>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
