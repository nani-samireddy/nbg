import type { Metadata } from "next";
import { usePathname } from "next/navigation";
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

export const metadata: Metadata = {
  title: "Near By GOD - Telugu Christian Songs, Lyrics & Chords",
  description: "Discover a wide collection of Telugu Christian songs, lyrics, and chords. Browse, learn, and sing with Near By GOD.",
  keywords: ["Telugu Christian songs", "Telugu Christian lyrics", "Telugu Christian chords", "Christian worship songs"],
  openGraph: {
    title: "Near By GOD - Telugu Christian Songs",
    description: "Explore Telugu Christian songs, lyrics, and chords. Perfect for worship and singing along.",
    url: "https://nani-samireddy.github.io/nbg/",
    siteName: "Near By GOD",
    images: [
      {
        url: "/nbg/static/images/og-image.png", // Add a relevant image in your static folder
        width: 1200,
        height: 630,
        alt: "Near By GOD - Telugu Christian Songs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="A7ZYQdelShfthIXnrZ9wH-ywLVWiyrdgmLQCO-Y8QPs" />
      </head>
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
