'use client';
import { useState } from 'react';
import { quizQuestions } from '@/data/quiz';
import styles from './page.module.css';

export default function KuisPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const question = quizQuestions[current];
  const progress = ((current) / quizQuestions.length) * 100;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const isCorrect = selected === question.correct;
    const newAnswers = [...answers, { selected, correct: question.correct, isCorrect }];
    setAnswers(newAnswers);

    if (current + 1 >= quizQuestions.length) {
      setDone(true);
    } else {
      setCurrent(prev => prev + 1);
      setSelected(null);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
    setStarted(false);
  };

  // ===== LANDING =====
  if (!started) {
    return (
      <div className={styles.landingPage}>
        <div className="container">
          <div className={styles.landingCard}>
            <div className={styles.landingIcon}>🧠</div>
            <span className="tag" style={{ background: 'var(--cyan)', marginBottom: 16 }}>Kuis Interaktif</span>
            <h1 className={styles.landingTitle}>Kuis Keamanan Informasi</h1>
            <p className={styles.landingDesc}>
              Uji seberapa jauh pengetahuan cyber security kamu dengan{' '}
              <strong>{quizQuestions.length} soal</strong> pilihan ganda. Dapatkan skor dan
              tingkat keahlianmu!
            </p>
            <div className={styles.landingInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📋</span>
                <span>{quizQuestions.length} Soal</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🎯</span>
                <span>Pilihan Ganda</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>💡</span>
                <span>Ada Penjelasan</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⚡</span>
                <span>Langsung Nilai</span>
              </div>
            </div>
            <button className="btn btn-primary btn-lg" onClick={() => setStarted(true)} style={{ width: '100%', justifyContent: 'center' }}>
              ⚡ Mulai Kuis Sekarang!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== DONE =====
  if (done) {
    const score = answers.filter(a => a.isCorrect).length;
    const pct = Math.round((score / quizQuestions.length) * 100);
    const levels = [
      { min: 0, label: 'Pemula', color: 'var(--red)', icon: '📚', desc: 'Terus belajar! Baca artikel dan tips di CyberShield.' },
      { min: 40, label: 'Berkembang', color: 'var(--orange)', icon: '📈', desc: 'Progres bagus! Masih ada ruang untuk peningkatan.' },
      { min: 60, label: 'Menengah', color: 'var(--yellow)', icon: '💪', desc: 'Pengetahuanmu cukup solid. Keep it up!' },
      { min: 80, label: 'Mahir', color: 'var(--lime)', icon: '🔥', desc: 'Luar biasa! Kamu paham keamanan siber dengan baik.' },
      { min: 93, label: 'Expert', color: 'var(--cyan)', icon: '🏆', desc: 'Sempurna! Kamu adalah pakar keamanan siber sejati!' },
    ];
    const level = [...levels].reverse().find(l => pct >= l.min);

    return (
      <div className={styles.donePage}>
        <div className="container">
          <div className={styles.doneCard}>
            <div className={styles.doneHeader}>
              <div className={styles.doneIcon}>{level.icon}</div>
              <div>
                <h2 className={styles.doneTitle}>Kuis Selesai!</h2>
                <div className={styles.doneBadge} style={{ background: level.color }}>
                  Level: {level.label}
                </div>
              </div>
            </div>

            <div className={styles.doneScore}>
              <div className={styles.doneScoreCircle} style={{ '--pct': pct }}>
                <span className={styles.doneScoreNum}>{pct}%</span>
              </div>
              <div>
                <div className={styles.doneCorrect}>{score} Benar</div>
                <div className={styles.doneTotal}>dari {quizQuestions.length} soal</div>
                <p className={styles.doneDesc}>{level.desc}</p>
              </div>
            </div>

            {/* Review */}
            <div className={styles.review}>
              <h3 className={styles.reviewTitle}>Review Jawaban</h3>
              <div className={styles.reviewList}>
                {quizQuestions.map((q, i) => {
                  const ans = answers[i];
                  return (
                    <div key={i} className={`${styles.reviewItem} ${ans.isCorrect ? styles.reviewCorrect : styles.reviewWrong}`}>
                      <div className={styles.reviewQ}>
                        <span className={styles.reviewNum}>{ans.isCorrect ? '✅' : '❌'}</span>
                        <span className={styles.reviewText}>
                          <strong>S{i+1}:</strong> {q.question}
                        </span>
                      </div>
                      {!ans.isCorrect && (
                        <div className={styles.reviewExp}>
                          <span>✔ Jawaban benar: <strong>{q.options[q.correct]}</strong></span>
                          <span className={styles.reviewExplanation}>{q.explanation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.doneActions}>
              <button className="btn btn-primary btn-lg" onClick={handleReset}>
                🔄 Ulangi Kuis
              </button>
              <a href="/simulasi" className="btn btn-secondary btn-lg">
                🎣 Coba Simulasi
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== QUIZ =====
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">🧠 Kuis</div>
          <h1 className="page-hero-title">
            Kuis Keamanan<br />
            <span className="highlight-cyan">Informasi</span>
          </h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.quizWrap}>
            {/* Progress */}
            <div className={styles.quizProgress}>
              <div className={styles.quizProgressInfo}>
                <span className="mono">Soal {current + 1} / {quizQuestions.length}</span>
                <span className="mono">{answers.filter(a => a.isCorrect).length} benar</span>
              </div>
              <div className={styles.quizProgressTrack}>
                <div className={styles.quizProgressFill} style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className={styles.questionCard}>
              <div className={styles.questionNum}>
                <span className="mono">Soal {current + 1}</span>
              </div>
              <h2 className={styles.questionText}>{question.question}</h2>

              <div className={styles.options}>
                {question.options.map((opt, idx) => {
                  let state = '';
                  if (selected !== null) {
                    if (idx === question.correct) state = styles.optCorrect;
                    else if (idx === selected && idx !== question.correct) state = styles.optWrong;
                    else state = styles.optDimmed;
                  }
                  return (
                    <button
                      key={idx}
                      className={`${styles.option} ${selected === idx && selected !== null ? styles.optSelected : ''} ${state}`}
                      onClick={() => handleSelect(idx)}
                      disabled={selected !== null}
                    >
                      <span className={styles.optLetter}>
                        {['A', 'B', 'C', 'D'][idx]}
                      </span>
                      <span className={styles.optText}>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className={`${styles.explanation} ${selected === question.correct ? styles.explanationCorrect : styles.explanationWrong}`}>
                  <strong>{selected === question.correct ? '✅ Benar!' : '❌ Salah!'}</strong>
                  <p>{question.explanation}</p>
                </div>
              )}

              {selected !== null && (
                <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
                  {current + 1 < quizQuestions.length ? 'Soal Berikutnya →' : 'Lihat Hasil 🏆'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
