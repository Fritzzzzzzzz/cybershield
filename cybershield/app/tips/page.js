'use client';
import { useState } from 'react';
import { tips, categories } from '@/data/tips';
import styles from './page.module.css';

export default function TipsPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [expanded, setExpanded] = useState(null);
  const [read, setRead] = useState(new Set());

  const filtered = activeCategory === 'Semua'
    ? tips
    : tips.filter(t => t.category === activeCategory);

  const toggleExpand = (id) => {
    setExpanded(prev => prev === id ? null : id);
    setRead(prev => new Set([...prev, id]));
  };

  const progress = Math.round((read.size / tips.length) * 100);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">💡 Tips Keamanan</div>
          <h1 className="page-hero-title">
            Tips Keamanan<br />
            <span className="highlight-lime">Digital</span>
          </h1>
          <p className="page-hero-desc">
            12 tips praktis yang bisa langsung kamu terapkan hari ini untuk
            melindungi data dan privasi digitalmu.
          </p>

          {/* Progress Bar */}
          <div className={styles.progress}>
            <div className={styles.progressHeader}>
              <span className="mono">Progress membaca:</span>
              <span className="mono">{read.size}/{tips.length} tips</span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            {progress === 100 && (
              <div className={styles.progressComplete}>
                🎉 Kamu sudah baca semua tips! Saatnya uji pengetahuanmu.
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tips Grid */}
          <div className={styles.grid}>
            {filtered.map((tip) => {
              const isExpanded = expanded === tip.id;
              const isRead = read.has(tip.id);
              return (
                <div
                  key={tip.id}
                  className={`${styles.card} ${isExpanded ? styles.cardOpen : ''} ${isRead ? styles.cardRead : ''}`}
                  style={{ '--color': tip.categoryColor }}
                >
                  <button
                    className={styles.cardHeader}
                    onClick={() => toggleExpand(tip.id)}
                    aria-expanded={isExpanded}
                  >
                    <div className={styles.cardLeft}>
                      <div className={styles.cardIcon}>{tip.icon}</div>
                      <div className={styles.cardInfo}>
                        <div className={styles.cardMeta}>
                          <span
                            className="tag"
                            style={{
                              background: tip.categoryColor,
                              borderColor: tip.categoryColor,
                              color: ['#b8ff00', '#ffe600'].includes(tip.categoryColor) ? '#000' : '#fff',
                              fontSize: '0.7rem',
                            }}
                          >
                            {tip.category}
                          </span>
                          <span className={`tag ${styles.levelTag}`}>{tip.level}</span>
                          {isRead && <span className={styles.readBadge}>✓ Dibaca</span>}
                        </div>
                        <h3 className={styles.cardTitle}>{tip.title}</h3>
                        <p className={styles.cardShort}>{tip.shortDesc}</p>
                      </div>
                    </div>
                    <div className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}>
                      ↓
                    </div>
                  </button>

                  {isExpanded && (
                    <div className={styles.cardBody}>
                      <p className={styles.cardDetail}>{tip.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <span>🔍</span>
              <p>Tidak ada tips untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
