import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { WalletModalContext } from "../../context/WalletModalContext.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const { openWallet } = useContext(WalletModalContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.logo} aria-hidden>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2 2 7l10 5 10-5-10-5Zm0 8L2 7v4l10 5 10-5V7l-10 3Z" />
          </svg>
        </div>
        <span>On-Chain Dapps</span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span className={menuOpen ? styles.barOpen : ""}></span>
        <span className={menuOpen ? styles.barOpen : ""}></span>
        <span className={menuOpen ? styles.barOpen : ""}></span>
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/features"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Features
        </NavLink>
        <NavLink
          to="/tools"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Tools
        </NavLink>
        <NavLink
          to="/security"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Security
        </NavLink>
        <NavLink
          to="/docs"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Docs
        </NavLink>

        {/* Wallet Button (also visible in mobile menu) */}
        <button
          className={`${styles.walletBtn} ${styles.mobileWalletBtn}`}
          onClick={() => {
            openWallet();
            closeMenu();
          }}
        >
          Connect Wallet
        </button>
      </nav>

      {/* Wallet Button for Desktop */}
      <div className={styles.actions}>
        <button className={styles.walletBtn} onClick={openWallet}>
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
