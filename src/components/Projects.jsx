import React, { useRef, useEffect } from 'react';
import educonnectMockup from '../assets/educonnect_mockup.png';
import healthsyncMockup from '../assets/healthsync_mockup.png';
import fintrackMockup from '../assets/fintrack_mockup.png';

// Subtle 3D tilt on the thumbnail only
function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 12;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -12;
      el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    };
    const off = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
    };
    const start = () => { el.style.transition = 'transform 0.1s ease'; };
    el.addEventListener('mousemove', on);
    el.addEventListener('mouseleave', off);
    el.addEventListener('mouseenter', start);
    return () => {
      el.removeEventListener('mousemove', on);
      el.removeEventListener('mouseleave', off);
      el.removeEventListener('mouseenter', start);
    };
  }, [ref]);
}

function ProjectRow({ project, index }) {
  const imgRef = useRef(null);
  useTilt(imgRef);

  return (
    <div className={`project-row reveal d${Math.min(index + 1, 4)}`}>
      <span className="proj-num">0{index + 1}</span>

      <div className="proj-body">
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>
        <div className="proj-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            Live Demo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="proj-image" ref={imgRef}>
        <img src={project.image} alt={`${project.title} mockup`} />
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'EduConnect — Portal Manajemen Akademik',
      desc: 'Sistem manajemen institusi pendidikan terpadu: administrasi, kurikulum, absensi digital, dan nilai siswa berbasis cloud.',
      image: educonnectMockup,
      tags: ['Laravel', 'SQL', 'Angular', 'Vite'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'FourtyfourPOS — Point of Sale & Loyalty',
      desc: 'Aplikasi kasir dengan sistem member dan program loyalitas terintegrasi untuk meningkatkan retensi pelanggan.',
      image: healthsyncMockup,
      tags: ['Ionic', 'Angular', 'CodeIgniter', 'MySQL'],
      github: 'https://github.com/HasyaRayyan/Aplikasi-Web-Kasir-POS-Member-Loyality',
      live: 'https://example.com',
    },
    {
      title: 'My Finance — Personal Finance Dashboard',
      desc: 'Dasbor analitik keuangan untuk manajemen pengeluaran, budgeting, dan visualisasi data interaktif.',
      image: fintrackMockup,
      tags: ['React', 'Vite', 'SQL', 'CSS Grid'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">03 — Proyek</span>
          <h2 className="section-title">Hasil kerja<br />yang saya banggakan.</h2>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
