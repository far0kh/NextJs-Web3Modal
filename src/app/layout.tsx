import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import ContextProvider from '@/context'
import { config } from '@/config'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider initialState={initialState}>
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
