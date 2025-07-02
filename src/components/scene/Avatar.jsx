import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import {
  VRMAnimationLoaderPlugin,
  createVRMAnimationClip,
} from "@pixiv/three-vrm-animation";
import * as THREE from "three";

const Avatar = ({ modelUrl, animationUrl, ...props }) => {
  const [vrmScene, setVrmScene] = useState(null);
  const mixerRef = useRef(null);
  const vrmRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    if (!modelUrl || !animationUrl) return;

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.register((parser) => new VRMAnimationLoaderPlugin(parser));

    loader.load(
      modelUrl,
      (gltf) => {
        const vrm = gltf.userData.vrm;
        if (!vrm) return;

        vrmRef.current = vrm;
        setVrmScene(vrm.scene); // set to render via <primitive />

        const mixer = new THREE.AnimationMixer(vrm.scene);
        mixerRef.current = mixer;

        loader.load(
          animationUrl,
          (animGltf) => {
            const vrmAnimations = animGltf.userData.vrmAnimations;

            if (vrmAnimations && vrmAnimations.length > 0) {
              const clip = createVRMAnimationClip(vrmAnimations[0], vrm);
              const action = mixer.clipAction(clip);
              action.setLoop(THREE.LoopRepeat);
              action.clampWhenFinished = false;
              action.reset();
              action.play();
              actionRef.current = action;
            } else if (animGltf.animations.length > 0) {
              const action = mixer.clipAction(animGltf.animations[0]);
              action.play();
              actionRef.current = action;
            }
          },
          undefined,
          (err) => console.error("Failed to load animation", err)
        );
      },
      undefined,
      (err) => console.error("Failed to load VRM model", err)
    );

    return () => {
      if (actionRef.current) actionRef.current.stop();
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current.uncacheRoot(mixerRef.current.getRoot());
      }

      if (vrmRef.current) {
        vrmRef.current.scene.traverse((obj) => {
          if (obj.isMesh) {
            obj.geometry?.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat) => mat.dispose());
            } else {
              obj.material?.dispose();
            }
          }
        });
        vrmRef.current = null;
      }

      setVrmScene(null);
    };
  }, [modelUrl, animationUrl]);

  useFrame((_, delta) => {
    vrmRef.current?.update(delta);
    mixerRef.current?.update(delta);
  });

  return (
    vrmScene ? (
      <primitive object={vrmScene} {...props} />
    ) : (
      <group {...props} />
    )
  );
};

export default Avatar;
