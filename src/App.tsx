import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Rocket, 
  Copy, 
  Check, 
  ExternalLink, 
  TrendingUp, 
  ShieldCheck, 
  Wallet,
  MousePointer2
} from 'lucide-react';

const CA = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const LOGO_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/retardoid.png?v=1776613790";

const Stars = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: number; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            ['--duration' as any]: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-magenta selection:text-white">
      <Stars />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Retardoid" 
            className="w-12 h-12 logo-glow"
            referrerPolicy="no-referrer"
          />
          <span className="text-3xl meme-text italic tracking-tighter">$RETARDOID</span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="tg-btn px-6 py-3 rounded-full flex items-center gap-2 font-black text-sm uppercase"
            title="Telegram"
          >
            <Send className="w-5 h-5" />
            TELEGRAM
          </a>
          <div className="hidden md:block px-6 py-3 border-2 border-white rounded-full font-black uppercase tracking-widest text-xs">
            Solana Mainnet
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full animate-pulse" />
          <motion.img 
            src={LOGO_URL} 
            alt="Retardoid Logo" 
            className="w-64 h-64 md:w-96 md:h-96 relative z-10 drop-shadow-2xl"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl sm:text-8xl md:text-[12rem] mb-4 meme-text"
        >
          Retardoid
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-neon-cyan mb-8 font-black italic uppercase"
        >
          $retardoid
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-xl sm:text-2xl md:text-3xl text-cyan-300 leading-tight font-black italic mb-12 uppercase px-4"
        >
          Retardoid is a low-IQ asteroid who is so incredibly dumb that instead of falling down to Earth, 
          he missed the planet entirely and is now flying full speed TOWARDS THE MOON.
        </motion.p>

        {/* CA Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="ca-box p-4 md:p-6 rounded-lg w-full max-w-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col items-center sm:items-start overflow-hidden w-full">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-1 font-mono font-bold text-center sm:text-left">Contract Address:</span>
            <code className="text-lg sm:text-xl md:text-2xl font-mono text-yellow-400 break-all w-full text-center sm:text-left font-bold select-all leading-tight">{CA}</code>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg font-black whitespace-nowrap border-2 border-white/20"
          >
            {copied ? <Check className="w-4 h-4 text-solana-green" /> : <Copy className="w-4 h-4" />}
            {copied ? "COPIED!" : "COPY CA"}
          </button>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
          <button className="flex items-center justify-center gap-2 bg-magenta px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-black text-lg sm:text-xl hover:scale-105 transition-transform shadow-[4px_4px_0px_white] w-full sm:w-auto">
            <TrendingUp className="w-6 h-6" />
            CHART
          </button>
          <button className="flex items-center justify-center gap-2 bg-cyan-400 text-black px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-black text-lg sm:text-xl hover:scale-105 transition-transform shadow-[4px_4px_0px_magenta] w-full sm:w-auto">
            <Rocket className="w-6 h-6" />
            PUMP.FUN
          </button>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-center mb-12 sm:mb-16 uppercase tracking-[0.2em] sm:tracking-[0.5em] text-neon-pink font-black">How to Buy on Pump.fun</h2>
          
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "GET WALLET",
                desc: "Download Phantom extension"
              },
              {
                icon: Rocket,
                title: "GET $SOL",
                desc: "Get some SOL in it"
              },
              {
                icon: MousePointer2,
                title: "PASTE CA",
                desc: "Paste CA and search on Pump.fun"
              },
              {
                icon: ShieldCheck,
                title: "FULL RETARD",
                desc: "Swap and hold forever"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="step-card p-6 flex flex-col group transition-all hover:bg-white/10"
              >
                <div className="text-neon-cyan font-mono font-bold text-sm mb-2">STEP 0{i + 1}</div>
                <h3 className="text-xl sm:text-2xl mb-2 text-white font-black uppercase leading-tight italic">{step.title}</h3>
                <p className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-widest">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-white/10 relative z-10">
        <img 
          src={LOGO_URL} 
          alt="Retardoid small" 
          className="w-20 h-20 mx-auto mb-6 logo-glow"
          referrerPolicy="no-referrer"
        />
        <div className="text-4xl mb-4 meme-text opacity-100">$RETARDOID</div>
        <p className="text-white/40 text-sm font-black uppercase tracking-[0.2em] mb-8">
          Too dumb for Earth, just right for the Moon.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="tg-btn p-4 rounded-full text-white"><Send className="w-6 h-6" /></a>
          <a href="#" className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors"><TrendingUp className="w-6 h-6" /></a>
        </div>
      </footer>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(26,26,58,0.1)_0%,transparent_70%)] pointer-events-none -z-10" />
    </div>
  );
}
