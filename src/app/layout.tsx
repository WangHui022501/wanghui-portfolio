import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wanghui.art'),
  title: {
    default: 'Wang Hui 王慧 — Portfolio',
    template: '%s — Wang Hui 王慧',
  },
  description:
    'Portfolio of Wang Hui (王慧) — drawing, architecture, photography, map design, and creative code.',
  openGraph: {
    title: 'Wang Hui 王慧',
    description: 'Drawing · Architecture · Photography · Maps · Vibecoding',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Providers>
          <Nav />
          <main className="pt-16 min-h-[70vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
