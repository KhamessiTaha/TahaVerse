import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Black Hole with gravitational lensing effect
function BlackHole({ position = [0, 0, 0] }) {
  const meshRef = useRef();
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    const shader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(1024, 1024) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          float r = length(uv);
          
          // Event horizon
          float eventHorizon = 0.6;
          
          // Photon sphere and shadow
          float photonSphere = 0.9;
          float shadow = smoothstep(eventHorizon, photonSphere, r);
          
          // Gravitational redshift effect
          float redshift = 1.0 - exp(-r * 2.0);
          
          // Create the black hole shadow with subtle edge glow
          vec3 shadowColor = vec3(0.0, 0.0, 0.0);
          vec3 edgeGlow = vec3(0.2, 0.1, 0.4) * pow(1.0 - shadow, 3.0);
          
          // Hawking radiation glow (very subtle)
          float hawkingGlow = exp(-r * 8.0) * 0.1;
          vec3 hawkingColor = vec3(0.1, 0.2, 0.8) * hawkingGlow;
          
          vec3 finalColor = mix(shadowColor, edgeGlow + hawkingColor, shadow);
          
          // Complete transparency for the center (true black hole)
          float alpha = r < eventHorizon ? 0.0 : shadow;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    setMaterial(shader);
    return () => shader.dispose();
  }, []);

  useFrame(({ clock }) => {
    if (material) {
      material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  if (!material) return null;

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

// Realistic Accretion Disk with proper physics
function AccretionDisk() {
  const diskRef = useRef();
  const [diskMaterial, setDiskMaterial] = useState(null);

  useEffect(() => {
    const shader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 }
      },
      vertexShader: `
        attribute float angle;
        attribute float radius;
        attribute float temperature;
        varying vec3 vColor;
        varying float vOpacity;
        uniform float time;
        
        void main() {
          // Keplerian orbital motion (faster closer to black hole)
          float orbitalSpeed = 1.0 / sqrt(radius);
          float currentAngle = angle + time * orbitalSpeed * 0.5;
          
          vec3 pos = vec3(
            cos(currentAngle) * radius,
            sin(currentAngle * 0.1) * 0.1 * radius, // Slight vertical wobble
            sin(currentAngle) * radius
          );
          
          // Temperature-based color (blackbody radiation)
          if (temperature > 0.8) {
            vColor = vec3(1.0, 0.8, 0.4); // Hot - white/yellow
          } else if (temperature > 0.5) {
            vColor = vec3(1.0, 0.4, 0.1); // Medium - orange
          } else {
            vColor = vec3(0.8, 0.1, 0.0); // Cool - red
          }
          
          // Brightness based on distance and temperature
          vOpacity = temperature * (1.0 / (radius * 0.5 + 0.1));
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (1000.0 / length(gl_Position.xyz)) * temperature * 2.0;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float r = length(uv);
          
          // Circular particle with soft edges
          float alpha = smoothstep(0.5, 0.2, r) * vOpacity;
          
          // Add some glow effect
          float glow = exp(-r * 4.0) * 0.3;
          vec3 finalColor = vColor + glow;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    setDiskMaterial(shader);
    return () => shader.dispose();
  }, []);

  const diskGeometry = useMemo(() => {
    const particleCount = 12000;
    const positions = new Float32Array(particleCount * 3);
    const angles = new Float32Array(particleCount);
    const radii = new Float32Array(particleCount);
    const temperatures = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Realistic disk density distribution
      const u = Math.random();
      const radius = 2.8 + Math.pow(u, 0.5) * 4.5; // Power law distribution
      const angle = Math.random() * Math.PI * 2;
      
      // Height based on distance (thinner closer to black hole)
      const height = (Math.random() - 0.5) * Math.exp(-radius * 0.3) * 0.4;
      
      positions[i * 3] = 0; // Will be calculated in vertex shader
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      
      angles[i] = angle;
      radii[i] = radius;
      
      // Temperature inversely related to radius (inner regions hotter)
      temperatures[i] = Math.pow(1.0 / radius, 0.25) * (0.5 + Math.random() * 0.5);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('angle', new THREE.BufferAttribute(angles, 1));
    geometry.setAttribute('radius', new THREE.BufferAttribute(radii, 1));
    geometry.setAttribute('temperature', new THREE.BufferAttribute(temperatures, 1));
    
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (diskMaterial) {
      diskMaterial.uniforms.time.value = clock.getElapsedTime();
    }
  });

  if (!diskMaterial) return null;

  return (
    <points ref={diskRef} geometry={diskGeometry}>
      <primitive object={diskMaterial} attach="material" />
    </points>
  );
}

// Gravitational Lensing Effect
function GravitationalLensing() {
  const lensRef = useRef();
  const [lensMaterial, setLensMaterial] = useState(null);

  useEffect(() => {
    const shader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          float r = length(uv);
          
          // Einstein ring effect
          float ring1 = abs(r - 1.4);
          float ring2 = abs(r - 1.8);
          
          float ringIntensity1 = exp(-ring1 * 20.0) * 0.3;
          float ringIntensity2 = exp(-ring2 * 15.0) * 0.2;
          
          // Distortion effect
          float distortion = smoothstep(0.8, 2.0, r) * 0.1;
          
          vec3 color = vec3(ringIntensity1 + ringIntensity2) * vec3(1.0, 0.8, 0.4);
          float alpha = (ringIntensity1 + ringIntensity2) * distortion;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    setLensMaterial(shader);
    return () => shader.dispose();
  }, []);

  useFrame(({ clock }) => {
    if (lensMaterial) {
      lensMaterial.uniforms.time.value = clock.getElapsedTime();
    }
    if (lensRef.current) {
      lensRef.current.rotation.z += 0.001;
    }
  });

  if (!lensMaterial) return null;

  return (
    <mesh ref={lensRef}>
      <ringGeometry args={[3, 8, 64]} />
      <primitive object={lensMaterial} attach="material" />
    </mesh>
  );
}

// Enhanced Jets
function RelativisticJets() {
  const jetRef = useRef();
  const [jetMaterial, setJetMaterial] = useState(null);

  useEffect(() => {
    const shader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 }
      },
      vertexShader: `
        attribute float intensity;
        varying float vIntensity;
        uniform float time;
        
        void main() {
          vIntensity = intensity;
          
          vec3 pos = position;
          // Add some turbulence to the jets
          pos.x += sin(time * 2.0 + position.y * 0.1) * 0.1;
          pos.z += cos(time * 1.5 + position.y * 0.1) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = intensity * 4.0;
        }
      `,
      fragmentShader: `
        varying float vIntensity;
        
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float r = length(uv);
          
          float alpha = smoothstep(0.5, 0.0, r) * vIntensity;
          vec3 color = vec3(0.3, 0.6, 1.0) * vIntensity;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    setJetMaterial(shader);
    return () => shader.dispose();
  }, []);

  const jetGeometry = useMemo(() => {
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const intensities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const isTopJet = i < particleCount / 2;
      const t = (i % (particleCount / 2)) / (particleCount / 2);
      
      const y = isTopJet ? t * 15 : -t * 15;
      const spread = Math.pow(t, 0.3) * 0.5;
      
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      
      intensities[i] = (1.0 - t) * (0.3 + Math.random() * 0.7);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('intensity', new THREE.BufferAttribute(intensities, 1));
    
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (jetMaterial) {
      jetMaterial.uniforms.time.value = clock.getElapsedTime();
    }
  });

  if (!jetMaterial) return null;

  return (
    <points ref={jetRef} geometry={jetGeometry}>
      <primitive object={jetMaterial} attach="material" />
    </points>
  );
}

// Main Black Hole Component
export default function BlackHoleComponent() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 3, 12);
  }, [camera]);

  return (
    <>
      <color attach="background" args={['#000000']} />
      
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.05} />
      <pointLight position={[20, 20, 20]} intensity={0.3} color="#4444ff" />
      <pointLight position={[-20, -20, -20]} intensity={0.2} color="#ff4444" />
      
      {/* Main components */}
      <BlackHole position={[0, 0, 0]} />
      <AccretionDisk />
      <GravitationalLensing />
      <RelativisticJets />
      
      {/* Enhanced starfield */}
      <Stars 
        radius={200} 
        depth={100} 
        count={8000} 
        factor={6} 
        saturation={0.2} 
        fade 
        speed={0.3} 
      />
    </>
  );
}