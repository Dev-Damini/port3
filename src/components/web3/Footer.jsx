import { Shield, ExternalLink } from 'lucide-react';

const footerLinks = {
  Protocol: [
    { label: 'Documentation', href: '#' },
    { label: 'Whitepaper', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Bug Bounty', href: '#' },
  ],
  Community: [
    { label: 'Twitter / X', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'Telegram', href: '#' },
    { label: 'Forum', href: '#' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
  Contracts: [
    { label: 'Old Contract (Etherscan)', href: '#' },
    { label: 'New Contract (Etherscan)', href: '#' },
    { label: 'Migration Contract', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold text-foreground tracking-tight">
                NEXUS<span className="text-cyan-400">Protocol</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Next-generation decentralized infrastructure powering secure token operations at institutional scale.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Nexus Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Built on Ethereum</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Audited by CertiK</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}