"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, SoftShadows, OrbitControls } from "@react-three/drei";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";
import { Model } from "../Model/page"; 
import { Suspense } from "react";

export default function Scene() {
  return (
    <div
      className="
        w-full 
        h-[85vh]          /* Desktop height */
        sm:h-[85vh]
        xs:h-[70vh] 
        max-xs:h-[60vh]   /* Small screens get reduced height */
        relative
      "
      style={{
        position: "relative",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1, 2.5], fov: 50 }}
        dpr={[1, 1.5, 2]}
        style={{
          width: "100%",
          height: "100%", // canvas now obeys wrapper height
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <SoftShadows size={25} samples={17} focus={0} />

          <directionalLight
            position={[10, 10, 5]}
            castShadow
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ambientLight intensity={0.5} />

          <Model scale={1} position={[0, -1.2, 0]} rotation={[0, 0.5, 0]} />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

          <EffectComposer disableNormalPass>
            <N8AO aoRadius={0.05} intensity={0.7} color="black" halfRes />
            <Bloom
              luminanceThreshold={0.4}
              luminanceSmoothing={0.7}
              height={200}
              intensity={0.8}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
