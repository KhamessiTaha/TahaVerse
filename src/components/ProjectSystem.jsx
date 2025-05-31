import { Canvas } from "@react-three/fiber";
import { Cat } from "./Cat";
import {
  OrbitControls,
  Html,
  Text,
  Sparkles,
  Environment,
  useTexture,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect, memo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

const SKYBOX_TEXTURES = [
  "skybox/px.png", // right
  "skybox/nx.png", // left
  "skybox/py.png", // top
  "skybox/ny.png", // bottom
  "skybox/pz.png", // front
  "skybox/nz.png", // back
];

// Enhanced planet data with better visual characteristics
const PLANET_DATA = {
  mercury: {
    baseColor: "#8c7853",
    emissive: "#8c7853",
    roughness: 0.9,
    metalness: 0.1,
    atmosphere: "#8c7853",
  },
  venus: {
    baseColor: "#ffc649",
    emissive: "#ffc649",
    roughness: 0.8,
    metalness: 0.2,
    atmosphere: "#ffc649",
  },
  earth: {
    baseColor: "#6b93d6",
    emissive: "#4f7942",
    roughness: 0.6,
    metalness: 0.3,
    atmosphere: "#6b93d6",
  },
  mars: {
    baseColor: "#cd5c5c",
    emissive: "#8b0000",
    roughness: 0.8,
    metalness: 0.1,
    atmosphere: "#cd5c5c",
  },
  jupiter: {
    baseColor: "#d8ca9d",
    emissive: "#d2691e",
    roughness: 0.7,
    metalness: 0.2,
    atmosphere: "#d8ca9d",
  },
  saturn: {
    baseColor: "#fab27b",
    emissive: "#daa520",
    roughness: 0.6,
    metalness: 0.3,
    atmosphere: "#fab27b",
  },
};

const Skybox = () => {
  const textures = useTexture(SKYBOX_TEXTURES);
  const sceneRef = useRef();

  useEffect(() => {
    const cubeTexture = new THREE.CubeTextureLoader().load(SKYBOX_TEXTURES);
    sceneRef.current.background = cubeTexture;
  }, []);

  return <scene ref={sceneRef} />;
};

const Planet = memo(
  ({
    orbitRadius = 10,
    speed = 0.01,
    size = 1,
    name,
    initialAngle = 0,
    planetType = "earth",
    onClick,
    hasRings = false,
    hasMoons = false,
    selected = false,
    showLabels = true,
    featured = false,
  }) => {
    const ref = useRef();
    const moonRef = useRef();
    const ringsRef = useRef();
    const angleRef = useRef(initialAngle);
    const moonAngleRef = useRef(0);
    const [hovered, setHover] = useState(false);
    const [glowIntensity, setGlowIntensity] = useState(0.3);
    const [isPreloaded, setIsPreloaded] = useState(false);
    const labelRef = useRef();

    const planetData = PLANET_DATA[planetType] || PLANET_DATA.earth;
    useEffect(() => {
      const preloadTimer = setTimeout(() => {
        setIsPreloaded(true);
      }, 100);
      return () => clearTimeout(preloadTimer);
    }, []);

    useFrame((state) => {
      if (selected) return;

      const time = state.clock.getElapsedTime();

      // Planet orbit
      angleRef.current += speed;
      const x = Math.cos(angleRef.current) * orbitRadius;
      const z = Math.sin(angleRef.current) * orbitRadius;

      if (ref.current) {
        ref.current.position.set(x, 0, z);
        ref.current.rotation.y += 0.008;
        ref.current.position.y = Math.sin(time * 0.5 + initialAngle) * 0.3;
      }

      // Batch all other animations here instead of separate useFrame calls
      if (hasMoons && moonRef.current) {
        moonAngleRef.current += speed * 3;
        const moonX = x + Math.cos(moonAngleRef.current) * (size + 1.5);
        const moonZ = z + Math.sin(moonAngleRef.current) * (size + 1.5);
        moonRef.current.position.set(moonX, 0, moonZ);
        moonRef.current.rotation.y += 0.02;
      }

      if (hasRings && ringsRef.current) {
        ringsRef.current.rotation.z += 0.005;
      }

      // Update glow intensity less frequently
      if (Math.floor(time * 10) % 5 === 0) {
        setGlowIntensity(0.3 + Math.sin(time * 2) * 0.1);
      }
    });

    // Hide label when selected or hovered
    useEffect(() => {
      if (labelRef.current) {
        labelRef.current.style.visibility = selected ? "hidden" : "visible";
      }
    }, [selected, hovered]);

    return (
      <group>
        {/* Main Planet */}
        {featured && (
          <Sparkles
            count={15}
            scale={size * 3}
            size={2}
            speed={0.5}
            color="#ffffff"
            opacity={1}
          />
        )}
        <mesh
          ref={ref}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            if (!selected && isPreloaded) setHover(true);
          }}
          onPointerOut={() => {
            if (!selected) setHover(false);
          }}
          scale={hovered && !selected ? [1.2, 1.2, 1.2] : [1, 1, 1]}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={planetData.baseColor}
            emissive={planetData.emissive}
            emissiveIntensity={selected ? 0.8 : glowIntensity}
            roughness={planetData.roughness}
            metalness={planetData.metalness}
          />
          {featured && (
            <mesh scale={[1.3, 1.3, 1.3]}>
              <sphereGeometry args={[size, 16, 16]} />
              <meshBasicMaterial
                color="#00ffff"
                transparent
                opacity={0.1}
                side={THREE.BackSide}
              />
            </mesh>
          )}
          {/* Planet Atmosphere Glow */}
          <mesh scale={[1.1, 1.1, 1.1]}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshBasicMaterial
              color={planetData.atmosphere}
              transparent
              opacity={hovered && !selected ? 0.15 : 0.08}
              side={THREE.BackSide}
            />
          </mesh>

          {/* Planet Label */}
          {showLabels && !selected && (
            <Html
              ref={labelRef}
              distanceFactor={12}
              center
              style={{
                pointerEvents: "none",
                transition: "all 0.3s ease",
                opacity: hovered ? 1 : 0.8,
                visibility: hovered ? "visible" : "visible",
              }}
              occlude={false}
              transform={false}
              sprite={false}
            >
              <div
                className={`text-sm font-bold text-center px-3 py-2 rounded-full transition-all duration-200 text-white shadow-lg border pointer-events-none
              ${
                hovered
                  ? "bg-gradient-to-r from-cyan-500/40 to-purple-500/40 backdrop-blur-md scale-105 border-cyan-400/60"
                  : "bg-black/50 backdrop-blur-sm border-white/30"
              }`}
              >
                {name}
              </div>
            </Html>
          )}

          {isPreloaded && (
            <>
              <Text
                position={[0, size + 1.2, 0]}
                fontSize={0.4}
                color="#00ffff"
                anchorX="center"
                anchorY="middle"
                visible={hovered && !selected}
              >
                CLICK TO EXPLORE
              </Text>

              {/* Reduced particle effect */}
              <Sparkles
                count={hovered && !selected ? 10 : 0}
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
            <sphereGeometry args={[size * 0.3, 8, 8]} />
            <meshStandardMaterial
              color="#c0c0c0"
              emissive="#404040"
              emissiveIntensity={0.1}
              roughness={0.9}
            />
          </mesh>
        )}
      </group>
    );
  }
);

