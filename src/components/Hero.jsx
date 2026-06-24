import React from 'react';
import heroIllustration from '../assets/developer_hero_illustration.png';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <span className="hero-tagline">Full-Stack & Mobile Specialist</span>
          <h1 className="hero-title">
            Halo, Saya <br />
            <span className="gradient-text">Hasya Rayyan</span>
          </h1>
          <p className="hero-desc">
            Saya <strong>Bahaudin Mahardika</strong> (biasa dipanggil Rayyan). Seorang software developer yang berdedikasi membangun aplikasi web modern yang cepat dan aplikasi mobile berskala besar menggunakan kombinasi <strong>React, Vite, SQL, Laravel, Ionic, dan Angular</strong>.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
              Lihat Proyek
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
              Hubungi Saya
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <img 
              src={heroIllustration} 
              alt="Futuristic developer abstract 3D visual art illustration representing coding and creativity" 
              className="hero-image"
            />
          </div>

          {/* Floating Badges */}
          <div className="hero-badge-float badge-react">
            <div className="hero-badge-icon">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', color: 'currentColor' }}>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
                <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" fill="none" />
                <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" fill="none" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" fill="none" transform="rotate(120 50 50)" />
              </svg>
            </div>
            <div className="hero-badge-text">
              <div className="hero-badge-title">React & Angular</div>
              <div className="hero-badge-sub">Frontend Frameworks</div>
            </div>
          </div>

          <div className="hero-badge-float badge-laravel">
            <div className="hero-badge-icon">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', color: 'currentColor' }}>
                <path d="M80 20 L50 35 L20 20 L20 50 L50 65 L80 50 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="none"/>
                <path d="M50 35 L50 90" stroke="currentColor" strokeWidth="6" />
                <path d="M20 50 L50 65 L80 50" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className="hero-badge-text">
              <div className="hero-badge-title">Laravel & SQL</div>
              <div className="hero-badge-sub">Backend & Database</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
