"use client";

import { useEffect, useState } from "react";
import { fetchShopifyProducts } from "../utils/shopify";
import styles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const items = await fetchShopifyProducts();
      setProducts(items);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Loading our premium collection...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Tools, Not Gadgets. Premium essentials for your kitchen.
        </p>

        <div className={styles.grid}>
          {products.map((product) => (
            <a
              key={product.id}
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.imageUrl}
                  alt={`${product.title} — Harry Corner premium kitchen tool`}
                  className={styles.productImage}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>

              <div className={styles.info}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>${product.price}</span>
                  <span className={styles.buyBtn}>BUY NOW →</span>
                </div>
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: product.title,
                    description: product.description,
                    image: product.imageUrl,
                    offers: {
                      "@type": "Offer",
                      price: product.price,
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                    },
                    brand: {
                      "@type": "Brand",
                      name: "Harry Corner",
                    },
                  }),
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
