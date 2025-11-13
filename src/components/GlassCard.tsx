import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative backdrop-blur-2xl bg-black/40 rounded-2xl border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}>
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}