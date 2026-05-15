import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={`glass-panel glow-border rounded-xl p-6 transition-all duration-300 ${hover ? 'hover:glow-border-strong' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}