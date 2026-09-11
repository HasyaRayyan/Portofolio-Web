import React, { useRef, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

function use3DTilt(ref, strength = 7) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * strength;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -strength;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const off = () => {
      el.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    };
    const start = () => { el.style.transition = 'transform 0.1s ease'; };
    el.addEventListener('mousemove', on);
    el.addEventListener('mouseleave', off);
    el.addEventListener('mouseenter', start);
    return () => {
      el.removeEventListener('mousemove', on);
      el.removeEventListener('mouseleave', off);
      el.removeEventListener('mouseenter', start);
    };
  }, [ref, strength]);
}

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/HasyaRayyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hasyarayyanbm@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Hero() {
  const photoRef = useRef(null);
  use3DTilt(photoRef, 7);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* ── Kiri: konten ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Eyebrow */}
            <div className="hero-eyebrow reveal">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Full-Stack &amp; Mobile Developer</span>
            </div>

            {/* Nama lengkap */}
            <h1 className="hero-name reveal d1">
              Hasya Rayyan
              <span className="line2">Bahaudin Mahardika.</span>
            </h1>

            {/* Deskripsi */}
            <p className="hero-desc reveal d2">
              Membangun produk digital dari ujung ke ujung —
              antarmuka yang bersih, sistem backend yang solid,
              dan pengalaman pengguna yang selalu jadi prioritas.
            </p>

            {/* CTA */}
            <div className="hero-cta reveal d3">
              <button className="btn btn-primary" onClick={() => goto('projects')}>
                Lihat Proyek
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="btn btn-outline" onClick={() => goto('contact')}>
                Hubungi Saya
              </button>
            </div>

            {/* Social links */}
            <div className="hero-socials reveal d3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hero-social-link"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-stats reveal d4">
              {[['3+', 'Tahun Belajar'], ['12+', 'Proyek'], ['15+', 'Teknologi']].map(([n, l]) => (
                <div key={l} className="hero-stat">
                  <div className="hero-stat-num">{n}</div>
                  <div className="hero-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: foto ── */}
          <div
            className="hero-photo-wrap reveal from-right d2"
            ref={photoRef}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className="hero-photo-inner">
              <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
            </div>
            <div className="hero-photo-tag">Open to Work</div>
          </div>

        </div>
      </div>
    </section>
  );
}
