import React from 'react';
import logo44Thrift from '../assets/logo_44thrift.png';
import logoPringapus from '../assets/logo_pringapus.jpg';
import logoSMK from '../assets/logo_smk_pgri.jpg';
import logoUIN from '../assets/logo_uin_malang.png';

/* ─── Data ─── */

const careerData = [
  {
    date: 'Jan 2025 — Des 2025',
    title: 'Full-Stack Developer Intern',
    org: 'PT Pringapus Digital Teknologi',
    desc: 'Membangun aplikasi web responsif menggunakan Ionic Angular, WordPress, dan CodeIgniter. Manajemen database SQL dan integrasi REST API.',
    chips: ['Ionic', 'Angular', 'CodeIgniter', 'SQL', 'REST API'],
    logo: logoPringapus,
    alt: 'Logo PT Pringapus Digital Teknologi',
    type: 'Magang',
  },
  {
    date: 'Des 2024 — Sekarang',
    title: 'Owner & Founder',
    org: 'FourtyFourThrift',
    desc: 'Mendirikan bisnis thrift pakaian vintage berkualitas. Menangani strategi pemasaran digital, manajemen inventaris, dan pengembangan merek.',
    chips: ['Pemasaran', 'Branding', 'Manajemen', 'E-Commerce'],
    logo: logo44Thrift,
    alt: 'Logo FourtyFourThrift',
    type: 'Wirausaha',
  },
];

const educationData = [
  {
    date: 'Agt 2026 — Sekarang',
    title: 'Teknik Informatika S1',
    org: 'UIN Maulana Malik Ibrahim Malang',
    desc: 'Memperdalam rekayasa perangkat lunak, struktur data & algoritma, kecerdasan buatan, serta perancangan sistem enterprise skala besar.',
    chips: ['Informatika', 'Algoritma', 'AI', 'Software Eng.'],
    logo: logoUIN,
    alt: 'Logo UIN Maulana Malik Ibrahim Malang',
    type: 'Studi S1',
  },
  {
    date: 'Jun 2023 — Mei 2026',
    title: 'Rekayasa Perangkat Lunak',
    org: 'SMK PGRI 03 Malang (Skariga)',
    desc: 'Pendidikan vokasi intensif RPL: perancangan sistem, pemrograman web & mobile, database SQL, serta kolaborasi pengembangan proyek.',
    chips: ['RPL', 'Pemrograman', 'Web Dev', 'Database'],
    logo: logoSMK,
    alt: 'Logo SMK PGRI 03 Malang (Skariga)',
    type: 'SMK RPL',
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
  return (
    <div className={`exp-item reveal d${delay}`}>
      <div className="exp-item-top">
        <div className="exp-item-logo">
          <img src={item.logo} alt={item.alt} />
        </div>
        <div className="exp-item-meta">
          <div className="exp-meta-row">
            <span className="exp-item-badge">{item.type}</span>
            <span className="exp-item-date">{item.date}</span>
          </div>
          <h4 className="exp-item-title">{item.title}</h4>
          <span className="exp-item-org">{item.org}</span>
        </div>
      </div>
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
