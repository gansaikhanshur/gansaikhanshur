"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { rankings } from "@/content/site";
import Image from "next/image";
import { RankingNotes } from "./ranking-notes";

export function RankingExplorer() {
  const [selection, setSelection] = useState({ category: 0, rank: 0 });
  const [pending, setPending] = useState(selection);
  const curtain = useRef<HTMLDivElement>(null);
  const animations = useRef<Animation[]>([]);
  const generation = useRef(0);
  const category = rankings[selection.category];
  const pick = category.picks[selection.rank];

  useEffect(
    () => () => {
      generation.current++;
      animations.current.forEach((animation) => animation.cancel());
    },
    [],
  );

  async function select(next: typeof selection) {
    if (next.category === pending.category && next.rank === pending.rank)
      return;
    const run = ++generation.current;
    animations.current.forEach((animation) => animation.cancel());
    setPending(next);
    const tiles = Array.from(curtain.current?.children ?? []);
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !tiles.length
    ) {
      setSelection(next);
      return;
    }
    animations.current = tiles.map((tile, i) =>
      tile.animate(
        [
          { opacity: 0, transform: "scale(.85)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        {
          duration: 130,
          delay: ((i * 37) % 17) * 10,
          fill: "forwards",
          easing: "ease-out",
        },
      ),
    );
    try {
      await Promise.all(
        animations.current.map((animation) => animation.finished),
      );
      if (generation.current !== run) return;
      setSelection(next);
      // Let React paint the new selection behind the fully covered surface.
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );
      const artwork =
        curtain.current?.parentElement?.querySelectorAll<HTMLImageElement>(
          ".ranking-cover img",
        );
      await Promise.all(
        Array.from(artwork ?? []).map((image) =>
          image.decode().catch(() => {}),
        ),
      );
      if (generation.current !== run) return;
      animations.current.forEach((animation) => animation.cancel());
      animations.current = tiles.map((tile, i) =>
        tile.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 180,
          delay: ((i * 23) % 19) * 9,
          fill: "backwards",
          easing: "ease-in",
        }),
      );
      await Promise.all(
        animations.current.map((animation) => animation.finished),
      );
      if (generation.current === run) animations.current = [];
    } catch {
      /* A newer selection or unmount intentionally cancels the transition. */
    }
  }

  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % rankings.length;
    else if (event.key === "ArrowLeft")
      next = (index + rankings.length - 1) % rankings.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = rankings.length - 1;
    else return;
    event.preventDefault();
    document.getElementById(`category-${rankings[next].id}`)?.focus();
    void select({ category: next, rank: 0 });
  }

  return (
    <section className="rankings-section" aria-label="Favorite rankings">
      <div className="category-tabs" role="tablist" aria-label="Categories">
        {rankings.map((item, i) => (
          <button
            key={item.id}
            id={`category-${item.id}`}
            role="tab"
            aria-selected={pending.category === i}
            aria-controls="ranking-panel"
            tabIndex={pending.category === i ? 0 : -1}
            onKeyDown={(event) => tabKey(event, i)}
            onClick={() => void select({ category: i, rank: 0 })}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="ranking-layout">
        <div className="rank-selector" role="group" aria-label="Choose rank">
          <span className="eyebrow">THE TOP THREE</span>
          {[0, 1, 2].map((rank) => (
            <button
              className={pending.rank === rank ? "selected" : ""}
              key={rank}
              aria-pressed={pending.rank === rank}
              onClick={() => void select({ category: pending.category, rank })}
            >
              <span className="rank-number">0{rank + 1}</span>
              <span>
                {["The favorite", "A close second", "Rounding it out"][rank]}
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
          <p className="ranking-footnote">
            Personal picks.
            <br />
            Always open to a new favorite.
          </p>
        </div>
        <div
          className={`ranking-panel ranking-theme-${category.id}`}
          id="ranking-panel"
          role="tabpanel"
          aria-labelledby={`category-${category.id}`}
          tabIndex={0}
          aria-busy={
            pending.category !== selection.category ||
            pending.rank !== selection.rank
          }
        >
          <div className="ranking-content">
            <div className="ranking-meta">
              <span>
                {category.shortLabel} / {category.label.toUpperCase()}
              </span>
              <span>0{selection.rank + 1} — 03</span>
            </div>
            <span className="giant-rank" aria-hidden="true">
              0{selection.rank + 1}
            </span>
            <div className="ranking-feature">
              <div
                className="ranking-detail"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="eyebrow">
                  {pick
                    ? `RANKED #${selection.rank + 1}`
                    : `#${selection.rank + 1} / OPEN SPOT`}
                </span>
                <h2>{pick?.title ?? "Still deciding."}</h2>
                {pick?.note && <p>{pick.note}</p>}
                {!pick && <p>One spot left on the shelf.</p>}
              </div>
              {pick && (
                <div className="ranking-art-group">
                  <div
                    className={`ranking-artworks ${pick.artwork.length > 1 ? "ranking-artworks-pair" : ""}`}
                  >
                    {pick.artwork.map((art) => (
                      <figure className="ranking-artwork" key={art.src}>
                        <div className="ranking-cover">
                          <Image
                            src={art.src}
                            alt={art.alt}
                            fill
                            sizes="(max-width: 700px) 240px, 300px"
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                  <RankingNotes
                    key={pick.title}
                    pick={pick}
                    category={category}
                    shortcutEnabled={
                      pending.category === selection.category &&
                      pending.rank === selection.rank
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className="pixel-curtain" ref={curtain} aria-hidden="true">
            {Array.from({ length: 96 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
