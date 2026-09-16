import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 11.5V19a2 2 0 01-2 2H4a2 2 0 01-2-2V6.83L3 9.5l7-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-6 6-4-4 6-6 4-4H3v14a2 2 0 002 2h14a2 2 0 002-2V8.414" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white ml-2">ColdEmail<span className="text-primary-400">Agent</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Precios</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Casos de éxito</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="btn-secondary hidden sm:inline-flex">Ver Precios</a>
            <a href="#contact" className="btn-primary">Empezar Gratis</a>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        <Hero />
        <section id="features" className="py-24 px-6">
          <Features />
        </section>
        <section id="pricing" className="py-24 bg-gray-950/50">
          <Pricing />
        </section>
        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>
        <section id="faq" className="py-24 bg-gray-950/50">
          <FAQ />
        </section>
        <CTA />
        <Footer />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}

export default App