import React, { useState } from 'react';

const categories = ['Semua', 'Frontend & Mobile', 'Backend & Database', 'Design & Tools'];

const skillsData = [
  {
    name: 'React',
    category: 'Frontend & Mobile',
    badge: 'Library',
    desc: 'Pengembangan Single Page Application (SPA) reaktif dengan komponen modular, custom hooks, dan state management.',
    tags: ['Hooks', 'Vite', 'SPA', 'Component-Driven'],
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
    name: 'Angular',
    category: 'Frontend & Mobile',
    badge: 'Framework',
    desc: 'Membangun aplikasi web skala enterprise dengan arsitektur dependency injection, modul terstruktur, dan TypeScript.',
    tags: ['TypeScript', 'RxJS', 'Modular', 'Services'],
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
    category: 'Frontend & Mobile',
    badge: 'Cross-Platform',
    desc: 'Pengembangan aplikasi mobile multiplatform Android & iOS dari satu basis kode terpadu dengan performa native.',
    tags: ['Capacitor', 'Android', 'iOS', 'Hybrid Mobile'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    name: 'Laravel',
    category: 'Backend & Database',
    badge: 'Backend MVC',
    desc: 'Perancangan arsitektur backend andal, keamanan data, otentikasi JWT/Sanctum, dan RESTful API performa tinggi.',
    tags: ['REST API', 'Eloquent ORM', 'Middleware', 'MVC'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'PHP & CodeIgniter',
    category: 'Backend & Database',
    badge: 'Server-Side',
    desc: 'Pengembangan logika sistem server-side, manipulasi data, integrasi payment gateway, dan manajemen sesi.',
    tags: ['PHP 8', 'OOP', 'CodeIgniter', 'Backend'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'MySQL & Database SQL',
    category: 'Backend & Database',
    badge: 'Database',
    desc: 'Pemodelan skema relasional terstruktur (RDBMS), optimasi indexing query SQL cepat, dan integritas transaksi data.',
    tags: ['RDBMS', 'Query Tuning', 'Relasi', 'Transactions'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'TypeScript & JavaScript',
    category: 'Frontend & Mobile',
    badge: 'Language',
    desc: 'Penulisan kode berskala besar dengan static typing, strict type-safety, dan ekosistem modern ESNext.',
    tags: ['Strict Typing', 'Async/Await', 'DOM', 'Interfaces'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z" />
      </svg>
    ),
  },
  {
    name: 'Vite & Build Tools',
    category: 'Design & Tools',
    badge: 'Bundler',
    desc: 'Konfigurasi workflow development instan dengan Hot Module Replacement (HMR) cepat dan optimasi bundle produksi.',
    tags: ['HMR', 'Bundler', 'ESBuild', 'Optimasi'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Figma & UI/UX',
    category: 'Design & Tools',
    badge: 'Design',
    desc: 'Riset kebutuhan pengguna, wireframing, perancangan design system, serta prototipe antarmuka interaktif.',
    tags: ['Design System', 'Wireframing', 'Prototype', 'UI/UX'],
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
    name: 'Git & GitHub Workflow',
    category: 'Design & Tools',
    badge: 'Version Control',
    desc: 'Manajemen versi kode kolaboratif, branching strategy, pull requests, issue tracking, dan deployment workflow.',
    tags: ['Gitflow', 'Code Review', 'Branching', 'GitHub'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    name: 'RESTful API & Integration',
    category: 'Backend & Database',
    badge: 'API & Networking',
    desc: 'Desain kontrak endpoint RESTful standar, serialisasi JSON, penanganan error terstruktur, dan integrasi pihak ketiga.',
    tags: ['Postman', 'JSON', 'Endpoints', 'Webhook'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS & Styling',
    category: 'Frontend & Mobile',
    badge: 'Styling',
    desc: 'Membangun antarmuka modern yang konsisten dan responsif secara cepat menggunakan utility-first styling.',
    tags: ['Responsive', 'Utility-First', 'Modern UI', 'CSS3'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState('Semua');

  const filtered = selectedCat === 'Semua'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCat);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        {/* Centered Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="section-label">02 — Keahlian &amp; Teknologi</span>
          <h2 className="section-title">Teknologi yang<br />saya gunakan.</h2>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-row reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-filter-btn ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filtered.map((skill, i) => (
            <div key={skill.name} className={`skill-card reveal d${(i % 5) + 1}`}>
              <div className="skill-card-top">
                <div className="skill-card-icon" aria-hidden="true">
                  {skill.icon}
                </div>
                <span className="skill-card-badge">{skill.badge}</span>
              </div>

              <h3 className="skill-card-title">{skill.name}</h3>
              <p className="skill-card-desc">{skill.desc}</p>

              <div className="skill-card-tags">
                {skill.tags.map((t) => (
                  <span key={t} className="skill-card-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
