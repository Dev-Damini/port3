export default function Footer() {
  const socials = [
    {
      label: 'CoinMarketCap',
      href: 'https://coinmarketcap.com/currencies/port3-network/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 2.182a9.818 9.818 0 1 1 0 19.636A9.818 9.818 0 0 1 12 2.182zm2.618 5.455c-.71 0-1.527.327-2.182.873l-1.09.91-.547-.364c-.655-.436-1.309-.655-1.964-.655-1.527 0-2.618 1.09-2.618 2.727 0 1.09.546 2.073 1.527 2.727l4.145 2.836c.328.218.655.327.982.327.327 0 .655-.11.873-.327l2.836-2.727c.546-.546.873-1.31.873-2.073 0-1.527-1.09-2.727-2.618-2.836-.073 0-.144-.003-.217-.003v.585z"/>
        </svg>
      ),
    },
    {
      label: 'CoinGecko',
      href: 'https://www.coingecko.com/en/coins/port3-network',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.297 7.17a.8.8 0 0 1 .8.8.8.8 0 0 1-.8.8.8.8 0 0 1-.8-.8.8.8 0 0 1 .8-.8zm-8.19 1.44c1.28-.086 2.582.233 3.695.96.24.16.48.32.72.48.347.133.72.093 1.04-.053l1.28-.72c.48-.24.96-.133 1.307.24.32.347.4.88.133 1.28l-1.28 1.867c.213.48.373.96.373 1.467 0 2.24-2.213 4.053-4.96 4.053-2.747 0-4.96-1.813-4.96-4.053 0-2.24 2.213-4.054 4.96-4.054.24-.013.48-.013.693-.013v-.002zm-3.307 4.04a.64.64 0 0 0-.64.64.64.64 0 0 0 .64.64.64.64 0 0 0 .64-.64.64.64 0 0 0-.64-.64z"/>
        </svg>
      ),
    },
    {
      label: 'Announcement',
      href: 'https://t.me/port3network',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
        </svg>
      ),
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/JV5gT5cGCk',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    },
    {
      label: 'Twitter / X',
      href: 'https://twitter.com/Port3Network',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: 'Telegram',
      href: 'https://t.me/Port3_Network',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@Port3',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
    },
    {
      label: 'BSCScan',
      href: 'https://bscscan.com/token/0xf6402bec11bd945bbd46be77e1fa5d477883f6c2',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.39 4.653a7.576 7.576 0 0 1 7.576 7.576.756.756 0 0 1-.756.756H4.83a.756.756 0 0 1-.756-.756 7.576 7.576 0 0 1 7.536-7.576zM5.44 14.12h13.12a.378.378 0 0 1 .378.378v.756a.378.378 0 0 1-.378.378H5.44a.378.378 0 0 1-.378-.378v-.756a.378.378 0 0 1 .378-.378zm1.134 2.268h10.852a.378.378 0 0 1 .378.378v.756a.378.378 0 0 1-.378.378H6.574a.378.378 0 0 1-.378-.378v-.756a.378.378 0 0 1 .378-.378z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-6" style={{ fontFamily: "'Courier New', monospace" }}>
      <div className="max-w-5xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://media.base44.com/images/public/69fe8e85075ccaadfcada284/d5ff98ca2_Port3_Network_idh-uQoTKN_1.svg"
            alt="Port3 Network"
            className="h-8 w-auto brightness-0 invert"
          />
        </div>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-5 mb-8 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="text-white/70 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 space-y-3 text-center">
          {/* Copyright */}
          <p className="text-sm tracking-widest text-white/90 uppercase">
            ©2026 PORT3. ALL RIGHTS RESERVED.
          </p>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-1.5 text-sm tracking-widest text-white/90 uppercase flex-wrap">
            <span>MADE WITH</span>
            {[0,1,2,3,4].map((i) => (
              <HeartToggle key={i} />
            ))}
            <span>BY PORT3.IO</span>
          </div>

          {/* Address */}
          <p className="text-sm tracking-wide text-white/60 leading-relaxed">
            Office A, RAK DAO Business Centre, RAK BANK ROC Office, Ground Floor, Al Rifaa, Ras Al Khaimah, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}

function HeartToggle() {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      className="transition-transform hover:scale-125 active:scale-90"
      aria-label="heart"
    >
      {active ? (
        <svg viewBox="0 0 16 16" className="w-4 h-4 text-red-500 fill-current inline-block">
          <path d="M8 14s-6-3.89-6-7.5C2 4.02 4.02 2 6.5 2c1.35 0 2.63.6 3.5 1.55A4.495 4.495 0 0 1 13.5 2C15.98 2 18 4.02 18 6.5 18 10.11 8 14 8 14z" transform="scale(0.9) translate(0.5,0.5)"/>
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" className="w-4 h-4 text-white/70 fill-none stroke-current inline-block" strokeWidth="1.5">
          <path d="M8 13.7s-5.5-3.5-5.5-7C2.5 4.3 4.3 2.5 6.3 2.5c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5C14.3 2.5 16 4.3 16 6.7 16 10.2 8 13.7 8 13.7z" transform="scale(0.85) translate(1,1)"/>
        </svg>
      )}
    </button>
  );
}

import React, { useState } from 'react';