"use client";

import { useState } from "react";
import styles from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // TODO: Integrate with email service (Mailchimp, ConvertKit, Klaviyo, etc.)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Join the Corner</h2>
          <p className={styles.subtitle}>
            Subscribe for exclusive recipes, product drops, and kitchen tips straight to your inbox.
          </p>

          {status === "success" ? (
            <p className={styles.successMessage}>
              Thank you! Check your inbox for a welcome note from the Corner.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className={styles.input}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles.button}
              >
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
