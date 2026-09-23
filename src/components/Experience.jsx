import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo44Thrift from '../assets/logo_44thrift.png';
import logoPringapus from '../assets/logo_pringapus.jpg';
import logoSMK from '../assets/logo_smk_pgri.jpg';
import logoUIN from '../assets/logo_uin_malang.png';

const careerLogos = [
  { logo: logoPringapus, alt: 'Logo PT Pringapus Digital Teknologi' },
  { logo: logo44Thrift, alt: 'Logo FourtyFourThrift' },
];

const eduLogos = [
  { logo: logoUIN, alt: 'Logo UIN Maulana Malik Ibrahim Malang' },
  { logo: logoSMK, alt: 'Logo SMK PGRI 03 Malang (Skariga)' },
];

/* ─── Sub components ─── */

function ColHeader({ label, title, count, icon }) {
  return (
    <div className="exp-col-header">
      <div className="exp-col-header-top">
        <div className="exp-col-badge">
          <span className="exp-col-icon">{icon}</span>
          <span className="exp-col-label">{label}</span>
        </div>
        {count && <span className="exp-col-count">{count}</span>}
      </div>
      <h3 className="exp-col-title">{title}</h3>
    </div>
  );
}

function ExpItem({ item, delay, highlightsHeader, currentBadge }) {
  return (
    <div className={`exp-card-bespoke reveal d${delay}`}>
      {/* Top Header Row */}
      <div className="exp-card-top">
        <div className="exp-logo-frame">
          <img src={item.logo} alt={item.alt} loading="lazy" />
        </div>
        <div className="exp-card-header-info">
          <div className="exp-card-pill-row">
            <span className="exp-type-pill">{item.type}</span>
            {item.isCurrent && (
              <span className="exp-live-badge">
                <span className="exp-pulse-dot" />
                {currentBadge}
              </span>
            )}
            <span className="exp-period-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {item.date}
            </span>
          </div>
          <h4 className="exp-card-title">{item.title}</h4>
          <div className="exp-card-org-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M5 21V7l8-4v18M13 10h3M13 14h3M13 18h3M9 10H7M9 14H7M9 18H7" />
            </svg>
            <span className="exp-card-org">{item.org}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="exp-card-summary">{item.desc}</p>

      {/* Key Highlights / Poin Kontribusi */}
      {item.highlights && item.highlights.length > 0 && (
        <div className="exp-highlights-wrap">
          <div className="exp-highlights-head">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span className="exp-highlights-title">{highlightsHeader}</span>
          </div>
          <ul className="exp-highlights-list">
            {item.highlights.map((h, idx) => (
              <li key={idx} className="exp-highlight-item">
                <span className="exp-highlight-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech / Competency Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="exp-tags-wrap">
          <div className="exp-card-tags">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="exp-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─── */

export default function Experience() {
  const { t } = useLanguage();

  const careerList = t.experience.career.map((c, i) => ({
    ...c,
    logo: careerLogos[i].logo,
    alt: careerLogos[i].alt,
  }));

  const eduList = t.experience.education.map((e, i) => ({
    ...e,
    logo: eduLogos[i].logo,
    alt: eduLogos[i].alt,
  }));

  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">
            {t.experience.title}
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            {t.experience.sub}
          </p>
        </div>

        {/* Two-column layout centered */}
        <div className="exp-two-col-container">
          <div className="exp-two-col">

            {/* Left — Karier */}
            <div className="exp-col">
              <ColHeader
                label={t.experience.careerLabel}
                title={t.experience.careerTitle}
                count={t.experience.careerCount}
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                }
              />
              <div className="exp-col-list">
                {careerList.map((item, i) => (
                  <ExpItem
                    key={item.title + '-' + i}
                    item={item}
                    delay={i + 1}
                    highlightsHeader={t.experience.highlightsHeader}
                    currentBadge={t.experience.currentBadge}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="exp-divider">
              <span className="exp-divider-node" />
            </div>

            {/* Right — Pendidikan */}
            <div className="exp-col">
              <ColHeader
                label={t.experience.eduLabel}
                title={t.experience.eduTitle}
                count={t.experience.eduCount}
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                }
              />
              <div className="exp-col-list">
                {eduList.map((item, i) => (
                  <ExpItem
                    key={item.title + '-' + i}
                    item={item}
                    delay={i + 1}
                    highlightsHeader={t.experience.highlightsHeader}
                    currentBadge={t.experience.currentBadge}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
