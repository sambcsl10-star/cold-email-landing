import { motion } from 'framer-motion'
import { CheckCircle, XCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Cómo funciona la personalización con IA?',
    a: 'Nuestra IA investiga cada lead automáticamente (LinkedIn, web, noticias) y escribe emails únicos y relevantes para cada prospecto. No usamos plantillas genéricas.'
  },
  {
    q: '¿Puedo integrar con mi CRM actual?',
    a: 'Sí, integración nativa con HubSpot, Pipedrive, Salesforce, Close, Close.io, Attio, Attio, Folk, Folk, Clay, y vía Zapier/Make con 5000+ apps.'
  },
  {
    q: '¿Cómo garantizan la entregabilidad?',
    a: 'Warm-up automático de IPs, rotación de IPs, SPF/DKIM/DMARC automático, validación de emails, listas de supresión, warm-up gradual de 14-21 días.'
  },
  {
    q: '¿Puedo cancelar en cualquier momento?',
    a: 'Sí, sin permanencia. Cancela cuando quieras desde tu panel. El acceso continúa hasta el final del período pagado.'
  },
  {
    q: '¿Hay límite de emails por día?',
    a: 'No hay límite duro, pero recomendamos respetar límites de proveedores (Gmail/Outlook: 500/día, Google Workspace: 2000/día). Nuestro sistema optimiza automáticamente.'
  },
  {
    q: '¿Ofrecen soporte en español?',
    a: 'Sí, soporte en español e inglés via chat, email y Slack (planes Pro+). Respuesta < 4h en horario laboral.'
  },
  {
    q: '¿Hay descuento para pago anual?',
    a: 'Sí, 20% de descuento en pago anual. Enterprise incluye 2 meses gratis en anual.'
  },
  {
    q: '¿Puedo importar mis propios leads?',
    a: 'Sí, sube CSV/Excel/Google Sheets. Enriquecemos automáticamente con emails verificados, LinkedIn, tecnologías, tamaño empresa, etc.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative flex h-4 w-4 rounded-full bg-primary-500" />
          </span>
          <span className="text-sm font-medium text-primary-300">Preguntas Frecuentes</span>
        </span>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    )
  }

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-full text-left p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-primary-500/50 transition-colors group"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white pr-10">{faq.q}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-primary-400 shrink-0"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="mt-4 pt-4 border-t border-white/5 text-gray-300 leading-relaxed">
          {faq.a}
        </div>
      </motion.div>
    </motion.div>
  )
}