import { motion } from 'framer-motion';
import { AlertTriangle, ExternalLink } from 'lucide-react';

export default function MigrationBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-amber-50 border-b border-amber-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2 flex-wrap text-center">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
        <span className="text-xs text-amber-800 font-medium">
          Official PORT3 Token Swap completed. Gate.io has processed the 1:1 swap. Claim new tokens below.
        </span>
        <a
          href="https://x.com/Port3Network/status/1993186973457224041"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-700 underline underline-offset-2 hover:text-amber-900 flex items-center gap-0.5"
        >
          Official Announcement <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>
    </motion.div>
  );
}