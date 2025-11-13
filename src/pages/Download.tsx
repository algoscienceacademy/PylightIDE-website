import { useEffect, useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { AdSpace } from '../components/AdSpace';
import { Download as DownloadIcon, Apple, Monitor, MonitorDown, CheckCircle } from 'lucide-react';

export function DownloadPage() {
  const [os, setOs] = useState<'Windows' | 'MacOS' | 'Linux' | null>(null);

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    if (platform.includes('win')) {
      setOs('Windows');
    } else if (platform.includes('mac')) {
      setOs('MacOS');
    } else if (platform.includes('linux')) {
      setOs('Linux');
    }
  }, []);

  const handleDownload = () => {
    window.location.href = 'https://github.com/algoscienceacademy/Pylight-IDE/releases/tag/Pylight-IDE';
  };

  const getOsIcon = () => {
    switch (os) {
      case 'Windows':
        return <Monitor className="w-20 h-20 text-blue-400" />;
      case 'MacOS':
        return <Apple className="w-20 h-20 text-gray-300" />;
      case 'Linux':
        return <MonitorDown className="w-20 h-20 text-orange-400" />;
      default:
        return <DownloadIcon className="w-20 h-20 text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Download Pylight IDE
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with Pylight IDE on your preferred platform
          </p>
        </div>

        {/* Main Download Card */}
        <GlassCard className="max-w-3xl mx-auto text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30">
              {getOsIcon()}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            {os ? `Pylight IDE for ${os}` : 'Choose Your Platform'}
          </h2>
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Latest Version
            <span className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></span>
          </button>
          <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Free and open source • No registration required</span>
          </div>
        </GlassCard>

        {/* Ad Space 1 - After Main Download */}
        <AdSpace className="mb-12" id="ad-download-top" />

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                <Monitor className="w-12 h-12 text-blue-400 mx-auto" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Windows</h3>
            <p className="text-gray-400 mb-3">Windows 10 or later</p>
            <div className="text-sm text-gray-500">
              <p>• 64-bit processor</p>
              <p>• 4GB RAM minimum</p>
            </div>
          </GlassCard>

          <GlassCard className="text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-gray-400/30">
                <Apple className="w-12 h-12 text-gray-300 mx-auto" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">MacOS</h3>
            <p className="text-gray-400 mb-3">MacOS 10.15 or later</p>
            <div className="text-sm text-gray-500">
              <p>• Intel or Apple Silicon</p>
              <p>• 4GB RAM minimum</p>
            </div>
          </GlassCard>

          <GlassCard className="text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30">
                <MonitorDown className="w-12 h-12 text-orange-400 mx-auto" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Linux</h3>
            <p className="text-gray-400 mb-3">Major distributions</p>
            <div className="text-sm text-gray-500">
              <p>• Ubuntu, Fedora, Debian</p>
              <p>• 4GB RAM minimum</p>
            </div>
          </GlassCard>
        </div>

        {/* Ad Space 2 - After Platform Cards */}
        <AdSpace className="mb-12" id="ad-download-middle" />

        {/* Features List */}
        <GlassCard className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Smart code completion',
              'Syntax highlighting',
              'Integrated terminal',
              'Python debugger',
              'Package manager',
              'Git integration',
              'Multiple themes',
              'Extension support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}