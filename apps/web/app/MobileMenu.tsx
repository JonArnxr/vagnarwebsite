"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex items-center justify-center text-white"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-stone-900 border-t border-stone-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-stone-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 font-semibold"
              >
                Hafðu Samband
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
