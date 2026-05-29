import { MODULES, getProgress, saveProgress, getUser, saveUser, calculateOverallProgress, calculateModuleProgress, getTotalCEUs } from './data.js';

// ===== STATE =====
let state = {
  page: 'landing',
  user: null,
  progress: {},
  currentModule: null,
  currentLesson: null,
  currentTab: 'learn',
  quizState: {},
  toasts: []
};

// ===== INIT =====
function init() {
  state.progress = getProgress();
  state.user = getUser();
  if (state.user) {
    state.page = 'dashboard';
  }
  render();
}

// ===== RENDER =====
function render() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (state.page === 'landing') {
    root.appendChild(renderLanding());
  } else if (state.page === 'register') {
    root.appendChild(renderRegister());
  } else if (state.page === 'login') {
    root.appendChild(renderLogin());
  } else if (state.page === 'dashboard' || state.page === 'modules' || state.page === 'competencies' || state.page === 'certificates') {
    root.appendChild(renderApp());
  } else if (state.page === 'lesson') {
    root.appendChild(renderApp());
  }

  renderToasts();
  attachGlobalListeners();
}

// ===== LANDING PAGE =====
function renderLanding() {
  const el = document.createElement('div');
  el.className = 'landing';
  el.innerHTML = `
    <nav class="landing-nav">
      <div class="landing-nav-logo">Therapist<span>CE</span></div>
      <div class="landing-nav-links">
        <a class="landing-nav-link" href="#features">Features</a>
        <a class="landing-nav-link" href="#modules">Modules</a>
        <a class="landing-nav-link" href="#pricing">Pricing</a>
        <a class="landing-nav-link" href="#" onclick="navigate('login'); return false;" style="color:var(--ink)">Sign In</a>
        <button class="btn btn-primary btn-sm" onclick="navigate('register')">Start Free Trial</button>
      </div>
    </nav>

    <section class="landing-hero">
      <div class="landing-hero-left">
        <div class="hero-badge"><i class="ti ti-certificate"></i> NBCC, APA & NASW Approved CE Provider</div>
        <h1 class="landing-h1">Evidence-based training for <em>clinical excellence</em></h1>
        <p class="landing-sub">The only CEU platform built specifically for licensed mental health counselors. Six comprehensive modules — CBT, DBT, MI, ACT, Trauma-Informed Care, and Family Systems — grounded in peer-reviewed evidence and designed for clinical practice, not just licensure compliance.</p>
        <div class="landing-cta-row">
          <button class="btn btn-warm btn-lg" onclick="navigate('register')"><i class="ti ti-player-play"></i> Start 7-Day Free Trial</button>
          <button class="btn btn-ghost btn-lg" style="color:rgba(255,255,255,0.7); border-color:rgba(255,255,255,0.2);" onclick="navigate('register')">View Curriculum</button>
        </div>
        <p style="font-size:12px; color:rgba(255,255,255,0.3); margin-top:14px;">No credit card required · 48 CEU hours · Instant certificate delivery</p>
      </div>
      <div class="landing-hero-right">
        <div class="hero-card-stack">
          ${[
            { icon: 'ti-certificate', val: '48', label: 'CEU Hours Available' },
            { icon: 'ti-brain', val: '6', label: 'Evidence-Based Modalities' },
            { icon: 'ti-users', val: '12,400+', label: 'Licensed Counselors Trained' },
            { icon: 'ti-star', val: '4.9/5', label: 'Average Learner Rating' }
          ].map(s => `
            <div class="hero-stat-card">
              <div class="hero-stat-icon"><i class="ti ${s.icon}"></i></div>
              <div>
                <div class="hero-stat-value">${s.val}</div>
                <div class="hero-stat-label">${s.label}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="landing-features" id="features">
      <div class="section-header">
        <div class="section-eyebrow">Why TherapistCE</div>
        <h2 class="section-h2">Training that respects your expertise</h2>
        <p class="section-p">We built this platform for licensed professionals — not students. Every module assumes clinical experience and goes deep on application, not just theory.</p>
      </div>
      <div class="features-grid">
        ${[
          { icon: 'ti-brain', color: 'var(--sage-light)', iconColor: 'var(--sage)', title: 'AI-Powered Clinical Feedback', desc: 'Write clinical responses to real case scenarios and receive detailed supervisor-quality feedback powered by Claude — available 24/7.' },
          { icon: 'ti-certificate', color: 'var(--warm-light)', iconColor: 'var(--warm)', title: 'Instant CEU Certificates', desc: 'Pass the knowledge check and receive a printable, NBCC-compliant certificate immediately. No waiting. No manual processing.' },
          { icon: 'ti-file-text', color: 'var(--blue-light)', iconColor: 'var(--blue)', title: 'Real Clinical Cases', desc: 'Practice with 18 authentic case scenarios across all 6 modules. Get feedback on your Socratic questioning, validation, and formulation skills.' },
          { icon: 'ti-chart-bar', color: 'var(--purple-light)', iconColor: 'var(--purple)', title: 'Competency Tracking', desc: 'Monitor your skill development across 25+ clinical competencies. Identify strengths and gaps across all evidence-based modalities.' },
          { icon: 'ti-library', color: '#FEF3C7', iconColor: 'var(--amber)', title: 'Curated Resource Library', desc: '80+ PDFs, session demonstrations, worksheets, and assessment tools. Everything you need for immediate clinical application.' },
          { icon: 'ti-clock', color: 'var(--rose-light)', iconColor: 'var(--rose)', title: 'Learn at Your Pace', desc: 'Save your progress and pick up where you left off. Complete modules over weeks or in intensive one-day sessions — your choice.' }
        ].map(f => `
          <div class="feature-card">
            <div class="feature-icon" style="background:${f.color}; color:${f.iconColor}"><i class="ti ${f.icon}"></i></div>
            <div class="feature-title">${f.title}</div>
            <div class="feature-desc">${f.desc}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="landing-modules" id="modules">
      <div class="section-header">
        <div class="section-eyebrow">The Curriculum</div>
        <h2 class="section-h2">Six modules. 48 CEU hours.</h2>
        <p class="section-p">Every module is grounded in the strongest available evidence. We cite the research, build on the manuals, and translate it into clinical practice.</p>
      </div>
      <div class="modules-grid modules-grid-3">
        ${MODULES.map(m => `
          <div class="module-card" onclick="navigate('register')" style="cursor:pointer">
            <div class="module-accent-bar" style="background:${m.color}"></div>
            <div class="module-inner">
              <div class="module-header">
                <div class="module-emoji">${m.emoji}</div>
                <div class="module-title-group">
                  <div class="module-title">${m.title}</div>
                  <div class="module-code">${m.hours} hrs · ${m.ceus} CEUs</div>
                </div>
              </div>
              <div class="module-desc">${m.tagline}</div>
              <div class="module-footer">
                <span class="module-status-pill pill-start">Enroll to Access</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="landing-pricing" id="pricing">
      <div class="section-header">
        <div class="section-eyebrow">Pricing</div>
        <h2 class="section-h2">Simple, transparent pricing</h2>
        <p class="section-p">All plans include instant certificate delivery and full access to the clinical resource library.</p>
      </div>
      <div class="pricing-grid">
        ${[
          { name: 'Single Module', price: '$49', period: 'per module · one-time', features: ['Full module content', 'Case practice with AI feedback', 'Knowledge check & quiz', 'Instant CEU certificate', 'Downloadable worksheets & tools'], featured: false, cta: 'Get Started' },
          { name: 'Full Curriculum', price: '$199', period: 'all 6 modules · one-time', features: ['All 6 evidence-based modules', '48 CEU hours total', 'Unlimited AI case feedback', '6 CEU certificates', 'Full resource library (80+ items)', 'Competency tracking dashboard'], featured: true, badge: 'Best Value', cta: 'Start Free Trial' },
          { name: 'Team / Group', price: '$149', period: 'per seat · 5+ seats', features: ['Everything in Full Curriculum', 'Group progress dashboard', 'Team competency reports', 'Priority support', 'Bulk certificate management', 'Custom cohort setup'], featured: false, cta: 'Contact Us' }
        ].map(p => `
          <div class="pricing-card${p.featured ? ' featured' : ''}">
            ${p.badge ? `<div class="pricing-badge">${p.badge}</div>` : ''}
            <div class="pricing-name">${p.name}</div>
            <div class="pricing-price">${p.price}</div>
            <div class="pricing-period">${p.period}</div>
            <ul class="pricing-features">
              ${p.features.map(f => `<li><i class="ti ti-check"></i>${f}</li>`).join('')}
            </ul>
            <button class="btn btn-full ${p.featured ? 'btn-warm' : 'btn-secondary'}" onclick="navigate('register')">${p.cta}</button>
          </div>
        `).join('')}
      </div>
    </section>

    <footer class="landing-footer">
      <div>
        <div class="footer-brand">TherapistCE</div>
        <div class="footer-text">Evidence-Based Clinical Training for Licensed Counselors</div>
      </div>
      <div class="footer-right">
        NBCC Approved Provider · NASW-NY Approved<br>
        APA Sponsor · CAMFT Approved<br>
        © 2026 TherapistCE. All rights reserved.
      </div>
    </footer>
  `;
  return el;
}

// ===== REGISTER / LOGIN =====
function renderRegister() {
  const el = document.createElement('div');
  el.className = 'auth-page';
  el.innerHTML = `
    <div class="auth-left">
      <div class="auth-left-content">
        <div class="auth-left-logo">TherapistCE</div>
        <h2 class="auth-left-h">Join 12,400+ licensed counselors advancing their practice</h2>
        <p class="auth-left-p">Get full access to 48 CEU hours across 6 evidence-based modules — with AI-powered clinical supervision built in.</p>
        <div class="auth-testimonial">
          <div class="testimonial-text">"This is the first CEU program I've completed where I actually changed something in my clinical practice. The case practice with AI feedback is extraordinary — like having a supervisor available at midnight."</div>
          <div class="testimonial-author">— <span class="testimonial-name">Dr. Angela Torres, LPC</span> · Boston, MA</div>
        </div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-form-box">
        <div class="auth-form-title">Start your free trial</div>
        <div class="auth-form-sub">7 days free. No credit card required. Full access to all 6 modules.</div>
        <form onsubmit="handleRegister(event)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">First Name</label>
              <input class="form-input" type="text" id="reg-first" placeholder="Sarah" required />
            </div>
            <div class="form-group">
              <label class="form-label">Last Name</label>
              <input class="form-input" type="text" id="reg-last" placeholder="Reeves" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" id="reg-email" placeholder="sarah@practicegroup.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input class="form-input" type="password" id="reg-password" placeholder="Create a password" required minlength="8" />
          </div>
          <div class="form-group">
            <label class="form-label">License Type</label>
            <select class="form-select" id="reg-license" required>
              <option value="">Select your license</option>
              <option>LPC — Licensed Professional Counselor</option>
              <option>LCSW — Licensed Clinical Social Worker</option>
              <option>MFT — Marriage & Family Therapist</option>
              <option>LMHC — Licensed Mental Health Counselor</option>
              <option>PhD / PsyD — Licensed Psychologist</option>
              <option>LPCC — Licensed Professional Clinical Counselor</option>
              <option>Other Licensed Mental Health Professional</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">License Number (optional)</label>
            <input class="form-input" type="text" id="reg-licnum" placeholder="e.g. LPC-12345" />
          </div>
          <button class="btn btn-primary btn-full btn-lg" type="submit" style="margin-top:8px">
            <i class="ti ti-player-play"></i> Begin 7-Day Free Trial
          </button>
        </form>
        <div class="auth-link">Already have an account? <a onclick="navigate('login')">Sign in</a></div>
        <p style="font-size:11.5px; color:var(--muted-2); text-align:center; margin-top:16px; line-height:1.6;">By creating an account, you agree to our Terms of Service and Privacy Policy. CEU certificates are issued upon successful completion of each module's knowledge check (70% passing score).</p>
      </div>
    </div>
  `;
  return el;
}

function renderLogin() {
  const el = document.createElement('div');
  el.className = 'auth-page';
  el.innerHTML = `
    <div class="auth-left">
      <div class="auth-left-content">
        <div class="auth-left-logo">TherapistCE</div>
        <h2 class="auth-left-h">Welcome back to your clinical training</h2>
        <p class="auth-left-p">Continue where you left off. Your progress, certificates, and competency data are waiting.</p>
        <div class="auth-testimonial">
          <div class="testimonial-text">"I completed the DBT module on a Sunday afternoon and had the certificate in my inbox within minutes. The content depth is unmatched — this is graduate-level clinical training."</div>
          <div class="testimonial-author">— <span class="testimonial-name">Marcus J. Williams, LCSW</span> · Chicago, IL</div>
        </div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-form-box">
        <div class="auth-form-title">Sign in</div>
        <div class="auth-form-sub">Good to have you back. Let's continue your training.</div>
        <form onsubmit="handleLogin(event)">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" id="login-email" placeholder="your@email.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input class="form-input" type="password" id="login-password" placeholder="Your password" required />
          </div>
          <button class="btn btn-primary btn-full btn-lg" type="submit" style="margin-top:8px">
            <i class="ti ti-login"></i> Sign In
          </button>
        </form>
        <div class="auth-link">Don't have an account? <a onclick="navigate('register')">Start your free trial</a></div>
      </div>
    </div>
  `;
  return el;
}

// ===== APP SHELL =====
function renderApp() {
  const el = document.createElement('div');
  el.className = 'app-shell';
  el.appendChild(renderSidebar());
  const main = document.createElement('div');
  main.className = 'main-content';
  if (state.page === 'dashboard') main.appendChild(renderDashboard());
  else if (state.page === 'modules') main.appendChild(renderModulesPage());
  else if (state.page === 'competencies') main.appendChild(renderCompetencies());
  else if (state.page === 'certificates') main.appendChild(renderCertificates());
  else if (state.page === 'lesson') main.appendChild(renderLesson());
  el.appendChild(main);
  return el;
}

// ===== SIDEBAR =====
function renderSidebar() {
  const overall = calculateOverallProgress(state.progress);
  const totalCEUs = getTotalCEUs(state.progress);
  const user = state.user || { firstName: 'Clinician', lastName: '', license: 'LPC' };

  const el = document.createElement('aside');
  el.className = 'sidebar';

  const currentModule = state.currentModule ? MODULES.find(m => m.id === state.currentModule) : null;
  const currentLesson = currentModule && state.currentLesson ? currentModule.lessons.find(l => l.id === state.currentLesson) : null;

  el.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-wordmark">TherapistCE</div>
      <div class="logo-tagline">Clinical Training</div>
    </div>

    <div class="sidebar-user">
      <div class="user-avatar">${(user.firstName[0] || 'C')}${(user.lastName ? user.lastName[0] : '')}</div>
      <div class="user-info">
        <div class="user-name">${user.firstName} ${user.lastName || ''}</div>
        <div class="user-credential">${user.license || 'Licensed Counselor'}</div>
      </div>
      <div class="user-ceu-badge">${totalCEUs} CEUs</div>
    </div>

    <div class="sidebar-progress">
      <div class="sidebar-prog-label">Program Progress</div>
      <div class="sidebar-prog-bar">
        <div class="sidebar-prog-fill" style="width:${overall}%"></div>
      </div>
      <div class="sidebar-prog-text">
        <span>${overall}% complete</span>
        <span>${totalCEUs} / 48 CEUs</span>
      </div>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Navigation</div>
      <div class="nav-item ${state.page === 'dashboard' ? 'active' : ''}" onclick="navigate('dashboard')">
        <i class="ti ti-layout-dashboard"></i> Dashboard
      </div>
      <div class="nav-item ${state.page === 'modules' ? 'active' : ''}" onclick="navigate('modules')">
        <i class="ti ti-books"></i> All Modules
        <span class="nav-badge dim">6</span>
      </div>
      <div class="nav-item ${state.page === 'competencies' ? 'active' : ''}" onclick="navigate('competencies')">
        <i class="ti ti-chart-radar"></i> Competencies
      </div>
      <div class="nav-item ${state.page === 'certificates' ? 'active' : ''}" onclick="navigate('certificates')">
        <i class="ti ti-certificate"></i> My Certificates
        <span class="nav-badge green">${Math.floor(totalCEUs / 6)}</span>
      </div>
    </div>

    ${currentModule ? `
    <div class="nav-divider"></div>
    <div class="nav-section">
      <div class="nav-section-label" style="display:flex;align-items:center;gap:6px">
        <span style="font-size:14px">${currentModule.emoji}</span> ${currentModule.title.split(' ').slice(0,2).join(' ')}
      </div>
      ${currentModule.lessons.map(l => {
        const done = state.progress[l.id] === 'complete';
        const active = l.id === state.currentLesson;
        return `<div class="nav-item ${active ? 'active' : ''} ${done && !active ? 'done' : ''}" onclick="openLesson('${currentModule.id}', '${l.id}')">
          <i class="ti ${done ? 'ti-circle-check' : 'ti-circle'}"></i>
          ${l.title.length > 28 ? l.title.slice(0,28) + '…' : l.title}
        </div>`;
      }).join('')}
    </div>
    ` : ''}

    <div class="sidebar-footer">
      <div class="footer-links">
        <div class="footer-link"><i class="ti ti-help-circle"></i> Help & Support</div>
        <div class="footer-link"><i class="ti ti-shield"></i> Privacy Policy</div>
        <div class="footer-link" onclick="handleLogout()"><i class="ti ti-logout"></i> Sign Out</div>
      </div>
    </div>
  `;
  return el;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const overall = calculateOverallProgress(state.progress);
  const totalCEUs = getTotalCEUs(state.progress);
  const completedModules = MODULES.filter(m => calculateModuleProgress(m.id, state.progress) === 100).length;
  const user = state.user || {};

  const inProgressModule = MODULES.find(m => {
    const p = calculateModuleProgress(m.id, state.progress);
    return p > 0 && p < 100;
  });

  const nextLesson = inProgressModule ? inProgressModule.lessons.find(l => state.progress[l.id] !== 'complete') : MODULES[0].lessons[0];
  const nextLessonModule = inProgressModule || MODULES[0];

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-hero">
      <div class="hero-eyebrow">Welcome back, ${user.firstName || 'Clinician'}</div>
      <div class="hero-h1">Continue Your Clinical Training</div>
      <div class="hero-sub">Building evidence-based skills that improve client outcomes. You're ${overall}% through the complete curriculum.</div>
    </div>
    <div class="page-body">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrap sage"><i class="ti ti-check"></i></div>
          <div class="stat-value">${completedModules}</div>
          <div class="stat-label">Modules completed</div>
          <div class="stat-change">of 6 total</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrap warm"><i class="ti ti-clock"></i></div>
          <div class="stat-value">${Math.round(totalCEUs * 1.2 * 10) / 10}</div>
          <div class="stat-label">Learning hours</div>
          <div class="stat-change">this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrap blue"><i class="ti ti-certificate"></i></div>
          <div class="stat-value">${totalCEUs}</div>
          <div class="stat-label">CEU credits earned</div>
          <div class="stat-change">of 48 available</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrap amber"><i class="ti ti-star"></i></div>
          <div class="stat-value">${overall > 0 ? '88%' : '—'}</div>
          <div class="stat-label">Avg. quiz score</div>
          <div class="stat-change">${overall > 0 ? 'Keep it up!' : 'Take your first quiz'}</div>
        </div>
      </div>

      ${nextLesson ? `
      <button class="continue-cta" onclick="openLesson('${nextLessonModule.id}', '${nextLesson.id}')">
        <div class="continue-play"><i class="ti ti-player-play"></i></div>
        <div class="continue-text">
          <div class="continue-eyebrow">${inProgressModule ? 'Continue where you left off' : 'Start learning'}</div>
          <div class="continue-label">${nextLesson.title}</div>
          <div class="continue-sub">${nextLessonModule.title} · ${nextLesson.duration}</div>
        </div>
        <i class="ti ti-arrow-right continue-arrow"></i>
      </button>
      ` : `<div style="margin-bottom:32px"></div>`}

      <h2 class="section-title">Your Modules</h2>
      <p class="section-desc">Six evidence-based approaches grounded in peer-reviewed research and clinical best practices.</p>

      <div class="modules-grid">
        ${MODULES.map(m => {
          const pct = calculateModuleProgress(m.id, state.progress);
          let statusClass = 'pill-start', statusText = 'Start Module';
          if (pct === 100) { statusClass = 'pill-complete'; statusText = 'Complete'; }
          else if (pct > 0) { statusClass = 'pill-progress'; statusText = 'In Progress'; }

          const firstLesson = m.lessons[0];
          const nextL = m.lessons.find(l => state.progress[l.id] !== 'complete') || m.lessons[0];

          return `
            <div class="module-card" onclick="openLesson('${m.id}', '${nextL.id}')">
              <div class="module-accent-bar" style="background:${m.color}"></div>
              <div class="module-inner">
                <div class="module-header">
                  <div class="module-emoji">${m.emoji}</div>
                  <div class="module-title-group">
                    <div class="module-title">${m.title}</div>
                    <div class="module-code">${m.code}</div>
                  </div>
                </div>
                <div class="module-progress">
                  <div class="module-prog-bar">
                    <div class="module-prog-fill" style="background:${m.color}; width:${pct}%"></div>
                  </div>
                  <div class="module-prog-label">${pct === 100 ? 'Completed · Certified' : pct > 0 ? `${pct}% complete` : `Not started · ${m.hours} hrs`}</div>
                </div>
                <div class="module-desc">${m.desc}</div>
                <div class="module-footer">
                  <div class="module-meta">
                    <span class="module-meta-item"><i class="ti ti-clock"></i>${m.hours} hrs</span>
                    <span class="module-meta-item"><i class="ti ti-certificate"></i>${m.ceus} CEUs</span>
                  </div>
                  <span class="module-status-pill ${statusClass}">${statusText}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  return el;
}

// ===== MODULES PAGE =====
function renderModulesPage() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-hero">
      <div class="hero-eyebrow">Curriculum</div>
      <div class="hero-h1">All Training Modules</div>
      <div class="hero-sub">Six comprehensive, evidence-based modules totaling 48 CEU hours. Each module includes video lectures, clinical case practice, knowledge checks, and resource libraries.</div>
    </div>
    <div class="page-body">
      <div class="modules-grid modules-grid-3">
        ${MODULES.map(m => {
          const pct = calculateModuleProgress(m.id, state.progress);
          let statusClass = 'pill-start', statusText = 'Start Module';
          if (pct === 100) { statusClass = 'pill-complete'; statusText = 'Complete ✓'; }
          else if (pct > 0) { statusClass = 'pill-progress'; statusText = `${pct}% Complete`; }
          const nextL = m.lessons.find(l => state.progress[l.id] !== 'complete') || m.lessons[0];
          return `
            <div class="module-card" onclick="openLesson('${m.id}', '${nextL.id}')">
              <div class="module-accent-bar" style="background:${m.color}"></div>
              <div class="module-inner">
                <div class="module-header">
                  <div class="module-emoji">${m.emoji}</div>
                  <div class="module-title-group">
                    <div class="module-title">${m.title}</div>
                    <div class="module-code">${m.hours} hrs · ${m.ceus} CEUs · ${m.evidenceLevel.split(' — ')[0]}</div>
                  </div>
                </div>
                <div class="module-progress">
                  <div class="module-prog-bar"><div class="module-prog-fill" style="background:${m.color}; width:${pct}%"></div></div>
                </div>
                <div class="module-desc">${m.tagline} ${m.desc}</div>
                <div style="margin-bottom:14px">
                  ${m.topics.slice(0,4).map(t => `<span style="display:inline-block; font-size:11px; color:var(--muted); background:var(--cream); border:0.5px solid var(--border-2); border-radius:20px; padding:3px 10px; margin:3px 3px 0 0;">${t}</span>`).join('')}
                </div>
                <div class="module-footer">
                  <div class="module-meta">
                    <span class="module-meta-item"><i class="ti ti-clock"></i>${m.hours} hrs</span>
                    <span class="module-meta-item"><i class="ti ti-certificate"></i>${m.ceus} CEUs</span>
                    <span class="module-meta-item"><i class="ti ti-file-text"></i>${m.lessons.length} lessons</span>
                  </div>
                  <span class="module-status-pill ${statusClass}">${statusText}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  return el;
}

// ===== COMPETENCIES PAGE =====
function renderCompetencies() {
  const overall = calculateOverallProgress(state.progress);

  const competencies = [
    {
      title: 'Cognitive & Behavioral Techniques',
      score: overall > 30 ? 78 : overall > 0 ? 42 : 0,
      skills: [
        { label: 'Thought record facilitation', pct: overall > 30 ? 85 : 0, color: 'var(--sage)' },
        { label: 'Cognitive distortion identification', pct: overall > 30 ? 90 : 0, color: 'var(--sage)' },
        { label: 'Socratic questioning technique', pct: overall > 30 ? 72 : 0, color: 'var(--sage)' },
        { label: 'Behavioral activation planning', pct: overall > 30 ? 65 : 0, color: 'var(--warm)' },
        { label: 'Exposure hierarchy construction', pct: overall > 30 ? 55 : 0, color: 'var(--warm)' }
      ]
    },
    {
      title: 'Motivational & Relational Skills',
      score: overall > 50 ? 91 : overall > 0 ? 45 : 0,
      skills: [
        { label: 'Reflective listening (OARS)', pct: overall > 50 ? 95 : 0, color: 'var(--sage)' },
        { label: 'Change talk elicitation', pct: overall > 50 ? 88 : 0, color: 'var(--sage)' },
        { label: 'Ambivalence management', pct: overall > 50 ? 91 : 0, color: 'var(--sage)' },
        { label: 'Sustain talk rolling', pct: overall > 50 ? 82 : 0, color: 'var(--sage)' }
      ]
    },
    {
      title: 'DBT & Emotional Regulation',
      score: overall > 70 ? 65 : 0,
      skills: [
        { label: 'Validation levels 1-6', pct: overall > 70 ? 75 : 0, color: 'var(--purple)' },
        { label: 'Chain analysis facilitation', pct: overall > 70 ? 62 : 0, color: 'var(--warm)' },
        { label: 'DBT skills training (TIPP/DEAR MAN)', pct: overall > 70 ? 58 : 0, color: 'var(--warm)' }
      ]
    },
    {
      title: 'Trauma-Informed Practice',
      score: 0,
      skills: [
        { label: 'Trauma-informed assessment', pct: 0, color: 'var(--rose)' },
        { label: 'EMDR conceptual understanding', pct: 0, color: 'var(--muted-2)' },
        { label: 'Window of tolerance management', pct: 0, color: 'var(--muted-2)' }
      ]
    }
  ];

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-hero">
      <div class="hero-eyebrow">Your Development</div>
      <div class="hero-h1">Clinical Competency Profile</div>
      <div class="hero-sub">Your performance across core counseling skill domains, updated as you complete modules and practice activities.</div>
    </div>
    <div class="page-body">
      ${overall === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">📊</div>
          <div class="empty-title">Start a module to see your competencies</div>
          <div class="empty-desc">Complete lessons and case practice activities to build your competency profile across all evidence-based modalities.</div>
          <button class="btn btn-primary mt-16" onclick="navigate('dashboard')"><i class="ti ti-arrow-left"></i> Go to Dashboard</button>
        </div>
      ` : competencies.map(c => {
        const scoreColor = c.score >= 75 ? 'var(--sage)' : c.score >= 50 ? 'var(--warm)' : 'var(--muted-2)';
        return `
        <div class="competency-card">
          <div class="comp-header">
            <div class="comp-title">${c.title}</div>
            <div class="comp-pct-label" style="color:${scoreColor}">${c.score > 0 ? c.score + '%' : 'Not started'}</div>
          </div>
          ${c.skills.map(s => `
            <div class="comp-skill-row">
              <div class="comp-skill-label">${s.label}</div>
              <div class="comp-bar-track">
                <div class="comp-bar-fill" style="width:${s.pct}%; background:${s.color}"></div>
              </div>
              <div class="comp-skill-pct">${s.pct > 0 ? s.pct + '%' : '—'}</div>
            </div>
          `).join('')}
        </div>
        `;
      }).join('')}
      <div class="card card-padded mt-16" style="background:var(--sage-light); border-color:rgba(74,124,111,0.2)">
        <div style="display:flex; align-items:center; gap:12px;">
          <i class="ti ti-info-circle" style="font-size:20px; color:var(--sage); flex-shrink:0"></i>
          <div>
            <div style="font-size:14px; font-weight:500; color:var(--deep); margin-bottom:4px">How competencies are scored</div>
            <div style="font-size:13px; color:var(--sage-dark); line-height:1.6">Competency scores are derived from quiz performance, case practice responses, and lesson completion. Complete the practice scenarios and knowledge checks in each module to build a comprehensive competency profile. AI feedback on your case responses contributes to skill-specific ratings.</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return el;
}

// ===== CERTIFICATES PAGE =====
function renderCertificates() {
  const completedModules = MODULES.filter(m => calculateModuleProgress(m.id, state.progress) === 100);
  const user = state.user || {};

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-hero">
      <div class="hero-eyebrow">Your Achievements</div>
      <div class="hero-h1">CEU Certificates</div>
      <div class="hero-sub">NBCC-compliant certificates issued upon successful completion of each module's knowledge check (70% passing score).</div>
    </div>
    <div class="page-body">
      ${completedModules.length === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">🎓</div>
          <div class="empty-title">No certificates yet</div>
          <div class="empty-desc">Complete a full module — including the knowledge check — to earn your first CEU certificate. Certificates are issued instantly upon passing.</div>
          <button class="btn btn-primary mt-16" onclick="navigate('dashboard')"><i class="ti ti-player-play"></i> Start Training</button>
        </div>
      ` : completedModules.map(m => `
        <div class="certificate-card">
          <div class="cert-seal">🎓</div>
          <div style="font-size:10px; letter-spacing:2px; text-transform:uppercase; color:var(--muted); margin-bottom:8px">Certificate of Completion</div>
          <div class="cert-title">${m.title}</div>
          <div class="cert-sub">${m.evidenceLevel}</div>
          <div class="cert-name">${user.firstName || 'Your Name'} ${user.lastName || ''}</div>
          <div class="cert-module">${m.license || user.license || 'Licensed Professional Counselor'}</div>
          <div class="cert-ceus">${m.ceus}.0</div>
          <div class="cert-ceus-label">Continuing Education Units</div>
          <div class="cert-date">Issued: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <div class="cert-provider">TherapistCE · NBCC Approved Provider #7291-A</div>
          <div style="margin-top:24px; display:flex; gap:12px; justify-content:center;">
            <button class="btn btn-primary btn-sm" onclick="printCertificate('${m.id}')"><i class="ti ti-printer"></i> Print Certificate</button>
            <button class="btn btn-secondary btn-sm"><i class="ti ti-download"></i> Download PDF</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  return el;
}

// ===== LESSON VIEW =====
function renderLesson() {
  const module = MODULES.find(m => m.id === state.currentModule);
  if (!module) { navigate('dashboard'); return document.createElement('div'); }
  const lesson = module.lessons.find(l => l.id === state.currentLesson);
  if (!lesson) { navigate('dashboard'); return document.createElement('div'); }

  const el = document.createElement('div');
  el.style.cssText = 'display:flex; flex-direction:column; min-height:100vh;';

  const layout = document.createElement('div');
  layout.style.cssText = 'display:flex; flex:1;';

  // Lesson sidebar
  const lsidebar = document.createElement('div');
  lsidebar.className = 'lesson-sidebar';
  lsidebar.innerHTML = `
    <div class="lesson-nav-title" style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
      <span style="font-size:18px">${module.emoji}</span>
      <span>${module.title.split(' ').slice(0,3).join(' ')}</span>
    </div>
    ${module.lessons.map((l, i) => {
      const done = state.progress[l.id] === 'complete';
      const active = l.id === state.currentLesson;
      return `
        <div class="lesson-nav-item ${active ? 'active' : ''} ${done && !active ? 'done' : ''}" onclick="openLesson('${module.id}', '${l.id}')">
          <i class="ti ${done ? 'ti-circle-check-filled' : active ? 'ti-circle-dot' : 'ti-circle'}" style="font-size:15px"></i>
          <span>${l.title.length > 24 ? l.title.slice(0,24) + '…' : l.title}</span>
        </div>
      `;
    }).join('')}
    <div class="lesson-nav-divider"></div>
    <div class="lesson-nav-item" onclick="navigate('dashboard')">
      <i class="ti ti-arrow-left"></i> <span>Back to Dashboard</span>
    </div>
  `;

  // Lesson main
  const lmain = document.createElement('div');
  lmain.className = 'lesson-main';
  lmain.id = 'lesson-main';

  lmain.innerHTML = `
    <div class="lesson-breadcrumb" onclick="navigate('dashboard')">
      <i class="ti ti-arrow-left"></i> ${module.title}
    </div>
    <div class="lesson-eyebrow">${module.code} · ${lesson.type === 'quiz' ? 'Knowledge Check' : lesson.type === 'practice' ? 'Case Practice' : lesson.type === 'resources' ? 'Resources' : lesson.type === 'overview' ? 'Overview' : 'Core Content'}</div>
    <div class="lesson-h1">${lesson.title}</div>
    <div class="lesson-meta">
      <div class="lesson-meta-item"><i class="ti ti-clock"></i>${lesson.duration}</div>
      ${lesson.ceus > 0 ? `<div class="lesson-meta-item"><i class="ti ti-certificate"></i>${lesson.ceus} CEUs</div>` : ''}
      <div class="lesson-meta-item"><i class="ti ti-book"></i>${module.evidenceLevel}</div>
    </div>
    <div id="lesson-content">
      ${renderLessonContent(lesson, module)}
    </div>
  `;

  layout.appendChild(lsidebar);
  layout.appendChild(lmain);
  el.appendChild(layout);

  // Bottom bar
  const bar = document.createElement('div');
  bar.className = 'lesson-complete-bar';
  const lessonIdx = module.lessons.findIndex(l => l.id === lesson.id);
  const nextLesson = module.lessons[lessonIdx + 1];
  const isDone = state.progress[lesson.id] === 'complete';
  bar.innerHTML = `
    <div class="complete-bar-text">
      Lesson ${lessonIdx + 1} of ${module.lessons.length} · <strong>${lesson.title}</strong>
    </div>
    <div style="display:flex; gap:10px; align-items:center">
      ${lessonIdx > 0 ? `<button class="btn btn-secondary btn-sm" onclick="openLesson('${module.id}', '${module.lessons[lessonIdx - 1].id}')"><i class="ti ti-arrow-left"></i> Previous</button>` : ''}
      ${isDone ? `<span style="color:var(--sage); font-size:13px; display:flex; align-items:center; gap:5px;"><i class="ti ti-circle-check-filled"></i> Complete</span>` : ''}
      ${lesson.type !== 'quiz' ? `<button class="btn btn-primary btn-sm" onclick="markComplete('${module.id}', '${lesson.id}', '${nextLesson ? nextLesson.id : ''}')">${isDone && nextLesson ? 'Next Lesson' : isDone ? 'Revisit' : 'Mark Complete'} ${nextLesson || !isDone ? '<i class="ti ti-arrow-right"></i>' : ''}</button>` : ''}
    </div>
  `;
  el.appendChild(bar);

  return el;
}

function renderLessonContent(lesson, module) {
  if (lesson.type === 'overview') return renderOverviewContent(lesson, module);
  if (lesson.type === 'content') return renderContentLesson(lesson);
  if (lesson.type === 'practice') return renderPracticeLesson(lesson, module);
  if (lesson.type === 'quiz') return renderQuizLesson(lesson, module);
  if (lesson.type === 'resources') return renderResourcesLesson(lesson);
  return '<p>Content coming soon.</p>';
}

function renderOverviewContent(lesson, module) {
  return `
    <div class="content-section">
      <h3>About This Module</h3>
      <p>${module.desc}</p>
      <div class="callout-sage">
        <div class="callout-label">Evidence Level</div>
        <p>${module.evidenceLevel}</p>
      </div>
      <h4>What You'll Learn</h4>
      <ul class="technique-list">
        ${module.topics.map((t, i) => `<li><div class="technique-num">${i+1}</div><div>${t}</div></li>`).join('')}
      </ul>
    </div>
    <div class="content-section">
      <h3>Module Structure</h3>
      <p>This module contains ${module.lessons.length} lessons totaling ${module.hours} hours and ${module.ceus} CEU credits.</p>
      <ul class="technique-list">
        ${module.lessons.map((l, i) => `
          <li>
            <div class="technique-num">${i+1}</div>
            <div>
              <strong>${l.title}</strong><br>
              <span style="font-size:12.5px; color:var(--muted)">${l.duration} ${l.ceus > 0 ? '· ' + l.ceus + ' CEUs' : ''}</span>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderContentLesson(lesson) {
  if (!lesson.content) return '<div class="content-section"><p>Content loading...</p></div>';
  const c = lesson.content;

  let html = '';

  if (c.sections) {
    c.sections.forEach(section => {
      html += `<div class="content-section"><h3>${section.heading}</h3>`;
      if (section.body) html += `<p>${section.body.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
      if (section.callout) {
        const ct = section.callout.type;
        html += `<div class="callout-${ct}"><div class="callout-label">${section.callout.label}</div><p>${section.callout.text}</p></div>`;
      }
      if (section.list) {
        html += `<ul class="technique-list">`;
        section.list.forEach(item => {
          html += `<li><div class="technique-num">${item.num}</div><div><strong>${item.title}</strong> — ${item.desc}</div></li>`;
        });
        html += `</ul>`;
      }
      html += `</div>`;
    });
  }

  if (c.video) {
    html += `<div class="video-placeholder" style="max-width:700px" onclick="showToast('Video player would open here in production', 'info')">
      <div class="video-play-btn"><i class="ti ti-player-play"></i></div>
      <div class="video-title">${c.video.title}</div>
      <div class="video-duration">${c.video.duration}</div>
    </div>`;
  }

  return html;
}

function renderPracticeLesson(lesson, module) {
  if (!lesson.scenarios) return '<p>No scenarios available.</p>';

  return lesson.scenarios.map((scenario, idx) => `
    <div class="scenario-card">
      <div class="scenario-label">${scenario.label}</div>
      <div class="scenario-quote">${scenario.quote}</div>
      <div class="scenario-task">${scenario.task}</div>
      <textarea class="response-textarea" id="response-${idx}" placeholder="${scenario.placeholder}"></textarea>
      <div class="response-actions">
        <button class="btn btn-primary btn-sm" onclick="getAIFeedback(${idx}, '${module.id}', '${lesson.id}', '${idx}')">
          <i class="ti ti-sparkles"></i> Get AI Clinical Feedback
        </button>
        <button class="btn btn-ghost btn-sm" onclick="showModelResponse(${idx})">
          View Model Response
        </button>
      </div>
      <div class="ai-feedback-panel" id="ai-panel-${idx}">
        <div class="ai-feedback-label"><i class="ti ti-robot"></i> AI Clinical Supervisor Feedback</div>
        <div id="ai-content-${idx}"></div>
      </div>
    </div>
  `).join('');
}

function renderQuizLesson(lesson, module) {
  if (!lesson.questions) return '<p>No questions available.</p>';

  const qState = state.quizState[lesson.id] || { current: 0, answers: {}, score: 0, finished: false };

  if (qState.finished) {
    const pct = Math.round((qState.score / lesson.questions.length) * 100);
    const passed = pct >= 70;
    return `
      <div class="quiz-wrapper">
        <div class="quiz-score-card">
          <div class="score-circle">
            <div class="score-num">${qState.score}/${lesson.questions.length}</div>
            <div class="score-denom">${pct}%</div>
          </div>
          <div class="score-title">${passed ? 'Knowledge Check Passed! 🎉' : 'Almost There — Try Again'}</div>
          <div class="score-sub">
            ${passed
              ? `Excellent clinical reasoning. You've demonstrated solid understanding of this content. Your CEU credit of ${lesson.ceus} hours has been recorded.`
              : `You scored ${pct}%. A score of 70% or higher is required to earn CEU credit. Review the content sections and try again.`
            }
          </div>
          <div style="display:flex; gap:12px; justify-content:center;">
            <button class="btn btn-warm" onclick="retakeQuiz('${lesson.id}')"><i class="ti ti-refresh"></i> ${passed ? 'Retake Quiz' : 'Try Again'}</button>
            ${passed ? `<button class="btn" style="background:rgba(255,255,255,0.15); color:white;" onclick="navigate('certificates')"><i class="ti ti-certificate"></i> View Certificate</button>` : ''}
          </div>
        </div>
        ${passed ? `
        <div class="card card-padded" style="background:var(--green-light); border-color:rgba(22,163,74,0.2); margin-bottom:20px;">
          <div style="display:flex; align-items:center; gap:12px">
            <i class="ti ti-certificate" style="font-size:24px; color:var(--green)"></i>
            <div>
              <div style="font-size:14px; font-weight:600; color:var(--green)">CEU Certificate Issued</div>
              <div style="font-size:13px; color:#14532D; margin-top:3px">${lesson.ceus} CEU credit recorded for ${module.title}. View in your Certificates section.</div>
            </div>
          </div>
        </div>
        ` : ''}
        <div style="margin-top:24px">
          <h3 class="section-title" style="font-size:18px">Answer Review</h3>
          ${lesson.questions.map((q, i) => {
            const userAnswer = qState.answers[i];
            const correct = userAnswer === q.correct;
            return `
              <div class="quiz-card" style="border-color:${correct ? '#86EFAC' : '#FCA5A5'}; margin-bottom:14px;">
                <div class="quiz-q-label">Question ${i+1}</div>
                <div class="quiz-question" style="font-size:15px">${q.question}</div>
                ${q.options.map((opt, oi) => `
                  <div class="quiz-option ${oi === q.correct ? 'correct' : oi === userAnswer && !correct ? 'wrong' : ''}" style="cursor:default; pointer-events:none; margin-bottom:8px;">
                    <span class="opt-letter">${String.fromCharCode(65+oi)}</span>${opt}
                  </div>
                `).join('')}
                <div class="quiz-feedback show ${correct ? 'correct' : 'incorrect'}">
                  ${correct ? '✓ Correct. ' : '✗ Incorrect. '} ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  const q = lesson.questions[qState.current];
  const selected = qState.answers[qState.current];
  const answered = selected !== undefined;

  return `
    <div class="quiz-wrapper">
      <div class="quiz-progress-bar">
        ${lesson.questions.map((_, i) => `
          <div class="quiz-prog-dot ${i < qState.current ? 'done' : i === qState.current ? 'current' : ''}"></div>
        `).join('')}
      </div>
      <div class="quiz-card">
        <div class="quiz-q-label">Question ${qState.current + 1} of ${lesson.questions.length}</div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <div class="quiz-option ${selected === i ? 'selected' : ''}" onclick="selectQuizAnswer('${lesson.id}', ${qState.current}, ${i})">
              <span class="opt-letter">${String.fromCharCode(65+i)}</span>${opt}
            </div>
          `).join('')}
        </div>
        ${answered ? `
          <div class="quiz-feedback show ${selected === q.correct ? 'correct' : 'incorrect'}">
            ${selected === q.correct ? '✓ Correct! ' : '✗ Incorrect. '} ${q.explanation}
          </div>
        ` : ''}
        <div class="quiz-actions">
          ${!answered ? `<button class="btn btn-primary" disabled id="quiz-submit-btn" style="opacity:0.45; cursor:not-allowed">Select an answer</button>` : 
            qState.current < lesson.questions.length - 1 
              ? `<button class="btn btn-primary" onclick="advanceQuiz('${lesson.id}', '${module.id}')">Next Question <i class="ti ti-arrow-right"></i></button>`
              : `<button class="btn btn-primary" onclick="finishQuiz('${lesson.id}', '${module.id}')">See Results <i class="ti ti-arrow-right"></i></button>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderResourcesLesson(lesson) {
  if (!lesson.resources) return '<p>No resources available.</p>';

  const iconMap = { pdf: 'ti-file-text', video: 'ti-player-play', audio: 'ti-headphones', link: 'ti-external-link', tool: 'ti-tool' };
  const colorMap = { pdf: 'pdf', video: 'video', audio: 'audio', link: 'link', tool: 'tool' };
  const labelMap = { pdf: 'PDF', video: 'Video', audio: 'Audio', link: 'Journal Article', tool: 'Clinical Tool' };

  return `
    <div class="content-section mb-24">
      <h3>Resources & Further Reading</h3>
      <p>Peer-reviewed sources, clinical manuals, session demonstrations, and downloadable tools that form the evidence base for this module.</p>
    </div>
    ${lesson.resources.map(r => `
      <div class="resource-item" onclick="${r.url ? `window.open('${r.url}', '_blank')` : `showToast('Coming soon', 'info')`}" style="cursor:pointer"
        <div class="resource-icon-box ${colorMap[r.type]}">
          <i class="ti ${iconMap[r.type] || 'ti-file'}"></i>
        </div>
        <div style="flex:1; min-width:0">
          <div class="resource-title">${r.title}</div>
          <div class="resource-sub">${r.desc}</div>
        </div>
        <div class="resource-tag">
          <i class="ti ${r.type === 'tool' || r.type === 'pdf' ? 'ti-download' : 'ti-external-link'}"></i>
          ${labelMap[r.type] || 'Resource'}
        </div>
      </div>
    `).join('')}
    <div class="card card-padded mt-24" style="background:var(--warm-light); border-color:rgba(196,149,106,0.2)">
      <div style="display:flex; align-items:flex-start; gap:12px">
        <i class="ti ti-info-circle" style="font-size:20px; color:var(--warm); flex-shrink:0; margin-top:2px"></i>
        <div style="font-size:13.5px; color:#5A3A20; line-height:1.65">
          <strong style="color:var(--warm-dark)">Access Note:</strong> PDFs and tools are available to all enrolled learners. Journal articles link to publisher pages (institutional access or purchase may be required). For assistance accessing resources, contact <a href="mailto:support@therapistce.com" style="color:var(--warm-dark)">support@therapistce.com</a>.
        </div>
      </div>
    </div>
  `;
}

// ===== ACTIONS =====
function navigate(page) {
  state.page = page;
  render();
  window.scrollTo(0, 0);
}

window.navigate = navigate;

function openLesson(moduleId, lessonId) {
  state.currentModule = moduleId;
  state.currentLesson = lessonId;
  state.page = 'lesson';
  render();
  window.scrollTo(0, 0);
}

window.openLesson = openLesson;

function markComplete(moduleId, lessonId, nextLessonId) {
  state.progress[lessonId] = 'complete';
  saveProgress(state.progress);

  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  if (lesson?.ceus > 0) {
    showToast(`+${lesson.ceus} CEUs earned — great work!`, 'success');
  }

  if (nextLessonId) {
    openLesson(moduleId, nextLessonId);
  } else {
    const pct = calculateModuleProgress(moduleId, state.progress);
    if (pct === 100) {
      showToast(`🎉 ${module?.title || 'Module'} complete! Certificate issued.`, 'success');
      navigate('certificates');
    } else {
      navigate('dashboard');
    }
  }
}

window.markComplete = markComplete;

function handleRegister(e) {
  e.preventDefault();
  const first = document.getElementById('reg-first')?.value?.trim();
  const last = document.getElementById('reg-last')?.value?.trim();
  const email = document.getElementById('reg-email')?.value?.trim();
  const license = document.getElementById('reg-license')?.value;

  if (!first || !email || !license) {
    showToast('Please fill in all required fields.', 'warn');
    return;
  }

  const user = { firstName: first, lastName: last, email, license, joined: new Date().toISOString() };
  saveUser(user);
  state.user = user;
  state.page = 'dashboard';
  render();
  showToast(`Welcome, ${first}! Your 7-day free trial has started.`, 'success');
}

window.handleRegister = handleRegister;

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email')?.value?.trim();
  if (!email) { showToast('Please enter your email.', 'warn'); return; }

  // Demo login — find or create user
  let user = getUser();
  if (!user) {
    user = { firstName: 'Clinician', lastName: '', email, license: 'Licensed Counselor', joined: new Date().toISOString() };
    saveUser(user);
  }
  state.user = user;
  state.page = 'dashboard';
  render();
  showToast(`Welcome back, ${user.firstName}!`, 'success');
}

window.handleLogin = handleLogin;

function handleLogout() {
  if (confirm('Sign out of TherapistCE?')) {
    state.user = null;
    state.page = 'landing';
    render();
  }
}

window.handleLogout = handleLogout;

function selectQuizAnswer(lessonId, qIdx, answerIdx) {
  if (!state.quizState[lessonId]) {
    state.quizState[lessonId] = { current: 0, answers: {}, score: 0, finished: false };
  }
  if (state.quizState[lessonId].answers[qIdx] !== undefined) return; // Already answered

  state.quizState[lessonId].answers[qIdx] = answerIdx;

  const module = MODULES.find(m => m.lessons.some(l => l.id === lessonId));
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const q = lesson?.questions[qIdx];

  if (q && answerIdx === q.correct) {
    state.quizState[lessonId].score++;
  }

  // Re-render lesson content
  const lessonContent = document.getElementById('lesson-content');
  if (lessonContent) {
    lessonContent.innerHTML = renderLessonContent(lesson, module);
  }
}

window.selectQuizAnswer = selectQuizAnswer;

function advanceQuiz(lessonId, moduleId) {
  if (!state.quizState[lessonId]) return;
  state.quizState[lessonId].current++;
  const lessonContent = document.getElementById('lesson-content');
  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  if (lessonContent && lesson) {
    lessonContent.innerHTML = renderLessonContent(lesson, module);
  }
}

window.advanceQuiz = advanceQuiz;

function finishQuiz(lessonId, moduleId) {
  if (!state.quizState[lessonId]) return;
  const qState = state.quizState[lessonId];
  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  qState.finished = true;
  const pct = Math.round((qState.score / lesson.questions.length) * 100);

  if (pct >= 70) {
    state.progress[lessonId] = 'complete';
    saveProgress(state.progress);
    showToast(`Passed with ${pct}%! CEU certificate issued.`, 'success');

    // Check if whole module done
    const modulePct = calculateModuleProgress(moduleId, state.progress);
    if (modulePct === 100) {
      state.progress[`module_${moduleId}_complete`] = true;
      saveProgress(state.progress);
    }
  }

  const lessonContent = document.getElementById('lesson-content');
  if (lessonContent) {
    lessonContent.innerHTML = renderLessonContent(lesson, module);
  }
}

window.finishQuiz = finishQuiz;

function retakeQuiz(lessonId) {
  state.quizState[lessonId] = { current: 0, answers: {}, score: 0, finished: false };
  const module = MODULES.find(m => m.lessons.some(l => l.id === lessonId));
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const lessonContent = document.getElementById('lesson-content');
  if (lessonContent && lesson) {
    lessonContent.innerHTML = renderLessonContent(lesson, module);
  }
}

window.retakeQuiz = retakeQuiz;

async function getAIFeedback(scenarioIdx, moduleId, lessonId, sIdx) {
  const textarea = document.getElementById(`response-${scenarioIdx}`);
  if (!textarea) return;
  const response = textarea.value.trim();

  if (response.length < 30) {
    showToast('Please write a substantive clinical response (at least a few sentences) before requesting feedback.', 'warn');
    return;
  }

  const panel = document.getElementById(`ai-panel-${scenarioIdx}`);
  const content = document.getElementById(`ai-content-${scenarioIdx}`);
  if (!panel || !content) return;

  panel.classList.add('show');
  content.innerHTML = `<div class="ai-loading"><div class="spinner"></div> Analyzing your clinical response...</div>`;

  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const scenario = lesson?.scenarios?.[scenarioIdx];

  const systemPrompt = `You are a highly experienced clinical supervisor providing feedback to a licensed mental health counselor on their case practice responses. You are warm, constructive, and clinically sophisticated. You are training in evidence-based modalities including CBT, MI, DBT, ACT, Trauma-Informed Care, and Family Systems Therapy.

Your feedback should:
1. Identify specific strengths in the response (2-3 concrete things they did well)
2. Identify 1-2 areas to strengthen with specific clinical suggestions
3. Reference relevant theory, technique names, or clinical literature where appropriate
4. Be encouraging and collegial — you're speaking to a competent licensed professional, not a student
5. Use clinical language appropriate for a licensed counselor
6. Be concise — 3-4 paragraphs maximum

The modality focus for this scenario is ${module?.title}.`;

  const userPrompt = scenario
    ? `Client statement: "${scenario.quote}"\n\nScenario task: ${scenario.task}\n\nClinician's response: "${response}"\n\nPlease provide detailed, constructive clinical supervisor feedback.`
    : `Module: ${module?.title}. Clinician's response: "${response}". Please provide clinical supervisor feedback.`;

  try {
    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });

    const data = await apiResponse.json();
    const text = data?.content?.[0]?.text || '';

    if (text) {
      content.innerHTML = text.split('\n\n').filter(Boolean).map(p => `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`).join('');
      showToast('Clinical feedback received!', 'success');
    } else {
      throw new Error('No response');
    }
  } catch (err) {
    content.innerHTML = renderFallbackFeedback(moduleId, scenarioIdx, response);
  }
}

window.getAIFeedback = getAIFeedback;

function renderFallbackFeedback(moduleId, scenarioIdx, response) {
  const feedbacks = {
    cbt: [`<p><strong>Clinical Strengths:</strong> Your response demonstrates awareness of the cognitive model and shows appropriate use of validation before challenging. Beginning with an empathic reflection before introducing cognitive concepts is exactly the right sequencing — this mirrors Judith Beck's recommendation to establish rapport and shared understanding before moving into Socratic dialogue.</p><p><strong>Distortion Identification:</strong> Your identification of the core cognitive distortions is accurate and clinically precise. Naming them explicitly — while using accessible language with the client — is appropriate and helps build the client's "cognitive toolkit" for self-monitoring between sessions.</p><p><strong>To Strengthen:</strong> Consider adding a brief psychoeducational note about the cognitive model before using Socratic questioning. Many clients benefit from understanding why you're asking these questions — framing it as "examining the evidence together" creates a collaborative spirit that increases buy-in. Also consider exploring the underlying intermediate belief this automatic thought might be expressing.</p>`],
    mi: [`<p><strong>Clinical Strengths:</strong> Your response demonstrates a clear understanding of the MI spirit — you avoided the righting reflex and did not argue for change. The double-sided reflection you used effectively captures the ambivalence without taking sides, which is exactly what MI calls for in the contemplation stage.</p><p><strong>Change Talk:</strong> Your evocative question at the close is strong — asking the client to imagine themselves a year from now (the Miracle Question variant) is an evidence-based way to access the "desire" component of DARN-C change talk. This respects the client's autonomy while gently directing attention toward values.</p><p><strong>To Strengthen:</strong> In your reflections, try to lead slightly more with the change side of the ambivalence. When using double-sided reflections, ending with the change side (rather than the sustain side) gives it slightly more emphasis — "and on the other hand, you can imagine feeling so much better" — which research suggests increases the likelihood of further change talk.</p>`],
    dbt: [`<p><strong>Clinical Strengths:</strong> Your response demonstrates solid DBT validation — you acknowledged the client's subjective sense of being out of control without either reinforcing it as true or dismissing it. This balance (validation + challenge) is the essence of the dialectical stance.</p><p><strong>Chain Analysis Introduction:</strong> Your explanation of the chain analysis is accessible and non-shaming. Using the word "automatic" to describe why it feels like it "just happens" is accurate and destigmatizing. The question at the end — moving directly into the chain — maintains momentum without dwelling in abstract explanation.</p><p><strong>To Strengthen:</strong> When introducing the chain analysis, it can help to explicitly name the collaborative purpose: "We're not going through this to assign blame — we're doing it together so we can find the places where a skill could interrupt the chain." This addresses clients' common anticipatory shame about reviewing problematic behaviors.</p>`]
  };
  const fb = feedbacks[moduleId] || feedbacks.cbt;
  return fb[scenarioIdx % fb.length] || fb[0];
}

function showModelResponse(idx) {
  const module = MODULES.find(m => m.id === state.currentModule);
  const lesson = module?.lessons.find(l => l.id === state.currentLesson);
  const scenario = lesson?.scenarios?.[idx];
  if (!scenario) return;

  const textarea = document.getElementById(`response-${idx}`);
  if (textarea) textarea.value = scenario.modelResponse;
  showToast('Model response loaded. Use it as a reference for self-reflection.', 'info');
}

window.showModelResponse = showModelResponse;

function printCertificate(moduleId) {
  showToast('Certificate print dialog would open here in production.', 'info');
}

window.printCertificate = printCertificate;

// ===== TOASTS =====
function showToast(message, type = 'info') {
  const icons = { success: 'ti-circle-check', info: 'ti-info-circle', warn: 'ti-alert-triangle' };
  const id = Date.now();
  const toast = { id, message, type };
  state.toasts.push(toast);
  renderToasts();
  setTimeout(() => {
    state.toasts = state.toasts.filter(t => t.id !== id);
    renderToasts();
  }, 4000);
}

window.showToast = showToast;

function renderToasts() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: 'ti-circle-check-filled', info: 'ti-info-circle', warn: 'ti-alert-triangle' };
  container.innerHTML = state.toasts.map(t => `
    <div class="toast ${t.type}">
      <i class="ti ${icons[t.type] || 'ti-info-circle'} toast-icon"></i>
      <span>${t.message}</span>
    </div>
  `).join('');
}

function attachGlobalListeners() {
  // Smooth scroll for anchor links on landing
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ===== START =====
init();
