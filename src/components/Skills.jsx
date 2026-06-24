import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      icon: (
        <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        { 
          name: 'React', 
          level: 90, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <circle cx="50" cy="50" r="8" fill="currentColor"/>
              <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" />
              <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="6" transform="rotate(120 50 50)" />
            </svg>
          )
        },
        { 
          name: 'Angular', 
          level: 80, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <path d="M50 10 L85 22 L78 75 L50 90 L22 75 L15 22 Z" fill="currentColor" opacity="0.15" />
              <path d="M50 10 L85 22 L78 75 L50 90 L22 75 L15 22 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
              <path d="M50 20 L27 70 L37 70 L50 38 L63 70 L73 70 Z" fill="currentColor" />
              <path d="M40 58 H60" stroke="var(--bg-surface)" strokeWidth="6" />
            </svg>
          )
        },
        { 
          name: 'Vite', 
          level: 85, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <path d="M80 15 L50 90 L20 15 Z" fill="currentColor" opacity="0.15" />
              <path d="M80 15 L50 90 L20 15 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
              <path d="M52 10 L30 50 H55 L45 90 L75 42 H50 Z" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Mobile Development',
      icon: (
        <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      skills: [
        { 
          name: 'Ionic Framework', 
          level: 85, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="6" fill="currentColor" opacity="0.15" />
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
              <circle cx="70" cy="30" r="8" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Backend & Database',
      icon: (
        <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: [
        { 
          name: 'Laravel', 
          level: 85, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <path d="M15 30 L50 12 L85 30 L85 70 L50 88 L15 70 Z" fill="currentColor" opacity="0.15" />
              <path d="M15 30 L50 12 L85 30 L85 70 L50 88 L15 70 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
              <path d="M50 12 L50 88" stroke="currentColor" strokeWidth="6" />
              <path d="M15 30 L50 48 L85 30" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
            </svg>
          )
        },
        { 
          name: 'SQL (MySQL & PostgreSQL)', 
          level: 90, 
          icon: (
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'currentColor' }}>
              <path d="M10 25 C10 10, 90 10, 90 25 C90 40, 10 40, 10 25 Z" fill="currentColor" opacity="0.15" />
              <path d="M10 25 C10 15, 90 15, 90 25 M10 25 V75 C10 90, 90 90, 90 75 V25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M10 50 C10 65, 90 65, 90 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M10 75 C10 90, 90 90, 90 75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title">Keahlian Saya</h2>
      <p className="section-subtitle">
        Perangkat teknologi utama yang saya gunakan untuk mewujudkan konsep menjadi produk digital berkualitas tinggi.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="card-glass skills-category">
            <h3 className="category-title">
              {category.icon}
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    {/* Width animated using inline style directly for simplicity */}
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
