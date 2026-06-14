<div align="center">

# 🛡️ CyberShield

### Platform Edukasi Keamanan Siber untuk Masyarakat Indonesia

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[🌐 Live Demo](https://cybershield-rizqi.vercel.app)** · **[🐛 Laporkan Bug](https://github.com/Fritzzzzzzzz/cybershield/issues)**

---

![CyberShield Banner](https://img.shields.io/badge/🛡️%20CyberShield-Lindungi%20Dirimu%20di%20Dunia%20Digital-ffe600?style=for-the-badge&labelColor=0a0a0a)

</div>

---

## 📋 Tentang Project

**CyberShield** adalah website edukasi keamanan siber yang dibangun sebagai tugas UAS mata kuliah **Data and Information Security 2026**. Website ini bertujuan meningkatkan kesadaran masyarakat terhadap ancaman digital melalui konten yang interaktif dan edukatif.

> 🎯 **Tema**: Security Awareness and Digital Protection  
> 🏫 **Mata Kuliah**: Data and Information Security  
> 👨‍💻 **Mahasiswa**: Muhammad Rizqi Firdaus · `2402310196`

---

## ✨ Fitur Utama

| Fitur | Route | Deskripsi |
|-------|-------|-----------|
| 📰 **Artikel Keamanan** | `/artikel` | 6 artikel mendalam — phishing, ransomware, password, 2FA, Wi-Fi publik, social engineering |
| 💡 **Tips Keamanan** | `/tips` | 12 tips praktis dengan filter kategori dan progress tracker membaca |
| 🎣 **Simulasi Phishing** | `/simulasi` | 4 skenario email interaktif — identifikasi mana yang phishing, mana yang aman |
| 🧠 **Kuis Keamanan** | `/kuis` | 15 soal multiple choice + penjelasan jawaban + rating level |

---

## 🎨 Tech Stack

```
Framework  : Next.js 16 (App Router)
Styling    : Vanilla CSS + CSS Modules
Design     : Light Neubrutalism
Font       : Space Grotesk + Space Mono (Google Fonts)
Deployment : Vercel
```

---

## 📁 Struktur Repository

```
DAIS_UAS/                        ← root repository
└── cybershield/                 ← project Next.js
    ├── app/
    │   ├── layout.js            # Root layout (Navbar + Footer)
    │   ├── page.js              # Halaman Beranda
    │   ├── globals.css          # Design system & tokens
    │   ├── artikel/
    │   │   ├── page.js          # Daftar artikel
    │   │   └── [slug]/page.js   # Detail artikel
    │   ├── tips/page.js         # Tips keamanan digital
    │   ├── simulasi/page.js     # Simulasi phishing
    │   └── kuis/page.js         # Kuis interaktif
    ├── components/
    │   ├── Navbar.js
    │   └── Footer.js
    └── data/
        ├── articles.js          # 6 artikel lengkap
        ├── tips.js              # 12 tips keamanan
        ├── phishing.js          # 4 skenario simulasi
        └── quiz.js              # 15 soal kuis
```

---

## 🚀 Menjalankan Secara Lokal

### Prerequisites
- Node.js `18+`
- npm

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

---

## 🌐 Deployment

Project di-deploy ke **Vercel** dengan konfigurasi:
- **Root Directory**: `cybershield`
- **Framework**: Next.js (auto-detect)
- **Auto-deploy**: setiap `git push` ke branch `main`

```bash
# Update ke production
git add .
git commit -m "pesan commit"
git push
```

---

## 🎯 Kesesuaian Rubrik UAS

| Aspek Penilaian | Bobot | Implementasi |
|----------------|-------|-------------|
| Kesesuaian Tema Security | **35%** | Artikel, tips, simulasi phishing, kuis — semua topik keamanan siber |
| Kreativitas Produk | **20%** | Desain Light Neubrutalism unik, simulasi email realistis, gamifikasi |
| Penerapan Konsep Keamanan | **30%** | Phishing, ransomware, 2FA, social engineering, password security |
| Kualitas Produk | **15%** | Next.js 16, responsive, SEO-optimized, deployed di Vercel |

---

## 📚 Referensi

- [BSSN — Badan Siber dan Sandi Negara](https://bssn.go.id)
- [Have I Been Pwned?](https://haveibeenpwned.com)
- [No More Ransom Project](https://www.nomoreransom.org)
- [OWASP Foundation](https://owasp.org)

---

<div align="center">

Made with ❤️ by **Muhammad Rizqi Firdaus** · `2402310196`

**Data and Information Security 2026**

🛡️ *Lindungi Dirimu di Dunia Digital*

</div>
