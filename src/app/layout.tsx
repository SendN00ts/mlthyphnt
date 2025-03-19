import './globals.css'
import './globals.css'


export const metadata = {
  title: 'Your Product Name - Landing Page',
  description: 'A compelling description of your product or service',
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