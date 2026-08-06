import React, { useEffect, useRef, useState } from 'react';

// Hook: IntersectionObserver for scroll reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Hook: Counter animation
function useCounterAnimation(target, duration = 1500, suffix = '+') {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = parseInt(target);
    const step = Math.ceil(end / (duration / 40));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCounter({ num, label }) {
  const { count, ref } = useCounterAnimation(num);
  return (
    <div className="card-glass stat-item reveal" ref={ref}>
      <span className="stat-num">{count}+</span>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  useScrollReveal();

  const capabilities = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      iconClass: '',
      title: 'Frontend & Responsive Web',
      desc: 'Membangun antarmuka modern yang interaktif, responsif, dan ramah pengguna dengan React, Angular, dan Vite.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      iconClass: 'alt',
      title: 'Cross-Platform Mobile Apps',
      desc: 'Mengembangkan aplikasi mobile Android & iOS berkinerja tinggi dari satu basis kode menggunakan framework Ionic.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      iconClass: 'alt2',
      title: 'Backend & Database Architecture',
      desc: 'Merancang RESTful API yang aman dengan Laravel dan mengoptimalkan query database relasional SQL.',
    },
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="section-title-accent">About Me</span>
            Tentang Saya
          </h2>
          <p className="section-subtitle">
            Mengenal lebih dalam perjalanan profesional dan visi saya dalam membangun solusi teknologi.
          </p>
        </div>

        <div className="about-wrapper">
          {/* Left Card */}
          <div className="card-glass reveal from-left" style={{ padding: '40px', textAlign: 'left' }}>
            {/* Decorative line */}
            <div style={{
              width: '48px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))',
              borderRadius: '2px',
              marginBottom: '24px',
            }} />

            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', letterSpacing: '-0.5px', lineHeight: 1.3 }}>
              Developer fokus pada{' '}
              <span className="gradient-text">Kualitas</span>{' '}
              &amp;{' '}
              <span className="gradient-text">Pengalaman Pengguna</span>
            </h3>

            <p className="about-desc">
              Dengan minat mendalam dalam industri software development, saya mengkhususkan diri untuk
              menghubungkan keindahan antarmuka web dan aplikasi mobile dengan kestabilan arsitektur sistem backend.
            </p>
            <p className="about-desc" style={{ marginBottom: 0 }}>
              Saya senang memecahkan masalah kompleks, merancang skema database SQL yang efisien,
              dan menulis kode yang bersih, mudah dipelihara, serta teruji dengan baik. Kolaborasi tim
              dan pembelajaran teknologi baru adalah apa yang mendorong saya untuk terus bertumbuh.
            </p>

            {/* Tech stack chips */}
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React', 'Laravel', 'PHP', 'MySQL', 'Angular', 'Ionic', 'Figma', 'Git'].map((tech) => (
                <span key={tech} style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '999px',
                  background: 'var(--bg-surface-hover)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.3px',
                }}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Right: capabilities + stats */}
          <div className="about-details">
            <div className="reveal from-right" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', letterSpacing: '-0.3px' }}>Kemampuan Kunci</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {capabilities.map((cap, i) => (
                  <div key={i} className={`about-capability-card reveal stagger-${i + 1}`}>
                    <div className={`about-cap-icon ${cap.iconClass}`}>
                      {cap.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{cap.title}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-stats">
              <StatCounter num={3} label="Tahun Studi" />
              <StatCounter num={12} label="Proyek Jadi" />
              <StatCounter num={15} label="Teknologi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
