import React from "react";
import styles from "./Features.module.css";
import Features from "../../component/Features/Features";

export default function FeaturesPage() {
  return (
    <section className={styles.page}>
      <h1 className={styles.h1}>All Features</h1>
      <p className={styles.sub}>
        Everything you can do on our on-chain platform.
      </p>
      <Features />
    </section>
  );
}
