"use client";
import React, { useEffect, useState } from "react";
import { useGLTF, useAnimations, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { scene, animations } = useGLTF("/3d_models/Idle.glb");
  const { actions, names } = useAnimations(animations, scene);
  const [textColor, setTextColor] = useState("#000000");
  const [accentColor, setAccentColor] = useState("#3B82F6");

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
    return () => actions[names[0]]?.fadeOut(0.5).stop();
  }, [actions, names]);

  useEffect(() => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTextColor(isDarkTheme ? "#ffffff" : "#000000");
    setAccentColor(isDarkTheme ? "#60A5FA" : "#3B82F6");

    const observer = new MutationObserver(() => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark" ||
        document.documentElement.classList.contains("dark");
      setTextColor(isDark ? "#ffffff" : "#000000");
      setAccentColor(isDark ? "#60A5FA" : "#3B82F6");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main Name Group */}
      <group position={[0, -0.5, 0]}>
        {/* Background Glow Effect */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <mesh position={[0, 1.5, -2]}>
            <planeGeometry args={[8, 4]} />
            <meshBasicMaterial
              color={accentColor}
              transparent
              opacity={0.05}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Billboard>

        {/* First Name - Large & Bold */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <Text
            font="/fonts/Poppins-Bold.ttf"
            fontSize={0.8}
            color={textColor}
            anchorX="center"
            anchorY="middle"
            position={[0, 2.2, -1]}
            letterSpacing={0.05}
            outlineWidth={0.02}
            outlineColor={accentColor}
            outlineOpacity={0.5}
          >
            SHASHANK
          </Text>
        </Billboard>

        {/* Last Name - Large & Bold with offset */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <Text
            font="/fonts/Poppins-Bold.ttf"
            fontSize={0.8}
            color={textColor}
            anchorX="center"
            anchorY="middle"
            position={[0, 1.2, -1]}
            letterSpacing={0.05}
            outlineWidth={0.02}
            outlineColor={accentColor}
            outlineOpacity={0.5}
          >
            SHETTY
          </Text>
        </Billboard>

        {/* Divider Line */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <mesh position={[0, 0.6, -0.8]}>
            <boxGeometry args={[3.5, 0.02, 0.01]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>
        </Billboard>

        {/* Title - Stylish & Modern */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <Text
            font="/fonts/Poppins-SemiBold.ttf"
            fontSize={0.25}
            color={accentColor}
            anchorX="center"
            anchorY="middle"
            position={[0, 0.2, -1]}
            letterSpacing={0.1}
          >
            FULL-STACK DEVELOPER
          </Text>
        </Billboard>

        {/* Tech Stack Badges */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <group position={[0, -0.6, -1]}>
            {/* React Badge */}
            <mesh position={[-1.5, 0, 0]}>
              <boxGeometry args={[0.8, 0.3, 0.05]} />
              <meshBasicMaterial color="#61DAFB" />
              <Text
                font="/fonts/Poppins-Regular.ttf"
                fontSize={0.1}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.03]}
              >
                REACT
              </Text>
            </mesh>

            {/* Node Badge */}
            <mesh position={[-0.5, 0, 0]}>
              <boxGeometry args={[0.8, 0.3, 0.05]} />
              <meshBasicMaterial color="#339933" />
              <Text
                font="/fonts/Poppins-Regular.ttf"
                fontSize={0.1}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.03]}
              >
                NODE
              </Text>
            </mesh>

            {/* MongoDB Badge */}
            <mesh position={[0.5, 0, 0]}>
              <boxGeometry args={[0.8, 0.3, 0.05]} />
              <meshBasicMaterial color="#47A248" />
              <Text
                font="/fonts/Poppins-Regular.ttf"
                fontSize={0.1}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.03]}
              >
                MONGO
              </Text>
            </mesh>

            {/* 3D Badge */}
            <mesh position={[1.5, 0, 0]}>
              <boxGeometry args={[0.8, 0.3, 0.05]} />
              <meshBasicMaterial color="#000000" />
              <Text
                font="/fonts/Poppins-Regular.ttf"
                fontSize={0.1}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.03]}
              >
                3D WEB
              </Text>
            </mesh>
          </group>
        </Billboard>

        {/* Location & Contact */}
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
          <group position={[0, -1.3, -1]}>
            <Text
              font="/fonts/Poppins-Regular.ttf"
              fontSize={0.12}
              color={textColor}
              anchorX="center"
              anchorY="middle"
              position={[0, 0.15, 0]}
              opacity={0.8}
            >
              HYDERABAD, INDIA
            </Text>
            <Text
              font="/fonts/Poppins-Regular.ttf"
              fontSize={0.1}
              color={textColor}
              anchorX="center"
              anchorY="middle"
              position={[0, -0.1, 0]}
              opacity={0.6}
            >
              shettyshashank2002@gmail.com
            </Text>
          </group>
        </Billboard>
      </group>

      {/* The 3D Model */}
      <primitive object={scene} {...props} />
    </>
  );
}

useGLTF.preload("/3d_models/Idle.glb");