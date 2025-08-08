import React from 'react';
import { motion } from 'framer-motion';
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
  const services = [
    {
      icon: Shield,
      title: 'Auditoría de Seguridad',
      description: 'Evaluación completa de vulnerabilidades en tu aplicación web y infraestructura.',
      features: [
        'Análisis de código fuente',
        'Pruebas de penetración',
        'Evaluación de configuraciones',
        'Reporte detallado con soluciones'
      ],
      price: 'Desde $500',
      color: 'from-red-500 to-pink-500',
      popular: false
    },
    {
      icon: Code,
      title: 'Desarrollo Seguro',
      description: 'Desarrollo de aplicaciones web con las mejores prácticas de seguridad desde el inicio.',
      features: [
        'Arquitectura segura',
        'Implementación de autenticación',
        'Cifrado de datos',
        'Monitoreo y logging'
      ],
      price: 'Desde $1,200',
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      icon: Search,
      title: 'Consultoría Especializada',
      description: 'Asesoramiento personalizado para implementar medidas de seguridad en tu proyecto.',
      features: [
        'Sesiones 1:1 con Richard',
        'Plan de seguridad personalizado',
        'Revisión de código',
        'Soporte continuo'
      ],
      price: 'Desde $150/hora',
      color: 'from-purple-500 to-indigo-500',
      popular: false
    },
    {
      icon: Users,
      title: 'Capacitación de Equipos',
      description: 'Entrenamiento en ciberseguridad para desarrolladores y equipos técnicos.',
      features: [
        'Workshops prácticos',
        'Materiales de estudio',
        'Certificación de participación',
        'Seguimiento post-capacitación'
      ],
      price: 'Desde $800',
      color: 'from-green-500 to-emerald-500',
      popular: false
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Zap className="w-5 h-5 text-cyan-600" />
            <span className="text-cyan-700 font-medium">Servicios Profesionales</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Protege tu <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Negocio Digital</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios especializados en ciberseguridad y desarrollo seguro para empresas que valoran la protección de sus datos y la confianza de sus usuarios.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  MÁS POPULAR
                </motion.div>
              )}

              {/* Service Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                </div>
                
                <motion.button
                  className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h3>
            <p className="text-gray-600 text-lg">
              Testimonios reales de empresas que han confiado en nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                />
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para asegurar tu proyecto?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con Richard Nina Melendres para una consulta gratuita y descubre cómo podemos proteger tu negocio digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-cyan-500 hover:text-cyan-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;