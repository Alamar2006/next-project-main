
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head><link data-rh='true' rel='icon' href='/logo.png'/>
        <title>Next pizza</title></head>
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
