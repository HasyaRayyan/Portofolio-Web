import React, { useState, useEffect } from 'react';

const skillsList = [
  {
    name: 'UI/UX Design',
    desc: 'Merancang antarmuka pengguna yang intuitif, estetik, dan berorientasi pada pengalaman pengguna terbaik.',
    tags: ['Figma', 'Wireframe', 'Prototype'],
    color: '#a78bfa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
      </svg>
    )
  },
  {
    name: 'Laravel',
    desc: 'Membangun aplikasi web backend yang terstruktur, aman, dan skalabel menggunakan framework Laravel.',
    tags: ['PHP', 'REST API', 'Eloquent ORM'],
    color: '#f05340',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    name: 'PHP',
    desc: 'Pengembangan server-side dengan PHP murni maupun terintegrasi, menangani logika bisnis dan manajemen data.',
    tags: ['Server-side', 'OOP', 'REST'],
    color: '#777bb3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.4" />
      </svg>
    )
  },
  {
    name: 'React',
    desc: 'Membangun antarmuka web yang dinamis dan reaktif menggunakan React dengan pendekatan berbasis komponen.',
    tags: ['Hooks', 'Vite', 'SPA'],
    color: '#61dafb',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    )
  },
  {
    name: 'MySQL / SQL',
    desc: 'Merancang skema database relasional, menulis query yang efisien, dan mengelola integritas data.',
    tags: ['Relational DB', 'Optimization', 'Schema'],
    color: '#4479a1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  },
  {
    name: 'Angular',
    desc: 'Mengembangkan aplikasi web skala besar dengan Angular, menggunakan arsitektur berbasis modul dan TypeScript.',
    tags: ['TypeScript', 'Modular', 'Enterprise'],
    color: '#dd0031',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 19 22 19" />
        <line x1="12" y1="8" x2="8" y2="16" />
        <line x1="12" y1="8" x2="16" y2="16" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    )
  },
  {
    name: 'Ionic Framework',
    desc: 'Membangun aplikasi mobile cross-platform yang berjalan di Android dan iOS dari satu basis kode.',
    tags: ['Mobile', 'Hybrid', 'Cross-platform'],
    color: '#3880ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  },
  {
    name: 'Vite',
    desc: 'Menggunakan Vite sebagai build tool modern untuk menghadirkan development environment yang cepat dan efisien.',
    tags: ['Build Tool', 'Hot Reload', 'Fast'],
    color: '#646cff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  {
    name: 'Figma',
    desc: 'Menggunakan Figma untuk membuat wireframe, prototype interaktif, dan design system yang terstruktur.',
    tags: ['Design System', 'Prototype', 'Wireframe'],
    color: '#f24e1e',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    )
  },
  {
    name: 'Git & GitHub',
    desc: 'Mengelola versi kode secara profesional menggunakan Git dan berkolaborasi dalam tim melalui GitHub.',
    tags: ['Version Control', 'Collaboration', 'CI/CD'],
    color: '#f05032',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    )
  }
];

const ITEMS_PER_PAGE = 5;

export default function Skills() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const totalPages = Math.ceil(skillsList.length / ITEMS_PER_PAGE);
  const startIdx = page * ITEMS_PER_PAGE;
  const visibleSkills = skillsList.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const changePage = (newPage) => {
    setAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => page > 0 && changePage(page - 1);
  const handleNext = () => page < totalPages - 1 && changePage(page + 1);

  // Setup global scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="reveal">
        <h2 className="section-title">
          <span className="section-title-accent">Tech Stack</span>
          Keahlian Saya
        </h2>
        <p className="section-subtitle">
          Teknologi dan disiplin ilmu yang saya kuasai untuk menghadirkan solusi digital yang efektif dan berkualitas.
        </p>
      </div>

      <div
        className="skills-simple-list"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
      >
        {visibleSkills.map((skill, idx) => (
          <div
            key={startIdx + idx}
            className={`skill-list-item card-glass reveal stagger-${idx + 1}`}
          >
            {/* Colored icon */}
            <div
              className="skill-list-icon"
              style={{ '--skill-color': skill.color }}
            >
              {skill.icon}
            </div>

            <div className="skill-list-body">
              <h3 className="skill-list-name">{skill.name}</h3>
              <p className="skill-list-desc">{skill.desc}</p>
              <div className="skill-tag-row">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Sebelumnya
        </button>

        <div className="skills-page-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`skills-dot ${i === page ? 'active' : ''}`}
              onClick={() => changePage(i)}
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <p className="skills-page-info">
        Menampilkan {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, skillsList.length)} dari {skillsList.length} keahlian
      </p>
    </section>
  );
}
