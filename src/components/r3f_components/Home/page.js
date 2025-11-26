"use client";
import dynamic from 'next/dynamic';

// Dynamically import the Scene component and disable Server-Side Rendering (SSR)
const DynamicScene = dynamic(() => import('../../r3f_components/Home/Scene'), {
  ssr: false, 
  loading: () => <div style={{ height: '100vh' }}>Loading 3D Scene...</div>
});

export default function Home() {
  return (
    <div className='h-screen'>
      <DynamicScene />
    </div>
  );
}