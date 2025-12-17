"use client";
import dynamic from 'next/dynamic';

// Dynamically import the Scene component and disable Server-Side Rendering (SSR)
const DynamicScene = dynamic(() => import('../../r3f_components/Home/Scene'), {
  ssr: false, 
});

export default function Home() {
  return (
    <div>
      <DynamicScene />
    </div>
  );
}