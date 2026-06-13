import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from './page.module.css';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function renderContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className={styles.h2}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className={styles.h3}>{line.slice(4)}</h3>);
    } else if (line.startsWith('| ')) {
      // Table
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split('|').filter(Boolean).map(s => s.trim());
      const rows = tableLines.slice(2).map(r => r.split('|').filter(Boolean).map(s => s.trim()));
      elements.push(
        <div key={`table-${i}`} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>{headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith('- ') || line.startsWith('✅') || line.startsWith('❌') || line.startsWith('🚩')) {
      const listItems = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('✅') || lines[i].startsWith('❌') || lines[i].startsWith('🚩') || lines[i].startsWith('  - '))) {
        listItems.push(lines[i].replace(/^- /, '').replace(/^  - /, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className={styles.list}>
          {listItems.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className={styles.list}>
          {listItems.map((item, j) => <li key={j}>{item}</li>)}
        </ol>
      );
      continue;
    } else if (line.startsWith('`') && line.includes('`')) {
      elements.push(
        <code key={i} className={styles.code}>{line.replace(/`/g, '')}</code>
      );
    } else if (line.trim() !== '') {
      // Process bold: **text**
      const processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      elements.push(
        <p key={i} className={styles.p} dangerouslySetInnerHTML={{ __html: processed }} />
      );
    }

    i++;
  }

  return elements;
}

export default async function ArtikelDetailPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <div className={styles.hero} style={{ '--accent': article.categoryColor }}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Beranda</Link>
            <span>→</span>
            <Link href="/artikel">Artikel</Link>
            <span>→</span>
            <span>{article.category}</span>
          </div>
          <div className={styles.heroMeta}>
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
            <span className="mono" style={{ fontSize: '0.8rem', color: '#555' }}>
              {article.readTime} baca · {article.date}
            </span>
          </div>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <p className={styles.heroExcerpt}>{article.excerpt}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.content}>
              {renderContent(article.content)}
            </article>

            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Artikel Lainnya</h3>
                <div className={styles.sideList}>
                  {otherArticles.map((a) => (
                    <Link href={`/artikel/${a.slug}`} key={a.slug} className={styles.sideItem}>
                      <span
                        className="tag"
                        style={{
                          background: a.categoryColor,
                          borderColor: a.categoryColor,
                          color: ['#b8ff00', '#ffe600'].includes(a.categoryColor) ? '#000' : '#fff',
                          fontSize: '0.7rem',
                        }}
                      >
                        {a.category}
                      </span>
                      <span className={styles.sideItemTitle}>{a.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.sideCard} style={{ background: 'var(--yellow)' }}>
                <h3 className={styles.sideTitle}>Uji Pengetahuanmu</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>
                  Sudah baca artikelnya? Sekarang uji seberapa banyak yang kamu pahami!
                </p>
                <Link href="/kuis" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  ⚡ Mulai Kuis
                </Link>
              </div>
            </aside>
          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/artikel" className="btn btn-outline">
              ← Kembali ke Semua Artikel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
