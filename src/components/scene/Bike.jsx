import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Bike = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/2022_yamaha_r1.glb");
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);

      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.setLoop(THREE.LoopOnce);         // ✅ play once
        action.clampWhenFinished = true;        // ✅ stop at last frame
        action.play();                          // ✅ start playing
      });
    }

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive ref={group} object={scene} {...props} />;
};

export default Bike;
