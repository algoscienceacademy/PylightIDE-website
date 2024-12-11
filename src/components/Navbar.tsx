import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Pylight IDE</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" 
                className={`${isActive('/') ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Home
              </Link>
              <Link to="/download"
                className={`${isActive('/download') ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Download
              </Link>
              <Link to="/docs"
                className={`${isActive('/docs') ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Documentation
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-lg bg-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/"
              className={`${isActive('/') ? 'text-white bg-white/20' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
              Home
            </Link>
            <Link to="/download"
              className={`${isActive('/download') ? 'text-white bg-white/20' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
              Download
            </Link>
            <Link to="/docs"
              className={`${isActive('/docs') ? 'text-white bg-white/20' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
              Documentation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}