export const tips = [
  {
    id: 1,
    category: "Password",
    categoryColor: "#b8ff00",
    icon: "🔑",
    title: "Gunakan Password Unik untuk Setiap Akun",
    shortDesc: "Satu password bocor = semua akun aman",
    detail:
      "Menggunakan password yang sama di banyak akun adalah kesalahan fatal. Jika satu akun diretas, semua akun lain dengan password yang sama ikut terancam. Gunakan password manager seperti Bitwarden (gratis) untuk mengelola password unik di setiap akun.",
    level: "Pemula",
  },
  {
    id: 2,
    category: "Password",
    categoryColor: "#b8ff00",
    icon: "📏",
    title: "Minimal 12 Karakter untuk Password",
    shortDesc: "Panjang = kuat. Sesederhana itu.",
    detail:
      "Setiap karakter tambahan secara eksponensial meningkatkan waktu yang dibutuhkan untuk membobol password. Password 8 karakter bisa dipecahkan dalam hitungan menit; password 16 karakter butuh ribuan tahun dengan komputer modern.",
    level: "Pemula",
  },
  {
    id: 3,
    category: "Autentikasi",
    categoryColor: "#ffe600",
    icon: "🛡️",
    title: "Aktifkan Two-Factor Authentication (2FA)",
    shortDesc: "Lapisan keamanan kedua yang wajib",
    detail:
      "2FA memastikan bahwa meskipun password kamu bocor, penyerang tetap tidak bisa masuk tanpa akses ke perangkat kedua kamu. Prioritaskan untuk email, perbankan, dan media sosial. Gunakan authenticator app daripada SMS untuk keamanan lebih baik.",
    level: "Pemula",
  },
  {
    id: 4,
    category: "Email",
    categoryColor: "#ff3c3c",
    icon: "✉️",
    title: "Verifikasi Pengirim Sebelum Klik Link",
    shortDesc: "Hover dulu, klik kemudian",
    detail:
      "Sebelum mengklik link di email, hover mouse di atasnya untuk melihat URL tujuan sebenarnya. Pastikan domain sesuai dengan institusi resmi. Perhatikan typosquatting: 'paypa1.com' bukan 'paypal.com'. Jika ragu, kunjungi website langsung via browser.",
    level: "Pemula",
  },
  {
    id: 5,
    category: "Jaringan",
    categoryColor: "#00bfff",
    icon: "📡",
    title: "Gunakan VPN di Wi-Fi Publik",
    shortDesc: "Enkripsi traffic kamu dari mata-mata digital",
    detail:
      "Wi-Fi publik tidak terenkripsi dan bisa diintip oleh siapapun dalam jaringan yang sama. VPN mengenkripsi semua traffic internet kamu, menjadikan data tidak terbaca meski dicegat. ProtonVPN menawarkan tier gratis yang cukup andal.",
    level: "Menengah",
  },
  {
    id: 6,
    category: "Perangkat",
    categoryColor: "#9d00ff",
    icon: "💻",
    title: "Update Software Secara Rutin",
    shortDesc: "Update = menutup celah keamanan",
    detail:
      "Pembaruan software seringkali berisi patch keamanan untuk menutup celah yang bisa dieksploitasi. Aktifkan auto-update untuk sistem operasi dan aplikasi kritikal. Pengguna yang tidak update adalah target empuk ransomware dan exploit kit.",
    level: "Pemula",
  },
  {
    id: 7,
    category: "Media Sosial",
    categoryColor: "#ff6b35",
    icon: "📱",
    title: "Batasi Informasi Pribadi di Media Sosial",
    shortDesc: "Oversharing = memberi amunisi penyerang",
    detail:
      "Informasi seperti tanggal lahir, nama ibu kandung, sekolah, atau nomor telepon yang dibagikan di media sosial bisa digunakan untuk menjawab pertanyaan keamanan akun atau melakukan spear phishing. Periksa pengaturan privasi dan batasi siapa yang bisa melihat profil kamu.",
    level: "Pemula",
  },
  {
    id: 8,
    category: "Backup",
    categoryColor: "#b8ff00",
    icon: "💾",
    title: "Terapkan Aturan Backup 3-2-1",
    shortDesc: "3 salinan, 2 media, 1 lokasi offsite",
    detail:
      "Aturan 3-2-1: simpan 3 salinan data, di 2 media berbeda (HDD + cloud), dengan 1 salinan di lokasi terpisah. Backup rutin melindungi dari ransomware, kerusakan hardware, dan bencana. Google Drive, OneDrive, atau Backblaze B2 bisa digunakan sebagai solusi backup cloud.",
    level: "Menengah",
  },
  {
    id: 9,
    category: "Jaringan",
    categoryColor: "#00bfff",
    icon: "🏠",
    title: "Amankan Router Wi-Fi Rumah",
    shortDesc: "Router adalah pintu gerbang digital rumahmu",
    detail:
      "Ganti password default router segera setelah instalasi. Gunakan enkripsi WPA3 atau minimal WPA2. Nonaktifkan WPS yang rentan terhadap brute force. Update firmware router secara berkala. Buat jaringan tamu terpisah untuk perangkat IoT dan tamu.",
    level: "Menengah",
  },
  {
    id: 10,
    category: "Kesadaran",
    categoryColor: "#ffe600",
    icon: "🧠",
    title: "Waspadai Teknik Social Engineering",
    shortDesc: "Manusia adalah target terfavorit peretas",
    detail:
      "Social engineering memanfaatkan psikologi manusia: kepercayaan, rasa takut, dan keinginan membantu. Selalu verifikasi identitas orang yang meminta informasi sensitif, meskipun mengaku dari IT internal. Tidak ada alasan legitimate untuk meminta password kamu.",
    level: "Menengah",
  },
  {
    id: 11,
    category: "Browser",
    categoryColor: "#00bfff",
    icon: "🌐",
    title: "Periksa HTTPS Sebelum Input Data",
    shortDesc: "Gembok = terenkripsi. Tanpa gembok = bahaya",
    detail:
      "Pastikan selalu ada ikon gembok 🔒 dan 'https://' di address bar sebelum memasukkan data apapun - terutama password dan info pembayaran. HTTPS mengenkripsi komunikasi antara browser dan server. Jangan abaikan peringatan sertifikat SSL dari browser.",
    level: "Pemula",
  },
  {
    id: 12,
    category: "Perangkat",
    categoryColor: "#9d00ff",
    icon: "🔒",
    title: "Kunci Layar dengan PIN/Biometrik",
    shortDesc: "5 detik lock = melindungi seluruh data",
    detail:
      "Aktifkan kunci layar otomatis yang aktif setelah beberapa detik tidak digunakan. Gunakan PIN minimal 6 digit, pola kompleks, atau biometrik. Data di HP bisa berisi akses ke email, banking, dan akun lain - jangan biarkan terbuka untuk umum.",
    level: "Pemula",
  },
];

export const categories = ["Semua", "Password", "Autentikasi", "Email", "Jaringan", "Perangkat", "Media Sosial", "Backup", "Kesadaran", "Browser"];
