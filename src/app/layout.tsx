import './globals.css'

export const metadata = {
  title: 'multihyphenate | mlthyphnt',
  description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
  openGraph: {
    title: 'multihyphenate | mlthyphnt',
    description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
    images: [
      {
        url: '../../public/images/thumbnail.jpeg', // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: 'mlthyphnt social preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
    url: 'https://mlthyphnt.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'multihyphenate | mlthyphnt',
    description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
    images: ['/images/social-preview.png'], // Path to your image
    creator: '@mlthyphnt',
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Aniyah']">{children}</body>
    </html>
  )
}