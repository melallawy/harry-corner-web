"use client";

import Link from "next/link";
import styles from "./Explore.module.css";

export default function Explore() {
  const exploreLinks = [
    { label: "Recipes", href: "/recipes" },
    { label: "How To's", href: "/how-tos" },
    { label: "Videos", href: "/videos" },
    { label: "Media Mentions", href: "/media" },
  ];

  return (
    <section className={styles.explore}>
      <div className="container">
        <div className={styles.exploreContent}>
          <h2 className={styles.exploreTitle}>EXPLORE</h2>
          <ul className={styles.exploreLinks}>
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.exploreLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
