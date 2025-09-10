import React from "react";
import styles from "./Docs.module.css";

export default function DocsPage(){
  const cards = [
    { title: "API Docs", desc: "Integrate programmatically with REST endpoints.", href: "#" },
    { title: "Status", desc: "Live uptime & incident history.", href: "#" },
    { title: "Changelog", desc: "What’s new in the product.", href: "#" },
    { title: "Audits", desc: "External audits and disclosures.", href: "#" },
  ];
  return (
    <section className={styles.page}>
      <h1 className={styles.h1}>Documentation</h1>
      <p className={styles.sub}>Resources for developers and power users.</p>

      <div className={styles.grid}>
        {cards.map(c => (
          <a key={c.title} href={c.href} className={styles.card}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <span className={styles.chev}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
