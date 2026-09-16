import React, { useState, useEffect, useRef } from 'react';
import posDashboard from '../assets/member_loyalty_pos_dashboard.png';
import posCart from '../assets/member_loyalty_pos_cart.png';
import posCheckout from '../assets/member_loyalty_pos_checkout.png';
import posMember from '../assets/member_loyalty_pos_member.png';
import posRewards from '../assets/member_loyalty_pos_rewards.png';
import educonnectMockup from '../assets/educonnect_mockup.png';
import fintrackMockup from '../assets/fintrack_mockup.png';

function ProjectCard({ project, index, onOpenGallery }) {
  return (
    <div className="proj-card">
      {/* 3-Image Stack Stage */}
      <div
        className="proj-card-stage"
        onClick={() => project.gallery && onOpenGallery(project)}
        style={{ cursor: project.gallery ? 'pointer' : 'default' }}
        title={project.gallery ? 'Klik untuk melihat galeri UI' : undefined}
      >
        <div className="proj-stack">
          <div className="proj-stack-card stack-left">
            <img src={project.stack[0]} alt={`${project.title} screen 1`} />
          </div>
          <div className="proj-stack-card stack-right">
            <img src={project.stack[1]} alt={`${project.title} screen 2`} />
          </div>
          <div className="proj-stack-card stack-center">
            <img src={project.stack[2]} alt={`${project.title} screen 3`} />
          </div>
        </div>

        {project.gallery && (
          <span className="proj-stage-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            {project.gallery.length} Layar UI
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="proj-card-body">
        <div className="proj-card-topmeta">
          <span className="proj-card-num">{index < 9 ? `0${index + 1}` : index + 1}</span>
          <span className="proj-card-category">{project.category}</span>
        </div>

        <h3 className="proj-card-title">{project.title}</h3>
        <span className="proj-card-subtitle">{project.subtitle}</span>
        <p className="proj-card-desc">{project.desc}</p>

        {/* Tech Chips */}
        <div className="proj-card-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-card-tag">{t}</span>
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
              Galeri UI
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
                title="Lihat Source Code di GitHub"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-action-link"
                title="Buka Demo"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);

  // 9 Total Projects (3 real + 6 realistic dummy projects)
  const projects = [
    {
      title: 'Member Loyalty POS',
      subtitle: 'Point of Sale & Kalkulasi Poin Loyalitas',
      category: 'Web & Mobile POS',
      desc: 'Sistem POS cerdas terintegrasi program loyalitas pelanggan. Menghitung poin reward otomatis dari transaksi belanja, membership Platinum/Gold, cetak struk, dasbor omzet harian, serta mobile app penukaran poin menu gratis.',
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
      title: 'EduConnect',
      subtitle: 'Portal Manajemen Akademik Terpadu',
      category: 'Academic Cloud',
      desc: 'Platform sistem informasi akademik institusi pendidikan. Administrasi kurikulum digital, absensi digital guru & murid, rekapitulasi nilai rapor, serta portal wali murid berbasis cloud.',
      stack: [educonnectMockup, educonnectMockup, educonnectMockup],
      gallery: [
        { src: educonnectMockup, title: 'EduConnect — Dasbor & Manajemen Akademik Sekolah' },
      ],
      tags: ['Laravel', 'SQL', 'Angular', 'Vite'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'My Finance',
      subtitle: 'Personal Finance & Budgeting Dashboard',
      category: 'Financial Analytics',
      desc: 'Dasbor analitik keuangan personal untuk pencatatan dan pengelolaan arus kas. Visualisasi grafik pengeluaran, budgeting pos keuangan, dan laporan peramalan tabungan.',
      stack: [fintrackMockup, fintrackMockup, fintrackMockup],
      gallery: [
        { src: fintrackMockup, title: 'My Finance — Dasbor Keuangan & Visualisasi Data' },
      ],
      tags: ['React', 'Vite', 'SQL', 'CSS Grid'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'FourtyFour Thrift Store',
      subtitle: 'Digital Marketplace & Inventory Management',
      category: 'E-Commerce Mobile',
      desc: 'Aplikasi mobile marketplace thrift pakaian vintage dengan katalog produk otomatis, payment gateway online, live stock tracking, dan notifikasi flash sale eksklusif.',
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
      title: 'FleetTrack Logistics',
      subtitle: 'Real-time GPS Dispatch & Fleet Monitoring',
      category: 'Logistics & IoT',
      desc: 'Sistem monitoring kurir dan armada logistik berbasis peta real-time. Menghitung estimasi rute pengiriman tercepat (routing optimization) dan digital proof-of-delivery.',
      stack: [posDashboard, educonnectMockup, fintrackMockup],
      gallery: [
        { src: posDashboard, title: 'Monitoring Armada & Tracking GPS Realtime' },
      ],
      tags: ['Go', 'WebSockets', 'PostgreSQL', 'Mapbox'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'MedikaSync Clinic',
      subtitle: 'Electronic Health Records & Telemedicine',
      category: 'Healthcare SaaS',
      desc: 'Platform rekam medis elektronik (RME) klinik kesehatan terintegrasi. Dilengkapi reservasi dokter online, pencatatan diagnosa medis, resep digital, dan telekonsultasi.',
      stack: [posCheckout, posMember, posRewards],
      gallery: [
        { src: posCheckout, title: 'Sistem Antrean & E-Resep Klinik' },
      ],
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'KaryaArt Creative Hub',
      subtitle: 'Komunitas & Marketplace Aset Desain',
      category: 'Creative Platform',
      desc: 'Platform portofolio dan marketplace aset visual bagi kreator desain grafis dan ilustrator lokal. Dilengkapi lisensi digital dan sistem tipping kreator.',
      stack: [educonnectMockup, posDashboard, fintrackMockup],
      gallery: [
        { src: educonnectMockup, title: 'Eksplorasi Karya & Showcase Ilustrator' },
      ],
      tags: ['Vue 3', 'Tailwind', 'Supabase', 'Express'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'AgroSmart Greenhouse',
      subtitle: 'Automated IoT Sensor & Crop Monitoring',
      category: 'IoT & Agriculture',
      desc: 'Dasbor pemantauan sensor kelembaban tanah, suhu lingkungan, dan irigasi otomatis berbasis mikrokontroler ESP32 dengan sistem peringatan dini via WhatsApp API.',
      stack: [fintrackMockup, posCheckout, posDashboard],
      gallery: [
        { src: fintrackMockup, title: 'Grafik Sensor Suhu & Kelembaban IoT' },
      ],
      tags: ['Python', 'FastAPI', 'MQTT', 'InfluxDB'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
    {
      title: 'EventHub Ticketing',
      subtitle: 'Event Management & Dynamic QR Check-in',
      category: 'Ticketing System',
      desc: 'Aplikasi penjualan tiket festival konser berskala besar. Mencegah pemalsuan tiket dengan enkripsi dynamic QR code dan queue management antrean transaksi ribuan user.',
      stack: [posMember, posRewards, posCart],
      gallery: [
        { src: posMember, title: 'Pemesanan Tiket & Dynamic QR Code Scanner' },
      ],
      tags: ['Laravel', 'Redis', 'React Native', 'Tailwind'],
      github: 'https://github.com/HasyaRayyan',
      live: null,
    },
  ];

  // Double the list to enable true 100% seamless infinite looping ("muter terus")
  const displayProjects = [...projects, ...projects];

  // Infinite seamless auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let animId;
    const speed = 0.85; // smooth, steady, visible slow glide

    const step = () => {
      if (!isPaused && el) {
        scrollPosRef.current += speed;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && scrollPosRef.current >= halfWidth) {
          scrollPosRef.current -= halfWidth;
        }
        el.scrollLeft = scrollPosRef.current;
      } else if (el) {
        // Keep in sync with user manual scroll position
        scrollPosRef.current = el.scrollLeft;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
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
  };

  // Manual button scroll controls
  const scrollLeft = () => {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    const cardWidth = el.querySelector('.proj-card')?.offsetWidth || 360;
    el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 2500);
  };

  const scrollRight = () => {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    const cardWidth = el.querySelector('.proj-card')?.offsetWidth || 360;
    el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
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
        {/* Section Header with Controls */}
        <div className="proj-header-row reveal">
          <div className="proj-header-left">
            <span className="section-label">03 — Proyek Pilihan</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Hasil kerja &amp;<br />proyek pilihan.
            </h2>
          </div>

          <div className="proj-carousel-controls">
            <span className="proj-controls-hint">
              <span className="proj-pulse-dot" /> Auto-glide aktif • Hover untuk jeda
            </span>
            <div className="proj-nav-btns">
              <button
                type="button"
                className="proj-nav-btn"
                onClick={scrollLeft}
                aria-label="Geser ke kiri"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                type="button"
                className="proj-nav-btn"
                onClick={scrollRight}
                aria-label="Geser ke kanan"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Track Container — Max 3 visible cards on desktop */}
        <div
          className="proj-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          <div
            className="proj-carousel-track"
            ref={trackRef}
            onScroll={handleTrackScroll}
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
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            <div className="proj-modal-main">
              {activeProject.gallery.length > 1 && (
                <button
                  className="proj-modal-nav prev"
                  onClick={prevImg}
                  aria-label="Sebelumnya"
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
                  aria-label="Berikutnya"
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
