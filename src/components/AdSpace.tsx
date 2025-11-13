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
      // Add ad configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : 'f025fc691c0b4b03bd84e485bb1122c2',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `;
      adContainerRef.current.appendChild(configScript);

      // Add ad invocation script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/f025fc691c0b4b03bd84e485bb1122c2/invoke.js';
      adContainerRef.current.appendChild(invokeScript);

      scriptLoadedRef.current = true;

      invokeScript.onerror = () => {
        console.error('Ad script failed to load');
      };
    }
  }, []);

  return (
    <div 
      id={id}
      className={`relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-4 min-h-[320px] w-full flex items-center justify-center ${className}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Ad injection container - script will insert content here */}
      <div 
        ref={adContainerRef}
        className="w-full min-h-[300px] flex items-center justify-center"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      />
    </div>
  );
}
