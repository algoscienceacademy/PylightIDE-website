import { useEffect, useRef } from 'react';

interface AdSpaceProps {
  className?: string;
  id?: string;
}

export function AdSpace({ className = '', id }: AdSpaceProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ad script is loaded globally in index.html
    // This component just provides a styled container for ad display
  }, []);

  return (
    <div 
      ref={adContainerRef}
      id={id}
      className={`relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 min-h-[200px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-pink-500/20 rounded-tr-2xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-cyan-500/20 rounded-bl-2xl"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      
      {/* Ad content placeholder */}
      <div className="w-full text-center relative z-10">
        <div className="mb-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-2">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 text-sm">Advertisement Space</p>
        <p className="text-gray-500 text-xs mt-1">Content loads here</p>
      </div>
    </div>
  );
}
