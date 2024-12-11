import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Code, Terminal, Zap } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Pylight IDE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern, lightweight Python IDE designed for both beginners and professionals
          </p>
          <Link
            to="/download"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-teal-300 to-green-200 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download Now
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Code Editor</h3>
            <p className="text-gray-300">
              Intelligent code completion, syntax highlighting, and real-time error detection
            </p>
          </GlassCard>

          <GlassCard>
            <Terminal className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Integrated Terminal</h3>
            <p className="text-gray-300">
              Built-in terminal for running commands and managing your development environment
            </p>
          </GlassCard>

          <GlassCard>
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">
              Optimized performance for smooth coding experience with minimal resource usage
            </p>
          </GlassCard>
        </div>

        <GlassCard className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Coding?</h2>
          <p className="text-gray-300 mb-6">
            Download Pylight IDE today and experience the future of Python development.
          </p>
          <Link
            to="/docs"
            className="inline-block px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            View Documentation
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}