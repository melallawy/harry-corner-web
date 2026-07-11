import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://www.harrycorner.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harry Corner | Premium Kitchen Tools & Durable Essentials",
    template: "%s | Harry Corner",
  },
  description: "Shop premium kitchen essentials and professional-grade baking tools from Harry Corner. Practical elegance, outstanding durability, and tools designed to last a lifetime.",
  keywords: "kitchen tools, baking essentials, premium kitchenware, durable kitchen tools, professional cookware, chef tools, kitchen gadgets, Harry Corner",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Harry Corner | Premium Kitchen Tools & Durable Essentials",
    description: "Shop premium kitchen essentials and professional-grade baking tools from Harry Corner. Practical elegance, outstanding durability, and tools designed to last a lifetime.",
    url: baseUrl,
    siteName: "Harry Corner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harry Corner — Premium Kitchen Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Corner | Premium Kitchen Tools & Durable Essentials",
    description: "Shop premium kitchen essentials and professional-grade baking tools from Harry Corner.",
    images: ["/opengraph-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Harry Corner",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: "Premium kitchen essentials and professional-grade baking tools designed to last a lifetime.",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: baseUrl,
  name: "Harry Corner",
  description: "Premium kitchen essentials and professional-grade baking tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
