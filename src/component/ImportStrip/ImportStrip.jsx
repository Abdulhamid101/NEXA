import React from "react";
import styles from "./ImportStrip.module.css";

export default function ImportStrip() {
  return (
    <section className={styles.strip} aria-label="Import wallets">
      {/* animated background particles (pure CSS via ::before/::after) */}
      <div className={styles.inner}>
        <p className={styles.copy}>
          Easily import your existing wallets with a{" "}
          <strong>12 / 18 / 24-word</strong> recovery phrase.
          <br className={styles.br} />
          Made possible with your favourites.
        </p>

        <ul className={styles.icons} role="list">
          <IconBubble label="Wallet">{walletIcon}</IconBubble>
          <IconBubble label="Ethereum">{ethIcon}</IconBubble>
          <IconBubble label="Stacks / Layers">{layersIcon}</IconBubble>
          <IconBubble label="Security">{shieldIcon}</IconBubble>
        </ul>

        {/* subtle shimmering underline */}
        <span className={styles.shimmer} aria-hidden />
      </div>
    </section>
  );
}

function IconBubble({ children, label }) {
  return (
    <li className={styles.bubble}>
      <span className={styles.ring} aria-hidden />
      <span className={styles.glow} aria-hidden />
      <span className={styles.icon} aria-label={label} title={label}>
        {children}
      </span>
    </li>
  );
}

/* ----- inline SVGs (replace with your own if you like) ----- */
const walletIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M3 7a3 3 0 0 1 3-3h11a2 2 0 0 1 2 2v1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V7Zm16 4h2v6h-2a3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" />
  </svg>
);

const ethIcon = (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 2 5 12l7-3 7 3-7-10Zm0 8-7 3 7 9 7-9-7-3Z" />
  </svg>
);

const layersIcon = (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 3 2 9l10 6 10-6-10-6Zm0 9L2 9v6l10 6 10-6V9l-10 3Z" />
  </svg>
);

const shieldIcon = (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 2 4 5v7c0 5 4.5 8.5 8 10 3.5-1.5 8-5 8-10V5l-8-3Zm0 6 4 2-4 6-4-6 4-2Z" />
  </svg>
);
