import React, { useState, useRef } from 'react';

/* ─── 4 Columns Data ─── */

const column1 = [
  {
    name: 'React',
    badge: 'Library',
    category: 'Frontend',
    desc: 'Modular SPA, state management, & custom hooks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    badge: 'Language',
    category: 'Strict Typing',
    desc: 'Type-safety, modern interfaces, & scalable codebases.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    badge: 'Styling',
    category: 'Utility-First',
    desc: 'Modern responsive layouts & custom design systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    name: 'Vite & Bundler',
    badge: 'Build Tool',
    category: 'Tooling',
    desc: 'Lightning-fast HMR & optimized production bundles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'HTML5 & Modern CSS',
    badge: 'Core Web',
    category: 'Markup',
    desc: 'Semantic web, CSS Grid/Flexbox, & micro-animations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
];

const column2 = [
  {
    name: 'Laravel',
    badge: 'Framework',
    category: 'Backend',
    desc: 'Robust RESTful API, Eloquent ORM, & authentication.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'PHP 8',
    badge: 'Language',
    category: 'Server-Side',
    desc: 'Modern OOP patterns, fast execution, & API services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Node.js & Express',
    badge: 'Runtime',
    category: 'Backend',
    desc: 'Event-driven server architecture & async processing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'CodeIgniter',
    badge: 'Framework',
    category: 'MVC Backend',
    desc: 'Lightweight enterprise MVC & legacy modernization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: 'RESTful API Integration',
    badge: 'Integration',
    category: 'Networking',
    desc: 'JSON contracts, middleware auth, & webhook triggers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const column3 = [
  {
    name: 'Ionic Framework',
    badge: 'Mobile Hybrid',
    category: 'Cross-Platform',
    desc: 'Multi-platform mobile app development with web tech.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    badge: 'Framework',
    category: 'Enterprise Web',
    desc: 'Dependency injection, RxJS streams, & TypeScript.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 19 22 19" />
        <line x1="12" y1="8" x2="8" y2="16" />
        <line x1="12" y1="8" x2="16" y2="16" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Capacitor',
    badge: 'Runtime',
    category: 'Native Bridge',
    desc: 'Camera, filesystem, & native device API bindings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: 'Android Development',
    badge: 'Platform',
    category: 'Mobile OS',
    desc: 'APK generation, device testing, & permissions tuning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="9" r="1" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    name: 'PWA & Responsive UI',
    badge: 'App Standards',
    category: 'Mobile Web',
    desc: 'Offline caching, service workers, & installable apps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
];

const column4 = [
  {
    name: 'MySQL & SQL',
    badge: 'Database',
    category: 'Relational DB',
    desc: 'Relational schemas, indexing, & optimized querying.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    badge: 'Version Control',
    category: 'Collaboration',
    desc: 'Branching strategies, pull requests, & CI/CD workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Figma UI/UX',
    badge: 'Design Tool',
    category: 'Prototyping',
    desc: 'Interactive prototypes, wireframing, & design systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  {
    name: 'Postman & Testing',
    badge: 'Testing Tool',
    category: 'API Quality',
    desc: 'Endpoint automated testing, mock servers, & debugging.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    name: 'Linux & Terminal',
    badge: 'Environment',
    category: 'Sysadmin',
    desc: 'Shell scripting, server deployment, & SSH environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
];

const allSkills = [...column1, ...column2, ...column3, ...column4];

function SkillMarqueeCard({ item }) {
  return (
    <div className="skill-marquee-card">
      <div className="skill-marquee-card-head">
        <div className="skill-marquee-icon">{item.icon}</div>
        <span className="skill-marquee-badge">{item.badge}</span>
      </div>
      <h4 className="skill-marquee-title">{item.name}</h4>
      <span className="skill-marquee-category">{item.category}</span>
      <p className="skill-marquee-desc">{item.desc}</p>
    </div>
  );
}

export default function Skills() {
  const [viewMode, setViewMode] = useState('motion'); // 'motion' | 'grid'
  const shelfRef = useRef(null);

  const scrollShelf = (direction) => {
    if (shelfRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      shelfRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        {/* Centered Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="section-label">02 — Keahlian &amp; Teknologi</span>
          <h2 className="section-title">Teknologi yang<br />saya gunakan.</h2>
          <p className="section-sub" style={{ marginBottom: '24px' }}>
            Ekosistem teknologi modern yang saya gunakan untuk membangun sistem backend tangguh, antarmuka web interaktif, dan aplikasi mobile multiplatform.
          </p>

          {/* Mode Switcher: Motion vs Static Card */}
          <div className="skills-view-switcher-row">
            <div className="skills-view-switcher">
              <button
                type="button"
                className={`skills-switch-btn ${viewMode === 'motion' ? 'active' : ''}`}
                onClick={() => setViewMode('motion')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>Animasi Motion</span>
              </button>
              <button
                type="button"
                className={`skills-switch-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
                <span>Tampilan Kartu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Conditional View: 4-Track Motion vs Horizontally Scrollable 2-Row Shelf */}
        {viewMode === 'motion' ? (
          /* 4-Column Vertical Marquee Motion Showcase (Borderless Floating Directly on Page) */
          <div className="skills-marquee-wrapper">
            {/* Top & Bottom Soft Blurred Gradient Masks */}
            <div className="skills-marquee-mask-top" />
            <div className="skills-marquee-mask-bottom" />

            <div className="skills-marquee-grid">
              {/* Column 1: DOWNWARDS (ke bawah) */}
              <div className="skills-marquee-col col-1">
                <div className="skills-marquee-track track-down">
                  {[...column1, ...column1].map((item, idx) => (
                    <SkillMarqueeCard key={`col1-${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </div>

              {/* Column 2: UPWARDS (ke atas) */}
              <div className="skills-marquee-col col-2">
                <div className="skills-marquee-track track-up">
                  {[...column2, ...column2].map((item, idx) => (
                    <SkillMarqueeCard key={`col2-${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </div>

              {/* Column 3: DOWNWARDS (ke bawah) */}
              <div className="skills-marquee-col col-3">
                <div className="skills-marquee-track track-down">
                  {[...column3, ...column3].map((item, idx) => (
                    <SkillMarqueeCard key={`col3-${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </div>

              {/* Column 4: UPWARDS (ke atas) */}
              <div className="skills-marquee-col col-4">
                <div className="skills-marquee-track track-up">
                  {[...column4, ...column4].map((item, idx) => (
                    <SkillMarqueeCard key={`col4-${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Horizontally Scrollable 2-Row Shelf (Max 12 Visible at First, Scrollable Sideways) */
          <div className="skills-shelf-container">
            <div className="skills-shelf-header">
              <div className="skills-shelf-badge">
                <span className="skills-shelf-dot" />
                <span>12 kartu pertama tampak • Geser ke samping untuk melihat teknologi lainnya (20 total)</span>
              </div>
              <div className="skills-shelf-nav">
                <button
                  type="button"
                  className="skills-shelf-nav-btn"
                  onClick={() => scrollShelf('left')}
                  aria-label="Geser ke kiri"
                  title="Geser ke kiri"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="skills-shelf-nav-btn"
                  onClick={() => scrollShelf('right')}
                  aria-label="Geser ke kanan"
                  title="Geser ke kanan"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="skills-shelf-wrapper">
              <div className="skills-shelf-track" ref={shelfRef}>
                {allSkills.map((item) => (
                  <SkillMarqueeCard key={`static-${item.name}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
