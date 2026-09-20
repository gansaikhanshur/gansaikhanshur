import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "Personal projects by Gansaikhan Shur: Neural Edge AI and AI skills and tools, including Planorama and Forklore.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / PERSONAL PROJECTS</p>
          <h1>
            Ideas into
            <br />
            <em>something real.</em>
          </h1>
        </div>
        <p className="intro">
          Selected projects, experiments,
          <br />
          and tools I’m building.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div
              className={`project-visual project-visual-${index}`}
              aria-hidden="true"
            >
              {index === 0 ? (
                <Image
                  src="/images/projects/neural-edge.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1000px) 100vw, 50vw"
                  className="project-background"
                />
              ) : (
                <div className="tools-art">
                  <span>
                    planorama<span>↗</span>
                  </span>
                  <span>
                    forklore<span>⌘</span>
                  </span>
                </div>
              )}
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h2>{project.name}</h2>
              {project.description && <p>{project.description}</p>}
              {project.motto && <blockquote>{project.motto}</blockquote>}
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <div className="tool-entry" key={tool.name}>
                    <div>
                      {tool.href ? (
                        <a href={tool.href} target="_blank" rel="noreferrer">
                          {tool.name} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span>{tool.name}</span>
                      )}
                      <span className="tool-status">{tool.status}</span>
                    </div>
                    <p>{tool.description}</p>
                  </div>
                ))}
              </div>
              {project.href && (
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore project <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
