import React, { useEffect, useRef, useState } from 'react';

// Counter animation
function Counter({ target, suffix = '+' }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.6 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let n = 0;
    const end = parseInt(target);
    const step = Math.ceil(end / 30);
    const t = setInterval(() => {
      n = Math.min(n + step, end);
      setVal(n);
      if (n >= end) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [started, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const capabilities = [
  {
    num: '01',
    title: 'Frontend & Responsive Web',
    desc: 'Membangun antarmuka modern yang interaktif dan responsif dengan React, Angular, dan Vite.',
  },
  {
    num: '02',
    title: 'Cross-Platform Mobile',
    desc: 'Mengembangkan aplikasi Android & iOS dari satu basis kode menggunakan Ionic Framework.',
  },
  {
    num: '03',
    title: 'Backend & Database',
    desc: 'Merancang RESTful API yang aman dengan Laravel dan mengoptimalkan query database SQL.',
  },
];

const STACK = ['React', 'Laravel', 'PHP', 'MySQL', 'Angular', 'Ionic', 'Figma', 'Git', 'Vite', 'TypeScript'];

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">01 — Tentang Saya</span>
          <h2 className="section-title">Developer dengan<br />fokus pada kualitas.</h2>
        </div>

        <div className="about-grid">
          {/* Left — bio */}
          <div className="reveal from-left">
            <div className="about-body">
              <p>
                Dengan minat mendalam dalam software development, saya mengkhususkan diri
                menghubungkan keindahan antarmuka web dengan kestabilan arsitektur sistem backend.
                Setiap proyek dimulai dari memahami kebutuhan pengguna terlebih dahulu.
              </p>
              <p>
                Saya senang memecahkan masalah kompleks, merancang skema database yang efisien,
                dan menulis kode yang bersih serta mudah dipelihara. Belajar teknologi baru
                adalah bahan bakar saya setiap harinya.
              </p>
            </div>

            <div className="about-stack">
              {STACK.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: '32px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              {[['3+', 'Tahun Studi'], ['12+', 'Proyek'], ['15+', 'Teknologi']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, lineHeight: 1, marginBottom: '4px' }}>
                    <Counter target={parseInt(n)} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-ghost)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — capabilities */}
          <div className="reveal from-right">
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Yang Saya Kerjakan
            </p>
            <div className="cap-list">
              {capabilities.map((c, i) => (
                <div key={c.num} className={`cap-item reveal d${i + 1}`}>
                  <span className="cap-num">{c.num}</span>
                  <div className="cap-content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
