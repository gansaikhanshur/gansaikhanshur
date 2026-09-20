import type { Metadata } from "next";
import { RankingExplorer } from "./ranking-explorer";

export const metadata: Metadata = {
  title: "Rankings",
  description:
    "Gansaikhan’s top three books, video games, movies, TV shows, anime, animated films, and animated shows.",
};

export default function RankingsPage() {
  return (
    <main id="main" className="page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / THE PERSONAL SIDE</p>
          <h1>
            Very subjective.
            <br />
            <em>Very good.</em>
          </h1>
        </div>
        <p className="intro">
          The things that stay with me.
          <br />
          Seven categories. Three favorites each.
        </p>
      </div>
      <RankingExplorer />
    </main>
  );
}
