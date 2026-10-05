"use client";

import React from "react";
import { 
  Code, 
  Wrench, 
  Users, 
  Layers, 
  CheckCircle, 
  MessageSquareCode,
  Terminal,
  Database
} from "lucide-react";
import { GeometricSquare } from "./GeometricAccents";

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-[#8C8EF7]" />,
      skills: [
        { name: "C++", level: "Familiar", desc: "Competitive programming, STL, memory efficiency, core data structures", tags: ["DSA", "OOP"] },
        { name: "JavaScript (ES6+)", level: "Familiar", desc: "Async/await, DOM manipulation, closures, modern full-stack web architecture", tags: ["Frontend", "Backend"] },
        { name: "Java", level: "Working Knowledge", desc: "Object-Oriented Programming, classes, collections, design patterns", tags: ["OOP", "Logic"] },
        { name: "HTML5 & CSS3", level: "Familiar", desc: "Semantic structure, responsive layouts, modern Flexbox & CSS Grid", tags: ["Web", "UI"] },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Prompt Engineering",
      icon: <MessageSquareCode className="w-5 h-5 text-[#8C8EF7]" />,
      skills: [
        { name: "Prompt Engineering", level: "Hands-on Experience", desc: "Designing structured prompts, context optimization, and LLM output schemas", tags: ["Gemini API", "LLMs"] },
        { name: "React.js & Next.js", level: "Familiar", desc: "App router, server/client components, state management, hooks", tags: ["Full-Stack", "Frontend"] },
        { name: "Node.js & Express.js", level: "Familiar", desc: "RESTful API architecture, JWT authentication middleware, routing", tags: ["Backend", "API"] },
        { name: "Tailwind CSS & Radix UI", level: "Familiar", desc: "Modern glassmorphism UI, accessible components, micro-animations", tags: ["UI/UX", "Styling"] },
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-[#8C8EF7]" />,
      skills: [
        { name: "MongoDB & MongoDB Compass", level: "Familiar", desc: "Document schema design, queries, aggregation pipelines", tags: ["NoSQL", "Database"] },
        { name: "PostgreSQL", level: "Working Knowledge", desc: "Relational database modeling, SQL queries, transactional integrity", tags: ["SQL", "RDBMS"] },
        { name: "Antigravity IDE & VS Code", level: "Hands-on Experience", desc: "Modern development workflows, debugging, extensions", tags: ["IDE", "Tooling"] },
        { name: "Git & GitHub", level: "Familiar", desc: "Version control, branching workflows, team repository management", tags: ["VCS", "Collaboration"] },
      ],
    },
    {
      id: "soft",
      title: "Professional & Soft Skills",
      icon: <Users className="w-5 h-5 text-[#8C8EF7]" />,
      skills: [
        { name: "Problem-Solving", level: "Core Strength", desc: "Systematic root-cause analysis and algorithmic problem solving", tags: ["DSA", "Logic"] },
        { name: "Team Collaboration", level: "Strong", desc: "Cross-functional communication, code reviews, collaborative team projects", tags: ["Teamwork", "Agile"] },
        { name: "Time Management", level: "Strong", desc: "Sprint milestone delivery, task prioritization, deadline adherence", tags: ["Productivity"] },
        { name: "Multitasking & Self-Learning", level: "Core Strength", desc: "Rapid adoption of new web frameworks, APIs, and modern tooling", tags: ["Adaptability"] },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#19191B]">
      
      {/* Decorative vector */}
      <div className="absolute bottom-16 right-16 pointer-events-none opacity-20">
        <GeometricSquare className="w-10 h-10 border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-[#8C8EF7]">Competencies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            A comprehensive overview of programming languages, full-stack frameworks, prompt engineering, and developer tools.
          </p>
        </div>

        {/* Categories Grid (2x2 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="enver-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#5454D6]/20 border border-[#5454D6]/30">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="text-[11px] text-zinc-400">
                      {category.skills.length} verified competencies
                    </span>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-[#17171C] border border-white/5 hover:border-[#5454D6]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">
                          {skill.name}
                        </span>
                        <span className="font-custom-script text-base sm:text-lg text-[#a5b4fc] font-semibold tracking-wide">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                        {skill.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 font-mono"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
