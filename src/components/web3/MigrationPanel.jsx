import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Copy, Check, Loader2, BadgeCheck, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import GlowOrb from './GlowOrb';
import { toast } from 'sonner';

const OLD_CONTRACT = '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12';
const NEW_CONTRACT = '0xabcdef1234567890abcdef1234567890abcdef12';

export default function MigrationPanel({ isConnected, onConnect }) {
  const [claimState, setClaimState] = useState('idle'); // idle | claiming | success
  const [txHash, setTxHash] = useState('');

  const handleClaim = () => {
    if (!isConnected) { onConnect(); return; }
    setClaimState('claiming');
    setTimeout(() => {
      setTxHash('0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''));
      setClaimState('success');
    }, 3000);
  };

  const copyContract = (addr) => {
    navigator.clipboard.writeText(addr);
    toast.success('Contract address copied');
  };

  return (
    <SectionWrapper id="migration" className="overflow-hidden">
      <GlowOrb color="violet" size={500} top="-10%" left="-5%" />
      <GlowOrb color="cyan" size={350} bottom="0" right="5%" delay={0.5} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Token Migration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Migration Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Review contract details and claim your allocated tokens from the verified migration contract.
          </motion.p>
        </div>

        {/* Contract Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <GlassCard hover={false} delay={0.1}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Old Contract</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-medium">Deprecated</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-muted-foreground truncate flex-1">{OLD_CONTRACT}</p>
              <button onClick={() => copyContract(OLD_CONTRACT)} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0">
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <a href="#" className="p-1.5 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0">
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>
          </GlassCard>

          <GlassCard hover={false} delay={0.2}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">New Contract</span>
              <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                <BadgeCheck className="w-3 h-3" /> Verified
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-cyan-400 truncate flex-1">{NEW_CONTRACT}</p>
              <button onClick={() => copyContract(NEW_CONTRACT)} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0">
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <a href="#" className="p-1.5 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Migration Details */}
        <GlassCard hover={false} className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Snapshot Date', value: 'Mar 15, 2026' },
              { label: 'Migration Ratio', value: '1:1' },
              { label: 'Token Ticker', value: 'NXS' },
              { label: 'Network', value: 'Ethereum' },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Claim Panel */}
        <GlassCard hover={false} className="glow-border-strong">
          <AnimatePresence mode="wait">
            {claimState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-cyan-500/10">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Your Claimable Amount</p>
                      <p className="text-2xl font-bold text-foreground">
                        {isConnected ? '24,500' : '---'} <span className="text-sm text-cyan-400">NXS</span>
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleClaim}
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/20 px-8 group"
                  >
                    {isConnected ? 'Claim Tokens' : 'Connect Wallet'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {claimState === 'claiming' && (
              <motion.div key="claiming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-2">Processing Migration</p>
                <p className="text-sm text-muted-foreground mb-6">Confirming transaction on Ethereum mainnet...</p>
                <Progress value={65} className="max-w-xs mx-auto h-1.5" />
              </motion.div>
            )}

            {claimState === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <p className="text-lg font-semibold text-emerald-400 mb-1">Migration Successful</p>
                <p className="text-sm text-muted-foreground mb-4">24,500 NXS tokens have been claimed to your wallet</p>
                <div className="inline-flex items-center gap-2 glass-panel rounded-lg px-4 py-2">
                  <span className="text-xs text-muted-foreground font-mono">{txHash.slice(0, 20)}...{txHash.slice(-8)}</span>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}