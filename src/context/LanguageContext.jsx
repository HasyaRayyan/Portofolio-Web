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
        { num: '3+', label: 'Tahun Eksplorasi' },
        { num: '12+', label: 'Proyek Selesai' },
        { num: '15+', label: 'Modern Stack' },
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
        { num: 3, label: 'Tahun Eksplorasi' },
        { num: 12, label: 'Proyek Selesai' },
        { num: 15, label: 'Teknologi Dikuasai' },
      ],
      capLabel: 'Fokus Rekayasa & Kapabilitas',
      capabilities: [
        {
          num: '01',
          title: 'Frontend Architecture & Reactive UI',
          desc: 'Menyusun arsitektur Single Page Application (SPA) cepat menggunakan React, Vite, dan TypeScript dengan state management modular.',
        },
        {
          num: '02',
          title: 'Cross-Platform Mobile Engineering',
          desc: 'Membangun aplikasi mobile multiplatform Android & iOS dari satu basis kode terpadu dengan Ionic Framework dan Capacitor plugins.',
        },
        {
          num: '03',
          title: 'Backend Systems & Database Design',
          desc: 'Merancang RESTful API terstruktur dengan Laravel / PHP dan optimasi indexing query database SQL performa tinggi.',
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
      title: 'Hasil kerja & proyek pilihan.',
      projectsCount: '9 Proyek Pilihan',
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
            'Dashboard Kasir — Omzet, Transaksi & Grafik Mingguan',
            'Keranjang Kasir — Input & Verifikasi Nomor Member',
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
            'EduConnect — Dasbor & Manajemen Akademik Sekolah',
          ],
        },
        {
          title: 'My Finance',
          subtitle: 'Personal Finance & Budgeting Dashboard',
          category: 'Financial Analytics',
          desc: 'Dasbor analitik keuangan personal untuk pencatatan dan pengelolaan arus kas. Visualisasi grafik pengeluaran, budgeting pos keuangan, dan laporan peramalan tabungan.',
          galleryTitles: [
            'My Finance — Dasbor Keuangan & Visualisasi Data',
          ],
        },
        {
          title: 'FourtyFour Thrift Store',
          subtitle: 'Digital Marketplace & Inventory Management',
          category: 'E-Commerce Mobile',
          desc: 'Aplikasi mobile marketplace thrift pakaian vintage dengan katalog produk otomatis, payment gateway online, live stock tracking, dan notifikasi flash sale eksklusif.',
          galleryTitles: [
            'Katalog Produk & Flash Sale Thrift Store',
            'Keranjang Belanja & Checkout',
          ],
        },
        {
          title: 'FleetTrack Logistics',
          subtitle: 'Real-time GPS Dispatch & Fleet Monitoring',
          category: 'Logistics & IoT',
          desc: 'Sistem monitoring kurir dan armada logistik berbasis peta real-time. Menghitung estimasi rute pengiriman tercepat (routing optimization) dan digital proof-of-delivery.',
          galleryTitles: [
            'Monitoring Armada & Tracking GPS Realtime',
          ],
        },
        {
          title: 'MedikaSync Clinic',
          subtitle: 'Electronic Health Records & Telemedicine',
          category: 'Healthcare SaaS',
          desc: 'Platform rekam medis elektronik (RME) klinik kesehatan terintegrasi. Dilengkapi reservasi dokter online, pencatatan diagnosa medis, resep digital, dan telekonsultasi.',
          galleryTitles: [
            'Sistem Antrean & E-Resep Klinik',
          ],
        },
        {
          title: 'KaryaArt Creative Hub',
          subtitle: 'Komunitas & Marketplace Aset Desain',
          category: 'Creative Platform',
          desc: 'Platform portofolio dan marketplace aset visual bagi kreator desain grafis dan ilustrator lokal. Dilengkapi lisensi digital dan sistem tipping kreator.',
          galleryTitles: [
            'Eksplorasi Karya & Showcase Ilustrator',
          ],
        },
        {
          title: 'AgroSmart Greenhouse',
          subtitle: 'Automated IoT Sensor & Crop Monitoring',
          category: 'IoT & Agriculture',
          desc: 'Dasbor pemantauan sensor kelembaban tanah, suhu lingkungan, dan irigasi otomatis berbasis mikrokontroler ESP32 dengan sistem peringatan dini via WhatsApp API.',
          galleryTitles: [
            'Grafik Sensor Suhu & Kelembaban IoT',
          ],
        },
        {
          title: 'EventHub Ticketing',
          subtitle: 'Event Management & Dynamic QR Check-in',
          category: 'Ticketing System',
          desc: 'Aplikasi penjualan tiket festival konser berskala besar. Mencegah pemalsuan tiket dengan enkripsi dynamic QR code dan queue management antrean transaksi ribuan user.',
          galleryTitles: [
            'Pemesanan Tiket & Dynamic QR Code Scanner',
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
        { num: '3+', label: 'Years of Experience' },
        { num: '12+', label: 'Completed Projects' },
        { num: '15+', label: 'Modern Stack' },
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
        { num: 3, label: 'Years of Experience' },
        { num: 12, label: 'Completed Projects' },
        { num: 15, label: 'Mastered Tech' },
      ],
      capLabel: 'Engineering Focus & Capabilities',
      capabilities: [
        {
          num: '01',
          title: 'Frontend Architecture & Reactive UI',
          desc: 'Structuring lightning-fast Single Page Applications (SPA) with React, Vite, and TypeScript powered by modular state management.',
        },
        {
          num: '02',
          title: 'Cross-Platform Mobile Engineering',
          desc: 'Building unified cross-platform mobile apps for Android & iOS from a single codebase using Ionic Framework and Capacitor plugins.',
        },
        {
          num: '03',
          title: 'Backend Systems & Database Design',
          desc: 'Designing structured RESTful APIs with Laravel / PHP and optimizing relational SQL queries for high-performance data processing.',
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
      title: 'Selected Works & Featured Projects.',
      projectsCount: '9 Featured Projects',
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
            'Cashier Dashboard — Revenue, Transactions & Weekly Trends',
            'Checkout Cart — Member Number Verification & Input',
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
            'EduConnect — School Academic Management & Dashboard',
          ],
        },
        {
          title: 'My Finance',
          subtitle: 'Personal Finance & Budgeting Dashboard',
          category: 'Financial Analytics',
          desc: 'Personal financial analytics dashboard for tracking and optimizing cash flows. Features interactive spending visualizations, budgeting categories, and automated savings forecasting.',
          galleryTitles: [
            'My Finance — Financial Analytics & Data Visualizations',
          ],
        },
        {
          title: 'FourtyFour Thrift Store',
          subtitle: 'Digital Marketplace & Inventory Management',
          category: 'E-Commerce Mobile',
          desc: 'Vintage apparel thrift mobile marketplace featuring automated product catalogs, online payment gateways, real-time inventory tracking, and exclusive flash sale notifications.',
          galleryTitles: [
            'Product Catalog & Exclusive Flash Sale',
            'Shopping Cart & Checkout',
          ],
        },
        {
          title: 'FleetTrack Logistics',
          subtitle: 'Real-time GPS Dispatch & Fleet Monitoring',
          category: 'Logistics & IoT',
          desc: 'Real-time GPS dispatch and logistics fleet monitoring platform. Calculates optimal route delivery times and captures digital proof-of-delivery.',
          galleryTitles: [
            'Fleet Monitoring & Realtime GPS Tracking',
          ],
        },
        {
          title: 'MedikaSync Clinic',
          subtitle: 'Electronic Health Records & Telemedicine',
          category: 'Healthcare SaaS',
          desc: 'Integrated Electronic Health Records (EHR) clinic management platform. Features online doctor appointment booking, medical diagnosis records, digital e-prescriptions, and telemedicine.',
          galleryTitles: [
            'Queue Management & Clinic E-Prescription',
          ],
        },
        {
          title: 'KaryaArt Creative Hub',
          subtitle: 'Design Asset Marketplace & Community',
          category: 'Creative Platform',
          desc: 'Portfolio and visual asset marketplace platform for local graphic designers and illustrators, complete with digital licensing and creator tipping.',
          galleryTitles: [
            'Creative Asset Showcase & Illustrator Portfolios',
          ],
        },
        {
          title: 'AgroSmart Greenhouse',
          subtitle: 'Automated IoT Sensor & Crop Monitoring',
          category: 'IoT & Agriculture',
          desc: 'Automated greenhouse monitoring dashboard tracking soil moisture and ambient temperature via ESP32 microcontrollers with WhatsApp alert notifications.',
          galleryTitles: [
            'IoT Sensor Graphs — Temperature & Soil Humidity',
          ],
        },
        {
          title: 'EventHub Ticketing',
          subtitle: 'Event Management & Dynamic QR Check-in',
          category: 'Ticketing System',
          desc: 'High-concurrency concert and festival ticketing application with encrypted dynamic QR codes to prevent counterfeiting and smart queue management.',
          galleryTitles: [
            'Ticket Booking & Dynamic QR Code Scanner',
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
