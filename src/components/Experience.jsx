import React from 'react';
import logo44Thrift from '../assets/logo_44thrift.png';
import logoPringapus from '../assets/logo_pringapus.jpg';
import logoSMK from '../assets/logo_smk_pgri.jpg';
import logoUIN from '../assets/logo_uin_malang.png';

/* ─── Data Karir & Pendidikan (Authentic Dev Log) ─── */

const careerData = [
  {
    period: '2025.01 — 2025.12',
    duration: '1 Tahun',
    title: 'Full-Stack Developer Intern',
    org: 'PT Pringapus Digital Teknologi',
    location: 'Malang • Hybrid',
    status: 'Magang',
    bulletPoints: [
      'Mengembangkan antarmuka aplikasi web dan mobile hybrid menggunakan Ionic Angular.',
      'Merancang modul backend dan integrasi endpoint RESTful API berbasis CodeIgniter & WordPress.',
      'Mengelola struktur database SQL, indexing relasional, dan optimalisasi konsumsi data.',
    ],
    tech: ['Ionic', 'Angular', 'CodeIgniter', 'SQL', 'REST API'],
    logo: logoPringapus,
    alt: 'Logo PT Pringapus Digital Teknologi',
  },
  {
    period: '2024.12 — Sekarang',
    duration: 'Aktif',
    title: 'Founder & Tech Lead',
    org: 'FourtyFourThrift',
    location: 'Kota Batu / Online',
    status: 'Wirausaha',
    bulletPoints: [
      'Membangun strategi branding digital, kanal penjualan digital, dan otomatisasi pembukuan.',
      'Mengelola inventory management serta eksekusi campaign pemasaran digital berbasis data.',
      'Mengembangkan presence e-commerce modern dengan engagement pelanggan terukur.',
    ],
    tech: ['Branding', 'E-Commerce', 'Inventory', 'Digital Marketing'],
    logo: logo44Thrift,
    alt: 'Logo FourtyFourThrift',
  },
];

const educationData = [
  {
    period: '2026.08 — Sekarang',
    duration: 'S1 Degree',
    title: 'S1 Teknik Informatika',
    org: 'UIN Maulana Malik Ibrahim Malang',
    location: 'Kota Malang',
    status: 'Perkuliahan',
    bulletPoints: [
      'Pendalaman mendalam struktur data, algoritma, dan arsitektur rekayasa perangkat lunak enterprise.',
      'Eksplorasi sistem komputasi terdistribusi, kecerdasan buatan, dan perancangan database skala besar.',
      'Kolaborasi riset teknologi dan penerapan standar Clean Code dalam siklus software development.',
    ],
    tech: ['Data Structures', 'Algorithms', 'AI', 'Software Engineering'],
    logo: logoUIN,
    alt: 'Logo UIN Maulana Malik Ibrahim Malang',
  },
  {
    period: '2023.06 — 2026.05',
    duration: '3 Tahun',
    title: 'Rekayasa Perangkat Lunak (RPL)',
    org: 'SMK PGRI 03 Malang (Skariga)',
    location: 'Kota Malang',
    status: 'Vokasi',
    bulletPoints: [
      'Pelatihan intensif rekayasa software: pemrograman web frontend & backend, dan aplikasi mobile.',
      'Implementasi database SQL terstruktur (DDL/DML), normalisasi, dan manajemen transaksi data.',
      'Penyelesaian proyek capstone berbasis tim dengan standard workflow industri dan version control.',
    ],
    tech: ['Web Dev', 'Mobile Dev', 'Database SQL', 'OOP PHP', 'Git'],
    logo: logoSMK,
    alt: 'Logo SMK PGRI 03 Malang (Skariga)',
  },
];

function ResumeCard({ item, delay }) {
  return (
    <div className={`resume-card reveal d${delay}`}>
      {/* Top Meta Bar */}
      <div className="resume-header">
        <div className="resume-logo-wrap">
          <img src={item.logo} alt={item.alt} />
        </div>
        <div className="resume-title-block">
          <div className="resume-tag-row">
            <span className="resume-status-badge">{item.status}</span>
            <span className="resume-duration">{item.duration}</span>
            <span className="resume-loc">{item.location}</span>
          </div>
          <h4 className="resume-role">{item.title}</h4>
          <span className="resume-org">{item.org}</span>
        </div>
      </div>

      {/* Period Time Tag */}
      <div className="resume-period-row">
        <span className="resume-period-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {item.period}
        </span>
      </div>

      {/* Engineering Bullet Highlights */}
      <ul className="resume-bullets">
        {item.bulletPoints.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>

      {/* Tech Stack Chips */}
      <div className="resume-tech-row">
        {item.tech.map((t) => (
          <span key={t} className="resume-tech-chip">
            #{t.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">

        {/* Centered Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">04 — Track Record</span>
          <h2 className="section-title">
            Pengalaman &amp; Pendidikan
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Perjalanan langsung di industri pengembangan perangkat lunak dan fondasi akademik vokasi &amp; perguruan tinggi.
          </p>
        </div>

        {/* Centered Dual-Column Container */}
        <div className="resume-centered-container">

          {/* Left Column: Pengalaman Kerja */}
          <div className="resume-column">
            <div className="resume-col-header">
              <span className="resume-col-sublabel">Karier</span>
              <h3 className="resume-col-maintitle">Pengalaman Kerja</h3>
              <div className="resume-col-line" />
            </div>

            <div className="resume-cards-list">
              {careerData.map((item, i) => (
                <ResumeCard key={item.title} item={item} delay={i + 1} />
              ))}
            </div>
          </div>

          {/* Right Column: Riwayat Studi */}
          <div className="resume-column">
            <div className="resume-col-header">
              <span className="resume-col-sublabel">Pendidikan</span>
              <h3 className="resume-col-maintitle">Riwayat Studi</h3>
              <div className="resume-col-line" />
            </div>

            <div className="resume-cards-list">
              {educationData.map((item, i) => (
                <ResumeCard key={item.title} item={item} delay={i + 1} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
