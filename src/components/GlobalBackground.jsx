import React, { useEffect, useRef } from 'react';

export default function GlobalBackground() {
  const ambientRef = useRef(null);
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only activate cursor tracker on pointer-capable devices (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let ambientX = targetX;
    let ambientY = targetY;

    let coreX = targetX;
    let coreY = targetY;

    let ringX = targetX;
    let ringY = targetY;

    let isInteractiveHover = false;
    let animId = null;

    const setVisible = (visible) => {
      isVisibleRef.current = visible;
      const opacity = visible ? '1' : '0';
      if (ambientRef.current) ambientRef.current.style.opacity = opacity;
      if (coreRef.current) coreRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    };

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisibleRef.current) {
        setVisible(true);
      }

      // Check if cursor is over interactive target (links, buttons, inputs, cards)
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest('a, button, input, textarea, select, [role="button"], .exp-card-modern, .proj-card-shell, .skill-marquee-card')
      ) {
        isInteractiveHover = true;
      } else {
        isInteractiveHover = false;
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const animate = () => {
      // Ambient spotlight has a relaxed, luxurious momentum
      ambientX += (targetX - ambientX) * 0.08;
      ambientY += (targetY - ambientY) * 0.08;

      // Core spotlight tracks closer to the pointer
      coreX += (targetX - coreX) * 0.18;
      coreY += (targetY - coreY) * 0.18;

      // Cursor accent ring tracks briskly
      ringX += (targetX - ringX) * 0.35;
      ringY += (targetY - ringY) * 0.35;

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${ambientX}px, ${ambientY}px, 0)`;
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${coreX}px, ${coreY}px, 0)`;
      }
      if (ringRef.current) {
        const scale = isInteractiveHover ? 1.45 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Background Interactive Layer (z-index: 0) */}
      <div className="global-cursor-backdrop" aria-hidden="true">
        <div className="global-grid-matrix" />
        <div ref={ambientRef} className="global-cursor-glow-ambient" />
        <div ref={coreRef} className="global-cursor-glow-core" />
      </div>

      {/* Foreground Subtle Cursor Follower Ring (z-index: 9998) */}
      <div
        ref={ringRef}
        className="global-cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}
