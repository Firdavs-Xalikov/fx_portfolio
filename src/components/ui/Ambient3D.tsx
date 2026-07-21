import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function ParticleField({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;

  // Generate particle positions and colors (emerald & champagne gold)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const emerald = new THREE.Color("#2FAF83");
    const champagne = new THREE.Color("#BF9B30");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const isGold = Math.random() > 0.6;
      const c = isGold ? champagne : emerald;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  // Scroll parallax & continuous ambient drift
  useFrame((_state, delta) => {
    if (!pointsRef.current || shouldReduceMotion) return;

    // Slow ambient rotation
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;

    // Subtle scroll parallax response
    const scrollY = window.scrollY || 0;
    pointsRef.current.position.y = -scrollY * 0.0015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Ambient3D() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Do not render heavy 3D canvas on mobile or if reduced motion is requested
  if (shouldReduceMotion || isMobile) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-40 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        style={{ pointerEvents: "none" }}
      >
        <ParticleField shouldReduceMotion={shouldReduceMotion} />
      </Canvas>
    </div>
  );
}
