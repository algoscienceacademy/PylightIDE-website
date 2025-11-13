import { useEffect, useRef } from 'react';

interface AdSpaceProps {
  className?: string;
  id?: string;
}

export function AdSpace({ className = '', id }: AdSpaceProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!scriptLoadedRef.current && adContainerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl28042512.effectivegatecpm.com/1a/49/f9/1a49f998028aaa88abc647f4e4c149db.js';
      script.async = true;
      
      // Add script to the ad container
      adContainerRef.current.appendChild(script);
      scriptLoadedRef.current = true;

      script.onerror = () => {
        console.error('Ad script failed to load');
      };
    }
  }, []);

  return (
    <div 
      id={id}
      className={`relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-4 min-h-[100px] w-full ${className}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Ad injection container - script will insert content here */}
      <div 
        ref={adContainerRef}
        className="w-full min-h-[90px]"
        style={{ display: 'block', position: 'relative' }}
      />
    </div>
  );
}
