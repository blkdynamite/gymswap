import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GymSwap.ai - Your Membership, Unlocked.",
  description: "The secure marketplace to list, swap, or take over gym contracts. Stop paying for what you don't use.",
  keywords: [
    "gym membership swap",
    "gym membership transfer",
    "contract takeover",
    "gym contract swap",
    "sell gym membership",
    "buy gym membership",
    "gym membership marketplace",
    "transfer gym contract",
  ],
  openGraph: {
    title: "GymSwap.ai - Your Membership, Unlocked.",
    description: "The secure marketplace to list, swap, or take over gym contracts. Stop paying for what you don't use.",
    type: "website",
    siteName: "GymSwap.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymSwap.ai - Your Membership, Unlocked.",
    description: "The secure marketplace to list, swap, or take over gym contracts. Stop paying for what you don't use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

