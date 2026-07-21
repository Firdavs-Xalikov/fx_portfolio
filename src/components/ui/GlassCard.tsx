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
      className={`bg-[#0B0F18] border border-[#1B2130] p-6 transition-colors duration-200 hover:border-[#2E8B74] ${className}`}
    >
      {children}
    </div>
  );
}
