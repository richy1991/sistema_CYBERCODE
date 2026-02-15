import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Seccion de <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto. Respuesta rapida y asesoramiento profesional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          <motion.div
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contacto Directo</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>contacto@cybercode.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+591 728 406 30</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Trinidad, Bolivia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl border border-purple-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Canales Preferidos</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/59172840630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 text-green-300 font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a
                href="https://github.com/richy1991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-500/20 to-slate-700/20 border border-slate-500/40 text-slate-200 font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </motion.a>
            </div>
            <div className="mt-6 text-slate-400 text-xs sm:text-sm">
              Horario: Lunes a Sabado, 9:00 - 20:00
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
