import Link from "next/link";
import { ScrambleText } from "@/components/scramble-text";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <main id="main" className="page home-page">
      <section className="home-hero" aria-labelledby="welcome">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-cross" aria-hidden="true">
              ✳
            </span>{" "}
            WELCOME TO MY CORNER OF THE INTERNET
          </p>
          <h1 id="welcome">
            <ScrambleText text={`Hello, world.\nI’m ${profile.firstName}.`} />
          </h1>
          <p className="hero-description">
            A place for the things I build,
            <br className="desktop-break" /> the things I love, and what comes
            next.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Explore my projects <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/resume">
              View resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-index" aria-label="Explore the site">
        <Link href="/projects" className="index-item">
          <span className="eyebrow">01 / THE WORK</span>
          <h2>
            Made of ideas.<span aria-hidden="true">↗</span>
          </h2>
          <p>Neural Edge AI, Planorama, Forklore, and more..</p>
        </Link>
        <Link href="/rankings" className="index-item">
          <span className="eyebrow">02 / THE PERSONAL SIDE</span>
          <h2>
            A few favorites.<span aria-hidden="true">↗</span>
          </h2>
          <p>Books, games, and screen favorites. My top three of each.</p>
        </Link>
        <Link href="/contact" className="index-item">
          <span className="eyebrow">03 / THE CONVERSATION</span>
          <h2>
            Say hello.<span aria-hidden="true">↗</span>
          </h2>
          <p>Find me elsewhere on the internet.</p>
        </Link>
      </section>
    </main>
  );
}
