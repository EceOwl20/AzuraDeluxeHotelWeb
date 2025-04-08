import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./GeneralComponents/Header/Header";
import Footer from "./GeneralComponents/Footer/Footer";
import HeaderWhite from "./GeneralComponents/Header/HeaderWhite";
import BookNow from "./GeneralComponents/BookNow";
import CookiePopup from "./GeneralComponents/CookiePopup";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Azura Deluxe Hotel",
  description: "Azura Deluxe Hotel",
};



export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <meta name="theme-color" content="#FBFBFBCC" />
          <NextIntlClientProvider>
        <Header />
        <HeaderWhite/>
       
        {children}
        <BookNow/>
        <CookiePopup/>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
