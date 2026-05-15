import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const migrationData = [
  { day: 'Day 1', wallets: 420, tokens: 1.2 },
  { day: 'Day 2', wallets: 1340, tokens: 4.8 },
  { day: 'Day 3', wallets: 2890, tokens: 9.3 },
  { day: 'Day 4', wallets: 4520, tokens: 15.7 },
  { day: 'Day 5', wallets: 6100, tokens: 22.1 },
  { day: 'Day 6', wallets: 7800, tokens: 28.9 },
  { day: 'Day 7', wallets: 9200, tokens: 34.5 },
  { day: 'Day 8', wallets: 10100, tokens: 38.8 },
  { day: 'Day 9', wallets: 11200, tokens: 42.1 },
  { day: 'Day 10', wallets: 12847, tokens: 48.2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel glow-border rounded-lg p-3 text-xs">
        <p className="text-foreground font-medium mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-muted-foreground">
            {p.name}: <span className="text-cyan-400 font-mono">{p.value.toLocaleString()}{p.name === 'tokens' ? 'M' : ''}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function AnalyticsChart() {
  return (
    <SectionWrapper className="overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <TrendingUp className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Analytics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Migration Analytics
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <GlassCard hover={false}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Wallets Migrated</h3>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">+18.2%</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={migrationData}>
                  <defs>
                    <linearGradient id="walletsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="wallets" name="wallets" stroke="#06b6d4" fill="url(#walletsGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Tokens Claimed (M)</h3>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">+14.5%</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={migrationData}>
                  <defs>
                    <linearGradient id="tokensGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="tokens" name="tokens" stroke="#8b5cf6" fill="url(#tokensGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}