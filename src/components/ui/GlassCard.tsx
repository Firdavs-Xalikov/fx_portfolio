import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
}

export default function GlassCard({
  children,
  className = "",
  tiltStrength = 6,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltStrength, tiltStrength]);

  const spotX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (!shouldReduceMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
      className={`perspective-1000 relative luxury-panel p-8 transition-all duration-300 ${className}`}
    >
      {/* Soft spotlight overlay */}
      {!shouldReduceMotion && isHovered && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px z-0 opacity-100 transition-opacity duration-300 rounded-[12px]"
          style={{
            background: `radial-gradient(400px circle at ${spotX.get()}% ${spotY.get()}%, rgba(255, 255, 255, 0.06), transparent 80%)`,
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
