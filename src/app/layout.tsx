import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/common/components/ui'

const fontFamily = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Genersated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${fontFamily.className} text-primary-text-color lg:container m-4 bg-page-background antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
