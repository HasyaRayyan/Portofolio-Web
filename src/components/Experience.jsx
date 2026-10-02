import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo44Thrift from '../assets/logo_44thrift.png';
import logoPringapus from '../assets/logo_pringapus.jpg';
import logoSMK from '../assets/logo_smk_pgri.png';
import logoUIN from '../assets/logo_uin_malang.png';

function InteractiveCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`exp-card-modern ${className}`}
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
      <div className="exp-card-spotlight" />
      <div className="exp-card-inner">
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all'); // 'all' | 'career' | 'education'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState({});

  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  // Logos mapped safely by organization name
  const getCareerLogo = (org) => {
    if (org && org.toLowerCase().includes('fourty')) {
      return { logo: logo44Thrift, alt: 'Logo FourtyFourThrift' };
    }
    return { logo: logoPringapus, alt: 'Logo PT Pringapus Digital Teknologi' };
  };

  const getEduLogo = (org) => {
    if (org && org.toLowerCase().includes('uin')) {
      return { logo: logoUIN, alt: 'Logo UIN Maulana Malik Ibrahim Malang' };
    }
    return { logo: logoSMK, alt: 'Logo SMK PGRI 03 Malang (Skariga)' };
  };

  // Raw data from context
  const rawCareer = t.experience.career || [];
  const rawEdu = t.experience.education || [];

  const fourty = rawCareer.find((c) => c.org.toLowerCase().includes('fourty')) || rawCareer[1];
  const pringapus = rawCareer.find((c) => c.org.toLowerCase().includes('pringapus')) || rawCareer[0];
  const uin = rawEdu.find((e) => e.org.toLowerCase().includes('uin')) || rawEdu[0];
  const smk = rawEdu.find((e) => e.org.toLowerCase().includes('smk')) || rawEdu[1];

  // Combined vertical items (ordered chronologically, newest/current first)
  const allItems = [
    {
      ...uin,
      ...getEduLogo(uin?.org),
      category: 'education',
      categoryLabel: t.experience.filterEdu,
      isEdu: true,
      timestamp: 2026.08,
    },
    {
      ...fourty,
      ...getCareerLogo(fourty?.org),
      category: 'career',
      categoryLabel: t.experience.filterCareer,
      isEdu: false,
      timestamp: 2024.12,
    },
    {
      ...pringapus,
      ...getCareerLogo(pringapus?.org),
      category: 'career',
      categoryLabel: t.experience.filterCareer,
      isEdu: false,
      timestamp: 2025.01,
    },
    {
      ...smk,
      ...getEduLogo(smk?.org),
      category: 'education',
      categoryLabel: t.experience.filterEdu,
      isEdu: true,
      timestamp: 2023.06,
    },
  ];

  // Filter items based on active tab
  const filteredItems = allItems.filter((item) => {
    if (filter === 'career') return item.category === 'career';
    if (filter === 'education') return item.category === 'education';
    return true;
  });

  // Calculate timeline progress & glowing nodes as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start lighting up when top of timeline crosses 65% of viewport
      // Complete lighting up when bottom of timeline passes 35% of viewport
      const startTrigger = windowHeight * 0.65;
      const totalDist = rect.height;
      const scrolledDist = startTrigger - rect.top;

      let progress = scrolledDist / (totalDist * 0.95);
      progress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(progress * 100);

      // Determine which item nodes are reached by the glowing line
      const newActive = {};
      const fillHeightPx = progress * totalDist;

      itemRefs.current.forEach((el, idx) => {
        if (el) {
          const itemNodeTop = el.offsetTop + 28;
          if (fillHeightPx >= itemNodeTop || (rect.top + itemNodeTop < windowHeight * 0.62)) {
            newActive[idx] = true;
          }
        }
      });
      setActiveItems(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 40);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filter, filteredItems.length]);

  return (
    <section
      id="experience"
      className="section exp-section"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal text-center" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>{t.experience.sub}</p>
        </div>

        {/* Filter Tabs (Semua / Pengalaman / Pendidikan) */}
        <div className="exp-filter-wrapper reveal">
          <div className="exp-filter-tabs">
            <button
              type="button"
              className={`exp-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span className="exp-filter-dot" />
              <span>{t.experience.filterAll}</span>
              <span className="exp-filter-count">{allItems.length}</span>
            </button>

            <button
              type="button"
              className={`exp-filter-btn ${filter === 'career' ? 'active' : ''}`}
              onClick={() => setFilter('career')}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>{t.experience.filterCareer}</span>
              <span className="exp-filter-count">
                {allItems.filter((i) => i.category === 'career').length}
              </span>
            </button>

            <button
              type="button"
              className={`exp-filter-btn ${filter === 'education' ? 'active' : ''}`}
              onClick={() => setFilter('education')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>{t.experience.filterEdu}</span>
              <span className="exp-filter-count">
                {allItems.filter((i) => i.category === 'education').length}
              </span>
            </button>
          </div>
        </div>

        {/* Unified Vertical Timeline Container */}
        <div className="exp-timeline-wrapper" ref={timelineRef}>
          {/* Vertical Interactive Timeline Rail Track (Menyala saat di-scroll) */}
          <div className="exp-timeline-track">
            <div className="exp-timeline-line-base" />
            <div
              className="exp-timeline-line-fill"
              style={{ height: `${scrollProgress}%` }}
            >
              <div className="exp-timeline-spark" />
            </div>
          </div>

          {/* Timeline Items List (Jadikan satu ke bawah) */}
          <div className="exp-timeline-list">
            {filteredItems.map((item, idx) => {
              const isReached = !!activeItems[idx];
              return (
                <div
                  key={item.title + '-' + idx}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className={`exp-timeline-item ${isReached ? 'reached' : ''}`}
                >
                  {/* Glowing Node on Timeline Line */}
                  <div
                    className={`exp-timeline-node ${isReached ? 'active' : ''} ${item.category}`}
                    title={`${item.categoryLabel} — ${item.title}`}
                  >
                    {item.category === 'education' ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    )}
                  </div>

                  {/* Timeline Card */}
                  <InteractiveCard className="reveal">
                    {/* Header Row */}
                    <div className="exp-card-header">
                      <div className="exp-card-identity">
                        <div className={item.isEdu ? 'exp-logo-plain' : 'exp-logo-box'}>
                          <img src={item.logo} alt={item.alt} loading="lazy" />
                        </div>
                        <div className="exp-title-group">
                          <div className="exp-title-row">
                            <h4 className="exp-role-title">{item.title}</h4>
                            <span className={`exp-category-badge ${item.category}`}>
                              {item.isEdu ? (
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                              ) : (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                              )}
                              <span>{item.categoryLabel}</span>
                            </span>
                          </div>
                          <div className="exp-org-row">
                            <span className="exp-org-name">{item.org}</span>
                            {item.type && <span className="exp-type-tag">• {item.type}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="exp-card-badges">
                        {item.isCurrent && (
                          <span className="exp-badge-active">
                            <span className="exp-pulse-dot" />
                            <span>{t.experience.currentBadge}</span>
                          </span>
                        )}
                        <div className="exp-card-period">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="exp-desc">{item.desc}</p>

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="exp-points">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="exp-point-item">
                            <span className="exp-point-marker" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="exp-chips-row">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="exp-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </InteractiveCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
