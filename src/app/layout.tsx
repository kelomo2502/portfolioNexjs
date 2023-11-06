import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'


export const metadata: Metadata = {
  title: "gbenga's portfolio",
  description: 'Created by Gbenga Kelvin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
