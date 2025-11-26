"use client";

import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const { scene, animations } = useGLTF("/3d_models/Idle.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the first animation found, or a specific one like 'Walk'
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
    // Cleanup function to stop animation on unmount
    return () => actions[names[0]]?.fadeOut(0.5).stop();
  }, [actions, names]);

  // The 'scene' object contains all the meshes, lights, etc.
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/model.glb");
