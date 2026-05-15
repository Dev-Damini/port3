import { useState } from 'react';
import Navbar from '@/components/port3/Navbar';
import MigrationBanner from '@/components/port3/MigrationBanner';
import HeroSection from '@/components/port3/HeroSection';
import StatsBar from '@/components/port3/StatsBar';
import MigrationSection from '@/components/port3/MigrationSection';
import Footer from '@/components/port3/Footer';
import WalletModal from '@/components/port3/WalletModal';

// Force browser tab title
document.title = "Port3 Migrate";

export default function Home() {
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    if (isConnected) return;
    setWalletModalOpen(true);
  };

  const handleConnected = (addr) => {
    setAddress(addr);
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <MigrationBanner />
        <Navbar onConnect={handleConnect} isConnected={isConnected} address={address} />
      </div>
      <main>
        <HeroSection onConnect={handleConnect} />
        <StatsBar />
        <MigrationSection isConnected={isConnected} address={address} onConnect={handleConnect} />
      </main>
      <Footer />
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onConnected={handleConnected}
      />
    </div>
  );
}