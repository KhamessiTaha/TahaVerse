import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Html, Text, Sparkles, Environment } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Realistic planet data with actual characteristics
const PLANET_DATA = {
  mercury: { baseColor: '#8c7853', emissive: '#8c7853', roughness: 0.9, metalness: 0.1 },
  venus: { baseColor: '#ffc649', emissive: '#ffc649', roughness: 0.8, metalness: 0.2 },
  earth: { baseColor: '#6b93d6', emissive: '#4f7942', roughness: 0.6, metalness: 0.3 },
  mars: { baseColor: '#cd5c5c', emissive: '#8b0000', roughness: 0.8, metalness: 0.1 },
  jupiter: { baseColor: '#d8ca9d', emissive: '#d2691e', roughness: 0.7, metalness: 0.2 },
  saturn: { baseColor: '#fab27b', emissive: '#daa520', roughness: 0.6, metalness: 0.3 },
}

const Planet = ({ 
  orbitRadius = 10, 
  speed = 0.01, 
  size = 1, 
  name, 
  initialAngle = 0,
  planetType = 'earth',
  onClick,
  hasRings = false,
  hasMoons = false
}) => {
  const ref = useRef()
  const moonRef = useRef()
  const ringsRef = useRef()
  const angleRef = useRef(initialAngle)
  const moonAngleRef = useRef(0)
  const [hovered, setHover] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0.3)
  
  const planetData = PLANET_DATA[planetType] || PLANET_DATA.earth

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Planet orbit
    angleRef.current += speed
    const x = Math.cos(angleRef.current) * orbitRadius
    const z = Math.sin(angleRef.current) * orbitRadius
    if (ref.current) {
      ref.current.position.set(x, 0, z)
      ref.current.rotation.y += 0.008
      
      // Subtle floating motion
      ref.current.position.y = Math.sin(time * 0.5 + initialAngle) * 0.3
    }

    // Moon orbit
    if (hasMoons && moonRef.current) {
      moonAngleRef.current += speed * 3
      const moonX = x + Math.cos(moonAngleRef.current) * (size + 1.5)
      const moonZ = z + Math.sin(moonAngleRef.current) * (size + 1.5)
      moonRef.current.position.set(moonX, 0, moonZ)
      moonRef.current.rotation.y += 0.02
    }

    // Ring rotation
    if (hasRings && ringsRef.current) {
      ringsRef.current.rotation.z += 0.005
    }

    // Dynamic glow effect
    setGlowIntensity(0.3 + Math.sin(time * 2) * 0.1)
  })

  return (
    <group>
      {/* Main Planet */}
      <mesh 
        ref={ref}
        onClick={onClick}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={planetData.baseColor}
          emissive={planetData.emissive}
          emissiveIntensity={glowIntensity}
          roughness={planetData.roughness}
          metalness={planetData.metalness}
          transparent
          opacity={hovered ? 0.95 : 1}
        />
        
        {/* Planet Atmosphere Glow */}
        <mesh scale={[1.1, 1.1, 1.1]}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshBasicMaterial 
            color={planetData.emissive}
            transparent
            opacity={hovered ? 0.15 : 0.08}
            side={THREE.BackSide}
          />
        </mesh>
        
        {/* Planet Label */}
        <Html 
          distanceFactor={12} 
          center
          style={{ pointerEvents: 'none' }}
          occlude={false}
          transform={false}
          sprite={false}
        >
          <div className={`text-sm font-bold text-center px-3 py-2 rounded-full transition-all duration-200 text-white shadow-lg border pointer-events-none
            ${hovered ? 'bg-gradient-to-r from-cyan-500/40 to-purple-500/40 backdrop-blur-md scale-105 border-cyan-400/60' : 'bg-black/50 backdrop-blur-sm border-white/30'}`}>
            {name}
          </div>
        </Html>
        
        {hovered && (
          <>
            <Text
              position={[0, size + 1.2, 0]}
              fontSize={0.4}
              color="#00ffff"
              anchorX="center"
              anchorY="middle"
            >
              CLICK TO EXPLORE
            </Text>
            
            {/* Reduced particle effect */}
            <Sparkles
              count={20}
              scale={[size * 2, size * 2, size * 2]}
              size={1}
              speed={0.4}
              color="#00ffff"
              opacity={0.6}
            />
          </>
        )}
      </mesh>

      {/* Saturn-like Rings */}
      {hasRings && (
        <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.3, size * 1.8, 64]} />
          <meshBasicMaterial 
            color="#daa520" 
            side={THREE.DoubleSide} 
            transparent 
            opacity={0.6}
          />
        </mesh>
      )}

      {/* Moon */}
      {hasMoons && (
        <mesh ref={moonRef} castShadow>
          <sphereGeometry args={[size * 0.3, 16, 16]} />
          <meshStandardMaterial 
            color="#c0c0c0"
            emissive="#404040"
            emissiveIntensity={0.1}
            roughness={0.9}
          />
        </mesh>
      )}
    </group>
  )
}

