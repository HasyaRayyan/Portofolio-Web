import React, { useState } from 'react';

const CONTACT_EMAIL = 'hasyarayyanbm@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/hasyarayyan';

const contactLinks = [
  {
    label: 'Email Langsung',
    val: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    val: 'linkedin.com/in/hasyarayyan',
    href: LINKEDIN_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    val: 'github.com/HasyaRayyan',
    href: 'https://github.com/HasyaRayyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'Domisili & Lokasi',
    val: 'Kota Batu, Jawa Timur, Indonesia',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, ok: false, err: '', msg: '' });

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, ok: false, err: 'Mohon isi nama, email, dan pesan Anda.', msg: '' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ loading: false, ok: false, err: 'Format email tidak valid.', msg: '' });
      return;
    }

    setStatus({ loading: true, ok: false, err: '', msg: '' });

    try {
      // Kirim pesan nyata langsung ke hasyarayyanbm@gmail.com via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject
            ? `[Portofolio Web] ${form.subject} — dari ${form.name}`
            : `[Portofolio Web] Pesan Baru dari ${form.name}`,
          message: form.message,
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus({
          loading: false,
          ok: true,
          err: '',
          msg: `Pesan sukses terkirim langsung ke ${CONTACT_EMAIL}! Terima kasih, saya akan segera membalasnya.`,
        });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Gagal mengirim via API.');
      }
    } catch (err) {
      // Fallback: buka default mail client
      const sub = encodeURIComponent(form.subject || `Pesan Portofolio dari ${form.name}`);
      const bod = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${sub}&body=${bod}`;

      setStatus({
        loading: false,
        ok: true,
        err: '',
        msg: `Aplikasi email dibuka untuk mengirim langsung ke ${CONTACT_EMAIL}.`,
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">05 — Kontak</span>
          <h2 className="section-title">Mari kita<br />buat sesuatu.</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Punya ide produk, peluang kolaborasi, atau sekadar ingin berdiskusi teknis seputar rekayasa perangkat lunak? Pintu selalu terbuka.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-left reveal from-left">
            <h3>Punya proyek<br />atau tawaran kerja?</h3>
            <p>
              Saya berbasis di <strong>Kota Batu, Jawa Timur</strong> dan siap untuk peluang Remote, Hybrid, maupun On-site. Silakan kirim pesan melalui formulir atau hubungi kontak langsung di bawah ini.
            </p>
            <div className="contact-links">
              {contactLinks.map((cl) => (
                <div
                  key={cl.label}
                  className="contact-link-row"
                  style={{ cursor: cl.href ? 'pointer' : 'default' }}
                  onClick={() => cl.href && window.open(cl.href, '_blank', 'noopener,noreferrer')}
                >
                  <div className="clr-left">
                    <div className="clr-icon">{cl.icon}</div>
                    <div>
                      <span className="clr-label">{cl.label}</span>
                      <span className="clr-val">{cl.val}</span>
                    </div>
                  </div>
                  {cl.href && (
                    <svg className="clr-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Column */}
          <div className="reveal from-right">
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Nama Lengkap</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Masukkan nama kamu"
                    value={form.name}
                    onChange={change}
                    disabled={status.loading}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Alamat Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="kamu@contoh.com"
                    value={form.email}
                    onChange={change}
                    disabled={status.loading}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subjek / Topik</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Misal: Diskusi Proyek Web / Mobile"
                  value={form.subject}
                  onChange={change}
                  disabled={status.loading}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Pesan Anda</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input"
                  placeholder="Ceritakan gambaran proyek, kebutuhan sistem, atau pesan Anda di sini..."
                  value={form.message}
                  onChange={change}
                  disabled={status.loading}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status.loading}>
                {status.loading ? 'Mengirim pesan ke email...' : 'Kirim Pesan Sekarang'}
                {!status.loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>

              {status.err && <div className="submit-msg error">{status.err}</div>}
              {status.ok && <div className="submit-msg success">{status.msg}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
