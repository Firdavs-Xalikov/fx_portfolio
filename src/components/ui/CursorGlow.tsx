import { useEffect, useRef, useState } from "react";

interface CursorGlowProps {
  color?: string;
}

export default function CursorGlow({ color = "rgba(59, 130, 246, 0.08)" }: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        background: `radial-gradient(circle 250px at center, ${color} 0%, transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
}
