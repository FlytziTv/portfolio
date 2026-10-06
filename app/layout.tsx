import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Dock from "@/components/layout/dock";
import SiteFooter from "@/components/layout/site-footer";
import TopBar from "@/components/layout/top-bar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  weight: ["700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alexis De Jesus — Portfolio BTS SIO SLAM",
    template: "%s · Alexis De Jesus",
  },
  description:
    "Portfolio d’Alexis De Jesus, étudiant en BTS SIO option SLAM à Ynov Campus Paris : parcours, réalisations, stages et veille technologique.",
  icons: {
    icon: "/images/sz-icons/icon.svg",
    apple: "/images/sz-icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="overflow-x-clip">
            <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col border-x border-border">
              <TopBar />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
