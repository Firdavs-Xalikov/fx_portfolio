import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glowColor?: string;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  tiltStrength = 10,
  glowColor = "rgba(59, 130, 246, 0.08)",
  delay = 0,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltStrength, -tiltStrength]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltStrength, tiltStrength]), {
    stiffness: 300,
    damping: 30,
  });

  const sheenX = useTransform(mouseX, [0, 1], ["-100%", "200%"]);
  const sheenOpacity = useMotionValue(0);
  const sheenOpacitySpring = useSpring(sheenOpacity, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    sheenOpacity.set(1);
    
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
    sheenOpacity.set(0);
  };

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={ref}
        className={`glass-card preserve-3d relative overflow-hidden h-full ${className}`}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformPerspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {/* Reflection sheen */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)`,
              backgroundSize: "200% 100%",
              backgroundPositionX: sheenX,
              opacity: sheenOpacitySpring,
            }}
          />
        )}

        {/* Glow on hover */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 rounded-[inherit]"
            style={{
              background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 50%)`,
              opacity: sheenOpacitySpring,
            }}
          />
        )}

        <div className="relative z-20 h-full w-full">{children}</div>
      </motion.div>
    </div>
  );
}
