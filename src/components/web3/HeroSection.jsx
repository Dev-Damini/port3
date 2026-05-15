import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowOrb from './GlowOrb';

export default function HeroSection({ onConnect, onCheckEligibility }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <GlowOrb color="cyan" size={600} top="-10%" left="10%" delay={0} />
      <GlowOrb color="violet" size={500} top="20%" right="-5%" delay={0.3} />
      <GlowOrb color="blue" size={400} bottom="10%" left="30%" delay={0.6} />

      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[300, 450, 600].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1, rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Migration Portal Live
          </span>
          <Zap className="w-3 h-3 text-cyan-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-foreground">The Next Evolution</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent text-glow">
            of the Network
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Seamlessly migrate your tokens to the next-generation contract.
          Verified, audited, and secured by institutional-grade infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={onConnect}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/25 px-8 py-6 text-base font-semibold group"
          >
            Connect Wallet
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={onCheckEligibility}
            variant="outline"
            size="lg"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-foreground px-8 py-6 text-base"
          >
            <Shield className="w-4 h-4 mr-2" />
            Check Eligibility
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 text-xs text-muted-foreground"
        >
          {['Audited by CertiK', 'Verified on Etherscan', 'Non-custodial', 'Open Source'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}