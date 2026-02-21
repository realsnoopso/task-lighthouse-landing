import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  en: {
    subject: "Welcome to Lighthouse! 🚢",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              line-height: 1.6;
              color: #262626;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fafafa;
            }
            .container {
              background: white;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .logo {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo-text {
              font-size: 24px;
              font-weight: 600;
              color: #171717;
            }
            h1 {
              font-size: 28px;
              font-weight: 300;
              color: #171717;
              margin-bottom: 20px;
            }
            p {
              color: #525252;
              margin-bottom: 16px;
            }
            .cta {
              background: #171717;
              color: white;
              padding: 14px 28px;
              border-radius: 9999px;
              text-decoration: none;
              display: inline-block;
              margin: 20px 0;
              font-weight: 500;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e5e5;
              color: #737373;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <div class="logo-text">Lighthouse</div>
            </div>
            
            <h1>Thanks for joining! 👋</h1>
            
            <p>You're now on the waitlist for Lighthouse — the AI tool that breaks big work into small wins.</p>
            
            <p>We're working hard to launch soon. When we do, you'll be among the first to know.</p>
            
            <p><strong>What's next?</strong></p>
            <ul>
              <li>We'll send you early access when it's ready</li>
              <li>Sneak peeks at new features</li>
              <li>Behind-the-scenes updates</li>
            </ul>
            
            <p>In the meantime, feel free to reply to this email with any questions or ideas!</p>
            
            <p>— The Lighthouse team</p>
            
            <div class="footer">
              Lighthouse · Break big work into small wins
            </div>
          </div>
        </body>
      </html>
    `
  },
  ko: {
    subject: "Lighthouse에 오신 것을 환영합니다! 🚢",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
              line-height: 1.6;
              color: #262626;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fafafa;
            }
            .container {
              background: white;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .logo {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo-text {
              font-size: 24px;
              font-weight: 600;
              color: #171717;
            }
            h1 {
              font-size: 28px;
              font-weight: 300;
              color: #171717;
              margin-bottom: 20px;
            }
            p {
              color: #525252;
              margin-bottom: 16px;
            }
            .cta {
              background: #171717;
              color: white;
              padding: 14px 28px;
              border-radius: 9999px;
              text-decoration: none;
              display: inline-block;
              margin: 20px 0;
              font-weight: 500;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e5e5;
              color: #737373;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <div class="logo-text">Lighthouse</div>
            </div>
            
            <h1>등록해주셔서 감사합니다! 👋</h1>
            
            <p>Lighthouse 대기자 리스트에 추가되셨습니다. 큰 작업을 작은 성취로 바꾸는 AI 도구를 곧 만나보실 수 있습니다.</p>
            
            <p>출시 준비 중이며, 준비되는 대로 가장 먼저 알려드리겠습니다.</p>
            
            <p><strong>앞으로의 계획:</strong></p>
            <ul>
              <li>출시 시 얼리 액세스 제공</li>
              <li>새로운 기능 미리보기</li>
              <li>개발 과정 업데이트</li>
            </ul>
            
            <p>궁금한 점이나 아이디어가 있으시면 언제든 이 이메일에 답장해주세요!</p>
            
            <p>— Lighthouse 팀 드림</p>
            
            <div class="footer">
              Lighthouse · 큰 작업을 작은 성취로
            </div>
          </div>
        </body>
      </html>
    `
  }
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, lang = 'en' } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Get template based on language
    const template = emailTemplates[lang] || emailTemplates.en;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Lighthouse <onboarding@resend.dev>',
      to: email,
      subject: template.subject,
      html: template.html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    // TODO: Store email in database/JSON file
    // For now, just log it
    console.log('Waitlist signup:', email, 'Lang:', lang);

    return res.status(200).json({ 
      success: true,
      message: 'Successfully joined waitlist',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
