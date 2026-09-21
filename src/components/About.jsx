import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Counter animation
function Counter({ target, suffix = '+' }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.6 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let n = 0;
    const end = parseInt(target);
    const step = Math.ceil(end / 30);
    const t = setInterval(() => {
      n = Math.min(n + step, end);
      setVal(n);
      if (n >= end) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [started, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const STACK = ['React', 'TypeScript', 'Tailwind', 'Laravel', 'PHP 8', 'MySQL', 'Angular', 'Ionic', 'Git', 'Vite'];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">
            {t.about.title.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            {t.about.sub}
          </p>
        </div>

        <div className="about-grid">
          {/* Left — bio */}
          <div className="reveal from-left">
            <div className="about-body">
              {t.about.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="about-stack">
              {STACK.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>

            {/* Mini stats */}
            <div className="about-stats-row">
              {t.about.stats.map(({ num, label }) => (
                <div key={label} className="about-stat-item">
                  <div className="about-stat-num">
                    <Counter target={num} />
                  </div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — capabilities */}
          <div className="reveal from-right">
            <p className="about-cap-heading">
              {t.about.capLabel}
            </p>
            <div className="cap-list">
              {t.about.capabilities.map((c, i) => (
                <div key={c.num} className={`cap-item reveal d${i + 1}`}>
                  <span className="cap-num">{c.num}</span>
                  <div className="cap-content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
