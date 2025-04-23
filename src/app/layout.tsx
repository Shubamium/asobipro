import type { Metadata } from "next";
import { Protest_Strike, Open_Sans, Merriweather_Sans } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import PageTransitionWrapper from "./components/PageTransitionWrapper/PageTransitionWrapper";
import Footer from "./components/footer/Footer";

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
  title: "Asobi Production",
  description: "A place for all things Asobi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
        style={
          {
            "--fontH": protest.style.fontFamily,
            "--fontP": merri.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
