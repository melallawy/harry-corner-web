import Link from "next/link";
import styles from "../pages.module.css";
import Header from "../../components/Header";

export const metadata = {
  title: "Recipes",
  description: "Discover delicious recipes for sourdough bread, pastries, cookies, and more. Step-by-step guides for bakers of all levels.",
};

export default function RecipesPage() {
  const categories = ["All", "Baking", "Dessert", "Lunch & Dinner"];

  return (
    <>
      <Header />
      <main className={styles.pageMain}>
        <section className={styles.pageHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Recipes</h1>
            <p className={styles.pageSubtitle}>
              Discover delicious recipes for every skill level. From sourdough bread to cookies, find your next bake.
            </p>
          </div>
        </section>

        <section className={styles.pageContent}>
          <div className="container">
            <div className={styles.filterBar}>
              {categories.map((cat) => (
                <span key={cat} className={`${styles.filterItem} ${cat === "All" ? styles.filterActive : ""}`}>
                  {cat}
                </span>
              ))}
            </div>

            <div className={styles.cardGrid}>
              <Link href="/recipes/beginners-sourdough-bread" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Baking</span>
                  <h3 className={styles.recipeTitle}>Beginner&apos;s Sourdough Bread</h3>
                  <p className={styles.recipeDesc}>A step-by-step guide to baking your first sourdough loaf with a crispy crust and soft, tangy interior.</p>
                  <div className={styles.recipeMeta}>
                    <span>2 days</span>
                    <span>Intermediate</span>
                  </div>
                </div>
              </Link>

              <Link href="/recipes/honey-wheat-sandwich-bread" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Baking</span>
                  <h3 className={styles.recipeTitle}>Honey Wheat Sandwich Bread</h3>
                  <p className={styles.recipeDesc}>Soft, fluffy sandwich bread with a touch of honey and whole wheat flavor.</p>
                  <div className={styles.recipeMeta}>
                    <span>3 hours</span>
                    <span>Beginner</span>
                  </div>
                </div>
              </Link>

              <Link href="/recipes/rustic-focaccia" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549931319-a545753467c8?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Baking</span>
                  <h3 className={styles.recipeTitle}>Rustic Olive Oil Focaccia</h3>
                  <p className={styles.recipeDesc}>Crispy, golden focaccia loaded with olive oil, flaky sea salt, and fresh rosemary.</p>
                  <div className={styles.recipeMeta}>
                    <span>2 hours</span>
                    <span>Beginner</span>
                  </div>
                </div>
              </Link>

              <Link href="/recipes/sourdough-pizza-dough" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Lunch &amp; Dinner</span>
                  <h3 className={styles.recipeTitle}>Sourdough Pizza Dough</h3>
                  <p className={styles.recipeDesc}>Thin, crispy sourdough pizza crust with beautiful char and tangy flavor.</p>
                  <div className={styles.recipeMeta}>
                    <span>24 hours</span>
                    <span>Intermediate</span>
                  </div>
                </div>
              </Link>

              <Link href="/recipes/chocolate-chip-cookies" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Dessert</span>
                  <h3 className={styles.recipeTitle}>Perfect Chocolate Chip Cookies</h3>
                  <p className={styles.recipeDesc}>Chewy in the center, crispy on the edges, loaded with melty chocolate chips.</p>
                  <div className={styles.recipeMeta}>
                    <span>45 min</span>
                    <span>Beginner</span>
                  </div>
                </div>
              </Link>

              <Link href="/recipes/banana-bread" className={styles.recipeCard}>
                <div className={styles.recipeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605090930601-4f878f570887?w=800&h=600&fit=crop')" }} />
                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>Dessert</span>
                  <h3 className={styles.recipeTitle}>Classic Banana Bread</h3>
                  <p className={styles.recipeDesc}>Moist, tender banana bread with caramelized banana flavor. A timeless classic.</p>
                  <div className={styles.recipeMeta}>
                    <span>1 hour</span>
                    <span>Beginner</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
