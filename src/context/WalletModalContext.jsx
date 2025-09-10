import React, { createContext, useState, useCallback, useMemo } from "react";
import WalletModal from "../component/WalletModal/WalletModal.jsx"; 

// ✅ Create and export the context
export const WalletModalContext = createContext({
  openWallet: () => {},
  closeWallet: () => {},
});

// ✅ Provider component
export function WalletModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal
  const openWallet = useCallback(() => setIsOpen(true), []);

  // Close modal
  const closeWallet = useCallback(() => setIsOpen(false), []);

  // Handle wallet selection
  const handleSelectWallet = useCallback((wallet) => {
    console.log("Selected wallet:", wallet?.name);
    setIsOpen(false); // close after selection
  }, []);

  // Memoized context value
  const value = useMemo(
    () => ({ openWallet, closeWallet }),
    [openWallet, closeWallet]
  );

  return (
    <WalletModalContext.Provider value={value}>
      {children}

      {/* Render the actual Wallet Modal */}
      <WalletModal
        isOpen={isOpen}
        onClose={closeWallet}
        onSelectWallet={handleSelectWallet}
      />
    </WalletModalContext.Provider>
  );
}
