import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { Activity, Users, Coins, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Migration Status', value: 'Active', icon: Activity, isText: true, color: 'text-emerald-400' },
  { label: 'Wallets Migrated', value: 12847, icon: Users, suffix: '' },
  { label: 'Tokens Claimed', value: 48.2, icon: Coins, suffix: 'M', decimals: 1 },
  { label: 'Claim Progress', value: 73.4, icon: BarChart3, suffix: '%', decimals: 1 },
];

export default function MigrationStatusBar() {
  return (
    <div className="relative z-10 -mt-10 mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel glow-border-strong rounded-2xl p-1"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="px-4 md:px-6 py-5 md:py-6 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <stat.icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </div>
                {stat.isText ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className={`text-lg md:text-xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ) : (
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}