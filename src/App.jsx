import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 대기자 명단 API 연동
    console.log('Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏮</span>
            <span className="text-xl font-bold text-slate-900">작업등대</span>
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
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            큰 일도<br className="md:hidden" /> 시작할 수 있게
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            AI가 복잡한 작업을 실행 가능한 크기로 쪼개고,<br />
            오늘 해야 할 일을 명확하게 정리해드립니다.
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
              >
                대기하기
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-600 text-sm">✓ 등록되었습니다!</p>
          )}
          <p className="text-sm text-slate-500">
            출시 소식을 가장 먼저 받아보세요
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              이런 경험 있으신가요?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">😵</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">할 일은 크고, 어디서 시작할지 모르겠고</h3>
                  <p className="text-slate-600">
                    "프로젝트 기획서 작성"이라고 적어놓기만 하고, 막상 컴퓨터 앞에 앉으면 무엇부터 해야 할지 몰라 멍하니 시간을 보냅니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🤔</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">이게 끝난 건지 아닌지 확신이 안 서고</h3>
                  <p className="text-slate-600">
                    "이 정도면 됐나?" "조금 더 해야 하나?"를 반복하며 넘어가는 타이밍을 못 잡습니다. 완료 기준이 없으니 계속 불안합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">😔</span>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">하루가 끝나도 뭘 했는지 모르겠고</h3>
                  <p className="text-slate-600">
                    할일 앱에 체크는 했는데, 실제로 무엇을 얼마나 했는지 객관적으로 확인할 수 없습니다. 성취감이 쌓이지 않습니다.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              작업등대가 도와드릴게요
            </h2>
            <p className="text-center text-slate-600 mb-16">
              AI가 함께, 매일 아침 오늘의 계획을 세우고, 작업을 쪼개고, 완료를 확인합니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI가 작업을 쪼개줍니다</h3>
                <p className="text-slate-600">
                  "프로젝트 기획서 작성"을 입력하면 AI가 30분~2시간 단위의 실행 가능한 작업으로 분해합니다. 각 단계마다 완료 기준까지 제안합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">하루 시작 인터뷰</h3>
                <p className="text-slate-600">
                  매일 아침 3분 대화로 오늘의 우선순위를 정합니다. "가장 중요한 일은 뭐예요?", "얼마나 걸릴 것 같아요?" 같은 질문에 답하면 계획이 세워집니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">체크인으로 기록 누적</h3>
                <p className="text-slate-600">
                  "70% 완료", "막힘", "완료" 같은 간단한 체크인만 하면 됩니다. 하루가 끝나면 자동으로 회고가 만들어집니다.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              이렇게 작동합니다
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">큰 작업을 던지세요</h3>
                  <p className="text-slate-600">
                    "신제품 런칭 준비"처럼 막막한 일을 그대로 적으면 됩니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">AI가 실행 가능하게 쪼갭니다</h3>
                  <p className="text-slate-600">
                    "경쟁사 조사", "가격 책정", "마케팅 채널 선정" 같은 30분~2시간 단위로 분해되고, 각각의 완료 기준이 제시됩니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">하나씩 완료하고 체크인하세요</h3>
                  <p className="text-slate-600">
                    작업 후 간단히 체크인하면 자동으로 기록됩니다. 하루가 끝나면 "오늘 이만큼 했다"를 한눈에 확인할 수 있습니다.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            작업 마비에서 벗어나세요
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            큰 일도 시작할 수 있게, 작업등대가 함께합니다.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                대기하기
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-400 text-sm mt-2">✓ 등록되었습니다!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏮</span>
              <span className="font-semibold text-slate-900">작업등대</span>
              <span className="text-slate-500 text-sm">Task Lighthouse</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-slate-900 transition">
                이용약관
              </a>
              <a href="mailto:hello@tasklighthouse.app" className="hover:text-slate-900 transition">
                문의하기
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-slate-500">
            © 2026 작업등대. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
