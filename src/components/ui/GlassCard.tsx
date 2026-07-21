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
      className={`flat-panel bg-white border border-[#E4E3DF] p-6 transition-all duration-200 hover:border-[#1F4E79]/40 ${className}`}
    >
      {children}
    </div>
  );
}
