import React from "react";
import styles from "./Security.module.css";
import SecurityCard from "../SecurityCard/SecurityCard.jsx";

const items = [
  {
    title: "Multi-Signature Policies",
    desc: "Approve high-value transactions with multiple keys to reduce single-point risk.",
    icon: "multisig",
  },
  {
    title: "Two-Factor Protection",
    desc: "Add a second factor to sensitive actions and withdrawals.",
    icon: "2fa",
  },
  {
    title: "Cold Storage",
    desc: "Offline custody for treasury assets with secure rotation procedures.",
    icon: "cold",
  },
  {
    title: "Audited Smart Contracts",
    desc: "Independent audits and continuous monitoring for critical contracts.",
    icon: "audit",
  },
];

export default function Security() {
  return (
    <section className={styles.section} id="security">
      <h3 className={styles.title}>Enterprise-Grade Security</h3>
      <p className={styles.sub}>
        Layered controls that keep your assets and operations safe.
      </p>

      <div className={styles.grid}>
        {items.map((it) => (
          <SecurityCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
