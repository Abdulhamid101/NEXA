// src/context/WalletModalContext.jsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import WalletModal from "../component/WalletModal/WalletModal.jsx";
import SecureConnectModal from "../component/SecureConnectModal/SecureConnectModal.jsx";

export const WalletModalContext = createContext(null);
export function useWalletModal() { return useContext(WalletModalContext); }

export function WalletModalProvider({ children }) {
  const [pickerOpen, setPickerOpen] = useState(false);   // wallet grid
  const [secureOpen, setSecureOpen] = useState(false);   // secure modal
  const [selectedWallet, setSelectedWallet] = useState(null);

  const openWallet = useCallback(() => setPickerOpen(true), []);
  const closeWallet = useCallback(() => setPickerOpen(false), []);

  const handleSelectWallet = useCallback((wallet) => {
    setSelectedWallet(wallet);
    setPickerOpen(false);   // close grid
    setSecureOpen(true);    // open secure modal
  }, []);

  const closeSecure = useCallback(() => setSecureOpen(false), []);

  // Example: safe connect (wire real MetaMask/Phantom/etc. here)
  const onConnectClick = useCallback(async () => {
    try {
      if (selectedWallet?.type === "injected" && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }
      // Add Phantom / WalletConnect flows here if needed
    } catch (e) {
      console.error("Connect error:", e);
    } finally {
      setSecureOpen(false);
    }
  }, [selectedWallet]);

  const value = useMemo(() => ({ openWallet, closeWallet }), [openWallet, closeWallet]);

  return (
    <WalletModalContext.Provider value={value}>
      {children}

      <WalletModal
        isOpen={pickerOpen}
        onClose={closeWallet}
        onSelectWallet={handleSelectWallet}
      />

      <SecureConnectModal
        isOpen={secureOpen}
        walletName={selectedWallet?.name || "Wallet"}
        onClose={closeSecure}
        onConnectClick={onConnectClick}
      />
    </WalletModalContext.Provider>
  );
}
