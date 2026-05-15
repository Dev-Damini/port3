import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: 'https://port3.io/about', external: true },
  { label: 'Ailiance', href: 'https://ailiance.ai/', external: true },
  { label: 'Migration', href: '#migration' },
  { label: 'Rankit', href: 'https://rankit.port3.io/', external: true },
  { label: 'Docs', href: 'https://docs.port3.io/', external: true },
];

export default function Navbar({ onConnect, isConnected, address }) {
  const [open, setOpen] = useState(false);

  const handleNav = (href, external) => {
    setOpen(false);
    if (external) { window.open(href, '_blank'); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo — official PORT3 wordmark */}
          <a href="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69fe8e85075ccaadfcada284/d5ff98ca2_Port3_Network_idh-uQoTKN_1.svg"
              alt="Port3 Network"
              className="h-7 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.external)}
                className="px-4 py-2 text-sm text-gray-500 hover:text-black transition-colors rounded-lg hover:bg-black/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Connect Wallet */}
          <div className="hidden md:block">
            {isConnected ? (
              <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-gray-600">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
              </div>
            ) : (
              <button
                onClick={onConnect}
                className="border border-black text-black text-sm font-medium rounded-full px-5 py-2 hover:bg-black hover:text-white transition-all duration-200"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.external)}
                  className="block w-full text-left px-3 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => { onConnect(); setOpen(false); }}
                  className="w-full border border-black text-black text-sm font-medium rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition-all"
                >
                  {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}