import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import { poppins } from '../components/font'

export const metadata = {
  title: 'rosedev',
  description: 'Website Portofolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
