import React, { useRef, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

function useDraggableSpringLanyard(cardRef, strapRef) {
  useEffect(() => {
    const card = cardRef.current;
    const strap = strapRef.current;
    if (!card) return;

    let isDragging = false;
    let startY = 0;
    let startX = 0;
    let currentY = 0;
    let currentX = 0;
    let springAnimId = null;

    // Subtle idle hover 3D tilt when not dragging
    const onMouseMove = (e) => {
      if (isDragging) return;
      const r = card.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = (e.clientY - r.top) / r.height;
      card.style.transform = `perspective(900px) rotateY(${nx * 8}deg) rotateX(${-ny * 5}deg)`;
    };

    const onMouseLeave = () => {
      if (isDragging) return;
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    };

    const onMouseEnter = () => {
      if (isDragging) return;
      card.style.transition = 'transform 0.1s ease-out';
    };

    // Pointer down: initiate pull
    const onPointerDown = (e) => {
      isDragging = true;
      if (springAnimId) cancelAnimationFrame(springAnimId);
      startY = e.clientY;
      startX = e.clientX;
      card.style.transition = 'none';
      if (strap) strap.style.transition = 'none';
      card.style.cursor = 'grabbing';
      card.setPointerCapture(e.pointerId);
    };

    // Pointer move: pull down
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const rawDeltaY = e.clientY - startY;
      const rawDeltaX = e.clientX - startX;

      if (rawDeltaY > 0) {
        currentY = Math.min(Math.pow(rawDeltaY, 0.82) * 2.2, 140);
      } else {
        currentY = Math.max(rawDeltaY * 0.2, -20);
      }
      currentX = rawDeltaX * 0.15;

      const tiltZ = currentX * 0.4;
      card.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) rotateZ(${tiltZ.toFixed(1)}deg)`;

      if (strap) {
        const strapHeight = Math.max(46, 52 + currentY * 0.45);
        strap.style.height = `${strapHeight.toFixed(1)}px`;
      }
    };

    // Pointer up: spring bounce back up!
    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      card.style.cursor = 'grab';
      try { card.releasePointerCapture(e.pointerId); } catch (_) {}

      // Physical spring damping oscillation
      let y = currentY;
      let vy = 0;
      let x = currentX;
      let vx = 0;
      const k = 0.16; // spring stiffness
      const d = 0.74; // damping friction

      const step = () => {
        const fy = -k * y;
        vy = (vy + fy) * d;
        y += vy;

        const fx = -k * x;
        vx = (vx + fx) * d;
        x += vx;

        const rot = (x * 0.5) + (vy * 0.15);
        card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateZ(${rot.toFixed(2)}deg)`;

        if (strap) {
          const strapHeight = Math.max(44, 52 + y * 0.45);
          strap.style.height = `${strapHeight.toFixed(1)}px`;
        }

        if (Math.abs(y) > 0.3 || Math.abs(vy) > 0.3 || Math.abs(x) > 0.3) {
          springAnimId = requestAnimationFrame(step);
        } else {
          card.style.transform = '';
          if (strap) strap.style.height = '';
          currentY = 0;
          currentX = 0;
        }
      };

      springAnimId = requestAnimationFrame(step);
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);
    card.addEventListener('pointerdown', onPointerDown);
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerup', onPointerUp);
    card.addEventListener('pointercancel', onPointerUp);

    return () => {
      if (springAnimId) cancelAnimationFrame(springAnimId);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
      card.removeEventListener('pointerdown', onPointerDown);
      card.removeEventListener('pointermove', onPointerMove);
      card.removeEventListener('pointerup', onPointerUp);
      card.removeEventListener('pointercancel', onPointerUp);
    };
  }, [cardRef, strapRef]);
}

export default function Hero() {
  const cardRef = useRef(null);
  const strapRef = useRef(null);
  useDraggableSpringLanyard(cardRef, strapRef);

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

          {/* ── Kanan: Foto Lanyard ID Badge yang Bisa Ditarik & Membal ── */}
          <div className="hero-photo-wrap reveal from-right d2">
            <div className="simple-lanyard">

              {/* Tali Lanyard Gantung yang Melar saat ditarik */}
              <div className="simple-lanyard-strap" ref={strapRef}>
                <div className="strap-line" />
                <div className="strap-metal-clip" />
              </div>

              {/* ID Card Badge Interaktif (Bisa ditarik ke bawah & mantul ke atas) */}
              <div
                className="simple-lanyard-card"
                ref={cardRef}
                title="Tarik ke bawah dan lepas untuk membal!"
              >
                {/* Lubang Pengait Badge */}
                <div className="badge-slot-cutout" />

                {/* Foto Portrait */}
                <div className="badge-photo-wrapper">
                  <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
                </div>

                {/* Keterangan Identitas Bersih */}
                <div className="badge-details">
                  <h3 className="badge-name">Hasya Rayyan</h3>
                  <p className="badge-role">Full-Stack &amp; Mobile Developer</p>
                  <span className="badge-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Kota Batu, Indonesia
                  </span>
                </div>

                {/* Hint interaktif halus */}
                <div className="lanyard-drag-hint">
                  <span>↓ Tarik untuk membal</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
