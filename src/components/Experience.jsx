import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  const experiences = [
    {
      date: 'Aug 2026 - Present',
      title: 'Teknik Informatika Student',
      org: 'UIN Maulana Malik Ibrahim Malang',
      desc: 'Melanjutkan studi Teknik Informatika untuk memperdalam ilmu di bidang rekayasa perangkat lunak, algoritma, dan pengembangan sistem.',
      icon: '🎓',
    },
    {
      date: 'Dec 2024 - Present',
      title: 'Owner & Founder',
      org: 'FourtyFourThrift',
      desc: 'Mendirikan dan mengelola FourtyFourThrift, sebuah bisnis thrift yang berfokus pada penjualan pakaian bekas berkualitas. Bertanggung jawab atas strategi pemasaran, manajemen inventaris, dan pengembangan merek.',
      icon: '👔',
    },
    {
      date: 'Jan 2025 - Dec 2025',
      title: 'Full-Stack Developer Intern',
      org: 'PT Pringapus Digital Teknologi',
      desc: 'Membangun aplikasi & web responsif menggunakan Ionic Angular, Wordpress, CodeIgniter. Bertanggung jawab atas manajemen database SQL, integrasi REST API, Backend & Frontend.',
      icon: '💻',
    },
    {
      date: 'Jun 2023 - Mei 2026',
      title: 'RPL (Rekayasa Perangkat Lunak) Student',
      org: 'SMK PGRI 03 Malang',
      desc: 'Mempelajari dan menguasai konsep rekayasa perangkat lunak, termasuk analisis kebutuhan, desain sistem, pengembangan perangkat lunak, dan pengujian. Mengembangkan keterampilan dalam pemrograman, manajemen proyek, dan kolaborasi tim.',
      icon: '📚',
    },
  ];

  // Animate the timeline line fill on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fill = fillRef.current;
    const line = lineRef.current;
    if (!fill || !line) return;

    const handleScroll = () => {
      const rect = line.getBoundingClientRect();
      const windowH = window.innerHeight;
      const lineTop = Math.max(0, rect.top);
      const lineBottom = Math.min(windowH, rect.bottom);
      const visible = Math.max(0, lineBottom - lineTop);
      const progress = Math.min(1, (windowH - rect.top) / (rect.height + windowH));
      fill.style.height = `${Math.max(0, progress * 100)}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="reveal">
        <h2 className="section-title">
          <span className="section-title-accent">My Journey</span>
          Riwayat Perjalanan
        </h2>
        <p className="section-subtitle">
          Perjalanan studi dan pengembangan profesional saya dalam industri rekayasa perangkat lunak.
        </p>
      </div>

      <div className="timeline">
        {/* Animated vertical line */}
        <div className="timeline-line" ref={lineRef}>
          <div className="timeline-line-fill" ref={fillRef} style={{ height: '0%' }} />
        </div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`timeline-item reveal ${idx % 2 === 0 ? 'from-left' : 'from-right'} stagger-${idx + 1}`}
          >
            {/* Animated pulsing dot */}
            <div className="timeline-dot" style={{ animationDelay: `${idx * 0.5}s` }} />

            <div className="card-glass timeline-content">
              {/* Emoji icon */}
              <div style={{
                fontSize: '1.4rem',
                marginBottom: '12px',
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(8,145,178,0.08))',
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid rgba(124,58,237,0.15)',
              }}>
                {exp.icon}
              </div>

              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="timeline-org">{exp.org}</span>
              {exp.desc && <p className="timeline-desc">{exp.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
