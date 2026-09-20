"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const scramble = useCallback(() => {
    cancelAnimationFrame(frame.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame.current = requestAnimationFrame(() => setDisplay(text));
      return;
    }
    const start = performance.now();
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const tick = (now: number) => {
      const elapsed = now - start;
      setDisplay(
        [...text]
          .map((letter, index) => {
            if (!/[a-z]/i.test(letter)) return letter;
            const delay = Math.abs(index - (text.length - 1) / 2) * 24;
            if (elapsed < delay || elapsed > delay + 360) return letter;
            const replacement =
              characters[Math.floor(now / 45 + index * 7) % characters.length];
            return letter === letter.toLowerCase()
              ? replacement.toLowerCase()
              : replacement;
          })
          .join(""),
      );
      if (elapsed < text.length * 12 + 400)
        frame.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    frame.current = requestAnimationFrame(tick);
  }, [text]);
  useEffect(() => {
    scramble();
    return () => cancelAnimationFrame(frame.current);
  }, [scramble]);
  return (
    <span className="scramble-text" onMouseEnter={scramble}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("\n").map((line, index) => (
          <span className="scramble-line" key={index}>
            <span className="scramble-measure">{line}</span>
            <span className="scramble-display">
              {display.split("\n")[index]}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
