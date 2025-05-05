import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import fs from "fs";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EL-Websolutions",
    description: "Freelance webdeveloper voor op maat gemaakte websites en webshops."
};

// This is a route handler for caching Google Reviews
const cachePath = path.join(process.cwd(), "public", "google-review-cache.json");

let rating = "5";
let reviewCount = 2;

try {
    const cache = JSON.parse(fs.readFileSync(cachePath, "utf-8"));
    rating = cache.rating.toFixed(1);
    reviewCount = cache.reviewCount;
} catch (e) {
    console.warn("Could not read google-review-cache.json. Falling back to defaults.");
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EL-Websolutions",
    "url": "https://el-websolutions.com",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black dark:bg-slate-950 dark:text-white`}>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
