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
    desc: 'Pengembangan dan pemeliharaan aplikasi web & sistem informasi berbasis enterprise.',
    highlights: [
      'Membangun modul frontend responsif menggunakan Ionic Angular & antarmuka modern.',
      'Merancang RESTful API dan integrasi backend menggunakan PHP CodeIgniter.',
      'Mengoptimasi skema database SQL untuk transaksi data yang cepat dan aman.',
    ],
    logo: logoPringapus,
    alt: 'Logo PT Pringapus Digital Teknologi',
    type: 'Magang Industri',
  },
  {
    date: 'Des 2024 — Sekarang',
    title: 'Owner & Digital Strategist',
    org: 'FourtyFourThrift',
    desc: 'Membangun dan mengembangkan brand e-commerce pakaian vintage berkualitas.',
    highlights: [
      'Membangun sistem katalog digital dan manajemen inventaris berbasis web.',
      'Menjalankan strategi pemasaran performa dan branding digital omnichannel.',
      'Mengelola alur operasional, kepuasan pelanggan, dan analitik penjualan.',
    ],
    logo: logo44Thrift,
    alt: 'Logo FourtyFourThrift',
    type: 'Wirausaha Digital',
  },
];

const educationData = [
  {
    date: 'Agt 2026 — Sekarang',
    title: 'S1 Teknik Informatika',
    org: 'UIN Maulana Malik Ibrahim Malang',
    desc: 'Fokus pada Software Engineering, Algoritma Lanjut, dan Sistem Terdistribusi.',
    highlights: [
      'Memperdalam arsitektur sistem enterprise, struktur data, dan rekayasa perangkat lunak.',
      'Eksplorasi kecerdasan buatan (AI), data modeling, dan cloud deployment.',
      'Kolaborasi riset akademik dan pembuatan prototipe solusi komputasi cerdas.',
    ],
    logo: logoUIN,
    alt: 'Logo UIN Maulana Malik Ibrahim Malang',
    type: 'Pendidikan Tinggi (S1)',
  },
  {
    date: 'Jun 2023 — Mei 2026',
    title: 'Rekayasa Perangkat Lunak (RPL)',
    org: 'SMK PGRI 03 Malang (Skariga)',
    desc: 'Pendidikan vokasi teknologi informasi intensif berorientasi industri.',
    highlights: [
      'Penguasaan fundamental algoritma pemrograman, web full-stack, & mobile app.',
      'Praktek perancangan database relasional MySQL dan pemodelan sistem UML.',
      'Pengalaman kepemimpinan tim dalam pengerjaan proyek software riil.',
    ],
    logo: logoSMK,
    alt: 'Logo SMK PGRI 03 Malang (Skariga)',
    type: 'Vokasi Kejuruan',
  },
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

function ExpItem({ item, delay }) {
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
        <span className="exp-highlights-title">Kontribusi &amp; Fokus Utama:</span>
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
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">04 — Track Record</span>
          <h2 className="section-title">
            Pengalaman &amp; Pendidikan
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Perjalanan profesional, rekayasa software industri, serta fondasi akademis yang membentuk kapabilitas teknis saya.
          </p>
        </div>

        {/* Two-column layout centered */}
        <div className="exp-two-col-container">
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
      </div>
    </section>
  );
}
