"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";

export function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => {
      const active = nav.querySelector<HTMLElement>('[aria-current="page"]');
      if (active) {
        setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
        const viewport = nav.parentElement;
        viewport?.scrollTo({
          left: Math.max(
            0,
            active.offsetLeft - (viewport.clientWidth - active.offsetWidth) / 2,
          ),
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    document.fonts.ready.then(update);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-track" ref={navRef}>
        <span
          className="nav-indicator"
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.left}px)`,
          }}
        />
        {navigation.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
