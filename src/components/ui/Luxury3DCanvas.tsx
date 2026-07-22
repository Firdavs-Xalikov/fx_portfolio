import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function LuxuryHeroSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ pointer }, delta) => {
    if (meshRef.current) {
      // Slow elegant continuous rotation + subtle mouse tilt response
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, pointer.y * 0.3, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, pointer.x * 0.3, 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
      ringRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Primary Studio Torus Knot in Chrome / Glass Finish */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.8, 0.45, 128, 32]} />
        <meshPhysicalMaterial
          color="#0D1B2A"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          transmission={0.3}
          thickness={0.8}
        />
      </mesh>

      {/* Outer Titanium Orbiting Halo */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Luxury3DCanvas() {
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

  if (shouldReduceMotion || isMobile) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none opacity-85 overflow-hidden flex items-center justify-center"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: "none" }}
      >
        {/* Studio-Quality Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#F5F5F7" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#0066FF" />
        <pointLight position={[0, 10, -5]} intensity={1} color="#6E56CF" />

        <LuxuryHeroSculpture />
      </Canvas>
    </div>
  );
}
