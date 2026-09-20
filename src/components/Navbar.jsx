import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ theme, toggleTheme }) {
  const { lang, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('home');

  const links = [
    { id: 'home',       label: t.nav.home },
    { id: 'about',      label: t.nav.about },
    { id: 'skills',     label: t.nav.skills },
    { id: 'projects',   label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact',    label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 100;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(l.id);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => goto(e, 'home')}>
          Hasya Rayyan<span className="dot">.</span>
        </a>

        {/* Desktop links */}
        <ul className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`nav-link${active === l.id ? ' active' : ''}`}
                onClick={(e) => goto(e, l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
          >
            <span className={`lang-opt ${lang === 'id' ? 'active' : ''}`}>ID</span>
            <span className="lang-sep">/</span>
            <span className={`lang-opt ${lang === 'en' ? 'active' : ''}`}>EN</span>
          </button>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
