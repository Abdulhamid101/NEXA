import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* soft top glow */}
      <span className={styles.glow} aria-hidden />

      <div className={styles.wrap}>
        {/* brand + blurb */}
        <div className={styles.brand}>
          <div className={styles.logo} aria-hidden>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 8L2 7v4l10 5 10-5V7l-10 3Z" />
            </svg>
          </div>
          <h4 className={styles.name}>On-Chain Dapps</h4>
          <p className={styles.blurb}>
            Non-custodial tools for swaps, bridges, recovery, and secure wallet ops.
          </p>

          <div className={styles.socials}>
            <a className={styles.social} href="#" aria-label="Twitter">{iconTwitter}</a>
            <a className={styles.social} href="#" aria-label="Telegram">{iconTelegram}</a>
            <a className={styles.social} href="#" aria-label="YouTube">{iconYoutube}</a>
            <a className={styles.social} href="#" aria-label="LinkedIn">{iconLinkedin}</a>
          </div>
        </div>

        {/* link columns */}
        <nav className={styles.cols} aria-label="Footer">
          <div>
            <h5 className={styles.h5}>Product</h5>
            <a href="#features">Features</a> <br />
            <a href="#tools">Tools</a> <br />
            <a href="#security">Security</a>
          </div>
          <div>
            <h5 className={styles.h5}>Developers</h5>
            <a href="#docs">Docs</a> <br />
            <a href="#api">API</a>
          </div>
          <div>
            <h5 className={styles.h5}>Company</h5>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h5 className={styles.h5}>Legal</h5>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#cookies">Cookies</a>
            <a href="#disclosures">Disclosures</a>
          </div>
        </nav>

        {/* mini subscribe */}
        <form className={styles.subscribe} onSubmit={(e)=>{e.preventDefault(); alert("Subscribed!");}}>
          <label htmlFor="f-email" className="sr-only">Email</label>
          <div className={styles.inputWrap}>
            <span className={styles.mail} aria-hidden>✉️</span>
            <input id="f-email" type="email" placeholder="Email address" required />
          </div>
          <button className={styles.btn}>Subscribe</button>
        </form>
      </div>

      {/* bottom bar */}
      <div className={styles.bar}>
        <div className={styles.barWrap}>
          <span>© {year} On-Chain Dapps</span>
          <span className={styles.made}>Made with ❤️ for the community</span>
        </div>
      </div>
    </footer>
  );
}

/* inline SVGs (no external libs) */
const iconTwitter = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.16 4.7a4.28 4.28 0 0 0 1.32 5.7 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.34 4.34 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.65 8.65 0 0 0 22.46 6z"/>
  </svg>
);

const iconTelegram = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M9.5 15.5 9 19l2.6-2.1 5.7 4.1c.4.2.9 0 1-.5l3-13c.1-.6-.4-1.1-1-1L2.8 10c-.7.2-.6 1.2.1 1.4l5.6 1.7 9.7-6.3-8.7 8.7Z"/>
  </svg>
);
const iconYoutube = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M23 12s0-3.5-.4-5.1c-.2-.8-.9-1.4-1.7-1.6C18.8 5 12 5 12 5s-6.8 0-8.9.3c-.8.2-1.5.8-1.7 1.6C1 8.5 1 12 1 12s0 3.5.4 5.1c.2.8.9 1.4 1.7 1.6C5.2 19 12 19 12 19s6.8 0 8.9-.3c.8-.2 1.5-.8 1.7-1.6.4-1.6.4-5.1.4-5.1Zm-13 3.1V8.9l5.7 3.1L10 15.1Z"/>
  </svg>
);
const iconLinkedin = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M4.5 3.5A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3.5ZM3 9h3v12H3V9Zm6 0h3v1.9h.1c.4-.8 1.6-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V21h-3v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-3V9Z"/>
  </svg>
);
