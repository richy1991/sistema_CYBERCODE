import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, User, LogOut, Settings, Bell } from 'lucide-react';

const Header = ({ user = null, onLogin = () => {}, onLogout = () => {}, onNavigate = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.header
      className="bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 border-b border-purple-500/30 sticky top-0 z-50 backdrop-blur-xl shadow-3d"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Hacker */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(0, 217, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Left Chevrons < > */}
                <g filter="url(#glow)">
                  {/* Outer chevron < */}
                  <path d="M 15 25 L 35 50 L 15 75" stroke="#00D9FF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Inner chevron < */}
                  <path d="M 28 35 L 40 50 L 28 65" stroke="#00D9FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                </g>
                
                {/* Right Chevrons > < */}
                <g filter="url(#glow)">
                  {/* Outer chevron > */}
                  <path d="M 85 25 L 65 50 L 85 75" stroke="#00D9FF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Inner chevron > */}
                  <path d="M 72 35 L 60 50 L 72 65" stroke="#00D9FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                </g>
                
                {/* Center node/dot */}
                <circle cx="50" cy="50" r="2" fill="#00D9FF" filter="url(#glow)"/>
              </svg>
            </motion.div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
                CyberCode
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['home', 'community', 'services', 'about'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => onNavigate(item)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-white border border-purple-500/30 backdrop-blur-sm shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <img
                      src={user.avatar || '/api/placeholder/32/32'}
                      alt={user.nickname || user.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-cyan-400/50"
                    />
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <span className="hidden sm:block font-medium text-xs lg:text-sm">@{user.nickname || user.name}</span>
                  <motion.div
                    className="p-1 sm:p-1.5 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg hidden sm:block"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                </motion.button>

                {isProfileOpen && (
                  <motion.div
                    className="absolute right-0 mt-3 w-52 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700/50 py-2 backdrop-blur-xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    style={{ zIndex: 100 }}
                  >
                    <button
                      onClick={() => { onNavigate('profile'); setIsProfileOpen(false); }}
                      className="flex items-center gap-3 px-5 py-3 text-gray-300 hover:bg-slate-700/50 w-full text-left rounded-lg mx-2 transition-all"
                    >
                      <User className="w-4 h-4" />
                      <span>Mi Perfil</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('settings'); setIsProfileOpen(false); }}
                      className="flex items-center gap-3 px-5 py-3 text-gray-300 hover:bg-slate-700/50 w-full text-left rounded-lg mx-2 transition-all"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Configuración</span>
                    </button>
                    <hr className="my-2 border-gray-700/50" />
                    <button
                      onClick={() => { onLogout(); setIsProfileOpen(false); }}
                      className="flex items-center gap-3 px-5 py-3 text-red-400 hover:bg-red-900/30 w-full text-left rounded-lg mx-2 transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.button
                onClick={onLogin}
                className="px-3 py-1.5 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm lg:text-base hover:shadow-2xl transition-all btn-3d"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(103, 232, 249, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden xs:inline">Iniciar Sesión</span>
                <span className="xs:hidden">Login</span>
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 sm:p-3 text-gray-300 hover:text-white bg-gray-800/50 rounded-lg sm:rounded-xl"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-3 sm:py-4 border-t border-purple-500/30 bg-slate-900/50 backdrop-blur-lg rounded-b-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-2 px-2">
              {['home', 'community', 'services', 'about'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    onNavigate(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl hover:bg-slate-800/50 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}

              
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;