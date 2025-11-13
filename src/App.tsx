import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DownloadPage } from './pages/Download';
import { Documentation } from './pages/Documentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;