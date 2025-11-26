"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, SoftShadows, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  N8AO,
  Bloom,
} from "@react-three/postprocessing";
import { Model } from "../Model/page"; // Your model component
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas
      shadows // Enable shadows for the entire scene
      camera={{ position: [0, 1, 2.5], fov: 50 }}
      dpr={[1, 1.5, 2]} // Performance optimization: allow high pixel ratio on capable devices
    >
      <Suspense fallback={null}>
        {/* Environment and Lighting */}
        <Environment preset="sunset" />

        {/* SoftShadows helps to produce smoother, more realistic shadows */}
        <SoftShadows size={25} samples={17} focus={0} />

        {/* Lighting */}
        <directionalLight
          position={[10, 10, 5]}
          castShadow
          intensity={1.5}
          shadow-mapSize-width={1024} // Increase for better shadow quality
          shadow-mapSize-height={1024}
        />
        <ambientLight intensity={0.5} />

        {/* Model */}
        <Model scale={1} position={[0, -1.2, 0]} rotation={[0,0.5,0]} />

        {/* Controls - Only one instance needed */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>

        {/* Postprocessing Stack */}
        <EffectComposer disableNormalPass>
          {/* Ambient Occlusion */}
          <N8AO
            aoRadius={0.05} // smaller radius for more subtle occlusion
            intensity={0.7} // slightly lower intensity
            color="black"
            halfRes={true}
          />

          {/* Bloom */}
          <Bloom
            luminanceThreshold={0.4} // higher threshold to reduce bloom area
            luminanceSmoothing={0.7} // sharper edges
            height={200} // lower resolution for less blur
            intensity={0.8} // softer bloom strength
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
