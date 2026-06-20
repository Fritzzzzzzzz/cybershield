export const quizQuestions = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan phishing?",
    options: [
      "Teknik memancing ikan secara digital",
      "Serangan yang menipu korban untuk memberikan informasi sensitif dengan menyamar sebagai entitas terpercaya",
      "Jenis virus komputer yang menyebar melalui jaringan",
      "Metode enkripsi data yang aman",
    ],
    correct: 1,
    explanation:
      "Phishing adalah serangan siber di mana penyerang menyamar sebagai entitas terpercaya (bank, platform populer, dll) untuk mencuri informasi sensitif seperti password, nomor kartu kredit, dan data pribadi lainnya.",
  },
  {
    id: 2,
    question: "Password manakah yang paling kuat?",
    options: [
      "password123",
      "TanggalLahirku1990",
      "Kucingku@Lucu#2024!",
      "qwerty",
    ],
    correct: 2,
    explanation:
      "'Kucingku@Lucu#2024!' paling kuat karena menggunakan kombinasi huruf besar-kecil, angka, simbol, dan cukup panjang. Hindari menggunakan kata umum, informasi pribadi, atau pola keyboard yang mudah ditebak.",
  },
  {
    id: 3,
    question: "Apa itu Two-Factor Authentication (2FA)?",
    options: [
      "Menggunakan dua password berbeda untuk satu akun",
      "Metode login yang memerlukan dua bentuk verifikasi identitas yang berbeda",
      "Fitur backup akun jika password dilupakan",
      "Enkripsi data dengan dua lapisan",
    ],
    correct: 1,
    explanation:
      "2FA adalah metode keamanan yang mengharuskan pengguna membuktikan identitas mereka dengan dua cara berbeda - biasanya sesuatu yang mereka tahu (password) dan sesuatu yang mereka miliki (kode dari HP). Ini melindungi akun meskipun password bocor.",
  },
  {
    id: 4,
    question: "Apa yang sebaiknya TIDAK dilakukan saat menggunakan Wi-Fi publik?",
    options: [
      "Menggunakan VPN",
      "Mengakses internet banking atau memasukkan data kartu kredit",
      "Membaca berita online",
      "Menonton video streaming",
    ],
    correct: 1,
    explanation:
      "Wi-Fi publik seringkali tidak terenkripsi dan rentan terhadap serangan Man-in-the-Middle. Hindari melakukan transaksi finansial atau login ke akun penting di jaringan publik tanpa VPN.",
  },
  {
    id: 5,
    question: "Apa yang dimaksud dengan ransomware?",
    options: [
      "Software yang memata-matai aktivitas pengguna",
      "Malware yang mengenkripsi data korban dan menuntut tebusan",
      "Iklan yang tidak bisa ditutup di browser",
      "Program yang memperlambat komputer",
    ],
    correct: 1,
    explanation:
      "Ransomware adalah malware yang mengenkripsi file korban sehingga tidak bisa diakses, lalu menuntut pembayaran tebusan (ransom) untuk kunci dekripsinya. Pencegahan terbaik adalah backup data rutin dan tidak mengklik attachment mencurigakan.",
  },
  {
    id: 6,
    question: "Mana tanda-tanda email phishing yang paling umum?",
    options: [
      "Email dikirim di pagi hari",
      "Email berisi lampiran PDF",
      "Pengirim email menggunakan domain mencurigakan dan membuat urgensi palsu",
      "Email ditulis dalam bahasa formal",
    ],
    correct: 2,
    explanation:
      "Tanda phishing yang paling umum meliputi: domain email mencurigakan, menciptakan urgensi palsu ('akun akan diblokir!'), meminta informasi sensitif, link yang mengarah ke URL mencurigakan, dan banyak kesalahan tata bahasa.",
  },
  {
    id: 7,
    question: "Apa aturan backup data '3-2-1'?",
    options: [
      "Backup 3 kali sehari, 2 kali seminggu, 1 kali sebulan",
      "3 salinan data, di 2 media berbeda, dengan 1 salinan di lokasi terpisah",
      "3 password berbeda, 2 akun email, 1 nomor HP cadangan",
      "Backup setiap 3 jam, simpan 2 minggu, hapus setelah 1 bulan",
    ],
    correct: 1,
    explanation:
      "Aturan 3-2-1 adalah standar industri untuk backup data: buat 3 salinan data, simpan di 2 jenis media yang berbeda (contoh: HDD internal + cloud), dan pastikan 1 salinan berada di lokasi yang berbeda (offsite backup).",
  },
  {
    id: 8,
    question: "Apa yang dimaksud dengan social engineering dalam konteks keamanan siber?",
    options: [
      "Membangun jaringan sosial yang aman di internet",
      "Teknik manipulasi psikologis untuk menipu orang memberikan informasi rahasia",
      "Algoritma media sosial yang mengumpulkan data pengguna",
      "Platform untuk berbagi informasi keamanan antar profesional",
    ],
    correct: 1,
    explanation:
      "Social engineering adalah teknik manipulasi psikologis yang mengeksploitasi sifat manusia seperti kepercayaan, rasa takut, dan keinginan membantu - bukan kelemahan teknis sistem. Ini adalah salah satu vektor serangan paling efektif karena sulit dideteksi oleh teknologi.",
  },
  {
    id: 9,
    question: "Mana yang merupakan metode 2FA paling aman?",
    options: [
      "OTP via SMS",
      "OTP via Email",
      "Authenticator App (Google Authenticator, Authy)",
      "Pertanyaan keamanan",
    ],
    correct: 2,
    explanation:
      "Authenticator app lebih aman daripada SMS karena tidak rentan terhadap SIM swapping - teknik di mana penyerang mengalihkan nomor HP kamu ke SIM mereka untuk mencuri kode OTP. Kode dari authenticator app hanya bisa diakses dari perangkat fisik kamu.",
  },
  {
    id: 10,
    question: "Apa kepanjangan HTTPS dan mengapa penting?",
    options: [
      "HyperText Transfer Protocol Secure - mengenkripsi data antara browser dan server",
      "High-Tech Transfer Protocol System - protokol internet generasi terbaru",
      "HyperText Tracking Protocol Security - melindungi dari iklan berbahaya",
      "Home Transfer Protocol Standard - protokol untuk transfer file",
    ],
    correct: 0,
    explanation:
      "HTTPS (HyperText Transfer Protocol Secure) mengenkripsi komunikasi antara browser kamu dan server website. Ini berarti data yang kamu kirim (termasuk password dan info kartu kredit) tidak bisa dibaca oleh pihak yang mencegat koneksi. Selalu cari ikon gembok 🔒 sebelum memasukkan data sensitif.",
  },
  {
    id: 11,
    question: "Apa itu VPN dan fungsinya?",
    options: [
      "Virtual Phone Network - jaringan telepon terenkripsi",
      "Very Private Network - jaringan khusus untuk pemerintah",
      "Virtual Private Network - mengenkripsi traffic internet dan menyembunyikan IP address",
      "Verified Public Network - Wi-Fi publik yang terverifikasi aman",
    ],
    correct: 2,
    explanation:
      "VPN (Virtual Private Network) membuat 'terowongan' terenkripsi untuk traffic internet kamu, menyembunyikan alamat IP asli dan melindungi data dari pengintaian - terutama berguna di Wi-Fi publik. VPN juga bisa digunakan untuk mengakses konten yang dibatasi secara geografis.",
  },
  {
    id: 12,
    question: "Jika kamu menerima email yang mengklaim akun kamu diretas dan meminta password lama, apa yang harus dilakukan?",
    options: [
      "Segera balas email dengan password lama untuk verifikasi",
      "Klik link di email untuk mengamankan akun",
      "Abaikan atau hapus email tersebut dan langsung ganti password via website resmi",
      "Forward email ke teman untuk meminta pendapat",
    ],
    correct: 2,
    explanation:
      "Tidak ada layanan resmi yang pernah meminta password kamu via email. Jika khawatir akun diretas, langsung kunjungi website resmi layanan tersebut (ketik manual di browser, jangan klik link dari email) dan ganti password dari sana.",
  },
  {
    id: 13,
    question: "Apa yang dimaksud dengan 'malware'?",
    options: [
      "Software yang dibuat dengan desain yang buruk",
      "Software jahat yang dirancang untuk merusak atau mengakses sistem tanpa izin",
      "Email marketing yang tidak diinginkan",
      "Website dengan konten berbahaya",
    ],
    correct: 1,
    explanation:
      "Malware (malicious software) adalah istilah umum untuk software berbahaya yang mencakup virus, worm, trojan, ransomware, spyware, adware, dan lainnya. Malware dirancang untuk merusak, mencuri data, atau mendapatkan akses tidak sah ke sistem komputer.",
  },
  {
    id: 14,
    question: "Berapa panjang minimum password yang direkomendasikan untuk keamanan optimal?",
    options: [
      "6 karakter",
      "8 karakter",
      "10 karakter",
      "12 karakter atau lebih",
    ],
    correct: 3,
    explanation:
      "Para ahli keamanan merekomendasikan minimal 12 karakter untuk password. Dengan hardware modern, password 8 karakter bisa dipecahkan dalam hitungan jam menggunakan brute force. Password 12+ karakter dengan kombinasi huruf, angka, dan simbol bisa butuh ribuan tahun untuk dipecahkan.",
  },
  {
    id: 15,
    question: "Apa yang sebaiknya dilakukan segera setelah mengetahui data dari sebuah layanan online bocor?",
    options: [
      "Menunggu notifikasi resmi dari layanan tersebut",
      "Menghapus akun di layanan tersebut",
      "Segera ganti password di layanan tersebut dan di layanan lain yang menggunakan password yang sama",
      "Tidak perlu melakukan apapun jika tidak merasa dirugikan",
    ],
    correct: 2,
    explanation:
      "Jika terjadi kebocoran data, segera ganti password di layanan yang bocor DAN di semua layanan lain yang menggunakan password yang sama (credential stuffing attack). Aktifkan 2FA, pantau aktivitas akun, dan pertimbangkan memantau kebocoran data melalui haveibeenpwned.com.",
  },
];
