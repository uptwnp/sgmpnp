import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Sigma Industrial Park Panipat | Sigma Group Industrial Projects Panipat",
  description:
    "Sigma Industrial Park Panipat by Sigma Group - Premium industrial plots in Panipat, Haryana. RERA approved industrial projects with modern infrastructure, flexible payment plans starting ₹27K/sq yard.",
  keywords:
    "Sigma Panipat, Sigma Industrial Park, Sigma Group, industrial park panipat, industrial project in panipat, industrial plots panipat, RERA approved industrial park, Sigma Group Panipat, industrial land panipat",
  authors: [{ name: "Sigma Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Sigma Industrial Park Panipat | Sigma Group Industrial Projects",
    description:
      "Sigma Industrial Park Panipat by Sigma Group - Premium RERA approved industrial plots with modern infrastructure starting ₹27K/sq yard",
    type: "website",
    locale: "en_IN",
    siteName: "Sigma Industrial Park Panipat",
    url: "https://sigmaindustrialpark.com",
    images: [
      {
        url: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sigma Industrial Park Panipat - Premium Industrial Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma Industrial Park Panipat | Sigma Group",
    description:
      "Premium RERA approved industrial plots in Panipat starting ₹27K/sq yard",
    images: [
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://sigmaindustrialpark.com",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Panipat, Haryana",
    "geo.position": "29.3909;76.9635",
  },
  icons: {
    icon: "/favicon.ico", // Place favicon.ico in your public folder
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional for iOS support
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <StructuredData />
      </body>
    </html>
  );
}
