"use client";

import React from "react";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141416] border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#5454D6] to-[#8C8EF7] flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-[#19191B] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold font-mono">AD</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-white font-sans">
                Abhilasha
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5454D6] ml-1 self-end mb-1"></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#dsa" className="hover:text-white transition-colors">DSA</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Right: Social Icons & Scroll Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abhilashadhami"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhilasha-dhami/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:studysuccess61@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#5454D6]/20 hover:bg-[#5454D6] text-[#8C8EF7] hover:text-white border border-[#5454D6]/40 transition-all cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Abhilasha Dhami. Built with Next.js, React, and Enver Dark Aesthetics.</p>
        </div>
      </div>
    </footer>
  );
}
