"use client";

import { useEffect, useRef, useState } from "react";

export function EmailContact({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const reset = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (reset.current) clearTimeout(reset.current);
    },
    [],
  );

  async function copyEmail() {
    if (reset.current) clearTimeout(reset.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      reset.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <button
      className="contact-row email-contact"
      type="button"
      aria-label={`Copy email address: ${email}`}
      onClick={() => void copyEmail()}
    >
      <span className="contact-number mono">03</span>
      <span className="contact-icon" aria-hidden="true">
        @
      </span>
      <span className="contact-copy">
        <span className="contact-name">Email</span>
        <span className="contact-description" role="status">
          {status === "copied"
            ? "Email copied!"
            : status === "error"
              ? "Couldn’t copy. Please select the address to copy it."
              : "A good conversation starts with hello."}
        </span>
      </span>
      <span className="contact-destination">
        {email}
        <svg
          className="contact-copy-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {status === "copied" ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" />
            </>
          )}
        </svg>
      </span>
    </button>
  );
}
