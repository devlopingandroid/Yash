/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Mail,
  Terminal,
  Code2,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex flex-col justify-center py-12 lg:py-20 relative overflow-hidden"
    >
      {/* 1. Subtle Architectural Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,113,108,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* 2. Soft Ambient Warm Glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-orange-500/8 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Grid: Left Photo + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center w-full my-auto">
        
        {/* Left Column: Clean Circular Photo (No moving badges) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-1 py-4 sm:py-6"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[410px] lg:h-[410px] xl:w-[440px] xl:h-[440px] flex items-center justify-center group">
            {/* Ambient Warm Radial Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl -z-10" />

            {/* Subtle Architectural Outer Rings */}
            <div className="absolute -inset-3.5 rounded-full border border-dashed border-orange-500/20 dark:border-orange-500/30 pointer-events-none -z-10" />
            <div className="absolute -inset-7 rounded-full border border-stone-200/60 dark:border-stone-800/60 pointer-events-none -z-10" />

            {/* Circular Image Canvas */}
            <div className="relative w-full h-full rounded-full p-2.5 sm:p-3 border-2 border-stone-200/90 dark:border-stone-800 bg-gradient-to-b from-white via-orange-50/15 to-stone-100 dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 shadow-2xl shadow-stone-900/10 dark:shadow-black/50 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-dark-surface">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[50%_15%] scale-105 group-hover:scale-110 transition-transform duration-500 filter contrast-[1.02]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallbackDiv = e.currentTarget.parentElement?.querySelector(
                      ".avatar-fallback"
                    ) as HTMLElement;
                    if (fallbackDiv) fallbackDiv.style.display = "flex";
                  }}
                />

                <div className="avatar-fallback hidden absolute inset-0 bg-dark-surface flex-col items-center justify-center text-center p-6 border border-dark-border rounded-full">
                  <Code2 className="w-16 h-16 text-accent-teal mb-3" />
                  <span className="font-mono font-bold text-xl text-primary">
                    {personalInfo.name}
                  </span>
                  <span className="text-xs text-muted font-mono mt-1">
                    Profile Image Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Content + Code Snippet with Name + Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2 w-full"
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-accent-teal font-semibold mb-3.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span>{personalInfo.greeting}</span>
          </div>

          {/* Name with Warm Gradient Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-2 leading-tight">
            {personalInfo.firstName}{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent inline-block">
              {personalInfo.lastName}.
            </span>
          </h1>

          {/* Role Subtitle */}
          <h2 className="text-lg sm:text-xl font-mono font-medium text-muted mb-6 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-teal inline" />
            <span className="text-primary font-bold">{personalInfo.role}</span>
          </h2>

          {/* Clean Sophisticated Code Card with Name */}
          <div className="relative w-full mb-7 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-900/95 dark:bg-[#0C0A09]/95 text-stone-200 p-4 sm:p-5 font-mono shadow-xl backdrop-blur-md overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-stone-400 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                <span className="ml-2 text-stone-400 font-mono text-xs">developer.ts</span>
              </div>
              <span className="text-[10px] font-mono text-accent-teal bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 font-semibold">
                TypeScript
              </span>
            </div>

            {/* Code Content */}
            <div className="space-y-1 leading-relaxed text-[12px] sm:text-[13px]">
              <p>
                <span className="text-purple-400 font-semibold">const</span>{" "}
                <span className="text-amber-400 font-semibold">engineer</span>:{" "}
                <span className="text-accent-teal font-semibold">SoftwareEngineer</span> = &#123;
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-stone-400">name:</span>{" "}
                <span className="text-emerald-400 font-medium">&apos;Yash Goel&apos;</span>,
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-stone-400">role:</span>{" "}
                <span className="text-emerald-400 font-medium">&apos;Software Engineer&apos;</span>,
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-stone-400">focus:</span>{" "}
                [<span className="text-emerald-400 font-medium">&apos;Distributed Systems&apos;</span>,{" "}
                <span className="text-emerald-400 font-medium">&apos;Full-Stack&apos;</span>,{" "}
                <span className="text-emerald-400 font-medium">&apos;Applied AI&apos;</span>],
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-stone-400">status:</span>{" "}
                <span className="text-amber-300 font-medium">&apos;Building high-performance solutions&apos;</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold shadow-md shadow-orange-500/25 border-none px-7 py-3 text-sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="bg-white/80 dark:bg-stone-900/80 hover:bg-white dark:hover:bg-stone-900 text-primary border border-stone-200/90 dark:border-stone-800 hover:border-orange-500/40 shadow-sm px-7 py-3 text-sm font-semibold"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
