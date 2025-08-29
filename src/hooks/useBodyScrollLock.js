import { useLayoutEffect } from "react";

export function useBodyScrollLock(locked) {
  useLayoutEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY || 0;

    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
    };

    // iOS-safe lock
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";

    // snap back if viewport tries to move (autofill / keyboard)
    const snapBack = () => window.scrollTo(0, scrollY);
    window.addEventListener("scroll", snapBack, { passive: true });
    window.visualViewport?.addEventListener("resize", snapBack);
    window.visualViewport?.addEventListener("scroll", snapBack);

    return () => {
      window.removeEventListener("scroll", snapBack);
      window.visualViewport?.removeEventListener("resize", snapBack);
      window.visualViewport?.removeEventListener("scroll", snapBack);

      // restore styles & scroll
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.width = prev.width;
      document.body.style.overflowY = prev.overflowY;
      const y = Math.abs(parseInt(prev.top || "0", 10)) || scrollY;
      window.scrollTo(0, y);
    };
  }, [locked]);
}
