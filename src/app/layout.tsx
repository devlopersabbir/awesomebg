import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { connectDatabase } from "@/configs/connect-database";
import BaseProvider from "@/providers/base-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesomebg - Create your awesome background",
  description: "Create your awesome background with awesomebg",
  authors: {
    name: "Sabbir Hossain Shuvo",
    url: "https://devlopersabbir.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDatabase();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
