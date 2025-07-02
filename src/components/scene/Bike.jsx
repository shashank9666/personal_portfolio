import { useGLTF } from "@react-three/drei";

const Bike = (props) => {
  const { scene } = useGLTF("/models/2022_yamaha_r1.glb");
  return <primitive object={scene} {...props} />;
};

// Preload the model to avoid loading delays
useGLTF.preload("/models/2022_yamaha_r1.glb");

export default Bike;