const Sun = () => {
  const sunRef = useRef();
  const coronaRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.003;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.001;
      coronaRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    }
  });

  return (
    <group>
      {/* Sun Core */}
      <mesh
        ref={sunRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[4, 32, 32]} />
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
        <sphereGeometry args={[4, 16, 16]} />
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Sun Flares */}
      <Sparkles
        count={50}
        scale={[10, 10, 10]}
        size={3}
        speed={0.8}
        color="#ffaa00"
      />

      <Html
        distanceFactor={20} // Reduced from 25 for better proportion
        center
        style={{ pointerEvents: "none" }}
        occlude={false}
      ></Html>
    </group>
  );
};

const AsteroidBelt = memo(({ visible = true }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const asteroids = Array.from({ length: 150 }, (_, i) => {
    const radius = 20 + Math.random() * 4;
    const angle = (i / 100) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 0.8;

    return { x, y, z, scale: 0.1 + Math.random() * 0.15 };
  });

  return (
    <group ref={groupRef} visible={visible}>
      {asteroids.map((asteroid, i) => (
        <mesh
          key={i}
          position={[asteroid.x, asteroid.y, asteroid.z]}
          scale={asteroid.scale}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#8b7355"
            roughness={0.8}
            metalness={0.1}
            emissiveIntensity={0.5}
            emissive={[0.1, 0.1, 0.1]}
          />
        </mesh>
      ))}
    </group>
  );
});
const useDistanceCheck = (position, camera, maxDistance = 100) => {
  const [isVisible, setIsVisible] = useState(true);

  useFrame(() => {
    if (camera && position) {
      const distance = camera.position.distanceTo(
        new THREE.Vector3(...position)
      );
      setIsVisible(distance < maxDistance);
    }
  });

  return isVisible;
};
const ProjectSystem = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cameraTarget, setCameraTarget] = useState([0, 0, 0]);
  const controlsRef = useRef();
  const modalRef = useRef();
  const canvasRef = useRef();

  const projects = [
    {
      name: "🌌 CosmicVue",
      orbitRadius: 8,
      speed: 0.012,
      size: 1.2,
      initialAngle: 0,
      planetType: "earth",
      hasMoons: true,
      featured: true,
      description:
        "An award-winning immersive web application that transforms astronomical data into stunning 3D visualizations. CosmicVue provides real-time tracking of Near-Earth Objects using NASA APIs, featuring scientifically accurate orbital mechanics and breathtaking celestial renders. This project showcases advanced Three.js techniques, responsive design principles, and seamless API integration. Recognized as a Global Finalist in the 2024 NASA International Space Apps Challenge, demonstrating excellence in space technology innovation.",
      link: "https://cosmicvue.netlify.app/",
      ghLink: "https://github.com/KhamessiTaha/CosmoArchitects",
      technologies: [
        "React",
        "Three.js",
        "NASA APIs",
        "JavaScript",
        "CSS3",
        "Responsive Design",
      ],
      status: ["Live", "Featured", "Award Winner"],
    },
    {
      name: "🪐 EternaVerse",
      orbitRadius: 12,
      speed: 0.008,
      size: 1.8,
      initialAngle: Math.PI / 2,
      planetType: "saturn",
      hasRings: true,
      featured: true,
      description:
        "A groundbreaking space simulation game that combines cutting-edge procedural generation with real astrophysics principles. Players navigate through dynamically generated galaxies, managing cosmic anomalies and influencing universal balance through strategic gameplay. Built with Phaser.js for optimal performance, the game features realistic gravitational mechanics, particle systems, and an adaptive difficulty system that responds to player choices. The backend architecture supports multiplayer interactions and persistent universe states.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/EternaVerseApp",
      technologies: [
        "Phaser.js",
        "Phaser3",
        "React/Vite",
        "Node.js/ExpressJs",
        "MongoDB",
      ],
      status: ["Development", "Beta Testing"],
    },
    {
      name: "🚗 CarVision",
      orbitRadius: 16,
      speed: 0.005,
      size: 1.4,
      initialAngle: Math.PI,
      planetType: "mars",
      featured: true,
      description:
        "An intelligent automotive analysis platform leveraging state-of-the-art computer vision and machine learning algorithms. CarVision processes vehicle images through custom-trained neural networks to provide instant classification and accurate market value predictions. The system integrates advanced preprocessing techniques, feature extraction algorithms, and ensemble learning methods. The Flutter mobile application offers real-time camera integration, offline processing capabilities, and comprehensive analytics dashboard, while the Node.js backend ensures scalable data processing and secure API management.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/CarVisionProject",
      technologies: [
        "TensorFlow",
        "Flutter",
        "Node.js",
        "Computer Vision",
        "Transfer Learning",
        "Machine Learning",
        "REST APIs",
      ],
      status: ["Complete", "Alpha"],
    },
    {
      name: "💻 CCEditor",
      orbitRadius: 20,
      speed: 0.006,
      size: 1.3,
      featured: true,
      initialAngle: Math.PI * 1.5,
      planetType: "venus",
      description:
        "A sophisticated real-time collaborative coding platform designed for seamless team development and educational purposes. CCEditor features multi-language syntax highlighting, intelligent code completion, and instant synchronization across multiple users. The platform includes advanced features like version control integration, customizable themes, live cursor tracking, and comprehensive chat functionality. Built on Firebase's real-time database with WebSocket optimization, it ensures minimal latency and maximum reliability for coding sessions, making it perfect for pair programming, code reviews, and interactive learning environments.",
      link: "https://cceditor-e1b05.web.app/",
      ghLink: "https://github.com/KhamessiTaha/CCE",
      technologies: [
        "React",
        "Firebase",
        "WebSocket",
        "CodeMirror",
        "Real-time Sync",
        "PWA",
      ],
      status: ["Live", "Stable"],
    },
    {
      name: "⚡ ParticleSimulator",
      orbitRadius: 24,
      speed: 0.004,
      size: 1.1,
      initialAngle: Math.PI * 0.3,
      planetType: "mercury",
      description:
        "An advanced real-time physics simulation engine that models complex particle interactions and fluid dynamics. This interactive sandbox allows users to experiment with various elements including powder, liquid, gas, and solid states, each with realistic physical properties. The simulation incorporates accurate collision detection, thermodynamics, chemical reactions, and pressure systems. Built with optimized JavaScript and Canvas API, it features customizable gravity, temperature controls, and interactive tools for creating complex particle scenarios. Perfect for educational demonstrations and creative experimentation.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/ParticleSimulator",
      technologies: [
        "JavaScript",
        "Canvas API",
        "Physics Engine",
        "Real-time Rendering",
        "WebGL",
      ],
      status: ["Live", "Maintained"],
    },
    {
      name: "🌟 HTRU2 Pulsar Detection",
      orbitRadius: 28,
      speed: 0.003,
      size: 1.0,
      initialAngle: Math.PI * 0.7,
      planetType: "jupiter",
      description:
        "A sophisticated machine learning system designed to identify pulsating neutron stars from radio telescope data with exceptional accuracy. This project implements multiple classification algorithms including Random Forest, SVM, and Neural Networks, trained on the comprehensive HTRU2 dataset. The system features advanced data preprocessing, feature engineering, cross-validation techniques, and model ensemble methods. Includes detailed performance analysis, confusion matrices, and ROC curve evaluations. The implementation demonstrates expertise in scientific data analysis, statistical modeling, and astronomical signal processing.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/HRTU2-Pulsar-Detection",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Data Visualization",
      ],
      status: ["Complete", "Research"],
    },
    {
      name: "🔍 ALPR System",
      orbitRadius: 32,
      speed: 0.002,
      size: 0.9,
      initialAngle: Math.PI * 1.2,
      planetType: "mercury",
      description:
        "A comprehensive Automatic License Plate Recognition system utilizing advanced computer vision techniques and deep learning architectures. The system combines YOLO object detection for license plate localization with custom OCR models for character recognition. Features include image preprocessing with noise reduction, perspective correction, contrast enhancement, and multi-angle detection capabilities. The solution achieves high accuracy across various lighting conditions and plate formats, with real-time processing optimization and batch processing support for traffic monitoring applications.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/ALPR",
      technologies: [
        "OpenCV",
        "TensorFlow",
        "Python",
        "Computer Vision",
        "Neural Networks",
        "YOLO",
      ],
      status: ["Complete", "Optimized"],
    },
    {
      name: "🐾 PetMatch",
      orbitRadius: 36,
      speed: 0.0015,
      size: 0.8,
      initialAngle: Math.PI * 1.8,
      planetType: "venus",
      description:
        "A comprehensive pet adoption platform that revolutionizes the way people connect with their ideal companions. PetMatch employs sophisticated matching algorithms that analyze personality traits, lifestyle preferences, living situations, and care capabilities to create perfect human-pet partnerships. The full-stack application features user profile management, pet database with detailed characteristics, adoption workflow management, and integrated communication tools. Built with Angular's modern framework and powered by robust PHP/Node.js backend architecture, ensuring scalable performance and secure data handling for animal shelters and adoption agencies.",
      link: "#",
      ghLink: "https://github.com/KhamessiTaha/MiniProjeWeb",
      technologies: [
        "Angular",
        "PHP",
        "Node.js",
        "MySQL",
        "Matching Algorithms",
        "REST APIs",
      ],
      status: ["Complete", "Portfolio"],
    },
  ];

  const handlePlanetClick = (project) => {
    // Calculate planet position for camera focus

    const angle = project.initialAngle;
    const x = Math.cos(angle) * project.orbitRadius;
    const z = Math.sin(angle) * project.orbitRadius;
    setCameraTarget([x, 0, z]);

    // Smooth camera transition
    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
      gsap.to(controlsRef.current.target, {
        x,
        y: 0,
        z,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          controlsRef.current.update();
        },
      });
    }

    // Animate modal entrance
    setSelectedProject(project);
    if (modalRef.current) {
      gsap.from(modalRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const closeModal = () => {
    // Animate modal exit
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedProject(null);
          if (controlsRef.current) {
            controlsRef.current.autoRotate = true;
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
          }
        },
      });
    } else {
      setSelectedProject(null);
      if (controlsRef.current) {
        controlsRef.current.autoRotate = true;
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
      }
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProject) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 20, 45], fov: 65 }}
        shadows
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          precision: "lowp",
        }}
        dpr={[0.5, 1]}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.2} color="#4a5568" />
          <pointLight
            position={[0, 0, 0]}
            intensity={4}
            color="#ff6b00"
            castShadow
          />
          <spotLight
            position={[30, 40, 30]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[64, 64]} // Reduced from 4096 for performance
          />
          <spotLight
            position={[-30, 40, -30]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            color="#4299e1"
            castShadow
          />

          {/* Skybox */}
          <Skybox />

          {/* Environment lighting from skybox */}
          <Environment files={SKYBOX_TEXTURES} background />

          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 0]} intensity={3} color="#ff6b00" />

          <Sun />
          <AsteroidBelt visible={!selectedProject} />

          {/* Enhanced Orbit Paths */}
          {projects.map((project, index) => (
            <group key={`orbit-group-${index}`}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry
                  args={[
                    project.orbitRadius - 0.05,
                    project.orbitRadius + 0.05,
                    64,
                  ]}
                />
                <meshBasicMaterial
                  color="#4a5568"
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.4}
                />
              </mesh>
              {/* Orbit markers */}
              {Array.from({ length: 4 }, (_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x = Math.cos(angle) * project.orbitRadius;
                const z = Math.sin(angle) * project.orbitRadius;
                return (
                  <mesh key={i} position={[x, 0, z]}>
                    <sphereGeometry args={[0.1, 6, 6]} />
                    <meshBasicMaterial
                      color="#60a5fa"
                      transparent
                      opacity={0.6}
                    />
                  </mesh>
                );
              })}
            </group>
          ))}

          {projects.map((project, index) => (
            <Planet
              key={index}
              {...project}
              onClick={() => handlePlanetClick(project)}
              selected={selectedProject?.name === project.name}
              showLabels={!selectedProject}
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
          {!selectedProject && (
            <group position={[50, -10, -100]} rotation={[0, Math.PI / 4, 0]}>
              <Cat
                onClick={() => {
                  // Epic Quantum Cat Easter Egg
                  const canvas = canvasRef.current;
                  const body = document.body;

                  // Store original values
                  const originalBodyBg = body.style.backgroundColor;

                  // Phase 1: Reality Glitch
                  gsap
                    .timeline()
                    .to(canvas, {
                      duration: 0.1,
                      scale: 1.2,
                      ease: "power2.out",
                    })
                    .to(
                      body,
                      {
                        duration: 0.1,
                        backgroundColor: "#ff00ff",
                        ease: "none",
                      },
                      0
                    )

                    // Phase 2: Matrix Effect
                    .to(canvas, {
                      duration: 0.2,
                      rotationY: 360,
                      ease: "power1.inOut",
                    })
                    .to(
                      body,
                      {
                        duration: 0.05,
                        backgroundColor: "#00ff00",
                        repeat: 3,
                        yoyo: true,
                        ease: "none",
                      },
                      0.1
                    )

                    // Phase 3: Cosmic Flash
                    .to(body, {
                      duration: 0.3,
                      backgroundColor: "white",
                      ease: "power2.out",
                    })
                    .to(
                      canvas,
                      {
                        duration: 0.3,
                        scale: 0.8,
                        ease: "elastic.out(1, 0.5)",
                      },
                      "<"
                    )

                    // Phase 4: Quantum Chaos
                    .add(() => {
                      // Randomly teleport all planets with chaos
                      projects.forEach((project, i) => {
                        const randomAngle = Math.random() * Math.PI * 2;
                        const randomRadius = 20 + Math.random() * 30;

                        // Chaotic movement
                        gsap.to(project, {
                          duration: 0.5 + Math.random() * 0.5,
                          initialAngle: randomAngle,
                          ease: "back.out(2)",
                          delay: Math.random() * 0.3,
                        });

                        // Temporary color flash for each planet
                        if (project.ref?.current) {
                          gsap.to(project.ref.current.material, {
                            duration: 0.2,
                            emissive: new THREE.Color(
                              Math.random(),
                              Math.random(),
                              Math.random()
                            ),
                            emissiveIntensity: 0.5,
                            yoyo: true,
                            repeat: 1,
                            delay: i * 0.1,
                          });
                        }
                      });
                    })

                    // Phase 5: Reality Restoration
                    .to(body, {
                      duration: 0.5,
                      backgroundColor: originalBodyBg || "black",
                      ease: "power2.inOut",
                      delay: 0.5,
                    })
                    .to(
                      canvas,
                      {
                        duration: 0.5,
                        scale: 1,
                        rotationY: 0,
                        ease: "elastic.out(1, 0.3)",
                      },
                      "<"
                    )

                    // Phase 6: Cat Celebration + Epic Text
                    .add(() => {
                      // Make the cat do a little victory dance
                      const catGroup =
                        canvas.querySelector('[data-cat="true"]');
                      if (catGroup) {
                        gsap
                          .timeline()
                          .to(catGroup.position, {
                            duration: 0.3,
                            y: catGroup.position.y + 5,
                            ease: "power2.out",
                          })
                          .to(
                            catGroup.rotation,
                            {
                              duration: 0.3,
                              y: catGroup.rotation.y + Math.PI * 2,
                              ease: "power1.inOut",
                            },
                            0
                          )
                          .to(catGroup.position, {
                            duration: 0.3,
                            y: catGroup.position.y,
                            ease: "bounce.out",
                          });
                      }

                      // Epic Quantum Text Overlay
                      const quantumTexts = [
                        "🐱 SCHRÖDINGER'S CAT ACTIVATED",
                        "⚛️ QUANTUM SUPERPOSITION ACHIEVED",
                        "🌌 REALITY.EXE HAS STOPPED WORKING",
                        "🎭 MULTIVERSE COLLISION DETECTED",
                        "🔮 PROBABILITY WAVES COLLAPSED",
                        "🌟 EASTER EGG SINGULARITY BREACH",
                      ];

                      const randomText =
                        quantumTexts[
                          Math.floor(Math.random() * quantumTexts.length)
                        ];

                      const textOverlay = document.createElement("div");
                      textOverlay.style.cssText = `
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-family: 'Courier New', monospace;
              font-size: clamp(24px, 4vw, 48px);
              font-weight: bold;
              color: #ffffff;
              text-shadow: 
                0 0 10px #00d4ff,
                0 0 20px #00d4ff,
                0 0 30px #0088ff;
              background: rgba(0, 0, 0, 0.9);
              padding: 20px 40px;
              border: 2px solid #00d4ff;
              border-radius: 10px;
              backdrop-filter: blur(10px);
              z-index: 10000;
              pointer-events: none;
              white-space: nowrap;
              letter-spacing: 2px;
              text-align: center;
              box-shadow: 
                0 0 20px rgba(0, 212, 255, 0.4),
                inset 0 0 20px rgba(0, 212, 255, 0.1);
            `;
                      textOverlay.textContent = randomText;
                      document.body.appendChild(textOverlay);

                      // Text animation
                      gsap.fromTo(
                        textOverlay,
                        {
                          scale: 0,
                          rotation: -10,
                          opacity: 0,
                        },
                        {
                          duration: 0.5,
                          scale: 1,
                          rotation: 0,
                          opacity: 1,
                          ease: "back.out(2)",
                        }
                      );

                      // Glitch effect on text (reduced intensity)
                      const glitchInterval = setInterval(() => {
                        textOverlay.style.transform = `translate(-50%, -50%) translate(${
                          Math.random() * 2 - 1
                        }px, ${Math.random() * 2 - 1}px)`;
                        textOverlay.style.color =
                          Math.random() > 0.7 ? "#00d4ff" : "#ffffff";
                      }, 150);

                      // Remove text after 3 seconds
                      setTimeout(() => {
                        clearInterval(glitchInterval);
                        gsap.to(textOverlay, {
                          duration: 0.5,
                          scale: 0,
                          opacity: 0,
                          y: -50,
                          ease: "power2.in",
                          onComplete: () => textOverlay.remove(),
                        });
                      }, 3000);

                      // Particle explosion effect
                      for (let i = 0; i < 50; i++) {
                        const particle = document.createElement("div");
                        particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: hsl(${Math.random() * 360}, 100%, 50%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                left: 50%;
                top: 50%;
              `;
                        document.body.appendChild(particle);

                        gsap.to(particle, {
                          duration: 1,
                          x: (Math.random() - 0.5) * window.innerWidth,
                          y: (Math.random() - 0.5) * window.innerHeight,
                          opacity: 0,
                          scale: 0,
                          ease: "power2.out",
                          onComplete: () => particle.remove(),
                        });
                      }
                    }, 0.8);
                }}
              />
            </group>
          )}
        </Suspense>
      </Canvas>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div
          ref={modalRef}
          className="absolute inset-0 flex items-center justify-center bg-black/90 z-30 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-gray-900/95 border border-cyan-500/50 rounded-2xl p-6 md:p-8 max-w-4xl w-[90%] mx-4 relative backdrop-blur-xl shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-all text-3xl hover:rotate-90 duration-300"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="text-4xl md:text-6xl">
                {selectedProject.name.split(" ")[0]}
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {selectedProject.name.slice(2)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(selectedProject.status)
                    ? selectedProject.status
                    : [selectedProject.status]
                  ).map((statusItem, index) => (
                    <div
                      key={index}
                      className={`inline-block px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
                        statusItem === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/50"
                          : statusItem === "Beta" ||
                            statusItem === "Beta Testing"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                          : statusItem === "Development"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                          : statusItem === "Alpha"
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/50"
                          : statusItem === "Featured" ||
                            statusItem === "Award Winner"
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                          : statusItem === "Complete"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                          : statusItem === "Research" ||
                            statusItem === "Portfolio"
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50"
                          : statusItem === "Maintained" ||
                            statusItem === "Stable"
                          ? "bg-teal-500/20 text-teal-400 border border-teal-500/50"
                          : statusItem === "Optimized"
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                          : "bg-gray-500/20 text-gray-400 border border-gray-500/50"
                      }`}
                    >
                      {statusItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-semibold text-cyan-300 mb-2 md:mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-700/50 border border-gray-600/50 rounded-lg text-xs md:text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg md:rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  <span className="font-semibold">Launch Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              )}
              {selectedProject.ghLink && (
                <a
                  href={selectedProject.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border-2 border-cyan-400/50 text-cyan-400 rounded-lg md:rounded-xl hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 font-semibold text-sm md:text-base"
                >
                  <span>View Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
              <button className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border-2 border-purple-400/50 text-purple-400 rounded-lg md:rounded-xl hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 font-semibold text-sm md:text-base">
                <span>Case Study</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UI Overlay */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl p-3 md:p-4 transition-all hover:border-cyan-400/50 hover:bg-black/60">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Space Portfolio
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Click on planets to explore projects
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-3 text-xs text-gray-400 transition-all hover:border-cyan-400/50 hover:bg-black/60">
          <div>🖱️ Drag to rotate • 🔍 Scroll to zoom</div>
          <div>🪐 Click planets to explore • ESC to close</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSystem;
