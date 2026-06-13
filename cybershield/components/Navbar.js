'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tips', label: 'Tips' },
  { href: '/simulasi', label: 'Simulasi' },
  { href: '/kuis', label: 'Kuis' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? styles.scrolled : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <div className="navbar-logo-icon">🛡️</div>
          <span>CyberShield</span>
        </Link>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kuis" className="navbar-cta" onClick={() => setOpen(false)}>
            Mulai Kuis ⚡
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>
    </nav>
  );
}
