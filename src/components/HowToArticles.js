"use client";

import Link from "next/link";
import styles from "./HowToArticles.module.css";

export default function HowToArticles() {
  const categories = [
    {
      name: "Baking",
      image: "/categories/baking.jpg",
      href: "/how-tos/baking",
    },
    {
      name: "Dehydrating",
      image: "/categories/dehydrating.jpg",
      href: "/how-tos/dehydrating",
    },
    {
      name: "Fermentation & Culturing",
      image: "/categories/fermentation.jpg",
      href: "/how-tos/fermentation",
    },
  ];

  return (
    <section className={styles.howTo}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How-to Articles</h2>
        
        <div className={styles.browseByCategory}>
          <h3 className={styles.categoryTitle}>Browse by Category</h3>
          <div className={styles.categoryLine}></div>
          
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className={styles.categoryOverlay}>
                    <span className={styles.categoryName}>{category.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
