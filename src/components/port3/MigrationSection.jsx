import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, ExternalLink, Check, Loader2, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const OLD_CONTRACT = '0xb4357054c3dA8D46eD642383F03139aC7f090343';
const NEW_CONTRACT = '0xf6402bec11bd945bbd46be77e1fa5d477883f6c2';

function ContractRow({ label, address, isNew }) {
  const copy = () => { navigator.clipboard.writeText(address); toast.success('Copied!'); };
  return (
    <div className={`flex items-center justify-between py-3.5 px-4 rounded-xl border ${isNew ? 'border-black/15 bg-black/[0.02]' : 'border-black/8 bg-black/[0.01]'}`}>
      <div>
        <p className="text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider font-medium">{label}</p>
        <p className={`text-xs font-mono ${isNew ? 'text-black font-semibold' : 'text-gray-400 line-through'}`}>
          {address.slice(0, 18)}...{address.slice(-6)}
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        {isNew && <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-medium">New</span>}
        <button onClick={copy} className="p-1.5 hover:bg-black/5 rounded-lg transition-colors">
          <Copy className="w-3.5 h-3.5 text-gray-400" />
        </button>
        <a
          href={`https://bscscan.com/token/${address}`}
          target="_blank" rel="noopener noreferrer"
          className="p-1.5 hover:bg-black/5 rounded-lg transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
        </a>
      </div>
    </div>
  );
}

export default function MigrationSection({ isConnected, address, onConnect }) {
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [txHash, setTxHash] = useState('');

  const handleClaim = () => {
    if (!isConnected) { onConnect(); return; }
    setClaiming(true);
    setTimeout(() => {
      setTxHash('0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''));
      setClaiming(false);
      setClaimed(true);
    }, 3000);
  };

  return (
    <section id="migration" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Token Migration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight mb-3">
            $PORT3 Token Swap
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Due to malicious minting activities, Port3 Network has completed an official 1:1 token swap. 
            Connect your wallet to verify eligibility and claim your new PORT3 tokens on BSC.
          </p>
        </motion.div>

        {/* Gate announcement context */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 border border-black/8 rounded-2xl p-5 mb-6 space-y-3"
        >
          <p className="text-xs font-semibold text-black uppercase tracking-wider">Swap Details</p>
          <div className="space-y-2 text-[13px] text-gray-600 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-black font-semibold mt-0.5 flex-shrink-0">1.</span>
              <span>Holders at snapshot (Nov 22, 2025 — 23:20:51 UTC) who held tokens received a <strong className="text-black">1:1 swap</strong>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-black font-semibold mt-0.5 flex-shrink-0">2.</span>
              <span>Users who deposited PORT3 after the snapshot can claim from the wallet where assets were held.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-black font-semibold mt-0.5 flex-shrink-0">3.</span>
              <span>Users who withdrew from Gate after the snapshot should submit a ticket directly to Gate.io.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="https://x.com/Port3Network/status/1993186973457224041" target="_blank" rel="noopener noreferrer"
              className="text-[11px] text-gray-500 hover:text-black flex items-center gap-1 underline underline-offset-2 transition-colors">
              Official Announcement 1 <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://x.com/Port3Network/status/1992582528822391031" target="_blank" rel="noopener noreferrer"
              className="text-[11px] text-gray-500 hover:text-black flex items-center gap-1 underline underline-offset-2 transition-colors">
              Official Announcement 2 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Contract addresses */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-2 mb-6"
        >
          <ContractRow label="Old Contract (BSC) — Deprecated" address={OLD_CONTRACT} isNew={false} />
          <ContractRow label="New Contract (BSC) — $PORT3" address={NEW_CONTRACT} isNew={true} />
        </motion.div>

        {/* Migration details grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {[
            { label: 'Snapshot Date', value: 'Nov 22, 2025' },
            { label: 'Swap Ratio', value: '1 : 1' },
            { label: 'Network', value: 'BNB Chain' },
          ].map((item) => (
            <div key={item.label} className="border border-black/8 rounded-xl p-4 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">{item.label}</p>
              <p className="text-sm font-semibold text-black">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Claim panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="border border-black/10 rounded-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {claimed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-1">Migration Successful</h3>
                <p className="text-sm text-gray-500 mb-4">Your PORT3 tokens have been claimed.</p>
                <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-2">
                  <span className="text-[11px] font-mono text-gray-500">{txHash.slice(0, 22)}...{txHash.slice(-8)}</span>
                  <a href={`https://bscscan.com/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 hover:text-black transition-colors" />
                  </a>
                </div>
              </motion.div>
            ) : claiming ? (
              <motion.div
                key="claiming"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center"
              >
                <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4 text-black" />
                <p className="text-sm font-medium text-black mb-1">Processing on BNB Chain</p>
                <p className="text-xs text-gray-400">Confirming transaction, please wait...</p>
              </motion.div>
            ) : (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* Wallet Status */}
                <div className="p-5 border-b border-black/6">
                  {isConnected ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Connected Wallet</p>
                        <p className="text-sm font-mono text-black">{address.slice(0, 10)}...{address.slice(-8)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Eligible Balance</p>
                        <p className="text-sm font-semibold text-black">— PORT3</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-black/20" />
                      </div>
                      <p className="text-sm text-gray-400">No wallet connected</p>
                    </div>
                  )}
                </div>

                {/* Claimable amount */}
                {isConnected && (
                  <div className="px-5 py-4 border-b border-black/6 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Claimable Amount</p>
                      <p className="text-xl font-semibold text-black">24,500 <span className="text-sm text-gray-400 font-normal">PORT3</span></p>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-black/30" />
                  </div>
                )}

                {/* CTA */}
                <div className="p-5">
                  <button
                    onClick={handleClaim}
                    className="w-full bg-black text-white text-sm font-medium rounded-full py-3.5 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {isConnected ? 'Claim PORT3 Tokens' : 'Connect Wallet to Continue'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Security notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 flex items-start gap-2.5 p-4 bg-amber-50 border border-amber-100 rounded-xl"
        >
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-amber-700 leading-relaxed">
            <strong>Security:</strong> Never share your recovery phrase or private key. Port3 Network will never request this information. 
            Always verify you are on the correct domain and contract address before signing any transaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}