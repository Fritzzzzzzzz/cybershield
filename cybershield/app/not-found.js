import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      background: 'repeating-linear-gradient(45deg, #f5f0e8, #f5f0e8 20px, #eae5d8 20px, #eae5d8 40px)',
    }}>
      <div style={{
        background: '#fff',
        border: '6px solid #0a0a0a',
        boxShadow: '12px 12px 0 #0a0a0a',
        padding: '48px',
        textAlign: 'center',
        maxWidth: '480px',
      }}>
        <div style={{ fontSize: '5rem', marginBottom: 16 }}>🔍</div>
        <div style={{
          display: 'inline-block',
          background: '#ff3c3c',
          color: '#fff',
          padding: '6px 18px',
          border: '3px solid #0a0a0a',
          fontFamily: 'Space Mono, monospace',
          fontWeight: 700,
          marginBottom: 20,
        }}>
          ERROR 404
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>
          Halaman Tidak Ditemukan
        </h1>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: 28 }}>
          Halaman yang kamu cari tidak ada atau telah dipindahkan.
          Pastikan URL sudah benar.
        </p>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 28px',
          background: '#ffe600',
          color: '#0a0a0a',
          border: '4px solid #0a0a0a',
          boxShadow: '5px 5px 0 #0a0a0a',
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: '0.95rem',
          letterSpacing: '0.05em',
          textDecoration: 'none',
        }}>
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
