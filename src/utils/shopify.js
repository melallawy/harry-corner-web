const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const SHOPIFY_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const SHOPIFY_STORE_URL = `https://${SHOPIFY_DOMAIN}`;

// Rich fallback products matching the premium Harry Corner brand guidelines
const MOCK_PRODUCTS = [
  {
    id: "mock-1",
    title: "The Signature Stainless Steel Rolling Pin",
    description: "Commercial-grade steel with double-bearing rotation handles. Designed for perfectly even pastry and bread doughs.",
    price: "49.99",
    imageUrl: "/images/rolling-pin.svg",
    amazonUrl: "https://www.amazon.com", // Fallback outbound link
    shopifyUrl: "#",
    inStock: true
  },
  {
    id: "mock-2",
    title: "Ergonomic Walnut Mixing Bowl Set",
    description: "Handcrafted from solid premium walnut. Deep-well design with stabilizing silicone-grip bases.",
    price: "85.00",
    imageUrl: "/images/mixing-bowl.svg",
    amazonUrl: "https://www.amazon.com",
    shopifyUrl: "#",
    inStock: true
  },
  {
    id: "mock-3",
    title: "Heavy-Duty Bench Scraper & Chopper",
    description: "Laser-etched measurement guides with a non-slip weighted handle. The ultimate kitchen workstation tool.",
    price: "24.50",
    imageUrl: "/images/bench-scraper.svg",
    amazonUrl: "https://www.amazon.com",
    shopifyUrl: "#",
    inStock: true
  }
];

export async function fetchShopifyProducts() {
  // If credentials are not provided, return mock items immediately
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    return MOCK_PRODUCTS;
  }

  const query = `
    query getProducts {
      products(first: 6) {
        edges {
          node {
            id
            title
            handle
            description
            onlineStoreUrl
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const { data } = await response.json();
    if (!data || !data.products) {
      return MOCK_PRODUCTS;
    }

    // Map Shopify response to standard structure
    return data.products.edges.map(({ node }) => {
      const price = node.priceRange?.minVariantPrice?.amount || "0.00";
      const imageUrl = node.images?.edges?.[0]?.node?.url || "/placeholder.svg";
      const shopifyUrl = node.onlineStoreUrl || (node.handle ? `${SHOPIFY_STORE_URL}/products/${node.handle}` : "#");
      const encodedTitle = encodeURIComponent(`Harry Corner ${node.title}`);
      const amazonUrl = `https://www.amazon.com/s?k=${encodedTitle}`;

      return {
        id: node.id,
        title: node.title,
        description: node.description,
        price: parseFloat(price).toFixed(2),
        imageUrl,
        shopifyUrl,
        amazonUrl,
        inStock: true
      };
    });
  } catch (error) {
    console.error("Failed to fetch Shopify products:", error);
    return MOCK_PRODUCTS;
  }
}
