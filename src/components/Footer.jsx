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
      <div className="container footer-simple">
        <a href="#home" className="footer-logo" onClick={(e) => goto(e, 'home')}>
          Hasya<span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        <span className="footer-copy">© {year} Hasya Rayyan Bahaudin Mahardika. All rights reserved.</span>
      </div>
    </footer>
  );
}
