// utils/preloadVRM.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import { VRMAnimationLoaderPlugin } from "@pixiv/three-vrm-animation";

export const preloadVRMWithAnimation = (modelUrl, animationUrl) => {
  const loader = new GLTFLoader();
  loader.register((parser) => new VRMLoaderPlugin(parser));
  loader.register((parser) => new VRMAnimationLoaderPlugin(parser));

  loader.load(modelUrl, () => {}, undefined, (err) => {
    console.error("Preloading model failed", err);
  });

  loader.load(animationUrl, () => {}, undefined, (err) => {
    console.error("Preloading animation failed", err);
  });
};
