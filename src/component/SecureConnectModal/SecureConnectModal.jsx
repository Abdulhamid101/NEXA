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
  const [address, setAddress] = useState("");
  const isEvmAddress = (v) => /^0x[a-fA-F0-9]{40}$/.test(v);

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
    <div
      className={styles.overlay}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Connect {walletName}</h3>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <p className={styles.note}>
          <strong>NB:</strong> All information is end-to-end encrypted. We do
          not share data and activity sessions with any other company.
        </p>

        <div className={styles.tabs} role="tablist">
          <button
            role="tab"
            aria-selected={tab === "address"}
            className={tab === "address" ? styles.tabActive : styles.tab}
            onClick={() => setTab("address")}
          >
            Address
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
            {tab === "address" && "Wallet Address"}
            {tab === "phrase" && "Seed Phrase"}
            {tab === "keystore" && "Keystore JSON"}
            {tab === "private" && "Private Key"}
          </label>

          {tab === "address" && (
            <input
              className={styles.input}
              type="text"
              placeholder="Paste your public wallet address (e.g. 0x...)"
              value={address}
              onChange={(e) => setAddress(e.target.value.trim())}
            />
          )}

          {tab === "keystore" && (
            <>
              <textarea
                className={styles.inputArea}
                placeholder='Paste keystore JSON ({"version":3, ...})'
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Keystore password"
              />
            </>
          )}

          {tab === "private" && (
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your private key"
            />
          )}

          {tab === "address" && address && !isEvmAddress(address) && (
            <div className={styles.warning}>
              This doesn’t look like a valid EVM address (0x + 40 hex chars).
            </div>
          )}

          <button type="submit" className={styles.submit}>
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
