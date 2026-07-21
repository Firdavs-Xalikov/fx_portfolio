import type { ReactNode } from "react";

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
}: GlassCardProps) {
  return (
    <div
      className={`bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-6 transition-all duration-300 hover:border-[rgba(251,245,183,0.25)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}
