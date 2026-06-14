<div align="center">

# 🛡️ CyberShield

### Platform Edukasi Keamanan Siber untuk Masyarakat Indonesia

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[🌐 Live Demo](https://cybershield-rizqi.vercel.app)** · **[📖 Dokumentasi](#-dokumentasi)** · **[🐛 Laporkan Bug](https://github.com/Fritzzzzzzzz/cybershield/issues)**

---

![CyberShield Banner](https://img.shields.io/badge/CyberShield-Lindungi%20Dirimu%20di%20Dunia%20Digital-ffe600?style=for-the-badge&labelColor=0a0a0a)

</div>

---

## 📋 Deskripsi

**CyberShield** adalah website edukasi keamanan siber yang dibangun sebagai tugas UAS mata kuliah **Data and Information Security 2026**. Website ini bertujuan meningkatkan kesadaran masyarakat terhadap ancaman digital melalui konten interaktif dan edukatif.

> 🎯 **Tema**: Keamanan dan Perlindungan Data Digital  
> 🏫 **Mata Kuliah**: Data and Information Security  
> 👨‍💻 **Mahasiswa**: Muhammad Rizqi Firdaus · `2402310196`

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 📰 **Artikel Keamanan** | 6 artikel mendalam tentang phishing, ransomware, password, 2FA, Wi-Fi publik, dan social engineering |
| 💡 **Tips Keamanan Digital** | 12 tips praktis dengan filter kategori dan progress tracker |
| 🎣 **Simulasi Phishing** | 4 skenario email phishing interaktif — identifikasi mana yang asli dan mana yang palsu |
| 🧠 **Kuis Keamanan** | 15 soal multiple choice dengan penjelasan jawaban dan rating level |

---

## 🎨 Tech Stack & Design

```
Frontend   : Next.js 14 (App Router)
Styling    : Vanilla CSS + CSS Modules
Design     : Light Neubrutalism
Font       : Space Grotesk + Space Mono (Google Fonts)
Deployment : Vercel
```

### Design System — Light Neubrutalism
- 🟡 **Background**: Cream `#f5f0e8`
- ⬛ **Border**: 4px solid hitam + hard offset shadow (tanpa blur)
- 💛 **Aksen**: Kuning `#ffe600` · Lime `#b8ff00` · Merah `#ff3c3c`

---

## 📁 Struktur Project

```
cybershield/
├── app/
│   ├── layout.js              # Root layout (Navbar + Footer)
│   ├── page.js                # Halaman Beranda
│   ├── globals.css            # Design system tokens & utilities
│   ├── artikel/
│   │   ├── page.js            # Daftar semua artikel
│   │   └── [slug]/page.js     # Halaman detail artikel
│   ├── tips/
│   │   └── page.js            # Tips keamanan digital
│   ├── simulasi/
│   │   └── page.js            # Simulasi phishing interaktif
│   ├── kuis/
│   │   └── page.js            # Kuis keamanan informasi
│   └── not-found.js           # Halaman 404 custom
├── components/
│   ├── Navbar.js              # Navigasi sticky dengan active state
│   └── Footer.js              # Footer dengan link & info
└── data/
    ├── articles.js            # Data 6 artikel lengkap
    ├── tips.js                # Data 12 tips keamanan
    ├── phishing.js            # Data 4 skenario simulasi
    └── quiz.js                # Data 15 soal kuis
```

---

## 🚀 Menjalankan Secara Lokal

### Prerequisites
- Node.js `18+`
- npm / yarn

### Langkah-langkah

```bash
# 1. Clone repository
git clone https://github.com/Fritzzzzzzzz/cybershield.git

# 2. Masuk ke folder project
cd cybershield

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm start
```

---

## 📖 Dokumentasi

### Halaman & Route

| Route | Halaman | Keterangan |
|-------|---------|------------|
| `/` | Beranda | Hero, statistik ancaman, fitur, artikel terbaru |
| `/artikel` | Daftar Artikel | 6 artikel keamanan siber |
| `/artikel/[slug]` | Detail Artikel | Konten penuh + sidebar artikel terkait |
| `/tips` | Tips Keamanan | 12 tips dengan filter & progress tracker |
| `/simulasi` | Simulasi Phishing | 4 skenario email interaktif |
| `/kuis` | Kuis Keamanan | 15 soal + review jawaban + level rating |

### Menambahkan Artikel Baru

Buka `data/articles.js` dan tambahkan object baru:

```js
{
  slug: "nama-url-artikel",        // URL: /artikel/nama-url-artikel
  category: "Kategori",
  categoryColor: "#ff3c3c",        // Warna tag kategori
  readTime: "5 menit",
  date: "14 Juni 2026",
  title: "Judul Artikel Kamu",
  excerpt: "Ringkasan singkat...",
  content: `
## Heading

Isi artikel...

### Sub-heading

- Poin pertama
- Poin kedua
  `.trim(),
},
```

---

## 🌐 Deployment ke Vercel

Project ini di-deploy otomatis ke Vercel. Setiap `git push` ke branch `main` akan memicu re-deployment otomatis.

```bash
# Commit dan push perubahan
git add .
git commit -m "feat: deskripsi perubahan"
git push
```

---

## 🎯 Kesesuaian Rubrik UAS

| Aspek Penilaian | Bobot | Implementasi |
|----------------|-------|-------------|
| Kesesuaian Tema Security | 35% | Artikel, tips, simulasi phishing, kuis — semua berkaitan dengan keamanan siber |
| Kreativitas Produk | 20% | Desain Light Neubrutalism yang unik, animasi interaktif, simulasi email realistis |
| Penerapan Konsep Keamanan | 30% | Materi: phishing, ransomware, 2FA, social engineering, password security, Wi-Fi |
| Kualitas Produk | 15% | Next.js 16, responsive, SEO-optimized, deployed di Vercel |

---

## 📚 Referensi & Sumber

- [BSSN — Badan Siber dan Sandi Negara](https://bssn.go.id)
- [Have I Been Pwned?](https://haveibeenpwned.com)
- [No More Ransom Project](https://www.nomoreransom.org)
- [OWASP Foundation](https://owasp.org)
- [Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/)

---

## 📄 Lisensi

Project ini dibuat untuk keperluan akademis — UAS Data and Information Security 2026.

---

<div align="center">

Made with ❤️ by **Muhammad Rizqi Firdaus** · `2402310196`

**Data and Information Security 2026**

🛡️ *Lindungi Dirimu di Dunia Digital*

</div>
