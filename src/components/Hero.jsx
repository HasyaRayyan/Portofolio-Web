import React, { useRef, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

function useLanyardPhysics(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isHovering = false;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      // Relative offset from center: -1 (left) to 1 (right)
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      // Relative offset from top (0) to bottom (1)
      const ny = (e.clientY - r.top) / r.height;

      // Realistic hanging pendulum physics pivoted from top-center
      const swayZ = nx * 8;      // Natural swing angle
      const tiltY = nx * 14;     // 3D rotation facing mouse
      const tiltX = -ny * 7;     // Slight tilt backwards when mouse moves down

      el.style.transform = `perspective(1000px) rotateZ(${swayZ}deg) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
    };

    const onEnter = () => {
      isHovering = true;
      el.style.animation = 'none';
      el.style.transition = 'transform 0.12s ease-out';
    };

    const onLeave = () => {
      isHovering = false;
      el.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)';
      el.style.transform = 'perspective(1000px) rotateZ(0deg) rotateY(0deg) rotateX(0deg)';
      setTimeout(() => {
        if (!isHovering && el) {
          el.style.animation = 'lanyardIdleSway 6s ease-in-out infinite alternate';
        }
      }, 900);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
}

export default function Hero() {
  const lanyardRef = useRef(null);
  useLanyardPhysics(lanyardRef);

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
              <span className="hero-eyebrow-text">Full-Stack &amp; Mobile Developer</span>
            </div>

            {/* Nama lengkap */}
            <h1 className="hero-name reveal d1">
              Hasya Rayyan
              <span className="line2">Bahaudin Mahardika.</span>
            </h1>

            {/* Deskripsi ringkas berkarakter */}
            <p className="hero-desc reveal d2">
              Merancang sistem dari baris kode pertama hingga performa skala produksi.
              Menggabungkan arsitektur backend yang solid dengan antarmuka web &amp; mobile yang responsif, terukur, dan memanjakan pengguna.
            </p>

            {/* CTA Buttons & Socials (GitHub & LinkedIn tertata rapi) */}
            <div className="hero-actions-row reveal d3">
              <div className="hero-cta-btns">
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
              {[['3+', 'Tahun Eksplorasi'], ['12+', 'Proyek Selesai'], ['15+', 'Modern Stack']].map(([n, l]) => (
                <div key={l} className="hero-stat">
                  <div className="hero-stat-num">{n}</div>
                  <div className="hero-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: Foto Developer Lanyard ID Badge ── */}
          <div className="hero-photo-wrap reveal from-right d2">
            <div className="lanyard-scene-wrapper">
              <div className="lanyard-scene" ref={lanyardRef}>

                {/* Tali Lanyard (Strap Ribbon) */}
                <div className="lanyard-strap-top">
                  <div className="lanyard-ribbon-left" />
                  <div className="lanyard-ribbon-right" />
                  <div className="lanyard-ribbon-center">
                    <span className="ribbon-text">HASYA RAYYAN ✦ DEV PASS 2026</span>
                  </div>
                </div>

                {/* Hardware Gantungan: Metal Ferrule + Swivel Clasp */}
                <div className="lanyard-hardware">
                  <div className="lanyard-ferrule" />
                  <div className="lanyard-swivel-ring" />
                  <div className="lanyard-metal-clasp">
                    <svg width="22" height="32" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7" y="1" width="10" height="4" rx="2" fill="currentColor" opacity="0.8" />
                      <circle cx="12" cy="9" r="4.5" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M9 13V24C9 27 15 27 15 24V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="12" cy="27" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* ID Card Holder Badge */}
                <div className="lanyard-badge-card">

                  {/* Lubang Gantungan (Punch Slot Hole) */}
                  <div className="badge-slot-punch">
                    <div className="badge-slot-opening" />
                    <div className="badge-slot-metal-clip" />
                  </div>

                  {/* Header Badge */}
                  <div className="badge-header-row">
                    <div className="badge-chip-icon" title="NFC / RFID Chip">
                      <span className="chip-gold-plate" />
                      <span className="chip-trace-h" />
                      <span className="chip-trace-v" />
                    </div>
                    <div className="badge-status-pill">
                      <span className="badge-live-dot" />
                      <span className="badge-status-title">DEV ACCESS // LVL 01</span>
                    </div>
                    <div className="badge-nfc-symbol">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M2 12a10 10 0 0 1 10-10" />
                        <path d="M5 12a7 7 0 0 1 7-7" />
                        <path d="M8 12a4 4 0 0 1 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Foto Hasya Rayyan dalam Badge */}
                  <div className="badge-photo-frame">
                    <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
                    <div className="badge-photo-badge-label">
                      <span>VERIFIED ENGINEER</span>
                    </div>
                  </div>

                  {/* Identitas Pengembang */}
                  <div className="badge-identity">
                    <h3 className="badge-name">HASYA RAYYAN</h3>
                    <div className="badge-subname">BAHAUDIN MAHARDIKA</div>
                    <div className="badge-role-tag">FULL-STACK &amp; MOBILE CRAFTSMAN</div>
                  </div>

                  {/* Meta Specs */}
                  <div className="badge-meta-grid">
                    <div className="badge-meta-cell">
                      <span className="meta-lbl">DEPT</span>
                      <span className="meta-val">ENG &amp; ARCH</span>
                    </div>
                    <div className="badge-meta-cell">
                      <span className="meta-lbl">LOCATION</span>
                      <span className="meta-val">BATU, ID</span>
                    </div>
                    <div className="badge-meta-cell">
                      <span className="meta-lbl">PASS ID</span>
                      <span className="meta-val">HR-2026-DEV</span>
                    </div>
                  </div>

                  {/* Holographic Security Strip & Barcode Footer */}
                  <div className="badge-security-footer">
                    <div className="badge-hologram-strip" />
                    <div className="badge-barcode-wrap">
                      <div className="badge-barcode-bars">
                        <span style={{ width: '2px' }} />
                        <span style={{ width: '4px' }} />
                        <span style={{ width: '1px' }} />
                        <span style={{ width: '3px' }} />
                        <span style={{ width: '5px' }} />
                        <span style={{ width: '2px' }} />
                        <span style={{ width: '1px' }} />
                        <span style={{ width: '4px' }} />
                        <span style={{ width: '2px' }} />
                        <span style={{ width: '3px' }} />
                        <span style={{ width: '6px' }} />
                        <span style={{ width: '1px' }} />
                        <span style={{ width: '3px' }} />
                        <span style={{ width: '2px' }} />
                        <span style={{ width: '4px' }} />
                        <span style={{ width: '1px' }} />
                        <span style={{ width: '3px' }} />
                      </div>
                      <span className="badge-barcode-serial">HR • 99042026 • PASS</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
