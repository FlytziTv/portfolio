import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavWrapper } from "@/components/sz/nav-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis De Jesus | Développeur Fullstack Passionné",
  description:
    "Portfolio d'Alexis De Jesus : Étudiant et Développeur Fullstack.",
  icons: {
    icon: "/img/icons/sz-icon.svg",
    apple: "/img/icons/sz-icon.svg",
  },
  openGraph: {
    title: "Alexis De Jesus - Portfolio",
    description: "Conception d'applications web modernes et performantes.",
    url: "https://aalexis.fr",
    siteName: "Alexis De Jesus Portfolio",
    images: [
      {
        url: "/img/icons/sz-icon.png",
        width: 630,
        height: 630,
        alt: "Logo Alexis De Jesus",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-black font-sans selection:bg-white selection:text-black">
          <NavWrapper />
          {children}
        </div>
      </body>
    </html>
  );
}
