export const translations = {
  en: {
    // Header
    github: "GitHub",
    
    // Hero
    heroTitle: "Break big work\ninto small wins",
    heroSubtitle: "AI turns overwhelming projects into actionable steps.\nKnow exactly what to do next, every single day.",
    emailPlaceholder: "Enter your email",
    joinWaitlist: "Join Waitlist",
    waitlistSuccess: "✓ You're on the list!",
    waitlistSubtext: "Be the first to know when we launch",
    
    // Problem Section
    problemTitle: "Sound familiar?",
    problem1Title: "Big tasks, unclear starts",
    problem1Desc: "You write \"Launch new project\" in your todo app, then stare at your screen wondering where to even begin.",
    problem2Title: "No definition of done",
    problem2Desc: "\"Is this good enough?\" \"Should I do more?\" Without clear completion criteria, you never know when to move on.",
    problem3Title: "Days disappear without progress",
    problem3Desc: "You check boxes, but can't actually see what you accomplished. No tangible wins, no momentum.",
    
    // Solution Section
    solutionTitle: "Lighthouse guides you through",
    solutionSubtitle: "AI breaks down your work, plans your day, and tracks your wins.",
    feature1Title: "Smart decomposition",
    feature1Desc: "AI transforms \"Launch new project\" into 30-min to 2-hour chunks with clear completion criteria for each step.",
    feature2Title: "Daily planning ritual",
    feature2Desc: "3-minute morning check-in sets your priorities. Answer quick questions, get a focused plan for the day.",
    feature3Title: "Effortless tracking",
    feature3Desc: "Quick check-ins build your progress log automatically. End each day knowing exactly what you shipped.",
    
    // How It Works
    howItWorksTitle: "How it works",
    step1Title: "Dump your big tasks",
    step1Desc: "Add anything overwhelming: \"Plan Q2 strategy\", \"Redesign onboarding\", whatever's on your mind.",
    step2Title: "AI breaks it down",
    step2Desc: "Get actionable 30-min to 2-hour tasks with clear outcomes. \"Research competitors\", \"Draft pricing model\", \"Pick marketing channels\".",
    step3Title: "Execute and check in",
    step3Desc: "Mark progress as you go. Your daily retrospective builds itself automatically.",
    
    // CTA
    ctaTitle: "Stop staring.\nStart shipping.",
    ctaSubtitle: "Lighthouse turns paralysis into progress. Break big work into small wins.",
    emailPlaceholderShort: "your@email.com",
    
    // Footer
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    copyright: "© 2026 Lighthouse. All rights reserved.",
  },
  
  ko: {
    // Header
    github: "GitHub",
    
    // Hero
    heroTitle: "큰 작업을\n작은 성취로",
    heroSubtitle: "AI가 막막한 프로젝트를 실행 가능한 단계로 바꿉니다.\n매일 무엇을 해야 할지 명확하게 알 수 있습니다.",
    emailPlaceholder: "이메일을 입력하세요",
    joinWaitlist: "대기자 등록",
    waitlistSuccess: "✓ 등록 완료!",
    waitlistSubtext: "출시 소식을 가장 먼저 받아보세요",
    
    // Problem Section
    problemTitle: "이런 적 있으신가요?",
    problem1Title: "큰 작업, 어디서부터 시작할지 막막함",
    problem1Desc: "할 일 앱에 \"새 프로젝트 시작\"이라고 적어놓고, 막상 화면만 바라보며 어디서부터 시작해야 할지 고민합니다.",
    problem2Title: "완료 기준이 불명확함",
    problem2Desc: "\"이 정도면 충분할까?\" \"더 해야 하나?\" 명확한 완료 기준이 없어서 언제 다음 단계로 넘어가야 할지 모릅니다.",
    problem3Title: "진행 없이 하루가 지나감",
    problem3Desc: "체크박스는 채우지만, 실제로 무엇을 성취했는지 보이지 않습니다. 눈에 보이는 성과도, 추진력도 없습니다.",
    
    // Solution Section
    solutionTitle: "Lighthouse가 길을 안내합니다",
    solutionSubtitle: "AI가 작업을 쪼개고, 하루를 계획하고, 성과를 추적합니다.",
    feature1Title: "스마트 작업 분해",
    feature1Desc: "AI가 \"새 프로젝트 시작\"을 명확한 완료 기준이 있는 30분~2시간 단위 작업으로 변환합니다.",
    feature2Title: "일일 계획 의식",
    feature2Desc: "3분 아침 체크인으로 우선순위를 설정합니다. 간단한 질문에 답하고, 하루 집중 계획을 받으세요.",
    feature3Title: "손쉬운 진행 추적",
    feature3Desc: "간단한 체크인이 자동으로 진행 로그를 만듭니다. 매일 무엇을 완료했는지 정확히 알 수 있습니다.",
    
    // How It Works
    howItWorksTitle: "작동 방식",
    step1Title: "큰 작업 입력",
    step1Desc: "막막한 것들을 추가하세요. \"2분기 전략 수립\", \"온보딩 재설계\", 머릿속에 있는 무엇이든.",
    step2Title: "AI가 분해",
    step2Desc: "명확한 결과물이 있는 30분~2시간 단위 작업을 받습니다. \"경쟁사 조사\", \"가격 모델 초안\", \"마케팅 채널 선택\".",
    step3Title: "실행 및 체크인",
    step3Desc: "진행하면서 표시하세요. 일일 회고가 자동으로 작성됩니다.",
    
    // CTA
    ctaTitle: "망설임을 멈추고\n실행을 시작하세요",
    ctaSubtitle: "Lighthouse가 정체를 진행으로 바꿉니다. 큰 작업을 작은 성취로.",
    emailPlaceholderShort: "your@email.com",
    
    // Footer
    privacy: "개인정보처리방침",
    terms: "이용약관",
    contact: "문의",
    copyright: "© 2026 Lighthouse. All rights reserved.",
  }
};

export const detectLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('ko') ? 'ko' : 'en';
};
