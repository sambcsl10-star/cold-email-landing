import { Link } from 'react-router-dom'
import { Mail, Twitter, Linkedin, Github, Youtube, ArrowRight, Heart, Zap, Shield, Globe, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Producto: [
      { label: 'Características', href: '#features' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Casos de éxito', href: '#testimonials' },
      { label: 'API Docs', href: '/docs' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
    Empresa: [
      { label: 'Sobre nosotros', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Carreras', href: '/careers' },
      { label: 'Prensa', href: '/press' },
      { label: 'Contacto', href: '#contact' },
      { label: 'Afiliados', href: '/affiliates' },
    ],
    Recursos: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guías', href: '/guides' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Plantillas', href: '/templates' },
      { label: 'Comunidad', href: '/community' },
      { label: 'Ayuda', href: '/help' },
    ],
    Legal: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Seguridad', href: '/security' },
      { label: 'RGPD', href: '/gdpr' },
      { label: 'Subprocesadores', href: '/subprocessors' },
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/coldemailagent', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/coldemailagent', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/coldemailagent', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@coldemailagent', label: 'YouTube' },
    { icon: Mail, href: 'mailto:hola@coldemailagent.com', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-gray-950/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 7L12 2L2 7l7.89 5.26a2 2 0 002.22 0L22 7L12 2L2 7l7.89 5.26a2 2 0 002.22 0L22 7L12 2L2 7l7.89 5.26a2 2 0 002.22 0L22 7L12 2L2 7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">ColdEmail<span className="text-primary-400">Agent</span></span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-xs text-sm leading-relaxed">
              La IA que automatiza tu prospección B2B. Genera emails personalizados, encuentra leads y cierra más tratos.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://twitter.com/coldemailagent" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/coldemailagent" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/coldemailagent" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@coldemailagent" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:hola@coldemailagent.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries({
              Producto: [
                { label: 'Características', href: '#features' },
                { label: 'Precios', href: '#pricing' },
                { label: 'Casos de éxito', href: '#testimonials' },
                { label: 'API Docs', href: '/docs' },
                { label: 'Changelog', href: '/changelog' },
                { label: 'Roadmap', href: '/roadmap' },
              ],
              Empresa: [
                { label: 'Sobre nosotros', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Carreras', href: '/careers' },
                { label: 'Prensa', href: '/press' },
                { label: 'Contacto', href: '#contact' },
                { label: 'Afiliados', href: '/affiliates' },
              ],
              Recursos: [
                { label: 'Blog', href: '/blog' },
                { label: 'Guías', href: '/guides' },
                { label: 'Webinars', href: '/webinars' },
                { label: 'Plantillas', href: '/templates' },
                { label: 'Comunidad', href: '/community' },
                { label: 'Ayuda', href: '/help' },
              ],
              Legal: [
                { label: 'Privacidad', href: '/privacy' },
                { label: 'Términos', href: '/terms' },
                { label: 'Cookies', href: '/cookies' },
                { label: 'Seguridad', href: '/security' },
                { label: 'RGPD', href: '/gdpr' },
                { label: 'Subprocesadores', href: '/subprocessors' },
              ],
            }.entries()).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>

          <div className="border-t border-white/5 mt-16 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ColdEmail Agent. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Privacidad</a>
                <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Términos</a>
                <a href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Cookies</a>
                <a href="/security" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Seguridad</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Hecho con</span>
                <span className="text-red-500">♥</span>
                <span>para equipos de ventas en todo el mundo</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }