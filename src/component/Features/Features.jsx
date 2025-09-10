import React from "react";
import styles from "./Features.module.css";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";

const features = [
  {
    title: "Claim Token",
    desc: "Auto-discover supported tokens with one click.",
    icon: "claim",
    link: "#",
  },
  {
    title: "Migration",
    desc: "Seamlessly move assets between different networks.",
    icon: "migration",
    link: "#",
  },
  {
    title: "Validation",
    desc: "Verify and validate ownership of your assets securely.",
    icon: "validation",
    link: "#",
  },
  {
    title: "Refresh Metadata",
    desc: "Reload token metadata.",
    icon: "gas",
    link: "#",
  },
  {
    title: "Synchronization",
    desc: "Sync with latest data.",
    icon: "bridge",
    link: "#",
  },
  {
    title: "Rectification",
    desc: "Fix sync errors.",
    icon: "recovery",
    link: "#",
  },
  {
    title: "Swap/Exchange",
    desc: "Token exchange.",
    icon: "gas",
    link: "#",
  },
  {
    title: "Connect to Dapps",
    desc: "Connect securely.",
    icon: "bridge",
    link: "#",
  },
  {
    title: "Withdrawal",
    desc: "Withdraw tokens.",
    icon: "recovery",
    link: "#",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <h2 className={styles.title}>Features</h2>
      <p className={styles.sub}>
        Powerful tools to manage, secure, and optimize your crypto experience.
      </p>
      <div className={styles.grid}>
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
