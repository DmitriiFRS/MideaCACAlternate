import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import Header from './Header/Header';
import SideMenu from './Aside/SideMenu';
import ReduxProvider from './Redux/Provider';

const avantGarde = localFont({
  src: '../public/fonts/avantgardebkbtrusbyme_demi.otf'
});

export const metadata: Metadata = {
  title: 'Midea CAC',
  description: 'Midea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={avantGarde.className}>
        <div className="wrapper">
          <ReduxProvider>
            <Header />
            <SideMenu/>
            <main>{children}</main>
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}
