import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const locales = ["fr", "en"];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis De Jesus | Développeur Fullstack",
  description:
    "Portfolio d'Alexis De Jesus : Étudiant et Développeur Fullstack.",
  icons: {
    icon: "/images/sz-icons/icon.svg",
    apple: "/images/sz-icons/icon.svg",
  },
  openGraph: {
    title: "Alexis De Jesus - Portfolio",
    description: "Conception d'applications web modernes et performantes.",
    url: "https://aalexis.fr",
    siteName: "Alexis De Jesus Portfolio",
    images: [
      {
        url: "https://aalexis.fr/images/sz-icons/icon.svg",
        width: 630,
        height: 630,
        alt: "Logo Alexis De Jesus",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
