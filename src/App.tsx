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
  Gamepad2,
  PartyPopper,
  Zap
} from 'lucide-react';

const CA = "dsaF5F9WaeVWw3GtyoXMAZQ9y6qrMARPDC165N4pump";
const LOGO_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/pflogo.jpg?v=1776876165";

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-pump-green selection:text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b-4 border-black">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="MPFA Logo" 
            className="w-12 h-12 rounded-lg pump-border"
            referrerPolicy="no-referrer"
          />
          <span className="font-meme text-2xl tracking-tighter uppercase hidden sm:block">MAKE PUMP FUN AGAIN</span>
          <span className="font-meme text-2xl tracking-tighter uppercase sm:hidden">$MPFA</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://t.me/makepumpfunagain" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 rounded-lg hover:scale-110 transition-transform pump-shadow-green"
            title="Telegram"
          >
            <Send className="w-6 h-6" />
          </a>
          <button className="bg-[#24d182] text-black px-6 py-3 rounded-lg font-black text-sm uppercase pump-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_#000000] transition-all border-4 border-black">
            BUY $MPFA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="relative mb-10 w-full max-w-sm"
        >
          <div className="absolute inset-0 bg-[#24d182]/20 blur-[120px] rounded-full" />
          <img 
            src={LOGO_URL} 
            alt="Logo" 
            className="w-full h-auto relative z-10 floating rounded-3xl border-8 border-black pump-shadow"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl sm:text-8xl md:text-[10rem] mb-6 font-meme leading-[0.8] tracking-tighter uppercase italic"
        >
          MAKE PUMP <span className="text-[#24d182]">FUN</span> AGAIN
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black text-[#24d182] px-8 py-2 rounded-full font-black text-2xl sm:text-4xl mb-10 inline-block rotate-2 pump-shadow"
        >
          $MPFA
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-xl sm:text-3xl text-black font-bold leading-tight mb-12"
        >
          The mission is simple: Make pump.fun memecoins fun again! 
          The whole world is joining together to laugh, trade, and vibe with $MPFA. 🌍✨
        </motion.p>

        {/* CA Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-4 border-black p-6 rounded-2xl w-full max-w-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 pump-shadow-green"
        >
          <div className="flex flex-col items-center md:items-start overflow-hidden w-full">
            <span className="text-xs uppercase font-black tracking-widest text-black/50 mb-1">Contract Address</span>
            <code className="text-lg sm:text-2xl font-mono text-black break-all w-full text-center md:text-left font-black select-all">{CA}</code>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-[#24d182] hover:bg-[#1fbc73] text-black px-8 py-4 rounded-xl font-black whitespace-nowrap border-4 border-black transition-all active:translate-y-1"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED!" : "COPY CA"}
          </button>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-2xl px-4">
          <button className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform pump-shadow-green">
            <TrendingUp className="w-8 h-8" />
            LIVE CHART
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 bg-[#24d182] text-black px-8 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform pump-shadow border-4 border-black">
            <Rocket className="w-8 h-8" />
            PUMP.FUN
          </button>
        </div>
      </section>

      {/* Fun Mission Section */}
      <section className="relative py-24 px-4 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-meme mb-8 leading-none uppercase italic text-[#24d182]">THE FUN MANIFESTO</h2>
            <div className="space-y-6 text-xl md:text-2xl font-bold leading-relaxed">
              <p className="flex gap-4">
                <PartyPopper className="w-8 h-8 text-[#24d182] shrink-0" />
                No more boring charts and serious talk. We're here for the pure, unadulterated joy of memecoins.
              </p>
              <p className="flex gap-4">
                <Gamepad2 className="w-8 h-8 text-[#24d182] shrink-0" />
                Community games, laughter, and high-energy vibes are our core utility.
              </p>
              <p className="flex gap-4">
                <Zap className="w-8 h-8 text-[#24d182] shrink-0" />
                MPFA isn't just a coin; it's a movement to reclaim the "MEME" in memecoins.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#24d182] p-8 rounded-3xl pump-shadow-green border-4 border-white rotate-3">
              <div className="font-meme text-5xl text-black">100%</div>
              <div className="font-black text-black text-lg uppercase">PURE FUN</div>
            </div>
            <div className="bg-white p-8 rounded-3xl pump-shadow border-4 border-[#24d182] -rotate-3">
              <div className="font-meme text-5xl text-black">NO</div>
              <div className="font-black text-black text-lg uppercase">BORING VIBES</div>
            </div>
            <div className="col-span-2 bg-[#24d182] p-8 rounded-3xl pump-shadow-green border-4 border-white">
              <div className="font-meme text-5xl text-black text-center">WORLDWIDE</div>
              <div className="font-black text-black text-lg uppercase text-center">ENTERTAINMENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Fun */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-meme text-center mb-20 uppercase italic tracking-tighter">JOIN THE MOKAH!</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "PREPARE WALLET",
                desc: "Get Phantom or any Sol wallet ready for action.",
                color: "bg-[#24d182]"
              },
              {
                icon: Rocket,
                title: "LOAD $SOL",
                desc: "Send some SOL to your wallet from your exchange.",
                color: "bg-black text-white"
              },
              {
                icon: MousePointer2,
                title: "VISIT PUMP.FUN",
                desc: "Search for our CA and prepare for the pump.",
                color: "bg-[#24d182]"
              },
              {
                icon: ShieldCheck,
                title: "APE & SMILE",
                desc: "Grab $MPFA and enjoy the ride with the world!",
                color: "bg-black text-white"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${step.color} p-8 rounded-3xl border-4 border-black pump-shadow transition-transform hover:-translate-y-2 group`}
              >
                <div className="mb-6 group-hover:scale-125 transition-transform duration-300">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black mb-3 italic uppercase leading-none">{step.title}</h3>
                <p className="font-bold opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-[#24d182] text-black border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: `url(${LOGO_URL})`, backgroundSize: '200px' }} />
        <div className="relative z-10">
          <img 
            src={LOGO_URL} 
            alt="MPFA" 
            className="w-24 h-24 mx-auto mb-10 rounded-2xl border-4 border-black pump-shadow"
            referrerPolicy="no-referrer"
          />
          <div className="text-5xl md:text-7xl font-meme mb-6 uppercase italic leading-none">MAKE PUMP FUN AGAIN</div>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-black uppercase tracking-tight mb-12 opacity-90 leading-tight">
            The mission to make memecoins fun again starts with YOU. $MPFA TO THE WORLD!
          </p>
          <div className="flex justify-center gap-8">
            <a 
              href="https://t.me/makepumpfunagain" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-5 rounded-2xl hover:scale-110 transition-transform pump-shadow border-2 border-white"
            >
              <Send className="w-8 h-8" />
            </a>
            <a href="#" className="bg-white text-black p-5 rounded-2xl hover:scale-110 transition-transform pump-shadow border-2 border-black"><TrendingUp className="w-8 h-8" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
