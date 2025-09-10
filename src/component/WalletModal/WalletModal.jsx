import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { wallets } from "../../wallets/wallets";
import styles from "./WalletModal.module.css";

const modalRoot = typeof document !== "undefined"
  ? document.getElementById("modal-root")
  : null;

export default function WalletModal({ isOpen, onClose, onSelectWallet }) {
  // Scroll lock body when modal opens
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  const content = (
    <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Connect Wallet</h2>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>

        <p className={styles.sub}>Open protocol for connecting wallets to dApps</p>

        <div className={styles.grid}>
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className={styles.card}
              onClick={() => onSelectWallet(wallet)}
            >
              <img
                src={wallet.logo}
                alt={wallet.name}
                className={styles.logo}
                loading="lazy"
                onError={(e) => (e.target.src = "/wallets/fallback.svg")}
              />
              <span className={styles.name}>{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(content, modalRoot);
}
