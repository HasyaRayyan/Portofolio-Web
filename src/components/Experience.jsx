import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo44Thrift from '../assets/logo_44thrift.png';
import logoPringapus from '../assets/logo_pringapus.jpg';
import logoSMK from '../assets/logo_smk_pgri.jpg';
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
  const sectionRef = useRef(null);
  const [sectionMouse, setSectionMouse] = useState({ x: -1000, y: -1000 });
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setSectionMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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

  // Reorder career: newest (FourtyFourThrift - Sekarang) first, then PT Pringapus
  const rawCareer = t.experience.career;
  const careerItems = [
    rawCareer.find((c) => c.org.toLowerCase().includes('fourty')) || rawCareer[1],
    rawCareer.find((c) => c.org.toLowerCase().includes('pringapus')) || rawCareer[0],
  ].filter(Boolean).map((c) => ({
    ...c,
    ...getCareerLogo(c.org),
  }));

  // Education: newest (UIN Malang - Sekarang) first, then SMK PGRI
  const rawEdu = t.experience.education;
  const eduItems = [
    rawEdu.find((e) => e.org.toLowerCase().includes('uin')) || rawEdu[0],
    rawEdu.find((e) => e.org.toLowerCase().includes('smk')) || rawEdu[1],
  ].filter(Boolean).map((e) => ({
    ...e,
    ...getEduLogo(e.org),
  }));

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section exp-section"
      onMouseMove={handleSectionMouseMove}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
      style={{ borderTop: '1px solid var(--line)' }}
    >
      {/* Interactive Cursor Spotlight Glow for Section */}
      <div
        className="exp-interactive-glow"
        style={{
          transform: `translate(${sectionMouse.x}px, ${sectionMouse.y}px)`,
          opacity: isSectionHovered ? 1 : 0,
        }}
      />
      {/* Subtle Matrix Dot Backdrop */}
      <div className="exp-grid-backdrop" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal text-center" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>{t.experience.sub}</p>
        </div>

        {/* 2-Column Direct Layout (Karier di Kiri, Pendidikan di Kanan) */}
        <div className="exp-grid-two-col">

          {/* Left Column — Karier */}
          <div className="exp-column">
            <div className="exp-col-header">
              <div className="exp-col-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="exp-col-title">{t.experience.careerTitle}</h3>
            </div>

            <div className="exp-card-list">
              {careerItems.map((item, idx) => (
                <InteractiveCard key={item.title + '-' + idx} className="reveal">
                  {/* Header Row */}
                  <div className="exp-card-header">
                    <div className="exp-card-identity">
                      <div className="exp-logo-box">
                        <img src={item.logo} alt={item.alt} loading="lazy" />
                      </div>
                      <div className="exp-title-group">
                        <h4 className="exp-role-title">{item.title}</h4>
                        <span className="exp-org-name">{item.org}</span>
                      </div>
                    </div>

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
              ))}
            </div>
          </div>

          {/* Right Column — Pendidikan */}
          <div className="exp-column">
            <div className="exp-col-header">
              <div className="exp-col-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="exp-col-title">{t.experience.eduTitle}</h3>
            </div>

            <div className="exp-card-list">
              {eduItems.map((item, idx) => (
                <InteractiveCard key={item.title + '-' + idx} className="reveal">
                  {/* Header Row */}
                  <div className="exp-card-header">
                    <div className="exp-card-identity">
                      <div className="exp-logo-box">
                        <img src={item.logo} alt={item.alt} loading="lazy" />
                      </div>
                      <div className="exp-title-group">
                        <h4 className="exp-role-title">{item.title}</h4>
                        <span className="exp-org-name">{item.org}</span>
                      </div>
                    </div>

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
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
