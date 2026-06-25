import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: 'Aug 2026 - Present',
      title: 'Teknik Informatika Student',
      org: 'UIN Maulana Malik Ibrahim Malang',
      desc: ''
    },
    {
      date: 'Dec 2024 - present',
      title: 'Owner & Founder ',
      org: 'FourtyFourThrift',
      desc: 'Mendirikan dan mengelola FourtyFourThrift, sebuah bisnis thrift yang berfokus pada penjualan pakaian bekas berkualitas. Bertanggung jawab atas strategi pemasaran, manajemen inventaris, dan pengembangan merek untuk menciptakan pengalaman belanja yang unik bagi pelanggan.'
    },
    {
      date: 'Jan 2025 - Dec 2025',
      title: 'Full-Stack Developer Intern',
      org: 'PT Pringapus Digital Teknologi',
      desc: 'Membangun aplikasi & web responsif menggunakan ionic angular, Wordpress, CodeIgniter. Bertanggung jawab atas manajemen database SQL, integrasi REST API, Backend & Frontend.'
    },
    {
      date: 'Jun 2023 - Mei 2026',
      title: 'RPL (Rekayasa Perangkat Lunak) Student',
      org: 'SMK PGRI 03 Malang',
      desc: 'Mempelajari dan menguasai konsep rekayasa perangkat lunak, termasuk analisis kebutuhan, desain sistem, pengembangan perangkat lunak, pengujian.. Mengembangkan keterampilan dalam pemrograman, manajemen proyek, dan kolaborasi tim.'
    },

  ];

  return (
    <section id="experience" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title">Riwayat Perjalanan</h2>
      <p className="section-subtitle">
        Perjalanan studi dan pengembangan profesional saya dalam industri rekayasa perangkat lunak.
      </p>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="card-glass timeline-content">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="timeline-org">{exp.org}</span>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
