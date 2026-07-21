import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerNav}>
          <Link href="/#products">SHOP</Link>
          <Link href="/recipes">RECIPES</Link>
          <Link href="/how-tos">{"HOW TO'S"}</Link>
          <Link href="/videos">VIDEOS</Link>
          <Link href="/#about">ABOUT US</Link>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoBold}>HARRY</span>
            <span className={styles.footerLogoRegular}>CORNER</span>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/harry_corner_oficcial" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              IG
            </a>
            <a href="https://www.tiktok.com/@harrycorner" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
              TT
            </a>
            <a href="https://www.pinterest.com/harry_corner_oficcial" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Pinterest">
              Pin
            </a>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Harry Corner. All Rights Reserved. Premium Kitchenware & Durable Essentials.
          </p>
        </div>
      </div>
    </footer>
  );
}
