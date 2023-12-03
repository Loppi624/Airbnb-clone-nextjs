import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ResgisterModel from './components/models/RegisterModel';
import ToasterProvider from './providers/ToasterProvider';


export const metadata= {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ResgisterModel />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
