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
    title: 'Frontend & Reactive UI',
    desc: 'Membangun Single Page Application fluid dengan React, TypeScript, dan Vite. Mengutamakan performa rendering cepat dan arsitektur komponen modular.',
  },
  {
    num: '02',
    title: 'Cross-Platform Mobile Dev',
    desc: 'Mendesain dan mengeksekusi aplikasi mobile multiplatform Android & iOS menggunakan Ionic Framework dan Capacitor dengan satu basis kode efisien.',
  },
  {
    num: '03',
    title: 'Backend Architecture & Database',
    desc: 'Merancang API RESTful aman dengan Laravel & CodeIgniter, pemodelan relasi database SQL, serta optimalisasi query database performa tinggi.',
  },
  {
    num: '04',
    title: 'Clean Code & Engineering Workflow',
    desc: 'Menerapkan branching Gitflow teratur, pengujian kontrak endpoint via Postman, dan prinsip Clean Architecture agar kode mudah di-maintain.',
  },
];

const STACK = ['React.js', 'TypeScript', 'Laravel', 'Ionic', 'MySQL', 'PHP 8', 'Angular', 'Tailwind', 'Git & GitHub', 'Vite'];

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">01 — Filosofi &amp; Karakter</span>
          <h2 className="section-title">Developer dengan<br />fokus pada kualitas.</h2>
        </div>

        <div className="about-grid">
          {/* Left — bio with coder vibe */}
          <div className="reveal from-left">
            <div className="about-body">
              <p>
                Bagi saya, menulis kode bukan sekadar membuat program berjalan, melainkan
                seni rekayasa perangkat lunak yang memadukan performa tinggi, kesederhanaan logika,
                dan kepuasan pengguna. Dari merancang skema database SQL berkecepatan tinggi
                hingga menyusun micro-interaction fluid di sisi antarmuka, setiap baris kode
                dibuat dengan pertimbangan cermat.
              </p>
              <p>
                Berbasis di <strong>Kota Batu, Jawa Timur</strong>, saya terbiasa memecahkan masalah kompleks,
                melakukan debugging dengan teliti, dan mengadopsi teknologi mutakhir seperti
                React, TypeScript, Laravel, dan Ionic. Belajar hal baru dan mengirim kode berkualitas
                ke tahap produksi adalah rutinitas yang selalu memicu semangat saya.
              </p>
            </div>

            <div className="about-stack">
              {STACK.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: '32px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              {[
                ['3+', 'Tahun Coding'],
                ['12+', 'Proyek Shipped'],
                ['15+', 'Teknologi'],
              ].map(([n, l]) => (
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
              Pilar Rekayasa Perangkat Lunak
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
