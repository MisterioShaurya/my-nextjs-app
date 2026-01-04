"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Dodecahedron } from "@react-three/drei"
import type { ReactNode } from "react"

function RotatingDodecahedron() {
  return (
    <group>
      <Dodecahedron scale={2} rotation={[0.3, 0.3, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          wireframe={false}
          metalness={0.8}
          roughness={0.1}
        />
      </Dodecahedron>

      {/* Wireframe overlay for extra cyberpunk feel */}
      <Dodecahedron scale={2} rotation={[0.3, 0.3, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial
          transparent
          opacity={0.2}
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.3}
          wireframe={true}
        />
      </Dodecahedron>
    </group>
  )
}

export function Hero3DScene(): ReactNode {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="h-full w-full" style={{ background: "transparent" }}>
      <ambientLight intensity={0.8} color="#00ffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ff00ff" />

      <RotatingDodecahedron />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} />
    </Canvas>
  )
}
