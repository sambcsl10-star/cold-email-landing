'use client'

import { motion } from 'framer-motion'
import { Star, MessageSquare, ArrowRight, CheckCircle2, User, Briefcase, MapPin, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    quote: '"ColdEmail Agent nos ahorra 40h/semana en prospección. Pasamos de 2 a 15 reuniones cualificadas por semana. El ROI es brutal."',
    author: 'Carlos M.',
    role: 'CEO',
    company: 'ScaleUp Ventures',
    avatar: 'CM',
    result: '+650% reuniones',
    metric: '+650%',
    color: 'text-green-400'
  },
  {
    quote: '"La personalización con IA es brutal. Nuestros emails tienen 42% open rate y 18% reply rate. Antes estábamos en 12% y 2%."',
    author: 'María G.',
    role: 'Head of Sales',
    company: 'TechFlow SaaS',
    avatar: 'MG',
    result: '+380% replies',
    metric: '+380%',
    color: 'text-purple-400'
  },
  {
    quote: '"Generamos 50 leads cualificados en la primera semana. El ROI fue de 12x en el primer mes. Mejor inversión del año."',
    author: 'David R.',
    role: 'Founder',
    company: 'LegalTech Solutions',
    avatar: 'DR',
    result: '12x ROI',
    metric: '12x ROI',
    color: 'text-yellow-400'
  },
  {
    quote: '"Lo que más valoro es la personalización real. No son plantillas: la IA investiga a cada lead y escribe emails que parecen escritos a mano."',
    author: 'Laura P.',
    role: 'Head of Growth',
    company: 'FinTech Startup',
    avatar: 'LP',
    result: '3x conversiones',
    metric: '3x conv.',
    color: 'text-purple-400'
  },
  {
    quote: '"Integración con HubSpot perfecta. Los leads entran directo a nuestro pipeline con toda la info enriquecida. Ahorra 20h/semana al equipo."',
    author: 'Javier M.',
    role: 'Sales Director',
    company: 'B2B SaaS Scale-up',
    avatar: 'JM',
    result: '20h/sem ahorradas',
    metric: '20h/sem',
    color: 'text-blue-400'
  },
  {
    quote: '"El warm-up automático de IPs y la rotación de IPs nos salvó la entregabilidad. Pasamos de 60% a 98% inbox placement en 2 semanas."',
    author: 'Ana L.',
    role: 'Email Marketing Lead',
    company: 'E-commerce Brand',
    avatar: 'AL',
    result: '98% inbox',
    metric: '98% inbox',
    color: 'text-green-400'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
          </span>
          <span className="text-sm font-medium text-primary-300">CONFIADO POR EQUIPOS DE VENTAS EN 50+ PAÍSES</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: '"ColdEmail Agent nos ahorra 40h/semana en prospección. Pasamos de 2 a 15 reuniones cualificadas por semana. El ROI es brutal."', author: 'Carlos M.', role: 'CEO', company: 'ScaleUp Ventures', avatar: 'CM', result: '+650% reuniones', metric: '+650%', color: 'text-green-400' },
              { quote: '"La personalización con IA es brutal. Nuestros emails tienen 42% open rate y 18% reply rate. Antes estábamos en 12% y 2%."', author: 'María G.', role: 'Head of Sales', company: 'TechFlow SaaS', avatar: 'MG', result: '+380% replies', metric: '+380%', color: 'text-purple-400' },
              { quote: '"Generamos 50 leads cualificados en la primera semana. El ROI fue de 12x en el primer mes. Mejor inversión del año."', author: 'David R.', role: 'Founder', company: 'LegalTech Solutions', avatar: 'DR', result: '12x ROI', metric: '12x ROI', color: 'text-yellow-400' },
              { quote: '"Lo que más valoro es la personalización real. No son plantillas: la IA investiga a cada lead y escribe emails que parecen escritos a mano."', author: 'Laura P.', role: 'Head of Growth', company: 'FinTech Startup', avatar: 'LP', result: '3x conversiones', metric: '3x conv.', color: 'text-purple-400' },
              { quote: '"Integración con HubSpot perfecta. Los leads entran directo a nuestro pipeline con toda la info enriquecida. Ahorra 20h/semana al equipo."', author: 'Javier M.', role: 'Sales Director', company: 'B2B SaaS Scale-up', avatar: 'JM', result: '20h/sem ahorradas', metric: '20h/sem', color: 'text-blue-400' },
              { quote: '"El warm-up automático de IPs y la rotación de IPs nos salvó la entregabilidad. Pasamos de 60% a 98% inbox placement en 2 semanas."', author: 'Ana L.', role: 'Email Marketing Lead', company: 'E-commerce Brand', avatar: 'AL', result: '98% inbox', metric: '98% inbox', color: 'text-green-400' }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">\"{testimonial.quote}\"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <User className="w-3 h-3" />
                    <span>{testimonial.company}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${testimonial.color} font-semibold`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            ))}
</motion.div>
        </div>
</section>
  )
}