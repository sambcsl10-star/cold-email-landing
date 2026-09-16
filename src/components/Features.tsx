import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center mb-20"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
          </span>
          <span className="text-sm font-medium text-primary-300">NUEVA VERSIÓN 2.0 - IA Mejorada</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Todo lo que necesitas para <span className="text-gradient">escalar tu prospección B2B</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Deja de perder horas escribiendo emails. Nuestra IA investiga, personaliza y envía 
          emails que convierten. Tú solo cierras tratos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 transition-colors"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">10,000+</div>
          <p className="text-gray-400 text-lg font-medium">Emails generados/mes</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 transition-colors"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">40%+</div>
          <p className="text-gray-400 text-lg font-medium">Tasa de apertura promedio</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 transition-colors"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">15%+</div>
          <p className="text-gray-400 text-lg font-medium">Tasa de respuesta</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Todo lo que necesitas para <span className="text-gradient">escalar tu outbound</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Generación Masiva</h3>
            <p className="text-gray-300 leading-relaxed">Genera 100+ emails personalizados en minutos, no horas.</p>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-primary-400 font-medium text-sm">
              <span>Ver más</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">IA Hiper-Personalizada</h3>
            <p className="text-gray-300 leading-relaxed">Investiga a cada lead automáticamente: LinkedIn, web, noticias.</p>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-primary-400 font-medium text-sm">
              <span>Ver más</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Entrega Garantizada</h3>
            <p className="text-gray-300 leading-relaxed">Optimización automática de deliverability: SPF, DKIM, DMARC.</p>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-primary-400 font-medium text-sm">
              <span>Ver más</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Investigación Automática</h3>
            <p className="text-gray-300 leading-relaxed">Encuentra leads, enriquece con LinkedIn, encuentra emails verificados.</p>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-primary-400 font-medium text-sm">
              <span>Ver más</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}