import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';
import CommunityFeed from './components/CommunityFeed';
import Services from './components/Services';
import About from './components/About';
import AdminPanel from './components/AdminPanel';
import ContactSection from './components/ContactSection';
import { FaWhatsapp } from 'react-icons/fa';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  // Check for token on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const verifyToken = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${storedToken}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setToken(storedToken);
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error("Error verifying token", error);
          localStorage.removeItem('token');
        }
      };
      verifyToken();
    }
  }, []);

  const handleLogin = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuth = (authData) => {
    const { token, user } = authData;
    localStorage.setItem('token', token);
    setToken(token);
    setUser(user);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setCurrentSection('home');
  };

  const handleGetStarted = () => {
    if (user) {
      setCurrentSection('community');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID_HERE'}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <Header
            user={user}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onNavigate={setCurrentSection}
          />

          <main>
            {currentSection === 'home' && (
              <>
                <Hero onGetStarted={handleGetStarted} />
                <Services />
                <ContactSection />
              </>
            )}

            {currentSection === 'community' && (
              <section className="min-h-screen bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80 py-12 sm:py-20 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                  <motion.div
                    className="text-center mb-8 sm:mb-12 glass-effect shadow-3d rounded-3xl p-6 sm:p-8 border border-gray-700/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-animate">
                      Comunidad <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">CyberCode</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                      Conecta con desarrolladores y expertos en ciberseguridad. Comparte conocimientos, resuelve dudas y construye proyectos más seguros.
                    </p>
                  </motion.div>

                  <CommunityFeed user={user} token={token} />
                </div>
              </section>
            )}

            {currentSection === 'services' && (
              <>
                <Services />
                <ContactSection />
              </>
            )}

            {currentSection === 'about' && <About />}

            {currentSection === 'admin' && user && <AdminPanel user={user} />}
          </main>

          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            onAuth={handleAuth}
          />

          <motion.a
            href="https://wa.me/59172840630"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl hover:shadow-2xl"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <footer className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm border-t border-gray-800/50 px-4 md:px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="glass-effect p-5 sm:p-6 rounded-2xl border border-gray-700/50">
                  <h3 className="text-cyan-400 font-bold mb-3 text-lg sm:text-xl">CyberCode</h3>
                  <p className="text-gray-400 text-sm">Soluciones de ciberseguridad para desarrolladores y empresas modernas.</p>
                </div>
                <div className="glass-effect p-5 sm:p-6 rounded-2xl border border-gray-700/50">
                  <h4 className="text-gray-200 font-semibold mb-3 text-sm sm:text-base">Enlaces</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                    <li><button onClick={() => setCurrentSection('home')} className="hover:text-cyan-400 transition-colors block w-full text-left">Inicio</button></li>
                    <li><button onClick={() => setCurrentSection('services')} className="hover:text-cyan-400 transition-colors block w-full text-left">Servicios</button></li>
                    <li><button onClick={() => setCurrentSection('about')} className="hover:text-cyan-400 transition-colors block w-full text-left">Acerca de</button></li>
                    <li><button onClick={() => setCurrentSection('community')} className="hover:text-cyan-400 transition-colors block w-full text-left">Comunidad</button></li>
                  </ul>
                </div>
                <div className="glass-effect p-5 sm:p-6 rounded-2xl border border-gray-700/50">
                  <h4 className="text-gray-200 font-semibold mb-3 text-sm sm:text-base">Legal</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                    <li><a href="#" className="hover:text-cyan-400 transition-colors block">Política de Privacidad</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors block">Términos de Servicio</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors block">Contacto</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800/50 pt-6 text-center text-gray-500 text-sm">
                <p>© 2026 CyberCode. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;