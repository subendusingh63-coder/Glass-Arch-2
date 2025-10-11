import '../globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata = {
  title: 'Glass Arch',
  description: 'Arching Ideas into Reality'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
