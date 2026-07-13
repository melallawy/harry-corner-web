const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.harrycorner.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
