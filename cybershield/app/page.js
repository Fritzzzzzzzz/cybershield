import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from './page.module.css';

const stats = [
  { value: '2,200+', label: 'Serangan Siber per Detik', color: 'var(--red)', icon: '⚡' },
  { value: '81%', label: 'Breach karena Password Lemah', color: 'var(--yellow)', icon: '🔑' },
  { value: '$8T', label: 'Kerugian Siber Global 2023', color: 'var(--lime)', icon: '💸' },
  { value: '95%', label: 'Disebabkan Human Error', color: 'var(--cyan)', icon: '🧠' },
];

const features = [
  {
    href: '/artikel',
    icon: '📰',
    label: 'Artikel',
    title: 'Artikel Keamanan',
    desc: 'Baca artikel mendalam tentang ancaman siber terkini dan cara menghadapinya.',
    color: '#b8ff00',
  },
  {
    href: '/tips',
    icon: '💡',
    label: 'Tips',
    title: 'Tips Keamanan Digital',
    desc: '12 tips praktis yang bisa langsung kamu terapkan untuk melindungi data pribadimu.',
    color: '#ffe600',
  },
  {
    href: '/simulasi',
    icon: '🎣',
    label: 'Simulasi',
    title: 'Simulasi Phishing',
    desc: 'Latih kemampuanmu mengenali email phishing dengan skenario simulasi yang nyata.',
    color: '#ff3c3c',
  },
  {
    href: '/kuis',
    icon: '🧠',
    label: 'Kuis',
    title: 'Kuis Keamanan',
    desc: '15 soal interaktif untuk menguji seberapa jauh pengetahuan cyber security kamu.',
    color: '#00d4ff',
  },
];

export default function HomePage() {
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>
              <span className="mono">🛡️ Platform Edukasi Cyber Security</span>
            </div>
            <h1 className={styles.heroTitle}>
              Lindungi Dirimu<br />
              <span className={styles.heroHighlight}>di Dunia Digital</span>
            </h1>
            <p className={styles.heroDesc}>
              Ancaman siber ada di mana-mana. Mulai dari phishing, ransomware,
              hingga social engineering - semua bisa dicegah dengan pengetahuan yang tepat.
              Belajar, simulasi, dan uji kemampuanmu sekarang.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/kuis" className="btn btn-primary btn-lg">
                ⚡ Mulai Kuis Sekarang
              </Link>
              <Link href="/simulasi" className="btn btn-secondary btn-lg">
                🎣 Coba Simulasi Phishing
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <span className="mono">✓ Gratis</span>
              <span className="mono">✓ Bahasa Indonesia</span>
              <span className="mono">✓ Interaktif</span>
            </div>
          </div>

          <div className={styles.heroBadge}>
            <div className={styles.badgeCard}>
              <div className={styles.badgeIcon}>🔐</div>
              <div>
                <div className={styles.badgeTitle}>Stay Secure</div>
                <div className={styles.badgeSubtitle}>Cyber Awareness 2026</div>
              </div>
            </div>
            <div className={styles.badgeWarning}>
              <span>⚠️</span>
              <span>Ancaman siber meningkat setiap tahun</span>
            </div>
          </div>
        </div>

        {/* Hatch pattern */}
        <div className={styles.heroPattern} aria-hidden />
      </section>

      {/* ===== TICKER ===== */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              <span>Phishing ↗ 65%</span>
              <span>Ransomware Menyerang 1 Perusahaan Tiap 11 Detik</span>
              <span>Password "123456" Masih Paling Banyak Digunakan</span>
              <span>2FA Blokir 99.9% Serangan Otomatis</span>
              <span>Kebocoran Data Indonesia 2023: 34 Juta Data</span>
              <span>Update Software = Tutup Celah Keamanan</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== STATS ===== */}
      <section className="section" style={{ background: 'var(--black)', borderBottom: 'var(--border-thick)' }}>
        <div className="container">
          <div className={styles.statsHeader}>
            <span className="tag" style={{ background: 'var(--yellow)', borderColor: 'var(--yellow)' }}>
              Fakta & Angka
            </span>
            <h2 style={{ color: 'var(--white)', marginTop: 12, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Ancaman Siber Bukan Isapan Jempol
            </h2>
          </div>
          <div className={`grid-4 ${styles.statsGrid}`}>
            {stats.map((stat) => (
              <div key={stat.value} className={styles.statCard} style={{ '--accent': stat.color }}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Fitur Platform</div>
            <h2 className="section-title">
              Semua yang Kamu Butuhkan untuk{' '}
              <span>Belajar Aman</span>
            </h2>
            <p className="section-desc">
              Empat modul pembelajaran yang dirancang untuk membangun kesadaran dan kemampuan
              keamanan digital kamu dari nol.
            </p>
          </div>

          <div className={`grid-4 ${styles.featuresGrid}`}>
            {features.map((f, i) => (
              <Link href={f.href} key={f.href} className={styles.featureCard} style={{ '--delay': `${i * 0.1}s` }}>
                <div className={styles.featureTop}>
                  <div className={styles.featureIconBox} style={{ background: f.color }}>
                    {f.icon}
                  </div>
                  <span className="tag" style={{ background: f.color }}>
                    {f.label}
                  </span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <div className={styles.featureArrow}>Pelajari →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== RECENT ARTICLES ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.articlesHeader}>
            <div>
              <div className="section-label">Artikel Terbaru</div>
              <h2 className="section-title" style={{ maxWidth: 500 }}>
                Baca, Pahami, <span>Lindungi</span>
              </h2>
            </div>
            <Link href="/artikel" className="btn btn-secondary">
              Semua Artikel →
            </Link>
          </div>

          <div className={`grid-3 ${styles.articlesGrid}`}>
            {recentArticles.map((article) => (
              <Link href={`/artikel/${article.slug}`} key={article.slug} className={`neu-card ${styles.articleCard}`}>
                <div className={styles.articleMeta}>
                  <span className="tag" style={{ background: article.categoryColor, borderColor: article.categoryColor, color: article.categoryColor === '#ffe600' || article.categoryColor === '#b8ff00' ? '#000' : '#fff' }}>
                    {article.category}
                  </span>
                  <span className={`mono ${styles.readTime}`}>{article.readTime}</span>
                </div>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <span className="mono">{article.date}</span>
                  <span>Baca →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>
                Seberapa Amankah Dirimu?
              </h2>
              <p className={styles.ctaDesc}>
                Uji pengetahuan cyber security kamu dengan kuis 15 soal kami.
                Dapatkan skor dan tingkat keahlianmu.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/kuis" className="btn btn-secondary btn-lg">
                ⚡ Mulai Kuis
              </Link>
              <Link href="/simulasi" className="btn btn-outline btn-lg">
                🎣 Simulasi Phishing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
