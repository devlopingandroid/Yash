"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileDown, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import { getAssetPath } from "@/lib/asset";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  pdfUrl = getAssetPath("/Yash_Goel.pdf"),
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-5xl h-[85vh] bg-dark-surface border border-accent-teal/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border bg-dark-bg/60 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-accent-teal/15 text-accent-teal">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-primary leading-tight">
                    Resume Preview
                  </h3>
                  <p className="text-xs font-mono text-muted">Yash_Goel.pdf</p>
                </div>
              </div>

              {/* Action Buttons Header */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  href={pdfUrl}
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="hidden sm:inline-flex"
                >
                  Open in Tab
                </Button>

                <Button
                  href={pdfUrl}
                  download="Yash_Goel.pdf"
                  variant="primary"
                  size="sm"
                  icon={<FileDown className="w-4 h-4" />}
                >
                  Download
                </Button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-muted hover:text-primary hover:bg-dark-bg border border-transparent hover:border-dark-border transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 w-full h-full bg-slate-900 relative">
              <iframe
                src={`${pdfUrl}#toolbar=1`}
                title="Resume Preview PDF"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
