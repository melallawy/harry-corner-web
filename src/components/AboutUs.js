import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tagline}>THE HARRY CORNER STORY</span>
            <h2 className={styles.title}>
              Engineering Premium Kitchen Essentials for Modern Culinary Artists
            </h2>
            <p className={styles.paragraph}>
              At Harry Corner, we believe in <strong>tools, not gadgets</strong>. Our mission is to supply home bakers and professional chefs with the highest quality <strong>baking tools and equipment</strong> designed to stand the test of time. We design every item with practical elegance and uncompromising durability, proving that you should only have to buy your kitchen staples once.
            </p>
            <p className={styles.paragraph}>
              Whether you are searching for the <strong>best kitchen tools online</strong> or upgrading to <strong>commercial-grade kitchen utensils</strong>, Harry Corner delivers performance you can trust. Our select line of <strong>professional kitchen tools</strong> blends ergonomic comfort with heavy-duty construction, making every cooking and baking experience seamless.
            </p>
            <p className={styles.paragraph}>
              From the <strong>signature stainless steel rolling pin</strong> with double-bearing rotation to the handcrafted <strong>walnut mixing bowl set</strong> with stabilizing silicone-grip bases, every Harry Corner product is rigorously tested in real kitchens to earn its place. We source only the finest materials — commercial-grade stainless steel, solid hardwoods, and precision-machined components — because we believe your tools should outlast your recipes.
            </p>
          </div>
          
          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Commercial Grade Materials</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Lifetime</span>
              <span className={styles.statLabel}>Durability Guarantee</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Chef-Reviewed Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
