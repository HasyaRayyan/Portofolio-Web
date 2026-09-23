import React, { useState } from 'react';
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

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'career' | 'edu'

  const careerItems = t.experience.career.map((c, i) => ({
    ...c,
    category: 'career',
    categoryLabel: t.experience.careerLabel,
    logo: careerLogos[i].logo,
    alt: careerLogos[i].alt,
  }));

  const eduItems = t.experience.education.map((e, i) => ({
    ...e,
    category: 'edu',
    categoryLabel: t.experience.eduLabel,
    logo: eduLogos[i].logo,
    alt: eduLogos[i].alt,
  }));

  // Chronological timeline order: Current College -> Magang 2025 -> Business 2024 -> SMK
  const allItems = [
    eduItems[0],    // UIN Malang (2026 - Present)
    careerItems[0], // PT Pringapus (2025)
    careerItems[1], // FourtyFourThrift (2024 - Present)
    eduItems[1],    // SMK PGRI 03 (2023 - 2026)
  ];

  const filteredItems =
    activeTab === 'all'
      ? allItems
      : activeTab === 'career'
      ? careerItems
      : eduItems;

  return (
    <section id="experience" className="section exp-section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">

        {/* Section Header & Minimalist Tab Bar */}
        <div className="reveal text-center" style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-sub" style={{ marginBottom: '28px' }}>{t.experience.sub}</p>

          {/* Minimalist Switcher Tabs */}
          <div className="exp-tabs-container">
            <div className="exp-tabs-bar">
              <button
                type="button"
                className={`exp-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                {t.experience.filterAll}
                <span className="exp-tab-count">{allItems.length}</span>
              </button>
              <button
                type="button"
                className={`exp-tab-btn ${activeTab === 'career' ? 'active' : ''}`}
                onClick={() => setActiveTab('career')}
              >
                {t.experience.filterCareer}
                <span className="exp-tab-count">{careerItems.length}</span>
              </button>
              <button
                type="button"
                className={`exp-tab-btn ${activeTab === 'edu' ? 'active' : ''}`}
                onClick={() => setActiveTab('edu')}
              >
                {t.experience.filterEdu}
                <span className="exp-tab-count">{eduItems.length}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Apple/Linear Minimalist Timeline */}
        <div className="exp-timeline-wrap">
          <div className="exp-timeline">
            {filteredItems.map((item, idx) => (
              <div key={item.title + '-' + idx} className="exp-timeline-item reveal">

                {/* Timeline Track Guide & Node */}
                <div className="exp-tl-track">
                  <div className={`exp-tl-node ${item.isCurrent ? 'current' : ''}`}>
                    {item.isCurrent && <span className="exp-tl-pulse" />}
                  </div>
                  <div className="exp-tl-line" />
                </div>

                {/* Timeline Content Card */}
                <div className="exp-tl-card">
                  {/* Top Header Row */}
                  <div className="exp-card-header">
                    <div className="exp-card-identity">
                      <div className="exp-logo-box">
                        <img src={item.logo} alt={item.alt} loading="lazy" />
                      </div>
                      <div className="exp-title-group">
                        <div className="exp-title-row">
                          <h3 className="exp-role-title">{item.title}</h3>
                          {item.isCurrent && (
                            <span className="exp-status-live">
                              <span className="exp-status-dot" />
                              {t.experience.currentBadge}
                            </span>
                          )}
                        </div>
                        <div className="exp-org-row">
                          <span className="exp-org-name">{item.org}</span>
                          <span className="exp-meta-sep">•</span>
                          <span className="exp-category-tag">{item.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-card-period">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

                  {/* Key Highlights */}
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
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
