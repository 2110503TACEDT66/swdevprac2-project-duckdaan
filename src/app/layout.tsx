import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'

import './globals.css'
import ReduxProvider from '@/redux/ReduxProvider'
import NextAuthProvider from '@/providers/NextAuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Camping is Love',
  // description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>

        
          <TopMenu />
          {children}
        
        
      </body>
    </html>
  )
}
