"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Terminal,
  ArrowUpRight,
  Code2,
  Users
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { ZigzagLine, PlusMark } from "./GeometricAccents";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "fullstack">("all");

  const projects = [
    {
      id: "shortlistme",
      title: "ShortListMe",
      category: "fullstack",
      categoryLabel: "Full-Stack & Prompt Engineering",
      timeline: "Mar 2026",
      tagline: "Full-Stack web app converting resumes (PDF/DOCX) into recruiter-ready online portfolios using Gemini API prompt engineering.",
      githubUrl: "https://github.com/abhilashadhami",
      liveUrl: "#",
      highlights: [
        "Architected enterprise-grade dual-token authentication system using JWTs (Access + Refresh tokens with HttpOnly cookies).",
        "Designed modern glassmorphism UI with Tailwind CSS v4, Framer Motion, and Radix UI delivering micro-animations & recruiter dashboard analytics.",
        "Enforced strict security via Zod schema parsing, bcrypt password hashing, Helmet headers, and CORS credential management.",
        "Implemented proactive backend safeguards to mitigate brute-force authentication attacks.",
        "Crafted structured Prompt Engineering workflows with Google Gemini API for accurate, schema-compliant resume data extraction."
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini API",
        "Prompt Engineering",
        "Tailwind CSS v4",
        "Framer Motion",
        "Radix UI",
        "JWT",
        "Google OAuth",
        "Zod",
        "bcrypt",
        "Helmet"
      ],
      color: "from-[#5454D6] to-[#7B7BFF]",
    },
    {
      id: "satqueryai",
      title: "SatqueryAI",
      category: "frontend",
      categoryLabel: "Frontend & UI (Team Project)",
      timeline: "Mar 2025",
      tagline: "Natural-language remote-sensing analysis platform — contributed primarily to frontend development and UI implementation.",
      githubUrl: "https://github.com/abhilashadhami",
      liveUrl: "#",
      highlights: [
        "Collaborated in a team project, contributing primarily to the frontend development and UI implementation of the application.",
        "Built responsive, modular React components using JavaScript and Vite with Tailwind CSS styling.",
        "Designed and implemented interactive interfaces for Visual Question Answering (VQA), captions, and change detection visualizations.",
        "Built user-friendly UI for task routing inspection, evidence display, and confidence scoring visualization.",
        "Created metadata extraction panels, analysis history logs, interactive region selectors, and PDF report viewer."
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "UI/UX Implementation",
        "Frontend Architecture",
        "Component Design"
      ],
      color: "from-[#3B82F6] to-[#8B5CF6]",
    }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "frontend") return p.category === "frontend";
    if (activeFilter === "fullstack") return p.category === "fullstack";
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#161618]">
      
      {/* Decorative accent */}
      <div className="absolute top-1/2 -left-8 pointer-events-none opacity-30">
        <ZigzagLine className="w-16 h-8 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              My <span className="text-[#8C8EF7]">Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#1F1F26] p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#5454D6] text-white shadow-[0_0_12px_rgba(84,84,214,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("fullstack")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "fullstack"
                  ? "bg-[#5454D6] text-white shadow-[0_0_12px_rgba(84,84,214,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "frontend"
                  ? "bg-[#5454D6] text-white shadow-[0_0_12px_rgba(84,84,214,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Frontend & UI
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="enver-card rounded-3xl p-6 sm:p-10 border border-white/10 bg-gradient-to-br from-[#202028] via-[#1B1B22] to-[#16161B] shadow-2xl relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div
                className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${project.color} opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Project Summary, Timeline & Features */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Timeline */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8C8EF7] font-medium">
                      📅 {project.timeline}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#8C8EF7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base mt-2 font-normal leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Contributions & Architectural Highlights */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#8C8EF7]" /> Key Highlights & Engineering
                    </h4>
                    <div className="space-y-2.5">
                      {project.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#8C8EF7] shrink-0 mt-0.5" />
                          <p className="text-zinc-300 text-xs sm:text-sm leading-normal">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="enver-btn-primary px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Clean Architecture</span>
                    </div>
                  </div>

                </div>

                {/* Right Col: Tech Stack & System Badges */}
                <div className="lg:col-span-5 bg-[#141418]/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full backdrop-blur-md">
                  
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                        <Code2 className="w-4 h-4 text-[#8C8EF7]" />
                        <span>Technologies & Libraries</span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.techStack.length} Modules
                      </span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-zinc-200 border border-white/10 hover:border-[#5454D6]/60 hover:text-white hover:bg-[#5454D6]/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Micro Visual Card */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-zinc-300 space-y-1">
                      <div className="text-[#8C8EF7] font-semibold flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{project.id === "shortlistme" ? "auth_pipeline.js" : "frontend_view.jsx"}</span>
                      </div>
                      <div className="text-zinc-400 text-[10px]">
                        {project.id === "shortlistme"
                          ? "✓ Dual-Token JWT • Zod Parsing • BCrypt • Helmet • Gemini Prompting"
                          : "✓ React Component Tree • JavaScript • Vite • Tailwind UI"}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
