"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles, Terminal, FileText, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ZigzagLine, PlusMark, GeometricTriangle, GeometricCircleRing, GeometricSquare } from "./GeometricAccents";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#5454D6]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#5454D6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Main Engineer Identity Headline */}
            <div className="space-y-2 mb-6">
              <p className="text-sm sm:text-base font-medium text-[#8C8EF7] tracking-wide">
                Hi, I&apos;m Abhilasha Dhami
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                Full-Stack Developer &amp; <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#8C8EF7]">
                  Prompt Engineer
                </span>
              </h1>
            </div>

            {/* Subtext description */}
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mb-8">
              I engineer robust, high-performance web applications and recruiter-ready platforms using <span className="text-white font-medium">React.js, Next.js, Node.js, Express, MongoDB</span>, and structured Prompt Engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="enver-btn-primary px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="enver-btn-outline px-6 py-3.5 rounded-full text-sm font-medium inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>What I Do</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/abhilashadhami"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/abhilasha-dhami/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-zinc-400 mt-0.5">DSA Problems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#8C8EF7]">1,550+</div>
                <div className="text-xs text-zinc-400 mt-0.5">LeetCode Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">9.18</div>
                <div className="text-xs text-zinc-400 mt-0.5">B.Tech CGPA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic matching Enver template */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Geometric Floating Accents */}
            <div className="absolute -top-6 left-2 sm:left-6 z-20 animate-float pointer-events-none">
              <ZigzagLine className="text-white/80 w-14 h-7" />
            </div>

            <div className="absolute top-4 -right-4 sm:-right-8 z-20 animate-float-reverse pointer-events-none">
              <div className="relative w-10 h-10">
                <GeometricCircleRing className="w-10 h-10 border-white/40" />
                <GeometricCircleRing className="w-6 h-6 border-white/50 absolute top-2 left-2" />
              </div>
            </div>

            <div className="absolute -bottom-6 left-0 sm:left-4 z-20 animate-float-reverse pointer-events-none">
              <GeometricTriangle className="w-10 h-10 text-white/70" />
            </div>

            <div className="absolute bottom-10 -right-2 sm:-right-6 z-20 animate-float pointer-events-none">
              <PlusMark className="w-7 h-7 text-white/80" />
            </div>

            <div className="absolute top-1/2 -left-8 z-20 animate-float pointer-events-none hidden sm:block">
              <GeometricSquare className="w-4 h-4 border-white/50" />
            </div>

            {/* Tilted Graphic Frame Structure */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/5] flex items-center justify-center">
              
              {/* Back tilted vibrant purple card */}
              <div className="absolute inset-0 bg-[#5454D6] rounded-3xl -rotate-6 border-2 border-white/20 shadow-[0_20px_50px_rgba(84,84,214,0.4)] transition-transform hover:-rotate-3 duration-500" />
              
              {/* Foreground Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-[#1F1F24] shadow-2xl z-10 group">
                <Image
                  src="/profile.jpg"
                  alt="Abhilasha Dhami - Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19191B] via-transparent to-transparent opacity-80" />

                {/* Floating pill badge on the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#19191B]/85 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-xs font-semibold text-white">Abhilasha Dhami</div>
                    <div className="text-[11px] text-[#8C8EF7]">Full Stack Developer</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#5454D6]/30 px-2 py-1 rounded-md border border-[#5454D6]/40">
                    <Sparkles className="w-3 h-3 text-[#8C8EF7]" />
                    <span className="text-[10px] text-white font-medium">B.Tech CSE</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
