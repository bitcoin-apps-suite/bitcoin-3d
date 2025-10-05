import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PocBar from "@/components/PocBar";
import DevLayout from "@/components/DevLayout";
import Footer from "@/components/Footer";
import BitcoinOSWrapper from "@/components/BitcoinOSWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin 3D - Professional 3D Modeling & Design",
  description: "Create, design, and model 3D objects with Bitcoin 3D - the premier web-based 3D CAD application for the Bitcoin ecosystem",
  metadataBase: new URL('https://bitcoin-3d.vercel.app'),
  icons: {
    icon: [
      { url: "/bitcoin-3d-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Bitcoin 3D - Professional 3D Modeling & Design",
    description: "Create, design, and model 3D objects with Bitcoin 3D - the premier web-based 3D CAD application for the Bitcoin ecosystem",
    siteName: "Bitcoin 3D",
    images: [
      {
        url: "/bitcoin-3d-social-png.svg?v=2025",
        width: 1200,
        height: 630,
        alt: "Bitcoin 3D - Professional 3D Modeling & Design with hot pink Bitcoin cube logo",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://bitcoin-3d.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin 3D - Professional 3D Modeling & Design",
    description: "Create, design, and model 3D objects with Bitcoin 3D - the premier web-based 3D CAD application for the Bitcoin ecosystem",
    images: ["/bitcoin-3d-social-png.svg?v=2025"],
    creator: "@bitcoin3d",
    site: "@bitcoin3d",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BitcoinOSWrapper>
          <DevLayout>
            <div style={{ minHeight: 'calc(100vh - 32px)', display: 'flex', flexDirection: 'column' }}>
              {children}
              <Footer />
            </div>
          </DevLayout>
        </BitcoinOSWrapper>
      </body>
    </html>
  );
}