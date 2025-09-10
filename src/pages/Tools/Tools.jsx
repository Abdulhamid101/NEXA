import React from "react";
import styles from "./Tools.module.css";
import Tools from "../../component/Tools/Tools.jsx";
import SolutionBanner from "../../component/SolutionBanner/SolutionBanner.jsx";

export default function ToolsPage(){
  return (
    <section className={styles.page}>
      <h1 className={styles.h1}>Advanced Tools</h1>
      <p className={styles.sub}>Run power operations: Bridge, Recovery, Fix TX, and more.</p>
      <Tools />
      <SolutionBanner />
    </section>
  );
}
