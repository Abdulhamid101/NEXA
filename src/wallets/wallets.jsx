// Logo path convention: put SVG/PNG files in /public/wallets/<slug>.svg
// If a logo is missing, the modal will show a fallback (see step 2).

export const wallets = [
  // EVM (injected / desktop / mobile)
  { name: "MetaMask", logo: "/wallets/metamask.svg", type: "injected" },
  { name: "WalletConnect", logo: "/wallets/walletconnect.svg", type: "walletconnect" },
  { name: "Coinbase Wallet", logo: "/wallets/coinbase.svg", type: "injected" },
  { name: "Rabby", logo: "/wallets/rabby.svg", type: "injected" },
  { name: "Frame", logo: "/wallets/frame.svg", type: "injected" },
  { name: "Brave Wallet", logo: "/wallets/brave.svg", type: "injected" },
  { name: "Trust Wallet", logo: "/wallets/trustwallet.svg", type: "mobile" },
  { name: "OKX Wallet", logo: "/wallets/okx.svg", type: "injected" },
  { name: "Bitget Wallet", logo: "/wallets/bitget.svg", type: "mobile" },
  { name: "Binance Web3 Wallet", logo: "/wallets/binanceweb3.svg", type: "injected" },
  { name: "Zerion Wallet", logo: "/wallets/zerion.svg", type: "mobile" },
  { name: "Rainbow", logo: "/wallets/rainbow.svg", type: "mobile" },
  { name: "Argent", logo: "/wallets/argent.svg", type: "mobile" },
  { name: "imToken", logo: "/wallets/imtoken.svg", type: "mobile" },
  { name: "TokenPocket", logo: "/wallets/tokenpocket.svg", type: "mobile" },
  { name: "MathWallet", logo: "/wallets/mathwallet.svg", type: "mobile" },
  { name: "Coin98", logo: "/wallets/coin98.svg", type: "mobile" },
  { name: "Safe (Gnosis)", logo: "/wallets/safe.svg", type: "smart" },
  { name: "Core (Avalanche)", logo: "/wallets/avaxcore.svg", type: "injected" },
  { name: "Ledger Live", logo: "/wallets/ledger.svg", type: "hardware" },
  { name: "Trezor Suite", logo: "/wallets/trezor.svg", type: "hardware" },
  { name: "Keystone", logo: "/wallets/keystone.svg", type: "hardware" },
  { name: "GridPlus Lattice", logo: "/wallets/gridplus.svg", type: "hardware" },
  { name: "OneKey", logo: "/wallets/onekey.svg", type: "hardware" },
  { name: "Tangem", logo: "/wallets/tangem.svg", type: "hardware" },
  { name: "BitBox02", logo: "/wallets/bitbox.svg", type: "hardware" },
  { name: "SafePal", logo: "/wallets/safepal.svg", type: "mobile" },
  { name: "ONTO", logo: "/wallets/onto.svg", type: "mobile" },
  { name: "Tokenary", logo: "/wallets/tokenary.svg", type: "injected" },
  { name: "Pillar", logo: "/wallets/pillar.svg", type: "mobile" },
  { name: "TP Wallet", logo: "/wallets/tpwallet.svg", type: "mobile" },
  { name: "Bitpie", logo: "/wallets/bitpie.svg", type: "mobile" },
  { name: "HyperPay", logo: "/wallets/hyperpay.svg", type: "mobile" },
  { name: "ViaWallet", logo: "/wallets/viawallet.svg", type: "mobile" },
  { name: "Midas Wallet", logo: "/wallets/midas.svg", type: "mobile" },

  // Bitcoin (software / lightning)
  { name: "Electrum", logo: "/wallets/electrum.svg", type: "bitcoin" },
  { name: "Sparrow", logo: "/wallets/sparrow.svg", type: "bitcoin" },
  { name: "Wasabi", logo: "/wallets/wasabi.svg", type: "bitcoin" },
  { name: "BlueWallet", logo: "/wallets/bluewallet.svg", type: "bitcoin" },
  { name: "Muun", logo: "/wallets/muun.svg", type: "bitcoin" },
  { name: "Phoenix", logo: "/wallets/phoenix.svg", type: "lightning" },
  { name: "Breez", logo: "/wallets/breez.svg", type: "lightning" },
  { name: "Blockstream Green", logo: "/wallets/green.svg", type: "bitcoin" },
  { name: "Mycelium", logo: "/wallets/mycelium.svg", type: "bitcoin" },
  { name: "Bitcoin Core", logo: "/wallets/bitcoincore.svg", type: "bitcoin" },

  // Multichain desktop/mobile
  { name: "Exodus", logo: "/wallets/exodus.svg", type: "desktop" },
  { name: "Atomic Wallet", logo: "/wallets/atomic.svg", type: "desktop" },
  { name: "Guarda", logo: "/wallets/guarda.svg", type: "desktop" },
  { name: "Coinomi", logo: "/wallets/coinomi.svg", type: "mobile" },
  { name: "Edge", logo: "/wallets/edge.svg", type: "mobile" },
  { name: "Ellipal", logo: "/wallets/ellipal.svg", type: "hardware" },

  // Solana
  { name: "Phantom", logo: "/wallets/phantom.svg", type: "solana" },
  { name: "Solflare", logo: "/wallets/solflare.svg", type: "solana" },
  { name: "Glow", logo: "/wallets/glow.svg", type: "solana" },
  { name: "Backpack", logo: "/wallets/backpack.svg", type: "solana" },
  { name: "Slope", logo: "/wallets/slope.svg", type: "solana" },
  { name: "Sollet", logo: "/wallets/sollet.svg", type: "solana" },

  // Cosmos ecosystem
  { name: "Keplr", logo: "/wallets/keplr.svg", type: "cosmos" },
  { name: "Leap", logo: "/wallets/leap.svg", type: "cosmos" },
  { name: "Cosmostation", logo: "/wallets/cosmostation.svg", type: "cosmos" },

  // Stellar
  { name: "Freighter", logo: "/wallets/freighter.svg", type: "stellar" },
  { name: "Lobstr", logo: "/wallets/lobstr.svg", type: "stellar" },
  { name: "Solar Wallet", logo: "/wallets/solar.svg", type: "stellar" },

  // Hedera
  { name: "HashPack", logo: "/wallets/hashpack.svg", type: "hedera" },
  { name: "Blade Wallet", logo: "/wallets/blade.svg", type: "hedera" },

  // NEAR
  { name: "Sender (NEAR)", logo: "/wallets/sender.svg", type: "near" },
  { name: "HERE Wallet", logo: "/wallets/here.svg", type: "near" },
  { name: "Meteor Wallet", logo: "/wallets/meteor.svg", type: "near" },

  // Aptos / Sui
  { name: "Petra (Aptos)", logo: "/wallets/petra.svg", type: "aptos" },
  { name: "Martian (Aptos)", logo: "/wallets/martian.svg", type: "aptos" },
  { name: "Pontem (Aptos)", logo: "/wallets/pontem.svg", type: "aptos" },
  { name: "Fewcha (Aptos)", logo: "/wallets/fewcha.svg", type: "aptos" },
  { name: "Trust Wallet (Aptos)", logo: "/wallets/trustwallet.svg", type: "aptos" },
  { name: "Sui Wallet", logo: "/wallets/sui.svg", type: "sui" },
  { name: "Surf (Sui)", logo: "/wallets/surf.svg", type: "sui" },
  { name: "Ethos (Sui)", logo: "/wallets/ethos.svg", type: "sui" },

  // Cardano
  { name: "Nami", logo: "/wallets/nami.svg", type: "cardano" },
  { name: "Eternl (CCVault)", logo: "/wallets/eternl.svg", type: "cardano" },
  { name: "Yoroi", logo: "/wallets/yoroi.svg", type: "cardano" },
  { name: "Flint", logo: "/wallets/flint.svg", type: "cardano" },
  { name: "Typhon", logo: "/wallets/typhon.svg", type: "cardano" },

  // Polkadot / Substrate
  { name: "Polkadot.js", logo: "/wallets/polkadotjs.svg", type: "polkadot" },
  { name: "Talisman", logo: "/wallets/talisman.svg", type: "polkadot" },
  { name: "Nova Wallet", logo: "/wallets/nova.svg", type: "polkadot" },

  // Tron
  { name: "TronLink", logo: "/wallets/tronlink.svg", type: "tron" },
  { name: "Klever", logo: "/wallets/klever.svg", type: "tron" },

  // Tezos
  { name: "Temple", logo: "/wallets/temple.svg", type: "tezos" },
  { name: "Kukai", logo: "/wallets/kukai.svg", type: "tezos" },

  // Algorand
  { name: "Pera Wallet", logo: "/wallets/pera.svg", type: "algorand" },
  { name: "Defly", logo: "/wallets/defly.svg", type: "algorand" },

  // Thorchain / Multichain
  { name: "XDEFI", logo: "/wallets/xdefi.svg", type: "injected" },
  { name: "Trustee Wallet", logo: "/wallets/trustee.svg", type: "mobile" },

  // Monero
  { name: "Monero GUI", logo: "/wallets/monerogui.svg", type: "monero" },
  { name: "MyMonero", logo: "/wallets/mymonero.svg", type: "monero" },

  // Ripple/XRP
  { name: "Xumm", logo: "/wallets/xumm.svg", type: "xrp" },

  // EOS / WAX
  { name: "Anchor (EOSIO)", logo: "/wallets/anchor.svg", type: "eosio" },
  { name: "WAX Cloud Wallet", logo: "/wallets/wax.svg", type: "eosio" },

  // Terra
  { name: "Terra Station", logo: "/wallets/terrastation.svg", type: "terra" },

  // Harmony / Celo / Kava / Cronos / Arbitrum / Optimism
  { name: "Harmony One", logo: "/wallets/harmony.svg", type: "evm" },
  { name: "Celo Wallet", logo: "/wallets/celo.svg", type: "evm" },
  { name: "Kava Wallet", logo: "/wallets/kava.svg", type: "evm" },
  { name: "Cronos Wallet", logo: "/wallets/cronos.svg", type: "evm" },
  { name: "Arbitrum One (Injected)", logo: "/wallets/arbitrum.svg", type: "evm" },
  { name: "Optimism (Injected)", logo: "/wallets/optimism.svg", type: "evm" },

  // More desktop/mobile multichain to reach 100
  { name: "Huobi Wallet", logo: "/wallets/huobi.svg", type: "mobile" },
  { name: "CoinUs", logo: "/wallets/coinus.svg", type: "mobile" },
  { name: "Freewallet", logo: "/wallets/freewallet.svg", type: "mobile" },
  { name: "BitKeep (Legacy)", logo: "/wallets/bitkeep.svg", type: "mobile" },
  { name: "Atomex", logo: "/wallets/atomex.svg", type: "desktop" },
  { name: "Unstoppable Wallet", logo: "/wallets/unstoppable.svg", type: "mobile" },
  { name: "Aloha Browser Wallet", logo: "/wallets/aloha.svg", type: "injected" },
  { name: "Kraken Wallet (Beta)", logo: "/wallets/kraken.svg", type: "mobile" },
  { name: "Opera Crypto Wallet", logo: "/wallets/opera.svg", type: "injected" },
  { name: "Mask Network", logo: "/wallets/mask.svg", type: "injected" },
  { name: "Sequence", logo: "/wallets/sequence.svg", type: "smart" },
  { name: "Slope (EVM)", logo: "/wallets/slopeevm.svg", type: "injected" },
  { name: "Saturn Wallet", logo: "/wallets/saturn.svg", type: "injected" },
  { name: "Derive Finance", logo: "/wallets/derive.svg", type: "mobile" },
  { name: "Ledger (Injected)", logo: "/wallets/ledgerliveinjected.svg", type: "injected" },
  { name: "Kriptomat", logo: "/wallets/kriptomat.svg", type: "mobile" },
  { name: "PeakDeFi", logo: "/wallets/peakdefi.svg", type: "mobile" },
  { name: "Ownbit", logo: "/wallets/ownbit.svg", type: "mobile" },
  { name: "Guarda Mobile", logo: "/wallets/guardamobile.svg", type: "mobile" },
  { name: "MathWallet Browser", logo: "/wallets/mathbrowser.svg", type: "injected" }
];
