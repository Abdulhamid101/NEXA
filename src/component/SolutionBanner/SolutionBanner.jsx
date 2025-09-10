import React from "react";
import styles from "./SolutionBanner.module.css";

export default function SolutionBanner() {
  return (
    <section className={styles.wrap} aria-labelledby="solutionTitle">
      <div className={styles.panel}>
        <div className={styles.text}>
          <h2 id="solutionTitle" className={styles.title}>
            The most efficient solution provider in the blockchain.
          </h2>
          <p className={styles.lead}>
            Resolve transaction issues, staking (pool & farm) incidents, balance irregularities,
            whitelist/kyc problems, withdrawal delays, and bridging errors—fast and transparently.
          </p>

          <ul className={styles.bullets}>
            <li>24/7 guided flows for stuck TX</li>
            <li>Cross-chain bridge troubleshooting</li>
            <li>On-chain proofs & audit trails</li>
          </ul>

          <div className={styles.ctaRow}>
            <a className={styles.primary} href="#get-started">GET STARTED</a>
            <a className={styles.secondary} href="#learn">CONNECT</a>
          </div>
        </div>

        {/* Animated “hologram rig” (no images, pure CSS/SVG) */}
        <div className={styles.holo} aria-hidden>
          <div className={styles.pad}>
            <div className={styles.scanline}></div>
            <div className={styles.ring}></div>
            <div className={`${styles.ring} ${styles.ring2}`}></div>
          </div>

          <div className={styles.stack}>
            <Cube label="Swap" />
            <Cube label="Bridge" delay=".2s" />
            <Cube label="Audit" delay=".4s" />
            <Cube label="Vault" delay=".6s" />
            <Cube label="KYC" delay=".8s" />
            <Cube label="Guard" delay="1s" />
          </div>

          <svg className={styles.grid} viewBox="0 0 300 220">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8b5cf6" stopOpacity=".35" />
                <stop offset="1" stopColor="#22d3a3" stopOpacity=".25" />
              </linearGradient>
            </defs>
            <path d="M0 160 L40 150 L80 158 L120 145 L160 152 L200 140 L240 150 L280 145"
              fill="none" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Cube({ label, delay = "0s" }) {
  return (
    <div className={styles.cube} style={{ animationDelay: delay }}>
      <div className={`${styles.face} ${styles.top}`}></div>
      <div className={`${styles.face} ${styles.left}`}></div>
      <div className={`${styles.face} ${styles.right}`}></div>
      <span className={styles.tag}>{label}</span>
    </div>
  );
}
