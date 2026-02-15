import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Code, 
  Search, 
  Users, 
  Zap, 
  Lock, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  const [isConsultingModal, setIsConsultingModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const services = [
    {
      icon: Shield,
      title: 'Auditoría de Seguridad',
      description: 'Evaluación completa de vulnerabilidades en tu aplicación web e infraestructura con análisis profundo.',
      features: [
        'Análisis avanzado de código',
        'Pruebas de penetración exhaustivas',
        'Evaluación de configuraciones',
        'Reportes ejecutivos detallados'
      ],
      color: 'from-red-500 via-pink-500 to-rose-500',
      iconBg: 'from-red-600/20 to-pink-600/20',
      borderColor: 'border-red-500/30',
      buttonGradient: 'from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700',
      popular: false,
      accentColor: 'text-red-600'
    },
    {
      icon: Code,
      title: 'Desarrollo Seguro',
      description: 'Desarrollo de aplicaciones web con seguridad integrada desde el inicio del proyecto.',
      features: [
        'Arquitectura segura y escalable',
        'Autenticación y autorización avanzadas',
        'Cifrado de datos end-to-end',
        'Monitoreo y logging en tiempo real'
      ],
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      iconBg: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30',
      buttonGradient: 'from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700',
      popular: true,
      accentColor: 'text-blue-600'
    },
    {
      icon: Search,
      title: 'Consultoría Especializada',
      description: 'Asesoramiento personalizado de expertos para implementar soluciones de seguridad.',
      features: [
        'Sesiones estratégicas 1:1',
        'Planes de seguridad customizados',
        'Revisión integral de código',
        'Soporte técnico prioritario'
      ],
      color: 'from-purple-500 via-indigo-500 to-violet-500',
      iconBg: 'from-purple-600/20 to-indigo-600/20',
      borderColor: 'border-purple-500/30',
      buttonGradient: 'from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700',
      popular: false,
      accentColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Capacitación Empresarial',
      description: 'Programas de capacitación avanzados en ciberseguridad para equipos técnicos.',
      features: [
        'Workshops interactivos prácticos',
        'Materiales educativos premium',
        'Certificación profesional',
        'Seguimiento y mentoring post-programa'
      ],
      color: 'from-green-500 via-emerald-500 to-teal-500',
      iconBg: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/30',
      buttonGradient: 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
      popular: false,
      accentColor: 'text-green-600'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'CTO en TechStart',
      content: 'Richard transformó completamente la seguridad de nuestra aplicación. Su expertise es invaluable.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Lead Developer',
      content: 'La auditoría de seguridad reveló vulnerabilidades críticas que no habíamos detectado. Excelente trabajo.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Ana Martínez',
      role: 'Product Manager',
      content: 'El desarrollo de nuestra plataforma con enfoque en seguridad superó todas nuestras expectativas.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  const successCases = [
    {
      number: '01',
      title: 'Plataforma FinTech Segura',
      description: 'Redujimos vulnerabilidades en 95% e implementamos encriptación end-to-end.',
      result: 'Certificación ISO 27001 en 3 meses',
      icon: '🏦',
      company: 'FinTech Pro'
    },
    {
      number: '02',
      title: 'API REST Hardened',
      description: 'Implementamos autenticación OAuth2 y rate limiting avanzado.',
      result: 'Cero brechas de seguridad en 18 meses',
      icon: '🔐',
      company: 'CloudData Solutions'
    },
    {
      number: '03',
      title: 'Aplicación Móvil Blindada',
      description: 'Jailbreak detection, encriptación local y protección contra malware.',
      result: '100,000+ usuarios sin compromisos',
      icon: '📱',
      company: 'SecureApp Inc'
    },
    {
      number: '04',
      title: 'E-Commerce Protegido',
      description: 'PCI-DSS compliance, prevención de fraude y análisis de riesgos.',
      result: '+40% en conversiones después de certificación',
      icon: '🛒',
      company: 'Digital Marketplace'
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteRequest = (service) => {
    setSelectedService(service);
    setIsConsultingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simular envío
    alert(`¡Gracias ${formData.name}! Tu consulta ha sido recibida. Nos contactaremos en 24 horas.`);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setIsConsultingModal(false);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full border border-cyan-500/50 mb-4 sm:mb-6 lg:mb-8 backdrop-blur-sm hover:border-cyan-500 transition-all"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm lg:text-base bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Servicios Profesionales
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight px-4">
            <span className="block text-white mb-2 sm:mb-4">Transforma la Seguridad</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              de tu Negocio Digital
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Soluciones integrales de ciberseguridad diseñadas para proteger tu infraestructura y la confianza de tus usuarios.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 
                bg-gradient-to-br from-slate-900/80 to-slate-800/80 
                border ${service.borderColor} border-opacity-50 
                hover:border-opacity-100
                backdrop-blur-xl
                shadow-2xl hover:shadow-2xl`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ 
                y: -20,
                boxShadow: `0 30px 60px rgba(0,0,0,0.4)`
              }}
              style={{
                perspective: '1000px'
              }}
            >
              {/* Popular Badge with Enhanced Styling */}
              {service.popular && (
                <motion.div
                  className="absolute -top-3 sm:-top-4 lg:-top-5 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white text-[10px] sm:text-xs lg:text-sm font-black rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  style={{ 
                    boxShadow: '0 0 20px rgba(251,146,60,0.8), 0 0 40px rgba(251,146,60,0.5)'
                  }}
                >
                  ⭐ MÁS POPULAR
                </motion.div>
              )}

              {/* 3D Floating Background Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

              {/* Service Icon with 3D Effect */}
              <motion.div
                className={`relative inline-flex p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.iconBg} mb-4 sm:mb-6 lg:mb-8
                  border border-opacity-50 group-hover:border-opacity-100 transition-all ${service.borderColor}`}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 8,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${service.accentColor}`} />
              </motion.div>

              {/* Service Content */}
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-slate-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed font-medium text-xs sm:text-sm lg:text-base">
                {service.description}
              </p>

              {/* Features List with Enhanced Styling */}
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-5 sm:mb-8 lg:mb-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-2 sm:gap-3 lg:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${service.accentColor} flex-shrink-0 mt-0.5 sm:mt-1 drop-shadow-lg`} />
                    <span className="text-slate-200 font-semibold text-xs sm:text-sm lg:text-base xl:text-lg group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button with Enhanced Styling */}
              <motion.button
                onClick={() => handleQuoteRequest(service.title)}
                className={`w-full py-2 sm:py-3 lg:py-4 bg-gradient-to-r ${service.buttonGradient} text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm lg:text-base xl:text-lg
                  shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2
                  relative overflow-hidden group/btn`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Solicitar Cotización</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" 
                style={{ background: `linear-gradient(135deg, var(--color), transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 xl:p-16 shadow-2xl border border-purple-500/30 backdrop-blur-xl
          bg-gradient-to-br from-slate-900/80 to-slate-800/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6 px-4">
              Lo que dicen <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">nuestros clientes</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 px-4">
              Testimonios reales de empresas que transformaron su seguridad digital
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 
                hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 text-center
                hover:shadow-xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6 border-2 border-cyan-500/50"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(34,211,238,0.6)' }}
                />
                
                <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 lg:mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: starIndex * 0.1, duration: 0.6, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-slate-200 italic mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm font-semibold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-10 sm:mt-16 lg:mt-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6 lg:mb-8">
            ¿Listo para asegurar <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">tu proyecto?</span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Contacta con nuestro equipo de expertos para una consulta estratégica y descubre cómo podemos proteger tu negocio digital de amenazas modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.button
              onClick={() => setIsConsultingModal(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg
              shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3
              hover:shadow-purple-500/50 relative overflow-hidden group"
              whileHover={{ scale: 1.08, boxShadow: '0 20px 50px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Consulta Estratégica</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => setIsSuccessModal(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 border-2 border-cyan-500 text-cyan-400 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg
              hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Ver Casos de Éxito</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20"
                animate={{ position: ['left', 'right'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Consulting Modal */}
      <AnimatePresence>
        {isConsultingModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsConsultingModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-cyan-500/50 w-full max-w-2xl p-6 sm:p-8 lg:p-12 shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del Modal */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
                  Consulta <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Estratégica</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg">Cuéntanos sobre tu proyecto y recibiremos una propuesta personalizada</p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/50 border border-slate-600/50 focus:border-cyan-500 rounded-2xl text-white placeholder-slate-400 outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/50 border border-slate-600/50 focus:border-cyan-500 rounded-2xl text-white placeholder-slate-400 outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.input
                  type="text"
                  name="company"
                  placeholder="Tu empresa"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/50 border border-slate-600/50 focus:border-cyan-500 rounded-2xl text-white placeholder-slate-400 outline-none transition-all"
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/50 border border-slate-600/50 focus:border-cyan-500 rounded-2xl text-white placeholder-slate-400 outline-none transition-all"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="audit">Auditoría de Seguridad</option>
                  <option value="development">Desarrollo Seguro</option>
                  <option value="consulting">Consultoría Especializada</option>
                  <option value="training">Capacitación Empresarial</option>
                </motion.select>

                <motion.textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="5"
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/50 border border-slate-600/50 focus:border-cyan-500 rounded-2xl text-white placeholder-slate-400 outline-none transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                />

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.button
                    type="submit"
                    className="flex-1 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar Consulta
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsConsultingModal(false)}
                    className="flex-1 py-3 sm:py-4 border-2 border-slate-600 text-slate-300 rounded-2xl font-bold text-base sm:text-lg hover:border-slate-500 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancelar
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Cases Modal */}
      <AnimatePresence>
        {isSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSuccessModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-cyan-500/50 w-full max-w-4xl p-6 sm:p-8 lg:p-12 shadow-2xl my-8"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-10 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  Casos de <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Éxito</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg">Proyectos reales donde hemos transformado la seguridad digital</p>
              </div>

              {/* Grid de Casos */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {successCases.map((caseItem, index) => (
                  <motion.div
                    key={index}
                    className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-cyan-500/30 hover:border-cyan-500/80 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(6,182,212,0.2)' }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl sm:text-5xl">{caseItem.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{caseItem.title}</h3>
                        <p className="text-cyan-400 text-sm font-semibold">{caseItem.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{caseItem.description}</p>
                    <motion.div
                      className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-cyan-300 font-bold">Resultado:</p>
                      <p className="text-white">{caseItem.result}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Botón de Cierre */}
              <motion.button
                onClick={() => setIsSuccessModal(false)}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;