import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { HOOTI_CONFIG } from "@/lib/config";
import useEmblaCarousel from "embla-carousel-react";
import { MessageCircle, ArrowLeft, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const id = params ? parseInt(params.id) : null;
  const product = HOOTI_CONFIG.products.find(p => p.id === id);

  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: product.currency,
    maximumFractionDigits: 0
  }).format(product.price);

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me llevo este modelo:\n\n🦉 Hoodie: ${product.name}\n🎨 Color: ${selectedColor?.name || 'N/A'}\n💰 Precio: ${formattedPrice}\n\n¿Podrían confirmarme disponibilidad y forma de pago?`;
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
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="overflow-hidden border border-white/10 bg-card aspect-[4/5] relative group" ref={emblaRef}>
            <div className="flex h-full">
              {product.images.map((src, i) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={i}>
                  <img src={src} className="w-full h-full object-cover" alt={`${product.name} view ${i + 1}`} />
                </div>
              ))}
            </div>
            {/* Nav Hints */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {product.images.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/50 backdrop-blur" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 text-xs font-mono text-muted-foreground">
            <div className="p-4 border border-white/10 bg-white/5 flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <span>Envío Nacional Disponible</span>
            </div>
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

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Color: <span className="text-muted-foreground font-normal">{selectedColor?.name}</span></h3>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 transition-all p-1",
                      selectedColor?.name === color.name ? "border-primary scale-110" : "border-transparent hover:border-white/30"
                    )}
                  >
                    <div 
                      className="w-full h-full rounded-full" 
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-white/10 pt-6 space-y-2 text-sm text-muted-foreground font-mono">
              <div className="flex justify-between"><span>Material</span><span className="text-white">{product.materials}</span></div>
              <div className="flex justify-between"><span>Fit</span><span className="text-white">{product.fit}</span></div>
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
