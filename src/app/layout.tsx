import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Aprendendo NextJS",
  keywords: ["HTML", "CSS", "JavaScript", "Programação"],
  openGraph: {
    images: [
      /*colar url da imagem, thumb do link*/
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
