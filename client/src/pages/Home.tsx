import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { HOOTI_CONFIG } from "@/lib/config";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Collection Section */}
      <section id="collection" className="py-32 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">New Drops</span>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter">
              Última Colección
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right md:text-left">
            Piezas limitadas diseñadas para destacar en la jungla de concreto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOOTI_CONFIG.products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </section>

      {/* Values/Marquee Section */}
      <div className="py-20 bg-white text-black overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none">
              Not Just a Brand.<br />It's a Statement.
            </h3>
            <p className="text-lg md:text-xl font-medium opacity-80">
              Cada prenda es construida con atención obsesiva al detalle. Materiales premium, cortes innovadores y una estética que desafía lo convencional.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sizing/Info Grid */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <img 
               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
               alt="Fashion Lifestyle"
               className="w-full h-[600px] object-cover filter grayscale contrast-125"
             />
             <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-primary z-[-1]" />
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-3xl font-black font-display uppercase text-primary">
              {HOOTI_CONFIG.sizing.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {HOOTI_CONFIG.sizing.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(HOOTI_CONFIG.sizing.measurements).map(([key, value]) => (
                <div key={key} className="p-4 border border-white/10 hover:border-primary/30 transition-colors bg-white/5">
                  <h4 className="font-bold uppercase text-white mb-2">{key}</h4>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-4 pt-4">
              {HOOTI_CONFIG.sizing.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
