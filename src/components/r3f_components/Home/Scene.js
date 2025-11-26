"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, SoftShadows, OrbitControls } from "@react-three/drei";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";
import { Model } from "../Model/page";
import { Suspense, useState } from "react";

export default function Scene() {
  // lazy initializer: runs during first render only (SSR-safe)
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });

  return (
    // responsive wrapper: mobile shorter, desktop taller
    <div
      className="w-full h-[60vh] sm:h-[85vh] relative"
      style={{
        // wrapper allowing browser vertical panning
        touchAction: "pan-y",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1, 2.5], fov: 50 }}
        dpr={[1, 1.5, 2]}
        // canvas obeys wrapper height
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          // allow the browser to handle vertical pan gestures on the canvas
          touchAction: "pan-y",
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

          {/* Only mount OrbitControls on non-touch devices so it doesn't intercept touch scrolling */}
          {!isTouch && (
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          )}

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
