import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Copy, 
  Check, 
  TrendingUp, 
  ShieldCheck, 
  Wallet,
  MousePointer2,
  Globe,
  Users,
  Flame,
  Angry
} from 'lucide-react';

const CA = "EafAfGrHP9fy42Y9qcZS8NST1WXudxqtrviS6Jvpump";
const LOGO_URL = "https://pbs.twimg.com/media/HHjYlgGbcAAMA4P?format=jpg&name=small";
const BANNER_URL = "https://pbs.twimg.com/community_banner_img/2051622713463058434/7OPbbyCW?format=jpg&name=small";
const TWITTER_URL = "https://x.com/i/communities/2025572344987521076";

const MEME_IMAGES = [
  "https://pbs.twimg.com/media/HHjdsiaWUAgBlHN?format=jpg&name=360x360",
  "https://pbs.twimg.com/media/HHjc9c5WsAALwbr?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/HHjcElEW8AAWSdl?format=jpg&name=small",
  "https://pbs.twimg.com/media/HHjYOw2X0AkpzM6?format=jpg&name=360x360",
  "https://pbs.twimg.com/media/HHjXxx8WgAcBUqu?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/HHjXaM4WMAEir0I?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/HHjXCNEX0AMKDTT?format=jpg&name=240x240"
];

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isAngry, setIsAngry] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerAngryMode = () => {
    setIsAngry(true);
    setTimeout(() => setIsAngry(false), 3000);
  };

  const AngerDivider = () => (
    <div className="flex items-center justify-center gap-2 my-8">
      <div className="h-[2px] bg-[#FF4500] flex-grow max-w-[100px]" />
      <Flame className={`text-[#FF4500] w-6 h-6 ${isAngry ? 'animate-ping' : 'animate-bounce'}`} />
      <div className="h-[2px] bg-[#FF4500] flex-grow max-w-[100px]" />
    </div>
  );

  return (
    <div className={`min-h-screen bg-white text-black font-sans selection:bg-[#FF4500] selection:text-white relative overflow-x-hidden ${isAngry ? 'flash-shake' : ''}`}>
      {/* Background Floating Logos */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-bg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--duration': `${4 + Math.random() * 6}s`,
            } as any}
          >
            <img 
              src={LOGO_URL} 
              alt="Floating Logo" 
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-black/20"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 flex justify-between items-center bg-white border-b-4 border-black">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Coraje Logo" 
            className="w-12 h-12 rounded-full border-2 border-black"
            referrerPolicy="no-referrer"
          />
          <span className="heading-bold text-2xl tracking-tighter hidden sm:block italic">CORAJE</span>
          <span className="heading-bold text-2xl tracking-tighter sm:hidden">$CORAJE</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 rounded-lg hover:bg-[#FF4500] transition-colors coraje-shadow"
            title="Twitter"
          >
            <XIcon className="w-6 h-6" />
          </a>
          <button className="bg-[#FF4500] text-white px-6 py-3 rounded-lg font-black text-sm uppercase border-2 border-black coraje-shadow-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            BUY $CORAJE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12"
        >
          <img 
            src={BANNER_URL} 
            alt="Coraje Banner" 
            className="w-full h-auto rounded-3xl coraje-border coraje-shadow object-cover md:h-[400px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl mb-6 heading-bold leading-none tracking-tight flex flex-col italic"
        >
          <span>ANGRIEST LITTLE</span>
          <span className="text-[#FF4500]">GUY EVER</span>
        </motion.h1>
        
        <div className="flex flex-col items-center gap-4">
          <AngerDivider />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={triggerAngryMode}
            className="bg-black text-white px-8 py-4 rounded-full font-black text-xl flex items-center gap-2 border-4 border-[#FF4500] shadow-[0_0_20px_rgba(255,69,0,0.5)] active:shadow-none transition-all group"
          >
            <Angry className={`w-8 h-8 group-hover:rotate-12 transition-transform ${isAngry ? 'text-red-500 scale-125' : ''}`} />
            ANGRY MODE
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#FF4500] text-white px-10 py-3 rounded-lg font-black text-3xl sm:text-5xl mb-10 inline-block coraje-shadow-black border-2 border-black -rotate-1"
        >
          $CORAJE
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl text-xl sm:text-3xl text-black font-bold leading-tight mb-12 uppercase italic"
        >
          "This is Coraje. He is the <span className="text-[#FF4500]">angriest little guy</span> in the world. By volume at least. He's actually a pretty normal amount of angry, just packed into a <span className="text-[#FF4500]">very tiny puppy</span>."
        </motion.p>

        {/* Contract Address Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-4 border-black p-6 rounded-2xl w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 coraje-shadow"
        >
          <div className="flex flex-col items-center md:items-start overflow-hidden w-full">
            <span className="text-xs uppercase font-black tracking-widest text-black/50 mb-1">Contract Address (Solana)</span>
            <code className="text-lg sm:text-2xl font-mono text-black break-all w-full text-center md:text-left font-black select-all tracking-tighter">{CA}</code>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-[#FF4500] hover:bg-black text-white px-8 py-4 rounded-xl font-black whitespace-nowrap border-4 border-black transition-all active:translate-y-1"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED DOG!" : "COPY CONTRACT"}
          </button>
        </motion.div>

        <div className="flex justify-center gap-6 w-full max-w-2xl px-4 text-center">
          <button className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl font-black text-2xl hover:bg-[#FF4500] transition-colors coraje-shadow border-2 border-white">
            <TrendingUp className="w-8 h-8" />
            CHART
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 bg-[#FF4500] text-white px-8 py-5 rounded-2xl font-black text-2xl hover:bg-black transition-colors coraje-shadow-black border-2 border-black">
            <Rocket className="w-8 h-8" />
            BUY
          </button>
        </div>
      </section>

      {/* Meme Gallery Section */}
      <section className="py-24 px-4 bg-gray-100 border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl heading-bold text-center mb-16 italic uppercase underline decoration-[#FF4500] decoration-8">MEME GALLERY</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {MEME_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="coraje-border coraje-shadow-black overflow-hidden bg-white hover:scale-[1.02] transition-transform"
              >
                <img 
                  src={img} 
                  alt={`Coraje Meme ${i}`} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-24 px-4 bg-black text-white overflow-hidden shadow-[inset_0_0_100px_rgba(255,69,0,0.2)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl heading-bold mb-8 leading-none italic text-[#FF4500]">THE RAGE</h2>
            <div className="space-y-8 text-xl md:text-2xl font-bold leading-tight uppercase italic">
              <p className="flex gap-4 items-start">
                <Angry className="w-10 h-10 text-white shrink-0 mt-1" />
                He's small. He's loud. He's absolutely furious for no particular reason.
              </p>
              <p className="flex gap-4 items-start">
                <Users className="w-10 h-10 text-white shrink-0 mt-1" />
                Join the pack of the angriest community on Solana. Tiny puppies, massive volume.
              </p>
              <p className="flex gap-4 items-start">
                <Globe className="w-10 h-10 text-white shrink-0 mt-1" />
                Rage is global. Coraje is taking over your timeline with pure puppy power.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-[#FF4500] p-8 rounded-3xl border-4 border-white coraje-shadow-black rotate-2">
              <div className="heading-bold text-6xl text-white">99%</div>
              <div className="font-black text-white text-xl uppercase">RAGE</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border-4 border-[#FF4500] coraje-shadow -rotate-2">
              <div className="heading-bold text-6xl text-black">1%</div>
              <div className="font-black text-black text-xl uppercase">PUPPY</div>
            </div>
            <div className="col-span-2 bg-[#FF4500] p-10 rounded-3xl border-4 border-black coraje-shadow-black">
              <div className="heading-bold text-7xl text-white italic">MAX VOLUME</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl heading-bold mb-20 italic">HOW TO GET ANGRY</h2>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "GET WALLET",
                desc: "Get Phantom or Solflare. Load it with SOL.",
                color: "bg-[#FF4500] text-white"
              },
              {
                icon: Globe,
                title: "FIND CORAJE",
                desc: "Search $CORAJE on your favorite DEX.",
                color: "bg-black text-white"
              },
              {
                icon: MousePointer2,
                title: "SWAP IT",
                desc: "Swap SOL for $CORAJE and hold the rage.",
                color: "bg-[#FF4500] text-white"
              },
              {
                icon: ShieldCheck,
                title: "BE ANGRY",
                desc: "Join the community and bark at everyone.",
                color: "bg-black text-white"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${step.color} p-10 rounded-3xl border-4 border-black coraje-shadow transition-all hover:scale-105 group relative overflow-hidden`}
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
      <footer className="py-24 px-4 bg-[#FF4500] text-white border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url(${LOGO_URL})`, backgroundSize: '150px' }} />
        <div className="relative z-10">
          <img 
            src={LOGO_URL} 
            alt="Coraje Footer Logo" 
            className="w-32 h-32 mx-auto mb-10 rounded-full border-4 border-black coraje-shadow-black"
            referrerPolicy="no-referrer"
          />
          <div className="text-6xl md:text-9xl heading-bold mb-8 leading-none italic tracking-tighter">CORAJE</div>
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl font-black uppercase italic mb-12 leading-none">
            THE ANGRY PUPPY TAKEOVER. BARK BARK BARK!
          </p>
          <div className="flex justify-center gap-10">
            <a 
              href={TWITTER_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-6 rounded-2xl hover:bg-white hover:text-black transition-all coraje-shadow border-2 border-white flex items-center justify-center"
            >
              <XIcon className="w-10 h-10" />
            </a>
            <a href="#" className="bg-white text-black p-6 rounded-2xl hover:bg-black hover:text-white transition-all coraje-shadow-black border-2 border-black text-3xl font-black flex items-center gap-4 uppercase">
              <TrendingUp className="w-10 h-10" />
              CHART
            </a>
          </div>
          <div className="mt-20 font-black text-sm uppercase tracking-widest opacity-80">
            © 2026 CORAJE. THE ANGRIEST COIN ON SOLANA.
          </div>
        </div>
      </footer>
    </div>
  );
}
