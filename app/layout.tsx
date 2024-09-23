import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface NBGMetadata extends Metadata {
  "google-site-verification": string;
}

export const metadata: NBGMetadata = {
  title: "Near By GOD",
  description: "Near by god is a platform that provides a a huge list telugu christian songs, lyrics, and chords.",
  keywords: ["telugu christian songs", "telugu christian lyrics", "telugu christian chords"],
  "google-site-verification": "e7h2QqNDsME-0v7EHu18lEt11kJWVEmfNAhEFzKKTCg",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="e7h2QqNDsME-0v7EHu18lEt11kJWVEmfNAhEFzKKTCg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
