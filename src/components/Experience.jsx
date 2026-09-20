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

function ColHeader({ label, title }) {
  return (
    <div className="exp-col-header text-center">
      <span className="exp-col-label">{label}</span>
      <h3 className="exp-col-title">{title}</h3>
    </div>
  );
}

function ExpItem({ item, delay, highlightsHeader }) {
  return (
    <div className={`exp-card-bespoke reveal d${delay}`}>
      {/* Top Header Row */}
      <div className="exp-card-top">
        <div className="exp-logo-frame">
          <img src={item.logo} alt={item.alt} />
        </div>
        <div className="exp-card-header-info">
          <div className="exp-card-pill-row">
            <span className="exp-type-pill">{item.type}</span>
            <span className="exp-period-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {item.date}
            </span>
          </div>
          <h4 className="exp-card-title">{item.title}</h4>
          <span className="exp-card-org">{item.org}</span>
        </div>
      </div>

      {/* Summary */}
      <p className="exp-card-summary">{item.desc}</p>

      {/* Key Highlights / Poin Kontribusi */}
      <div className="exp-highlights-wrap">
        <span className="exp-highlights-title">{highlightsHeader}</span>
        <ul className="exp-highlights-list">
          {item.highlights.map((h, idx) => (
            <li key={idx} className="exp-highlight-item">
              <span className="exp-highlight-bullet">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
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
              <ColHeader label={t.experience.careerLabel} title={t.experience.careerTitle} />
              <div className="exp-col-list">
                {careerList.map((item, i) => (
                  <ExpItem
                    key={item.title + '-' + i}
                    item={item}
                    delay={i + 1}
                    highlightsHeader={t.experience.highlightsHeader}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="exp-divider" />

            {/* Right — Pendidikan */}
            <div className="exp-col">
              <ColHeader label={t.experience.eduLabel} title={t.experience.eduTitle} />
              <div className="exp-col-list">
                {eduList.map((item, i) => (
                  <ExpItem
                    key={item.title + '-' + i}
                    item={item}
                    delay={i + 1}
                    highlightsHeader={t.experience.highlightsHeader}
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
