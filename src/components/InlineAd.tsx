import { useEffect } from 'react';

interface InlineAdProps {
  className?: string;
}

export function InlineAd({ className = '' }: InlineAdProps) {
  useEffect(() => {
    // Reload ad script when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl28042512.effectivegatecpm.com/1a/49/f9/1a49f998028aaa88abc647f4e4c149db.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`my-8 ${className}`}>
      {/* Ad will render here via the script */}
    </div>
  );
}
