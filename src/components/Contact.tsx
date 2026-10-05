"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ZigzagLine, PlusMark, GeometricSquare } from "./GeometricAccents";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("studysuccess61@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#19191B]">
      
      {/* Decorative vectors */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-25">
        <GeometricSquare className="w-10 h-10 border-[#5454D6]" />
      </div>
      <div className="absolute bottom-10 right-10 pointer-events-none opacity-30">
        <PlusMark className="w-8 h-8 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact & <span className="text-[#8C8EF7]">Get In Touch</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Button */}
            <div className="enver-card p-6 rounded-2xl border border-white/10 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#5454D6]/20 border border-[#5454D6]/30 text-[#8C8EF7]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Official Email
                    </span>
                    <h4 className="text-white font-bold text-sm sm:text-base mt-0.5 select-all">
                      studysuccess61@gmail.com
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="mt-3 text-[11px] text-emerald-400 font-medium animate-in fade-in">
                  ✓ Email address copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="enver-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#5454D6]/20 border border-[#5454D6]/30 text-[#8C8EF7]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <h4 className="text-white font-bold text-sm sm:text-base mt-0.5">
                    +91 - 9389334987
                  </h4>
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-2xl bg-[#1C1C22] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Connect Online
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/abhilasha-dhami/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#17171C] border border-white/5 hover:border-[#5454D6]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#8C8EF7]" />
                    <span className="text-xs font-bold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com/abhilashadhami"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#17171C] border border-white/5 hover:border-[#5454D6]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#8C8EF7]" />
                    <span className="text-xs font-bold text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="enver-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#202028] via-[#1A1A22] to-[#15151A] shadow-2xl">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#5454D6]/15 border border-[#5454D6]/40 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-[#5454D6] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Thank you!</h4>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-sm mx-auto">
                    Your message has been captured. You can also reach out directly at <span className="text-[#8C8EF7] font-mono">studysuccess61@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="enver-btn-outline px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#5454D6] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#5454D6] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#5454D6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhilasha, I came across your portfolio and would like to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#5454D6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="enver-btn-primary w-full py-3.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
