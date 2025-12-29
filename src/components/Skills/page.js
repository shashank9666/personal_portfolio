"use client";

import React, { useMemo } from "react";
import Image from "next/image";

export default function Skills() {
  const skills = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-[rgb(var(--bg-color-rgb))]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-(--text-color)">
            Skills
          </h2>
          <p className="mt-4 text-lg md:text-xl text-(--text-color) opacity-70 max-w-3xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.key}
              className="rounded-xl border border-(--border-color) border-opacity-20 bg-[rgba(var(--bg-color-rgb),0.6)] p-5"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--text-color-rgb),0.08)] flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={28}
                    height={28}
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--text-color)">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-(--text-color) opacity-60">
                    {skill.pct}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[rgba(var(--border-color-rgb),0.2)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-(--text-color)"
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
