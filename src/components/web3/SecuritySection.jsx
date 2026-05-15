import { motion } from 'framer-motion';
import { Shield, FileCheck, AlertTriangle, Eye, Link2, Lock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import GlowOrb from './GlowOrb';

const securityItems = [
  {
    icon: FileCheck,
    title: 'Contract Verification',
    description: 'All smart contracts are verified and published on Etherscan with full source code visibility.',
  },
  {
    icon: Shield,
    title: 'Audited Contracts',
    description: 'Comprehensive security audits conducted by CertiK and Trail of Bits. Zero critical findings.',
  },
  {
    icon: AlertTriangle,
    title: 'Anti-phishing Protection',
    description: 'Official domain verification badges. We will never DM you first or ask for private keys.',
  },
  {
    icon: Eye,
    title: 'Explorer Verification',
    description: 'Verify all contract addresses and transactions directly on Etherscan before interacting.',
  },
  {
    icon: Link2,
    title: 'Official Communication',
    description: 'All announcements are made through verified Twitter, Discord, and on-chain governance only.',
  },
  {
    icon: Lock,
    title: 'Wallet Safety',
    description: 'This portal uses standard wallet connections only. We never request seed phrases or private keys.',
  },
];

export default function SecuritySection() {
  return (
    <SectionWrapper id="security" className="overflow-hidden">
      <GlowOrb color="cyan" size={400} top="10%" right="-5%" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <Shield className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Security & Trust</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Security First Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Your security is our highest priority. Every component is built with institutional-grade protection.
          </motion.p>
        </div>

        {/* Important Security Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-5 rounded-xl bg-amber-500/5 border border-amber-500/15"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-amber-400 mb-1">Important Security Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Never share your recovery phrase, private key, or wallet backup with anyone — including anyone claiming to represent Nexus Protocol. 
                Our team will never contact you first requesting any sensitive information. Always verify contract addresses on Etherscan before signing any transaction.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityItems.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.08}>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/10">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}