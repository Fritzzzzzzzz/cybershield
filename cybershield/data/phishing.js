export const phishingScenarios = [
  {
    id: 1,
    title: "Email dari Bank BCA",
    difficulty: "Mudah",
    from: {
      name: "BCA Internet Banking",
      email: "noreply@bca-secure-banking.net",
    },
    subject: "⚠️ PENTING: Akun Anda Akan Diblokir dalam 24 Jam!",
    body: `Yth. Nasabah BCA yang terhormat,

Sistem kami mendeteksi aktivitas mencurigakan pada akun Anda. Untuk keamanan Anda, akun internet banking Anda akan DIBLOKIR dalam 24 JAM jika Anda tidak melakukan verifikasi segera.

Klik tombol di bawah untuk verifikasi akun Anda:`,
    buttonText: "VERIFIKASI SEKARANG",
    buttonUrl: "http://bca-verifikasi-akun.xyz/login",
    footer: "BCA © 2025 | Jl. MH Thamrin No.1, Jakarta",
    clues: [
      {
        element: "email",
        text: "bca-secure-banking.net",
        explanation:
          "Domain email bukan @klikbca.com (domain resmi BCA). Domain 'bca-secure-banking.net' adalah domain palsu yang dibuat untuk meniru BCA.",
      },
      {
        element: "subject",
        text: '⚠️ "Akan Diblokir dalam 24 Jam"',
        explanation:
          "Menciptakan urgensi palsu adalah teknik phishing klasik. Bank resmi tidak mengancam pemblokiran tiba-tiba via email.",
      },
      {
        element: "button",
        text: "http://bca-verifikasi-akun.xyz",
        explanation:
          "URL tujuan tombol adalah domain mencurigakan (.xyz) yang sama sekali tidak terkait dengan BCA. Website resmi BCA adalah klikbca.com.",
      },
    ],
    verdict: "PHISHING",
  },
  {
    id: 2,
    title: "Notifikasi Google Security",
    difficulty: "Sedang",
    from: {
      name: "Google Security",
      email: "no-reply@accounts.google.com",
    },
    subject: "New sign-in to your Google Account",
    body: `Hi,

Your Google Account was just signed in to from a new device. If this was you, you can ignore this email.

If you didn't sign in, take these steps immediately to secure your account:

Device: Windows PC
Location: Jakarta, Indonesia
Time: Saturday, June 13, 2025, 10:32 PM WIB`,
    buttonText: "Review Activity",
    buttonUrl: "https://myaccount.google.com/security",
    footer: "Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043",
    clues: [
      {
        element: "email",
        text: "no-reply@accounts.google.com",
        explanation:
          "Domain email '@accounts.google.com' adalah domain resmi Google. Ini adalah tanda bahwa email ini ASLI.",
      },
      {
        element: "button",
        text: "https://myaccount.google.com/security",
        explanation:
          "URL tujuan adalah 'myaccount.google.com' — domain resmi Google. Link ini aman untuk diklik.",
      },
      {
        element: "content",
        text: "Tidak ada desakan atau ancaman",
        explanation:
          "Email ini hanya memberikan informasi dan opsi, tanpa memaksa atau mengancam. Ini adalah perilaku normal email keamanan resmi.",
      },
    ],
    verdict: "AMAN",
  },
  {
    id: 3,
    title: "Hadiah WhatsApp",
    difficulty: "Mudah",
    from: {
      name: "WhatsApp Team",
      email: "winner@whatsapp-prize2025.com",
    },
    subject: "🎉 Selamat! Anda Memenangkan iPhone 15 Pro dari WhatsApp!",
    body: `Kepada Pengguna WhatsApp yang Beruntung,

SELAMAT! Nomor WhatsApp Anda telah TERPILIH sebagai pemenang undian ulang tahun WhatsApp ke-15!

HADIAH ANDA:
🏆 iPhone 15 Pro Max (senilai Rp 22.000.000)
💰 Uang Tunai Rp 5.000.000

Untuk mengklaim hadiah, Anda harus:
1. Klik link di bawah ini
2. Isi formulir data diri
3. Bayar biaya administrasi Rp 50.000

KLAIM SEBELUM 23:59 MALAM INI!`,
    buttonText: "KLAIM HADIAH SAYA",
    buttonUrl: "http://whatsapp-prize2025.com/claim?id=WIN88234",
    footer: "WhatsApp Inc. | Hadiah akan hangus jika tidak diklaim hari ini.",
    clues: [
      {
        element: "email",
        text: "whatsapp-prize2025.com",
        explanation:
          "Domain email bukan @whatsapp.com. WhatsApp tidak pernah menghubungi pengguna dari domain pihak ketiga.",
      },
      {
        element: "content",
        text: "Biaya administrasi Rp 50.000",
        explanation:
          'Ini adalah tanda phishing paling jelas: meminta pembayaran untuk "hadiah". Tidak ada hadiah resmi yang meminta biaya klaim.',
      },
      {
        element: "subject",
        text: "WhatsApp tidak pernah mengadakan undian",
        explanation:
          "WhatsApp tidak pernah mengadakan undian berhadiah. Janji hadiah tiba-tiba selalu merupakan penipuan.",
      },
      {
        element: "button",
        text: "Urgensi: klaim sebelum malam ini",
        explanation:
          "Tekanan waktu ekstrem adalah teknik klasik scam untuk mencegah korban berpikir jernih sebelum mengambil keputusan.",
      },
    ],
    verdict: "PHISHING",
  },
  {
    id: 4,
    title: "Invoice dari Tokopedia",
    difficulty: "Sulit",
    from: {
      name: "Tokopedia",
      email: "noreply@mail.tokopedia.com",
    },
    subject: "Pesanan #TKP-2025061388234 telah dikonfirmasi",
    body: `Halo,

Terima kasih telah berbelanja di Tokopedia! Berikut detail pesanan Anda:

Pesanan: #TKP-2025061388234
Produk: Laptop ASUS VivoBook 15 (1 pcs)
Total: Rp 8.500.000
Metode Pembayaran: Transfer Bank
Status: Menunggu Pembayaran

Selesaikan pembayaran dalam 24 jam agar pesanan tidak dibatalkan otomatis.`,
    buttonText: "Bayar Sekarang",
    buttonUrl: "https://www.tokopedia.com/payment/TKP-2025061388234",
    footer: "© 2025 Tokopedia. PT Tokopedia, Ciputra World 2, Jakarta",
    clues: [
      {
        element: "email",
        text: "noreply@mail.tokopedia.com",
        explanation:
          "'mail.tokopedia.com' adalah subdomain resmi Tokopedia untuk pengiriman email. Domain ini valid dan dipercaya.",
      },
      {
        element: "button",
        text: "https://www.tokopedia.com/payment/...",
        explanation:
          "URL mengarah ke 'www.tokopedia.com' — domain resmi Tokopedia. Tidak ada redirect ke domain mencurigakan.",
      },
      {
        element: "content",
        text: "Tidak ada permintaan data pribadi atau password",
        explanation:
          "Email ini hanya berisi informasi pesanan dan link pembayaran ke domain resmi. Tidak ada permintaan data sensitif.",
      },
    ],
    verdict: "AMAN",
  },
];
