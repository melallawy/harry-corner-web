"use client";

import styles from "./MagicTouch.module.css";

export default function MagicTouch() {
  return (
    <section className={styles.magicTouch}>
      <div className="container">
        <div className={styles.magicTouchContainer}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/magic-touch.png"
              alt="Danish dough whisk with colorful sprinkles - magic touch to your kitchen"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tagline}>HARRY CORNER</span>
            <h2 className={styles.title}>
              Magic Touch<br />to Your Kitchen
            </h2>
            <p className={styles.subtitle}>
              One whisk. Infinite possibilities. From sourdough to cookies, our
              Danish Dough Whisk transforms the way you bake — mixing faster,
              cleaning easier, and creating results that impress every time.
            </p>
            <a href="#products" className={styles.cta}>
              DISCOVER THE WHISK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
