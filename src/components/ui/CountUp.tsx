import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string; // e.g. "6.5 Band Score", "1190 Score", "1st Place", "105.1 Score", "5-6 Years"
  className?: string;
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    // Extract numeric match from string, e.g. "1190" from "1190 Score", "6.5" from "6.5 Band Score"
    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) return;

    const targetNum = parseFloat(match[0]);
    const isFloat = match[0].includes(".");
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easedProgress;

      const formattedNum = isFloat ? currentNum.toFixed(1) : Math.round(currentNum).toString();
      const updatedString = value.replace(match[0], formattedNum);
      setDisplayValue(updatedString);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
