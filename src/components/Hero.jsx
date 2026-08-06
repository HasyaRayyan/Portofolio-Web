import React, { useEffect, useRef, useState } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

// 3D Tilt on mouse move
function use3DTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -12;
      const rotY = ((x - cx) / cx) * 12;
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [ref]);
}

// Typing animation hook
function useTypingEffect(words, speed = 100, pause = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const delta = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.slice(0, displayText.length - 1)
            : currentWord.slice(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, pause]);

  return displayText;
}

const TYPING_WORDS = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Laravel Expert', 'React Developer'];

// Particles data
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: Math.random() * 10 + 10,
  color: i % 3 === 0 ? 'rgba(124,58,237,0.5)' : i % 3 === 1 ? 'rgba(103,232,249,0.5)' : 'rgba(167,139,250,0.4)',
}));

export default function Hero() {
  const cardRef = useRef(null);
  const typingText = useTypingEffect(TYPING_WORDS, 90, 2200);

  use3DTilt(cardRef);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 75, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section container" style={{ position: 'relative' }}>
      <div className="hero-wrapper">
        {/* Content Left */}
        <div className="hero-content reveal" style={{ animationDelay: '0.1s' }}>
          <span className="hero-tagline">Portfolio 2025</span>

          <h1 className="hero-title">
            Halo, I'm <br />
            <span className="gradient-text">Hasya Rayyan</span>
          </h1>

          {/* Typing effect subtitle */}
          <div style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            minHeight: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}>
            <span className="typing-text">{typingText}</span>
            <span className="typing-cursor" />
          </div>

          <p className="hero-desc">
            Saya <strong>Hasya Rayyan Bahaudin Mahardika</strong> — seorang Full-Stack Developer
            yang berdedikasi membangun produk digital end-to-end. Frontend yang estetik &amp; responsif,
            Backend yang andal &amp; teroptimasi dengan PHP &amp; Laravel.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" id="hero-view-projects" onClick={() => handleScrollTo('projects')}>
              Lihat Proyek
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="btn btn-secondary" id="hero-contact" onClick={() => handleScrollTo('contact')}>
              Hubungi Saya
            </button>
          </div>

          {/* Social Row */}
          <div className="hero-socials">
            <span className="hero-social-label">Temukan saya di</span>
            {/* GitHub */}
            <a href="https://github.com/HasyaRayyan" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Visual Right - 3D Card */}
        <div className="hero-visual">
          <div className="hero-glow-ring" />

          <div className="hero-3d-card" ref={cardRef}>
            {/* Floating Particles */}
            <div className="hero-particles" aria-hidden="true">
              {PARTICLES.map((p) => (
                <div
                  key={p.id}
                  className="particle"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.left}%`,
                    bottom: 0,
                    background: p.color,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                  }}
                />
              ))}
            </div>

            <div className="hero-image-container">
              <img
                src={hasyaRayyanPhoto}
                alt="Hasya Rayyan Bahaudin Mahardika Portrait"
                className="hero-image"
              />
            </div>

            {/* Floating Badges */}
            <div className="hero-badge-float badge-react">
              <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
              </svg>
              <div className="hero-badge-text">
                <div className="hero-badge-title">React</div>
                <div className="hero-badge-sub">Frontend</div>
              </div>
            </div>

            <div className="hero-badge-float badge-laravel">
              <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="#f05340" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <div className="hero-badge-text">
                <div className="hero-badge-title">Laravel</div>
                <div className="hero-badge-sub">Backend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
