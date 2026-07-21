import styles from "../pages.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Videos",
  description: "Watch our baking tutorials, product demos, and kitchen tips.",
};

export default function VideosPage() {
  const videos = [
    {
      title: "How to Make Sourdough Bread from Scratch",
      thumbnail: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&h=450&fit=crop",
      duration: "12:34",
      description: "Follow along as we walk through every step of making sourdough bread at home.",
    },
    {
      title: "Using a Danish Dough Whisk",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop",
      duration: "5:21",
      description: "See the Danish dough whisk in action — mixing, folding, and more.",
    },
    {
      title: "Bread Scoring Techniques",
      thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=450&fit=crop",
      duration: "8:45",
      description: "Master beautiful scoring patterns for your artisan loaves.",
    },
    {
      title: "Perfect Pizza Dough Every Time",
      thumbnail: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=450&fit=crop",
      duration: "10:12",
      description: "Make restaurant-quality pizza at home with our sourdough pizza dough recipe.",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.pageMain}>
        <section className={styles.pageHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Videos</h1>
            <p className={styles.pageSubtitle}>
              Watch our baking tutorials, product demos, and kitchen tips.
            </p>
          </div>
        </section>

        <section className={styles.pageContent}>
          <div className="container">
            <div className={styles.videoGrid}>
              {videos.map((video, i) => (
                <div key={i} className={styles.videoCard}>
                  <div className={styles.videoThumbnail} style={{ backgroundImage: `url('${video.thumbnail}')` }}>
                    <span className={styles.videoDuration}>{video.duration}</span>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    <p className={styles.videoDesc}>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
