import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>
          Start and Build Your <span>Crypto Portfolio</span> Here
        </h1>
        <p>
          Only at <strong>CryptoCap</strong>, you can build a strong crypto portfolio,
          learn best practices, and master the art of cryptocurrency investing.
        </p>

        <div className={styles.cta_all}>
          <button className={styles.cta_outline}>CONNECT</button>
          <button className={styles.cta}>GET STARTED</button>
        </div>
      </div>
    </section>
  );
}
