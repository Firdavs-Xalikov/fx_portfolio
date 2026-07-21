import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  tiltStrength?: number;
}

export default function GlassCard({
  children,
  className = "",
  tiltStrength = 10,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse position values inside the card (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt angles
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse positions to 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltStrength, tiltStrength]);

  // Spot glow cursor position inside card (percentage)
  const spotX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates from -0.5 to 0.5
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
      className={`perspective-1000 relative bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-6 transition-all duration-300 hover:border-[rgba(251,245,183,0.25)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Sheen sweep overlay: warm gold-tinted light reflection */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-[rgba(251,245,183,0.06)] to-transparent transform -rotate-45" />
      </motion.div>

      {/* Spot glow radial spotlight following cursor */}
      {!shouldReduceMotion && isHovered && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px z-0 rounded-inherit opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${spotX.get()}% ${spotY.get()}%, rgba(47, 175, 131, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
