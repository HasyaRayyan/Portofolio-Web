import React from 'react';

const experiences = [
  {
    date: 'Agt 2026 — Sekarang',
    title: 'Teknik Informatika',
    org: 'UIN Maulana Malik Ibrahim Malang',
    desc: 'Melanjutkan studi S1 untuk memperdalam ilmu rekayasa perangkat lunak, algoritma, dan pengembangan sistem.',
  },
  {
    date: 'Des 2024 — Sekarang',
    title: 'Owner & Founder',
    org: 'FourtyFourThrift',
    desc: 'Mendirikan bisnis thrift pakaian berkualitas. Bertanggung jawab atas pemasaran, manajemen inventaris, dan pengembangan merek.',
  },
  {
    date: 'Jan 2025 — Des 2025',
    title: 'Full-Stack Developer Intern',
    org: 'PT Pringapus Digital Teknologi',
    desc: 'Membangun aplikasi web responsif menggunakan Ionic Angular, WordPress, dan CodeIgniter. Manajemen database SQL, integrasi REST API.',
  },
  {
    date: 'Jun 2023 — Mei 2026',
    title: 'Siswa RPL',
    org: 'SMK PGRI 03 Malang',
    desc: 'Mempelajari rekayasa perangkat lunak: analisis kebutuhan, desain sistem, pengembangan, dan pengujian. Mengasah keterampilan pemrograman dan kolaborasi tim.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">04 — Perjalanan</span>
          <h2 className="section-title">Dari mana saya<br />berasal.</h2>
        </div>

        <div className="timeline-wrap">
          {experiences.map((exp, i) => (
            <div key={i} className={`tl-item reveal d${Math.min(i + 1, 4)}`}>
              <div className="tl-dot" />
              <span className="tl-date">{exp.date}</span>
              <h3 className="tl-title">{exp.title}</h3>
              <span className="tl-org">{exp.org}</span>
              {exp.desc && <p className="tl-desc">{exp.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
