import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header.jsx";   // <- ensure folder is "component"
import Footer from "./component/Footer/Footer.jsx";
import styles from "./app.module.css";
import { WalletModalProvider } from "./context/WalletModalContext.jsx";

export default function App() {
  return (
    <WalletModalProvider>
      <div className={styles.shell}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </WalletModalProvider>
  );
}
