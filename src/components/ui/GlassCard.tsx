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
      className={`bg-[#12161F] border border-[#232838] p-6 transition-colors duration-200 hover:border-[#2E8B74] ${className}`}
    >
      {children}
    </div>
  );
}
