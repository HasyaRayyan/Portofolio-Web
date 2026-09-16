import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const goto = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          {/* Brand & Status Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand" onClick={(e) => goto(e, 'home')}>
              Hasya<span className="accent">.</span>
            </a>
            <p className="footer-tagline">
              Full-Stack Developer &amp; Mobile Software Craftsman berbasis di Kota Batu, Jawa Timur, Indonesia. Membangun produk digital yang cepat, responsif, dan berorientasi performa.
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-nav-col">
            <span className="footer-col-heading">Navigasi</span>
            <ul className="footer-nav-list">
              {[
                ['home', 'Beranda'],
                ['about', 'Tentang'],
                ['skills', 'Keahlian'],
                ['projects', 'Proyek'],
                ['experience', 'Pengalaman'],
                ['contact', 'Kontak'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="footer-nav-link" onClick={(e) => goto(e, id)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Column */}
          <div className="footer-connect-col">
            <span className="footer-col-heading">Terhubung</span>
            <div className="footer-social-links">
              <a
                href="https://github.com/HasyaRayyan"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hasyarayyan"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:hasyarayyanbm@gmail.com"
                className="footer-social-btn"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Back to Top */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Hasya Rayyan Bahaudin Mahardika</strong>. All rights reserved.
          </p>

          <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Kembali ke atas">
            <span>Kembali ke atas</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
