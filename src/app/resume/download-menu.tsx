"use client";

import { useEffect, useRef, useState } from "react";

export type ResumeFile = {
  format: "PDF" | "DOCX";
  href: string;
  filename: string;
};

export function DownloadMenu({ files }: { files: ResumeFile[] }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "downloaded" | "error"
  >("idle");
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    if (!open) return;
    root.current
      ?.querySelector<HTMLButtonElement>(".download-options button")
      ?.focus();
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  async function download(file: ResumeFile) {
    setOpen(false);
    trigger.current?.focus();
    setStatus("loading");
    controller.current = new AbortController();
    try {
      const response = await fetch(file.href, {
        signal: controller.current.signal,
      });
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setStatus("downloaded");
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError"))
        setStatus("error");
    }
  }

  return (
    <div
      className="download-control"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        className={`button button-primary download-button ${status === "downloaded" ? "downloaded" : ""}`}
        disabled={!files.length || status === "loading"}
        aria-expanded={open}
        aria-controls="download-options"
        onClick={() => setOpen(!open)}
      >
        <span key={status} className="download-label">
          {status === "downloaded"
            ? "✓ Downloaded"
            : status === "loading"
              ? "Downloading…"
              : "Download"}
        </span>
        <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="download-options" id="download-options">
          <p>CHOOSE A FORMAT</p>
          {files.map((file) => (
            <button key={file.format} onClick={() => void download(file)}>
              <span>
                {file.format === "PDF" ? "PDF document" : "Word document"}
              </span>
              <span className="mono">.{file.format.toLowerCase()} ↓</span>
            </button>
          ))}
        </div>
      )}
      <span
        role="status"
        className={status === "error" ? "download-error" : "sr-only"}
      >
        {status === "error"
          ? "Couldn’t download. Please try again."
          : status === "downloaded"
            ? "Resume sent to your browser for download."
            : ""}
      </span>
    </div>
  );
}
