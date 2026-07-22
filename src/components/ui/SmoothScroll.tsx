import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export let globalLenis: Lenis | null = null;

export function scrollToElement(targetId: string) {
  const element = document.getElementById(targetId);
  if (!element) return;

  if (globalLenis) {
    globalLenis.scrollTo(element, {
      duration: 1.8,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });
  } else {
    gsap.to(window, {
      duration: 1.8,
      scrollTo: { y: element, offsetY: 70 },
      ease: "power3.inOut",
    });
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (shouldReduceMotion || isTouch) return;

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    globalLenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      globalLenis = null;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, [shouldReduceMotion]);

  return <>{children}</>;
}
