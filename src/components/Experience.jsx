import React, { useState } from 'react';
import logo44Thrift from '../assets/logo_44thrift.png';

/* ─── Inline SVG logos untuk setiap institusi ─── */

const LogoUIN = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="36" stroke="#1a6b3c" strokeWidth="3" fill="#f0faf4"/>
    <circle cx="40" cy="40" r="28" stroke="#1a6b3c" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
    <path d="M40 16 L44 34 L60 28 L46 38 L60 52 L44 46 L40 64 L36 46 L20 52 L34 38 L20 28 L36 34 Z" fill="#1a6b3c" opacity="0.85"/>
    <circle cx="40" cy="40" r="5" fill="#fff"/>
    <circle cx="40" cy="40" r="2.5" fill="#1a6b3c"/>
  </svg>
);

const LogoSMK = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8 L66 18 L66 44 C66 58 54 68 40 74 C26 68 14 58 14 44 L14 18 Z" fill="#c0392b" stroke="#922b21" strokeWidth="1.5"/>
    <path d="M40 15 L60 23 L60 43 C60 54 51 62 40 67 C29 62 20 54 20 43 L20 23 Z" fill="#e74c3c"/>
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
  <img src={logo44Thrift} alt="FourtyFourThrift logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
);

/* ─── Data Terpisah ─── */
const experiencesData = [
  {
    date: 'Jan 2025 — Des 2025',
    title: 'Full-Stack Developer Intern',
    org: 'PT Pringapus Digital Teknologi',
    desc: 'Membangun aplikasi web responsif menggunakan Ionic Angular, WordPress, dan CodeIgniter. Manajemen database SQL dan integrasi REST API.',
    badge: 'work',
    badgeLabel: 'Magang',
    chips: ['Ionic', 'Angular', 'CodeIgniter', 'SQL', 'REST API'],
    Logo: LogoPringapus,
  },
  {
    date: 'Des 2024 — Sekarang',
    title: 'Owner & Founder',
    org: 'FourtyFourThrift',
    desc: 'Mendirikan bisnis thrift pakaian berkualitas. Pemasaran digital, manajemen inventaris, dan pengembangan merek.',
    badge: 'business',
    badgeLabel: 'Wirausaha',
    chips: ['Pemasaran', 'Branding', 'Manajemen'],
    Logo: LogoFourtyFour,
  },
];

const educationData = [
  {
    date: 'Agt 2026 — Sekarang',
    title: 'Mahasiswa Teknik Informatika',
    org: 'UIN Maulana Malik Ibrahim Malang',
    desc: 'Melanjutkan studi S1 untuk memperdalam ilmu rekayasa perangkat lunak, algoritma, kecerdasan buatan, dan pengembangan sistem.',
    badge: 'education',
    badgeLabel: 'Pendidikan S1',
    chips: ['Informatika', 'Algoritma', 'AI', 'Software Eng.'],
    Logo: LogoUIN,
    featured: true,
  },
  {
    date: 'Jun 2023 — Mei 2026',
    title: 'Siswa Rekayasa Perangkat Lunak',
    org: 'SMK PGRI 03 Malang',
    desc: 'Mempelajari RPL secara mendalam: analisis kebutuhan, desain sistem, pengembangan, dan pengujian perangkat lunak.',
    badge: 'education',
    badgeLabel: 'Pendidikan SMK',
    chips: ['RPL', 'Pemrograman', 'Web Dev', 'Kolaborasi'],
    Logo: LogoSMK,
  },
];

const BadgeIcon = ({ type }) => {
  if (type === 'education') return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
  if (type === 'work') return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  );
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
};

export default function Experience() {
  const [tab, setTab] = useState('all');

  const itemsToDisplay = tab === 'exp' 
    ? experiencesData 
    : tab === 'edu' 
    ? educationData 
    : [...educationData, ...experiencesData];

  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-label">04 — Track Record</span>
          <h2 className="section-title">Pengalaman &amp; Pendidikan</h2>
        </div>

        {/* Tab Switcher */}
        <div className="reveal d1" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
          <button 
            className={`tab-btn ${tab === 'all' ? 'active' : ''}`} 
            onClick={() => setTab('all')}
          >
            Semua
          </button>
          <button 
            className={`tab-btn ${tab === 'exp' ? 'active' : ''}`} 
            onClick={() => setTab('exp')}
          >
            Pengalaman Kerja
          </button>
          <button 
            className={`tab-btn ${tab === 'edu' ? 'active' : ''}`} 
            onClick={() => setTab('edu')}
          >
            Pendidikan
          </button>
        </div>

        <div className="exp-grid">
          {itemsToDisplay.map((item, i) => {
            const { Logo } = item;
            return (
              <div key={item.title + i} className={`exp-card${item.featured ? ' featured' : ''} reveal d${Math.min(i + 1, 4)}`}>
                <div className="exp-logo">
                  <Logo />
                </div>
                <div className="exp-body">
                  <span className={`exp-badge ${item.badge}`}>
                    <BadgeIcon type={item.badge} />
                    {item.badgeLabel}
                  </span>
                  <span className="exp-date">{item.date}</span>
                  <h3 className="exp-title">{item.title}</h3>
                  <span className="exp-org">{item.org}</span>
                  <p className="exp-desc">{item.desc}</p>
                  <div className="exp-chips">
                    {item.chips.map((c) => <span key={c} className="exp-chip">{c}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
