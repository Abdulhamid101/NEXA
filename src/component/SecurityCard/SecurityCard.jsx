import React from "react";
import styles from "./SecurityCard.module.css";

export default function SecurityCard({ title, desc, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <div className={styles.badge}>{renderIcon(icon)}</div>
        <h4 className={styles.h4}>{title}</h4>
      </div>
      <p className={styles.desc}>{desc}</p>
    </article>
  );
}

function renderIcon(kind) {
  switch (kind) {
    case "multisig":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Zm0 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>
        </svg>
      );
    case "2fa":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M6 10V7a6 6 0 1 1 12 0v3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1Zm2 0h8V7a4 4 0 1 0-8 0v3Z"/>
        </svg>
      );
    case "cold":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M12 2 8 6h3v5l-3 2 4 3 4-3-3-2V6h3l-4-4Z"/>
        </svg>
      );
    case "audit":
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4V4Zm12 0v4h4M7 13l2 2 6-6"/>
        </svg>
      );
  }
}
