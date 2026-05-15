import { motion } from 'framer-motion';
import { Check, Clock, ArrowRight, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlowOrb from './GlowOrb';

const phases = [
  {
    title: 'Snapshot Completed',
    date: 'March 2026',
    description: 'All holder balances captured at block #19,847,230. Merkle root published and verified on-chain.',
    status: 'completed',
  },
  {
    title: 'Contract Migration',
    date: 'April 2026',
    description: 'New token contract deployed, audited, and verified. Liquidity migrated to upgraded pools.',
    status: 'completed',
  },
  {
    title: 'Claim Portal Launch',
    date: 'April 2026',
    description: 'Migration portal opens for eligible wallet holders. 1:1 claim ratio activated.',
    status: 'active',
  },
  {
    title: 'Exchange Integration',
    date: 'Q2 2026',
    description: 'Top-tier CEX and DEX integrations. Automated market maker deployment on Uniswap V4.',
    status: 'upcoming',
  },
  {
    title: 'Ecosystem Expansion',
    date: 'Q3 2026',
    description: 'Staking launch, governance activation, cross-chain bridges, and developer grants program.',
    status: 'upcoming',
  },
];

export default function RoadmapSection() {
  return (
    <SectionWrapper id="roadmap">
      <GlowOrb color="cyan" size={400} top="30%" left="-5%" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Roadmap</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Migration Timeline
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent" />

          <div className="space-y-2">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-5 md:gap-8 pl-0"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  {phase.status === 'completed' ? (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                    </div>
                  ) : phase.status === 'active' ? (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`glass-panel glow-border rounded-xl p-5 md:p-6 flex-1 mb-4 ${phase.status === 'active' ? 'glow-border-strong' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md w-fit ${
                      phase.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                      phase.status === 'active' ? 'bg-cyan-500/10 text-cyan-400' :
                      'bg-white/5 text-muted-foreground'
                    }`}>
                      {phase.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}