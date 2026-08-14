import React, { useState } from 'react';

const skills = [
  {
    name: 'UI/UX Design',
    desc: 'Merancang antarmuka yang intuitif, estetik, dan berorientasi pada pengalaman terbaik.',
    tags: ['Figma', 'Wireframe'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" />
        <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    name: 'Laravel',
    desc: 'Membangun backend yang terstruktur, aman, dan skalabel menggunakan framework Laravel.',
    tags: ['REST API', 'Eloquent'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    desc: 'Pengembangan server-side dengan PHP, menangani logika bisnis dan manajemen data.',
    tags: ['OOP', 'Server-side'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'React',
    desc: 'Membangun antarmuka web yang dinamis dan reaktif dengan pendekatan komponen.',
    tags: ['Hooks', 'Vite'],
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
    name: 'MySQL / SQL',
    desc: 'Merancang skema database relasional, query efisien, dan mengelola integritas data.',
    tags: ['Schema', 'Query'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    desc: 'Mengembangkan aplikasi skala besar dengan arsitektur berbasis modul dan TypeScript.',
    tags: ['TypeScript', 'Modular'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 19 22 19" />
        <line x1="12" y1="8" x2="8" y2="16" /><line x1="12" y1="8" x2="16" y2="16" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Ionic Framework',
    desc: 'Membangun aplikasi mobile cross-platform Android & iOS dari satu basis kode.',
    tags: ['Mobile', 'Hybrid'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    desc: 'Build tool modern yang menghadirkan development environment yang cepat dan efisien.',
    tags: ['Build Tool', 'HMR'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    desc: 'Membuat wireframe, prototype interaktif, dan design system yang terstruktur.',
    tags: ['Design System', 'Prototype'],
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
    name: 'Git & GitHub',
    desc: 'Mengelola versi kode dan berkolaborasi dalam tim menggunakan Git dan GitHub.',
    tags: ['Version Control', 'CI/CD'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
];

const PER_PAGE = 6;

export default function Skills() {
  const [page, setPage] = useState(0);
  const total = Math.ceil(skills.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = skills.slice(start, start + PER_PAGE);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">02 — Keahlian</span>
          <h2 className="section-title">Teknologi yang<br />saya gunakan.</h2>
        </div>

        <div className="skills-list">
          {visible.map((skill, i) => (
            <div key={start + i} className={`skill-row reveal d${Math.min(i + 1, 5)}`}>
              <div className="skill-icon-box" aria-hidden="true">
                {skill.icon}
              </div>
              <div className="skill-body">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-desc">{skill.desc}</span>
              </div>
              <div className="skill-tags">
                {skill.tags.map((t) => (
                  <span key={t} className="skill-tag-sm">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Sebelumnya
          </button>

          <span className="page-info">
            {start + 1}–{Math.min(start + PER_PAGE, skills.length)} dari {skills.length}
          </span>

          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
          >
            Berikutnya
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
