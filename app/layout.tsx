import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { Cormorant_Garamond, Kaushan_Script } from 'next/font/google';
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan',
  display: 'swap',
  preload: true,
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="nb" className={`${GeistSans.variable} ${kaushan.variable} ${cormorant.variable}`}>
      <body className="bg-[#fcf7cd] text-black">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}