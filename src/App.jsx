import { useState, useEffect } from 'react'
import { Check, ArrowRight, Zap, Target, LineChart } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { cn } from './lib/utils'
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-neutral-900 rounded-md flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="text-lg font-semibold text-neutral-900">Lighthouse</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition"
            >
              {lang === 'en' ? '한국어' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            {lang === 'en' ? 'Break big work into small wins' : '큰 작업을 작은 성취로'}
          </h1>
          <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
            {lang === 'en' 
              ? 'AI turns overwhelming projects into actionable steps. Know exactly what to do next, every single day.'
              : 'AI가 막막한 프로젝트를 실행 가능한 단계로 바꿉니다. 매일 무엇을 해야 할지 명확하게 알 수 있습니다.'}
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'en' ? 'Enter your email' : '이메일을 입력하세요'}
              required
              className="flex-1"
            />
            <Button type="submit" size="default" className="sm:w-auto">
              {lang === 'en' ? 'Join Waitlist' : '대기자 등록'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          {submitted && (
            <p className="text-green-600 text-sm font-medium mt-3 flex items-center">
              <Check className="mr-2 h-4 w-4" />
              {lang === 'en' ? "You're on the list!" : '등록 완료!'}
            </p>
          )}
          <p className="text-sm text-neutral-500 mt-3">
            {lang === 'en' ? 'Be the first to know when we launch' : '출시 소식을 가장 먼저 받아보세요'}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {lang === 'en' ? 'Smart decomposition' : '스마트 작업 분해'}
              </h3>
              <p className="text-neutral-600">
                {lang === 'en' 
                  ? 'AI transforms "Launch new project" into 30-min to 2-hour chunks with clear completion criteria.'
                  : 'AI가 "새 프로젝트 시작"을 명확한 완료 기준이 있는 30분~2시간 단위 작업으로 변환합니다.'}
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {lang === 'en' ? 'Daily planning' : '일일 계획'}
              </h3>
              <p className="text-neutral-600">
                {lang === 'en' 
                  ? '3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan.'
                  : '3분 아침 체크인으로 우선순위를 설정합니다. 간단한 질문에 답하고 집중 계획을 받으세요.'}
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {lang === 'en' ? 'Effortless tracking' : '손쉬운 추적'}
              </h3>
              <p className="text-neutral-600">
                {lang === 'en' 
                  ? 'Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.'
                  : '간단한 체크인이 자동으로 진행 로그를 만듭니다. 매일 무엇을 완료했는지 정확히 알 수 있습니다.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {lang === 'en' ? 'Stop staring. Start shipping.' : '망설임을 멈추고 실행을 시작하세요'}
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Lighthouse turns paralysis into progress. Break big work into small wins.'
              : 'Lighthouse가 정체를 진행으로 바꿉니다. 큰 작업을 작은 성취로.'}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'en' ? 'your@email.com' : 'your@email.com'}
              required
              className="flex-1"
            />
            <Button type="submit" size="default">
              {lang === 'en' ? 'Join Waitlist' : '대기자 등록'}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center text-white text-xs font-bold">
                L
              </div>
              <span className="font-semibold text-neutral-900">Lighthouse</span>
            </div>
            <p>© 2026 Lighthouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
