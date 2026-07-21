"use client";

import { useState } from "react";
import styles from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Join the Corner</h2>
          <p className={styles.subtitle}>
            Subscribe for exclusive recipes, product drops, and kitchen tips straight to your inbox.
          </p>

          {submitted ? (
            <p className={styles.successMessage}>
              Thank you! Check your inbox for a welcome note from the Corner.
            </p>
          ) : (
            <form
              name="newsletter"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={() => setSubmitted(true)}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p className={styles.hidden}>
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
