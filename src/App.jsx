import { useState } from 'react'
import { Puzzle, Sun, CheckCircle, AlertCircle, HelpCircle, TrendingDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import LightBeam from './components/LightBeam'
import WaveBackground from './components/WaveBackground'
import SpotlightCard from './components/SpotlightCard'
import HeroVisual from './components/HeroVisual'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to waitlist API
    console.log('Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
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
          <a
            href="https://github.com/realsnoopso/task-lighthouse"
            className="text-sm text-neutral-700 hover:text-neutral-900 transition"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32 overflow-hidden min-h-[85vh] flex items-center">
        <LightBeam />
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <HeroVisual />
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light text-neutral-900 mb-8 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block">Break big work</span><br />
            <span className="inline-block bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              into small wins
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-neutral-600 mb-12 md:mb-16 leading-relaxed font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            AI turns overwhelming projects into actionable steps.
            <br className="hidden sm:block" />
            Know exactly what to do next, every single day.
          </motion.p>
          
          {/* Email Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto flex-1 px-6 py-4 rounded-full border-2 border-neutral-300 bg-white/90 backdrop-blur focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 text-neutral-900 placeholder-neutral-400 text-lg shadow-lg"
              />
              <motion.button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.form>
          {submitted && (
            <p className="text-green-600 text-sm font-medium">✓ You're on the list!</p>
          )}
          <p className="text-sm text-neutral-500">
            Be the first to know when we launch
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white/60 backdrop-blur py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mb-10 md:mb-16 text-center">
              Sound familiar?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Big tasks, unclear starts</h3>
                  <p className="text-neutral-600">
                    You write "Launch new project" in your todo app, then stare at your screen wondering where to even begin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">No definition of done</h3>
                  <p className="text-neutral-600">
                    "Is this good enough?" "Should I do more?" Without clear completion criteria, you never know when to move on.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Days disappear without progress</h3>
                  <p className="text-neutral-600">
                    You check boxes, but can't actually see what you accomplished. No tangible wins, no momentum.
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
              Lighthouse guides you through
            </h2>
            <p className="text-center text-neutral-600 mb-8 md:mb-12 md:mb-20 text-lg font-light">
              AI breaks down your work, plans your day, and tracks your wins.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-6">
                  <Puzzle className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Smart decomposition</h3>
                <p className="text-neutral-600">
                  AI transforms "Launch new project" into 30-min to 2-hour chunks with clear completion criteria for each step.
                </p>
              </SpotlightCard>

              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6">
                  <Sun className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Daily planning ritual</h3>
                <p className="text-neutral-600">
                  3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan for the day.
                </p>
              </SpotlightCard>

              <SpotlightCard className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Effortless tracking</h3>
                <p className="text-neutral-600">
                  Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.
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
              How it works
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Dump your big tasks</h3>
                  <p className="text-neutral-600">
                    Add anything overwhelming: "Plan Q2 strategy", "Redesign onboarding", whatever's on your mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">AI breaks it down</h3>
                  <p className="text-neutral-600">
                    Get actionable 30-min to 2-hour tasks with clear outcomes. "Research competitors", "Draft pricing model", "Pick marketing channels".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Execute and check in</h3>
                  <p className="text-neutral-600">
                    Mark progress as you go. Your daily retrospective builds itself automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light mb-8 text-neutral-900">
            Stop staring.<br className="md:hidden" /> Start shipping.
          </h2>
          <p className="text-neutral-700 text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Lighthouse turns paralysis into progress. Break big work into small wins.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-neutral-300 bg-white/90 backdrop-blur text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all hover:scale-105 w-full sm:w-auto"
              >
                Join Waitlist
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-400 text-sm font-medium mt-2">✓ You're on the list!</p>
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
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-900 transition">
                Terms
              </a>
              <a href="mailto:hello@tasklighthouse.app" className="hover:text-neutral-900 transition">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-neutral-500">
            © 2026 Lighthouse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
