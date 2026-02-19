import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
// import { ChatProvider } from '@/lib/chat-context'
import { AdminProvider } from '@/lib/admin-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SupportWidget } from '@/components/support-widget'
// import { ChatWidget } from '@/components/chat-widget'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Airbis - Premium Aircraft Components Marketplace',
  description: 'Premium aerospace procurement platform offering certified aircraft parts, fast global shipping, and secure payments.',
  generator: 'v0.app',
  keywords: 'aerospace, aircraft, parts, components, procurement, marketplace',
  openGraph: {
    title: 'Airbis - Premium Aircraft Components Marketplace',
    description: 'The premier destination for certified aircraft components and aerospace parts.',
    type: 'website',
  },
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
        <AdminProvider>
          <CartProvider>
            {/* <ChatProvider> */}
            <Navbar />
            <div className="flex flex-col flex-1">
              {children}
            </div>
            <Footer />
            <SupportWidget />
            {/* </ChatProvider> */}
          </CartProvider>
        </AdminProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
