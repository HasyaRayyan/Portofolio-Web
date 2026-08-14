import React, { useRef, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

// Clean 3D tilt — subtle and tasteful
function use3DTilt(ref, strength = 10) {
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

export default function Hero() {
  const photoRef = useRef(null);
  use3DTilt(photoRef, 8);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* Left — content */}
          <div>
            <div className="hero-eyebrow reveal">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Full-Stack Developer &amp; UI/UX</span>
            </div>

            <h1 className="hero-name reveal d1">
              Hasya
              <span className="line2">Rayyan.</span>
            </h1>

            <p className="hero-desc reveal d2">
              Saya <strong>Hasya Rayyan Bahaudin Mahardika</strong> — membangun produk digital
              dari ujung ke ujung. Frontend yang bersih, backend yang solid, dan desain yang
              selalu menempatkan pengguna di pusat segalanya.
            </p>

            <div className="hero-cta reveal d3">
              <button className="btn btn-primary" id="hero-projects" onClick={() => goto('projects')}>
                Lihat Proyek
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="btn btn-outline" id="hero-contact" onClick={() => goto('contact')}>
                Hubungi Saya
              </button>
            </div>

            <div className="hero-stats reveal d4">
              <div className="hero-stat">
                <div className="hero-stat-num">3+</div>
                <div className="hero-stat-label">Tahun Belajar</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">12+</div>
                <div className="hero-stat-label">Proyek Selesai</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">15+</div>
                <div className="hero-stat-label">Teknologi</div>
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero-photo-wrap reveal from-right d1" ref={photoRef}>
            <div className="hero-photo-inner">
              <img
                src={hasyaRayyanPhoto}
                alt="Hasya Rayyan Bahaudin Mahardika"
              />
            </div>
            <div className="hero-photo-tag">Available for work</div>
          </div>

        </div>
      </div>
    </section>
  );
}
