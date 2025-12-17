"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Box } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

// Helper function for consistent pseudo-randomness
function seededRandom(index, seed = 0.5) {
  // Use a deterministic pseudo-random generator
  const x = Math.sin(index * 12.9898 + seed * 43758.5453) * 10000;
  return x - Math.floor(x);
}

// Theme-aware color utility
function useThemeColor() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Initialize theme on mount
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const getColors = () => {
    const isDark = theme === 'dark';
    return {
      bgColor: isDark ? '#000000' : '#ffffff',
      textColor: isDark ? '#ffffff' : '#000000',
      accentColor: isDark ? '#60A5FA' : '#3B82F6',
      lightColor: isDark ? '#ffffff' : '#333333',
      particleColor: isDark ? '#ffffff' : '#000000',
    };
  };

  return { theme, getColors };
}

// Floating Tech Cubes Component
function TechCubes() {
  const groupRef = useRef(null);
  const cubesRef = useRef([]);
  
  const techData = useMemo(() => [
    { name: 'React', color: '#61DAFB', pos: [-5, 2, 0], size: 0.8 },
    { name: 'Next', color: '#000000', pos: [3, 4, -2], size: 0.8 },
    { name: 'Node', color: '#339933', pos: [-3, -2, 3], size: 0.8 },
    { name: 'Mongo', color: '#47A248', pos: [4, 1, -3], size: 0.8 },
    { name: 'Three', color: '#000000', pos: [0, -3, 2], size: 0.8 },
    { name: 'Type', color: '#3178C6', pos: [-4, 3, 4], size: 0.8 },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        const offset = seededRandom(i, 0.5);
        cube.position.y = techData[i].pos[1] + Math.sin(time * 0.5 + offset * Math.PI * 2) * 0.3;
        cube.rotation.x = Math.sin(time * 0.3 + offset * Math.PI) * 0.1;
        cube.rotation.y = Math.cos(time * 0.2 + offset * Math.PI) * 0.1;
      }
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {techData.map((tech, i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <Box
            ref={el => {
              if (el) cubesRef.current[i] = el;
            }}
            args={[tech.size, tech.size, tech.size]}
            position={tech.pos}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color={tech.color}
              metalness={0.8}
              roughness={0.2}
              emissive={tech.color}
              emissiveIntensity={0.2}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

// Interactive Project Spheres
function ProjectSpheres() {
  const spheresRef = useRef([]);
  const [hovered, setHovered] = useState(null);
  
  const projects = useMemo(() => [
    { id: 1, name: 'NextBlogger', color: '#3B82F6', pos: [-6, 0, 0], size: 1.2 },
    { id: 2, name: '3D Portfolio', color: '#10B981', pos: [0, 0, -6], size: 1.2 },
    { id: 3, name: 'Medicinal AI', color: '#F59E0B', pos: [6, 0, 0], size: 1.2 },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    spheresRef.current.forEach((sphere, i) => {
      if (sphere) {
        const offset = seededRandom(i, 1);
        const baseScale = hovered === projects[i].id ? 1.3 : 1;
        const pulse = Math.sin(time * 1.5 + offset * Math.PI * 2) * 0.1;
        sphere.scale.setScalar(baseScale + pulse);
      }
    });
  });

  return (
    <group>
      {projects.map((project, i) => (
        <mesh
          key={project.id}
          ref={el => {
            if (el) spheresRef.current[i] = el;
          }}
          position={project.pos}
          onPointerOver={() => setHovered(project.id)}
          onPointerOut={() => setHovered(null)}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[project.size, 32, 32]} />
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered === project.id ? 0.5 : 0.2}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating Particles with Theme Colors
function ThemeParticles() {
  const particlesRef = useRef(null);
  const { getColors } = useThemeColor();
  const { particleColor } = getColors();
  
  const count = 1000;
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color = new THREE.Color(particleColor);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const angle = seededRandom(i, 0) * Math.PI * 2;
      const radius = 20 * seededRandom(i, 1);
      const height = (seededRandom(i, 2) - 0.5) * 40;
      
      positions[idx] = Math.cos(angle) * radius;
      positions[idx + 1] = height;
      positions[idx + 2] = Math.sin(angle) * radius;
      
      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;
    }
    
    return { positions, colors };
  }, [particleColor]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Animated Rings
function AnimatedRings() {
  const ringsRef = useRef([]);
  const { getColors } = useThemeColor();
  const { accentColor } = getColors();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const offset = seededRandom(i, 0.5) * Math.PI;
        ring.rotation.z = time * (0.1 + i * 0.05) + offset;
        ring.scale.setScalar(1 + Math.sin(time * 0.5 + offset) * 0.1);
      }
    });
  });

  return (
    <group>
      {[1, 2, 3].map((size, i) => (
        <mesh
          key={i}
          ref={el => {
            if (el) ringsRef.current[i] = el;
          }}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[size * 2, size * 2 + 0.1, 64]} />
          <meshBasicMaterial
            color={accentColor}
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Scene Lighting with Theme Awareness
function ThemeLighting() {
  const { getColors } = useThemeColor();
  const { lightColor, accentColor } = getColors();

  return (
    <>
      <ambientLight intensity={0.3} color={lightColor} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color={lightColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.3}
        color={accentColor}
      />
      <pointLight
        position={[0, 5, 5]}
        intensity={0.5}
        color={accentColor}
      />
    </>
  );
}

// Background Color Component
function BackgroundColor() {
  const { getColors } = useThemeColor();
  const { bgColor } = getColors();

  return (
    <color attach="background" args={[bgColor]} />
  );
}

// Main Reel Component
export default function Reel() {
  const { theme, getColors } = useThemeColor();
  const [mounted, setMounted] = useState(false);
  const { accentColor } = getColors();

  const stats = useMemo(() => [
    { value: '5+', label: 'Full-Stack Projects' },
    { value: '30%', label: 'Performance Gain' },
    { value: '40%', label: 'Engagement Boost' },
    { value: '90%', label: 'AI Accuracy' },
  ], []);

  const techStack = useMemo(() => [
    'React.js', 'Next.js 14', 'TypeScript', 'Node.js', 
    'Express.js', 'MongoDB', 'Three.js', 'GSAP', 
    'Tailwind CSS', 'React Three Fiber', 'WebSockets'
  ], []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  if (!mounted) return null;

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: 'rgb(var(--bg-color-rgb))',
        color: 'var(--text-color)',
      }}
    >
      {/* Theme Toggle */}
      <button
        onClick={handleThemeToggle}
        className="absolute top-8 right-8 z-50 px-6 py-3 rounded-full font-semibold backdrop-blur-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'rgba(var(--bg-color-rgb), 0.2)',
          border: '2px solid var(--border-color)',
          color: 'var(--text-color)',
          backdropFilter: 'blur(var(--backdrop-blur))',
        }}
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Interactive Info */}
      <div className="absolute top-8 left-8 z-50 hidden md:block">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg"
          style={{
            backgroundColor: 'rgba(var(--bg-color-rgb), 0.2)',
            border: '1px solid var(--border-color)',
          }}>
          <span className="text-sm opacity-80">Drag to rotate • Scroll to zoom</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          shadows
          camera={{ position: [0, 0, 20], fov: 60 }}
        >
          <BackgroundColor />
          <ThemeLighting />
          <TechCubes />
          <ProjectSpheres />
          <AnimatedRings />
          <ThemeParticles />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.5}
            maxDistance={50}
            minDistance={10}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <Stars 
            radius={150} 
            depth={80} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.5}
          />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              <span className="block">PORTFOLIO</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 opacity-90">
                Interactive 3D Experience
              </span>
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(var(--bg-color-rgb), 0.15)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgba(var(--bg-color-rgb), 0.25)',
                    border: '2px solid var(--border-color)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <button 
                className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'rgba(var(--bg-color-rgb), 0.3)',
                  border: '2px solid var(--border-color)',
                }}
              >
                Explore Projects
              </button>
              <button 
                className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: accentColor,
                  color: 'white',
                }}
              >
                View Resume
              </button>
            </div>
            
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Interactive 3D portfolio showcasing MERN stack expertise, 
              3D web development, and performance-optimized solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}