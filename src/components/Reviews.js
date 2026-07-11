import styles from "./Reviews.module.css";

const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Chef Marcus Vance",
    role: "Artisanal Bread Consultant",
    rating: 5,
    text: "The steel rolling pin from Harry Corner is a masterpiece. The bearings are exceptionally smooth and it has just the right weight to roll sourdough loaves with minimal effort. Truly built for a lifetime of baking."
  },
  {
    id: 2,
    name: "Sarah Lindqvist",
    role: "Home Baking Enthusiast",
    rating: 5,
    text: "Upgrading my kitchen tools to Harry Corner has completely changed my baking. The walnut mixing bowl set is gorgeous enough to leave on the counter, and the non-slip base is perfect when mixing heavy batters."
  },
  {
    id: 3,
    name: "David Cho",
    role: "Pastry Chef & Instructor",
    rating: 5,
    text: "I recommend Harry Corner to all of my culinary students. These are premium essentials that focus purely on performance and longevity. No fancy gadgets, just incredible durability."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section" style={{ borderBottom: "none" }}>
      <div className="container">
        <h2 className="section-title">What Culinary Artists Say</h2>
        <p className="section-subtitle">
          Real feedback from baking enthusiasts and professional chefs.
        </p>

        <div className={styles.grid}>
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.rating}>
                {"★".repeat(review.rating)}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.name}>{review.name}</h4>
                  <span className={styles.role}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
