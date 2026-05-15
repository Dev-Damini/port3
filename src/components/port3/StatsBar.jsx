import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/web3/AnimatedCounter';

const stats = [
  { label: 'Wallets Migrated', value: 12847, suffix: '' },
  { label: 'Tokens Claimed', value: 48.2, suffix: 'M', decimals: 1 },
  { label: 'Claim Progress', value: 73.4, suffix: '%', decimals: 1 },
  { label: 'Days Remaining', value: 342, suffix: '' },
];

export default function StatsBar() {
  return (
    <div className="border-y border-black/6 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-8 px-6 text-center"
            >
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2">{s.label}</p>
              <p className="text-2xl font-semibold text-black">
                <AnimatedCounter end={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}