import React from 'react';
import logo44Thrift from '../assets/logo_44thrift.png';

/* ─── SVG Logos ─── */

const LogoUIN = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="36" stroke="#1a6b3c" strokeWidth="3" fill="#f0faf4"/>
    <circle cx="40" cy="40" r="28" stroke="#1a6b3c" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
    <path d="M40 16 L44 34 L60 28 L46 38 L60 52 L44 46 L40 64 L36 46 L20 52 L34 38 L20 28 L36 34 Z"
      fill="#1a6b3c" opacity="0.85"/>
    <circle cx="40" cy="40" r="5" fill="#fff"/>
    <circle cx="40" cy="40" r="2.5" fill="#1a6b3c"/>
  </svg>
);

const LogoSMK = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8 L66 18 L66 44 C66 58 54 68 40 74 C26 68 14 58 14 44 L14 18 Z"
      fill="#c0392b" stroke="#922b21" strokeWidth="1.5"/>
    <path d="M40 15 L60 23 L60 43 C60 54 51 62 40 67 C29 62 20 54 20 43 L20 23 Z"
      fill="#e74c3c"/>
    <rect x="29" y="28" width="22" height="16" rx="2" fill="white" opacity="0.92"/>
    <line x1="40" y1="28" x2="40" y2="44" stroke="#c0392b" strokeWidth="1.5"/>
    <line x1="32" y1="32" x2="38" y2="32" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
    <line x1="32" y1="35" x2="38" y2="35" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
    <line x1="32" y1="38" x2="38" y2="38" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
    <line x1="42" y1="32" x2="48" y2="32" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
    <line x1="42" y1="35" x2="48" y2="35" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
    <line x1="42" y1="38" x2="48" y2="38" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
  </svg>
);

const LogoPringapus = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="64" height="64" rx="16" fill="#1e40af"/>
    <circle cx="40" cy="40" r="14" fill="none" stroke="#60a5fa" strokeWidth="2"/>
    <circle cx="40" cy="40" r="6" fill="#60a5fa"/>
    <line x1="40" y1="12" x2="40" y2="26" stroke="#93c5fd" strokeWidth="2"/>
    <line x1="40" y1="54" x2="40" y2="68" stroke="#93c5fd" strokeWidth="2"/>
    <line x1="12" y1="40" x2="26" y2="40" stroke="#93c5fd" strokeWidth="2"/>
    <line x1="54" y1="40" x2="68" y2="40" stroke="#93c5fd" strokeWidth="2"/>
    <circle cx="40" cy="15" r="3" fill="#dbeafe"/>
    <circle cx="40" cy="65" r="3" fill="#dbeafe"/>
    <circle cx="15" cy="40" r="3" fill="#dbeafe"/>
    <circle cx="65" cy="40" r="3" fill="#dbeafe"/>
  </svg>
);

const LogoFourtyFour = () => (
  <img src={logo44Thrift} alt="FourtyFourThrift" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
);

/* ─── Data ─── */

const careerData = [
  {
    date: 'Jan 2025 — Des 2025',
    title: 'Full-Stack Developer Intern',
    org: 'PT Pringapus Digital Teknologi',
    desc: 'Membangun aplikasi web responsif menggunakan Ionic Angular, WordPress, dan CodeIgniter. Manajemen database SQL dan integrasi REST API.',
    chips: ['Ionic', 'Angular', 'CodeIgniter', 'SQL', 'REST API'],
    Logo: LogoPringapus,
    type: 'Magang',
  },
  {
    date: 'Des 2024 — Sekarang',
    title: 'Owner & Founder',
    org: 'FourtyFourThrift',
    desc: 'Mendirikan bisnis thrift pakaian berkualitas. Pemasaran digital, manajemen inventaris, dan pengembangan merek.',
    chips: ['Pemasaran', 'Branding', 'Manajemen'],
    Logo: LogoFourtyFour,
    type: 'Wirausaha',
  },
];

const educationData = [
  {
    date: 'Agt 2026 — Sekarang',
    title: 'Teknik Informatika S1',
    org: 'UIN Maulana Malik Ibrahim Malang',
    desc: 'Memperdalam rekayasa perangkat lunak, algoritma, kecerdasan buatan, dan pengembangan sistem skala besar.',
    chips: ['Informatika', 'Algoritma', 'AI', 'Software Eng.'],
    Logo: LogoUIN,
    type: 'S1',
  },
  {
    date: 'Jun 2023 — Mei 2026',
    title: 'Rekayasa Perangkat Lunak',
    org: 'SMK PGRI 03 Malang',
    desc: 'Studi intensif RPL: analisis kebutuhan, desain sistem, pengembangan, dan pengujian perangkat lunak.',
    chips: ['RPL', 'Pemrograman', 'Web Dev', 'Kolaborasi'],
    Logo: LogoSMK,
    type: 'SMK',
  },
];

/* ─── Sub components ─── */

function ColHeader({ label, title }) {
  return (
    <div className="exp-col-header">
      <span className="exp-col-label">{label}</span>
      <h3 className="exp-col-title">{title}</h3>
    </div>
  );
}

function ExpItem({ item, delay }) {
  const { Logo } = item;
  return (
    <div className={`exp-item reveal d${delay}`}>
      <div className="exp-item-top">
        <div className="exp-item-logo">
          <Logo />
        </div>
        <div className="exp-item-meta">
          <span className="exp-item-type">{item.type}</span>
          <span className="exp-item-date">{item.date}</span>
        </div>
      </div>
      <h4 className="exp-item-title">{item.title}</h4>
      <span className="exp-item-org">{item.org}</span>
      <p className="exp-item-desc">{item.desc}</p>
      <div className="exp-item-chips">
        {item.chips.map((c) => (
          <span key={c} className="exp-item-chip">{c}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">04 — Track Record</span>
          <h2 className="section-title">
            Pengalaman &amp; Pendidikan
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="exp-two-col">

          {/* Left — Karier */}
          <div className="exp-col">
            <ColHeader label="Karier" title="Pengalaman Kerja" />
            <div className="exp-col-list">
              {careerData.map((item, i) => (
                <ExpItem key={item.title} item={item} delay={i + 1} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="exp-divider" />

          {/* Right — Pendidikan */}
          <div className="exp-col">
            <ColHeader label="Pendidikan" title="Riwayat Studi" />
            <div className="exp-col-list">
              {educationData.map((item, i) => (
                <ExpItem key={item.title} item={item} delay={i + 1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
