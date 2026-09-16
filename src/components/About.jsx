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
    title: 'Frontend Architecture & Reactive UI',
    desc: 'Menyusun arsitektur Single Page Application (SPA) cepat menggunakan React, Vite, dan TypeScript dengan state management modular.',
  },
  {
    num: '02',
    title: 'Cross-Platform Mobile Engineering',
    desc: 'Membangun aplikasi mobile multiplatform Android & iOS dari satu basis kode terpadu dengan Ionic Framework dan Capacitor plugins.',
  },
  {
    num: '03',
    title: 'Backend Systems & Database Design',
    desc: 'Merancang RESTful API terstruktur dengan Laravel / PHP dan optimasi indexing query database SQL performa tinggi.',
  },
];

const STACK = ['React', 'TypeScript', 'Tailwind', 'Laravel', 'PHP 8', 'MySQL', 'Angular', 'Ionic', 'Git', 'Vite'];

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">01 — Filosofi &amp; Karakter</span>
          <h2 className="section-title">Rekayasa Software<br />dengan Standar Presisi.</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Menghubungkan arsitektur kode yang tangguh dengan antarmuka yang intuitif dan berdaya guna tinggi.
          </p>
        </div>

        <div className="about-grid">
          {/* Left — bio */}
          <div className="reveal from-left">
            <div className="about-body">
              <p>
                Bagi saya, koding bukan sekadar menyelesaikan baris sintaks—melainkan seni memecahkan masalah nyata melalui arsitektur sistem yang modular, bersih, dan terukur.
              </p>
              <p>
                Saya mendalami siklus pengembangan software secara utuh: mulai dari pemodelan skema relasional database, penyusunan kontrak RESTful API berkeamanan tinggi, hingga implementasi komponen UI reaktif yang responsif di berbagai ukuran layar.
              </p>
              <p>
                Berbasis di Kota Batu, Jawa Timur, saya terus mengeksplorasi ekosistem teknologi mutakhir untuk menghasilkan aplikasi digital yang cepat dimuat, mudah di-maintain, dan memberikan dampak nyata bagi pengguna.
              </p>
            </div>

            <div className="about-stack">
              {STACK.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: '32px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              {[['3+', 'Tahun Eksplorasi'], ['12+', 'Proyek Selesai'], ['15+', 'Teknologi Dikuasai']].map(([n, l]) => (
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
              Fokus Rekayasa &amp; Kapabilitas
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
