import "@testing-library/jest-dom";

// Mock matchMedia for jsdom environment
if (typeof window !== "undefined" && !window.matchMedia) {
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

// Mock canvas.getContext and requestAnimationFrame for jsdom
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

  window.requestAnimationFrame = (callback: FrameRequestCallback): number => {
    return Number(setTimeout(() => callback(performance.now()), 0));
  };
  window.cancelAnimationFrame = (id: number): void => {
    clearTimeout(id);
  };
}
