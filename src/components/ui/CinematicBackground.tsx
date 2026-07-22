import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export default function CinematicBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create subtle particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 60);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25 - 0.1,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const accentRgb = hexToRgb(theme.accent);
      const glowRgb = hexToRgb(theme.glow);

      // Draw particle layer
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0.6)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  const accentRgb = hexToRgb(theme.accent);
  const glowRgb = hexToRgb(theme.glow);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Theme Dynamic Gradient Mesh */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.14) 0%, transparent 75%),
            radial-gradient(ellipse 60% 40% at 85% 65%, rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0.09) 0%, transparent 70%),
            radial-gradient(ellipse 70% 50% at 15% 85%, rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.07) 0%, transparent 70%),
            ${theme.bg}
          `,
        }}
      />

      {/* Subtle Digital Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Moving Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
}
