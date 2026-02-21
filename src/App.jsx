import { useState, useEffect } from 'react'
import { Check, ArrowRight, Puzzle, Sun, CheckCircle } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { initAmplitude, trackEvent, events } from './utils/amplitude'
import { translations, detectLanguage } from './i18n'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    initAmplitude()
    const detectedLang = detectLanguage()
    setLang(detectedLang)
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
      location: e.target.id || 'hero',
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
        trackEvent(events.EMAIL_SUBMITTED, {
          language: lang,
          emailId: data.emailId,
        })
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        trackEvent(events.EMAIL_FAILED, {
          language: lang,
          error: data.error,
        })
        alert('Failed to join waitlist. Please try again.')
      }
    } catch (error) {
      trackEvent(events.EMAIL_FAILED, {
        language: lang,
        error: error.message,
      })
      alert('Network error. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Lighthouse</span>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
            >
              {lang === 'en' ? '한국어' : 'English'}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container max-w-screen-2xl py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-start gap-8 md:gap-12">
          <div className="grid gap-6 max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              {t.heroTitle.split('\\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              {t.heroSubtitle.split('\\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br className="hidden sm:block" />}
                </span>
              ))}
            </p>
          </div>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} id="hero-form" className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              required
              className="h-10"
            />
            <Button type="submit" size="default" className="h-10">
              {t.joinWaitlist}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          {submitted && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <Check className="h-4 w-4" />
              {t.waitlistSuccess}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            {t.waitlistSubtext}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
              {t.problemTitle}
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.problem1Title}</h3>
                  <p className="text-muted-foreground">{t.problem1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.problem2Title}</h3>
                  <p className="text-muted-foreground">{t.problem2Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.problem3Title}</h3>
                  <p className="text-muted-foreground">{t.problem3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-t border-border">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-center">
              {t.solutionTitle}
            </h2>
            <p className="text-center text-muted-foreground mb-20 text-lg">
              {t.solutionSubtitle}
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                  <Puzzle className="h-6 w-6" />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">{t.feature1Title}</h3>
                  <p className="text-muted-foreground">{t.feature1Desc}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                  <Sun className="h-6 w-6" />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">{t.feature2Title}</h3>
                  <p className="text-muted-foreground">{t.feature2Desc}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">{t.feature3Title}</h3>
                  <p className="text-muted-foreground">{t.feature3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-muted/30">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
              {t.howItWorksTitle}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.step1Title}</h3>
                  <p className="text-muted-foreground">{t.step1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.step2Title}</h3>
                  <p className="text-muted-foreground">{t.step2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.step3Title}</h3>
                  <p className="text-muted-foreground">{t.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-8 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl whitespace-pre-line">
              {t.ctaTitle.split('\\n').join('\n')}
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              {t.ctaSubtitle}
            </p>
            <form onSubmit={handleSubmit} id="cta-form" className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholderShort}
                required
                className="h-10"
              />
              <Button type="submit" size="default" className="h-10">
                {t.joinWaitlist}
              </Button>
            </form>
            {submitted && (
              <p className="flex items-center gap-2 text-sm font-medium text-green-600">
                <Check className="h-4 w-4" />
                {t.waitlistSuccess}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container max-w-screen-2xl py-8 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-medium text-foreground">Lighthouse</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition">
                {t.privacy}
              </a>
              <a href="#" className="hover:text-foreground transition">
                {t.terms}
              </a>
              <a href="mailto:hello@tasklighthouse.app" className="hover:text-foreground transition">
                {t.contact}
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {t.copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
