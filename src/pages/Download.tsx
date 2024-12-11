import React, { useEffect, useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Download as DownloadIcon, Apple, Monitor, MonitorDown } from 'lucide-react';

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
        return <Monitor className="w-16 h-16 text-blue-400" />;
      case 'MacOS':
        return <Apple className="w-16 h-16 text-gray-300" />;
      case 'Linux':
        return <MonitorDown className="w-16 h-16 text-orange-400" />;
      default:
        return <DownloadIcon className="w-16 h-16 text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Download Pylight IDE
          </h1>
          <p className="text-xl text-gray-300">
            Get started with Pylight IDE on your preferred platform
          </p>
        </div>

        <GlassCard className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            {getOsIcon()}
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {os ? `Pylight IDE for ${os}` : 'Choose Your Platform'}
          </h2>
          <button
            onClick={handleDownload}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-300 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download Latest Version
          </button>
          <p className="mt-4 text-sm text-gray-300">
            Free and open source
          </p>
        </GlassCard>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <GlassCard className="text-center">
            <Monitor className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Windows</h3>
            <p className="text-gray-300 text-sm">Windows 10 or later</p>
          </GlassCard>

          <GlassCard className="text-center">
            <Apple className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">MacOS</h3>
            <p className="text-gray-300 text-sm">MacOS 10.15 or later</p>
          </GlassCard>

          <GlassCard className="text-center">
            <MonitorDown className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Linux</h3>
            <p className="text-gray-300 text-sm">Major distributions supported</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}