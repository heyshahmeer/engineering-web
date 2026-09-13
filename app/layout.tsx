import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/app/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'AUIS | Ali usman integrated service',
  description:
    'AUIS, Ali usman integrated service, delivers electromechanical, civil and industrial contracting services across Saudi Arabia.',
  keywords:
    'AUIS, electromechanical, civil construction, industrial contracting, Saudi Arabia, oil and gas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-body bg-stone-100 text-stone-900 antialiased">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}