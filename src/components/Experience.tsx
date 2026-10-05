"use client";

import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Users,
  BrainCircuit
} from "lucide-react";
import { ZigzagLine, PlusMark } from "./GeometricAccents";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#19191B]">
      
      {/* Decorative accent */}
      <div className="absolute top-12 left-12 pointer-events-none opacity-20">
        <PlusMark className="w-10 h-10 text-[#5454D6]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Training & <span className="text-[#8C8EF7]">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            Hands-on technical training and competitive problem solving under industry specialists.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="enver-card rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-br from-[#202028] via-[#1A1A22] to-[#15151A] shadow-2xl relative overflow-hidden group">
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#5454D6]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#5454D6]/30 transition-all duration-500" />

            <div className="space-y-6">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Summer Training | Data Structures and Algorithms
                  </h3>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Calendar className="w-4 h-4 text-[#8C8EF7]" />
                    <span>Jun 2026 – Aug 2026</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 mt-1">
                    Intensive Offline Program
                  </span>
                </div>
              </div>

              {/* Key Highlights Bullet points from resume */}
              <div className="space-y-4 py-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#17171C] border border-white/5">
                  <Award className="w-5 h-5 text-[#8C8EF7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Top 5.3% Candidate Selection Rate
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                      Selected among <span className="text-white font-medium">240 students out of 4,500 applicants</span> for an intensive offline DSA training program led by industry specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#17171C] border border-white/5">
                  <BrainCircuit className="w-5 h-5 text-[#8C8EF7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Structured Instruction & Algorithmic Rigor
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                      Studied core data structures and advanced algorithms through structured instruction, live problem-solving sessions, and hands-on practice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#17171C] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#8C8EF7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Exceptional Evaluation Performance
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                      Participated in multiple evaluation examinations throughout the training period and consistently performed strongly across assessments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Training Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "C++", "Java", "Time Complexity Optimization", "Dynamic Programming", "Graph Theory"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
