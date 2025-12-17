"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, SoftShadows, OrbitControls } from "@react-three/drei";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";
import { Model } from "../Model/page";
import { Suspense, useState } from "react";

export default function Scene() {
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });

  return (
    <div
      id="scene"
      className="h-screen sm:h-[85vh] relative w-screen overflow-hidden"
      style={{
        touchAction: "pan-y",
      }}
    >
      <Canvas
        shadows
        camera={{ 
          position: [0, 0.8, 2.8], 
          fov: 50,
          near: 0.1,
          far: 1000 
        }}
        dpr={[1, 1.5, 2]}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          touchAction: "pan-y",
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <SoftShadows 
            size={25} 
            samples={17} 
            focus={0}
          />

          <directionalLight
            position={[10, 10, 5]}
            castShadow
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          <ambientLight 
            intensity={0.5}
          />

          <Model 
            scale={1} 
            position={[0, -1.4, 0]} 
            rotation={[0, 0.5, 0]} 
          />

          {!isTouch && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          )}

          <EffectComposer 
            disableNormalPass
          >
            <N8AO 
              aoRadius={0.05} 
              intensity={0.7} 
              color="black" 
              halfRes 
            />
            <Bloom
              luminanceThreshold={0.4}
              luminanceSmoothing={0.7}
              height={200}
              intensity={0}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <style jsx>{`
        #scene {
          background: rgb(var(--bg-color-rgb));
        }
      `}</style>
    </div>
  );
}