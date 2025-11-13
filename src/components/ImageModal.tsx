import { X, ZoomIn } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, title, description }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
      
      {/* Modal Content */}
      <div 
        className="relative z-10 max-w-7xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 backdrop-blur-xl bg-white/10 rounded-t-2xl p-4 border border-white/20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-b-2xl border border-white/20 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
          
          {/* Zoom indicator */}
          <div className="absolute top-4 right-4 backdrop-blur-xl bg-black/50 px-3 py-2 rounded-lg flex items-center space-x-2 text-white">
            <ZoomIn size={16} />
            <span className="text-sm">Click outside to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
