import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import FooterSection from '@/components/footer'
import localFont from 'next/font/local'

const nunito = localFont({
  src: [
    {
      path: './fonts/Nunito-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Uniqore',
  description: 'University in your phone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body className={nunito.variable}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  )
}
