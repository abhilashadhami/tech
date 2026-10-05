import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AchievementsDSA from "@/components/AchievementsDSA";
import Experience from "@/components/Experience";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#19191B] text-white flex flex-col selection:bg-[#5454D6] selection:text-white relative">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <Services />
      <Projects />
      <Skills />
      <AchievementsDSA />
      <Experience />
      <EducationCertifications />
      <Contact />
      <Footer />
    </main>
  );
}
