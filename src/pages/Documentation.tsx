import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Book, Code, Terminal, Settings, Package, Coffee } from 'lucide-react';

export function Documentation() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about Pylight IDE
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard>
            <div className="flex items-start space-x-4">
              <Book className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Getting Started</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Installation guide</li>
                  <li>• First project setup</li>
                  <li>• Basic navigation</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start space-x-4">
              <Code className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Code Editor Features</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Syntax highlighting</li>
                  <li>• Code completion</li>
                  <li>• Error detection</li>
                  <li>• Code formatting</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start space-x-4">
              <Terminal className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Integrated Terminal</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Terminal usage</li>
                  <li>• Command execution</li>
                  <li>• Environment management</li>
                  <li>• Custom commands</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start space-x-4">
              <Settings className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Configuration</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Settings customization</li>
                  <li>• Theme selection</li>
                  <li>• Extension management</li>
                  <li>• Workspace setup</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-12">
          <GlassCard>
            <div className="flex items-start space-x-4">
              <Package className="w-8 h-8 text-orange-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Package Management</h2>
                <p className="text-gray-300 mb-4">
                  Learn how to manage Python packages and virtual environments within Pylight IDE.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Virtual Environments</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Creating virtual environments</li>
                      <li>• Activating environments</li>
                      <li>• Managing dependencies</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Package Installation</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Using pip within IDE</li>
                      <li>• Requirements.txt management</li>
                      <li>• Package version control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-12 text-center">
          <GlassCard>
            <Coffee className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
            <p className="text-gray-300 mb-4">
              Join our community for support and discussions
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                Community Forum
              </a>
              <a href="#" className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                GitHub Issues
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}