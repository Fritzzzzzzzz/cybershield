export const articles = [
  {
    slug: "apa-itu-phishing",
    category: "Ancaman Digital",
    categoryColor: "#ff3c3c",
    readTime: "5 menit",
    date: "10 Juni 2026",
    title: "Apa Itu Phishing? Kenali Sebelum Jadi Korban",
    excerpt:
      "Phishing adalah salah satu serangan siber paling umum yang menipu korban agar menyerahkan data pribadi mereka secara sukarela.",
    content: `
## Apa Itu Phishing?

Phishing adalah teknik penipuan siber di mana penyerang menyamar sebagai entitas terpercaya - seperti bank, platform e-commerce, atau bahkan teman - untuk mencuri informasi sensitif seperti kata sandi, nomor kartu kredit, atau data pribadi lainnya.

Istilah "phishing" berasal dari kata "fishing" (memancing), menggambarkan bagaimana penyerang "memancing" korban dengan umpan yang terlihat meyakinkan.

## Jenis-Jenis Phishing

### 1. Email Phishing
Jenis yang paling umum. Penyerang mengirim email massal yang terlihat berasal dari institusi resmi, berisi link palsu yang mengarah ke website tiruan.

### 2. Spear Phishing
Serangan yang lebih tertarget. Penyerang melakukan riset terlebih dahulu tentang korban untuk membuat pesan yang lebih personal dan meyakinkan.

### 3. Smishing (SMS Phishing)
Phishing melalui pesan SMS. Biasanya berisi pesan "Anda memenangkan hadiah" atau "Akun Anda diblokir, klik link ini".

### 4. Vishing (Voice Phishing)
Phishing melalui panggilan telepon. Penipu berpura-pura sebagai petugas bank atau instansi pemerintah.

### 5. Whale Phishing
Serangan yang menargetkan eksekutif perusahaan atau individu berprofil tinggi.

## Tanda-Tanda Email Phishing

- ❌ Pengirim mencurigakan - alamat email tidak sesuai domain resmi
- ❌ Urgensi berlebihan - "Akun Anda akan dihapus dalam 24 jam!"
- ❌ Link mencurigakan - URL tidak sesuai dengan website resmi
- ❌ Kesalahan tata bahasa - banyak typo dan kalimat tidak natural
- ❌ Meminta data sensitif - institusi resmi tidak pernah minta password via email

## Cara Melindungi Diri

1. Verifikasi identitas pengirim sebelum klik link apapun
2. Hover mouse di atas link untuk melihat URL tujuan sebenarnya
3. Aktifkan 2FA di semua akun penting
4. Gunakan email filter yang memadai
5. Laporkan email mencurigakan ke tim IT atau penyedia email

## Apa Yang Harus Dilakukan Jika Sudah Terkena Phishing?

1. Segera ganti password akun yang terdampak
2. Hubungi bank jika data finansial bocor
3. Aktifkan pemantauan kredit
4. Laporkan ke BSSN (Badan Siber dan Sandi Negara)
    `.trim(),
  },
  {
    slug: "keamanan-password",
    category: "Password",
    categoryColor: "#b8ff00",
    readTime: "4 menit",
    date: "8 Juni 2026",
    title: "Panduan Lengkap Membuat Password yang Kuat dan Aman",
    excerpt:
      "Password '123456' masih menjadi password paling banyak digunakan di dunia. Pelajari cara membuat password yang benar-benar aman.",
    content: `
## Mengapa Password Kuat Itu Penting?

Setiap tahun, jutaan akun diretas karena penggunaan password yang lemah. Menurut laporan Verizon Data Breach, 81% pelanggaran data disebabkan oleh password yang lemah atau dicuri.

## Anatomi Password yang Kuat

Password yang kuat memenuhi kriteria berikut:
- ✅ Minimal 12 karakter (semakin panjang semakin baik)
- ✅ Kombinasi huruf besar + huruf kecil
- ✅ Mengandung angka dan simbol (!@#$%^&)
- ✅ Tidak mengandung informasi pribadi (nama, tanggal lahir)
- ✅ Unik untuk setiap akun

## Teknik Membuat Password yang Mudah Diingat tapi Sulit Ditebak

### Metode Passphrase
Gabungkan beberapa kata acak menjadi satu frasa:
- Contoh: \`Kucing-Merah-Terbang-2024!\`
- Mudah diingat, tapi sangat sulit di-brute force

### Metode Substitusi
Ganti huruf dengan simbol yang mirip:
- Contoh: \`P@$$w0rd_Ku4t!\`
- 'a' → '@', 'o' → '0', 's' → '$'

### Metode Akronim
Ambil huruf pertama dari sebuah kalimat:
- Kalimat: "Aku lahir di Surabaya tahun 2000 dan suka makan bakso!"
- Password: \`AldSt2000dsmb!\`

## Apa Yang JANGAN Dilakukan

- ❌ Jangan gunakan password yang sama di banyak akun
- ❌ Jangan simpan password di sticky note atau file teks biasa
- ❌ Jangan bagikan password ke siapapun, termasuk "petugas IT"
- ❌ Jangan gunakan kata-kata dari kamus

## Gunakan Password Manager

Password manager adalah aplikasi yang menyimpan dan menghasilkan password kuat secara otomatis. Rekomendasi terpercaya:
- Bitwarden (open source, gratis)
- 1Password (berbayar, fitur lengkap)
- KeePass (offline, open source)

## Kapan Harus Ganti Password?

- Segera setelah terjadi kebocoran data
- Jika ada aktivitas mencurigakan di akun
- Saat menggunakan komputer orang lain
- Minimal setiap 6-12 bulan untuk akun penting
    `.trim(),
  },
  {
    slug: "dua-faktor-autentikasi",
    category: "Autentikasi",
    categoryColor: "#ffe600",
    readTime: "3 menit",
    date: "5 Juni 2026",
    title: "Two-Factor Authentication (2FA): Lapisan Keamanan Ekstra yang Wajib",
    excerpt:
      "Bahkan password terkuat pun bisa bocor. 2FA adalah perlindungan berlapis yang membuat akun kamu jauh lebih aman.",
    content: `
## Apa Itu 2FA?

Two-Factor Authentication (2FA) atau Autentikasi Dua Faktor adalah metode keamanan yang mengharuskan pengguna membuktikan identitas mereka dengan dua cara berbeda sebelum bisa masuk ke akun.

Bayangkan seperti brankas yang membutuhkan dua kunci berbeda untuk dibuka.

## Tiga Faktor Autentikasi

1. Something you know - Password, PIN, pertanyaan keamanan
2. Something you have - HP, token fisik, kartu pintar
3. Something you are - Sidik jari, wajah, retina mata

2FA menggabungkan minimal dua dari faktor di atas.

## Jenis-Jenis 2FA

### SMS OTP
Kode dikirim via SMS. Mudah digunakan tapi paling rentan (bisa dicegat via SIM swapping).

### Authenticator App ⭐ (Direkomendasikan)
Aplikasi seperti Google Authenticator atau Authy menghasilkan kode 6 digit yang berubah setiap 30 detik. Jauh lebih aman dari SMS.

### Email OTP
Kode dikirim ke email. Lebih aman dari SMS tapi tergantung keamanan email itu sendiri.

### Hardware Key
Perangkat fisik seperti YubiKey. Paling aman, tapi paling mahal dan kurang praktis.

### Biometrik
Sidik jari atau pengenalan wajah. Sangat nyaman dan cukup aman.

## Cara Aktifkan 2FA

### Di Gmail
1. Buka myaccount.google.com
2. Pilih Security → 2-Step Verification
3. Ikuti petunjuk setup

### Di Instagram
1. Buka Settings → Security
2. Pilih Two-Factor Authentication
3. Pilih metode (App atau SMS)

### Di WhatsApp
1. Settings → Account
2. Two-step verification → Enable
3. Masukkan PIN 6 digit

## Kenapa 2FA Sangat Penting?

Menurut Microsoft, 2FA memblokir 99.9% serangan akun otomatis. Bahkan jika password kamu bocor, tanpa akses ke faktor kedua, peretas tidak bisa masuk.

## Tips Penting

- Simpan backup codes di tempat aman (di luar perangkat utama)
- Jangan pernah bagikan kode OTP ke siapapun, bahkan yang mengaku petugas resmi
- Gunakan authenticator app daripada SMS jika memungkinkan
    `.trim(),
  },
  {
    slug: "keamanan-wifi-publik",
    category: "Jaringan",
    categoryColor: "#00bfff",
    readTime: "4 menit",
    date: "3 Juni 2026",
    title: "Bahaya Wi-Fi Publik dan Cara Aman Menggunakannya",
    excerpt:
      "Wi-Fi gratis di kafe atau mall terasa menggiurkan, tapi tahukah kamu bahwa data kamu bisa dicuri hanya dengan terhubung ke jaringan yang salah?",
    content: `
## Mengapa Wi-Fi Publik Berbahaya?

Wi-Fi publik - baik di kafe, bandara, mall, atau tempat umum lainnya - seringkali tidak terenkripsi atau diamankan dengan baik. Ini membuka peluang bagi penyerang untuk:

### Man-in-the-Middle (MitM) Attack
Penyerang memposisikan diri di antara kamu dan router Wi-Fi, memungkinkan mereka untuk membaca semua data yang kamu kirim dan terima - termasuk login credential dan data pribadi.

### Evil Twin Attack
Penyerang membuat hotspot Wi-Fi palsu dengan nama yang mirip jaringan resmi. Misalnya: "Starbucks_WiFi" vs "Starbucks-WiFi". Begitu terhubung, semua traffic kamu melewati perangkat penyerang.

### Packet Sniffing
Menggunakan software khusus untuk "menangkap" paket data yang melewati jaringan yang tidak terenkripsi.

## Yang Tidak Boleh Dilakukan di Wi-Fi Publik

- ❌ Login ke internet banking
- ❌ Berbelanja online dan memasukkan data kartu kredit
- ❌ Mengakses email penting
- ❌ Login ke akun media sosial
- ❌ Mengirim dokumen sensitif

## Cara Aman Menggunakan Wi-Fi Publik

### 1. Gunakan VPN (Virtual Private Network)
VPN mengenkripsi semua traffic internet kamu, membuatnya tidak terbaca meski dicegat. Rekomendasi:
- ProtonVPN (gratis, terpercaya)
- Mullvad (berbayar, privasi tinggi)

### 2. Verifikasi Jaringan Sebelum Connect
Tanya nama jaringan yang benar kepada staf tempat tersebut. Jangan asal connect ke Wi-Fi yang tersedia.

### 3. Pastikan Website Menggunakan HTTPS
Selalu cek ada ikon gembok 🔒 di address bar. HTTPS mengenkripsi komunikasi antara browser dan server.

### 4. Matikan Auto-Connect
Nonaktifkan fitur "Connect Automatically" untuk jaringan Wi-Fi yang tidak kamu percaya.

### 5. Gunakan Data Seluler untuk Transaksi Penting
Untuk banking atau transaksi sensitif, lebih aman menggunakan koneksi data seluler (4G/5G).

### 6. Aktifkan Firewall
Pastikan firewall perangkat kamu aktif saat menggunakan Wi-Fi publik.

## Tanda-Tanda Wi-Fi Berbahaya

- 🚩 Tidak memerlukan password sama sekali
- 🚩 Nama jaringan terlihat mencurigakan atau mirip jaringan resmi
- 🚩 Koneksi sangat lambat (bisa jadi traffic sedang di-intercept)
- 🚩 Sertifikat SSL tidak valid (browser menampilkan peringatan)
    `.trim(),
  },
  {
    slug: "ransomware-ancaman",
    category: "Malware",
    categoryColor: "#ff3c3c",
    readTime: "6 menit",
    date: "1 Juni 2026",
    title: "Ransomware: Ketika Data Kamu Disandera",
    excerpt:
      "Ransomware telah menyebabkan kerugian miliaran dolar setiap tahunnya. Pelajari cara kerjanya dan bagaimana mencegahnya.",
    content: `
## Apa Itu Ransomware?

Ransomware adalah jenis malware yang mengenkripsi file-file di komputer korban, membuat data tidak bisa diakses, lalu menuntut tebusan (ransom) untuk mendapatkan kunci dekripsi.

Nama "ransomware" berasal dari kata "ransom" (tebusan) + "software".

## Bagaimana Ransomware Menyebar?

### Email Phishing (Vektor Utama)
Attachment email berbahaya (dokumen Word, PDF, ZIP) yang ketika dibuka, menginstal ransomware.

### Website Berbahaya
Mengunjungi website yang terinfeksi bisa memicu download dan eksekusi ransomware secara otomatis (drive-by download).

### Software Bajakan
Software crack atau keygen sering menjadi pembungkus ransomware.

### Remote Desktop Protocol (RDP)
Penyerang mengeksploitasi RDP yang tidak aman untuk menginstal ransomware secara langsung.

### USB Drive Terinfeksi
Mencolokkan USB yang terinfeksi bisa langsung menyebarkan ransomware.

## Ransomware Terkenal dalam Sejarah

| Nama | Tahun | Dampak |
|------|-------|--------|
| WannaCry | 2017 | 200.000+ komputer di 150 negara |
| NotPetya | 2017 | Kerugian $10 miliar |
| Colonial Pipeline | 2021 | Krisis bahan bakar AS |
| Conti | 2020-2022 | Ratusan juta dolar tebusan |

## Tahapan Serangan Ransomware

1. Infiltrasi - Masuk ke sistem melalui phishing, eksploitasi, dll.
2. Persistence - Menanam diri agar tetap ada meski restart
3. Lateral Movement - Menyebar ke komputer lain dalam jaringan
4. Exfiltration - Mencuri data untuk leverage tambahan
5. Enkripsi - Mengenkripsi semua file yang bisa ditemukan
6. Ransom Note - Menampilkan pesan tuntutan tebusan

## Cara Mencegah Ransomware

1. Backup data secara rutin (ikuti aturan 3-2-1: 3 salinan, 2 media berbeda, 1 offsite)
2. Update sistem operasi dan software secara rutin
3. Jangan klik link atau attachment mencurigakan
4. Gunakan antivirus yang up-to-date
5. Batasi hak akses (prinsip least privilege)
6. Nonaktifkan makro di dokumen Office jika tidak diperlukan

## Apa Yang Harus Dilakukan Jika Terkena Ransomware?

1. Segera isolasi perangkat dari jaringan (cabut kabel LAN, matikan Wi-Fi)
2. Jangan bayar tebusan - tidak ada jaminan data akan dikembalikan
3. Laporkan ke pihak berwajib (BSSN, Polri)
4. Hubungi profesional keamanan siber
5. Coba tools dekripsi gratis di nomoreransom.org
6. Restore dari backup jika tersedia
    `.trim(),
  },
  {
    slug: "social-engineering",
    category: "Ancaman Digital",
    categoryColor: "#ff3c3c",
    readTime: "5 menit",
    date: "28 Mei 2026",
    title: "Social Engineering: Ketika Manusia Jadi Titik Lemah Keamanan",
    excerpt:
      "Teknologi keamanan paling canggih pun bisa ditembus jika manusia di baliknya bisa dimanipulasi. Kenali teknik social engineering.",
    content: `
## Apa Itu Social Engineering?

Social engineering adalah teknik manipulasi psikologis yang digunakan penyerang untuk menipu orang agar memberikan informasi rahasia atau melakukan tindakan yang menguntungkan penyerang.

Berbeda dengan serangan teknis yang menyerang sistem, social engineering menyerang psikologi manusia - mengeksploitasi kepercayaan, rasa takut, keserakahan, atau keinginan untuk membantu.

## Teknik-Teknik Social Engineering

### 1. Pretexting
Penyerang menciptakan skenario palsu (pretext) untuk mendapatkan informasi. Contoh: berpura-pura sebagai auditor IT yang membutuhkan akses sistem.

### 2. Baiting
Menggunakan "umpan" fisik atau digital. Contoh: meninggalkan USB drive di parkiran kantor dengan label "Gaji Karyawan 2026" - siapa yang penasaran dan mencolokkannya akan terinfeksi malware.

### 3. Quid Pro Quo
Menawarkan sesuatu sebagai imbalan informasi. Contoh: menelepon dan menawarkan bantuan teknis gratis, lalu meminta akses ke komputer.

### 4. Tailgating / Piggybacking
Mengikuti karyawan masuk ke area terlarang tanpa otorisasi, memanfaatkan kebaikan orang yang menahan pintu.

### 5. Impersonation
Menyamar sebagai orang lain - teknisi, petugas keamanan, atau eksekutif perusahaan.

### 6. Scareware
Membuat korban panik dengan peringatan palsu. Contoh: popup "Komputer Anda terinfeksi virus! Hubungi nomor ini segera!"

## Prinsip Psikologis yang Dieksploitasi

- Otoritas - Orang cenderung patuh pada figur otoritas
- Urgensi - Tekanan waktu mengurangi kemampuan berpikir kritis
- Kepercayaan - Memanfaatkan hubungan yang sudah ada
- Timbal Balik - Kewajiban membalas kebaikan
- Kelangkaan - Takut kehilangan kesempatan

## Cara Melindungi Diri

1. Verifikasi identitas siapapun yang meminta akses atau informasi
2. Waspada terhadap permintaan mendadak yang terasa mendesak
3. Ikuti prosedur keamanan meskipun terasa merepotkan
4. Edukasi dan pelatihan kesadaran keamanan secara rutin
5. Jangan bagikan informasi sensitif via telepon atau email tanpa verifikasi
6. Trust your gut - jika sesuatu terasa mencurigakan, hentikan dan verifikasi

## Contoh Kasus Nyata

The Twitter Hack (2020): Penyerang menggunakan social engineering melalui telepon untuk menipu karyawan Twitter memberikan akses ke tools internal. Hasilnya: akun Barack Obama, Elon Musk, Apple, dan Bill Gates digunakan untuk scam Bitcoin senilai $120.000.
    `.trim(),
  },
];
