import AOSInitializer from '@/components/aos';
import '../styles/globals.css'
import { Orbitron, Alumni_Sans } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-orbitron',
  display: 'swap',
});

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // ajusta conforme preferires
  variable: '--font-alumni-sans',
  display: 'swap',
});


export const metadata = {
  title: {
    default: 'Code4all',
    template: '%s | code4all',
  },
  description: 'A Code4All é a maior plataforma de aprendizado de JavaScript em Angola, oferecendo vídeo-aulas práticas, livros digitais, desafios, e uma comunidade ativa para ajudar iniciantes e programadores a dominarem JavaScript do zero ao avançado. Aprenda a programar com conteúdos em português, 100% focados na realidade africana.',
  keywords: ['Next.js', 'SEO', 'App Router'],
  authors: [{ name: 'Kina João Mukumba' }],
  openGraph: {
    title: 'code4all',
    description: 'Aprende JavaScript do zero com aulas, livros e desafios práticos. A maior comunidade JS de Angola! 🇦🇴',
    url: 'https://code4all.ao',
    siteName: 'code4all',
    images: [
      {
        url: 'https://code4all.ao/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt-AO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className={`${alumniSans.variable}`}>
      <body>
        <AOSInitializer/>
        {children}
      </body>
    </html>
  );
}