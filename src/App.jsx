import { useState, useEffect } from 'react'
import { Check, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react'
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
      location: 'hero',
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
          <div className="grid gap-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1 text-sm font-medium w-fit">
              <Sparkles className="h-4 w-4" />
              {lang === 'en' ? 'AI-powered task planning' : 'AI 기반 작업 계획'}
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              {lang === 'en' ? (
                <>
                  Break big work<br />into small wins
                </>
              ) : (
                <>
                  큰 작업을<br />작은 성취로
                </>
              )}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              {lang === 'en' 
                ? 'AI turns overwhelming projects into actionable steps. Know exactly what to do next, every single day.'
                : 'AI가 막막한 프로젝트를 실행 가능한 단계로 바꿉니다. 매일 무엇을 해야 할지 명확하게 알 수 있습니다.'}
            </p>
          </div>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'en' ? 'Enter your email' : '이메일을 입력하세요'}
              required
              className="h-10"
            />
            <Button type="submit" size="default" className="h-10">
              {lang === 'en' ? 'Join Waitlist' : '대기자 등록'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          {submitted && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <Check className="h-4 w-4" />
              {lang === 'en' ? "You're on the list!" : '등록 완료!'}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            {lang === 'en' ? 'Be the first to know when we launch' : '출시 소식을 가장 먼저 받아보세요'}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/50">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="grid gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">
                  {lang === 'en' ? 'Smart decomposition' : '스마트 작업 분해'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'en' 
                    ? 'AI transforms "Launch new project" into 30-min to 2-hour chunks with clear completion criteria.'
                    : 'AI가 "새 프로젝트 시작"을 명확한 완료 기준이 있는 30분~2시간 단위 작업으로 변환합니다.'}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                <Target className="h-6 w-6" />
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">
                  {lang === 'en' ? 'Daily planning' : '일일 계획'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'en' 
                    ? '3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan.'
                    : '3분 아침 체크인으로 우선순위를 설정합니다. 간단한 질문에 답하고 집중 계획을 받으세요.'}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">
                  {lang === 'en' ? 'Effortless tracking' : '손쉬운 추적'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'en' 
                    ? 'Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.'
                    : '간단한 체크인이 자동으로 진행 로그를 만듭니다. 매일 무엇을 완료했는지 정확히 알 수 있습니다.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container max-w-screen-2xl py-24 md:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-8 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {lang === 'en' ? 'Stop staring. Start shipping.' : '망설임을 멈추고 실행을 시작하세요'}
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              {lang === 'en' 
                ? 'Lighthouse turns paralysis into progress. Break big work into small wins.'
                : 'Lighthouse가 정체를 진행으로 바꿉니다. 큰 작업을 작은 성취로.'}
            </p>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'en' ? 'your@email.com' : 'your@email.com'}
                required
                className="h-10"
              />
              <Button type="submit" size="default" className="h-10">
                {lang === 'en' ? 'Join Waitlist' : '대기자 등록'}
              </Button>
            </form>
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
            <p className="text-sm text-muted-foreground">
              © 2026 Lighthouse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
