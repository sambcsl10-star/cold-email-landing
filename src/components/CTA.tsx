'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Shield, Users, Zap } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      alert('Por favor, introduce un email válido')
      return
    }
    alert('¡Gracias! Te contactaremos en menos de 24h.')
  }

  return (
    <section id="contact" className="relative py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-purple-500/10 rounded-3xl blur-3xl" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
              </span>
              <span className="text-sm font-medium text-primary-300">Lanzamiento Oficial - Plazas Limitadas</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              ¿Listo para <span className="text-gradient">escalar tu outbound</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Únete a 2,000+ equipos de ventas que ya escalan su prospección con IA. 
              Empieza gratis hoy, cancela cuando quieras.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactaremos en <24h.') }} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 outline-none"
                  placeholder="tu@empresa.com"
                />
              <button className="btn-primary w-full mt-4 py-4 text-lg">
                <span>Empezar Gratis Ahora</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>

            <p className="mt-6 text-gray-400 text-sm">
              Sin tarjeta de crédito • 14 días gratis • Cancela cuando quieras
            </p>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-white/5">
                <div className="text-4xl font-bold text-primary-400 mb-2">14 días</div>
                <p className="text-gray-400 text-sm">Prueba gratis sin tarjeta</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-white/5">
                <div className="text-4xl font-bold text-green-400 mb-1">2 min</div>
                <p className="text-gray-400 text-sm">Setup completo</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-white/5">
                <div className="text-4xl font-bold text-green-400 mb-1">24/7</div>
                <p className="text-gray-400 text-sm">Soporte en español</p>
              </div>
            </div>
          </div>
</div>
      </motion.div>
    </section>
    )
  }
}