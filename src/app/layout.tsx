import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'multihyphenate | mlthyphnt',
  description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
  openGraph: {
    title: 'multihyphenate | mlthyphnt',
    description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
    images: [
      {
        url: 'https://www.mlthyphnt.xyz/images/thumbnail.jpeg',
        width: 1200,
        height: 630,
        alt: 'mlthyphnt social preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
    url: 'https://www.mlthyphnt.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'multihyphenate | mlthyphnt',
    description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
    images: ['https://picsum.photos/1200/600'],
    creator: '@mlthyphnt',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Aniyah']">{children}</body>
    </html>
  );
}