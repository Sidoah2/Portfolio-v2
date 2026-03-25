import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** 
 * SEO & Open Graph Metadata Configuration
 * Focused on professional branding and social media optimization.
 */
export const metadata: Metadata = {
  title: {
    default: "Ahmed Bouacheri | Full Stack Developer & AI Specialist",
    template: "%s | Ahmed Bouacheri",
  },
  description: "Senior Full Stack Mobile Developer & AI Specialist specializing in Flutter, Next.js, and high-performance AI-driven systems. Explore my portfolio and professional projects.",
  keywords: [
    "Ahmed Bouacheri",
    "Full Stack Developer",
    "Mobile Developer",
    "AI Specialist",
    "Software Engineer",
    "Flutter Expert",
    "Next.js Portfolio",
    "ESI-SBA",
    "Data Analyst Portfolio"
  ],
  authors: [{ name: "Ahmed Bouacheri", url: "https://github.com/Sidoah2" }],
  creator: "Ahmed Bouacheri",
  publisher: "Ahmed Bouacheri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-bouacheri.com", // Recommended: Update with actual domain
    title: "Ahmed Bouacheri | Full Stack Developer & AI Specialist",
    description: "Senior Developer crafting intelligent user experiences with Flutter, Next.js, and AI. View my latest projects and engineering expertise.",
    siteName: "Ahmed Bouacheri Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Bouacheri Portfolio - Full Stack & AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Bouacheri | Full Stack Developer & AI Specialist",
    description: "Senior Full Stack & Mobile Developer at ESI-SBA. Building the future with Flutter and AI.",
    images: ["/preview.png"],
    creator: "@Sidoah2",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
