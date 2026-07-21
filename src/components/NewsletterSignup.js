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

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p className={styles.hidden}>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                type="email"
                name="email"
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

          {status === "error" && (
            <p className={styles.errorMessage}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
