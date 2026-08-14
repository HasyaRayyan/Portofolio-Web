import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const goto = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-logo" onClick={(e) => goto(e, 'home')}>
          Hasya<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div className="footer-links">
          {[['home','Home'],['projects','Proyek'],['contact','Kontak']].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="footer-link" onClick={(e) => goto(e, id)}>
              {label}
            </a>
          ))}
        </div>

        <span className="footer-copy">© {year} Hasya Rayyan Bahaudin Mahardika</span>
      </div>
    </footer>
  );
}
