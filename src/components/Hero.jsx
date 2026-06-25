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
          <span className="hero-tagline">Web &amp; UI/UX Specialist</span>
          <h1 className="hero-title">
            Halo, Saya <br />
            <span className="gradient-text">Hasya Rayyan</span>
          </h1>
          <p className="hero-desc">
            Saya <strong>Bahaudin Mahardika</strong> (biasa dipanggil Rayyan). Seorang developer yang berdedikasi dalam merancang antarmuka pengguna yang intuitif dan estetik (<strong>UI/UX</strong>) serta membangun sistem backend web yang andal menggunakan <strong>PHP dan Laravel</strong>.
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
