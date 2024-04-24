import { Outfit } from "next/font/google";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

import "./globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-no1",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`rootlayout ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
