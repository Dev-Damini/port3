import { motion } from 'framer-motion';

export default function GlowOrb({ color = 'cyan', size = 400, top, left, right, bottom, delay = 0 }) {
  const colors = {
    cyan: 'rgba(6, 182, 212, 0.15)',
    violet: 'rgba(139, 92, 246, 0.12)',
    blue: 'rgba(59, 130, 246, 0.12)',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: 'easeOut' }}
      className="absolute pointer-events-none animate-glow-pulse"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
        filter: 'blur(60px)',
      }}
    />
  );
}