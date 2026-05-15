import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check } from 'lucide-react';

const WALLETS = [
  { name: 'MetaMask', emoji: '🦊', desc: 'Connect using browser extension' },
  { name: 'WalletConnect', emoji: '🔗', desc: 'Scan with your mobile wallet' },
  { name: 'Coinbase Wallet', emoji: '🔵', desc: 'Connect with Coinbase' },
  { name: 'Trust Wallet', emoji: '🛡️', desc: 'Connect with Trust Wallet' },
];

export default function WalletModal({ isOpen, onClose, onConnected }) {
  const [connecting, setConnecting] = useState(null);
  const [done, setDone] = useState(false);

  const connect = (wallet) => {
    setConnecting(wallet);
    setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        const addr = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
        onConnected(addr);
        setConnecting(null);
        setDone(false);
        onClose();
      }, 900);
    }, 2200);
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
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/10 border border-black/8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/6">
            <h3 className="text-sm font-semibold text-black">Connect Wallet</h3>
            <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Content */}
          {connecting ? (
            <div className="py-12 text-center px-6">
              {done ? (
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring' }}>
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-black">Connected</p>
                </motion.div>
              ) : (
                <>
                  <Loader2 className="w-9 h-9 animate-spin mx-auto mb-3 text-black" />
                  <p className="text-sm font-medium text-black mb-1">Connecting to {connecting}</p>
                  <p className="text-xs text-gray-400">Approve connection in your wallet</p>
                </>
              )}
            </div>
          ) : (
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
          )}

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