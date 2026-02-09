import type { Metadata } from "next";
import { Newsreader, Noto_Sans, Plus_Jakarta_Sans, Inter } from "next/font/google"; // Added Inter just in case but sticking to plan
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Le mojo Rouen - Accueil Haute Gastronomie",
  description: "Bistronomie Connectée & Vins d'Auteurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background-dark font-sans antialiased flex flex-col",
          newsreader.variable,
          notoSans.variable,
          plusJakartaSans.variable
        )}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
