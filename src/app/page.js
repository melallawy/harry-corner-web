import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import NewsletterSignup from "../components/NewsletterSignup";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              
              {/* Left Column: Copywriting & Actions */}
              <div className={styles.heroLeft}>
                <span className={styles.heroTagline}>
                  PREMIUM KITCHEN ESSENTIALS
                </span>
                <h1 className={styles.heroTitle}>
                  The heart of your kitchen.
                </h1>
                <p className={styles.heroSubtitle}>
                  Practical elegance. Durability you can trust. Elevate your culinary experience with professional-grade <strong>baking tools and equipment</strong> designed to last a lifetime.
                </p>
                
                <div className={styles.heroActions}>
                  <a href="#products" className={styles.btnBuyNow}>
                    BUY NOW
                  </a>
                  
                  <a href="#products" className={styles.btnBuyNow}>
                    EXPLORE THE TOOLS <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* E-Commerce Products Section */}
        <Products />

        {/* About Us Section */}
        <AboutUs />

        {/* Reviews Section */}
        <Reviews />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
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
    </>
  );
}
