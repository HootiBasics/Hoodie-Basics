import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { HOOTI_CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {HOOTI_CONFIG.products.map((product, idx) => (
              <CarouselItem key={product.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} index={idx} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
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
      
      {/* Footer / Contact Section Info */}
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
              HOOTI BASICS
            </h3>
            <p className="text-muted-foreground text-lg">
              Nuestros hoodies están diseñados para el día a día sin sacrificar el estilo. Calidad que se siente, diseño que se nota.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 border border-white/10 hover:border-primary/30 transition-colors bg-white/5">
                <h4 className="font-bold uppercase text-white mb-2">Materiales</h4>
                <p className="text-sm text-muted-foreground">Algodón premium de alto gramaje para máxima durabilidad.</p>
              </div>
              <div className="p-4 border border-white/10 hover:border-primary/30 transition-colors bg-white/5">
                <h4 className="font-bold uppercase text-white mb-2">Corte</h4>
                <p className="text-sm text-muted-foreground">Diseño minimalista y moderno que se adapta a tu estilo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

