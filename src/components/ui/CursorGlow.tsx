import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface CursorGlowProps {
  color?: string;
}

export default function CursorGlow({
  color = "radial-gradient(circle 260px at center, rgba(0,194,209,0.08) 0%, transparent 80%)"
}: CursorGlowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <motion.div
        className="absolute w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          background: color,
        }}
      />
    </motion.div>
  );
}
