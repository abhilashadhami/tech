"use client";

import React from "react";
import { 
  Trophy, 
  Flame, 
  TrendingUp, 
  Brain, 
  Target, 
  CheckCircle2, 
  Sparkles,
  Award,
  Terminal
} from "lucide-react";
import { ZigzagLine, PlusMark, GeometricCircleRing } from "./GeometricAccents";

export default function AchievementsDSA() {
  const platforms = [
    { name: "LeetCode", stat: "1,550+ Rating", desc: "Active problem solver focusing on Arrays, Trees, Dynamic Programming, and Graph algorithms.", badge: "1,550+ Contest Rating" },
    { name: "CodeChef", stat: "Active Coder", desc: "Timed algorithmic contests, mathematical optimization, and logic implementation.", badge: "Rated Competitor" },
    { name: "GeeksforGeeks", stat: "Core DSA", desc: "Extensive practice on data structures, recursion, sorting, and search algorithms.", badge: "200+ Overall Solved" },
  ];

  const dsaTopics = [
    { name: "Arrays & Strings", percentage: 95 },
    { name: "Binary Trees & BSTs", percentage: 90 },
    { name: "Graphs & BFS/DFS", percentage: 85 },
    { name: "Dynamic Programming", percentage: 80 },
    { name: "Recursion & Backtracking", percentage: 88 },
    { name: "Hash Maps & Heaps", percentage: 92 },
  ];

  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-[#161618]">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-8 pointer-events-none opacity-30">
        <GeometricCircleRing className="w-14 h-14" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              DSA & Problem <span className="text-[#8C8EF7]">Solving</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Strong foundational mastery in Data Structures and Algorithms with verified problem-solving track record across competitive platforms.
          </p>
        </div>

        {/* Big Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="enver-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-zinc-400">Total Solved</span>
              <div className="p-2 rounded-lg bg-[#5454D6]/20 text-[#8C8EF7]">
                <Flame className="w-5 h-5" />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#8C8EF7] transition-colors">
              200+
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              Problems solved across LeetCode, CodeChef, & GeeksforGeeks
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#8C8EF7] font-semibold flex items-center gap-1">
              <span>Consistent Daily Practice</span>
            </div>
          </div>

          <div className="enver-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-zinc-400">LeetCode Rating</span>
              <div className="p-2 rounded-lg bg-[#5454D6]/20 text-[#8C8EF7]">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#8C8EF7] transition-colors">
              1,550+
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              Competitive contest rating demonstrating deep algorithmic logic
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#8C8EF7] font-semibold flex items-center gap-1">
              <span>Top Tier Problem Solver</span>
            </div>
          </div>

          <div className="enver-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-zinc-400">Summer DSA Acceptance</span>
              <div className="p-2 rounded-lg bg-[#5454D6]/20 text-[#8C8EF7]">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#8C8EF7] transition-colors">
              Top 5.3%
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              Selected among 240 students from 4,500 applicants
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#8C8EF7] font-semibold flex items-center gap-1">
              <span>Industry-Led Offline Intensive</span>
            </div>
          </div>

        </div>

        {/* Breakdown of Platform Mastery & Topic Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Platform Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#8C8EF7]" /> Platform Competency
            </h3>
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1C1C22] border border-white/10 flex flex-col justify-between hover:border-[#5454D6]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">{p.name}</span>
                  </div>
                  <span className="font-custom-script text-base sm:text-lg text-[#a5b4fc] font-semibold">
                    {p.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* DSA Topic Proficiency Matrix */}
          <div className="lg:col-span-6 bg-[#1C1C22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#8C8EF7]" /> Core Algorithmic Domains
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Strengths developed through rigorous problem solving and time-complexity optimization.
              </p>

              <div className="space-y-4">
                {dsaTopics.map((topic, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium items-baseline">
                      <span className="text-zinc-200">{topic.name}</span>
                      <span className="font-custom-script text-base text-[#a5b4fc] font-semibold">{topic.percentage}% Mastery</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#5454D6] to-[#8C8EF7] rounded-full transition-all duration-1000"
                        style={{ width: `${topic.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-[#8C8EF7]" /> C++ & Java Optimized
              </span>
              <span className="font-custom-script text-base text-[#a5b4fc] font-semibold">O(1) / O(log N) Focus</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
