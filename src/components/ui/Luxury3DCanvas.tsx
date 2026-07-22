import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

function GlassSphere({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ pointer }, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.4, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.4, 0.05);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshPhysicalMaterial
          color={accentColor}
          metalness={0.1}
          roughness={0.05}
          transmission={0.9}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
          reflectivity={0.9}
        />
      </mesh>
      {/* Glow Halo */}
      <mesh scale={1.15}>
        <sphereGeometry args={[2.0, 32, 32]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.15} wireframe />
      </mesh>
    </group>
  );
}

function ChromeAbstractShape({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ pointer }, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.z += delta * 0.08;
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.3, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.3, 0.05);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.7, 0.45, 128, 32]} />
        <meshStandardMaterial
          color="#121620"
          metalness={0.95}
          roughness={0.08}
          emissive={accentColor}
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh scale={1.2}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function FuturisticAiChip({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer }, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.3 + 0.3, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.3, 0.05);
    }
  });

  return (
    <group ref={ref}>
      {/* Base Microchip Monolith */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 2.6, 0.3]} />
        <meshStandardMaterial color="#0A0C10" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Die Core */}
      <mesh position={[0, 0, 0.16]}>
        <boxGeometry args={[1.4, 1.4, 0.05]} />
        <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.1} emissive={glowColor} emissiveIntensity={0.6} />
      </mesh>
      {/* Golden/Accent Bus Lines Wireframe */}
      <mesh position={[0, 0, 0.18]}>
        <planeGeometry args={[2.4, 2.4, 16, 16]} />
        <meshBasicMaterial color={glowColor} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function CrystalPrism({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ pointer }, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.18;
      ref.current.rotation.y += delta * 0.22;
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.3, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.3, 0.05);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <octahedronGeometry args={[2.2, 0]} />
        <meshPhysicalMaterial
          color={accentColor}
          metalness={0.05}
          roughness={0.02}
          transmission={0.85}
          thickness={1.5}
          ior={1.8}
          clearcoat={1}
        />
      </mesh>
      <mesh scale={1.08}>
        <octahedronGeometry args={[2.2, 0]} />
        <meshBasicMaterial color={glowColor} wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function MetallicRing({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.3;
      ring1.current.rotation.y += delta * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.y -= delta * 0.25;
      ring2.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.15, 32, 100]} />
        <meshStandardMaterial color="#1A1D24" metalness={0.9} roughness={0.1} emissive={accentColor} emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[1.5, 0.1, 32, 100]} />
        <meshStandardMaterial color={accentColor} metalness={0.95} roughness={0.05} emissive={glowColor} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function MinimalRobotSculpture({ accentColor, glowColor }: { accentColor: string; glowColor: string }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ pointer }, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.2, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.25, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head Monolith */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.6, 2.2, 1.4]} />
        <meshStandardMaterial color="#0A0D14" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Futuristic Visor Light */}
      <mesh position={[0, 0.5, 0.71]}>
        <planeGeometry args={[1.3, 0.18]} />
        <meshBasicMaterial color={glowColor} />
      </mesh>
      {/* Secondary Accent Plate */}
      <mesh position={[0, -0.6, 0.71]}>
        <planeGeometry args={[1.0, 0.05]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>
      {/* Outer Halo ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function Luxury3DCanvas() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const { theme, activeModel } = useTheme();

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

  const renderActiveModel = () => {
    switch (activeModel) {
      case 0:
        return <GlassSphere accentColor={theme.accent} glowColor={theme.glow} />;
      case 1:
        return <ChromeAbstractShape accentColor={theme.accent} glowColor={theme.glow} />;
      case 2:
        return <FuturisticAiChip accentColor={theme.accent} glowColor={theme.glow} />;
      case 3:
        return <CrystalPrism accentColor={theme.accent} glowColor={theme.glow} />;
      case 4:
        return <MetallicRing accentColor={theme.accent} glowColor={theme.glow} />;
      case 5:
        return <MinimalRobotSculpture accentColor={theme.accent} glowColor={theme.glow} />;
      default:
        return <GlassSphere accentColor={theme.accent} glowColor={theme.glow} />;
    }
  };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none opacity-85 overflow-hidden flex items-center justify-center transition-all duration-700"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: "none" }}
      >
        {/* Dynamic Studio Lighting Synchronized with Active Theme */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color={theme.text} />
        <pointLight position={[-10, -10, -5]} intensity={2.5} color={theme.accent} />
        <pointLight position={[0, 10, -5]} intensity={1.8} color={theme.glow} />

        {renderActiveModel()}
      </Canvas>
    </div>
  );
}
