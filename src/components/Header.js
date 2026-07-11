"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoBold}>HARRY</span>
            <span className={styles.logoRegular}>CORNER</span>
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li>
            <a href="#products">PRODUCTS</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#reviews">REVIEWS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
