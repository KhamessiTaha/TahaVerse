import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";

const StarLayer = ({ count, radius, color, size, speed, opacity }) => {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count), { radius })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / speed.x;
      ref.current.rotation.y -= delta / speed.y;
      ref.current.rotation.z -= delta / speed.z;
    }
  });

  return (
    <Points
      ref={ref}
      stride={3}
      positions={sphere}
      frustumCulled
    >
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

const StarBackground = (props) => {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Deep space background */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#0a0a0a" />
      </mesh>
      
      {/* Multiple star layers for depth */}
      {/* Background stars - furthest, smallest, slowest */}
      <StarLayer 
        count={3000}
        radius={2.0}
        color="#6366f1"
        size={0.001}
        speed={{ x: 20, y: 25, z: 30 }}
        opacity={0.4}
      />
      
      {/* Mid-ground stars */}
      <StarLayer 
        count={2000}
        radius={1.5}
        color="#a78bfa"
        size={0.002}
        speed={{ x: 15, y: 20, z: 25 }}
        opacity={1}
      />
      
      {/* Foreground stars - closest, largest, fastest */}
      <StarLayer 
        count={1000}
        radius={1.0}
        color="#ffffff"
        size={0.003}
        speed={{ x: 10, y: 15, z: 20 }}
        opacity={0.8}
      />
      
      {/* Bright accent stars */}
      <StarLayer 
        count={200}
        radius={0.8}
        color="#fbbf24"
        size={0.004}
        speed={{ x: 8, y: 12, z: 15 }}
        opacity={1.5}
      />
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0" style={{ zIndex: 1 }}>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export { StarBackground };
export default StarsCanvas;