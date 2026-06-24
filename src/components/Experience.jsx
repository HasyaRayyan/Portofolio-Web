import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: '2024 - Sekarang',
      title: 'Full Stack Web Developer',
      org: 'Proyek Lepas (Freelance) & Portofolio Personal',
      desc: 'Membangun aplikasi web responsif menggunakan React dan Laravel. Mengelola manajemen database SQL, integrasi webhook, keamanan API, dan mengoptimalkan performa bundler Vite.'
    },
    {
      date: '2023 - 2024',
      title: 'Mobile Application Developer',
      org: 'Kolaborasi Proyek & Eksperimen Mobile',
      desc: 'Merancang dan mengembangkan aplikasi mobile cross-platform untuk Android dan iOS menggunakan Ionic Framework dan Angular. Berfokus pada performa memori, animasi UI yang mulus, dan integrasi dengan hardware lokal.'
    },
    {
      date: '2022 - 2023',
      title: 'Frontend Developer & SQL Administrator',
      org: 'Studi Akademik & Pembelajaran Mandiri',
      desc: 'Mengembangkan landasan pemrograman web dengan Angular dan HTML/CSS. Merancang diagram ERD kompleks, normalisasi skema data, dan menulis kueri SQL MySQL/PostgreSQL yang efisien.'
    }
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
