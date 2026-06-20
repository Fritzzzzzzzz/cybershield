import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from './page.module.css';

export const metadata = {
  title: 'Artikel Keamanan Siber',
  description: 'Kumpulan artikel edukasi keamanan siber - phishing, ransomware, password, dan lebih banyak lagi.',
};

export default function ArtikelPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">📰 Artikel</div>
          <h1 className="page-hero-title">
            Artikel<br />
            <span className="highlight-yellow">Keamanan Siber</span>
          </h1>
          <p className="page-hero-desc">
            Pelajari ancaman siber terkini dan cara melindungi diri melalui artikel
            edukatif yang ditulis dengan bahasa yang mudah dipahami.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {articles.map((article, i) => (
              <Link
                href={`/artikel/${article.slug}`}
                key={article.slug}
                className={styles.card}
                style={{ '--i': i }}
              >
                <div className={styles.cardTop}>
                  <span
                    className="tag"
                    style={{
                      background: article.categoryColor,
                      borderColor: article.categoryColor,
                      color: ['#b8ff00', '#ffe600'].includes(article.categoryColor) ? '#000' : '#fff',
                    }}
                  >
                    {article.category}
                  </span>
                  <span className={`mono ${styles.readTime}`}>{article.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{article.title}</h2>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className="mono">{article.date}</span>
                  <span className={styles.readMore}>Baca Selengkapnya →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
