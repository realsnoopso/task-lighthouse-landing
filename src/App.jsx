import { useState } from 'react'

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
          <div className="flex items-center gap-3">
            <img src="/lighthouse-logo.svg" alt="Lighthouse" className="w-8 h-8" />
            <span className="text-xl font-serif font-medium text-neutral-900">Lighthouse</span>
          </div>
          <a
            href="https://github.com/realsnoopso/task-lighthouse"
            className="text-sm text-neutral-700 hover:text-neutral-900 transition"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light text-neutral-900 mb-6 md:mb-8 leading-tight tracking-tight">
            Break big work<br />into small wins
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 md:mb-12 md:mb-10 md:mb-16 leading-relaxed font-light px-4">
            AI turns overwhelming projects into actionable steps.<br className="hidden sm:block" />
            Know exactly what to do next, every single day.
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4 px-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-neutral-900 placeholder-neutral-400"
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
                <span className="text-2xl flex-shrink-0">😵</span>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">Big tasks, unclear starts</h3>
                  <p className="text-neutral-600">
                    You write "Launch new project" in your todo app, then stare at your screen wondering where to even begin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🤔</span>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">No definition of done</h3>
                  <p className="text-neutral-600">
                    "Is this good enough?" "Should I do more?" Without clear completion criteria, you never know when to move on.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">😔</span>
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
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-md transition">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Smart decomposition</h3>
                <p className="text-neutral-600">
                  AI transforms "Launch new project" into 30-min to 2-hour chunks with clear completion criteria for each step.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-md transition">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Daily planning ritual</h3>
                <p className="text-neutral-600">
                  3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan for the day.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-neutral-200/50 hover:shadow-md transition">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Effortless tracking</h3>
                <p className="text-neutral-600">
                  Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.
                </p>
              </div>
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
      <footer className="bg-neutral-50/50 py-8 border-t border-neutral-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/lighthouse-logo.svg" alt="Lighthouse" className="w-7 h-7" />
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
