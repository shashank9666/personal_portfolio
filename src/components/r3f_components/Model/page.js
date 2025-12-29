"use client";
import React, { useEffect, useMemo, Suspense, useState } from "react";
import { useGLTF, useAnimations, Billboard, Text, Html } from "@react-three/drei";

function ModelLoader() {
  return (
    <Html center>
      <div
        style={{
          position: "relative",
          padding: "22px 28px",
          borderRadius: "18px",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 0 30px rgba(255,255,255,0.15)",
        }}
      >
        {/* Pulsing Ring */}
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.7)",
            animation: "pulse 1.4s ease-in-out infinite",
          }}
        />

        {/* Text */}
        <span>Loading</span>

        {/* Dots */}
        <span className="dots">...</span>

        <style>{`
          @keyframes pulse {
            0% { transform: scale(0.6); opacity: 0.3; }
            50% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.6); opacity: 0.3; }
          }

          .dots::after {
            content: '';
            animation: dots 1.5s steps(4, end) infinite;
          }

          @keyframes dots {
            0% { content: ''; }
            25% { content: '.'; }
            50% { content: '..'; }
            75% { content: '...'; }
            100% { content: ''; }
          }
        `}</style>
      </div>
    </Html>
  );
}

function ModelContent(props) {
  const { scene, animations } = useGLTF("/3d_models/Idle.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
    return () => actions[names[0]]?.fadeOut(0.5).stop();
  }, [actions, names]);

const [textColor, setTextColor] = useState("#000000");

useEffect(() => {
  const updateColor = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTextColor(isDark ? "#ffffff" : "#000000");
  };

  updateColor(); // initial

  const observer = new MutationObserver(updateColor);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}, []);


  return (
    <>
      <Billboard follow>
        <Text
          font="/fonts/Poppins-Bold.ttf"
          fontSize={1}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          position={[0, -0.45, -2.5]}
          letterSpacing={0.08}
          outlineWidth={0.015}
          outlineColor={textColor === "#ffffff" ? "#000000" : "#ffffff"}
          outlineOpacity={0.3}
        >
          SHASHANK
        </Text>

        <Text
          font="/fonts/Poppins-Bold.ttf"
          fontSize={1}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          position={[0, -1.4, -2.5]}
          letterSpacing={0.08}
          outlineWidth={0.015}
          outlineColor={textColor === "#ffffff" ? "#000000" : "#ffffff"}
          outlineOpacity={0.3}
        >
          SHETTY
        </Text>
      </Billboard>

      <primitive object={scene} {...props} />
    </>
  );
}

export function Model(props) {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModel(true), 1000); // ⏱ 1s minimum loader
    return () => clearTimeout(timer);
  }, []);

  return showModel ? (
    <Suspense fallback={<ModelLoader />}>
      <ModelContent {...props} />
    </Suspense>
  ) : (
    <ModelLoader />
  );
}
