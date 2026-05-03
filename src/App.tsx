import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Rocket, 
  Copy, 
  Check, 
  TrendingUp, 
  ShieldCheck, 
  Wallet,
  MousePointer2,
  Flag,
  Globe,
  Users
} from 'lucide-react';

const CA = "Gddas2JVfZ3YXjWoNmDtFJGBvtM4EqCLbL4hFjPMpump";
const LOGO_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/trolllogo.jpg?v=1777826440";
const BANNER_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/banner_-_2026-05-03T184625.603.png?v=1777826449";
const TELEGRAM_URL = "https://t.me/maketrollgreatagainmtga";

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const StarDivider = () => (
    <div className="flex items-center justify-center gap-2 my-8">
      <div className="h-[2px] bg-red-600 flex-grow max-w-[100px]" />
      <span className="text-red-600 text-xl">★ ★ ★ ★ ★</span>
      <div className="h-[2px] bg-red-600 flex-grow max-w-[100px]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-600 selection:text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 flex justify-between items-center bg-white border-b-4 border-black">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="MTGA Logo" 
            className="w-12 h-12 rounded-full border-2 border-black"
            referrerPolicy="no-referrer"
          />
          <span className="heading-bold text-2xl tracking-tighter hidden sm:block">MAKE TROLL GREAT AGAIN</span>
          <span className="heading-bold text-2xl tracking-tighter sm:hidden">$MTGA</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 rounded-lg hover:bg-red-600 transition-colors troll-shadow"
            title="Telegram"
          >
            <Send className="w-6 h-6" />
          </a>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-black text-sm uppercase border-2 border-black troll-shadow-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            BUY $MTGA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12"
        >
          <img 
            src={BANNER_URL} 
            alt="Make Troll Great Again Banner" 
            className="w-full h-auto rounded-3xl troll-border troll-shadow"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl mb-6 heading-bold leading-none tracking-tight flex flex-col"
        >
          <span>MAKE TROLL</span>
          <span className="text-red-600">GREAT AGAIN</span>
        </motion.h1>
        
        <StarDivider />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-red-600 text-white px-10 py-3 rounded-lg font-black text-3xl sm:text-5xl mb-10 inline-block troll-shadow-black border-2 border-black -rotate-1"
        >
          $MTGA
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl text-xl sm:text-3xl text-black font-bold leading-tight mb-12 uppercase italic"
        >
          "Once a symbol of internet culture, Troll faded into the background as new trends took over—but legends never truly disappear. <span className="text-red-600">With $MTGA</span>, a new generation has the chance to bring Troll back to the top, reignite its momentum, and <span className="text-red-600">Make Troll Great Again.</span>"
        </motion.p>

        {/* Contract Address Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-4 border-black p-6 rounded-2xl w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 troll-shadow"
        >
          <div className="flex flex-col items-center md:items-start overflow-hidden w-full">
            <span className="text-xs uppercase font-black tracking-widest text-black/50 mb-1">Contract Address (Solana)</span>
            <code className="text-lg sm:text-2xl font-mono text-black break-all w-full text-center md:text-left font-black select-all tracking-tighter">{CA}</code>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-red-600 hover:bg-black text-white px-8 py-4 rounded-xl font-black whitespace-nowrap border-4 border-black transition-all active:translate-y-1"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED!" : "COPY CONTRACT"}
          </button>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-2xl px-4 text-center">
          <button className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl font-black text-2xl hover:bg-red-600 transition-colors troll-shadow border-2 border-white">
            <TrendingUp className="w-8 h-8" />
            LIVE CHART
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-2xl hover:bg-black transition-colors troll-shadow-black border-2 border-black">
            <Rocket className="w-8 h-8" />
            PUMP.FUN
          </button>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-24 px-4 bg-black text-white overflow-hidden shadow-[inset_0_0_100px_rgba(255,0,0,0.2)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl heading-bold mb-8 leading-none italic text-red-600">THE CAMPAIGN</h2>
            <div className="space-y-8 text-xl md:text-2xl font-bold leading-tight uppercase italic">
              <p className="flex gap-4 items-start">
                <Flag className="w-10 h-10 text-white shrink-0 mt-1" />
                We are tired of the low-energy memes. We are bringing back the high-energy, legendary trolling that built the internet.
              </p>
              <p className="flex gap-4 items-start">
                <Users className="w-10 h-10 text-white shrink-0 mt-1" />
                Join the largest army of trolls ever assembled on the Solana blockchain.
              </p>
              <p className="flex gap-4 items-start">
                <Globe className="w-10 h-10 text-white shrink-0 mt-1" />
                Momentum is building. The tide is turning. Legends are rising.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-600 p-8 rounded-3xl border-4 border-white troll-shadow-black rotate-2">
              <div className="heading-bold text-6xl text-white">#1</div>
              <div className="font-black text-white text-xl uppercase">LEGENDARY MEME</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border-4 border-red-600 troll-shadow -rotate-2">
              <div className="heading-bold text-6xl text-black">100%</div>
              <div className="font-black text-black text-xl uppercase">MOMENTUM</div>
            </div>
            <div className="col-span-2 bg-red-600 p-10 rounded-3xl border-4 border-black troll-shadow-black">
              <div className="heading-bold text-7xl text-white text-center italic">MAX ENERGY</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join The Movement */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl heading-bold text-center mb-20">JOIN THE MOVEMENT</h2>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "PREPARE WALLET",
                desc: "Get Phantom or Solflare ready. Load it with SOL.",
                color: "bg-red-600 text-white"
              },
              {
                icon: Globe,
                title: "GO TO PUMP",
                desc: "Head over to Pump.fun and search for MTFA.",
                color: "bg-black text-white"
              },
              {
                icon: MousePointer2,
                title: "SECURE POSITION",
                desc: "Swap your SOL for $MTGA before momentum explodes.",
                color: "bg-red-600 text-white"
              },
              {
                icon: ShieldCheck,
                title: "HOLD THE LINE",
                desc: "Keep your legends strong. Never sell. MTGA!",
                color: "bg-black text-white"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${step.color} p-10 rounded-3xl border-4 border-black troll-shadow transition-all hover:scale-105 group relative overflow-hidden`}
              >
                <div className="absolute top-2 right-4 text-7xl font-black opacity-10 leading-none">{i+1}</div>
                <div className="mb-6">
                  <step.icon className="w-12 h-12" />
                </div>
                <h3 className="text-3xl heading-bold mb-4 italic leading-none">{step.title}</h3>
                <p className="font-bold opacity-90 text-lg uppercase leading-tight">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 bg-red-600 text-white border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url(${LOGO_URL})`, backgroundSize: '150px' }} />
        <div className="relative z-10">
          <img 
            src={LOGO_URL} 
            alt="MTGA Footer Logo" 
            className="w-32 h-32 mx-auto mb-10 rounded-full border-4 border-black troll-shadow-black"
            referrerPolicy="no-referrer"
          />
          <div className="text-6xl md:text-9xl heading-bold mb-8 leading-none italic tracking-tighter">MAKE TROLL GREAT AGAIN</div>
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl font-black uppercase italic mb-12 leading-none">
            LEGENDS NEVER DIE. THE TROLL IS BACK. $MTGA TO THE MOON!
          </p>
          <div className="flex justify-center gap-10">
            <a 
              href={TELEGRAM_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-6 rounded-2xl hover:bg-white hover:text-black transition-all troll-shadow border-2 border-white"
            >
              <Send className="w-10 h-10" />
            </a>
            <a href="#" className="bg-white text-black p-6 rounded-2xl hover:bg-black hover:text-white transition-all troll-shadow-black border-2 border-black text-3xl font-black flex items-center gap-2 uppercase">
              <TrendingUp className="w-10 h-10" />
              CHART
            </a>
          </div>
          <div className="mt-20 font-black text-sm uppercase tracking-widest opacity-80">
            © 2026 MAKE TROLL GREAT AGAIN. NO RIGHTS RESERVED. JUST MEMES.
          </div>
        </div>
      </footer>
    </div>
  );
}
