'use client';
import { useState } from 'react';
import { phishingScenarios } from '@/data/phishing';
import styles from './page.module.css';

export default function SimulasiPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(null); // null | 'PHISHING' | 'AMAN'
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showClues, setShowClues] = useState(false);
  const [done, setDone] = useState(false);
  const [activeClue, setActiveClue] = useState(null);

  const scenario = phishingScenarios[currentIndex];

  const handleAnswer = (choice) => {
    if (answered) return;
    setAnswered(choice);
    setShowClues(true);
    const isCorrect = choice === scenario.verdict;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (currentIndex + 1 >= phishingScenarios.length) {
      setDone(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setAnswered(null);
      setShowClues(false);
      setActiveClue(null);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswered(null);
    setShowClues(false);
    setActiveClue(null);
    setScore({ correct: 0, total: 0 });
    setDone(false);
  };

  const isCorrect = answered === scenario?.verdict;

  if (done) {
    const pct = Math.round((score.correct / score.total) * 100);
    const levels = [
      { min: 0, label: 'Pemula', color: 'var(--red)', icon: '😬', msg: 'Kamu perlu banyak belajar mengenali phishing. Baca artikel dan ulangi simulasi!' },
      { min: 50, label: 'Berkembang', color: 'var(--yellow)', icon: '🤔', msg: 'Lumayan! Tapi masih ada yang perlu ditingkatkan. Latihan lebih banyak.' },
      { min: 75, label: 'Mahir', color: 'var(--lime)', icon: '😎', msg: 'Bagus sekali! Kamu cukup jago mengenali phishing. Tetap waspada!' },
      { min: 100, label: 'Expert', color: 'var(--blue)', icon: '🏆', msg: 'Sempurna! Kamu adalah pendeteksi phishing sejati!' },
    ];
    const level = [...levels].reverse().find(l => pct >= l.min);

    return (
      <div className={styles.resultPage}>
        <div className="container">
          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>{level.icon}</div>
            <div className={styles.resultBadge} style={{ background: level.color }}>
              {level.label}
            </div>
            <h2 className={styles.resultTitle}>Simulasi Selesai!</h2>
            <div className={styles.resultScore}>
              <span className={styles.resultNum}>{score.correct}</span>
              <span className={styles.resultSlash}>/</span>
              <span className={styles.resultDen}>{score.total}</span>
            </div>
            <div className={styles.resultPct}>{pct}% Benar</div>
            <p className={styles.resultMsg}>{level.msg}</p>
            <div className={styles.resultActions}>
              <button className="btn btn-primary btn-lg" onClick={handleReset}>
                🔄 Ulangi Simulasi
              </button>
              <a href="/kuis" className="btn btn-secondary btn-lg">
                ⚡ Coba Kuis
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">🎣 Simulasi Phishing</div>
          <h1 className="page-hero-title">
            Latih Kemampuanmu<br />
            <span className="highlight-red">Mengenali Phishing</span>
          </h1>
          <p className="page-hero-desc">
            Hadapi 4 skenario email nyata. Identifikasi mana yang phishing dan mana yang aman,
            lalu pelajari tanda-tanda bahayanya.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Progress */}
          <div className={styles.progress}>
            <div className={styles.progressInfo}>
              <span className="mono">Skenario {currentIndex + 1} dari {phishingScenarios.length}</span>
              <span className="mono">Benar: {score.correct}/{score.total}</span>
            </div>
            <div className={styles.progressDots}>
              {phishingScenarios.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.dot} ${i < currentIndex ? styles.dotDone : ''} ${i === currentIndex ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.layout}>
            {/* Email Mockup */}
            <div className={styles.emailWrap}>
              <div className={styles.emailChrome}>
                <div className={styles.chromeDots}>
                  <span className={styles.dotRed}/>
                  <span className={styles.dotYellow}/>
                  <span className={styles.dotGreen}/>
                </div>
                <div className={styles.chromeTitle}>📧 Email Client</div>
              </div>

              <div className={styles.email}>
                <div className={styles.emailHeader}>
                  <div className={styles.emailRow}>
                    <span className={styles.emailLabel}>Dari:</span>
                    <span className={styles.emailFrom}>
                      <strong>{scenario.from.name}</strong>
                      <span className={`mono ${styles.emailAddr}`}>&lt;{scenario.from.email}&gt;</span>
                    </span>
                  </div>
                  <div className={styles.emailRow}>
                    <span className={styles.emailLabel}>Subjek:</span>
                    <span className={styles.emailSubject}>{scenario.subject}</span>
                  </div>
                </div>

                <div className={styles.emailBody}>
                  <p className={styles.emailText}>{scenario.body}</p>
                  <div className={styles.emailButton}>
                    <div className={styles.fakeBtn}>{scenario.buttonText}</div>
                    <div className={styles.fakeUrl}>🔗 {scenario.buttonUrl}</div>
                  </div>
                  <p className={styles.emailFooter}>{scenario.footer}</p>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className={styles.panel}>
              <div className={styles.panelCard}>
                <h3 className={styles.panelTitle}>{scenario.title}</h3>
                <div className={styles.diffBadge}>
                  Tingkat: <strong>{scenario.difficulty}</strong>
                </div>

                {!answered ? (
                  <>
                    <p className={styles.panelQuestion}>
                      Menurut kamu, email ini termasuk...?
                    </p>
                    <div className={styles.panelButtons}>
                      <button
                        className={`${styles.answerBtn} ${styles.answerDanger}`}
                        onClick={() => handleAnswer('PHISHING')}
                      >
                        🎣 Phishing / Penipuan
                      </button>
                      <button
                        className={`${styles.answerBtn} ${styles.answerSafe}`}
                        onClick={() => handleAnswer('AMAN')}
                      >
                        ✅ Email Aman / Resmi
                      </button>
                    </div>
                    <p className={styles.panelHint}>
                      💡 Perhatikan detail pengirim, link, dan konten email!
                    </p>
                  </>
                ) : (
                  <>
                    <div className={`${styles.verdict} ${isCorrect ? styles.verdictCorrect : styles.verdictWrong}`}>
                      <div className={styles.verdictIcon}>{isCorrect ? '✅' : '❌'}</div>
                      <div>
                        <div className={styles.verdictTitle}>
                          {isCorrect ? 'Benar!' : 'Salah!'}
                        </div>
                        <div className={styles.verdictSub}>
                          Email ini adalah: <strong>{scenario.verdict === 'PHISHING' ? '🎣 PHISHING' : '✅ AMAN'}</strong>
                        </div>
                      </div>
                    </div>

                    <div className={styles.clues}>
                      <h4 className={styles.cluesTitle}>🔍 Tanda-tanda yang perlu diperhatikan:</h4>
                      {scenario.clues.map((clue, i) => (
                        <button
                          key={i}
                          className={`${styles.clue} ${activeClue === i ? styles.clueOpen : ''}`}
                          onClick={() => setActiveClue(prev => prev === i ? null : i)}
                        >
                          <div className={styles.clueHeader}>
                            <span className={styles.clueNum}>{i + 1}</span>
                            <span className={styles.clueText}>{clue.text}</span>
                            <span>{activeClue === i ? '↑' : '↓'}</span>
                          </div>
                          {activeClue === i && (
                            <div className={styles.clueBody}>{clue.explanation}</div>
                          )}
                        </button>
                      ))}
                    </div>

                    <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
                      {currentIndex + 1 < phishingScenarios.length ? 'Skenario Berikutnya →' : 'Lihat Hasil Akhir 🏆'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
