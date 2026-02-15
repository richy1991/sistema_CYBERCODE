import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Users, Zap, ArrowRight, Lock, Bug, Globe } from 'lucide-react';

const Hero = ({ onGetStarted = () => {} }) => {
  const features = [
    { icon: Shield, text: 'Consultoría en Ciberseguridad', color: 'from-red-500 to-pink-500' },
    { icon: Code, text: 'Desarrollo Web Seguro', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, text: 'Comunidad de Expertos', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, text: 'Respuestas Rápidas', color: 'from-yellow-500 to-orange-500' }
  ];

  const securityIcons = [
    { icon: Lock, delay: 0.2 },
    { icon: Shield, delay: 0.4 },
    { icon: Bug, delay: 0.6 },
    { icon: Globe, delay: 0.8 }
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        
        {/* Floating Security Icons - Hidden on mobile for cleaner look */}
        {securityIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/20 hidden md:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [-20, -100, -20],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`
            }}
          >
            <item.icon className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium text-xs sm:text-sm">Ciberseguridad & Desarrollo</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Protege tu
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Código
                </span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Únete a la comunidad de desarrolladores y expertos en ciberseguridad más activa. 
                Obtén <span className="text-cyan-400 font-semibold">asesorías personalizadas</span> de nuestros expertos 
                y conecta con profesionales que comparten tu pasión por el código seguro.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={onGetStarted}
                  className="px-5 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comenzar Ahora
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                <motion.button
                  className="px-5 py-2.5 sm:px-8 sm:py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-cyan-400/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Servicios
                </motion.button>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 px-4 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${feature.color} flex-shrink-0`}>
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Dashboard Preview */}
            <motion.div
              className="relative mt-8 lg:mt-0 px-4 sm:px-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Dashboard Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20"
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4">cybercode.dev</span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg sm:rounded-xl border border-green-500/30">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm lg:text-base">Sistema Seguro</p>
                          <p className="text-green-400 text-xs sm:text-sm">Vulnerabilidades: 0</p>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold text-lg sm:text-2xl">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl border border-blue-500/30">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm lg:text-base">Código Limpio</p>
                          <p className="text-blue-400 text-xs sm:text-sm">Calidad: 98%</p>
                        </div>
                      </div>
                      <div className="text-blue-400 font-bold text-lg sm:text-2xl">98%</div>
                    </div>

                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl border border-purple-500/30">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm lg:text-base">Comunidad Activa</p>
                          <p className="text-purple-400 text-xs sm:text-sm">1,247 miembros</p>
                        </div>
                      </div>
                      <div className="text-purple-400 font-bold text-lg sm:text-2xl">1.2K</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements - Adjusted for mobile */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;