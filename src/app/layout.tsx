import './globals.css'
import './globals.css'


export const metadata = {
  title: 'multihyphenate | mlthyphn',
  description: 'web3 studio working with great humans across verticals like ai agents, culture chains, defi and more.',
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