"use client";

import React from "react";
import { 
  Code2, 
  MessageSquareCode, 
  ShieldCheck, 
  Palette, 
  Database, 
  Binary, 
  ArrowUpRight 
} from "lucide-react";
import { ZigzagLine, PlusMark, GeometricTriangle } from "./GeometricAccents";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, high-speed single-page & server-rendered web applications using React.js, Next.js, Node.js, and Express.",
      tags: ["React.js", "Next.js", "Node.js", "Express.js"],
    },
    {
      icon: <MessageSquareCode className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Prompt Engineering & LLMs",
      description:
        "Designing structured prompts, context refinement, and Gemini API integrations for intelligent document processing and web automation.",
      tags: ["Prompt Engineering", "Gemini API", "Context Design", "LLMs"],
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Enterprise Auth & API Security",
      description:
        "Architecting dual-token JWT authentication, Zod schema validation, Helmet security headers, CORS controls, and bcrypt encryption.",
      tags: ["JWT", "Zod", "bcrypt", "OAuth 2.0"],
    },
    {
      icon: <Palette className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Modern UI/UX & Glassmorphism",
      description:
        "Crafting intuitive design systems, micro-animations, accessible Radix UI components, and tailored dark-mode aesthetics.",
      tags: ["Tailwind CSS", "Framer Motion", "Radix UI", "CSS3"],
    },
    {
      icon: <Database className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Database Design & Management",
      description:
        "Designing normalized schemas, indexes, and robust query pipelines across MongoDB, PostgreSQL, and SQLite.",
      tags: ["MongoDB", "PostgreSQL", "SQLite", "Compass"],
    },
    {
      icon: <Binary className="w-7 h-7 text-[#8C8EF7]" />,
      title: "Data Structures & System Logic",
      description:
        "Developing high-performance algorithms with C++ and Java, backed by 200+ solved problems and 1,550+ LeetCode rating.",
      tags: ["C++", "Java", "DSA", "Problem Solving"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#19191B]">
      
      {/* Decorative background vectors */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-40">
        <GeometricTriangle className="w-12 h-12 text-[#5454D6]" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-30">
        <PlusMark className="w-8 h-8 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What I <span className="text-[#8C8EF7]">Do</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            End-to-end full stack web development, prompt engineering, and algorithmic software engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="enver-card p-8 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#5454D6]/15 border border-[#5454D6]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#5454D6]/25 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8C8EF7] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
