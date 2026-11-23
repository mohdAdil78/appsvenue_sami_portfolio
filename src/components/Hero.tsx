import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="h-screen grid grid-cols-1 md:grid-cols-2 relative bg-black text-white overflow-hidden">
      {/* Slanted, prominent, horizontal reflective bar animation for entire section */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <motion.div 
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-white/10 origin-center"
            initial={{ rotate: 20, x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
            }}
            style={{
                background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
            }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center pl-32 p-20 font-serif text-[96px] leading-[0.9] -tracking-[2px]">
        <motion.h1 
          className="text-[48px] mb-10 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I am
        </motion.h1>
        <motion.h1 
          className="font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Sami Majdi
        </motion.h1>
        <motion.h1 
          className="font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Aboulabbada
        </motion.h1>
        
        <motion.p 
          className="text-[14px] font-sans uppercase tracking-[0.4em] text-accent whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Graphic Designer · Event Architect
        </motion.p>
      </div>
      
      <motion.div 
        className="relative z-10 h-full w-full overflow-hidden flex items-end justify-end !pr-0 !mr-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/sami_hero_section.png"
          alt="Sami Majdi Aboulabbada"
          className="w-[120%] h-[120%] object-contain grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
