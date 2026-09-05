import { useEffect } from "react";
import { SalesPage } from "./components/SalesPage";
import { ThankYouPage } from "./components/ThankYouPage";
import type { HeroVersion } from "./content/pageContent";
import { heroVersions } from "./content/pageContent";

function normalizePath(pathname: string) {
  return pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
}

function useRevealMotion() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = document.querySelectorAll<HTMLElement>(".reveal, .reveal-list");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -72px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function NotFound({ fallback }: { fallback: HeroVersion }) {
  return <SalesPage hero={fallback} />;
}

export default function App() {
  useRevealMotion();
  const path = normalizePath(window.location.pathname);

  if (path === "obrigado") {
    return <ThankYouPage />;
  }

  if (path === "a1" || path === "a2" || path === "a3") {
    return <SalesPage hero={heroVersions[path]} />;
  }

  return <NotFound fallback={heroVersions.a1} />;
}
