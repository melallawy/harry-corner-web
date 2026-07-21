import Link from "next/link";
import styles from "../pages.module.css";
import Header from "../../components/Header";

export const metadata = {
  title: "How-To Articles",
  description: "Learn baking techniques, fermentation methods, and kitchen skills with our step-by-step how-to guides.",
};

export default function HowTosPage() {
  const categories = [
    { name: "Baking", image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&h=600&fit=crop" },
    { name: "Dehydrating", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop" },
    { name: "Fermentation & Culturing", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9b?w=800&h=600&fit=crop" },
  ];

  const articles = [
    {
      slug: "beginners-guide-to-sourdough",
      title: "Beginner's Guide to Sourdough",
      category: "Baking",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&h=600&fit=crop",
      description: "Everything you need to know to start your sourdough journey.",
      readTime: "10 min read",
    },
    {
      slug: "how-to-use-a-danish-dough-whisk",
      title: "How to Use a Danish Dough Whisk",
      category: "Baking",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      description: "Master the art of mixing dough with a Danish dough whisk.",
      readTime: "5 min read",
    },
    {
      slug: "mastering-bread-scoring",
      title: "Mastering Bread Scoring",
      category: "Baking",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
      description: "Learn the techniques and artistry behind scoring bread.",
      readTime: "7 min read",
    },
    {
      slug: "dehydrating-fruits-at-home",
      title: "Dehydrating Fruits at Home",
      category: "Dehydrating",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop",
      description: "Preserve seasonal fruits by dehydrating them for healthy snacks.",
      readTime: "6 min read",
    },
    {
      slug: "home-fermentation-basics",
      title: "Home Fermentation Basics",
      category: "Fermentation & Culturing",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9b?w=800&h=600&fit=crop",
      description: "Discover the world of fermentation — from kombucha to kimchi.",
      readTime: "8 min read",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.pageMain}>
        <section className={styles.pageHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>How-to Articles</h1>
            <p className={styles.pageSubtitle}>
              Learn baking techniques, fermentation methods, and kitchen skills with our step-by-step guides.
            </p>
          </div>
        </section>

        <section className={styles.pageContent}>
          <div className="container">
            <h2 className={styles.browseCategoryTitle}>Browse by Category</h2>
            <div className={styles.categoryLine} />

            <div className={styles.categoriesGrid}>
              {categories.map((cat) => (
                <div key={cat.name} className={styles.categoryCard}>
                  <div className={styles.categoryImage} style={{ backgroundImage: `url('${cat.image}')` }}>
                    <div className={styles.categoryOverlay}>
                      <span className={styles.categoryName}>{cat.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className={styles.articlesSectionTitle}>All Articles</h2>
            <div className={styles.categoryLine} />

            <div className={styles.cardGrid}>
              {articles.map((article) => (
                <Link key={article.slug} href={`/how-tos/${article.slug}`} className={styles.recipeCard}>
                  <div className={styles.recipeImage} style={{ backgroundImage: `url('${article.image}')` }} />
                  <div className={styles.recipeInfo}>
                    <span className={styles.recipeCategory}>{article.category}</span>
                    <h3 className={styles.recipeTitle}>{article.title}</h3>
                    <p className={styles.recipeDesc}>{article.description}</p>
                    <div className={styles.recipeMeta}>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
