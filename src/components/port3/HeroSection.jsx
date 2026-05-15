import { motion } from 'framer-motion';
import OrbitalDiagram from './OrbitalDiagram';

export default function HeroSection({ onConnect }) {
  const scrollToMigration = () => {
    document.querySelector('#migration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-white">
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main orbital visual — fills the screen */}
      <div className="flex-1 flex items-center justify-center">
        <OrbitalDiagram />
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 text-center pb-16 px-6"
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-black tracking-tight mb-2">
          Port3 Network
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-6 max-w-xl mx-auto">
          Port3 Network is a unified artificial intelligence operation system designed to simplify and consolidate infrastructure components for launching decentralized AI-enabled applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={scrollToMigration}
            className="bg-black text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-gray-800 transition-colors"
          >
            Claim Migration Tokens
          </button>
          <button
            onClick={onConnect}
            className="border border-black/15 text-gray-700 text-sm font-medium rounded-full px-7 py-3 hover:border-black/40 hover:text-black transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </motion.div>


    </section>
  );
}