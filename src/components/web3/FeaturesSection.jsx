import { motion } from 'framer-motion';
import { Network, Brain, ShieldCheck, GitBranch, FileCheck, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import GlowOrb from './GlowOrb';

const features = [
  {
    icon: Network,
    title: 'Cross-chain Infrastructure',
    description: 'Multi-chain bridge architecture enabling seamless token operations across EVM-compatible networks.',
  },
  {
    icon: Brain,
    title: 'AI-powered Analytics',
    description: 'Machine learning models monitor migration health, detect anomalies, and optimize gas execution.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Migration Architecture',
    description: 'Multi-sig governance with time-locked contracts and cryptographic proof verification at every step.',
  },
  {
    icon: GitBranch,
    title: 'Decentralized Execution',
    description: 'Distributed validator network ensures censorship-resistant claim processing with zero downtime.',
  },
  {
    icon: FileCheck,
    title: 'Verified Smart Contracts',
    description: 'All contracts are verified on-chain, audited by leading firms, and open-source for community review.',
  },
  {
    icon: Zap,
    title: 'Fast Settlement Layer',
    description: 'Optimistic execution with sub-minute finality. Claims are processed in a single transaction.',
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="overflow-hidden">
      <GlowOrb color="blue" size={500} top="20%" left="-10%" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <Zap className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Protocol Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Built for Institutional Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Enterprise-grade infrastructure powering the next generation of decentralized token operations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <GlassCard key={feature.title} delay={i * 0.08} className="group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center mb-4 border border-cyan-500/10 group-hover:border-cyan-500/25 transition-colors">
                <feature.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}