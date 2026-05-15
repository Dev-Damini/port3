import { motion } from 'framer-motion';
import { Layers, Vote, AppWindow, Code2, BarChart3 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import GlowOrb from './GlowOrb';

const ecosystemItems = [
  {
    icon: Layers,
    title: 'Staking',
    description: 'Lock NXS tokens to earn protocol rewards and participate in network security.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Vote,
    title: 'Governance',
    description: 'Vote on protocol proposals, parameter changes, and treasury allocations.',
    status: 'Active',
    statusColor: 'text-cyan-400 bg-cyan-500/10',
  },
  {
    icon: AppWindow,
    title: 'Ecosystem dApps',
    description: 'A growing suite of decentralized applications built on Nexus infrastructure.',
    status: 'Expanding',
    statusColor: 'text-violet-400 bg-violet-500/10',
  },
  {
    icon: Code2,
    title: 'Developer APIs',
    description: 'Comprehensive SDKs and REST APIs for building on the Nexus network.',
    status: 'Beta',
    statusColor: 'text-amber-400 bg-amber-500/10',
  },
  {
    icon: BarChart3,
    title: 'Analytics Layer',
    description: 'Real-time on-chain analytics, dashboards, and data feeds for network intelligence.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10',
  },
];

export default function EcosystemSection() {
  return (
    <SectionWrapper id="ecosystem" className="overflow-hidden">
      <GlowOrb color="violet" size={450} top="10%" right="-8%" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <Layers className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            The Nexus Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            A comprehensive suite of tools and services powering the decentralized economy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ecosystemItems.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.08} className="group relative">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 transition-all duration-500 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center border border-cyan-500/10 group-hover:border-cyan-500/25 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}