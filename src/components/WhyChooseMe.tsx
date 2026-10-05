"use client";

import React, { useState } from "react";
import { Play, CheckCircle2, ShieldCheck, Zap, Sparkles, X, Code, Terminal, Layers, MessageSquareCode } from "lucide-react";

export default function WhyChooseMe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"shortlist" | "satquery">("shortlist");

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#161618]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Work With <br />
              <span className="text-[#8C8EF7]">Me?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore how I blend robust full-stack architecture, prompt engineering, modern frontend craft, and algorithmic rigor to engineer high-impact web platforms.
            </p>
          </div>
        </div>

        {/* Interactive Feature Banner styled after Enver's video card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#23232c] to-[#1a1a20] group">
          
          {/* Visual Canvas simulating interactive project walkthrough */}
          <div className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center p-6 sm:p-12 overflow-hidden">
            
            {/* Background Grid Pattern & Ambient Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5454D6]/20 via-[#19191B]/80 to-[#19191B] pointer-events-none" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Code & Architecture Preview Cards in background */}
            <div className="absolute left-8 top-12 hidden md:block w-72 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] text-zinc-400 font-mono">auth.controller.ts</span>
              </div>
              <pre className="text-[10px] text-emerald-400 font-mono leading-tight">
                {`// Dual-Token JWT Auth Engine
const { accessToken, refreshToken } = 
  await generateTokens(user._id);
res.cookie('jwt', refreshToken, {
  httpOnly: true, secure: true
});`}
              </pre>
            </div>

            <div className="absolute right-8 bottom-12 hidden md:block w-72 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquareCode className="w-3.5 h-3.5 text-[#8C8EF7]" />
                <span className="text-[11px] text-zinc-400 font-mono">prompt_pipeline.ts</span>
              </div>
              <pre className="text-[10px] text-blue-300 font-mono leading-tight">
                {`// Prompt Engineering with Gemini
const structuredResumePrompt = 
  buildStructuredPrompt(resumeRaw, {
    outputSchema: RecruiterSchema,
    temperature: 0.2
  });`}
              </pre>
            </div>

            {/* Central Glow Play Button */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#5454D6] hover:bg-[#6767e8] flex items-center justify-center text-white shadow-[0_0_40px_rgba(84,84,214,0.7)] group-hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Play Project Walkthrough"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
              </button>
              
              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-wide">
                Interactive Engineering Showcase
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-sm">
                Click to explore live architecture schemas, security safeguards, and frontend workflows
              </p>
            </div>

          </div>

          {/* Value Pillars Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 bg-[#1c1c22]">
            
            <div className="p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#5454D6]/20 text-[#8C8EF7]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Full-Stack Modernity</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Next.js, React.js, Node.js, Express, MongoDB, and PostgreSQL with robust RESTful APIs.
                </p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#5454D6]/20 text-[#8C8EF7]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Modern Frontend & UI/UX</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Tailwind CSS v4, Framer Motion micro-animations, Radix UI components, and responsive design.
                </p>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#5454D6]/20 text-[#8C8EF7]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Security & Prompt Engineering</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Dual-token JWT auth, Zod validation, bcrypt, Gemini prompt engineering & 1,550+ LeetCode rating.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#1E1E24] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#17171B]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8C8EF7]" />
                <span className="text-white font-bold text-base sm:text-lg">
                  System Architecture & Deep Dive
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-white/10 bg-[#1A1A20] px-6">
              <button
                onClick={() => setActiveTab("shortlist")}
                className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === "shortlist"
                    ? "border-[#5454D6] text-white"
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                🚀 ShortListMe (Full-Stack AI Web App)
              </button>
              <button
                onClick={() => setActiveTab("satquery")}
                className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === "satquery"
                    ? "border-[#5454D6] text-white"
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                💻 SatqueryAI (Frontend & UI Implementation)
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              {activeTab === "shortlist" ? (
                <div className="space-y-4">
                  <div className="bg-[#24242C] p-4 rounded-xl border border-white/10">
                    <h5 className="text-white font-bold text-base mb-1">
                      ShortListMe — Full-Stack Resume Conversion Platform
                    </h5>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      Converts PDF/DOCX resumes into recruiter-ready responsive online portfolios using Google Gemini API prompt engineering and modern full-stack web architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#19191B] p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#8C8EF7] font-semibold text-xs uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" /> Security & Auth Architecture
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        <li>Enterprise dual-token authentication via JWT (HttpOnly cookies)</li>
                        <li>Zod schema validation across all API routes</li>
                        <li>bcrypt password hashing with dynamic salts</li>
                        <li>Helmet security headers & CORS credential enforcement</li>
                        <li>Backend safeguards against brute-force login attacks</li>
                      </ul>
                    </div>

                    <div className="bg-[#19191B] p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#8C8EF7] font-semibold text-xs uppercase tracking-wider">
                        <Layers className="w-4 h-4" /> Frontend & Prompt Engineering
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        <li>Tailwind CSS v4 modern glassmorphism UI theme</li>
                        <li>Framer Motion micro-animations and page transitions</li>
                        <li>Radix UI accessible design primitives</li>
                        <li>Prompt engineering with Gemini API for precise resume parsing</li>
                        <li>Google OAuth 2.0 social login integration</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#141418] p-4 rounded-xl border border-white/10 font-mono text-xs text-zinc-300">
                    <div className="text-zinc-400 mb-2 font-sans font-medium text-xs">
                      Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2 font-sans text-xs">
                      {["React.js", "Node.js", "MongoDB", "Express.js", "CSS", "JWT", "Gemini API Prompt Engineering", "Next.js", "Tailwind CSS", "Google OAuth"].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-[#5454D6]/20 text-[#a5b4fc] border border-[#5454D6]/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#24242C] p-4 rounded-xl border border-white/10">
                    <h5 className="text-white font-bold text-base mb-1">
                      SatqueryAI — Collaborative Team Project (Frontend Focus)
                    </h5>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      Collaborated in a team project, <span className="text-white font-medium">contributing primarily to frontend development and UI implementation</span> using React.js, JavaScript, Vite, and Tailwind CSS.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#19191B] p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#8C8EF7] font-semibold text-xs uppercase tracking-wider">
                        <Layers className="w-4 h-4" /> Frontend & UI Engineering
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        <li>Built interactive UI components in React with JavaScript & Vite</li>
                        <li>Designed dynamic views for Visual Question Answering (VQA)</li>
                        <li>Implemented responsive layout with Tailwind CSS</li>
                        <li>Built interactive region selection and visual analysis UI</li>
                        <li>Rendered query history and structured analysis views</li>
                      </ul>
                    </div>

                    <div className="bg-[#19191B] p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#8C8EF7] font-semibold text-xs uppercase tracking-wider">
                        <Terminal className="w-4 h-4" /> User Interaction & PDF Reports
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        <li>Built interactive confidence score gauges and execution tracing UI</li>
                        <li>Designed metadata display panels and image inspection controls</li>
                        <li>Implemented client-side PDF intelligence report viewing</li>
                        <li>Clean modular state management and responsive styling</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#141418] p-4 rounded-xl border border-white/10 font-mono text-xs text-zinc-300">
                    <div className="text-zinc-400 mb-2 font-sans font-medium text-xs">
                      My Contributions & Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2 font-sans text-xs">
                      {["React.js", "JavaScript", "Vite", "Tailwind CSS", "Frontend UI/UX", "Interactive Dashboards", "Component Architecture"].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-[#5454D6]/20 text-[#a5b4fc] border border-[#5454D6]/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#17171B] border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="enver-btn-primary px-5 py-2 rounded-full text-xs font-semibold cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
