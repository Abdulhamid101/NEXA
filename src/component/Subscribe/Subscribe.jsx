import React, { useState } from "react";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function isValid(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!isValid(email)) { setStatus("error"); return; }
    setStatus("loading");

    // TODO: replace with your API call
    await new Promise(r => setTimeout(r, 1200));

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 2800); // auto-reset
  }

  return (
    <section className={styles.wrap} id="subscribe">
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden />
        <h3 className={styles.title}>Subscribe</h3>
        <p className={styles.sub}>
          Join thousands using our services. Get exclusive news & offers.
        </p>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={`${styles.inputWrap} ${status === "error" ? styles.bad : ""}`}>
            <span className={styles.icon} aria-hidden>✉️</span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
              aria-invalid={status === "error"}
              aria-label="Email address"
            />
            {status === "success" && <span className={styles.tick} aria-hidden>✓</span>}
          </div>

          <button
            type="submit"
            className={styles.btn}
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? <span className={styles.spinner} aria-hidden /> : "SUBSCRIBE"}
          </button>
        </form>

        {status === "error"   && <div className={styles.note}>Please enter a valid email.</div>}
        {status === "success" && <div className={styles.noteOk}>You’re in! Check your inbox.</div>}
      </div>
    </section>
  );
}
