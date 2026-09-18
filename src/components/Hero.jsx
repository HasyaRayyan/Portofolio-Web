import React, { useState, useRef, useEffect } from 'react';
import hasyaRayyanPhoto from '../assets/hasya_rayyan.jpg';

/* ─── 3D Looping Lanyard SVG with Dynamic Bending & 360° Drag ─── */
function LanyardStrapSVG({ x, y }) {
  // Displaced clasp anchor coordinates
  const cx = 140 + x * 0.7;
  const cy = 158 + y * 0.7;

  // Dynamic bezier control points that bow & stretch towards the pull direction
  const leftCpX = 85 + x * 0.35;
  const leftCpY = 85 + y * 0.35;
  const rightCpX = 195 + x * 0.35;
  const rightCpY = 85 + y * 0.35;

  const leftStrap = `M 85 0 C 85 45, ${leftCpX} ${leftCpY}, ${cx - 10} ${cy - 20}`;
  const rightStrap = `M 195 0 C 195 45, ${rightCpX} ${rightCpY}, ${cx + 10} ${cy - 20}`;
  const backLoop = `M 85 0 C 85 70, 195 70, 195 0`;

  return (
    <svg className="lanyard-svg-stage" viewBox="0 0 280 215" fill="none">
      <defs>
        {/* Metallic Chrome Gradient for Hardware */}
        <linearGradient id="metalChrome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5fa" />
          <stop offset="35%" stopColor="#b8b8c8" />
          <stop offset="70%" stopColor="#e2e2ec" />
          <stop offset="100%" stopColor="#7a7a8a" />
        </linearGradient>
      </defs>

      {/* 3D Back Loop (Ribbon in background perspective) */}
      <path d={backLoop} className="lanyard-strap-bg" strokeWidth="24" strokeLinecap="round" />
      <path d={backLoop} className="lanyard-stripe-bg" strokeWidth="3" />

      {/* Front Left Ribbon */}
      <path d={leftStrap} className="lanyard-strap-main" strokeWidth="22" strokeLinecap="round" />
      <path d={leftStrap} className="lanyard-strap-stripe" strokeWidth="3.5" />

      {/* Front Right Ribbon */}
      <path d={rightStrap} className="lanyard-strap-main" strokeWidth="22" strokeLinecap="round" />
      <path d={rightStrap} className="lanyard-strap-stripe" strokeWidth="3.5" />

      {/* Metal Crimp Band (gathering both straps) */}
      <g transform={`translate(${cx}, ${cy - 16})`}>
        <rect
          x="-15"
          y="-6"
          width="30"
          height="12"
          rx="3"
          className="lanyard-metal-band"
        />
        <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
      </g>

      {/* Metal Swivel Ring & Lobster Claw Carabiner Clip */}
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Swivel Ring */}
        <ellipse cx="0" cy="-5" rx="7.5" ry="4" className="lanyard-metal-ring" />
        {/* Carabiner Hook Body */}
        <path
          d="M -7 -4 C -12 11, -7 24, 0 31 C 7 24, 12 11, 7 -4 C 4 -1, -4 -1, -7 -4 Z"
          className="lanyard-metal-hook"
        />
        {/* Spring Trigger Latch */}
        <line x1="-3" y1="3" x2="4" y2="15" className="lanyard-metal-latch" strokeWidth="2.5" strokeLinecap="round" />
        {/* Hook tip entering card hole */}
        <circle cx="0" cy="29" r="3" className="lanyard-hook-tip" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0, rotZ: 0, rotX: 0, rotY: 0 });
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  // 360-Degree Free Drag & Damped Spring Physics
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      if (e.button && e.button !== 0) return;
      isDraggingRef.current = true;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      startPosRef.current = { x: e.clientX, y: e.clientY };
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) {
        // Subtle 3D tilt on hover
        const r = el.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
        setPos((prev) => ({
          ...prev,
          rotZ: nx * 3,
          rotX: -ny * 5,
          rotY: nx * 6,
        }));
        return;
      }

      // Calculate 360-degree free displacement
      const rawDx = e.clientX - startPosRef.current.x;
      const rawDy = e.clientY - startPosRef.current.y;
      const dist = Math.hypot(rawDx, rawDy);
      // Smooth rubber-band spring dampening across any angle
      const damping = 1 / (1 + dist * 0.0035);
      const x = rawDx * damping;
      const y = rawDy * damping;
      currentPosRef.current = { x, y };

      const rotZ = x * 0.18 + y * 0.03;
      const rotX = -y * 0.12;
      const rotY = x * 0.14;

      setPos({ x, y, rotZ, rotX, rotY });
    };

    const onPointerUp = (e) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      try { el.releasePointerCapture(e.pointerId); } catch (_) {}

      // Coupled 2D Harmonic Spring with damping in X and Y
      let x = currentPosRef.current.x;
      let y = currentPosRef.current.y;
      let vx = 0;
      let vy = 0;
      const k = 0.14; // stiffness
      const d = 0.77; // friction damping

      const step = () => {
        const fx = -k * x;
        vx = (vx + fx) * d;
        x += vx;

        const fy = -k * y;
        vy = (vy + fy) * d;
        y += vy;

        const rotZ = (x * 0.18) + (vx * 0.28) - (vy * 0.1);
        const rotX = -(y * 0.12) - (vy * 0.25);
        const rotY = (x * 0.14) + (vx * 0.2);

        setPos({ x, y, rotZ, rotX, rotY });

        if (Math.abs(x) > 0.2 || Math.abs(y) > 0.2 || Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2) {
          animRef.current = requestAnimationFrame(step);
        } else {
          setPos({ x: 0, y: 0, rotZ: 0, rotX: 0, rotY: 0 });
          currentPosRef.current = { x: 0, y: 0 };
        }
      };

      animRef.current = requestAnimationFrame(step);
    };

    const onMouseLeave = () => {
      if (isDraggingRef.current) return;
      setPos({ x: 0, y: 0, rotZ: 0, rotX: 0, rotY: 0 });
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

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

            {/* CTA Buttons & Socials (GitHub & LinkedIn) */}
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

          {/* ── Kanan: Foto Lanyard ID Badge 3D yang Bisa Ditarik 360° ke Mana Saja ── */}
          <div className="hero-photo-wrap reveal from-right d2">
            <div
              className="lanyard-interactive-wrap"
              ref={containerRef}
              title="Tarik tali atau kartu ke mana saja dan lepas untuk membal!"
            >
              {/* 3D Curved Ribbon Strap & Lobster Hook */}
              <LanyardStrapSVG x={pos.x} y={pos.y} />

              {/* ID Card Badge */}
              <div
                className="lanyard-card"
                style={{
                  transform: `perspective(1000px) translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0) rotateZ(${pos.rotZ.toFixed(1)}deg) rotateX(${pos.rotX.toFixed(1)}deg) rotateY(${pos.rotY.toFixed(1)}deg)`,
                }}
              >
                {/* Round Eyelet Grommet Ring Hole at Top */}
                <div className="badge-eyelet-ring">
                  <div className="badge-eyelet-hole" />
                </div>

                {/* Photo */}
                <div className="badge-photo-wrapper">
                  <img src={hasyaRayyanPhoto} alt="Hasya Rayyan Bahaudin Mahardika" />
                </div>

                {/* Details */}
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

                {/* Barcode & ID Footer */}
                <div className="badge-barcode">
                  <div className="barcode-bars" />
                  <span className="barcode-text">HR • DEV • 2026</span>
                </div>

                {/* Drag Hint */}
                <div className="lanyard-drag-hint">
                  <span>✦ Tarik kemana saja</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
