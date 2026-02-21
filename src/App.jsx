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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lighthouse-logo.svg" alt="Lighthouse" className="w-8 h-8" />
            <span className="text-xl font-bold text-slate-900">Lighthouse</span>
          </div>
          <a
            href="https://github.com/realsnoopso/task-lighthouse"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Break big work<br />into small wins
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            AI turns overwhelming projects into actionable steps.<br />
            Know exactly what to do next, every single day.
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-600 text-sm font-medium">✓ You're on the list!</p>
          )}
          <p className="text-sm text-slate-500">
            Be the first to know when we launch
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Sound familiar?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">😵</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Big tasks, unclear starts</h3>
                  <p className="text-slate-600">
                    You write "Launch new project" in your todo app, then stare at your screen wondering where to even begin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🤔</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">No definition of done</h3>
                  <p className="text-slate-600">
                    "Is this good enough?" "Should I do more?" Without clear completion criteria, you never know when to move on.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">😔</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Days disappear without progress</h3>
                  <p className="text-slate-600">
                    You check boxes, but can't actually see what you accomplished. No tangible wins, no momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Lighthouse guides you through
            </h2>
            <p className="text-center text-slate-600 mb-16 text-lg">
              AI breaks down your work, plans your day, and tracks your wins.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart decomposition</h3>
                <p className="text-slate-600">
                  AI transforms "Launch new project" into 30-min to 2-hour chunks with clear completion criteria for each step.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Daily planning ritual</h3>
                <p className="text-slate-600">
                  3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan for the day.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Effortless tracking</h3>
                <p className="text-slate-600">
                  Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How it works
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">Dump your big tasks</h3>
                  <p className="text-slate-600">
                    Add anything overwhelming: "Plan Q2 strategy", "Redesign onboarding", whatever's on your mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">AI breaks it down</h3>
                  <p className="text-slate-600">
                    Get actionable 30-min to 2-hour tasks with clear outcomes. "Research competitors", "Draft pricing model", "Pick marketing channels".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">Execute and check in</h3>
                  <p className="text-slate-600">
                    Mark progress as you go. Your daily retrospective builds itself automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop staring.<br className="md:hidden" /> Start shipping.
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Lighthouse turns paralysis into progress. Break big work into small wins.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition whitespace-nowrap"
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
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/lighthouse-logo.svg" alt="Lighthouse" className="w-7 h-7" />
              <span className="font-semibold text-slate-900">Lighthouse</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 transition">
                Terms
              </a>
              <a href="mailto:hello@tasklighthouse.app" className="hover:text-slate-900 transition">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-slate-500">
            © 2026 Lighthouse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
