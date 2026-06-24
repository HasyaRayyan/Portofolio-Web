import React, { useState } from 'react';

const skillsList = [
  {
    name: 'UI/UX Design',
    desc: 'Merancang antarmuka pengguna yang intuitif, estetik, dan berorientasi pada pengalaman pengguna terbaik.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"></path>
      </svg>
    )
  },
  {
    name: 'Laravel',
    desc: 'Membangun aplikasi web backend yang terstruktur, aman, dan skalabel menggunakan framework Laravel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    name: 'PHP',
    desc: 'Pengembangan server-side dengan PHP murni maupun terintegrasi, menangani logika bisnis dan manajemen data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.4"></line>
      </svg>
    )
  },
  {
    name: 'React',
    desc: 'Membangun antarmuka web yang dinamis dan reaktif menggunakan React dengan pendekatan berbasis komponen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
      </svg>
    )
  },
  {
    name: 'MySQL / SQL',
    desc: 'Merancang skema database relasional, menulis query yang efisien, dan mengelola integritas data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    )
  },
  {
    name: 'Angular',
    desc: 'Mengembangkan aplikasi web skala besar dengan Angular, menggunakan arsitektur berbasis modul dan TypeScript.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 19 22 19"></polygon>
        <line x1="12" y1="8" x2="8" y2="16"></line>
        <line x1="12" y1="8" x2="16" y2="16"></line>
        <line x1="9" y1="14" x2="15" y2="14"></line>
      </svg>
    )
  },
  {
    name: 'Ionic Framework',
    desc: 'Membangun aplikasi mobile cross-platform yang berjalan di Android dan iOS dari satu basis kode.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    name: 'Vite',
    desc: 'Menggunakan Vite sebagai build tool modern untuk menghadirkan development environment yang cepat dan efisien.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    name: 'Figma',
    desc: 'Menggunakan Figma untuk membuat wireframe, prototype interaktif, dan design system yang terstruktur.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
      </svg>
    )
  },
  {
    name: 'Git & GitHub',
    desc: 'Mengelola versi kode secara profesional menggunakan Git dan berkolaborasi dalam tim melalui GitHub.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
        <line x1="6" y1="9" x2="6" y2="21"></line>
      </svg>
    )
  }
];

const ITEMS_PER_PAGE = 5;

export default function Skills() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(skillsList.length / ITEMS_PER_PAGE);
  const startIdx = page * ITEMS_PER_PAGE;
  const visibleSkills = skillsList.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="skills" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title">Keahlian Saya</h2>
      <p className="section-subtitle">
        Teknologi dan disiplin ilmu yang saya kuasai untuk menghadirkan solusi digital yang efektif dan berkualitas.
      </p>

      <div className="skills-simple-list">
        {visibleSkills.map((skill, idx) => (
          <div key={startIdx + idx} className="skill-list-item card-glass">
            <div className="skill-list-icon">
              {skill.icon}
            </div>
            <div className="skill-list-body">
              <h3 className="skill-list-name">{skill.name}</h3>
              <p className="skill-list-desc">{skill.desc}</p>
            </div>
            <div className="skill-list-index">0{startIdx + idx + 1}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="skills-pagination">
        <button
          className="skills-page-btn"
          onClick={handlePrev}
          disabled={page === 0}
          aria-label="Keahlian sebelumnya"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Sebelumnya
        </button>

        <div className="skills-page-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`skills-dot ${i === page ? 'active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Halaman ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="skills-page-btn"
          onClick={handleNext}
          disabled={page === totalPages - 1}
          aria-label="Keahlian berikutnya"
        >
          Berikutnya
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Info */}
      <p className="skills-page-info">
        Menampilkan {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, skillsList.length)} dari {skillsList.length} keahlian
      </p>
    </section>
  );
}
