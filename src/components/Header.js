"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
            {isHome ? <a href="#products">SHOP</a> : <Link href="/#products">SHOP</Link>}
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
            {isHome ? <a href="#about">ABOUT US</a> : <Link href="/#about">ABOUT US</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
