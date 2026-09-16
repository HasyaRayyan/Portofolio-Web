import React, { useRef, useState, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

function use3DTilt(ref, strength = 6) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * strength;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -strength;
      el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const off = () => {
      el.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
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
    href: 'https://www.linkedin.com/in/hasyarayyan',
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
  const cardRef = useRef(null);
  use3DTilt(cardRef, 7);

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'terminal'

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* ── Kiri: Konten Coder Vibe ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Live Status Pill */}
            <div className="hero-status-pill reveal">
              <span className="hero-pulse-dot" />
              <span className="hero-status-text">Siap untuk Proyek &amp; Kolaborasi Rekayasa Software</span>
            </div>

            {/* Eyebrow */}
            <div className="hero-eyebrow reveal d1">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Software Engineer &amp; Full-Stack Craftsman</span>
            </div>

            {/* Nama lengkap */}
            <h1 className="hero-name reveal d2">
              Hasya Rayyan
              <span className="line2">Bahaudin Mahardika.</span>
            </h1>

            {/* Deskripsi Coder Vibe */}
            <p className="hero-desc reveal d3">
              Passionate software engineer yang terobsesi meracik sistem end-to-end: dari arsitektur
              backend yang kokoh, database efisien, hingga antarmuka web &amp; mobile yang fluid dan responsif.
              Menerjemahkan logika kompleks menjadi kode yang bersih, teruji, dan scalable.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta reveal d4">
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
            <div className="hero-socials reveal d4">
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

            {/* Coder Telemetry Stats */}
            <div className="hero-stats reveal d5">
              {[
                ['3+', 'Tahun Coding'],
                ['12+', 'Proyek Shipped'],
                ['15+', 'Teknologi'],
                ['100%', 'Vibe Coder'],
              ].map(([n, l]) => (
                <div key={l} className="hero-stat">
                  <div className="hero-stat-num">{n}</div>
                  <div className="hero-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: Interactive Coder Card & Terminal ── */}
          <div
            className="hero-photo-wrap reveal from-right d2"
            ref={cardRef}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className="coder-window-card">
              {/* Window Bar Controls */}
              <div className="coder-window-header">
                <div className="coder-window-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <div className="coder-window-tabs">
                  <button
                    type="button"
                    className={`coder-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <span>hasya_rayyan.jpg</span>
                  </button>
                  <button
                    type="button"
                    className={`coder-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('terminal')}
                  >
                    <span>profile.ts</span>
                  </button>
                </div>
                <div className="coder-window-location">Kota Batu, ID</div>
              </div>

              {/* Window Content */}
              {activeTab === 'profile' ? (
                <div className="coder-profile-view">
                  <div className="hero-photo-inner">
                    <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
                  </div>
                  <div className="hero-photo-tag">● Kota Batu, ID • Open to Work</div>

                  {/* Floating Micro-Telemetry Pill */}
                  <div className="coder-floating-pill">
                    <span className="coder-pill-indicator" />
                    <span>git:(main) • Ready to ship</span>
                  </div>
                </div>
              ) : (
                <div className="coder-terminal-view">
                  <pre className="coder-code-block">
                    <code>
                      <span className="code-keyword">const</span> <span className="code-var">developer</span>: <span className="code-type">Engineer</span> = {'{\n'}
                      {'  '}name: <span className="code-string">"Hasya Rayyan"</span>,{'\n'}
                      {'  '}role: <span className="code-string">"Full-Stack &amp; Mobile"</span>,{'\n'}
                      {'  '}location: <span className="code-string">"Kota Batu, Jawa Timur"</span>,{'\n'}
                      {'  '}primaryStack: [{'\n'}
                      {'    '}<span className="code-string">"React"</span>, <span className="code-string">"TypeScript"</span>,{'\n'}
                      {'    '}<span className="code-string">"Laravel"</span>, <span className="code-string">"Ionic"</span>,{'\n'}
                      {'    '}<span className="code-string">"MySQL"</span>, <span className="code-string">"Tailwind"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}motto: <span className="code-string">"Code with precision."</span>,{'\n'}
                      {'  '}status: <span className="code-status">"READY_TO_COLLABORATE"</span>{'\n'}
                      {'}'};{'\n\n'}
                      <span className="code-comment">// Click 'hasya_rayyan.jpg' tab to view photo</span>
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
