import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '49€',
    period: '/mes',
    description: 'Perfecto para founders y pequeños equipos que empiezan con outbound',
    popular: false,
    features: [
      'Hasta 1,000 emails/mes',
      'Personalización IA básica',
      '500 leads enriquecidos/mes',
      'Secuencias de 3 pasos',
      'Integración CRM básica',
      'Analytics esenciales',
      'Soporte por email'
    ],
    cta: 'Empezar Gratis'
  },
  {
    name: 'Professional',
    price: '149€',
    period: '/mes',
    description: 'Para equipos de ventas que necesitan escalar su prospección',
    popular: true,
    features: [
      'Hasta 10,000 emails/mes',
      'Personalización IA avanzada',
      '5,000 leads enriquecidos/mes',
      'Secuencias ilimitadas',
      'Todas las integraciones CRM',
      'Analytics avanzados + A/B testing',
      'Warm-up automático de IPs',
      'Soporte prioritario + Slack'
    ],
    cta: 'Empezar Gratis'
  },
  {
    name: 'Enterprise',
    price: '499€',
    period: '/mes',
    description: 'Para organizaciones grandes con necesidades personalizadas',
    popular: false,
    features: [
      'Emails ilimitados',
      'IA personalizada entrenada',
      'Leads ilimitados',
      'Secuencias multi-canal',
      'Integraciones custom (API)',
      'Analytics empresariales',
      'IPs dedicadas + warm-up gestionado',
      'Customer Success Manager',
      'SLA 99.9% + soporte 24/7'
    ],
    cta: 'Contactar Ventas'
  }
]

const features = [
  { label: 'Emails/mes', starter: '1,000', professional: '10,000', enterprise: 'Ilimitados' },
  { label: 'Leads enriquecidos/mes', starter: '500', professional: '5,000', enterprise: 'Ilimitados' },
  { label: 'Pasos por secuencia', starter: '3', professional: 'Ilimitados', enterprise: 'Ilimitados' },
  { label: 'Personalización IA', starter: 'Básica', professional: 'Avanzada', enterprise: 'Custom' },
  { label: 'Integraciones CRM', starter: 'Básicas', professional: 'Todas', enterprise: 'Custom API' },
  { label: 'Warm-up IPs', starter: 'No', professional: 'Automático', enterprise: 'Gestionado' },
  { label: 'IPs dedicadas', starter: 'No', professional: 'No', enterprise: 'Sí' },
  { label: 'A/B Testing', starter: 'No', professional: 'Sí', enterprise: 'Avanzado' },
  { label: 'Soporte', starter: 'Email', professional: 'Prioritario + Slack', enterprise: '24/7 + CSM' },
  { label: 'SLA', starter: 'No', professional: 'No', enterprise: '99.9%' },
]

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pricing" className="relative py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
          </span>
          <span className="text-sm font-medium text-primary-300">Precios transparentes, sin sorpresas</span>
        </span>
      </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Elige el plan que se adapte a tu <span className="text-gradient">crecimiento</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito. Cancela cuando quieras.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              billing === 'monthly'
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              billing === 'yearly'
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Anual <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">-20%</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-500/10 via-gray-900/50 to-gray-950 border-2 border-primary-500/50 shadow-2xl shadow-primary-500/20'
                  : 'bg-gray-900/50 border border-white/5 hover:border-primary-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 mt-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onClick={() => window.location.href = '#contact'}
                >
                  {plan.cta}
                </button>
              </div>
</motion.div>
          )}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-6xl mx-auto"
        >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Comparativa detallada</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Característica</th>
                    <th className="px-4 py-3 text-center text-gray-400 font-medium">Starter</th>
                    <th className="px-4 py-3 text-center text-primary-400 font-semibold">Professional</th>
                    <th className="px-4 py-3 text-center text-purple-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {features.map((feature, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-gray-300 font-medium">{feature.label}</td>
                      <td className="px-4 py-3 text-center text-gray-300">{feature.starter}</td>
                      <td className="px-4 py-3 text-center text-primary-300 font-medium">{feature.professional}</td>
                      <td className="px-4 py-3 text-center text-purple-300 font-medium">{feature.enterprise}</td>
                    </tr>
                  ))}
</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }