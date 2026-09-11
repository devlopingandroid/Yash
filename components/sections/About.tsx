/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutData, personalInfo, heroStats } from "@/data/portfolio-data";
import { getAssetPath } from "@/lib/asset";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  Server,
  Brain,
  Terminal,
  Rocket,
  Code2,
  Sparkles,
  Briefcase,
  Cpu,
  Award,
  Code,
} from "lucide-react";

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="w-5 h-5 text-accent-teal" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-accent-teal" />;
    case "Award":
      return <Award className="w-5 h-5 text-accent-teal" />;
    case "Code":
      return <Code className="w-5 h-5 text-accent-teal" />;
    default:
      return <Code className="w-5 h-5 text-accent-teal" />;
  }
};

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "Server":
      return <Server className="w-4 h-4 text-accent-teal" />;
    case "Brain":
      return <Brain className="w-4 h-4 text-accent-teal" />;
    case "Terminal":
      return <Terminal className="w-4 h-4 text-accent-teal" />;
    case "Rocket":
      return <Rocket className="w-4 h-4 text-accent-teal" />;
    default:
      return <Sparkles className="w-4 h-4 text-accent-teal" />;
  }
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="pt-6 md:pt-8 pb-14 md:pb-20 scroll-mt-24 md:scroll-mt-28 border-t border-dark-border/40"
    >
      <SectionBadge title="About Me" className="mb-6" />

      {/* Main Grid: Left Details & Right Circular Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Column: Title, Natural Narrative & Core Focus */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Header */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
              {aboutData.heading}
            </h3>
          </div>

          {/* Natural Narrative Paragraphs */}
          <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
            {aboutData.paragraphs?.map((paragraph, index) => (
              <p key={index} className="font-normal text-primary/90">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Core Focus / Competencies */}
          {aboutData.traits && aboutData.traits.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent-teal" />
                Core Focus Areas
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {aboutData.traits.map((trait) => (
                  <div
                    key={trait.id}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-dark-surface/90 border border-dark-border hover:border-accent-teal/40 hover:shadow-teal-glow transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-accent-teal/10 group-hover:scale-110 transition-transform">
                      {getSkillIcon(trait.iconName)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-primary tracking-tight">
                      {trait.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Right Column: Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center py-4"
        >
          {/* Profile Image Frame with Subtle Outer Rings */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">

            {/* Ambient Warm Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/10 via-orange-500/5 to-transparent rounded-full blur-2xl" />

            {/* Outer Architectural Rings */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-accent-teal/30 animate-spin-slow" />
            <div className="absolute -inset-6 rounded-full border border-accent-teal/15" />

            {/* Circular Image Container */}
            <div className="relative w-full h-full rounded-full p-2 border border-dark-border bg-dark-surface shadow-xl shadow-stone-900/5 dark:shadow-black/40 overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={getAssetPath("/about.jpeg")}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[78%_55%] scale-110 group-hover:scale-115 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallbackDiv = e.currentTarget.parentElement?.querySelector(
                      ".about-avatar-fallback"
                    ) as HTMLElement;
                    if (fallbackDiv) fallbackDiv.style.display = "flex";
                  }}
                />
                <div className="about-avatar-fallback hidden absolute inset-0 bg-dark-surface flex-col items-center justify-center text-center p-6 border border-dark-border rounded-full">
                  <Code2 className="w-14 h-14 text-accent-teal mb-2" />
                  <span className="font-mono font-bold text-lg text-primary">
                    {personalInfo.name}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Milestones & Stats Row (Internships, DSA, Patents, Projects) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mt-10 pt-8 border-t border-stone-200/80 dark:border-stone-800/80"
      >
        {heroStats.map((stat) => (
          <div
            key={stat.id}
            className="p-4 sm:p-5 flex flex-col items-start gap-1 bg-white/80 dark:bg-stone-900/60 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group"
          >
            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-accent-teal mb-1 group-hover:scale-110 transition-transform">
              {getStatIcon(stat.iconName)}
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-primary">
              {stat.number}
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
