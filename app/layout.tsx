import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Droply - Secure Cloud Storage for Images",
  description:
    "Store, organize, and manage your images with Droply. Fast uploads, military-grade security, and smart organization. Experience next-generation cloud storage.",
  keywords: [
    "cloud storage",
    "image storage",
    "file upload",
    "secure storage",
    "photo management",
  ],
  authors: [{ name: "PreetKot", url: "https://github.com/PreetKot" }],
  openGraph: {
    title: "Droply - Secure Cloud Storage for Images",
    description: "Store your images with energy. Unleash. Secure. Fast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droply - Secure Cloud Storage for Images",
    description: "Store your images with energy. Unleash. Secure. Fast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ...existing code...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} antialiased bg-gradient-to-br from-black via-gray-900 to-lime-600 text-lime-100`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
