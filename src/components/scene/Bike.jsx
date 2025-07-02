import { useGLTF } from '@react-three/drei';


const Bike = (props) => {
  const { scene } = useGLTF('/models/2022_yamaha_r1.glb');

  return (
    <primitive object={scene} {...props} />
  );
};

export default Bike;
