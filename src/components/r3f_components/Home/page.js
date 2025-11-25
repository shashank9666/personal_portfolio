"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer, Clock } from "three";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Text3D,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function AnimatedGLBModel({
  url,
  modelPosition = [0, 0, 0],
  modelRotation = [0, 0, 0],
  modelScale = [1, 1, 1],
}) {
  const gltf = useLoader(GLTFLoader, url);
  const mixer = useRef();
  const clock = useRef(new Clock());

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
    return () => mixer.current?.stopAllAction();
  }, [gltf]);

  useFrame(() => mixer.current?.update(clock.current.getDelta()));

  return (
    <group
      position={modelPosition}
      rotation={modelRotation}
      scale={modelScale}
      castShadow
      receiveShadow
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [2, 1.5, 2], fov: 50 }}
        style={{ background: "#000" }} // canvas background
      >

        {/* Camera orbiting */}
        <OrbitControls enableDamping dampingFactor={0.05} />

        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#4080ff" />
        <pointLight position={[10, -5, 10]} intensity={0.3} color="#ff4080" />

        <Environment preset="sunset" background blur={0.5} />

        {/* GLB Model With Props */}
        <AnimatedGLBModel
          url="/3d_models/back_flip.glb"
          modelPosition={[0, -1, 0]}
          modelRotation={[0, Math.PI / 2, 0]}
          modelScale={[1, 1, 1]}
        />

        {/* 3D Text next to the model */}
        <group position={[-2,-1,1.2]} rotation={[0,1,0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={1}
            height={0.12}
            curveSegments={12}
          >
            Hi!
            <meshStandardMaterial metalness={0.2} roughness={0.4} />
          </Text3D>
        </group>

        {/* Effects */}
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
          <ChromaticAberration
            offset={[0.0002, 0.0002]}
            blendFunction={BlendFunction.NORMAL}
          />
          <Vignette
            offset={0.3}
            darkness={0.5}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
