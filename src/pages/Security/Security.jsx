import React from "react";
import styles from "./Security.module.css";
import Security from "../../component/Security/Security.jsx";
import Subscribe from "../../component/Subscribe/Subscribe.jsx";

export default function SecurityPage() {
  return (
    <section className={styles.page}>
      <h1 className={styles.h1}>Security & Trust</h1>
      <p className={styles.sub}>
        Non-custodial by default. Audits, multisig, cold storage.
      </p>
      <Security />
      <Subscribe />
    </section>
  );
}
