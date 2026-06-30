import React from 'react';
import educonnectMockup from '../assets/educonnect_mockup.png';
import healthsyncMockup from '../assets/healthsync_mockup.png';
import fintrackMockup from '../assets/fintrack_mockup.png';

export default function Projects() {
  const projectsData = [
    {
      title: 'EduConnect - Portal Manajemen Akademik',
      desc: 'Sistem manajemen institusi pendidikan terpadu yang memfasilitasi administrasi sekolah, kurikulum, absensi digital, dan pengolahan nilai siswa berbasis cloud secara instan.',
      image: educonnectMockup,
      tags: ['Laravel', 'SQL', 'Angular', 'Vite'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Aplikasi Web POS With Member And loyalty System',
      desc: 'Aplikasi web untuk sistem point of sale dengan fitur member dan program loyalitas.',
      image: healthsyncMockup,
      tags: ['Ionic', 'Angular', 'Code Igniter', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
      live: 'https://example.com'
    },
    {
      title: 'FinTrack - Personal Finance Dashboard',
      desc: 'Dasbor analitik keuangan untuk manajemen pengeluaran, budgeting, serta integrasi dompet digital dengan diagram visualisasi data interaktif.',
      image: fintrackMockup,
      tags: ['React', 'Vite', 'SQL', 'CSS Grid'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title">Proyek Unggulan</h2>
      <p className="section-subtitle">
        Kumpulan proyek terpilih yang menunjukkan integrasi software architecture yang kuat dan desain antarmuka berkualitas premium.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="card-glass project-card">
            <div className="project-img-wrapper">
              <img 
                src={project.image} 
                alt={`${project.title} Interface Mockup`} 
                className="project-img"
              />
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  title="Lihat Source Code di GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  title="Kunjungi Live Website"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
