"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function DanishWhisk() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  const { pointer, camera } = useThree();
  const targetRotation = useRef(new THREE.Euler());

  // Point whisk toward mouse pointer with smooth lerp
  useFrame((state, delta) => {
    if (meshRef.current) {
      const mouse = new THREE.Vector3(pointer.x, pointer.y, 0.5);
      mouse.unproject(camera);
      const dir = mouse.sub(camera.position).normalize();
      const angle = Math.atan2(dir.x, dir.y);

      targetRotation.current.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        -angle,
        0.08
      );
      targetRotation.current.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        dir.y * 0.3,
        0.08
      );
      targetRotation.current.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05,
        0.08
      );

      meshRef.current.rotation.y = targetRotation.current.y;
      meshRef.current.rotation.x = targetRotation.current.x;
      meshRef.current.rotation.z = targetRotation.current.z;
    }
  });

  // Dynamic wood grain + brand logo engraving canvas texture
  const woodTexture = useMemo(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    // Base oak color
    ctx.fillStyle = "#e5c195";
    ctx.fillRect(0, 0, 512, 1024);

    // Wood Grain lines
    ctx.strokeStyle = "rgba(181, 141, 92, 0.5)";
    ctx.lineWidth = 4;
    for (let i = 0; i < 512; i += 24) {
      ctx.beginPath();
      ctx.moveTo(i + Math.random() * 20, 0);
      ctx.bezierCurveTo(
        i - 30 + Math.random() * 60, 256,
        i + 30 + Math.random() * 60, 768,
        i + Math.random() * 20, 1024
      );
      ctx.stroke();
    }

    // Logo text "HARRY CORNER®" printed vertically
    ctx.save();
    ctx.translate(256, 512); // Center text
    ctx.rotate(-Math.PI / 2); // Make it vertical running upwards along the handle
    ctx.fillStyle = "#2c2017"; // Rich dark charcoal/brown burnt engraving color
    ctx.font = "bold 32px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("HARRY CORNER®", 0, 0);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  return (
    <group 
      ref={meshRef} 
      scale={0.8} 
      position={[0, 0.5, 0]} /* Shift group up to center the whisk including handle */
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
    >
      {/* Wooden Handle: Tapered cylinder with engraved logo texture */}
      <mesh position={[0, -1.4, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 2.6, 32]} />
        <meshStandardMaterial 
          map={woodTexture || undefined}
          roughness={0.7} 
          metalness={0.1} 
        />
      </mesh>

      {/* Metal Ferrule (Collar) - Polished 304 Stainless Steel cap */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.14, 0.13, 0.3, 32]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.05} 
          metalness={0.98} 
          envMapIntensity={1.5}
        />
      </mesh>

      {/* === LAYER 1 (BACK): Large outer circle === */}
      <mesh position={[0, 0.75, -0.06]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.55, 0.038, 16, 64]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.05} 
          metalness={0.98} 
          envMapIntensity={1.5}
        />
      </mesh>

      {/* === LAYER 2 (FRONT): Horizontal oval - touching ferrule === */}
      <mesh position={[0, 0.65, 0.06]} scale={[1.0, 0.6, 1.0]}>
        <torusGeometry args={[0.5, 0.036, 16, 64]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.05} 
          metalness={0.98} 
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Front layer - Left inner circle */}
      <mesh position={[-0.25, 0.65, 0.06]}>
        <torusGeometry args={[0.2, 0.028, 16, 64]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.05} 
          metalness={0.98} 
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Front layer - Right inner circle */}
      <mesh position={[0.25, 0.65, 0.06]}>
        <torusGeometry args={[0.2, 0.028, 16, 64]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.05} 
          metalness={0.98} 
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Arch wire - Left side: curves from ferrule up to oval */}
      <mesh position={[-0.12, 0.35, 0.06]} rotation={[0, 0, 0.35]}>
        <cylinderGeometry args={[0.028, 0.028, 0.55, 8]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.06} 
          metalness={0.98} 
        />
      </mesh>

      {/* Arch wire - Right side: curves from ferrule up to oval */}
      <mesh position={[0.12, 0.35, 0.06]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.028, 0.028, 0.55, 8]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.06} 
          metalness={0.98} 
        />
      </mesh>

      {/* Arch wire - Left side back: curves from ferrule up to back circle */}
      <mesh position={[-0.12, 0.35, -0.06]} rotation={[0, 0, 0.35]}>
        <cylinderGeometry args={[0.028, 0.028, 0.55, 8]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.06} 
          metalness={0.98} 
        />
      </mesh>

      {/* Arch wire - Right side back: curves from ferrule up to back circle */}
      <mesh position={[0.12, 0.35, -0.06]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.028, 0.028, 0.55, 8]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.06} 
          metalness={0.98} 
        />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ 
        width: "100%", 
        height: "100%", 
        minHeight: "400px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        color: "var(--text-muted)",
        fontSize: "0.85rem",
        letterSpacing: "0.05em"
      }}>
        LOADING 3D UTENSIL...
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={2.0} castShadow />
        <directionalLight position={[-3, 4, -3]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <Environment preset="studio" />
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <DanishWhisk />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
