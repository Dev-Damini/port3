import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionWrapper from './SectionWrapper';

const faqs = [
  {
    q: 'Why did the token migration happen?',
    a: 'The migration was initiated to upgrade the token contract to support enhanced functionality including improved gas efficiency, cross-chain compatibility, and advanced governance features. The previous contract had limitations that prevented future protocol development.',
  },
  {
    q: 'How do I claim my migrated tokens?',
    a: 'Connect your wallet that held the original tokens during the snapshot. The portal will automatically detect your eligibility and display your claimable amount. Click "Claim Tokens" and confirm the transaction in your wallet. No additional steps are required.',
  },
  {
    q: 'What wallets are supported?',
    a: 'We support MetaMask, WalletConnect, Coinbase Wallet, Rainbow, and any WalletConnect-compatible wallet. The portal uses standard Web3 wallet connections and is compatible with all major hardware wallets through MetaMask or WalletConnect.',
  },
  {
    q: 'Is there a deadline to claim?',
    a: 'The migration claim period is open for 12 months from the portal launch date. After this period, unclaimed tokens will be directed to the protocol treasury through a governance vote. We recommend claiming as soon as possible.',
  },
  {
    q: 'Is gas required to claim?',
    a: 'Yes, a standard Ethereum transaction fee (gas) is required to process the claim. The gas cost is minimal and comparable to a standard ERC-20 transfer. We recommend claiming during periods of lower network activity for reduced fees.',
  },
  {
    q: 'How do I verify the official contracts?',
    a: 'All contract addresses are published on our official website, verified on Etherscan, and referenced in governance proposals. Always verify the contract address matches our published addresses before interacting. Links to Etherscan are provided in the Migration Dashboard section.',
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel glow-border rounded-full px-3 py-1.5 mb-4"
          >
            <HelpCircle className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-panel glow-border rounded-xl px-5 border-0"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}