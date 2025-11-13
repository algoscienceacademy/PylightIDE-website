import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">
        {/* Floating Glassmorphic Container with White Blur */}
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-white/10 hover:bg-white/15 transition-all duration-300">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          {/* Main Content */}
          <div className="relative">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                  <Sparkles className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all">
                    Pylight IDE
                  </span>
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  <Link to="/" 
                    className={`${
                      isActive('/') 
                        ? 'bg-white/20 text-white border-white/40' 
                        : 'text-gray-200 hover:text-white border-transparent hover:border-white/30 hover:bg-white/10'
                    } px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border backdrop-blur-sm`}>
                    Home
                  </Link>
                  <Link to="/download"
                    className={`${
                      isActive('/download') 
                        ? 'bg-white/20 text-white border-white/40' 
                        : 'text-gray-200 hover:text-white border-transparent hover:border-white/30 hover:bg-white/10'
                    } px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border backdrop-blur-sm`}>
                    Download
                  </Link>
                  <Link to="/docs"
                    className={`${
                      isActive('/docs') 
                        ? 'bg-white/20 text-white border-white/40' 
                        : 'text-gray-200 hover:text-white border-transparent hover:border-white/30 hover:bg-white/10'
                    } px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border backdrop-blur-sm`}>
                    Documentation
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link to="/"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/') 
                    ? 'bg-white/20 text-white border-l-4 border-cyan-400' 
                    : 'text-gray-200 border-l-4 border-transparent hover:border-white/40 hover:bg-white/10'
                } block px-4 py-3 rounded-lg text-base font-medium transition-all`}>
                Home
              </Link>
              <Link to="/download"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/download') 
                    ? 'bg-white/20 text-white border-l-4 border-cyan-400' 
                    : 'text-gray-200 border-l-4 border-transparent hover:border-white/40 hover:bg-white/10'
                } block px-4 py-3 rounded-lg text-base font-medium transition-all`}>
                Download
              </Link>
              <Link to="/docs"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/docs') 
                    ? 'bg-white/20 text-white border-l-4 border-cyan-400' 
                    : 'text-gray-200 border-l-4 border-transparent hover:border-white/40 hover:bg-white/10'
                } block px-4 py-3 rounded-lg text-base font-medium transition-all`}>
                Documentation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}