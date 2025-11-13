import { GlassCard } from '../components/GlassCard';
import { AdSpace } from '../components/AdSpace';
import { Book, Code, Terminal, Settings, Package, Coffee, FileText, Layers } from 'lucide-react';

export function Documentation() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Pylight IDE
          </p>
        </div>

        {/* Ad Space 1 - After Header */}
        <AdSpace className="mb-12" id="ad-docs-top" />

        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="hover:scale-105 transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex-shrink-0">
                <Book className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Getting Started</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    Installation guide
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    First project setup
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    Basic navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    Keyboard shortcuts
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="hover:scale-105 transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex-shrink-0">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Code Editor Features</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Syntax highlighting
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Code completion
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Error detection
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Code formatting
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="hover:scale-105 transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 flex-shrink-0">
                <Terminal className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Integrated Terminal</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Terminal usage
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Command execution
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Environment management
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Custom commands
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="hover:scale-105 transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 flex-shrink-0">
                <Settings className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Configuration</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                    Settings customization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                    Theme selection
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                    Extension management
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                    Workspace setup
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Ad Space 2 - After Grid */}
        <AdSpace className="mt-12 mb-12" id="ad-docs-middle" />

        <div className="mt-12">
          <GlassCard>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 flex-shrink-0">
                <Package className="w-8 h-8 text-orange-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-3">Package Management</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Learn how to manage Python packages and virtual environments within Pylight IDE.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Layers className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-white font-semibold">Virtual Environments</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Creating virtual environments
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Activating environments
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Managing dependencies
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-purple-400" />
                      <h3 className="text-white font-semibold">Package Installation</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Using pip within IDE
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Requirements.txt management
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                        Package version control
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Ad Space 3 - Before Help Section */}
        <AdSpace className="mt-12 mb-12" id="ad-docs-bottom" />

        <div className="mt-12">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30">
                <Coffee className="w-12 h-12 text-pink-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Need Help?</h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Join our community for support and discussions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://github.com/algoscienceacademy/Pylight-IDE/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-white hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300">
                Community Forum
              </a>
              <a href="https://github.com/algoscienceacademy/Pylight-IDE/issues" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                GitHub Issues
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}