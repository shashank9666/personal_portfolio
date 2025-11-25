'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ClientHeader() {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navbarRef.current, 
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="fixed top-6 left-6 right-6 z-50 
                 bg-white/5 backdrop-blur-lg 
                 rounded-xl border border-white/10 
                 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-white/90 tracking-tight">
            Shashank Shetty
          </h1>
        </div>
      </div>
    </nav>
  );
}