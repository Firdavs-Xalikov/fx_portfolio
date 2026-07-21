import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

// 1. Floating Neural Network & AI Nodes (20 nodes + connections)
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 24;

  const [positions, lines] = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      pos.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
      ]);
    }

    const linePos: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = Math.hypot(
          pos[i][0] - pos[j][0],
          pos[i][1] - pos[j][1],
          pos[i][2] - pos[j][2]
        );
        if (dist < 8) {
          linePos.push(...pos[i], ...pos[j]);
        }
      }
    }

    return [pos, new Float32Array(linePos)];
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[-8, 4, -5]}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#00F0FF" : "#9D00FF"} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00F0FF" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

// 2. Animated Cyber Tunnel / Galaxy Matrix Particle Field (300 particles)
function MatrixCyberField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 350;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00F0FF");
    const purple = new THREE.Color("#9D00FF");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const c = Math.random() > 0.5 ? cyan : purple;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.position.y = -(window.scrollY || 0) * 0.002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// 3. Floating 3D Holographic Currency & Crypto Symbols (Bitcoin, Dollar, Ethereum)
function CryptoVault() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = Math.sin(performance.now() * 0.001) * 0.5 + 2;
    }
  });

  return (
    <group ref={groupRef} position={[10, 2, -4]}>
      {/* Octahedron Ethereum emblem */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#00F0FF" wireframe />
      </mesh>
      {/* Torus Ring Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.04, 16, 64]} />
        <meshBasicMaterial color="#9D00FF" />
      </mesh>
    </group>
  );
}

// 4. Central Holographic Earth Sphere & Orbiting Satellites
function EarthGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
      ringRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group position={[0, -12, -8]}>
      <mesh ref={globeRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="#0A0D14" wireframe emissive="#00F0FF" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[4.5, 0.05, 16, 64]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// 5. Floating Glowing Cubes & CPU Core Geometry
function FloatingCubes() {
  const cubesRef = useRef<THREE.Group>(null);
  const cubeData = useMemo(() => {
    return Array.from({ length: 16 }).map(() => ({
      pos: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      scale: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? "#00F0FF" : "#9D00FF",
    }));
  }, []);

  useFrame((_, delta) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * cubeData[i].speed;
        child.rotation.y += delta * cubeData[i].speed;
      });
    }
  });

  return (
    <group ref={cubesRef}>
      {cubeData.map((d, i) => (
        <mesh key={i} position={d.pos} scale={d.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={d.color} wireframe transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function CyberWorld3D() {
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
      className="fixed inset-0 z-0 pointer-events-none opacity-60 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 16], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F0FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9D00FF" />

        <NeuralNetwork />
        <MatrixCyberField />
        <CryptoVault />
        <EarthGlobe />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
