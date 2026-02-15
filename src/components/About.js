import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';

const About = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const fetchDevelopers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/developers');
      const data = await response.json();
      setDevelopers(data);
    } catch (error) {
      console.error('Error fetching developers:', error);
      // Fallback data si no hay conexión a la BD
      setDevelopers([
        {
          id: 1,
          nombre: 'Nombre',
          apellido: 'Desarrollador 1',
          teléfono: '+34 XXX XXX XXX',
          email: 'dev1@cybercode.com',
          perfil_git: 'https://github.com/richy1991',
          linkedin: 'https://linkedin.com',
          bio: 'Especialista en seguridad web y desarrollo backend',
          skills: ['Node.js', 'Express', 'Python', 'Security']
        },
        {
          id: 2,
          nombre: 'Nombre',
          apellido: 'Desarrollador 2',
          teléfono: '+34 XXX XXX XXX',
          email: 'dev2@cybercode.com',
          perfil_git: 'https://github.com/richy1991',
          linkedin: 'https://linkedin.com',
          bio: 'Frontend development y UX/UI design',
          skills: ['React', 'Tailwind', 'Web3', 'Design']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12 lg:py-20 px-3 sm:px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Acerca de CyberCode
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Expertos en ciberseguridad, desarrollo seguro y soluciones tecnológicas para empresas modernas
          </p>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-4 sm:p-6 lg:p-8"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-3 sm:mb-4">Nuestra Misión</h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
              Proporcionar soluciones de ciberseguridad de clase mundial, asesoramiento técnico experto y desarrollo seguro para proteger a empresas y desarrolladores en un mundo digital cada vez más amenazante.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 sm:p-6 lg:p-8"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">Nuestra Visión</h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
              Ser la plataforma líder para conexión, conocimiento y servicios de ciberseguridad en el ecosistema tecnológico hispanohablante.
            </p>
          </motion.div>
        </div>

        {/* Equipo de Desarrolladores */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-cyan-400 mb-6 sm:mb-8 lg:mb-12">Nuestro Equipo</h2>

          {loading ? (
            <div className="text-center text-gray-400 text-sm sm:text-base">Cargando equipo...</div>
          ) : (
            <motion.div
              className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {developers.map((dev, index) => (
                <motion.div
                  key={dev.id || index}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-cyan-500/30 overflow-hidden hover:border-cyan-400/60 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ translateY: -10, borderColor: 'rgb(34, 211, 238, 0.6)' }}
                >
                  {/* Avatar Placeholder */}
                  <div className="h-28 sm:h-36 lg:h-48 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center border-b border-cyan-500/30">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-400 mb-2">
                      {dev.nombre} {dev.apellido}
                    </h3>
                    <p className="text-purple-300 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">{dev.bio}</p>

                    {/* Skills */}
                    <div className="mb-3 sm:mb-4">
                      <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {dev.skills?.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-[10px] sm:text-xs border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-[10px] sm:text-xs lg:text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                        <a href={`mailto:${dev.email}`} className="hover:text-cyan-400 transition-colors truncate">
                          {dev.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                        <a href={`tel:${dev.teléfono}`} className="hover:text-purple-400 transition-colors">
                          {dev.teléfono}
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-600">
                      <a
                        href={dev.perfil_git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 py-1.5 sm:py-2 rounded transition-colors flex items-center justify-center gap-1 sm:gap-2 group/link text-[10px] sm:text-xs"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs">GitHub</span>
                      </a>
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-700/30 hover:bg-blue-600/40 text-blue-300 py-1.5 sm:py-2 rounded transition-colors flex items-center justify-center gap-1 sm:gap-2 group/link text-[10px] sm:text-xs"
                      >
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Valores */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6">Nuestros Valores</h2>
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
            {[
              { title: 'Seguridad', desc: 'Protección de datos como prioridad máxima' },
              { title: 'Innovación', desc: 'Última tecnología en soluciones' },
              { title: 'Transparencia', desc: 'Comunicación clara y honesta' },
              { title: 'Excelencia', desc: 'Calidad en cada proyecto' },
              { title: 'Comunidad', desc: 'Desarrollo colaborativo de conocimiento' },
              { title: 'Accesibilidad', desc: 'Servicios para todos los tamaños' }
            ].map((value, i) => (
              <li key={i} className="flex gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-cyan-400 text-xs sm:text-sm lg:text-base">{value.title}</p>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-400">{value.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
