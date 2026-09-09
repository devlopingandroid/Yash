/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { personalInfo, footerData } from "@/data/portfolio-data";
import { ArrowUp, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-dark-border/40 bg-dark-bg text-muted">
      {/* 5-Column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-dark-border/60">
        {/* Column 1: Brand, Taglines, & Social Icons */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-4">
          <div>
            <h4 className="font-extrabold text-lg text-primary leading-tight">
              Yash <span className="text-accent-teal">Goel</span>
            </h4>
            <p className="text-xs font-mono text-muted flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-accent-teal" /> Software Eng.
            </p>
          </div>

          {/* Tagline Lines */}
          <div className="space-y-1 font-mono text-xs text-muted/90 pt-1">
            {footerData.taglines.map((line, idx) => (
              <p key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/60" />
                <span>{line}</span>
              </p>
            ))}
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-2.5 pt-2">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-accent-teal/40 hover:text-accent-teal transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-accent-teal/40 hover:text-accent-teal transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            {personalInfo.socialLinks.leetcode && (
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-[#FFA116]/40 hover:text-[#FFA116] transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            )}
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-accent-teal/40 hover:text-accent-teal transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Columns 2-5: Dynamic Link Lists from Data */}
        {footerData.columns.map((col, colIdx) => (
          <div key={colIdx} className="space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              {col.title}
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              {col.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent-teal transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar: Copyright on Left, Built-With on Right, Back-to-Top Button */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-center md:text-left">
        <p className="text-muted/80">{footerData.copyright}</p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-muted/80">{footerData.builtWith}</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-surface border border-dark-border hover:border-accent-teal hover:text-accent-teal transition-colors text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
