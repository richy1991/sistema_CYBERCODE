import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';
import CommunityFeed from './components/CommunityFeed';
import Services from './components/Services';

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const handleLogin = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuth = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleGetStarted = () => {
    if (user) {
      setCurrentSection('community');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        user={user} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
      
      <main>
        {currentSection === 'home' && (
          <>
            <Hero onGetStarted={handleGetStarted} />
            <Services />
          </>
        )}
        
        {currentSection === 'community' && (
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Comunidad <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">CyberCode</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Conecta con desarrolladores y expertos en ciberseguridad. Comparte conocimientos, resuelve dudas y construye proyectos más seguros.
                </p>
              </motion.div>
              
              <CommunityFeed user={user} />
            </div>
          </section>
        )}
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={handleAuth}
      />

      {/* Navigation Buttons */}
      <motion.div
        className="fixed bottom-8 right-8 flex flex-col gap-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => setCurrentSection('home')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            currentSection === 'home'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-500'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Inicio
        </motion.button>
        
        <motion.button
          onClick={() => setCurrentSection('community')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            currentSection === 'community'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-500'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Comunidad
        </motion.button>
      </motion.div>
    </div>
  );
};

export default App;