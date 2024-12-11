import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 p-6 ${className}`}>
      {children}
    </div>
  );
}