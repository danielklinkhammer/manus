import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interviews in UX Design',
  description: 'Eine umfassende Vorlesung zu Interviews in UX Design: Methoden, Anwendung und Best Practices',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen flex flex-col">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  )
}
