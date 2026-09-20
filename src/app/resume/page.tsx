import type { Metadata } from "next";
import { access } from "node:fs/promises";
import path from "node:path";
import { DownloadMenu, type ResumeFile } from "./download-menu";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Gansaikhan Shur’s resume.",
};

async function resumeFiles(): Promise<ResumeFile[]> {
  const available = await Promise.all(
    (["PDF", "DOCX"] as const).map(async (format) => {
      const filename = `resume.${format.toLowerCase()}`;
      try {
        await access(path.join(process.cwd(), "public", "resume", filename));
        return {
          format,
          href: `/resume/${filename}`,
          filename: `Gansaikhan-Shur-Resume.${format.toLowerCase()}`,
        };
      } catch {
        return null;
      }
    }),
  );
  return available.filter((file): file is ResumeFile => file !== null);
}

export default async function ResumePage() {
  const files = await resumeFiles();
  const pdf = files.find((file) => file.format === "PDF");
  return (
    <main id="main" className="page resume-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE EXPERIENCE</p>
          <h1>My resume.</h1>
        </div>
        <DownloadMenu files={files} />
      </div>
      <section className="resume-viewer" aria-label="Resume document">
        <div className="document-toolbar">
          <span>
            <span aria-hidden="true">▤</span> Gansaikhan Shur / Resume
          </span>
          {pdf ? (
            <a href={pdf.href} target="_blank" rel="noreferrer">
              Open PDF <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="document-status">NOT PUBLISHED YET</span>
          )}
        </div>
        {pdf ? (
          <iframe
            title="Gansaikhan Shur’s resume"
            src={`${pdf.href}#view=FitH`}
            className="resume-frame"
          />
        ) : (
          <div className="resume-empty">
            <span className="document-symbol" aria-hidden="true">
              ↳
            </span>
            <p className="eyebrow">THE NEXT CHAPTER</p>
            <h2>
              {files.length ? "Available to download." : "Resume coming soon."}
            </h2>
            <p>
              {files.length
                ? "Download the Word document above. A PDF preview will be added soon."
                : "My experience, all in one place. Check back soon for the full document and downloads."}
            </p>
          </div>
        )}
      </section>
      <div className="resume-caption">
        <span>
          {pdf
            ? "The original document, exactly as intended."
            : "Experience · Education · Skills"}
        </span>
        <span>
          {files.length
            ? files.map((file) => file.format).join(" / ")
            : "PDF / DOCX"}
        </span>
      </div>
    </main>
  );
}
