import React from "react";
import styles from "./ToolCard.module.css";

export default function ToolCard({ title, desc, icon, cta }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>{renderIcon(icon)}</div>

      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.desc}>{desc}</p>

      <div className={styles.footer}>
        <a href={cta} className={styles.link}>Click Here →</a>
        <svg className={styles.spark} viewBox="0 0 100 24" aria-hidden>
          <path d="M0 16 L12 14 L24 18 L36 10 L48 12 L60 8 L72 16 L84 10 L100 18"
                fill="none" stroke="#7ce7bf" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <span className={styles.glow} aria-hidden />
    </article>
  );
}

function renderIcon(kind){
  const p = (d)=> <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d={d}/></svg>;
  switch(kind){
    case "medal":  return p("M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5Z");
    case "stack":  return p("M12 2 2 7l10 5 10-5-10-5Zm0 8L2 7v4l10 5 10-5V7l-10 3Zm0 6L2 13v4l10 5 10-5v-4l-10 3Z");
    case "undo":   return p("M12 5a7 7 0 1 1-5 2H5V4l-4 4 4 4V9h2a5 5 0 1 0 5-4Z");
    case "bridge": return p("M3 13h18v2H3v-2Zm2-4h2a7 7 0 0 1 10 0h2v2H5v-2Z");
    case "gas":    return p("M15 3v2h-4v2H9v4h2v2h2v-2h2V7h2V5h-2V3h-2Z");
    case "wrench": return p("M21 7a5 5 0 0 1-7 4l-8 8H3v-3l8-8a5 5 0 1 1 10-1Z");
    default:       return p("M12 2l10 5-10 5L2 7l10-5Z");
  }
}
