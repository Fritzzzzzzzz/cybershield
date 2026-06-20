import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'CyberShield - Edukasi Keamanan Siber',
    template: '%s | CyberShield',
  },
  description:
    'Platform edukasi keamanan siber terlengkap. Pelajari cara melindungi diri dari ancaman digital dengan artikel, tips, simulasi phishing, dan kuis interaktif.',
  keywords: ['keamanan siber', 'cyber security', 'phishing', 'password', 'digital security', 'edukasi'],
  authors: [{ name: 'Muhammad Rizqi Firdaus' }],
  openGraph: {
    title: 'CyberShield - Edukasi Keamanan Siber',
    description: 'Platform edukasi keamanan siber terlengkap untuk masyarakat Indonesia.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={spaceGrotesk.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
