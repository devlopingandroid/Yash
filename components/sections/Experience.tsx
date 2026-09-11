/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { experienceData } from "@/data/portfolio-data";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  ExternalLink,
  X,
} from "lucide-react";

export const Experience: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<{
    role: string;
    company: string;
    certificateUrl: string;
  } | null>(null);

  const total = experienceData.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isPaused || selectedCert) return;
    const timer = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(timer);
  }, [isPaused, selectedCert, handleNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="experience"
      className="pt-6 md:pt-8 pb-14 md:pb-20 scroll-mt-24 md:scroll-mt-28 border-t border-dark-border/40 overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <SectionBadge title="Work Experience" className="mb-0" />

        {/* Quick Company Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-surface border border-dark-border self-start sm:self-auto overflow-x-auto shadow-sm">
          {experienceData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeIndex === idx
                  ? "bg-accent-teal text-white shadow-sm font-bold"
                  : "text-muted hover:text-primary hover:bg-dark-border/30 font-medium"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Coverflow Sliding Stage */}
      <div
        className="relative w-full max-w-6xl mx-auto min-h-[510px] sm:min-h-[550px] flex items-center justify-center py-4 overflow-hidden touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 border border-dark-border text-primary hover:border-accent-teal hover:text-accent-teal hover:shadow-teal-glow backdrop-blur-md transition-all z-40 shadow-xl cursor-pointer"
          aria-label="Previous Experience"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 border border-dark-border text-primary hover:border-accent-teal hover:text-accent-teal hover:shadow-teal-glow backdrop-blur-md transition-all z-40 shadow-xl cursor-pointer"
          aria-label="Next Experience"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3D Stage with Preserved Perspective and Rotation */}
        <div
          className="relative w-full h-[510px] sm:h-[540px] flex items-center justify-center overflow-hidden"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {experienceData.map((item, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);

            const xStep = isMobile ? 120 : 280;
            const xOffset = offset * xStep;
            const scale = Math.max(0.65, 1 - absOffset * (isMobile ? 0.12 : 0.18));
            const rotateY = offset < 0 ? 28 : offset > 0 ? -28 : 0;
            const opacity = Math.max(0.2, 1 - absOffset * 0.4);
            const zIndex = 20 - absOffset;
            const isCenter = offset === 0;

            return (
              <motion.div
                key={item.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[305px] sm:w-[500px] md:w-[580px] cursor-pointer touch-pan-y ${
                  isCenter ? "cursor-grab active:cursor-grabbing" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Modern Card Design matching Reference Layout */}
                <div
                  className={`p-5 sm:p-7 flex flex-col justify-between h-[500px] sm:h-[530px] rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                    isCenter
                      ? "bg-white dark:bg-dark-surface border-2 border-accent-teal/80 shadow-[0_12px_40px_rgba(234,88,12,0.18)] dark:shadow-[0_12px_40px_rgba(249,115,22,0.15)]"
                      : "bg-white/90 dark:bg-dark-surface/90 border border-dark-border/70 opacity-80 backdrop-blur-sm"
                  }`}
                >
                  {/* Top Row: Category Domain & Status */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-semibold text-accent-teal tracking-wide">
                      {item.category || item.projectHighlight || "Engineering"}
                    </span>

                    {item.current && (
                      <span className="text-xs sm:text-sm font-mono text-muted font-medium">
                        Most Recent
                      </span>
                    )}
                  </div>

                  {/* Header: Role, Company, Period & Company Logo */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-xl font-bold text-primary tracking-tight">
                        {item.role}
                      </h3>

                      <div className="text-sm sm:text-base font-bold text-accent-teal">
                        {item.company}
                      </div>

                      <p className="text-xs font-mono text-muted pt-0.5">
                        {item.period} &nbsp;|&nbsp; {item.location}
                      </p>
                    </div>

                    {/* Company Logo in Rounded Square Box */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-dark-border/70 p-2 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      {item.logoUrl ? (
                        <img
                          src={item.logoUrl}
                          alt={`${item.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.parentElement?.querySelector(
                              ".logo-fallback"
                            ) as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div
                        className={`logo-fallback ${
                          item.logoUrl ? "hidden" : "flex"
                        } items-center justify-center w-full h-full font-mono font-bold text-accent-teal text-xs`}
                      >
                        {item.company.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <hr className="my-2.5 sm:my-3 border-dark-border/60" />

                  {/* Bullet Points with Clean Circular Bullets */}
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-primary/85 dark:text-gray-300 leading-relaxed font-normal flex-1 overflow-y-auto pr-1 scrollbar-none">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-primary/70 dark:text-gray-400 mt-0.5 text-xs select-none leading-none shrink-0">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider Line */}
                  <hr className="my-2.5 sm:my-3 border-dark-border/60" />

                  {/* Technologies Row (Pipe Separated) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-[13px] font-semibold text-accent-teal mb-2">
                    {item.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="hover:opacity-80 transition-opacity">
                          {tech}
                        </span>
                        {tIdx < item.technologies.length - 1 && (
                          <span className="text-dark-border font-normal select-none">
                            |
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* View Certification Action */}
                  {item.certificateUrl && (
                    <div className="pt-2 border-t border-dark-border/40 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert({
                            role: item.role,
                            company: item.company,
                            certificateUrl: item.certificateUrl!,
                          });
                        }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-teal hover:text-accent-teal-hover transition-colors cursor-pointer group"
                      >
                        <Award className="w-4 h-4 text-accent-teal group-hover:scale-110 transition-transform" />
                        <span className="underline underline-offset-4 decoration-accent-teal/40 group-hover:decoration-accent-teal">
                          View Certification
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {experienceData.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === idx
                ? "w-8 h-2.5 bg-accent-teal shadow-teal-glow"
                : "w-2.5 h-2.5 bg-dark-border hover:bg-muted"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Certificate Viewer Modal rendered at document.body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.94, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.94, opacity: 0, y: 15 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full bg-white dark:bg-dark-surface border border-dark-border rounded-2xl p-4 sm:p-6 overflow-hidden shadow-2xl"
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-dark-border">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-primary flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent-teal" />
                        <span>{selectedCert.role}</span>
                      </h3>
                      <p className="text-xs font-mono text-accent-teal mt-0.5">
                        {selectedCert.company} &nbsp;•&nbsp; Official Verified Certificate
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-lg bg-dark-border/40 text-muted hover:text-primary hover:bg-dark-border transition-colors cursor-pointer"
                      aria-label="Close Modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Certificate Image View */}
                  <div className="relative max-h-[70vh] flex items-center justify-center overflow-auto rounded-xl bg-black/5 dark:bg-black/40 p-2 sm:p-4 border border-dark-border/60">
                    <img
                      src={selectedCert.certificateUrl}
                      alt={`${selectedCert.company} Certificate`}
                      className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md"
                    />
                  </div>

                  {/* Modal Footer */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-dark-border">
                    <span className="text-xs font-mono text-muted">
                      Verified Industry & Research Credential
                    </span>
                    <a
                      href={selectedCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-accent-teal text-white hover:bg-accent-teal-hover transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Full Resolution</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Experience;