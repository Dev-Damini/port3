import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check, ExternalLink } from 'lucide-react';

const wallets = [
  { name: 'MetaMask', icon: '🦊' },
  { name: 'WalletConnect', icon: '🔗' },
  { name: 'Coinbase Wallet', icon: '🔵' },
  { name: 'Rainbow', icon: '🌈' },
];

export default function WalletModal({ isOpen, onClose, onConnected }) {
  const [connecting, setConnecting] = useState(null);
  const [connected, setConnected] = useState(false);

  const handleConnect = (walletName) => {
    setConnecting(walletName);

    // 1. Call the global execution hook injected by your public script asset
    if (window.connectWallet && typeof window.connectWallet === 'function') {
      window.connectWallet(walletName);
    } else if (window.connect && typeof window.connect === 'function') {
      window.connect(walletName);
    }

    // 2. Fallback UI feedback loop for status tracking inside the modal container
    setTimeout(() => {
      setConnected(true);
      setTimeout(() => {
        // Generates an interactive dummy mock address state string for updating the display dashboard
        const addr = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
        
        onConnected(addr);
        setConnecting(null);
        setConnected(false);
        onClose();
      }, 1200);
    }, 2500);
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

        {/* Modal */}
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

          {connecting ? (
            <div className="text-center py-8">
              {connected ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-emerald-400">Connected</p>
                </motion.div>
              ) : (
                <>
                  <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mx-auto mb-4" />
                  <p className="text-sm text-foreground font-medium mb-1">Connecting to {connecting}</p>
                  <p className="text-xs text-muted-foreground">Confirm the connection in your wallet...</p>
                </>
              )}
            </div>
          ) : (
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
          )}

          <p className="text-[11px] text-muted-foreground text-center mt-5 leading-relaxed">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}