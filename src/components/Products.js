import styles from "./Products.module.css";

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Tools, Not Gadgets. Premium essentials for your kitchen.
        </p>

        {/* Magic Touch Banner */}
        <div className={styles.magicBanner}>
          <div className={styles.magicImageWrapper}>
            <img
              src="/images/magic-touch.png"
              alt="Danish dough whisk with colorful sprinkles"
              className={styles.magicImage}
            />
          </div>
          <div className={styles.magicContent}>
            <span className={styles.magicTagline}>HARRY CORNER</span>
            <h3 className={styles.magicTitle}>Magic Touch to Your Kitchen</h3>
            <p className={styles.magicText}>
              One whisk. Infinite possibilities. From sourdough to cookies, our
              Danish Dough Whisk transforms the way you bake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
