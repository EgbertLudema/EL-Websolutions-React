"use client";
import { useEffect } from "react";

export function useHideRecaptchaOnFooter(footerSelector = "footer") {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const footer = document.querySelector(footerSelector);
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("hide-recaptcha", entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    io.observe(footer);
    return () => io.disconnect();
  }, [footerSelector]);
}
