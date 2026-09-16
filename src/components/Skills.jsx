import React, { useState } from 'react';

/* ── 4 Kategori Kolom Stream ── */
const streamColumns = [
  {
    id: 'col-1',
    direction: 'down',
    title: 'Frontend & UI',
    items: [
      {
        name: 'React.js',
        badge: 'Library',
        desc: 'Komponen modular, custom hooks, reactive state, SPA performa tinggi.',
        tags: ['Hooks', 'Vite', 'SPA'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        desc: 'Static typing ketat, interface terstruktur, dan zero runtime type bugs.',
        tags: ['Strict', 'Types', 'ESNext'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 7 4 4 20 4 20 7" /><line x1="12" y1="4" x2="12" y2="20" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        badge: 'Styling',
        desc: 'Utility-first CSS, sistem layout responsif cepat, dan custom tokens.',
        tags: ['Flex/Grid', 'Responsive', 'Modern'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        ),
      },
      {
        name: 'Vite & Next-Gen',
        badge: 'Bundler',
        desc: 'HMR instan, optimal tree-shaking, dan lightning fast dev server.',
        tags: ['ESBuild', 'HMR', 'Build'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
      {
        name: 'Modern JavaScript',
        badge: 'Core',
        desc: 'ES6+, asynchronous flow, Event Loop, DOM manipulation, Web APIs.',
        tags: ['Async/Await', 'ES6+', 'APIs'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 8v8" /><path d="M15 8v5a2 2 0 0 1-4 0" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'col-2',
    direction: 'up',
    title: 'Backend & Systems',
    items: [
      {
        name: 'Laravel',
        badge: 'Framework',
        desc: 'Arsitektur MVC elegan, Eloquent ORM, middleware, otentikasi Sanctum.',
        tags: ['Eloquent', 'MVC', 'Auth'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        ),
      },
      {
        name: 'PHP 8+',
        badge: 'Backend',
        desc: 'Object-Oriented Programming modern, strict typing, attributes, & JIT.',
        tags: ['OOP', 'PHP8', 'Backend'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        name: 'RESTful API',
        badge: 'Architecture',
        desc: 'Desain endpoint RESTful standar, serialisasi JSON, dan error handling.',
        tags: ['JSON', 'HTTP', 'Endpoints'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        name: 'CodeIgniter',
        badge: 'Framework',
        desc: 'Pondasi framework ringan, routing cepat, dan kompatibilitas server tinggi.',
        tags: ['MVC', 'Lightweight', 'PHP'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        ),
      },
      {
        name: 'Node.js & Express',
        badge: 'Runtime',
        desc: 'Microservices event-driven asynchronous dan pembuatan server REST cepat.',
        tags: ['Event-Loop', 'Express', 'NPM'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'col-3',
    direction: 'down',
    title: 'Database & DevOps',
    items: [
      {
        name: 'MySQL & MariaDB',
        badge: 'Database',
        desc: 'Perancangan skema relasional, indexing performa, dan ACID integrity.',
        tags: ['RDBMS', 'SQL', 'Index'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        ),
      },
      {
        name: 'Git & GitHub',
        badge: 'DevOps',
        desc: 'Branching strategies, Gitflow, pull requests, dan code review kolaboratif.',
        tags: ['Gitflow', 'Version', 'GitHub'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
            <path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
          </svg>
        ),
      },
      {
        name: 'Query Optimization',
        badge: 'Performance',
        desc: 'EXPLAIN profiling, eliminasi N+1 queries, dan optimalisasi beban CPU/RAM.',
        tags: ['Profiling', 'Tuning', 'Fast'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
      },
      {
        name: 'Database Security',
        badge: 'Security',
        desc: 'Prepared statements, proteksi SQL injection, enkripsi & role isolation.',
        tags: ['Sanitize', 'Security', 'Auth'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
      },
      {
        name: 'Postman & Testing',
        badge: 'Tooling',
        desc: 'Pengujian endpoint REST API otomatis, mock server, dan dokumentasi.',
        tags: ['API Spec', 'Testing', 'QA'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'col-4',
    direction: 'up',
    title: 'Mobile & UI/UX',
    items: [
      {
        name: 'Ionic Framework',
        badge: 'Cross-Platform',
        desc: 'Aplikasi hybrid Android & iOS dengan UX native dan satu basis kode.',
        tags: ['Android', 'iOS', 'Capacitor'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
      {
        name: 'Capacitor Native',
        badge: 'Native Bridge',
        desc: 'Akses hardware native: kamera, push notification, geolocation, & storage.',
        tags: ['Hardware', 'Bridge', 'Plugins'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
      },
      {
        name: 'Figma & Design',
        badge: 'UI/UX',
        desc: 'Wireframing, interactive prototyping, komponen auto-layout, & design systems.',
        tags: ['Design System', 'UI/UX', 'Figma'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        ),
      },
      {
        name: 'Angular Ecosystem',
        badge: 'Framework',
        desc: 'Arsitektur modul enterprise, Dependency Injection, RxJS streams.',
        tags: ['RxJS', 'DI', 'TypeScript'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 19 22 19" />
            <line x1="12" y1="8" x2="8" y2="16" /><line x1="12" y1="8" x2="16" y2="16" />
            <line x1="9" y1="14" x2="15" y2="14" />
          </svg>
        ),
      },
      {
        name: 'Responsive Systems',
        badge: 'Mobile-First',
        desc: 'Fluid fluid-typography, breakpoint testing, touch-friendly UI layouts.',
        tags: ['Mobile-First', 'Fluid', 'UX'],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
    ],
  },
];

function SkillStreamCard({ item }) {
  return (
    <div className="stream-skill-card">
      <div className="stream-skill-header">
        <div className="stream-skill-icon">{item.icon}</div>
        <span className="stream-skill-badge">{item.badge}</span>
      </div>
      <h4 className="stream-skill-name">{item.name}</h4>
      <p className="stream-skill-desc">{item.desc}</p>
      <div className="stream-skill-tags">
        {item.tags.map((t) => (
          <span key={t} className="stream-skill-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        {/* Centered Editorial Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-label">02 — Keahlian &amp; Ekosistem</span>
          <h2 className="section-title">
            Teknologi yang<br />saya gunakan.
          </h2>
          <div className="stream-hint-badge">
            <span className="stream-pulse" />
            <span>Multi-Stream Vertikal • Arahkan kursor untuk jeda</span>
          </div>
        </div>

        {/* 4-Column Vertical Streaming Container */}
        <div
          className={`skills-stream-wrapper ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          {/* Top & Bottom Fade Overlays */}
          <div className="stream-fade-top" />
          <div className="stream-fade-bottom" />

          <div className="skills-stream-grid">
            {streamColumns.map((col, colIdx) => {
              // Duplicate items to ensure infinite seamless loop
              const duplicated = [...col.items, ...col.items];
              const isDown = col.direction === 'down';

              return (
                <div key={col.id} className="skills-stream-col">
                  {/* Column Label */}
                  <div className="stream-col-label">
                    <span className="stream-col-num">0{colIdx + 1}</span>
                    <span className="stream-col-title">{col.title}</span>
                    <span className="stream-dir-indicator" title={isDown ? 'Bergerak ke bawah' : 'Bergerak ke atas'}>
                      {isDown ? '↓' : '↑'}
                    </span>
                  </div>

                  {/* Moving track */}
                  <div className="stream-col-viewport">
                    <div className={`stream-col-track ${isDown ? 'anim-down' : 'anim-up'}`}>
                      {duplicated.map((item, idx) => (
                        <SkillStreamCard
                          key={`${col.id}-${item.name}-${idx}`}
                          item={item}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
