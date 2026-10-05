"use client";

import React from "react";

export function ZigzagLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-12 h-6 stroke-white/80 ${className}`}
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14L12 4L22 14L32 4L42 14L52 4L58 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 text-white/70 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );
}

export function GeometricTriangle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-8 h-8 text-white/60 ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="16,4 28,26 4,26" strokeLinejoin="round" />
    </svg>
  );
}

export function GeometricCircleRing({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-full border-2 border-dashed border-white/40 ${className}`}
    />
  );
}

export function GeometricSquare({ className = "" }: { className?: string }) {
  return (
    <div
      className={`border-2 border-white/60 rotate-45 ${className}`}
    />
  );
}
