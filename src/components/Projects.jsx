import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import posDashboard from '../assets/member_loyalty_pos_dashboard.png';
import posCart from '../assets/member_loyalty_pos_cart.png';
import posCheckout from '../assets/member_loyalty_pos_checkout.png';
import posMember from '../assets/member_loyalty_pos_member.png';
import posRewards from '../assets/member_loyalty_pos_rewards.png';
import educonnectMockup from '../assets/educonnect_mockup.png';
import fintrackMockup from '../assets/fintrack_mockup.png';

function ProjectCard({ project, index, onOpenGallery }) {
  const { t } = useLanguage();
  const frameNum = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div className="proj-card">
      {/* 3-Image Stack Stage */}
      <div
        className="proj-card-stage"
        onClick={() => project.gallery && onOpenGallery(project)}
        style={{ cursor: project.gallery ? 'pointer' : 'default' }}
        title={project.gallery ? t.projects.clickGalleryHint : undefined}
      >
        <div className="proj-stack">
          <div className="proj-stack-card stack-left">
            <img src={project.stack[0]} alt={`${project.title} screen 1`} loading="lazy" />
          </div>
          <div className="proj-stack-card stack-right">
            <img src={project.stack[1]} alt={`${project.title} screen 2`} loading="lazy" />
          </div>
          <div className="proj-stack-card stack-center">
            <img src={project.stack[2]} alt={`${project.title} screen 3`} loading="lazy" />
          </div>
        </div>

        {project.gallery && (
          <span className="proj-stage-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>{project.gallery.length} {t.projects.galleryBadge}</span>
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="proj-card-body">
        <div className="proj-card-topmeta">
          <span className="proj-card-num">{frameNum}</span>
          <span className="proj-card-category">{project.category}</span>
        </div>

        <h3 className="proj-card-title">{project.title}</h3>
        <span className="proj-card-subtitle">{project.subtitle}</span>
        <p className="proj-card-desc">{project.desc}</p>

        {/* Tech Chips */}
        <div className="proj-card-tags">
          {project.tags.map((tg) => (
            <span key={tg} className="proj-card-tag">{tg}</span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="proj-card-actions">
          {project.gallery ? (
            <button
              type="button"
              className="proj-action-btn primary"
              onClick={() => onOpenGallery(project)}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>{t.projects.galleryBtn}</span>
            </button>
          ) : (
            <span />
          )}

          <div className="proj-card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-action-link"
                title={t.projects.viewCode}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <span>Code</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-action-link live"
                title={t.projects.openDemo}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  // 9 Total Projects (3 real + 6 realistic dummy projects)
  const baseProjects = [
    {
      stack: [posDashboard, posMember, posCheckout],
      gallery: [
        { src: posDashboard, title: 'Dashboard Kasir — Omzet, Transaksi & Grafik Mingguan' },
        { src: posCart, title: 'Keranjang Kasir — Input & Verifikasi Nomor Member' },
        { src: posCheckout, title: 'Konfirmasi Bayar — Perhitungan Poin Otomatis (+79 Poin)' },
        { src: posMember, title: 'Aplikasi Pelanggan — Status Akun & Saldo Poin' },
        { src: posRewards, title: 'Katalog Hadiah — Penukaran Poin Menu Gratis' },
      ],
      tags: ['Point of Sale', 'Loyalty System', 'Ionic', 'Angular', 'MySQL'],
      github: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
      live: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
    },
    {
      stack: [educonnectMockup, educonnectMockup, educonnectMockup],
      gallery: [
        { src: educonnectMockup, title: 'EduConnect — Dasbor & Manajemen Akademik Sekolah' },
      ],
      tags: ['Laravel', 'SQL', 'Angular', 'Vite'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [fintrackMockup, fintrackMockup, fintrackMockup],
      gallery: [
        { src: fintrackMockup, title: 'My Finance — Dasbor Keuangan & Visualisasi Data' },
      ],
      tags: ['React', 'Vite', 'SQL', 'CSS Grid'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [posRewards, posCart, posMember],
      gallery: [
        { src: posRewards, title: 'Katalog Produk & Flash Sale Thrift Store' },
        { src: posCart, title: 'Keranjang Belanja & Checkout' },
      ],
      tags: ['Flutter', 'Firebase', 'Node.js', 'Midtrans'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [posDashboard, educonnectMockup, fintrackMockup],
      gallery: [
        { src: posDashboard, title: 'Monitoring Armada & Tracking GPS Realtime' },
      ],
      tags: ['Go', 'WebSockets', 'PostgreSQL', 'Mapbox'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [posCheckout, posMember, posRewards],
      gallery: [
        { src: posCheckout, title: 'Sistem Antrean & E-Resep Klinik' },
      ],
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [educonnectMockup, posDashboard, fintrackMockup],
      gallery: [
        { src: educonnectMockup, title: 'Eksplorasi Karya & Showcase Ilustrator' },
      ],
      tags: ['Vue 3', 'Tailwind', 'Supabase', 'Express'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [fintrackMockup, posCheckout, posDashboard],
      gallery: [
        { src: fintrackMockup, title: 'Grafik Sensor Suhu & Kelembaban IoT' },
      ],
      tags: ['Python', 'FastAPI', 'MQTT', 'InfluxDB'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      stack: [posMember, posRewards, posCart],
      gallery: [
        { src: posMember, title: 'Pemesanan Tiket & Dynamic QR Code Scanner' },
      ],
      tags: ['Laravel', 'Redis', 'React Native', 'Tailwind'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
  ];

  const projects = baseProjects.map((bp, i) => {
    const itemT = t.projects.items?.[i] || {};
    return {
      ...bp,
      title: itemT.title || '',
      subtitle: itemT.subtitle || '',
      category: itemT.category || '',
      desc: itemT.desc || '',
      gallery: bp.gallery
        ? bp.gallery.map((g, gIdx) => ({
            src: g.src,
            title: itemT.galleryTitles?.[gIdx] || g.title || itemT.title || '',
          }))
        : null,
    };
  });

  // Double the list to enable true 100% seamless infinite looping ("muter terus")
  const displayProjects = [...projects, ...projects];

  // Dynamic 3D Cylindrical Curve Animation:
  // Kartu pinggir melengkung ke dalam (rotasi 3D Y + kedalaman Z), kartu tengah membesar di depan
  const updateCurveScale = () => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const radius = rect.width / 2;
    if (radius <= 0) return;

    const cards = el.querySelectorAll('.proj-card');
    cards.forEach((card) => {
      const cRect = card.getBoundingClientRect();
      const cCenter = cRect.left + cRect.width / 2;
      const signedRatio = (cCenter - centerX) / radius;
      const absRatio = Math.min(Math.abs(signedRatio), 1.5);

      // 1. Skala kurva: tengah membesar (1.06x), pinggir mengecil halus (0.82x)
      const scale = Math.max(0.80, 1.06 - Math.pow(absRatio, 1.22) * 0.26);

      // 2. Rotasi 3D Cylindrical: kartu kiri menghadap ke kanan, kartu kanan menghadap ke kiri
      // Efek busur bioskop / curve film roll melengkung
      const rotY = Math.max(-14, Math.min(14, -signedRatio * 14));

      // 3. Kedalaman 3D (Z-axis pushback): kartu pinggir mundur ke belakang
      const transZ = -Math.pow(absRatio, 1.15) * 85;

      // 4. Arc lift: kartu tengah sedikit terangkat (-12px)
      const transY = -((1 - Math.min(absRatio, 1)) * 12);

      // 5. Opacity & Z-Index: kartu tengah selalu di depan tanpa clipping
      const opacity = Math.max(0.60, 1 - Math.pow(absRatio, 1.1) * 0.40);
      const zIndex = Math.round(30 - Math.min(absRatio, 1) * 20);

      card.style.transform = `perspective(1200px) translate3d(0px, ${transY.toFixed(1)}px, ${transZ.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = zIndex;
    });
  };

  // Infinite seamless auto-scroll with dynamic 3D curve scale
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let animId;
    const speed = 0.75; // smooth steady glide

    const step = () => {
      if (!isPaused && el && !isDraggingRef.current) {
        scrollPosRef.current += speed;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && scrollPosRef.current >= halfWidth) {
          scrollPosRef.current -= halfWidth;
        }
        el.scrollLeft = scrollPosRef.current;
      } else if (el) {
        scrollPosRef.current = el.scrollLeft;
      }
      updateCurveScale();
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const onResize = () => updateCurveScale();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [isPaused]);

  // Handle manual scroll to keep loop seamless
  const handleTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    if (halfWidth > 0) {
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      } else if (el.scrollLeft <= 0 && isPaused) {
        el.scrollLeft += halfWidth;
      }
    }
    scrollPosRef.current = el.scrollLeft;
    updateCurveScale();
  };

  // Mouse drag-to-scroll interaction
  const handleMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollStartRef.current = el.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.25;
    el.scrollLeft = scrollStartRef.current - walk;
    scrollPosRef.current = el.scrollLeft;
    updateCurveScale();
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  // Manual button scroll controls
  const scrollLeft = () => {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    const cardWidth = el.querySelector('.proj-card')?.offsetWidth || 360;
    el.scrollBy({ left: -(cardWidth + 28), behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 2500);
  };

  const scrollRight = () => {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    const cardWidth = el.querySelector('.proj-card')?.offsetWidth || 360;
    el.scrollBy({ left: cardWidth + 28, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handleOpenGallery = (project) => {
    setActiveProject(project);
    setActiveImgIndex(0);
    setIsPaused(true);
  };

  const handleCloseGallery = () => {
    setActiveProject(null);
    setIsPaused(false);
  };

  const nextImg = () => {
    if (!activeProject) return;
    setActiveImgIndex((prev) => (prev + 1) % activeProject.gallery.length);
  };

  const prevImg = () => {
    if (!activeProject) return;
    setActiveImgIndex((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length);
  };

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e) => {
      if (e.key === 'Escape') handleCloseGallery();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject]);

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        {/* Section Header with Centered Title & Controls */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="proj-nav-center">
            <button
              type="button"
              className="proj-nav-btn"
              onClick={scrollLeft}
              aria-label={t.projects.scrollLeft}
              title={t.projects.scrollLeft}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="proj-nav-pill">
              <span className="proj-pulse-dot" />
              <span>{t.projects.projectsCount || `${projects.length} Projects`}</span>
            </div>

            <button
              type="button"
              className="proj-nav-btn"
              onClick={scrollRight}
              aria-label={t.projects.scrollRight}
              title={t.projects.scrollRight}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track Container — 3D Cylindrical curved layout */}
        <div
          className="proj-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDraggingRef.current) setIsPaused(false);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          <div
            className="proj-carousel-track"
            ref={trackRef}
            onScroll={handleTrackScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {displayProjects.map((p, i) => (
              <ProjectCard
                key={p.title + '-' + i}
                project={p}
                index={i % projects.length}
                onOpenGallery={handleOpenGallery}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {activeProject && (
        <div className="proj-modal-overlay" onClick={handleCloseGallery}>
          <div className="proj-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="proj-modal-header">
              <div>
                <h4 className="proj-modal-title">{activeProject.title} — {activeProject.subtitle}</h4>
                <p className="proj-modal-subtitle">
                  {activeProject.gallery[activeImgIndex].title} ({activeImgIndex + 1}/{activeProject.gallery.length})
                </p>
              </div>
              <button
                className="proj-modal-close"
                onClick={handleCloseGallery}
                aria-label={t.projects.modalClose}
                title={t.projects.modalClose}
              >
                &times;
              </button>
            </div>

            <div className="proj-modal-main">
              {activeProject.gallery.length > 1 && (
                <button
                  className="proj-modal-nav prev"
                  onClick={prevImg}
                  aria-label={t.projects.modalPrev}
                  title={t.projects.modalPrev}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
              )}

              <div className="proj-modal-img-wrap">
                <img
                  src={activeProject.gallery[activeImgIndex].src}
                  alt={activeProject.gallery[activeImgIndex].title}
                />
              </div>

              {activeProject.gallery.length > 1 && (
                <button
                  className="proj-modal-nav next"
                  onClick={nextImg}
                  aria-label={t.projects.modalNext}
                  title={t.projects.modalNext}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnail Strip (if multi-screenshot) */}
            {activeProject.gallery.length > 1 && (
              <div className="proj-modal-thumbs">
                {activeProject.gallery.map((g, idx) => (
                  <button
                    key={idx}
                    className={`proj-modal-thumb ${idx === activeImgIndex ? 'active' : ''}`}
                    onClick={() => setActiveImgIndex(idx)}
                    title={g.title}
                  >
                    <img src={g.src} alt={g.title} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
