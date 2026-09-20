import React from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* ── Kiri: Konten Simpel & Elegan ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Eyebrow minimalis */}
            <div className="hero-eyebrow reveal">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">{t.hero.eyebrow}</span>
            </div>

            {/* Nama lengkap */}
            <h1 className="hero-name reveal d1">
              {t.hero.namePart1}
              <span className="line2">{t.hero.namePart2}</span>
            </h1>

            {/* Deskripsi ringkas berkarakter */}
            <p className="hero-desc reveal d2">
              {t.hero.desc}
            </p>

            {/* CTA Buttons & Socials (GitHub & LinkedIn) */}
            <div className="hero-actions-row reveal d3">
              <div className="hero-cta-btns">
                <button className="btn btn-primary" onClick={() => goto('projects')}>
                  {t.hero.ctaProjects}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button className="btn btn-outline" onClick={() => goto('contact')}>
                  {t.hero.ctaContact}
                </button>
              </div>

              {/* GitHub & LinkedIn Social Pills */}
              <div className="hero-social-pills">
                <a
                  href="https://github.com/HasyaRayyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill"
                  title="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hasyarayyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill"
                  title="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-stats reveal d4">
              {t.hero.stats.map(({ num, label }) => (
                <div key={label} className="hero-stat">
                  <div className="hero-stat-num">{num}</div>
                  <div className="hero-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: Profil Card Biasa & Elegan ── */}
          <div className="hero-photo-wrap reveal from-right d2">
            <div className="hero-profile-card">
              {/* Photo Frame */}
              <div className="hero-card-photo-wrap">
                <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
              </div>

              {/* Card Body: Identity & Role */}
              <div className="hero-card-body">
                <h3 className="hero-card-name">Hasya Rayyan</h3>
                <p className="hero-card-role">{t.hero.cardRole}</p>

                {/* Tech Chips */}
                <div className="hero-card-chips">
                  <span className="hero-chip">React</span>
                  <span className="hero-chip">Laravel</span>
                  <span className="hero-chip">Ionic</span>
                  <span className="hero-chip">TypeScript</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
