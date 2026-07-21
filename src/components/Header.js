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
            <a href="#products">SHOP</a>
          </li>
          <li>
            <Link href="/recipes">RECIPES</Link>
          </li>
          <li>
            <Link href="/how-tos">{"HOW TO'S"}</Link>
          </li>
          <li>
            <Link href="/videos">VIDEOS</Link>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
