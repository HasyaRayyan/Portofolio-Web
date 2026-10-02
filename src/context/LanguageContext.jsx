import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  id: {
    nav: {
      home: 'Home',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      experience: 'Perjalanan',
      contact: 'Kontak',
      themeLight: 'Mode Terang',
      themeDark: 'Mode Gelap',
      switchLang: 'Switch to English',
    },
    hero: {
      eyebrow: 'Full-Stack & Mobile Developer',
      namePart1: 'Hasya Rayyan',
      namePart2: 'Bahaudin Mahardika.',
      desc: 'Merancang sistem dari baris kode pertama hingga performa skala produksi. Menggabungkan arsitektur backend yang solid dengan antarmuka web & mobile yang responsif, terukur, dan memanjakan pengguna.',
      ctaProjects: 'Lihat Proyek',
      ctaContact: 'Hubungi Saya',
      stats: [
        { num: '2+', label: 'Tahun pengalaman' },
        { num: '5+', label: 'Proyek Selesai' },
        { num: '10+', label: 'Modern Stack' },
      ],
      cardStatus: 'Available for projects',
      cardLoc: 'Kota Batu, ID',
      cardBadge: 'Full-Stack',
      cardRole: 'Full-Stack & Mobile Developer',
    },
    about: {
      label: '01 — Filosofi & Karakter',
      title: 'Rekayasa Software\ndengan Standar Presisi.',
      sub: 'Menghubungkan arsitektur kode yang tangguh dengan antarmuka yang intuitif dan berdaya guna tinggi.',
      bio: [
        'Bagi saya, koding bukan sekadar menyelesaikan baris sintaks—melainkan seni memecahkan masalah nyata melalui arsitektur sistem yang modular, bersih, dan terukur.',
        'Saya mendalami siklus pengembangan software secara utuh: mulai dari pemodelan skema relasional database, penyusunan kontrak RESTful API berkeamanan tinggi, hingga implementasi komponen UI reaktif yang responsif di berbagai ukuran layar.',
        'Berbasis di Kota Batu, Jawa Timur, saya terus mengeksplorasi ekosistem teknologi mutakhir untuk menghasilkan aplikasi digital yang cepat dimuat, mudah di-maintain, dan memberikan dampak nyata bagi pengguna.',
      ],
      stats: [
        { num: 2, label: 'Tahun Eksplorasi' },
        { num: 5, label: 'Proyek Selesai' },
        { num: 10, label: 'Teknologi Dikuasai' },
      ],
      capLabel: 'Fokus Rekayasa & Kapabilitas',
      capabilities: [
        {
          num: '01',
          title: 'Front End',
          desc: 'Mengembangkan antarmuka web modern, responsif, dan interaktif menggunakan React, Vite, Tailwind CSS, dan TypeScript.',
        },
        {
          num: '02',
          title: 'Back End',
          desc: 'Merancang arsitektur server tangguh, RESTful API terstruktur, dan optimasi database SQL dengan Laravel, PHP, dan MySQL.',
        },
        {
          num: '03',
          title: 'Fullstack',
          desc: 'Mengintegrasikan sisi frontend dan backend secara menyeluruh untuk membangun aplikasi web end-to-end yang efisien dan siap produksi.',
        },
      ],
    },
    skills: {
      label: '02 — Keahlian & Teknologi',
      title: 'Teknologi yang\nsaya gunakan.',
      sub: 'Ekosistem teknologi modern yang saya gunakan untuk membangun sistem backend tangguh, antarmuka web interaktif, dan aplikasi mobile multiplatform.',
      tabMotion: 'Motion',
      tabCard: 'Card',
      scrollLeft: 'Geser ke kiri',
      scrollRight: 'Geser ke kanan',
    },
    projects: {
      label: '03 — Proyek Pilihan',
      title: 'Hasil kerja & proyek Saya',
      scrollLeft: 'Geser ke kiri',
      scrollRight: 'Geser ke kanan',
      galleryBadge: 'Layar UI',
      galleryBtn: 'Galeri UI',
      viewCode: 'Lihat Source Code di GitHub',
      openDemo: 'Buka Demo',
      modalClose: 'Tutup',
      modalPrev: 'Sebelumnya',
      modalNext: 'Berikutnya',
      clickGalleryHint: 'Klik untuk melihat galeri UI',
      items: [
        {
          title: 'Member Loyalty POS',
          subtitle: 'Point of Sale & Kalkulasi Poin Loyalitas',
          category: 'Web & Mobile POS',
          desc: 'Sistem POS cerdas terintegrasi program loyalitas pelanggan. Menghitung poin reward otomatis dari transaksi belanja, membership Platinum/Gold, cetak struk, dasbor omzet harian, serta mobile app penukaran poin menu gratis.',
          galleryTitles: [
            'Keranjang Kasir — Input & Verifikasi Nomor Member',
            'Dashboard Kasir — Omzet, Transaksi & Grafik Mingguan',
            'Konfirmasi Bayar — Perhitungan Poin Otomatis (+79 Poin)',
            'Aplikasi Pelanggan — Status Akun & Saldo Poin',
            'Katalog Hadiah — Penukaran Poin Menu Gratis',
          ],
        },
        {
          title: 'EduConnect',
          subtitle: 'Portal Manajemen Akademik Terpadu',
          category: 'Academic Cloud',
          desc: 'Platform sistem informasi akademik institusi pendidikan. Administrasi kurikulum digital, absensi digital guru & murid, rekapitulasi nilai rapor, serta portal wali murid berbasis cloud.',
          galleryTitles: [
            'Jadwal Pelajaran — Timetable Mingguan & Ruang Kelas',
            'EduConnect — Dasbor & Manajemen Akademik Sekolah',
            'Rekap Nilai — Distribusi Prestasi Siswa & Rapor Digital',
          ],
        },
        {
          title: 'My Finance',
          subtitle: 'Personal Finance & Budgeting Dashboard',
          category: 'Financial Analytics',
          desc: 'Dasbor analitik keuangan personal untuk pencatatan dan pengelolaan arus kas. Visualisasi grafik pengeluaran, budgeting pos keuangan, dan laporan peramalan tabungan.',
          galleryTitles: [
            'Kartu Dompet Digital — Manajemen Saldo & Transaksi',
            'My Finance — Dasbor Keuangan & Visualisasi Data',
            'Analisis Finansial — Breakdown Pengeluaran & Arus Kas',
          ],
        },
      ],
    },
    experience: {
      label: '04 — Track Record',
      title: 'Pengalaman & Pendidikan',
      sub: 'Perjalanan profesional, rekayasa software industri, serta fondasi akademis yang membentuk kapabilitas teknis saya.',
      careerLabel: 'Karier',
      careerTitle: 'Pengalaman Kerja',
      careerCount: '2 Posisi',
      eduLabel: 'Pendidikan',
      eduTitle: 'Riwayat Studi',
      eduCount: '2 Institusi',
      currentBadge: 'Aktif',
      filterAll: 'Semua',
      filterCareer: 'Pengalaman',
      filterEdu: 'Pendidikan',
      highlightsHeader: 'Kontribusi & Fokus Utama:',
      tagsLabel: 'Keahlian & Teknologi:',
      career: [
        {
          date: 'Jan 2025 — Des 2025',
          title: 'Full-Stack Developer Intern',
          org: 'PT Pringapus Digital Teknologi',
          type: 'Magang Industri',
          isCurrent: false,
          desc: 'Pengembangan dan pemeliharaan aplikasi web & sistem informasi berbasis enterprise.',
          highlights: [
            'Membangun modul frontend responsif menggunakan Ionic Angular & antarmuka modern.',
            'Merancang RESTful API dan integrasi backend menggunakan PHP CodeIgniter.',
            'Mengoptimasi skema database SQL untuk transaksi data yang cepat dan aman.',
          ],
          tags: ['Ionic Angular', 'PHP CodeIgniter', 'RESTful API', 'MySQL', 'Full-Stack'],
        },
        {
          date: 'Des 2024 — Sekarang',
          title: 'Owner & Digital Strategist',
          org: 'FourtyFourThrift',
          type: 'Wirausaha Digital',
          isCurrent: true,
          desc: 'Membangun dan mengembangkan brand e-commerce pakaian vintage berkualitas.',
          highlights: [
            'Membangun sistem katalog digital dan manajemen inventaris berbasis web.',
            'Menjalankan strategi pemasaran performa dan branding digital omnichannel.',
            'Mengelola alur operasional, kepuasan pelanggan, dan analitik penjualan.',
          ],
          tags: ['E-Commerce', 'Brand Strategy', 'Inventory System', 'Digital Marketing', 'Analytics'],
        },
      ],
      education: [
        {
          date: 'Agt 2026 — Sekarang',
          title: 'S1 Teknik Informatika',
          org: 'UIN Maulana Malik Ibrahim Malang',
          type: 'Pendidikan Tinggi (S1)',
          isCurrent: true,
          desc: 'Fokus pada Software Engineering, Algoritma Lanjut, dan Sistem Terdistribusi.',
          highlights: [
            'Memperdalam arsitektur sistem enterprise, struktur data, dan rekayasa perangkat lunak.',
            'Eksplorasi kecerdasan buatan (AI), data modeling, dan cloud deployment.',
            'Kolaborasi riset akademik dan pembuatan prototipe solusi komputasi cerdas.',
          ],
          tags: ['Software Engineering', 'Algoritma & Data', 'Distributed Systems', 'Cloud & AI'],
        },
        {
          date: 'Jun 2023 — Mei 2026',
          title: 'Rekayasa Perangkat Lunak (RPL)',
          org: 'SMK PGRI 03 Malang (Skariga)',
          type: 'Vokasi Kejuruan',
          isCurrent: false,
          desc: 'Pendidikan vokasi teknologi informasi intensif berorientasi industri.',
          highlights: [
            'Penguasaan fundamental algoritma pemrograman, web full-stack, & mobile app.',
            'Praktek perancangan database relasional MySQL dan pemodelan sistem UML.',
            'Pengalaman kepemimpinan tim dalam pengerjaan proyek software riil.',
          ],
          tags: ['Full-Stack Web', 'Mobile App', 'MySQL Relasional', 'UML Modeling', 'Team Lead'],
        },
      ],
    },
    contact: {
      label: '05 — Kontak',
      title: 'Mari kita\nbuat sesuatu.',
      sub: 'Punya ide produk, tawaran magang/kerja, atau ingin kolaborasi membangun aplikasi? Hubungi saya langsung!',
      leftHeading: 'Punya proyek\natau tawaran?',
      leftDesc: 'Saya selalu terbuka untuk mendiskusikan pengembangan aplikasi baru, kolaborasi rekayasa software, atau sekadar bertukar wawasan seputar teknologi. Kirim pesan dan pesan Anda akan langsung terkirim ke kotak masuk saya.',
      locLabel: 'Lokasi',
      locVal: 'Kota Batu, Jawa Timur, Indonesia',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Nama Anda',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'email@contoh.com',
      subjectLabel: 'Subjek',
      subjectPlaceholder: 'Topik diskusi atau kolaborasi',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Tuliskan detail ide atau pesan Anda di sini...',
      sendBtn: 'Kirim Pesan Sekarang',
      sendingBtn: 'Mengirim pesan langsung...',
      errRequired: 'Mohon isi nama, email, dan pesan Anda.',
      errEmail: 'Format email tidak valid.',
      successMsg: '✓ Pesan berhasil dikirim ke hasyarayyanbm@gmail.com! Terima kasih, saya akan membalas secepatnya.',
    },
    footer: {
      tagline: 'Full-Stack Developer & Mobile Software Craftsman berbasis di Kota Batu, Jawa Timur, Indonesia. Membangun produk digital yang cepat, responsif, dan berorientasi performa.',
      navHeading: 'Navigasi',
      connectHeading: 'Terhubung',
      navLinks: {
        home: 'Beranda',
        about: 'Tentang',
        skills: 'Keahlian',
        projects: 'Proyek',
        experience: 'Pengalaman',
        contact: 'Kontak',
      },
      copyright: 'All rights reserved.',
      backToTop: 'Kembali ke atas',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
      switchLang: 'Ubah ke Bahasa Indonesia',
    },
    hero: {
      eyebrow: 'Full-Stack & Mobile Developer',
      namePart1: 'Hasya Rayyan',
      namePart2: 'Bahaudin Mahardika.',
      desc: 'Engineering resilient software from initial line to production scale. Bridging solid backend architectures with responsive, scalable, and intuitive web & mobile experiences.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      stats: [
        { num: '2+', label: 'Years of Experience' },
        { num: '5+', label: 'Projects' },
        { num: '10+', label: 'Modern Stack' },
      ],
      cardStatus: 'Available for projects',
      cardLoc: 'Batu City, ID',
      cardBadge: 'Full-Stack',
      cardRole: 'Full-Stack & Mobile Developer',
    },
    about: {
      label: '01 — Philosophy & Approach',
      title: 'Software Engineering\nwith Precision Standards.',
      sub: 'Bridging resilient code architectures with intuitive, high-impact user experiences.',
      bio: [
        "To me, programming isn't just writing syntax—it's the craft of solving real-world challenges through modular, clean, and scalable system architecture.",
        'I focus on the complete software development lifecycle: from relational database modeling and building secure RESTful API contracts, to implementing reactive UI components across all screen sizes.',
        'Based in Batu City, East Java, I continuously explore cutting-edge technologies to build fast, maintainable digital products that deliver real value to users.',
      ],
      stats: [
        { num: 2 , label: 'Years of Experience' },
        { num: 5, label: 'Completed Projects' },
        { num: 10, label: 'Mastered Tech' },
      ],
      capLabel: 'Engineering Focus & Capabilities',
      capabilities: [
        {
          num: '01',
          title: 'Front End',
          desc: 'Building fast, responsive, and interactive user interfaces using React, Vite, Tailwind CSS, and TypeScript.',
        },
        {
          num: '02',
          title: 'Back End',
          desc: 'Architecting robust server systems, structured RESTful APIs, and relational SQL databases with Laravel, PHP, and MySQL.',
        },
        {
          num: '03',
          title: 'Fullstack',
          desc: 'Seamlessly bridging frontend interfaces and backend architectures to deliver complete, scalable, production-ready web applications.',
        },
      ],
    },
    skills: {
      label: '02 — Skills & Technologies',
      title: 'Technologies\nI work with.',
      sub: 'Modern tech ecosystem I leverage to build robust backends, interactive web interfaces, and multiplatform mobile apps.',
      tabMotion: 'Motion',
      tabCard: 'Card',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
    },
    projects: {
      label: '03 — Featured Projects',
      title: 'My Works & Projects.',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      galleryBadge: 'UI Screens',
      galleryBtn: 'UI Gallery',
      viewCode: 'View Source Code on GitHub',
      openDemo: 'Live Demo',
      modalClose: 'Close',
      modalPrev: 'Previous',
      modalNext: 'Next',
      clickGalleryHint: 'Click to view UI gallery',
      items: [
        {
          title: 'Member Loyalty POS',
          subtitle: 'Point of Sale & Loyalty Rewards System',
          category: 'Web & Mobile POS',
          desc: 'Smart POS system integrated with customer loyalty programs. Features automatic reward point calculation, Platinum/Gold memberships, receipt printing, daily revenue analytics, and a companion mobile app for redeeming free menu items.',
          galleryTitles: [
            'Checkout Cart — Member Number Verification & Input',
            'Cashier Dashboard — Revenue, Transactions & Weekly Trends',
            'Payment Confirmation — Automated Points Calculation (+79 Points)',
            'Customer Mobile App — Account Status & Points Balance',
            'Rewards Catalog — Free Menu Item Points Redemption',
          ],
        },
        {
          title: 'EduConnect',
          subtitle: 'Unified Academic Management Portal',
          category: 'Academic Cloud',
          desc: 'Comprehensive academic information platform for educational institutions. Manages digital curriculum, teacher & student attendance tracking, report card grading, and a cloud-based parent portal.',
          galleryTitles: [
            'Weekly Schedule — Timetable & Classroom Allocation',
            'EduConnect — School Academic Management & Dashboard',
            'Student Grades — Academic Performance & Report Distribution',
          ],
        },
        {
          title: 'My Finance',
          subtitle: 'Personal Finance & Budgeting Dashboard',
          category: 'Financial Analytics',
          desc: 'Personal financial analytics dashboard for tracking and optimizing cash flows. Features interactive spending visualizations, budgeting categories, and automated savings forecasting.',
          galleryTitles: [
            'Digital Wallet Cards — Balance & Card Management',
            'My Finance — Financial Analytics & Overview Dashboard',
            'Cash Flow Analytics — Expense Breakdown & Budget Forecast',
          ],
        },
      ],
    },
    experience: {
      label: '04 — Track Record',
      title: 'Experience & Education',
      sub: 'Professional journey, industry software engineering experience, and academic foundation shaping my technical capabilities.',
      careerLabel: 'Career',
      careerTitle: 'Work Experience',
      careerCount: '2 Positions',
      eduLabel: 'Education',
      eduTitle: 'Academic History',
      eduCount: '2 Institutions',
      currentBadge: 'Active',
      filterAll: 'All',
      filterCareer: 'Experience',
      filterEdu: 'Education',
      highlightsHeader: 'Key Contributions & Focus:',
      tagsLabel: 'Technologies & Focus:',
      career: [
        {
          date: 'Jan 2025 — Dec 2025',
          title: 'Full-Stack Developer Intern',
          org: 'PT Pringapus Digital Teknologi',
          type: 'Industry Internship',
          isCurrent: false,
          desc: 'Development and maintenance of enterprise web applications and information systems.',
          highlights: [
            'Engineered responsive frontend modules using Ionic Angular and modern UI standards.',
            'Designed RESTful APIs and backend integration using PHP CodeIgniter.',
            'Optimized SQL database schemas for fast and reliable high-volume data transactions.',
          ],
          tags: ['Ionic Angular', 'PHP CodeIgniter', 'RESTful API', 'MySQL', 'Full-Stack'],
        },
        {
          date: 'Dec 2024 — Present',
          title: 'Owner & Digital Strategist',
          org: 'FourtyFourThrift',
          type: 'Digital Business',
          isCurrent: true,
          desc: 'Building and scaling a curated vintage apparel e-commerce brand.',
          highlights: [
            'Built digital product catalog and web-based inventory management systems.',
            'Executed omnichannel digital marketing strategies and performance-driven branding.',
            'Managed end-to-end operations, customer satisfaction, and revenue analytics.',
          ],
          tags: ['E-Commerce', 'Brand Strategy', 'Inventory System', 'Digital Marketing', 'Analytics'],
        },
      ],
      education: [
        {
          date: 'Aug 2026 — Present',
          title: "Bachelor's in Informatics Engineering",
          org: 'UIN Maulana Malik Ibrahim Malang',
          type: 'Higher Education (B.Sc.)',
          isCurrent: true,
          desc: 'Focusing on Software Engineering, Advanced Algorithms, and Distributed Systems.',
          highlights: [
            'Deepening enterprise system architecture, data structures, and software engineering.',
            'Exploring artificial intelligence (AI), data modeling, and cloud deployments.',
            'Collaborating on academic research and prototyping intelligent computing solutions.',
          ],
          tags: ['Software Engineering', 'Algorithms & Data', 'Distributed Systems', 'Cloud & AI'],
        },
        {
          date: 'Jun 2023 — May 2026',
          title: 'Software Engineering (RPL)',
          org: 'SMK PGRI 03 Malang (Skariga)',
          type: 'Vocational High School',
          isCurrent: false,
          desc: 'Intensive industry-oriented vocational education in information technology.',
          highlights: [
            'Mastered core programming algorithms, full-stack web, and mobile app development.',
            'Hands-on relational MySQL database design and UML system architecture modeling.',
            'Demonstrated team leadership across practical real-world software engineering projects.',
          ],
          tags: ['Full-Stack Web', 'Mobile App', 'Relational MySQL', 'UML Modeling', 'Team Lead'],
        },
      ],
    },
    contact: {
      label: '05 — Contact',
      title: "Let's build\nsomething great.",
      sub: 'Have a project idea, internship/job offer, or want to collaborate on building an app? Reach out directly!',
      leftHeading: 'Have a project\nor opportunity?',
      leftDesc: "I'm always open to discussing new application development, software engineering collaborations, or exchanging tech insights. Drop me a message and it will land straight in my inbox.",
      locLabel: 'Location',
      locVal: 'Batu City, East Java, Indonesia',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Topic of discussion or collaboration',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your project details or message here...',
      sendBtn: 'Send Message Now',
      sendingBtn: 'Sending message...',
      errRequired: 'Please fill in your name, email, and message.',
      errEmail: 'Invalid email format.',
      successMsg: '✓ Message sent successfully to hasyarayyanbm@gmail.com! Thank you, I will reply as soon as possible.',
    },
    footer: {
      tagline: 'Full-Stack Developer & Mobile Software Craftsman based in Batu City, East Java, Indonesia. Building fast, responsive, and performance-oriented digital products.',
      navHeading: 'Navigation',
      connectHeading: 'Connect',
      navLinks: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
      },
      copyright: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'en' || saved === 'id' ? saved : 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[lang] || translations.id;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
