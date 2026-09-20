import type { Metadata } from "next";
import { profile } from "@/content/site";
import { EmailContact } from "./email-contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Gansaikhan Shur on GitHub, LinkedIn, or email.",
};

export default function ContactPage() {
  const contacts = [
    {
      name: "GitHub",
      caption: "Code, projects, and experiments.",
      href: profile.github,
      symbol: "{ }",
      label: "Explore my GitHub",
    },
    {
      name: "LinkedIn",
      caption: "The professional side of things.",
      href: profile.linkedin,
      symbol: "in",
      label: "Connect on LinkedIn",
    },
  ];
  return (
    <main id="main" className="page contact-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / KEEP IN TOUCH</p>
          <h1>
            Good things start
            <br />
            <em>with a hello.</em>
          </h1>
        </div>
        <p className="intro">
          Have an idea, a question,
          <br />
          or a favorite I should check out?
        </p>
      </div>
      <div className="contact-list">
        {contacts.map((contact, i) => {
          const content = (
            <>
              <span className="contact-number mono">0{i + 1}</span>
              <span className="contact-icon" aria-hidden="true">
                {contact.symbol}
              </span>
              <span className="contact-copy">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-description">{contact.caption}</span>
              </span>
              <span className="contact-destination">
                {contact.href ? contact.label : "Link coming soon"}
                {contact.href && <span aria-hidden="true"> ↗</span>}
              </span>
            </>
          );
          return contact.href ? (
            <a
              className="contact-row"
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <div className="contact-row" key={contact.name}>
              {content}
            </div>
          );
        })}
        {profile.email && <EmailContact email={profile.email} />}
      </div>
      <div className="contact-signoff">
        <p>Thanks for stopping by.</p>
      </div>
    </main>
  );
}
