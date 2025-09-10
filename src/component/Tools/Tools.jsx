import React from "react";
import styles from "./Tools.module.css";
import ToolCard from "../ToolCard/ToolCard.jsx";

const tools = [
  {
    title: "Claim Reward",
    desc: "Unclaimed staking rewards?",
    icon: "medal",
    cta: "#",
  },
  {
    title: "Stake Tokens",
    desc: "Stake your tokens here.",
    icon: "stack",
    cta: "#",
  },
  {
    title: "Recovery",
    desc: "Recover wallets and balances.",
    icon: "undo",
    cta: "#",
  },
  {
    title: "Login Issues",
    desc: "Wallet not logging in?",
    icon: "bridge",
    cta: "#",
  },
  {
    title: "Import Token",
    desc: "Add missing tokens.",
    icon: "gas",
    cta: "#",
  },
  {
    title: "Rectification",
    desc: "Transaction stuck?",
    icon: "wrench",
    cta: "#",
  },
  {
    title: "Bridge",
    desc: "Bridge tokens cross-chain.",
    icon: "bridge",
    cta: "#",
  },
  {
    title: "Transaction Delay",
    desc: "Pending too long?",
    icon: "gas",
    cta: "#",
  },
  {
    title: "Purchase Token",
    desc: "Transaction stuck?",
    icon: "wrench",
    cta: "#",
  },
  {
    title: "Locked Account",
    desc: "Lost access?",
    icon: "gas",
    cta: "#",
  },
  {
    title: "Unable to Purchase",
    desc: "Failed payment methods?",
    icon: "wrench",
    cta: "#",
  },
];

export default function Tools() {
  return (
    <section className={styles.section} id="tools">
      <h2 className={styles.title}>Advanced Tools</h2>
      <p className={styles.sub}>
        Operational superpowers for power users and teams.
      </p>

      <div className={styles.grid}>
        {tools.map((t) => (
          <ToolCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}
