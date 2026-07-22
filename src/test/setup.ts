import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { gsap } from "gsap";

const safeRaf = (callback: FrameRequestCallback): number => {
  return Number(setTimeout(() => {
    try {
      callback(performance.now());
    } catch {
      // Catch post-teardown callback invocations
    }
  }, 0));
};

const safeCaf = (id: number): void => {
  clearTimeout(id);
};

if (typeof globalThis !== "undefined") {
  (globalThis as any).requestAnimationFrame = safeRaf;
  (globalThis as any).cancelAnimationFrame = safeCaf;
}

if (typeof window !== "undefined") {
  window.requestAnimationFrame = safeRaf;
  window.cancelAnimationFrame = safeCaf;

  if (!window.matchMedia) {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  }
}

// Mock IntersectionObserver for Framer Motion in jsdom
if (typeof window !== "undefined" && !window.IntersectionObserver) {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = "";
    readonly scrollMargin: string = "";
    readonly thresholds: ReadonlyArray<number> = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

// Mock ResizeObserver for embla-carousel and react-wrap-balancer in jsdom
if (typeof window !== "undefined" && !window.ResizeObserver) {
  class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: MockResizeObserver,
  });
  Object.defineProperty(global, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: MockResizeObserver,
  });
}

// Mock canvas.getContext for jsdom
if (typeof window !== "undefined") {
  HTMLCanvasElement.prototype.getContext = (() => {
    return {
      clearRect: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      fillStyle: "",
      strokeStyle: "",
      lineWidth: 1,
    } as any;
  }) as any;
}

afterEach(() => {
  gsap.ticker.sleep();
});
