import { useRoute, useLocation } from "wouter";
import { HOOTI_CONFIG } from "@shared/config";
import useEmblaCarousel from "embla-carousel-react";
import { MessageCircle, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const id = params ? parseInt(params.id) : null;
  const product = HOOTI_CONFIG.products.find(p => p.id === id);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: product.currency,
    maximumFractionDigits: 0
  }).format(product.price);

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me llevo este modelo:\n\n🦉 Hoodie: ${product.name}\n💰 Precio: ${formattedPrice}\n\n¿Podrían confirmarme disponibilidad y forma de pago?`;
    const url = `https://wa.me/${HOOTI_CONFIG.whatsapp.numberClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4">
      <button 
        onClick={() => setLocation("/")}
        className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Volver
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Gallery (Carousel) */}
        <div className="space-y-4">
          <div className="overflow-hidden border border-white/10 bg-card aspect-[4/5] relative group" ref={emblaRef}>
            <div className="flex h-full">
              {product.images.map((src, i) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={i}>
                  <img 
                    src={src} 
                    className="w-full h-full object-cover" 
                    alt={`${product.name} - Imagen ${i + 1}`} 
                  />
                </div>
              ))}
            </div>
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
                  {product.images.map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white/30 backdrop-blur" />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{product.category}</span>
            <h1 className="text-5xl font-black font-display uppercase tracking-tighter text-white mb-4">{product.name}</h1>
            <p className="text-3xl font-mono text-white/90">{formattedPrice}</p>
          </div>

          <div className="space-y-8 flex-grow">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Specs */}
            <div className="border-t border-white/10 pt-6 space-y-2 text-sm text-muted-foreground font-mono">
              <div className="flex justify-between"><span>Material</span><span className="text-white">{product.materials}</span></div>
              <div className="flex justify-between"><span>Fit</span><span className="text-white">{product.fit}</span></div>
              <div className="flex justify-between"><span>Talla</span><span className="text-white">{product.size}</span></div>
              <div className="flex justify-between"><span>Cuidado</span><span className="text-white">{product.care}</span></div>
            </div>
          </div>

          <div className="mt-10 sticky bottom-4 z-20">
            <button
              onClick={handleWhatsAppClick}
              className={cn(
                "w-full py-5 bg-[#25D366] text-white font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] rounded-lg"
              )}
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Me llevo este modelo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
