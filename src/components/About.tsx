import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="about" className="px-20 py-20 border-t border-off-white/10">
      <motion.div 
        className="max-w-2xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xl uppercase tracking-[0.2em] block">About Me</span>
        
        <div className="text-xl text-off-white/80 font-sans leading-relaxed">
          <motion.p whileHover={{ x: 5 }}>
            I'm a graphic designer, event planner, and founder of Appsvenue. I love taking
            creative ideas and turning them into reality, whether that's designing something
            visually stunning or pulling off a flawlessly executed event. Based in Kuwait,
            I've been doing this since 2004. It's all about blending artistic vision with
            solid planning to make things happen.
          </motion.p>
        </div>
        
         <div className="flex flex-row items-center gap-4">
          <button 
            className="hover:scale-110 transition-transform cursor-pointer" 
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause fill="currentColor" className="w-8 h-8 text-accent" />
            ) : (
              <Play fill="currentColor" className="w-8 h-8 text-accent" />
            )}
          </button>
          
          <img 
            src={isPlaying ? "/sound_waves.gif" : "/sound_waves.png"} 
            alt="Sound waves" 
            className="w-10 h-auto object-contain cursor-pointer"
            onClick={togglePlay}
          />
          
          {isPlaying && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();
                  setIsPlaying(true);
                }
              }}
              className="hover:scale-110 transition-transform text-black"
              title="Play from start"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
          )}
          <audio ref={audioRef} src="/about_me.mp3" onEnded={() => setIsPlaying(false)} />
        </div>
      </motion.div>
    </section>
  );
}
