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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        
        {/* Floating Security Icons */}
        {securityIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/20"
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

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Ciberseguridad & Desarrollo</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
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
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Únete a la comunidad de desarrolladores y expertos en ciberseguridad más activa. 
                Obtén asesorías personalizadas de <span className="text-cyan-400 font-semibold">Richard Nina Melendres</span> 
                y conecta con profesionales que comparten tu pasión por el código seguro.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Servicios
                </motion.button>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Dashboard Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Dashboard Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">cybercode.dev</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="text-white font-medium">Sistema Seguro</p>
                          <p className="text-green-400 text-sm">Vulnerabilidades: 0</p>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold text-2xl">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                      <div className="flex items-center gap-3">
                        <Code className="w-6 h-6 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">Código Limpio</p>
                          <p className="text-blue-400 text-sm">Calidad: 98%</p>
                        </div>
                      </div>
                      <div className="text-blue-400 font-bold text-2xl">98%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Comunidad Activa</p>
                          <p className="text-purple-400 text-sm">1,247 miembros</p>
                        </div>
                      </div>
                      <div className="text-purple-400 font-bold text-2xl">1.2K</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center"
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
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center"
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
                  <Lock className="w-8 h-8 text-white" />
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