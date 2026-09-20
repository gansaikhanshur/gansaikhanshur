"use client";

import { useEffect, useId, useRef } from "react";
import type { RankedPick, RankingCategory } from "@/content/site";

export function RankingNotes({
  pick,
  category,
  shortcutEnabled,
}: {
  pick: RankedPick;
  category: RankingCategory;
  shortcutEnabled: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const sections = pick.notes ?? category.notesPrompt.sections;

  useEffect(() => {
    if (category.id !== "games" || !shortcutEnabled) return;
    function handleKey(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() !== "x" ||
        event.repeat ||
        event.isComposing ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.defaultPrevented ||
        document.querySelector("dialog[open]")
      )
        return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.closest("input, textarea, select, [role='textbox']"))
      )
        return;
      event.preventDefault();
      trigger.current?.focus();
      dialog.current?.showModal();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [category.id, shortcutEnabled]);

  return (
    <>
      <button
        ref={trigger}
        className="ranking-note-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-keyshortcuts={
          category.id === "games" && shortcutEnabled ? "x" : undefined
        }
        onClick={() => dialog.current?.showModal()}
      >
        {pick.notesLabel ?? category.notesPrompt.linkLabel}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <dialog
        ref={dialog}
        className="ranking-notes-dialog"
        aria-labelledby={titleId}
        onKeyDown={(event) => {
          // Notes are read-only; Close is the dialog's only tab stop.
          if (event.key === "Tab") {
            event.preventDefault();
            closeButton.current?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="ranking-notes-surface">
          <div className="ranking-notes-header">
            <p className="eyebrow">{category.label} / PERSONAL NOTES</p>
            <button
              ref={closeButton}
              className="ranking-notes-close"
              type="button"
              aria-label="Close notes"
              onClick={() => dialog.current?.close()}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <h2 id={titleId}>{pick.title}</h2>
          {!pick.notes && (
            <p className="ranking-notes-status">
              A page waiting to be filled. Personal notes coming soon.
            </p>
          )}
          <div className="ranking-notes-sections">
            {sections.map((section) => (
              <section key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
