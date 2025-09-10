import React, { useState, useEffect } from "react";
import styles from "./SecureConnectModal.module.css";

/**
 * Props:
 * - isOpen: boolean
 * - walletName: string (e.g., "Phantom")
 * - onClose(): void
 * - onConnectClick?(): void   // safe connect (opens real wallet)
 *
 * This is a design-only modal. Inputs are disabled and cannot submit secrets.
 */
export default function SecureConnectModal({
  isOpen,
  walletName = "Wallet",
  onClose,
  onConnectClick,
}) {
  const [tab, setTab] = useState("phrase"); // "phrase" | "keystore" | "private"

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Design-only demo.\nA real dapp should never ask for your seed phrase, keystore, or private key.\nUse the Connect button to open your wallet."
    );
  }

  return (
    <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Connect {walletName}</h3>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>

        <p className={styles.note}>
          <strong>NB:</strong> All information is end-to-end encrypted. We do not share data and
          activity sessions with any other company.
        </p>

        <div className={styles.tabs} role="tablist">
          <button
            role="tab"
            aria-selected={tab === "phrase"}
            className={tab === "phrase" ? styles.tabActive : styles.tab}
            onClick={() => setTab("phrase")}
          >
            Phrase
          </button>
          <button
            role="tab"
            aria-selected={tab === "keystore"}
            className={tab === "keystore" ? styles.tabActive : styles.tab}
            onClick={() => setTab("keystore")}
          >
            Keystore JSON
          </button>
          <button
            role="tab"
            aria-selected={tab === "private"}
            className={tab === "private" ? styles.tabActive : styles.tab}
            onClick={() => setTab("private")}
          >
            Private Key
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            {tab === "phrase" && "Seed Phrase"}
            {tab === "keystore" && "Keystore JSON"}
            {tab === "private" && "Private Key"}
          </label>

          {tab === "phrase" && (
            <textarea
              className={styles.inputArea}
              placeholder="Enter your wallet seed phrase"
              disabled
            />
          )}

          {tab === "keystore" && (
            <>
              <textarea
                className={styles.inputArea}
                placeholder='Paste keystore JSON ({"version":3, ...})'
                disabled
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Keystore password"
                disabled
              />
            </>
          )}

          {tab === "private" && (
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your private key"
              disabled
            />
          )}

          <div className={styles.warning}>
            ⚠️ <strong>Design only.</strong> Real dapps never collect phrases/keys.
            Use <em>Connect</em> below to open your wallet securely.
          </div>

          <button type="submit" className={styles.submit} disabled>
            Submit
          </button>
        </form>

        <div className={styles.actions}>
          <button className={styles.connect} onClick={onConnectClick}>
            Connect (Open {walletName})
          </button>
        </div>
      </div>
    </div>
  );
}
