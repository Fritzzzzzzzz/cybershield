import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>🛡️ CyberShield</h3>
            <p>
              Platform edukasi keamanan siber untuk meningkatkan kesadaran dan
              perlindungan digital masyarakat Indonesia. Belajar, simulasi,
              dan uji kemampuanmu.
            </p>
            <div className="footer-badge">
              © 2026 Muhammad Rizqi Firdaus
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/artikel">Artikel</Link></li>
              <li><Link href="/tips">Tips Keamanan</Link></li>
              <li><Link href="/simulasi">Simulasi Phishing</Link></li>
              <li><Link href="/kuis">Kuis Keamanan</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Sumber Daya</h4>
            <ul>
              <li>
                <a href="https://bssn.go.id" target="_blank" rel="noopener noreferrer">
                  BSSN Indonesia
                </a>
              </li>
              <li>
                <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer">
                  Have I Been Pwned?
                </a>
              </li>
              <li>
                <a href="https://www.nomoreransom.org" target="_blank" rel="noopener noreferrer">
                  No More Ransom
                </a>
              </li>
              <li>
                <a href="https://owasp.org" target="_blank" rel="noopener noreferrer">
                  OWASP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Dibuat untuk keperluan UAS · <span>Data and Information Security 2026</span>
          </p>
          <p>
            <span>CyberShield</span> — Lindungi Dirimu di Dunia Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
