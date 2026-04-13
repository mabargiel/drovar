"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function observeElement(el: Element) {
      if (prefersReducedMotion) {
        el.classList.add("visible");
        return;
      }
      if (!el.classList.contains("visible")) {
        intersectionObserver.observe(el);
      }
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe existing elements
    document.querySelectorAll(".animate-on-scroll").forEach(observeElement);

    // Watch for new elements added by client-side navigation
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("animate-on-scroll")) {
              observeElement(node);
            }
            node.querySelectorAll(".animate-on-scroll").forEach(observeElement);
          }
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
