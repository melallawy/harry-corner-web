import Link from "next/link";
import styles from "../../pages.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { recipes } from "../../../utils/recipes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) return { title: "Recipe Not Found" };
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) notFound();

  return (
    <>
      <Header />
      <main className={styles.recipePage}>
        <div className="container">
          <Link href="/recipes" className={styles.backLink}>← Back to Recipes</Link>

          <article className={styles.recipeArticle}>
            <div className={styles.recipeHeroImage} style={{ backgroundImage: `url('${recipe.image}')` }} />

            <div className={styles.recipeContent}>
              <span className={styles.recipeCategory}>{recipe.category}</span>
              <h1 className={styles.recipePageTitle}>{recipe.title}</h1>
              <p className={styles.recipePageDesc}>{recipe.description}</p>

              <div className={styles.recipeQuickInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Time</span>
                  <span className={styles.infoValue}>{recipe.time}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Yield</span>
                  <span className={styles.infoValue}>{recipe.yield}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Difficulty</span>
                  <span className={styles.infoValue}>{recipe.difficulty}</span>
                </div>
              </div>

              <div className={styles.recipeSection}>
                <h2 className={styles.sectionHeading}>Ingredients</h2>
                {Object.entries(recipe.ingredients).map(([key, items]) => (
                  <div key={key} className={styles.ingredientGroup}>
                    {key !== "dough" && <h3 className={styles.ingredientGroupTitle}>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>}
                    <table className={styles.ingredientTable}>
                      <thead>
                        <tr>
                          <th>Ingredient</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, i) => (
                          <tr key={i}>
                            <td>{item.item}</td>
                            <td>{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

              <div className={styles.recipeSection}>
                <h2 className={styles.sectionHeading}>Instructions</h2>
                <ol className={styles.instructionList}>
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className={styles.instructionStep}>{step}</li>
                  ))}
                </ol>
              </div>

              {recipe.tips && recipe.tips.length > 0 && (
                <div className={styles.recipeSection}>
                  <h2 className={styles.sectionHeading}>Tips</h2>
                  <ul className={styles.tipsList}>
                    {recipe.tips.map((tip, i) => (
                      <li key={i} className={styles.tipItem}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.productCTA}>
                <h3>Recommended Tools</h3>
                <p>Use our premium kitchen tools for the best results:</p>
                <a href="#products" className={styles.shopBtn}>SHOP NOW →</a>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
