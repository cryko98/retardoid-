import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Copy, 
  Check, 
  TrendingUp, 
  ShieldCheck, 
  Wallet,
  MousePointer2,
  Globe,
  Sparkles,
  Flame,
  Heart,
  Send,
  Volume2
} from 'lucide-react';

const CA = "5xEpjBbnRaq1GsuVG7dmtuefkXEdq4vNREvmvd41pump";
const LOGO_URL = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/sss/photo_2026-06-09_07-51-04.jpg";
const BANNER_URL = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/sss/bann.jpg";
const X_URL = "https://x.com/gaejookonsol";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const MEME_IMAGES = [
  "https://preview.redd.it/did-this-happen-in-the-gaejook-lore-v0-xabigcjxenze1.jpeg?auto=webp&s=7762002455c53d8706030cb3cc5f1d0c012e926a",
  "https://i.redd.it/b01xlgse2uo81.jpg",
  "https://pbs.twimg.com/media/GWTeGH_a4AAkdOs.jpg",
  "https://i.redd.it/who-is-this-dog-bro-2008-201-v0-w1kevgadshpb1.png?width=512&format=png&auto=webp&s=a805b023b31c39738474d15f78bafdb46f14d1d2"
];

// Dog sounds for fun interactive barking
const BARK_WORDS = [
  "WOOF!", 
  "개죽이!", 
  "Gaejook!", 
  "SIUUU!", 
  "BARK!", 
  "JOTCHUA'S BFF!"
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [barks, setBarks] = useState(() => {
    const saved = localStorage.getItem('gaejook_barks_count');
    return saved ? parseInt(saved, 10) : 1024;
  });
  const [activeBarkWord, setActiveBarkWord] = useState<string | null>(null);
  const [barkFloatingText, setBarkFloatingText] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextCount = barks + 1;
    setBarks(nextCount);
    localStorage.setItem('gaejook_barks_count', nextCount.toString());
    
    // Choose a random word
    const randWord = BARK_WORDS[Math.floor(Math.random() * BARK_WORDS.length)];
    setActiveBarkWord(randWord);
    
    // Add floating text
    const rect = e.currentTarget.getBoundingClientRect();
    const newText = {
      id: Date.now(),
      text: randWord,
      x: Math.random() * 120 - 64, // offset range
      y: -50 - Math.random() * 50
    };
    
    setBarkFloatingText(prev => [...prev, newText]);
    setTimeout(() => {
      setBarkFloatingText(prev => prev.filter(item => item.id !== newText.id));
    }, 1500);
  };

  const GaejookDivider = () => (
    <div className="flex items-center justify-center gap-2 my-8">
      <div className="h-[3px] bg-[#EAA800] flex-grow max-w-[120px]" />
      <span className="text-2xl">🎋</span>
      <Heart className="text-[#EAA800] w-6 h-6 fill-[#EAA800] animate-pulse" />
      <span className="text-2xl">🎋</span>
      <div className="h-[3px] bg-[#EAA800] flex-grow max-w-[120px]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-sans selection:bg-[#EAA800] selection:text-white relative overflow-x-hidden pt-20">
      {/* Background Floating Logos */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-bg"
            style={{
              top: `${(i * 15 + 10) % 90}%`,
              left: `${(i * 23 + 5) % 95}%`,
              '--duration': `${6 + (i % 3) * 4}s`,
            } as any}
          >
            <img 
              src={LOGO_URL} 
              alt="Floating Gaejook" 
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#EAA800]/30 shadow-md transform rotate-12"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-2 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-white border-b-4 border-black">
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src={LOGO_URL} 
            alt="Gaejook Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="heading-bold text-lg sm:text-2xl tracking-tighter italic uppercase text-black flex items-center gap-1">
              GAEJOOK <span className="text-xs sm:text-sm text-[#EAA800]">개죽이</span>
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-black/50 -mt-1">JOTCHUA'S BEST FRIEND</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-2.5 sm:p-3 rounded-xl hover:bg-[#EAA800] hover:text-black transition-colors gaejook-shadow"
            title="X (Twitter)"
          >
            <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <button 
            onClick={copyToClipboard}
            className="bg-[#EAA800] text-black px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm uppercase border-2 border-black gaejook-shadow-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {copied ? "COPIED!" : "BUY $GAEJOOK"}
          </button>
        </div>
      </nav>

      {/* Floating Meme Image Slider Bar */}
      <div className="bg-[#EAA800] py-4 border-b-4 border-black overflow-hidden relative z-20">
        <div className="marquee-container">
          {/* Double content array to allow continuous scroll */}
          <div className="marquee-content flex gap-8">
            {[...MEME_IMAGES, ...MEME_IMAGES, ...MEME_IMAGES, ...MEME_IMAGES].map((img, idx) => (
              <div 
                key={idx} 
                className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 bg-white border-4 border-black rounded-2xl overflow-hidden shadow-md transform hover:scale-105 hover:-rotate-2 transition-transform duration-200 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gaejook meme ${idx}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mb-10 relative"
        >
          <img 
            src={BANNER_URL} 
            alt="Gaejook Banner" 
            className="w-full h-auto rounded-3xl border-4 border-black gaejook-shadow-black object-cover max-h-[500px] bg-amber-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-[#EAA800] text-black font-black uppercase text-xs sm:text-sm px-4 py-2 border-2 border-black rounded-lg shadow">
            EST. 2002 KOREAN VIRAL MEME
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl mb-4 heading-bold leading-none tracking-tight flex flex-col italic"
        >
          <span>THE ICONIC</span>
          <span className="text-[#EAA800]">MEME PUPPY</span>
        </motion.h1>
        
        <GaejookDivider />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#EAA800] text-black px-6 sm:px-10 py-2 sm:py-3 rounded-xl font-black text-2xl sm:text-5xl mb-10 inline-block gaejook-shadow-black border-2 border-black -rotate-1 cursor-pointer hover:rotate-1 transition-transform"
        >
          $GAEJOOK
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl text-lg sm:text-2xl text-black font-semibold leading-relaxed mb-12 uppercase italic px-2 sm:px-0"
        >
          Jotchua's best friend is a dog named <span className="text-[#EAA800] underline font-black">Gaejook (개죽이)</span>. Originally a mascot from a viral Korean internet meme dating back to 2002, he features alongside Jotchua in popular duo memes.
        </motion.p>

        {/* Contract Address Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-4 border-black p-5 sm:p-6 rounded-2xl w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 gaejook-shadow"
        >
          <div className="flex flex-col items-center md:items-start overflow-hidden w-full">
            <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-black/50 mb-1 flex items-center gap-1.5">
              <span>Contract Address (Solana)</span>
              <span className="bg-amber-100 text-[#EAA800] font-black px-2 py-0.5 rounded text-[9px]">SOLANA</span>
            </span>
            <code className="text-xs sm:text-xl font-mono text-black break-all w-full text-center md:text-left font-black select-all tracking-tighter">{CA}</code>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-[#EAA800] hover:bg-black hover:text-white text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black whitespace-nowrap border-4 border-black transition-all active:translate-y-1 text-sm sm:text-base gaejook-shadow-black"
          >
            {copied ? <Check className="w-5 h-5 text-green-700" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED!" : "COPY CONTRACT"}
          </button>
        </motion.div>

        {/* Fun Interactivity Section: Bark Counter */}
        <div className="w-full max-w-xl bg-white border-4 border-black p-6 rounded-2xl mb-12 gaejook-shadow relative">
          <div className="absolute -top-3.5 right-6 bg-red-500 text-white font-black text-xs px-2.5 py-1 border-2 border-black rounded-md transform rotate-3">
            PET ME!
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">🐾 INTERACTIVE LIFE OF GAEJOOK 🐾</h3>
          <p className="text-sm text-black/60 font-medium mb-4 uppercase">Give Gaejook some virtual treats or barks! Together we bark to the moon.</p>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-4xl">🐶</span>
            <div className="text-left">
              <div className="text-xs font-black text-black/50 uppercase">TOTAL BARKS GENERATED</div>
              <div className="text-3xl font-mono font-black text-[#EAA800]">{barks.toLocaleString()}</div>
            </div>
          </div>

          <div className="relative inline-block">
            <button 
              onClick={handleBarkClick}
              className="flex items-center gap-2 bg-black hover:bg-[#EAA800] text-white hover:text-black px-8 py-4 rounded-xl font-black whitespace-nowrap border-4 border-black transition-all active:scale-95 text-lg"
            >
              <Volume2 className="w-6 h-6" />
              BARK GAEJOOK
            </button>

            {/* Floating Bark Texts Container */}
            <div className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
              <AnimatePresence>
                {barkFloatingText.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 1, scale: 0.8, y: 0 }}
                    animate={{ opacity: 0, scale: 1.5, y: item.y, x: item.x }}
                    exit={{ opacity: 0 }}
                    className="absolute font-black text-[#EAA800] text-xl stroke-black drop-shadow-lg whitespace-nowrap"
                    style={{ left: '50%', top: '-20px' }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-2xl px-4 text-center">
          <a 
            href={`https://dexscreener.com/solana/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-4.5 sm:py-5 rounded-2xl font-black text-xl sm:text-2xl hover:bg-[#EAA800] hover:text-black transition-all gaejook-shadow border-2 border-white"
          >
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
            DEXSCREENER
          </a>
          <a
            href={`https://jupiter.ag/swap/SOL-${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-[#EAA800] text-black px-8 py-4.5 sm:py-5 rounded-2xl font-black text-xl sm:text-2xl hover:bg-black hover:text-white transition-all gaejook-shadow-black border-2 border-black"
          >
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
            BUY NOW
          </a>
        </div>
      </section>

      {/* Embedded Live DexScreener Chart Section */}
      <section className="bg-amber-100/50 border-t-4 border-b-4 border-black py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="bg-black text-[#EAA800] font-black text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
              LIVE CHART
            </span>
            <h2 className="text-4xl sm:text-6xl heading-bold italic leading-none text-black">GAEJOOK REAL_TIME CHART</h2>
            <p className="font-bold opacity-75 mt-2 uppercase">Monitor price actions of $GAEJOOK instantly</p>
          </div>

          <div className="w-full bg-white border-4 border-black rounded-3xl overflow-hidden gaejook-shadow p-2 bg-black h-[500px] md:h-[650px]">
            <iframe 
              src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark`}
              title="DexScreener Embed Chart"
              className="w-full h-full border-0 rounded-2xl"
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>

      {/* Story & Lore Section */}
      <section className="relative py-20 px-4 bg-black text-white overflow-hidden shadow-[inset_0_0_100px_rgba(234,168,0,0.15)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl heading-bold mb-6 leading-none italic text-[#EAA800]">
              GAEJOOK <br /> LORE 개죽이
            </h2>
            <div className="space-y-6 text-lg sm:text-xl font-semibold uppercase italic leading-relaxed text-gray-200">
              <p className="flex gap-4 items-start">
                <Sparkles className="w-8 h-8 text-[#EAA800] shrink-0 mt-1" />
                <span>Originating in 2002 from a dcinside forum post, Gaejook immediately stole hearts globally as the puppy clinging onto green bamboo shoots.</span>
              </p>
              <p className="flex gap-4 items-start">
                <Heart className="w-8 h-8 text-[#EAA800] shrink-0 mt-1" />
                <span>Best friend to Jotchua. Two legends of international internet pop-culture came together to make duo memes even more hilarious.</span>
              </p>
              <p className="flex gap-4 items-start">
                <Globe className="w-8 h-8 text-[#EAA800] shrink-0 mt-1" />
                <span>Now migrating onto the Solana blockchain, immortalizing Jotchua's cute loyal companion as the king of meme dogs.</span>
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-[#EAA800] p-6 rounded-3xl border-4 border-white gaejook-shadow-black rotate-2">
              <div className="heading-bold text-5xl text-black leading-none">2002</div>
              <div className="font-black text-black text-sm uppercase mt-1">ORIGIN MEME</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border-4 border-[#EAA800] gaejook-shadow -rotate-2">
              <div className="heading-bold text-5xl text-black leading-none">100%</div>
              <div className="font-black text-black text-sm uppercase mt-1">LOYAL PUPPY</div>
            </div>
            <div className="col-span-2 bg-zinc-950 p-6 rounded-3xl border-4 border-white flex flex-col justify-center items-center">
              <div className="heading-bold text-5xl text-[#EAA800] italic leading-none mb-1">GAEJOOK + JOTCHUA</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">BEST DUO MEME GANG</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-20 px-4 bg-white text-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl heading-bold mb-12 sm:mb-16 italic text-black">
            HOW TO GET $GAEJOOK
          </h2>
          
          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "GET PHANTOM",
                desc: "Download Phantom or your favorite wallet. Load it with SOL.",
                color: "bg-[#EAA800] text-black"
              },
              {
                icon: Globe,
                title: "FIND $GAEJOOK",
                desc: `Input the contract address: ${CA.substring(0, 5)}...${CA.substring(CA.length - 4)} on Raydium or Jupiter.`,
                color: "bg-black text-white"
              },
              {
                icon: MousePointer2,
                title: "SWAP SOL",
                desc: "Swap your SOL for $GAEJOOK. Set slippage appropriately and complete the transaction.",
                color: "bg-[#EAA800] text-black"
              },
              {
                icon: ShieldCheck,
                title: "HOLD ALIEN",
                desc: "Welcome to Jotchua and Gaejook's premium community! Hold the line and bark together.",
                color: "bg-black text-white"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${step.color} p-8 rounded-3xl border-4 border-black gaejook-shadow transition-all hover:scale-[1.03] duration-150 group relative overflow-hidden`}
              >
                <div className="absolute top-2 right-4 text-7xl font-black opacity-10 leading-none">{i+1}</div>
                <div className="mb-4">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl heading-bold mb-3 italic leading-none">{step.title}</h3>
                <p className="font-bold opacity-90 text-sm uppercase leading-normal">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-24 px-4 bg-[#EAA800] text-black border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url(${LOGO_URL})`, backgroundSize: '150px' }} />
        <div className="relative z-10">
          <img 
            src={LOGO_URL} 
            alt="Gaejook Footer Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 sm:mb-10 rounded-full border-4 border-black gaejook-shadow-black object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="text-5xl sm:text-7xl md:text-9xl heading-bold mb-4 sm:mb-6 leading-none italic tracking-tighter uppercase text-black">
            GAEJOOK
          </div>
          <p className="max-w-3xl mx-auto text-lg sm:text-2xl font-black uppercase italic mb-8 sm:mb-12 leading-tight px-4 text-black">
            Jotchua's Favorite Dog Meme. Est. 2002.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 px-6 max-w-lg mx-auto">
            <a 
              href={X_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-2xl hover:bg-white hover:text-black transition-all gaejook-shadow border-2 border-white flex items-center justify-center flex-1"
            >
              <XIcon className="w-8 h-8 mr-2" />
              <span className="font-black uppercase text-xl">X.COM</span>
            </a>
            <a 
              href={`https://dexscreener.com/solana/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-4 rounded-2xl hover:bg-black hover:text-white transition-all gaejook-shadow-black border-2 border-black text-xl font-black flex items-center justify-center gap-2 uppercase flex-1"
            >
              <TrendingUp className="w-8 h-8" />
              CHART
            </a>
          </div>
          <div className="mt-16 font-black text-xs uppercase tracking-widest opacity-80">
            © 2026 GAEJOOK. THE ORIGINAL PUPPY MEME. ALL Barks RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
