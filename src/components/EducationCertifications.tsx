"use client";

import React from "react";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  BookOpen,
  Cloud,
  Terminal,
  Binary
} from "lucide-react";
import { GeometricTriangle, PlusMark } from "./GeometricAccents";

export default function EducationCertifications() {
  const certifications = [
    {
      title: "Data Structures and Algorithm",
      issuer: "Infosys",
      date: "Apr 2025",
      icon: <Binary className="w-5 h-5 text-[#8C8EF7]" />,
      desc: "Comprehensive evaluation covering arrays, linked lists, trees, graphs, sorting, and algorithmic efficiency.",
    },
    {
      title: "Linux Operating Systems",
      issuer: "Skill-Era",
      date: "Mar 2024",
      icon: <Terminal className="w-5 h-5 text-[#8C8EF7]" />,
      desc: "Shell scripting, permissions, process management, networking essentials, and Linux command-line mastery.",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Oct 2026",
      icon: <Cloud className="w-5 h-5 text-[#8C8EF7]" />,
      desc: "Virtualization, cloud architectures, distributed systems, storage models, and cloud infrastructure paradigms.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      score: "CGPA: 9.18 / 10.0",
      timeline: "Aug 2024 – Present",
      status: "Pursuing",
      badge: "Outstanding Academic Merit",
    },
    {
      degree: "Senior Secondary Education (Class 12th)",
      institution: "Kautilya Public School",
      location: "Kota, Rajasthan",
      score: "Percentage: 79%",
      timeline: "Apr 2021 – May 2022",
      status: "Completed",
      badge: "PCM Stream",
    },
    {
      degree: "Secondary Education (Class 10th)",
      institution: "R.A.N Public School",
      location: "Rudrapur, Uttarakhand",
      score: "Percentage: 95.8%",
      timeline: "Apr 2019 – May 2020",
      status: "Completed",
      badge: "Top Distinction (95.8%)",
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#161618]">
      
      {/* Background vector */}
      <div className="absolute top-1/2 right-4 pointer-events-none opacity-20">
        <GeometricTriangle className="w-16 h-16 text-[#5454D6]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-[#8C8EF7]">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            Rigorous educational background paired with recognized industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="p-2 rounded-lg bg-[#5454D6]/20 text-[#8C8EF7]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Educational Journey</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="enver-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#8C8EF7] flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.timeline}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#8C8EF7] transition-colors">
                    {edu.degree}
                  </h4>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-300 mt-2">
                    <span className="font-semibold text-white">{edu.institution}</span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3 h-3 text-[#8C8EF7]" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Score / Performance:</span>
                    <span className="font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="p-2 rounded-lg bg-[#5454D6]/20 text-[#8C8EF7]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#1D1D24] border border-white/10 hover:border-[#5454D6]/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#5454D6]/20 border border-[#5454D6]/30 shrink-0 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="space-y-1 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#8C8EF7] uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {cert.date}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
