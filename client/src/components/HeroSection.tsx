import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HOOTI_CONFIG } from "@/lib/config";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 border border-primary/50 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-primary/5 backdrop-blur-sm"
        >
          {HOOTI_CONFIG.hero.badge}
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter leading-[0.9] mb-6 text-white mix-blend-normal">
          STREET<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">WEAR</span><br />
          EVO
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          {HOOTI_CONFIG.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#collection"
            className="group relative px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-primary transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-black transition-colors">Ver Colección</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
}