const Sun = () => {
  const sunRef = useRef()
  const coronaRef = useRef()
  const [hovered, setHover] = useState(false)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.003
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.001
      coronaRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05)
    }
  })

  return (
    <group>
      {/* Sun Core */}
      <mesh ref={sunRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial 
          emissive="#ff6b00" 
          emissiveIntensity={hovered ? 3 : 2.5}
          color="#ffaa00"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Sun Corona */}
      <mesh ref={coronaRef} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial 
          color="#ff4500"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Sun Flares */}
      <Sparkles
        count={100}
        scale={[12, 12, 12]}
        size={4}
        speed={1.2}
        color="#ffaa00"
      />
      
      <Html distanceFactor={25} center style={{ pointerEvents: 'none' }} occlude={false}>
        <div className={`text-2xl font-bold text-center px-6 py-3 rounded-full transition-all duration-300 shadow-2xl pointer-events-none
          ${hovered ? 'bg-gradient-to-r from-orange-500/40 to-red-500/40 backdrop-blur-md text-orange-200 scale-105' : 'bg-black/50 backdrop-blur-sm text-yellow-200'}`}>
          🌟 TahaVerse
        </div>
      </Html>
    </group>
  )
}

const AsteroidBelt = () => {
  const groupRef = useRef()
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  const asteroids = Array.from({ length: 200 }, (_, i) => {
    const radius = 22 + Math.random() * 4
    const angle = (i / 200) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const y = (Math.random() - 0.5) * 0.8
    
    return { x, y, z, scale: 0.1 + Math.random() * 0.15 }
  })

  return (
    <group ref={groupRef}>
      {asteroids.map((asteroid, i) => (
        <mesh key={i} position={[asteroid.x, asteroid.y, asteroid.z]} scale={asteroid.scale}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

const ProjectSystem = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [cameraTarget, setCameraTarget] = useState([0, 0, 0])
  const controlsRef = useRef()
  
  const projects = [
    {
      name: "🌍 Galaxy Blog",
      orbitRadius: 8,
      speed: 0.012,
      size: 1.2,
      initialAngle: 0,
      planetType: 'earth',
      hasMoons: true,
      description: "A cosmic blog platform built with Next.js and Cosmic CMS. Features real-time collaboration, markdown support, and a beautiful space-themed UI that makes writing feel like exploring the universe.",
      link: "https://galaxy-blog.demo.com",
      technologies: ["Next.js", "Cosmic CMS", "Framer Motion", "Tailwind CSS"],
      status: "Live"
    },
    {
      name: "🪐 EternaVerse",
      orbitRadius: 12,
      speed: 0.008,
      size: 1.8,
      initialAngle: Math.PI / 2,
      planetType: 'saturn',
      hasRings: true,
      description: "Revolutionary blockchain-based metaverse with NFT integration. Users can create, trade, and explore virtual worlds while earning cryptocurrency through gameplay and content creation.",
      link: "https://eternaverse.demo.com",
      technologies: ["React", "Three.js", "Solidity", "Web3.js", "IPFS"],
      status: "Beta"
    },
    {
      name: "🔴 AI Astrolab",
      orbitRadius: 16,
      speed: 0.005,
      size: 1.4,
      initialAngle: Math.PI,
      planetType: 'mars',
      description: "Advanced machine learning platform for astronomical data analysis. Processes telescope imagery, identifies celestial objects, and predicts cosmic events using cutting-edge AI algorithms.",
      link: "https://ai-astrolab.demo.com",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      status: "Development"
    },
    {
      name: "☄️ Quantum Trader",
      orbitRadius: 20,
      speed: 0.003,
      size: 1.1,
      initialAngle: Math.PI * 1.5,
      planetType: 'venus',
      description: "High-frequency trading platform powered by quantum computing algorithms. Analyzes market patterns across multiple exchanges and executes trades at lightning speed.",
      link: "https://quantum-trader.demo.com",
      technologies: ["Python", "Qiskit", "React", "WebSocket", "Redis"],
      status: "Research"
    }
  ]

  const handlePlanetClick = (project) => {
    setSelectedProject(project)
    // Calculate planet position for camera focus
    const angle = project.initialAngle
    const x = Math.cos(angle) * project.orbitRadius
    const z = Math.sin(angle) * project.orbitRadius
    setCameraTarget([x, 0, z])
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      
      <Canvas 
        camera={{ position: [0, 20, 45], fov: 65 }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.2} color="#4a5568" />
          <pointLight position={[0, 0, 0]} intensity={4} color="#ff6b00" castShadow />
          <spotLight
            position={[30, 40, 30]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[4096, 4096]}
          />
          <spotLight
            position={[-30, 40, -30]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            color="#4299e1"
            castShadow
          />

          {/* Enhanced Starfield - Always visible */}
          <Stars 
            radius={300} 
            depth={200} 
            count={15000} 
            factor={6} 
            saturation={0.8}
            fade={false}
            speed={0.2}
          />

          {/* Multiple Nebula Layers for better coverage */}
          <mesh>
            <sphereGeometry args={[400, 32, 32]} />
            <meshBasicMaterial 
              color="#1a202c"
              transparent
              opacity={0.15}
              side={THREE.BackSide}
            />
          </mesh>
          
          <mesh>
            <sphereGeometry args={[350, 32, 32]} />
            <meshBasicMaterial 
              color="#2d3748"
              transparent
              opacity={0.08}
              side={THREE.BackSide}
            />
          </mesh>
          
          <mesh>
            <sphereGeometry args={[250, 32, 32]} />
            <meshBasicMaterial 
              color="#553c9a"
              transparent
              opacity={0.05}
              side={THREE.BackSide}
            />
          </mesh>

          <Sun />
          <AsteroidBelt />

          {/* Enhanced Orbit Paths */}
          {projects.map((project, index) => (
            <group key={`orbit-group-${index}`}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[project.orbitRadius - 0.05, project.orbitRadius + 0.05, 128]} />
                <meshBasicMaterial color="#4a5568" side={THREE.DoubleSide} transparent opacity={0.4} />
              </mesh>
              {/* Orbit markers */}
              {Array.from({ length: 8 }, (_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const x = Math.cos(angle) * project.orbitRadius
                const z = Math.sin(angle) * project.orbitRadius
                return (
                  <mesh key={i} position={[x, 0, z]}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
                  </mesh>
                )
              })}
            </group>
          ))}

          {projects.map((project, index) => (
            <Planet
              key={index}
              {...project}
              onClick={() => handlePlanetClick(project)}
            />
          ))}

          <OrbitControls 
            ref={controlsRef}
            target={cameraTarget}
            enableZoom={true}
            minDistance={20}
            maxDistance={200}
            autoRotate
            autoRotateSpeed={0.3}
            enablePan={true}
            dampingFactor={0.08}
            enableDamping
            rotateSpeed={0.8}
            zoomSpeed={1.2}
            panSpeed={0.8}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
        </Suspense>
      </Canvas>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-10 backdrop-blur-md">
          <div className="bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-gray-900/95 border border-cyan-500/50 rounded-2xl p-8 max-w-4xl w-[90%] relative backdrop-blur-xl shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-all text-3xl hover:rotate-90 duration-300"
            >
              ×
            </button>
            
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{selectedProject.name.split(' ')[0]}</div>
              <div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {selectedProject.name.slice(2)}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  selectedProject.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                  selectedProject.status === 'Beta' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                  selectedProject.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                  'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                }`}>
                  {selectedProject.status}
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="font-semibold">Launch Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
              <button className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 font-semibold">
                View Source Code
              </button>
              <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 rounded-xl hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 font-semibold">
                Case Study
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Space Portfolio
          </h1>
          <p className="text-sm text-gray-400 mt-1">Click on planets to explore projects</p>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-xs text-gray-400">
          <div>🖱️ Drag to rotate • 🔍 Scroll to zoom</div>
          <div>🪐 Click planets to explore</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSystem