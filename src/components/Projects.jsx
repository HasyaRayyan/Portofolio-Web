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
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);
  const frameNum = `0${index + 1}`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const hasMultiScreens = project.gallery && project.gallery.length > 1;

  return (
    <div
      ref={cardRef}
      className="proj-card-modern reveal"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      style={{
        '--card-mouse-x': `${mousePos.x}px`,
        '--card-mouse-y': `${mousePos.y}px`,
        '--card-hover': isHovered ? 1 : 0,
      }}
    >
      <div className="proj-card-spotlight" />

      {/* Top macOS Window Frame & Stage */}
      <div
        className="proj-card-stage"
        onClick={() => project.gallery && onOpenGallery(project)}
        title={project.gallery ? t.projects.clickGalleryHint : undefined}
      >
        <div className="proj-stage-macbar">
          <div className="proj-mac-dots">
            <span className="proj-mac-dot dot-red" />
            <span className="proj-mac-dot dot-yellow" />
            <span className="proj-mac-dot dot-green" />
          </div>
          <span className="proj-stage-category">{project.category}</span>
        </div>

        <div className="proj-stage-viewport">
          <img
            src={project.image}
            alt={project.title}
            className="proj-stage-img"
            loading="lazy"
          />
          <div className="proj-stage-overlay">
            <span className="proj-stage-cta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>{hasMultiScreens ? `${project.gallery.length} ${t.projects.galleryBadge}` : t.projects.galleryBtn}</span>
            </span>
          </div>
        </div>

        {hasMultiScreens && (
          <div className="proj-stage-counter">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>{project.gallery.length} {t.projects.galleryBadge}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="proj-card-body">
        <div className="proj-card-topmeta">
          <span className="proj-card-num">{frameNum}</span>
          <span className="proj-card-pill">{project.category}</span>
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

        {/* Card Actions Footer */}
        <div className="proj-card-actions">
          {project.gallery && (
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
              <span>{hasMultiScreens ? `${t.projects.galleryBtn} (${project.gallery.length})` : t.projects.galleryBtn}</span>
            </button>
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

  const baseProjects = [
    {
      id: 'pos',
      image: posDashboard,
      gallery: [
        { src: posDashboard, title: 'Dashboard Kasir — Omzet, Transaksi & Grafik Mingguan' },
        { src: posCart, title: 'Keranjang Kasir — Input & Verifikasi Nomor Member' },
        { src: posCheckout, title: 'Konfirmasi Bayar — Perhitungan Poin Otomatis (+79 Poin)' },
        { src: posMember, title: 'Aplikasi Pelanggan — Status Akun & Saldo Poin' },
        { src: posRewards, title: 'Katalog Hadiah — Penukaran Poin Menu Gratis' },
      ],
      tags: ['Point of Sale', 'Loyalty System', 'Ionic', 'Angular', 'MySQL', 'CodeIgniter'],
      github: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
      live: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
    },
    {
      id: 'educonnect',
      image: educonnectMockup,
      gallery: [
        { src: educonnectMockup, title: 'EduConnect — Dasbor & Manajemen Akademik Sekolah' },
      ],
      tags: ['Laravel', 'Angular', 'SQL', 'Vite', 'REST API'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      id: 'fintrack',
      image: fintrackMockup,
      gallery: [
        { src: fintrackMockup, title: 'My Finance — Dasbor Keuangan & Visualisasi Data' },
      ],
      tags: ['React', 'TypeScript', 'CSS Grid', 'SQL', 'Analytics'],
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

  const handleOpenGallery = (project) => {
    setActiveProject(project);
    setActiveImgIndex(0);
  };

  const handleCloseGallery = () => {
    setActiveProject(null);
  };

  const nextImg = () => {
    if (!activeProject || !activeProject.gallery) return;
    setActiveImgIndex((prev) => (prev + 1) % activeProject.gallery.length);
  };

  const prevImg = () => {
    if (!activeProject || !activeProject.gallery) return;
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
        {/* Section Header with Pill Counter */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="proj-nav-pill-wrapper">
            <div className="proj-nav-pill">
              <span className="proj-pulse-dot" />
              <span>{t.projects.projectsCount || `${projects.length} Proyek Pilihan`}</span>
            </div>
          </div>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title + '-' + i}
              project={p}
              index={i}
              onOpenGallery={handleOpenGallery}
            />
          ))}
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
