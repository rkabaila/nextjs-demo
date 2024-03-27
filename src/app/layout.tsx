"use client";

import { Menu } from "@/components/menu";
import "./globals.css";
import { Inter } from "next/font/google";
import { CartContextProvider } from "@/components/cartContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
