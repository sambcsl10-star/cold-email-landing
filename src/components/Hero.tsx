import { ArrowRight, Mail, Clock, Users, Shield, Zap, CheckCircle, ArrowRight as ArrowRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
            </span>
            <span className="text-sm font-medium text-primary-300">Nuevo: ColdEmail Agent v2.0 - IA para emails fríos personalizados</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Automatiza tu <span className="text-gradient">prospección B2B</span> y cierra más ventas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Genera <span className="font-semibold text-primary-400">100+ emails fríos personalizados</span> en minutos. 
            IA que investiga a tus leads, escribe emails únicos y te ayuda a cerrar más tratos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#pricing" className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-950 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-500 transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/25">
              <span className="text-lg font-semibold">Empezar Gratis</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#features" className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A12.061 12.061 0 0112 21.75a8.5 8.5 0 11-5.884-10.193" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Ver Demo</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100+ emails personalizados en minutos</span>
            </span>
            <div className="w-px h-6 bg-gray-700 mx-4" />
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 11a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Basado en datos reales de LinkedIn</span>
            </span>
            <div className="w-px h-6 bg-gray-700 mx-4" />
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Integración con tu CRM</span>
            </span>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V4" />
          </svg>
        </div>
      </div>
    </section>
  )
}