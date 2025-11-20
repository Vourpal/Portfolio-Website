import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bruno Oros — Software Engineer",
  description:
    "Portfolio website of Bruno Oros, a software engineer with full-stack, backend, and data engineering experience.",
  openGraph: {
    title: "Bruno Oros — Software Engineer",
    description:
      "Portfolio website of Bruno Oros, a software engineer with full-stack, backend, and data engineering experience.",
    url: "https://portfolio-website-one-bay-93.vercel.app/",
    siteName: "Bruno Oros Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Add this file or remove if you don't want an image
        width: 1200,
        height: 630,
        alt: "Bruno Oros Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Oros — Software Engineer",
    description:
      "Portfolio website of Bruno Oros, a software engineer with full-stack, backend, and data engineering experience.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
