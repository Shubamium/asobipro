import type { Metadata } from "next";
import { Protest_Strike, Open_Sans, Merriweather_Sans } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import PageTransitionWrapper from "./components/PageTransitionWrapper/PageTransitionWrapper";
import Footer from "./components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getUserLocale } from "@/services/locale";
import { CartProvider } from "./(shop)/CartProvider/CartProvider";

export const revalidate = 15;
const protest = Protest_Strike({
  variable: "--fontH",
  weight: ["400"],
  subsets: ["latin"],
});

const merri = Open_Sans({
  variable: "--fontP",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asobu Production",
  description:
    "Asobu Production adalah agensi VTuber yang menghadirkan hiburan, cerita, dan musik untuk menyebarkan senyum ke seluruh dunia.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages({ locale: locale });
  return (
    <html lang={locale}>
      <body
        className={""}
        style={
          {
            "--fontH": protest.style.fontFamily,
            "--fontP": merri.style.fontFamily,
          } as CSSProperties
        }
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
