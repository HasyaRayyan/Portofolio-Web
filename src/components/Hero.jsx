import React from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

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
          <span className="hero-tagline">Software Engineer</span>
          <h1 className="hero-title">
            Halo, I'am <br />
            <span className="gradient-text">Hasya Rayyan</span>
          </h1>
          <p className="hero-desc">
            Saya <strong>Hasya Rayyan Bahaudin Mahardika</strong> (biasa dipanggil Hasya). Seorang Full-Stack Developer yang berdedikasi dalam membangun produk digital ujung-ke-ujung. Di sisi Frontend, saya berfokus merancang antarmuka pengguna (UI/UX) yang modern, estetik, dan responsif. Sementara di sisi Backend, saya mengonstruksi arsitektur sistem dan API yang andal, aman, serta teroptimasi dengan baik menggunakan PHP dan Laravel.
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
              src={hasyaRayyanPhoto} 
              alt="Hasya Rayyan Bahaudin Mahardika Portrait" 
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
