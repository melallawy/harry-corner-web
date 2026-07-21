import styles from "../pages.module.css";
import Header from "../../components/Header";

export const metadata = {
  title: "Media Mentions",
  description: "See where Harry Corner has been featured in the media.",
};

export default function MediaPage() {
  const mentions = [
    {
      title: "Best Baking Tools of 2026",
      source: "Food & Wine",
      date: "March 2026",
      description: "Our Danish Dough Whisk was named one of the top baking tools every home baker needs.",
      url: "#",
    },
    {
      title: "Sourdough Starter Guide",
      source: "King Arthur Baking",
      date: "January 2026",
      description: "Featured equipment recommendations for beginner sourdough bakers.",
      url: "#",
    },
    {
      title: "Kitchen Essentials Review",
      source: "Serious Eats",
      date: "December 2025",
      description: "In-depth review of our premium bread scoring tools and baking supplies.",
      url: "#",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.pageMain}>
        <section className={styles.pageHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Media Mentions</h1>
            <p className={styles.pageSubtitle}>
              See where Harry Corner has been featured and recommended by top food publications.
            </p>
          </div>
        </section>

        <section className={styles.pageContent}>
          <div className="container">
            <div className={styles.mediaList}>
              {mentions.map((mention, i) => (
                <div key={i} className={styles.mediaCard}>
                  <div className={styles.mediaSource}>{mention.source}</div>
                  <h3 className={styles.mediaTitle}>{mention.title}</h3>
                  <p className={styles.mediaDesc}>{mention.description}</p>
                  <div className={styles.mediaMeta}>
                    <span>{mention.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
