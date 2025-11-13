import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Heart, Code2, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pylight IDE
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                A modern, lightweight Python IDE designed to empower developers with intelligent tools and seamless workflow.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/algoscienceacademy/Pylight-IDE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Twitter
                  </span>
                </a>
                <a 
                  href="mailto:contact@pylightide.com"
                  className="group relative p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Email
                  </span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Download
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Documentation
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/algoscienceacademy/Pylight-IDE/releases" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Releases
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/algoscienceacademy/Pylight-IDE/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Report Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" /> by AlgoScience Academy
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Pylight IDE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
}
