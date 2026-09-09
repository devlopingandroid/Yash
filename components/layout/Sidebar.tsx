/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio-data";
import { Menu, X, FileDown, Eye, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Button from "@/components/ui/Button";
import ResumeModal from "@/components/ui/ResumeModal";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Top Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-[#0F0E0C]/85 backdrop-blur-xl border-b border-stone-200/70 dark:border-stone-800/70 shadow-sm py-3"
            : "bg-white/70 dark:bg-[#0F0E0C]/70 backdrop-blur-md border-b border-stone-200/40 dark:border-stone-800/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Brand: Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center group shrink-0"
          >
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-primary leading-tight tracking-tight">
                Yash <span className="text-accent-teal">Goel</span>
              </h1>
              <p className="text-[11px] font-mono text-muted flex items-center gap-1">
                <Terminal className="w-3 h-3 text-accent-teal" /> Software Eng.
              </p>
            </div>
          </a>

          {/* Desktop Center Navigation Links with Modern Sliding Pill */}
          <nav className="hidden xl:flex items-center gap-1 bg-stone-100/70 dark:bg-stone-900/60 p-1.5 rounded-2xl border border-stone-200/70 dark:border-stone-800/80 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent-teal font-bold"
                      : "text-muted hover:text-primary hover:bg-stone-200/40 dark:hover:bg-stone-800/40"
                  }`}
                >
                  {/* Sliding Elevated Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="navbarActivePill"
                      className="absolute inset-0 bg-white dark:bg-stone-800 border border-stone-200/90 dark:border-stone-700/80 rounded-xl shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons & Social Icons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Social Links */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-dark-border/60">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted hover:text-accent-teal hover:bg-dark-surface border border-transparent hover:border-dark-border transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted hover:text-accent-teal hover:bg-dark-surface border border-transparent hover:border-dark-border transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              {personalInfo.socialLinks.leetcode && (
                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-muted hover:text-[#FFA116] hover:bg-dark-surface border border-transparent hover:border-dark-border transition-all"
                  aria-label="LeetCode"
                >
                  <SiLeetcode className="w-4 h-4" />
                </a>
              )}
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted hover:text-accent-teal hover:bg-dark-surface border border-transparent hover:border-dark-border transition-all"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Buttons */}
            <Button
              onClick={() => setIsResumeModalOpen(true)}
              variant="outline"
              size="sm"
              className="text-xs px-3.5 py-1.5 bg-white/80 dark:bg-stone-900/80 border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-accent-teal hover:border-accent-teal/40 shadow-sm font-medium"
              icon={<Eye className="w-3.5 h-3.5" />}
            >
              Preview
            </Button>

            <Button
              href={personalInfo.resumeUrl}
              download="Yash_Goel.pdf"
              target="_blank"
              variant="primary"
              size="sm"
              className="text-xs px-3.5 py-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold shadow-sm shadow-orange-500/20 border-none"
              icon={<FileDown className="w-3.5 h-3.5" />}
            >
              Download
            </Button>
          </div>

          {/* Mobile Controls: Theme Toggle & Hamburger Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-primary hover:text-accent-teal focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="xl:hidden fixed inset-0 bg-dark-bg/80 backdrop-blur-md z-40"
            />

            <motion.aside
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="xl:hidden fixed top-16 left-0 right-0 bg-dark-surface border-b border-dark-border z-50 p-6 shadow-2xl rounded-b-3xl"
            >
              <nav className="grid grid-cols-2 gap-2 mb-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <a
                      key={link.sectionId}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all ${
                        isActive
                          ? "bg-accent-teal/20 text-accent-teal border border-accent-teal/40 font-bold"
                          : "text-muted hover:text-primary hover:bg-dark-bg/50"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? "bg-accent-teal shadow-teal-glow" : "bg-dark-border"
                        }`}
                      />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-dark-border space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      setIsResumeModalOpen(true);
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    icon={<Eye className="w-3.5 h-3.5" />}
                  >
                    Preview
                  </Button>

                  <Button
                    href={personalInfo.resumeUrl}
                    download="Yash_Goel.pdf"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                    icon={<FileDown className="w-3.5 h-3.5" />}
                  >
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-center">
                  <ThemeToggle showLabel={true} className="w-full justify-center py-2" />
                </div>

                <div className="flex items-center justify-center gap-4 text-muted">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-bg border border-dark-border hover:text-accent-teal transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-bg border border-dark-border hover:text-accent-teal transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  {personalInfo.socialLinks.leetcode && (
                    <a
                      href={personalInfo.socialLinks.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-dark-bg border border-dark-border hover:text-[#FFA116] transition-colors"
                      aria-label="LeetCode"
                    >
                      <SiLeetcode className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={personalInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-bg border border-dark-border hover:text-accent-teal transition-colors"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
};

export default Navbar;

