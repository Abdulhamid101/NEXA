// src/components/FeatureCard/FeatureCard.jsx
import React, { useContext } from "react";
import { WalletModalContext } from "../../context/WalletModalContext.jsx";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({ title, desc, icon, link }) {
  const { openWallet } = useContext(WalletModalContext); // ← fix

  return (
    <button className={styles.card} onClick={openWallet}>
      <div className={styles.iconWrap}>{renderIcon(icon)}</div>
       <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
         <a href={link} className={styles.link}>
        Click Here →
      </a>
    </button>
  );
}


function renderIcon(name) {
  switch (name) {
    case "claim":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />
        </svg>
      );
    case "migration":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M3 12h6l-3-3 3-3H3V3l6 6-6 6v-3Zm18 0h-6l3 3-3 3h6v3l-6-6 6-6v3Z" />
        </svg>
      );
    case "validation":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2 3 6v6c0 5 4.5 8.5 9 10 4.5-1.5 9-5 9-10V6l-9-4Zm-1 13-3-3 1.5-1.5L11 12l4.5-4.5L17 9l-6 6Z" />
        </svg>
      );
    case "gas":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M15 2v2h-4v2h-2v4h2v2h2v-2h2V6h2V4h-2V2h-2Zm-4 10h2v2h-2v-2Zm4-2h2v2h-2v-2Z" />
        </svg>
      );
    case "bridge":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M4 11h16v2H4v-2Zm8-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
        </svg>
      );
    case "recovery":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2C6.5 2 2 6.5 2 12h2c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8v2c5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
        </svg>
      );
    default:
      return null;
  }
}
