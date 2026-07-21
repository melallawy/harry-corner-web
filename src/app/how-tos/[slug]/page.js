import Link from "next/link";
import styles from "../../pages.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { howToArticles } from "../../../utils/howToArticles";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return howToArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = howToArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function HowToArticlePage({ params }) {
  const article = howToArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className={styles.recipePage}>
        <div className="container">
          <Link href="/how-tos" className={styles.backLink}>← Back to How-To Articles</Link>

          <article className={styles.recipeArticle}>
            <div className={styles.recipeHeroImage} style={{ backgroundImage: `url('${article.image}')` }} />

            <div className={styles.recipeContent}>
              <span className={styles.recipeCategory}>{article.category}</span>
              <h1 className={styles.recipePageTitle}>{article.title}</h1>
              <p className={styles.recipePageDesc}>{article.description}</p>

              <div className={styles.recipeQuickInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Read Time</span>
                  <span className={styles.infoValue}>{article.readTime}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Category</span>
                  <span className={styles.infoValue}>{article.category}</span>
                </div>
              </div>

              <div className={styles.articleBody}>
                {article.content.map((section, i) => (
                  <div key={i} className={styles.articleSection}>
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                    <p className={styles.articleText}>{section.text}</p>
                  </div>
                ))}
              </div>

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
