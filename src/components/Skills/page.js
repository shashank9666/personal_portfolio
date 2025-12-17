"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skills = useMemo(() => [
    { key: "react", name: "React", pct: 90, icon: "/skills/react.png" },
    { key: "next", name: "Next.js", pct: 85, icon: "/skills/next.png" },
    { key: "js", name: "JavaScript", pct: 88, icon: "/skills/js.png" },
    { key: "ts", name: "TypeScript", pct: 80, icon: "/skills/ts.png" },
    { key: "tailwind", name: "TailwindCSS", pct: 87, icon: "/skills/tailwind.png" },
    { key: "node", name: "Node.js", pct: 75, icon: "/skills/node.png" },
    { key: "html", name: "HTML", pct: 95, icon: "/skills/html.png" },
    { key: "css", name: "CSS", pct: 90, icon: "/skills/css.png" },
    { key: "mongodb", name: "MongoDB", pct: 70, icon: "/skills/mongodb.png" },
    { key: "express", name: "Express", pct: 75, icon: "/skills/express.png" },
    { key: "git", name: "Git", pct: 85, icon: "/skills/git.png" },
    { key: "github", name: "GitHub", pct: 88, icon: "/skills/github.png" },
    { key: "sqlite", name: "SQLite", pct: 65, icon: "/skills/sqlite.png" },
    { key: "postman", name: "Postman", pct: 80, icon: "/skills/postman.png" },
  ], []);

  const rootRef = useRef(null);
  const floatingIconsRef = useRef([]);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [filled, setFilled] = useState(() => 
    skills.reduce((acc, s) => ({ ...acc, [s.key]: 0 }), {})
  );

  // Reset floating icons ref array
  useEffect(() => {
    floatingIconsRef.current = [];
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    if (!rootRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!visible || !rootRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, 
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // Floating background icons animation
      floatingIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        // Random initial positions and rotations
        const randomX = gsap.utils.random(-300, 300);
        const randomY = gsap.utils.random(-200, 200);
        const randomRotation = gsap.utils.random(-20, 20);
        const randomScale = gsap.utils.random(0.3, 0.8);
        const randomOpacity = gsap.utils.random(0.1, 0.3);

        // Set initial state
        gsap.set(icon, {
          x: randomX,
          y: randomY,
          rotation: randomRotation,
          scale: randomScale,
          opacity: 0,
        });

        // Entrance animation with scroll trigger
        gsap.to(icon, {
          opacity: randomOpacity,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        });

        // Continuous floating animation
        const floatAnimation = gsap.to(icon, {
          y: `+=${gsap.utils.random(30, 80)}`,
          x: `+=${gsap.utils.random(20, 50)}`,
          rotation: `+=${gsap.utils.random(-10, 10)}`,
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Pause animation when not in view
        ScrollTrigger.create({
          trigger: rootRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => floatAnimation.play(),
          onLeave: () => floatAnimation.pause(),
          onEnterBack: () => floatAnimation.play(),
          onLeaveBack: () => floatAnimation.pause(),
        });
      });

      // Grid items animation
      if (gridRef.current) {
        gsap.fromTo(".skill-grid-item", 
          {
            opacity: 0,
            y: 50,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // Container scale effect on scroll
      gsap.to(rootRef.current, {
        scale: 0.98,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

    }, rootRef);

    return () => ctx.revert();
  }, [visible]);

  // Progress bar animation
  useEffect(() => {
    if (!visible) return;

    const animations = [];

    skills.forEach((skill, index) => {
      const duration = 700 + index * 80;
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const value = Math.round(skill.pct * progress);
        
        setFilled(prev => ({ ...prev, [skill.key]: value }));
        
        if (progress < 1) {
          const id = requestAnimationFrame(animate);
          animations.push(id);
        }
      };

      const id = requestAnimationFrame(animate);
      animations.push(id);
    });

    return () => {
      animations.forEach(id => cancelAnimationFrame(id));
    };
  }, [visible, skills]);

  return (
    <>
      <section 
        id="skills" 
        ref={rootRef} 
        className="min-h-screen py-20 bg-[rgb(var(--bg-color-rgb))] relative overflow-hidden"
      >
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {skills.map((skill, index) => (
            <div
              key={`floating-${skill.key}`}
              ref={(el) => {
                floatingIconsRef.current[index] = el;
              }}
              className="absolute"
              style={{
                left: `${(index * 7) % 100}%`,
                top: `${(index * 11) % 100}%`,
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
                className="object-contain"
                style={{ 
                  filter: 'brightness(0) opacity(0.2)'
                }}
                unoptimized
              />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-20" ref={titleRef}>
            <h2 className="text-6xl md:text-8xl font-bold text-(--text-color) mb-6">
              Skills
            </h2>
            <p className="text-xl md:text-2xl text-(--text-color) opacity-80 max-w-3xl mx-auto leading-relaxed">
              Technologies & tools I use to bring ideas to life and create exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={gridRef} className="relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.key}
                  className="skill-grid-item group relative bg-[rgba(var(--bg-color-rgb),0.6)] backdrop-blur-md border border-(--border-color) border-opacity-20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-opacity-40"
                >
                  {/* Skill Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[rgba(var(--text-color-rgb),0.08)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-(--text-color) group-hover:text-opacity-100 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-(--text-color) opacity-70 group-hover:opacity-100 transition-opacity">
                        {filled[skill.key]}%
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-[rgba(var(--border-color-rgb),0.15)] rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-(--text-color) transition-all duration-1000 ease-out"
                        style={{ width: `${filled[skill.key]}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-(--text-color) opacity-60">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-(--text-color) opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}