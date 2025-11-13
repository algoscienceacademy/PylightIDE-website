import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { AdSpace } from '../components/AdSpace';
import { ImageModal } from '../components/ImageModal';
import { Code, Terminal, Zap, Sparkles, Rocket, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface Screenshot {
  src: string;
  title: string;
  description: string;
  fullDescription: string;
  gradient: string;
}

export function Home() {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  const screenshots: Screenshot[] = [
    {
      src: '/pic1.png',
      title: 'Beautiful Splash Screen',
      description: 'Smooth startup with loading progress',
      fullDescription: 'Modern splash screen with animated loading bar and gradient effects. Shows version information and project branding with a sleek, professional design.',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      src: '/pic2.png',
      title: 'Smart Code Editor',
      description: 'Syntax highlighting and intelligent completion',
      fullDescription: 'Advanced code editor with syntax highlighting, real-time error detection, intelligent auto-completion, and multiple theme support. Features include line numbers, code folding, and bracket matching.',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      src: '/pic3.png',
      title: 'Integrated Terminal & Output',
      description: 'Real-time program execution and results',
      fullDescription: 'Built-in terminal and output console for running your Python code. See execution results immediately with color-coded output, error messages, and program status indicators.',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      src: '/pic4.png',
      title: 'Quick Start Welcome Screen',
      description: 'Easy project creation and management',
      fullDescription: 'Intuitive welcome screen for creating new projects, opening existing ones, or cloning repositories. Quick access to recent projects and helpful getting started guides.',
      gradient: 'from-pink-500/20 to-rose-500/20'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-xl bg-cyan-500/10 border border-cyan-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 text-sm font-medium">Version 1.0 Now Available</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Welcome to Pylight IDE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            A modern, lightweight Python IDE designed for both <span className="text-cyan-400 font-semibold">beginners</span> and <span className="text-purple-400 font-semibold">professionals</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/download"
              className="group relative inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Download Now
              <span className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></span>
            </Link>
            
            <Link
              to="/docs"
              className="inline-flex items-center px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              View Documentation
              <Code className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Ad Space 1 - After Hero */}
        <AdSpace className="mb-20" id="ad-home-top" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <GlassCard>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                <Code className="w-10 h-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 text-center">Smart Code Editor</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Intelligent code completion, syntax highlighting, and real-time error detection to boost your productivity
            </p>
          </GlassCard>

          <GlassCard>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                <Terminal className="w-10 h-10 text-purple-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 text-center">Integrated Terminal</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Built-in terminal for running commands and managing your development environment seamlessly
            </p>
          </GlassCard>

          <GlassCard>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
                <Zap className="w-10 h-10 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 text-center">Lightning Fast</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Optimized performance for smooth coding experience with minimal resource usage
            </p>
          </GlassCard>
        </div>

        {/* Ad Space 2 - After Features */}
        <AdSpace className="mb-20" id="ad-home-middle" />

        {/* CTA Section */}
        <GlassCard className="text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              See Pylight IDE in Action
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Explore the powerful features and beautiful interface of Pylight IDE
            </p>
          </div>
        </GlassCard>

        {/* Screenshots Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 mr-3 text-cyan-400" />
              Interface Preview
            </h2>
            <p className="text-gray-400">Click any image to view in full size with details</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {screenshots.map((screenshot, index) => (
              <GlassCard 
                key={index}
                className="overflow-hidden p-0 cursor-pointer group hover:scale-[1.02] transition-all duration-500"
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className="relative">
                  {/* Image with enhanced size */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={screenshot.src} 
                      alt={screenshot.title} 
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {/* View Full Size Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl px-6 py-3 flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Maximize2 className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-semibold">View Full Size</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className={`p-6 bg-gradient-to-br ${screenshot.gradient} backdrop-blur-sm`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{screenshot.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{screenshot.description}</p>
                    <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                      <span>Click to enlarge</span>
                      <Maximize2 className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            imageSrc={selectedImage.src}
            title={selectedImage.title}
            description={selectedImage.fullDescription}
          />
        )}

        {/* Ad Space 3 - After Screenshots */}
        <AdSpace className="mb-20" id="ad-home-gallery" />

        {/* Final CTA */}
        <GlassCard className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ready to Start Coding?
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Download Pylight IDE today and experience the future of Python development with our cutting-edge features and intuitive interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-white hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                Get Started Free
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}