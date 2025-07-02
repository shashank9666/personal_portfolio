import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Bike from "./Bike";
import Avatar from "./Avatar";
import * as THREE from 'three';

const Home_Scene = () => {
  const [dpr, setDpr] = useState(1.5);
  const [perfSucks, degrade] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix for animation getting stuck
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0.8, 2.4],
        fov: 50,
        near: 0.1,
        far: 100,
      }}
      dpr={dpr}
      frameloop={mounted ? "always" : "demand"} // Fix for animation stuck
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.0;
      }}
    >
      <PerformanceMonitor
        onDecline={() => {
          degrade(true);
          setDpr(1);
        }}
        onIncline={() => {
          degrade(false);
          setDpr(1.5);
        }}
      />

      <Suspense fallback={null}>
        <Environment
          preset="city"
          background={false}
          blur={perfSucks ? 0.2 : 0.5}
          frames={perfSucks ? 1 : Infinity}
        />

        {/* Optimized Lighting */}
        <ambientLight intensity={0.25} color="#f5f5ff" />
        
        <directionalLight
          position={[3, 5, 2]}
          intensity={1}
          color="#fff9e6"
          castShadow
          shadow-mapSize={perfSucks ? [1024, 1024] : [2048, 2048]}
          shadow-camera-near={0.5}
          shadow-camera-far={15}
          shadow-bias={-0.0001}
          shadow-normalBias={0.05}
        />

        <directionalLight position={[-3, 3, 1]} intensity={0.6} color="#e6f7ff" />
        <directionalLight position={[0, 2, -3]} intensity={0.8} color="#fff1e6" />
        
        <hemisphereLight groundColor="#e0f2fe" intensity={0.3} />

        {/* Models with position fixes */}
        <Suspense fallback={null}>
          <Avatar
            modelUrl="/models/Shashank.vrm"
            animationUrl="/animations/VRMA_05.vrma"
            position={[0, -0.5, 0]} // Adjusted Y position
            scale={[1, 1, 1]}
          />
        </Suspense>

        <Suspense fallback={null}>
          <Bike
            position={[0, -0.5, -0.5]} // Adjusted Y position
            rotation={[0, Math.PI / 4 + 1, 0]}
            castShadow
            receiveShadow
          />
        </Suspense>

        {/* Optimized Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minDistance={1.5}
          maxDistance={8}
          enableZoom={false}
          makeDefault
          target={[0, 0.5, 0]} // Adjusted target height
          onEnd={() => {
            // Force redraw after controls stop moving
            const canvas = document.querySelector('canvas');
            if (canvas) canvas.dispatchEvent(new Event('mousemove'));
          }}
        />
      </Suspense>
    </Canvas>
  );
};

export default Home_Scene;