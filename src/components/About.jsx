import React from 'react';

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <p className="section-subtitle">
          Mengenal lebih dalam perjalanan profesional dan visi saya dalam membangun solusi teknologi.
        </p>

        <div className="about-wrapper">
          <div className="card-glass" style={{ padding: '40px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              Saya adalah Developer yang fokus pada <span className="gradient-text">Kualitas</span> &amp; <span className="gradient-text">Pengalaman Pengguna</span>
            </h3>
            <p className="about-desc">
              Dengan minat mendalam dalam industri software development, saya mengkhususkan diri untuk menghubungkan keindahan antarmuka web dan aplikasi mobile dengan kestabilan arsitektur sistem backend.
            </p>
            <p className="about-desc">
              Saya senang memecahkan masalah kompleks, merancang skema database SQL yang efisien, dan menulis kode yang bersih, mudah dipelihara, serta teruji dengan baik. Kolaborasi tim dan pembelajaran teknologi baru adalah apa yang mendorong saya untuk terus bertumbuh.
            </p>
          </div>

          <div className="about-details">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Kemampuan Kunci</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'var(--primary-glow)', 
                  color: 'var(--primary)', 
                  padding: '10px', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>Frontend &amp; Responsive Web</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Membangun antarmuka modern yang interaktif, responsif, dan ramah pengguna dengan React, Angular, dan Vite.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'var(--secondary-glow)', 
                  color: 'var(--secondary)', 
                  padding: '10px', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>Cross-Platform Mobile Apps</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mengembangkan aplikasi mobile Android &amp; iOS berkinerja tinggi dari satu basis kode menggunakan framework Ionic.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'var(--primary-glow)', 
                  color: 'var(--primary)', 
                  padding: '10px', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>Backend &amp; Database Architecture</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Merancang RESTful API yang aman dengan Laravel dan mengoptimalkan query database relasional SQL.</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="card-glass stat-item">
                <div className="stat-num">3+</div>
                <div className="stat-label">Tahun Studi</div>
              </div>
              <div className="card-glass stat-item">
                <div className="stat-num">12+</div>
                <div className="stat-label">Proyek Jadi</div>
              </div>
              <div className="card-glass stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">Teknologi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
