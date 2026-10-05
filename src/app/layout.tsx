import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhilasha Dhami | Full Stack Developer & Prompt Engineer",
  description:
    "Portfolio of Abhilasha Dhami - Full Stack Developer & Prompt Engineer specializing in React.js, Next.js, Node.js, Express, MongoDB, and high-performance web applications.",
  keywords: [
    "Abhilasha Dhami",
    "Full Stack Developer",
    "Prompt Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "ShortListMe",
    "SatqueryAI Frontend",
    "Portfolio",
    "Enver Theme"
  ],
  authors: [{ name: "Abhilasha Dhami" }],
  openGraph: {
    title: "Abhilasha Dhami | Full Stack Developer & Prompt Engineer",
    description:
      "Crafting modern, scalable, and responsive web platforms with React, Next.js, Node.js, and clean software architecture.",
    url: "https://github.com/abhilashadhami",
    siteName: "Abhilasha Dhami Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${caveat.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#19191B] text-white antialiased flex flex-col font-sans selection:bg-[#5454D6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
