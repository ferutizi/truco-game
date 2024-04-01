import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truco Game AR",
  description: "Juego de ordenar las cartas españolas segun su valor en el truco argentino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
