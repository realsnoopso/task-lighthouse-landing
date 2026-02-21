import { useState, useEffect } from 'react'
import { Puzzle, Sun, CheckCircle, AlertCircle, HelpCircle, TrendingDown, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import EnhancedLightBeam from './components/EnhancedLightBeam'
import WaveBackground from './components/WaveBackground'
import SpotlightCard from './components/SpotlightCard'
import GenerativeBackground from './components/GenerativeBackground'
import { translations, detectLanguage } from './i18n'
import { initAmplitude, trackEvent, events } from './utils/amplitude'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    // Initialize Amplitude
    initAmplitude()
    
    // Detect and set language
    const detectedLang = detectLanguage()
    setLang(detectedLang)
    
    // Track page view
    trackEvent(events.PAGE_VIEW, {
      language: detectedLang,
      referrer: document.referrer,
      url: window.location.href,
    })
  }, [])

  const t = translations[lang]

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ko' : 'en'
    setLang(newLang)
    trackEvent(events.LANGUAGE_CHANGED, {
      from: lang,
      to: newLang,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    trackEvent(events.CTA_CLICKED, {
      location: e.target.id || 'unknown',
      language: lang,
    })
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          lang 
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Waitlist signup successful:', data)
        trackEvent(events.EMAIL_SUBMITTED, {
          language: lang,
          emailId: data.emailId,
        })
        setSubmitted(true)
        setEmail('') // Clear email input
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Waitlist signup failed:', data.error)
        trackEvent(events.EMAIL_FAILED, {
          language: lang,
          error: data.error,
        })
        alert('Failed to join waitlist. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      trackEvent(events.EMAIL_FAILED, {
        language: lang,
        error: error.message,
      })
      alert('Network error. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-100 overflow-x-hidden">
      {/* Generative Background */}
      <GenerativeBackground />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src="/lighthouse-logo.svg" 
              alt="Lighthouse" 
              className="w-8 h-8"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="text-xl font-serif font-medium text-neutral-900">Lighthouse</span>
          </motion.div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? '한국어' : 'English'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-12 md:py-20 md:py-32 overflow-hidden">
        <EnhancedLightBeam />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light text-neutral-900 mb-6 md:mb-8 leading-tight tracking-tight whitespace-pre-line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow: '0 2px 20px rgba(251, 191, 36, 0.1)'
            }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 md:mb-12 md:mb-10 md:mb-16 leading-relaxed font-light px-4 whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t.heroSubtitle}
          </motion.p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} id="hero-form" className="max-w-md mx-auto mb-4 px-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900 placeholder-neutral-400 transition-all"
              />
              <motion.button
                type="submit"
                className="px-8 py-3.5 bg-neutral-900 text-white rounded-full font-medium transition-all w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.joinWaitlist}
              </motion.button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-600 text-sm font-medium">{t.waitlistSuccess}</p>
          )}
          <p className="text-sm text-neutral-500">
            {t.waitlistSubtext}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white/60 backdrop-blur py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mb-10 md:mb-16 text-center">
              {t.problemTitle}
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-neutral-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{t.problem1Title}</h3>
                  <p className="text-neutral-600">
                    {t.problem1Desc}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-neutral-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{t.problem2Title}</h3>
                  <p className="text-neutral-600">
                    {t.problem2Desc}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-neutral-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{t.problem3Title}</h3>
                  <p className="text-neutral-600">
                    {t.problem3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mb-6 text-center">
              {t.solutionTitle}
            </h2>
            <p className="text-center text-neutral-600 mb-8 md:mb-12 md:mb-20 text-lg font-light">
              {t.solutionSubtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <Puzzle className="w-7 h-7 text-neutral-700" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.feature1Title}</h3>
                <p className="text-neutral-600">
                  {t.feature1Desc}
                </p>
              </SpotlightCard>

              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <Sun className="w-7 h-7 text-neutral-700" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.feature2Title}</h3>
                <p className="text-neutral-600">
                  {t.feature2Desc}
                </p>
              </SpotlightCard>

              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <CheckCircle className="w-7 h-7 text-neutral-700" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.feature3Title}</h3>
                <p className="text-neutral-600">
                  {t.feature3Desc}
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white/60 backdrop-blur py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mb-10 md:mb-16 text-center">
              {t.howItWorksTitle}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">{t.step1Title}</h3>
                  <p className="text-neutral-600">
                    {t.step1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">{t.step2Title}</h3>
                  <p className="text-neutral-600">
                    {t.step2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">{t.step3Title}</h3>
                  <p className="text-neutral-600">
                    {t.step3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light mb-8 text-neutral-900 whitespace-pre-line">
            {t.ctaTitle}
          </h2>
          <p className="text-neutral-700 text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            {t.ctaSubtitle}
          </p>
          <form onSubmit={handleSubmit} id="cta-form" className="max-w-md mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholderShort}
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-neutral-300 bg-white/90 backdrop-blur text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
              <motion.button
                type="submit"
                className="px-8 py-3.5 bg-neutral-900 text-white rounded-full font-medium transition-all w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.joinWaitlist}
              </motion.button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-600 text-sm font-medium mt-2">{t.waitlistSuccess}</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-neutral-50/50 py-8 border-t border-neutral-200/50 overflow-hidden">
        <WaveBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <motion.img 
                src="/lighthouse-logo.svg" 
                alt="Lighthouse" 
                className="w-7 h-7"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="font-semibold text-neutral-900">Lighthouse</span>
            </div>
            <div className="flex gap-6 text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-900 transition">
                {t.privacy}
              </a>
              <a href="#" className="hover:text-neutral-900 transition">
                {t.terms}
              </a>
              <a href="mailto:hello@tasklighthouse.app" className="hover:text-neutral-900 transition">
                {t.contact}
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-neutral-500">
            {t.copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
