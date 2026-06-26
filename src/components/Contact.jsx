import React, { useState } from 'react';

const CONTACT_EMAIL = 'hasyarayyanbm@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Mohon isi nama, email, dan pesan Anda.'
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Format email tidak valid.'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    // Build mailto link and open it
    const subject = encodeURIComponent(
      formData.subject || `Pesan dari ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    // Small delay to show loading state, then open mail client
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus({ submitting: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section container" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title">Hubungi Saya</h2>
      <p className="section-subtitle">
        Punya ide proyek, tawaran pekerjaan, atau hanya ingin menyapa? Hubungi saya kapan saja.
      </p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div>
            <h3 className="contact-info-title">Mari Bekerja Sama</h3>
            <p className="contact-info-desc">
              Saya selalu terbuka untuk berdiskusi tentang pengembangan aplikasi baru, pemeliharaan kode, atau rancangan arsitektur database.
            </p>
          </div>

          <div className="contact-cards">
            {/* Clickable email card */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="card-glass contact-method-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '16px', padding: '20px' }}
            >
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div className="contact-method-title">Email</div>
                <div className="contact-method-val">{CONTACT_EMAIL}</div>
              </div>
            </a>

            <div className="card-glass contact-method-card">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <div className="contact-method-title">Lokasi</div>
                <div className="contact-method-val">Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-glass contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.submitting}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Alamat Email Anda</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.submitting}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Judul Pesan"
                value={formData.subject}
                onChange={handleChange}
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder="Tulis pesan detail di sini..."
                value={formData.message}
                onChange={handleChange}
                disabled={status.submitting}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Membuka Email...' : `Send`}
              {!status.submitting && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>

            {status.error && (
              <div className="submit-alert submit-alert-error">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="submit-alert submit-alert-success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Aplikasi email dibuka! Kirimkan pesan Anda ke {CONTACT_EMAIL}.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
