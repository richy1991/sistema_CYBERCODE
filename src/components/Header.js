import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, User, LogOut, Settings, Bell } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Header = ({ user = null, onLogin = () => {}, onLogout = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/richard-nina-melendres', color: 'text-blue-600' },
    { icon: FaTwitter, url: 'https://twitter.com/richardnina', color: 'text-sky-500' },
    { icon: FaGithub, url: 'https://github.com/richardnina', color: 'text-gray-800' },
    { icon: FaInstagram, url: 'https://instagram.com/richardnina', color: 'text-pink-600' }
  ];

  return (
    <motion.header 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 sticky top-0 z-50 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CyberCode
              </h1>
              <p className="text-xs text-gray-400">by Richard Nina Melendres</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Inicio
            </a>
            <a href="#community" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Comunidad
            </a>
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Servicios
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Acerca de
            </a>
          </nav>

          {/* Social Links & Auth */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Auth Section */}
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={user.avatar || '/api/placeholder/32/32'} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:block font-medium">{user.name}</span>
                  <Bell className="w-4 h-4" />
                </motion.button>

                {isProfileOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <a href="#profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <User className="w-4 h-4" />
                      Mi Perfil
                    </a>
                    <a href="#settings" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4" />
                      Configuración
                    </a>
                    <hr className="my-2" />
                    <button 
                      onClick={onLogout}
                      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Cerrar Sesión
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.button
                onClick={onLogin}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Sesión
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-purple-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Inicio
              </a>
              <a href="#community" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Comunidad
              </a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Servicios
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Acerca de
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-500/20">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-white/10 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;